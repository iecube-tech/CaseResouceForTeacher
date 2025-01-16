<template>
    <div style="width: 100%;">
        <el-row>
            <el-col :span="20">
                <div v-if="currentVideo">
                    <video ref="myPlayer" class="video-js vjs-default-skin video" preload="auto">
                    </video>
                </div>
            </el-col>
            <el-col :span="4">
                <el-row v-for="(item, i) in videoList" style="overflow: hidden;">
                    <el-button :title="item.name.slice(0, -4)" link @click="changeVideoSource(i)">
                        {{ item.name.slice(0, -4) }}
                    </el-button>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, onBeforeMount, onUnmounted } from 'vue'
import videojs from '@/utils/videoHeader'
import 'video.js/dist/video-js.min.css'

const props = defineProps({
    videoList: Array
})

// videojs 语言设置
const BaseUrl = '/dev-api/video/m3u8/'
const myPlayer = ref()
const playVideo = reactive({
    videoUrl: '',
})
const player = ref()

const currentVideo = ref()

const videoList = ref([])

onBeforeMount(() => {
    videoList.value = props.videoList
    currentVideo.value = videoList.value[0]
})

onMounted(() => {
    setTimeout(() => {
        initVideoSource()
    }, 1000)
})

function initVideoSource() {
    if (currentVideo.value.isReady == 0) {
        return
    }
    playVideo.videoUrl = BaseUrl + currentVideo.value.filename + '.m3u8'

    player.value = videojs(myPlayer.value, {
        controls: true, // 是否显示控制条
        preload: 'auto',
        autoplay: false,
        fluid: true, // 自适应宽高`
        language: 'zh-CN', // 设置语言
        muted: true, // 是否静音
        inactivityTimeout: false,
        controlBar: { // 设置控制条组件
            children: [
                { name: 'playToggle' }, // 播放按钮
                { name: 'currentTimeDisplay' }, // 当前已播放时间
                { name: 'progressControl' }, // 播放进度条
                { name: 'durationDisplay' }, // 总时间
                {
                    name: 'volumePanel', // 音量控制
                    inline: false, // 不使用水平方式
                },
                { name: 'FullscreenToggle' }, // 全屏
            ],
        },
        aspectRatio: "16:9",
        sources: [   // 视频播放资源
            {
                src: playVideo.videoUrl,
                type: 'application/x-mpegURL',
            },
        ],
    })
}

const changeVideoSource = (index) => {
    console.log(BaseUrl + videoList.value[index].filename + '.m3u8')
    if (player.value) {
        if (videoList.value.length > index) {
            // player.value.src(newSource)
            // player.value.pause();
            player.value.src({
                type: 'application/x-mpegURL', // 可以根据视频类型做适配
                src: BaseUrl + videoList.value[index].filename + '.m3u8',
            })
            player.value.load();
            player.value.on('loadedmetadata', function () {
                console.log("loadedmetadata")
                player.value.play();
            });
        }
    }
    else {
        currentVideo.value = videoList.value[index]
        initVideoSource()
    }
    myPlayer.value.dispose()
    myPlayer.value = null
    setTimeout(() => {
        currentVideo.value = videoList.value[index]
        initVideoSource()
    }, 500)
};

onUnmounted(() => {
    if (myPlayer.value) {
        myPlayer.value.dispose()
    }
    myPlayer.value = null
})

</script>