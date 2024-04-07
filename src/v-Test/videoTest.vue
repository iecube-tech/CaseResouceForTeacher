<template>
    <div>
        <video id="my-video" class="video-js vjs-default-skin video" preload="auto">
        </video>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, onBeforeMount } from 'vue'
import videojs from 'video.js/dist/video.min'
import 'video.js/dist/video-js.min.css'
import videoLanguage from 'video.js/dist/lang/zh-CN.json'
import { ElMessage } from 'element-plus';

const props = defineProps({
    video: Object
})


// videojs 语言设置
videojs.addLanguage('zh-CN', videoLanguage)
const BaseUrl = '/dev-api/video/m3u8/'
const myPlayer = ref()
const playVideo = reactive<videoPlayType>({
    videoUrl: '',
})

onBeforeMount(() => {
    if (props.video.isReady == 1) {
        playVideo.videoUrl = BaseUrl + props.video.filename + '.m3u8'
    } else {
        ElMessage.warning("视频资源未就绪，请稍后重试。")
    }
})

onMounted(() => {
    initVideoSource()
})
function initVideoSource() {
    videojs.addLanguage('zh-CN', videoLanguage)
    myPlayer.value = videojs('my-video', {
        controls: true, // 是否显示控制条
        preload: 'auto',
        autoplay: true,
        fluid: true, // 自适应宽高
        language: 'zh-CN', // 设置语言
        muted: false, // 是否静音
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
        sources: [   // 视频播放资源
            {
                src: playVideo.videoUrl,
                type: 'application/x-mpegURL',
            },
        ],
    })
    //  自动播放
    myPlayer.value.play()
}

</script>