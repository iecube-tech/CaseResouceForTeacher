<template>
    <div class="chat-container ist-theam">
        <div class="h-8 flex flex-row p-1" v-if="socket == null">
            <div class="text-center text-red-500">
                连接已断开...
            </div>
            <div class="ml-8">
                <button class="pl-2 pr-2 shadow-md rounded bg-gray-200 hover:bg-gray-400" @click="toInit">
                    重连
                </button>
            </div>
        </div>
        <div class="chat-messages" ref="chatMessages">
            <div v-for="(message, index) in historyMessage" :key="index" :class="['message', userOrAssistent(message)]">
                <textPreview :id="message.id" :content="message.content" />
            </div>

            <div :class="['message', 'bot-message']" v-if="isAssistantTaking">
                {{ currentOutMessage }}
            </div>

            <div v-if="aiStore.waittingMessage" style="width: 100%;  margin-top: 1rem;">
                <el-popover placement="top">
                    <template #reference>
                        <div style="width: 100%; height: 3rem;" v-loading="true"></div>
                    </template>
                    <template #default>
                        <div style="width: 100%; display: flex; justify-content: center; align-items: center;">
                            <el-button type="danger" @click="sendStop">停止</el-button>
                        </div>
                    </template>
                </el-popover>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useChatStore } from '@/stores/aiStore';
import textPreview from '../textPreview/textPreview-small.vue';
import { ElMessage } from 'element-plus';
import { base64DecodeUnicode } from '@/utils/util';
import { useEmdStore } from '@/stores/emdLabStore';

const props = defineProps({
    chatId: {
        type: String,
        required: true
    }
});

const aiStore = useChatStore();
const labStore = useEmdStore();
const chatMessages = ref();
const inputMessage = ref('');


const teachingAssistantQo = ref({
    chatId: props.chatId,
    sectionPrefix: '',
    stuInput: "",
    imgDataurls: []
})
const messages = ref<any[]>([]);
const socket = ref<WebSocket | null>(null);

const historyMessage = ref<any[]>([])

const currentOutMessage = ref()

const isAssistantTaking = ref(false)
const interval = ref() //计时器
const timer = ref() //计时器
const connectCount = ref(1)
const needConnect = ref(true)

const toInit = () => {
    connectCount.value = 1
    needConnect.value = true
    initWebsocket()
}

const textareaRef = ref()
const maxLength = 600;
const currentLength = ref(0);
const adjustTextareaHeight = () => {
    if (textareaRef.value) {
        textareaRef.value.style.height = 'auto';
        textareaRef.value.style.height = textareaRef.value.scrollHeight + 'px';
    }
};
watch(() => inputMessage.value, (newValue) => {
    currentLength.value = newValue.length
    if (newValue.length > maxLength) {
        inputMessage.value = newValue.slice(0, maxLength);
    }
});

const initWebsocket = () => {
    // socket.value = new WebSocket('ws://192.168.1.13:8088/ai/server/assistant/' + props.chatId);
    if (props.chatId == null || !props.chatId) {
        return
    }
    if (!needConnect.value) {
        return
    }
    webSocketClose()
    // socket.value = new WebSocket('/ai-assistant/' + props.chatId, [<string>localStorage.getItem("x-access-token"), 'student']);
    socket.value = new WebSocket('/ai-assistant/' + props.chatId);
    // socket.value = new WebSocket('/ai-assistant/' + props.chatId + '?token=' + <string>localStorage.getItem("x-access-token"));
    socket.value.onopen = () => {
        console.log('start connect to the server');
        if (socket.value?.readyState === 1) {
            interval.value = setInterval(() => {
                // 定时器
                sendHeart(socket.value)
            }, 20000);
        }
    };

    socket.value.onmessage = (event) => {
        connectCount.value = 1
        const resvMessage = JSON.parse(event.data);
        // console.log(resvMessage)
        switch (resvMessage.type) {
            case "current":
                historyMessage.value = resvMessage.current.messages
                historyMessage.value.reverse();
                // console.log(historyMessage.value)
                break;
            case "message-ack":
                console.log(resvMessage)
                aiStore.waittingMessage = true
                historyMessage.value.push(resvMessage.payload)
                break;
            case 'activity-start':
                aiStore.waittingMessage = true
                isAssistantTaking.value = true
                currentOutMessage.value = ''
                aiStore.setChangeRightPaneVisible(true)
                break;
            case "stream":
                aiStore.waittingMessage = false
                if (resvMessage.kind == "chunk") {
                    currentOutMessage.value += resvMessage.payload
                }
                if (resvMessage.kind == "final") {
                    isAssistantTaking.value = false
                }
                break;
            case "message":
                historyMessage.value.push(resvMessage.payload)
                break;
            case "activity-stop":
                isAssistantTaking.value = false
                aiStore.waittingMessage = false
                break;
            case "error":
                ElMessage.error("ai服务断开连接...")
                socket.value?.close()
                break;
        }
        // messages.value.push(message);
        setTimeout(() => {
            chatMessages.value.scrollTop = chatMessages.value.scrollHeight;
        }, 10)
    };

    socket.value.onclose = (event) => {
        console.log('Disconnected from the server');
        socket.value = null
        console.log(event)
        if (event.code == 1001 || event.code == 1000) {
            webSocketClose()
            return
        }
        if (connectCount.value < 3) {
            timer.value = setTimeout(() => {
                initWebsocket();
                connectCount.value++
                console.log("ai对话重连" + connectCount.value + "次")
            }, 5000 * connectCount.value)
        }
    };

    socket.value.onerror = () => {
        console.log('Error from the ws');
        webSocketClose()
    }
};

const sendHeart = (ws: WebSocket | null) => {
    let heart = {
        type: "ping"
    }
    if (!ws) {
        return
    }
    if (ws.readyState == 1) {
        ws.send(JSON.stringify(heart))
    }
}

const webSocketClose = () => {
    if (socket.value) {
        socket.value.close()
        socket.value = null
    }
    clearInterval(interval.value);
    clearTimeout(timer.value);
}

watch(() => socket.value, (newVal) => {
    console.log('ai-socket-ready->' + socket.value?.readyState)
})

watch(() => connectCount.value, (newVal) => {
    if (newVal > 3) {
        webSocketClose()
        needConnect.value = false
    }
})

const userOrAssistent = (message: any) => {
    if (message.role == "user") {
        return "user-message"
    }
    return "bot-message"
}

onMounted(() => {
    setTimeout(() => {
        initWebsocket();
    }, 10);
});

onUnmounted(() => {
    webSocketClose()
});

const answerQo = ref({
    chatId: '',
    question: null,
    stuInput: "",
    sectionPrefix: '',
    imgDataurls: []
})


const sendStop = () => {
    const msg = {
        type: 'stop'
    }
    if (socket.value) {
        socket.value.send(JSON.stringify(msg));
    }
}
</script>

<style scoped>
.chat-container {
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
}

.chat-messages {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: auto;
    padding: 10px;
    scroll-behavior: smooth;
}

.message {
    margin: 5px 0;
    padding: 8px 12px;
    border-radius: 8px;
    display: inline-flex;
    overflow-wrap: anywhere;
}

.user-message {
    background-color: #15803d;
    /* background-color: #6cd383; */
    align-self: flex-end;
}

.ist-theam .user-message p {
    color: #fff;
}

.bot-message {
    background-color: #f0f0f0;
    color: #333;
    align-self: flex-start;
}

.chat-input {
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-top: 1px solid #ccc;
}

.chat-input input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
}
</style>