<template>
    <div>
        <video id="my-video" class="video-js vjs-default-skin video" preload="auto">
        </video>
    </div>
</template>
  
<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import videojs from 'video.js/dist/video.min'
import 'video.js/dist/video-js.min.css'
import videoLanguage from 'video.js/dist/lang/zh-CN.json'
// videojs 语言设置
videojs.addLanguage('zh-CN', videoLanguage)
const myPlayer = ref()
const playVideo = reactive<videoPlayType>({
    videoUrl: '/dev-api/video/m3u8/ee79f6e689c04fb6ba11aa517c880ba5.m3u8',
})
onMounted(() => {
    initVideoSource()
})
function initVideoSource() {
    videojs.addLanguage('zh-CN', videoLanguage)
    const myPlayer = videojs('my-video', {
        controls: true, // 是否显示控制条
        preload: 'auto',
        autoplay: false,
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
    myPlayer.play()
}

</script>