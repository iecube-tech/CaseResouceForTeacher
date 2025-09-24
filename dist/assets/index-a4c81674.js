import{h as Rs,d as Yi,b as oe,a as ce,c as ue,g as ge,f as Qt,l as yl,m as Ds,o as _s,w as xe,i as Le,k as Me,F as gt,j as yt,n as Xt,q as bt,t as He,s as Je,v as Bs,x as Ps,y as Os,_ as Fs,u as bl,z as Lr,G as vl,A as El,B as xl,C as Cl,r as Ir,D as Tl,e as Sl,p as kl,H as Xe,I as wl,J as Ll,K as Il,L as Rl,M as Dl,N as _l,O as Bl,P as Pl,Q as Ol,R as Fl}from"./index-8f9ccc2f.js";import{C as Ml}from"./courseDesign-baa6b6b5.js";import{M as Nl}from"./myCourses-58c4afc4.js";import{r as Ul,M as $l}from"./relpace-5762b57c.js";/* empty css                */import{G as Gl}from"./getCaseVideo-a934e415.js";/* empty css                  */import"./katex-4b21be29.js";import"./getVideo-88887dd2.js";function Kl(a){return Rs({url:"/map/mapping/"+a,method:"GET"})}function Hl(a){return Rs({url:"/md/vo/ar_list/"+a,method:"GET"})}const ql=["id"],zl=Yi({__name:"show",props:{id:String,content:String,element:String,parentId:String,articleId:Number},setup(a){const e=a,t=oe(""),n=oe(""),i=oe([]);t.value=e.id,n.value=e.content;try{i.value=JSON.parse(e.element)}catch{i.value=[]}return setTimeout(()=>{console.log(e.articleId,t.value),Ul(e.articleId,null,null,t.value)},600),(r,s)=>(ce(),ue("div",{id:e.parentId},[ge(Qt($l),{editorId:t.value,modelValue:n.value},null,8,["editorId","modelValue"])],8,ql))}});var Ms={exports:{}};(function(a,e){(function(t,n){a.exports=n()})(self,()=>(()=>{var t={1916:(s,o,l)=>{var d=l(6877);s.exports=function(c){var h,u="",m=(c=c||{}).video,A=c.options,f=d.$escape,g=c.tran,C=c.icons,T=c.index,S=d.$each;return c.$value,c.$index,u+=`<div class="dplayer-mask"></div>
<div class="dplayer-video-wrap">
    `,h=l(1568)(m),u+=h,u+=`
    `,A.logo&&(u+=`
    <div class="dplayer-logo">
        <img src="`,u+=f(A.logo),u+=`">
    </div>
    `),u+=`
    <div class="dplayer-danmaku"`,A.danmaku&&A.danmaku.bottm&&(u+=' style="margin-bottom:',u+=f(A.danmaku.bottm),u+='"'),u+=`>
        <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>
    </div>
    <div class="dplayer-subtitle"></div>
    <div class="dplayer-bezel">
        <span class="dplayer-bezel-icon"></span>
        `,A.danmaku&&(u+=`
        <span class="dplayer-danloading">`,u+=f(g("danmaku-loading")),u+=`</span>
        `),u+=`
        <span class="diplayer-loading-icon">`,u+=C.loading,u+=`</span>
    </div>
</div>
<div class="dplayer-controller-mask"></div>
<div class="dplayer-controller">
    <div class="dplayer-icons dplayer-comment-box">
        <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="`,u+=f(g("setting")),u+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,u+=C.pallette,u+=`</span>
        </button>
        <div class="dplayer-comment-setting-box">
            <div class="dplayer-comment-setting-color">
                <div class="dplayer-comment-setting-title">`,u+=f(g("set-danmaku-color")),u+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,u+=f(T),u+=`" value="#fff" checked>
                    <span style="background: #fff;"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,u+=f(T),u+=`" value="#e54256">
                    <span style="background: #e54256"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,u+=f(T),u+=`" value="#ffe133">
                    <span style="background: #ffe133"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,u+=f(T),u+=`" value="#64DD17">
                    <span style="background: #64DD17"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,u+=f(T),u+=`" value="#39ccff">
                    <span style="background: #39ccff"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,u+=f(T),u+=`" value="#D500F9">
                    <span style="background: #D500F9"></span>
                </label>
            </div>
            <div class="dplayer-comment-setting-type">
                <div class="dplayer-comment-setting-title">`,u+=f(g("set-danmaku-type")),u+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,u+=f(T),u+=`" value="1">
                    <span>`,u+=f(g("top")),u+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,u+=f(T),u+=`" value="0" checked>
                    <span>`,u+=f(g("rolling")),u+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,u+=f(T),u+=`" value="2">
                    <span>`,u+=f(g("bottom")),u+=`</span>
                </label>
            </div>
        </div>
        <input class="dplayer-comment-input" type="text" placeholder="`,u+=f(g("input-danmaku-enter")),u+=`" maxlength="30">
        <button class="dplayer-icon dplayer-send-icon" data-balloon="`,u+=f(g("send")),u+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,u+=C.send,u+=`</span>
        </button>
    </div>
    <div class="dplayer-icons dplayer-icons-left">
        <button class="dplayer-icon dplayer-play-icon">
            <span class="dplayer-icon-content">`,u+=C.play,u+=`</span>
        </button>
        <div class="dplayer-volume">
            <button class="dplayer-icon dplayer-volume-icon">
                <span class="dplayer-icon-content">`,u+=C.volumeDown,u+=`</span>
            </button>
            <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">
                <div class="dplayer-volume-bar">
                    <div class="dplayer-volume-bar-inner" style="background: `,u+=f(A.theme),u+=`;">
                        <span class="dplayer-thumb" style="background: `,u+=f(A.theme),u+=`"></span>
                    </div>
                </div>
            </div>
        </div>
        <span class="dplayer-time">
            <span class="dplayer-ptime">0:00</span> /
            <span class="dplayer-dtime">0:00</span>
        </span>
        `,A.live&&(u+=`
        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: `,u+=f(A.theme),u+=';"></span>',u+=f(g("live")),u+=`</span>
        `),u+=`
    </div>
    <div class="dplayer-icons dplayer-icons-right">
        `,A.video.quality&&(u+=`
        <div class="dplayer-quality">
            <button class="dplayer-icon dplayer-quality-icon">`,u+=f(A.video.quality[A.video.defaultQuality].name),u+=`</button>
            <div class="dplayer-quality-mask">
                <div class="dplayer-quality-list">
                `,S(A.video.quality,function(k,I){u+=`
                    <div class="dplayer-quality-item" data-index="`,u+=f(I),u+='">',u+=f(k.name),u+=`</div>
                `}),u+=`
                </div>
            </div>
        </div>
        `),u+=`
        `,A.screenshot&&(u+=`
        <div class="dplayer-icon dplayer-camera-icon" data-balloon="`,u+=f(g("screenshot")),u+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,u+=C.camera,u+=`</span>
        </div>
        `),u+=`
        `,A.airplay&&(u+=`
        <div class="dplayer-icon dplayer-airplay-icon" data-balloon="`,u+=f(g("airplay")),u+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,u+=C.airplay,u+=`</span>
        </div>
        `),u+=`
        `,A.chromecast&&(u+=`
        <div class="dplayer-icon dplayer-chromecast-icon" data-balloon="`,u+=f(g("chromecast")),u+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,u+=C.chromecast,u+=`</span>
        </div>
        `),u+=`
        <div class="dplayer-comment">
            <button class="dplayer-icon dplayer-comment-icon" data-balloon="`,u+=f(g("send-danmaku")),u+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,u+=C.comment,u+=`</span>
            </button>
        </div>
        `,A.subtitle&&(u+=`
        `,typeof A.subtitle.url=="string"?(u+=`
        <div class="dplayer-subtitle-btn">
            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="`,u+=f(g("hide-subs")),u+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,u+=C.subtitle,u+=`</span>
            </button>
        </div>
        `):(u+=`
        <div class="dplayer-subtitles">
            <button class="dplayer-icon dplayer-subtitles-icon" data-balloon="`,u+=f(g("subtitle")),u+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,u+=C.subtitle,u+=`</span>
            </button>
            <div class="dplayer-subtitles-box">
                <div class="dplayer-subtitles-panel">
                    `,S(A.subtitle.url,function(k,I){u+=`
                        <div class="dplayer-subtitles-item" data-subtitle="`,u+=f(k.url),u+=`">
                            <!-- if lang, show tran(lang). if lang and name, show name + (tran(lang)). if name, show name. off option use lang for translation. -->
                            <span class="dplayer-label">`,u+=f(k.lang?k.name?k.name+" ("+g(k.lang)+")":g(k.lang):k.name),u+=`</span>
                        </div>
                    `}),u+=`
                </div>
            </div>
        </div>
        `),u+=`
        `),u+=`
        <div class="dplayer-setting">
            <button class="dplayer-icon dplayer-setting-icon" data-balloon="`,u+=f(g("setting")),u+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,u+=C.setting,u+=`</span>
            </button>
            <div class="dplayer-setting-box">
                <div class="dplayer-setting-origin-panel">
                    <div class="dplayer-setting-item dplayer-setting-speed">
                        <span class="dplayer-label">`,u+=f(g("speed")),u+=`</span>
                        <div class="dplayer-toggle">`,u+=C.right,u+=`</div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-loop">
                        <span class="dplayer-label">`,u+=f(g("loop")),u+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">
                            <label for="dplayer-toggle"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-showdan">
                        <span class="dplayer-label">`,u+=f(g("show-danmaku")),u+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">
                            <label for="dplayer-toggle-dan"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danunlimit">
                        <span class="dplayer-label">`,u+=f(g("unlimited-danmaku")),u+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-danunlimit-setting-input" type="checkbox" name="dplayer-toggle-danunlimit">
                            <label for="dplayer-toggle-danunlimit"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danmaku">
                        <span class="dplayer-label">`,u+=f(g("opacity-danmaku")),u+=`</span>
                        <div class="dplayer-danmaku-bar-wrap">
                            <div class="dplayer-danmaku-bar">
                                <div class="dplayer-danmaku-bar-inner">
                                    <span class="dplayer-thumb"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dplayer-setting-speed-panel">
                    `,S(A.playbackSpeed,function(k,I){u+=`
                        <div class="dplayer-setting-speed-item" data-speed="`,u+=f(k),u+=`">
                            <span class="dplayer-label">`,u+=f(k===1?g("normal"):k),u+=`</span>
                        </div>
                    `}),u+=`
                </div>
            </div>
        </div>
        <div class="dplayer-full">
            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="`,u+=f(g("web-fullscreen")),u+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,u+=C.fullWeb,u+=`</span>
            </button>
            <button class="dplayer-icon dplayer-full-icon" data-balloon="`,u+=f(g("fullscreen")),u+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,u+=C.full,u+=`</span>
            </button>
        </div>
    </div>
    <div class="dplayer-bar-wrap">
        <div class="dplayer-bar-time hidden">00:00</div>
        <div class="dplayer-bar-preview"></div>
        <div class="dplayer-bar">
            <div class="dplayer-loaded" style="width: 0;"></div>
            <div class="dplayer-played" style="width: 0; background: `,u+=f(A.theme),u+=`">
                <span class="dplayer-thumb" style="background: `,u+=f(A.theme),u+=`"></span>
            </div>
        </div>
    </div>
</div>
<div class="dplayer-info-panel dplayer-info-panel-hide">
    <div class="dplayer-info-panel-close">[x]</div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-version">
        <span class="dplayer-info-panel-item-title">Player version</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-fps">
        <span class="dplayer-info-panel-item-title">Player FPS</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-type">
        <span class="dplayer-info-panel-item-title">Video type</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-url">
        <span class="dplayer-info-panel-item-title">Video url</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-resolution">
        <span class="dplayer-info-panel-item-title">Video resolution</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-duration">
        <span class="dplayer-info-panel-item-title">Video duration</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    `,A.danmaku&&(u+=`
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-id">
        <span class="dplayer-info-panel-item-title">Danmaku id</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-api">
        <span class="dplayer-info-panel-item-title">Danmaku api</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-amount">
        <span class="dplayer-info-panel-item-title">Danmaku amount</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    `),u+=`
</div>
<div class="dplayer-menu">
    `,S(A.contextmenu,function(k,I){u+=`
        <div class="dplayer-menu-item">
            <a`,k.link&&(u+=' target="_blank"'),u+=' href="',u+=f(k.link||"javascript:void(0);"),u+='">',k.key&&(u+=" ",u+=f(g(k.key))),k.text&&(u+=" ",u+=f(k.text)),u+=`</a>
        </div>
    `}),u+=`
</div>
<div class="dplayer-notice-list"></div>
<button class="dplayer-mobile-play">
    `,u+=C.play,u+=`
</button>`}},1568:(s,o,l)=>{var d=l(6877);s.exports=function(c){var h="",u=(c=c||{}).enableSubtitle,m=c.subtitle,A=c.current,f=c.airplay,g=c.pic,C=d.$escape,T=c.screenshot,S=c.preload,k=c.url;return u=m&&m.type==="webvtt",h+=`
<video
    class="dplayer-video `,A&&(h+="dplayer-video-current"),h+=`"
    webkit-playsinline
    `,f&&(h+=' x-webkit-airplay="allow" '),h+=`
    playsinline
    `,g&&(h+='poster="',h+=C(g),h+='"'),h+=`
    `,(T||u)&&(h+='crossorigin="anonymous"'),h+=`
    `,S&&(h+='preload="',h+=C(S),h+='"'),h+=`
    `,f?h+=`
    nosrc
    `:k&&(h+=`
    src="`,h+=C(k),h+=`"
    `),h+=`
    >
    `,f&&(h+=`
    <source src="`,h+=C(k),h+=`">
    `),h+=`
    `,u&&(h+=`
    <track class="dplayer-subtrack" kind="metadata" default src="`,h+=C(typeof m.url=="string"?m.url:m.url[m.index].url),h+=`"></track>
    `),h+`
</video>`}},3399:(s,o,l)=>{l.d(o,{Z:()=>m});var d=l(8955),c=l.n(d),h=l(8160),u=l.n(h)()(c());u.push([s.id,`:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: 12px;
    font-size: var(--balloon-font-size);
    background: rgba(16, 16, 16, 0.95);
    background: var(--balloon-color);
    border-radius: 2px;
    color: #fff;
    color: var(--balloon-text-color);
    border-radius: 2px;
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: rgba(16, 16, 16, 0.95);
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, 4px);
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, 4px);
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(4px * -1));
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: rgba(16, 16, 16, 0.95);
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(4px * -1));
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(4px, -50%);
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: rgba(16, 16, 16, 0.95);
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(4px * -1), -50%);
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: rgba(16, 16, 16, 0.95);
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`,"",{version:3,sources:["webpack://./node_modules/.pnpm/balloon-css@1.2.0/node_modules/balloon-css/balloon.css"],names:[],mappings:"AAAA;EACE,4BAA4B;EAC5B,uCAAuC;EACvC,0BAA0B;EAC1B,yBAAyB;EACzB,mBAAmB,EAAE;;AAEvB;EACE,iBAAiB,EAAE;;AAErB;EACE,kBAAkB;EAClB,eAAe,EAAE;EACjB;IACE,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,cAAc;IACd,wIAAwI;IACxI,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,eAAmC;IAAnC,mCAAmC;IACnC,kCAAgC;IAAhC,gCAAgC;IAChC,kBAAkB;IAClB,WAAgC;IAAhC,gCAAgC;IAChC,kBAA2C;IAA3C,2CAA2C;IAC3C,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,WAAW,EAAE;EACf;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,wCAAsC;IAAtC,sCAAsC;IACtC,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,WAAW;IACX,kBAAkB;IAClB,WAAW,EAAE;EACf;IACE,UAAU;IACV,oBAAoB,EAAE;EACxB;IACE,qJAAqJ,EAAE;EACzJ;IACE,gBAAgB,EAAE;EACpB;IACE,qBAAqB;IACrB,sBAAsB,EAAE;EAC1B;IACE,gBAAgB,EAAE;EACpB;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,OAAO,EAAE;EACX;IACE,SAAS,EAAE;EACb;IACE,QAAQ,EAAE;EACZ;IACE,UAAU,EAAE;EACd;IACE,0BAA0B,EAAE;EAC9B;IACE,0BAA0B,EAAE;EAC9B;IACE,YAAY;IACZ,qBAAqB;IACrB,4BAA4C;IAA5C,4CAA4C,EAAE;EAChD;IACE,mBAAmB,EAAE;EACvB;IACE,SAAS;IACT,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,SAAS;IACT,uCAAuD;IAAvD,uDAAuD,EAAE;EAC3D;IACE,gBAAgB,EAAE;EACpB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,2CAAyC;IAAzC,yCAAyC,EAAE;EAC7C;IACE,SAAS;IACT,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,WAAW;IACX,QAAQ;IACR,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,kBAAkB,EAAE;EACtB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,yCAAuC;IAAvC,uCAAuC,EAAE;EAC3C;IACE,UAAU;IACV,QAAQ;IACR,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,iBAAiB,EAAE;EACrB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,0CAAwC;IAAxC,wCAAwC,EAAE;EAC5C;IACE,mBAAmB,EAAE;EACvB;IACE,WAAW,EAAE;EACf;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;IACd;MACE;QACE,WAAW,EAAE,EAAE;EACrB;IACE,WAAW,EAAE",sourcesContent:[`:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: var(--balloon-font-size);
    background: var(--balloon-color);
    border-radius: 2px;
    color: var(--balloon-text-color);
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`],sourceRoot:""}]);const m=u},3150:(s,o,l)=>{l.d(o,{Z:()=>S});var d=l(8955),c=l.n(d),h=l(8160),u=l.n(h),m=l(3399),A=l(8431),f=l.n(A),g=new URL(l(7831),l.b),C=u()(c());C.i(m.Z);var T=f()(g);C.push([s.id,`@-webkit-keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
@keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
.dplayer {
  position: relative;
  overflow: hidden;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  line-height: 1;
}
.dplayer * {
  box-sizing: content-box;
}
.dplayer svg {
  width: 100%;
  height: 100%;
}
.dplayer svg path,
.dplayer svg circle {
  fill: #fff;
}
.dplayer:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-danmaku {
  display: none;
}
.dplayer.dplayer-live .dplayer-time {
  display: none;
}
.dplayer.dplayer-live .dplayer-bar-wrap {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-speed {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-loop {
  display: none;
}
.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {
  display: none;
}
.dplayer.dplayer-arrow .dplayer-danmaku {
  font-size: 18px;
}
.dplayer.dplayer-arrow .dplayer-icon {
  margin: 0 -3px;
}
.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {
  -webkit-animation-play-state: running;
          animation-play-state: running;
}
@media (min-width: 900px) {
  .dplayer.dplayer-playing .dplayer-controller-mask {
    opacity: 0;
  }
  .dplayer.dplayer-playing .dplayer-controller {
    opacity: 0;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller-mask {
    opacity: 1;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller {
    opacity: 1;
  }
}
.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {
  display: block;
}
.dplayer.dplayer-loading .dplayer-danmaku,
.dplayer.dplayer-paused .dplayer-danmaku,
.dplayer.dplayer-loading .dplayer-danmaku-move,
.dplayer.dplayer-paused .dplayer-danmaku-move {
  -webkit-animation-play-state: paused;
          animation-play-state: paused;
}
.dplayer.dplayer-hide-controller {
  cursor: none;
}
.dplayer.dplayer-hide-controller .dplayer-controller-mask {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-hide-controller .dplayer-controller {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-show-controller .dplayer-controller-mask {
  opacity: 1;
}
.dplayer.dplayer-show-controller .dplayer-controller {
  opacity: 1;
}
.dplayer.dplayer-fulled {
  width: 100% !important;
  height: 100% !important;
}
.dplayer.dplayer-fulled {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: static;
  display: inline-block;
}
.dplayer.dplayer-mobile .dplayer-bar-time {
  display: none;
}
.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-mobile-play {
  display: block;
}
.dplayer-web-fullscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
[data-balloon]:before {
  display: none;
}
[data-balloon]:after {
  padding: 0.3em 0.7em;
  background: rgba(17, 17, 17, 0.7);
}
[data-balloon][data-balloon-pos="up"]:after {
  margin-bottom: 0;
}
.dplayer-bezel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  height: 52px;
  width: 52px;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {
  -webkit-animation: bezel-hide 0.5s linear;
          animation: bezel-hide 0.5s linear;
}
@-webkit-keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
@keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
.dplayer-bezel .dplayer-danloading {
  position: absolute;
  top: 50%;
  margin-top: -7px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  -webkit-animation: my-face 5s infinite ease-in-out;
          animation: my-face 5s infinite ease-in-out;
}
.dplayer-bezel .diplayer-loading-icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  height: 36px;
  width: 36px;
  pointer-events: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {
  display: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {
  -webkit-animation: diplayer-loading-dot-fade 0.8s ease infinite;
          animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  -webkit-animation-delay: 0.4s;
          animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  -webkit-animation-delay: 0.5s;
          animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  -webkit-animation-delay: 0.7s;
          animation-delay: 0.7s;
}
@-webkit-keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
@keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
.dplayer-controller-mask {
  background: url(`+T+`) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  -webkit-animation: my-face 5s infinite ease-in-out;
          animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-moz-placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  -webkit-animation-name: 'danmaku';
          animation-name: 'danmaku';
  -webkit-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-play-state: paused;
          animation-play-state: paused;
}
@-webkit-keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  -webkit-animation-name: 'danmaku-center';
          animation-name: 'danmaku-center';
  -webkit-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-play-state: paused;
          animation-play-state: paused;
}
@-webkit-keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  -webkit-animation: showNotice 0.3s ease 1 forwards;
          animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  -webkit-animation: removeNotice 0.3s ease 1 forwards;
          animation: removeNotice 0.3s ease 1 forwards;
}
@-webkit-keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@-webkit-keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`,"",{version:3,sources:["webpack://./src/css/global.less","webpack://./src/css/index.less","webpack://./src/css/player.less","webpack://./src/css/balloon.less","webpack://./src/css/bezel.less","webpack://./src/css/video.less","webpack://./src/css/controller.less","webpack://./src/css/danmaku.less","webpack://./src/css/logo.less","webpack://./src/css/menu.less","webpack://./src/css/notice.less","webpack://./src/css/subtitle.less","webpack://./src/css/info-panel.less"],names:[],mappings:"AAAA;EACI;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;;IAEI,uCAAA;ECEN;AACF;ADzJA;EACI;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;;IAEI,uCAAA;ECEN;AACF;ACzJA;EACI,kBAAA;EACA,gBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,cAAA;AD2JJ;AC/JA;EAOQ,uBAAA;AD2JR;AClKA;EAWQ,WAAA;EACA,YAAA;AD0JR;ACtKA;;EAgBY,UAAA;AD0JZ;ACtJI;EACI,WAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,UAAA;EACA,0BAAA;ADwJR;ACpJI;;;EAKY,aAAA;ADoJhB;ACzJI;EAUQ,aAAA;ADkJZ;AC5JI;EAcQ,aAAA;ADiJZ;AC7II;EAEQ,aAAA;AD8IZ;AChJI;EAKQ,aAAA;AD8IZ;ACnJI;EAQQ,aAAA;AD8IZ;ACtJI;EAWQ,aAAA;AD8IZ;AC3IQ;EAEQ,aAAA;AD4IhB;ACvII;EAEQ,eAAA;ADwIZ;AC1II;EAKQ,cAAA;ADwIZ;ACpII;EAEQ,qCAAA;UAAA,6BAAA;ADqIZ;AClIQ;EAAA;IAEQ,UAAA;EDoId;ECtIM;IAKQ,UAAA;EDoId;ECjIU;IAEQ,UAAA;EDkIlB;ECpIU;IAKQ,UAAA;EDkIlB;AACF;AC7HI;EAEQ,cAAA;AD8HZ;AC1HI;;;;EAIQ,oCAAA;UAAA,4BAAA;AD4HZ;ACxHI;EACI,YAAA;AD0HR;AC3HI;EAIQ,UAAA;EACA,2BAAA;AD0HZ;AC/HI;EAQQ,UAAA;EACA,2BAAA;AD0HZ;ACvHI;EAEQ,UAAA;ADwHZ;AC1HI;EAKQ,UAAA;ADwHZ;ACrHI;EAKI,sBAAA;EACA,uBAAA;ADuHR;AC7HI;EACI,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;ADyHR;ACrHI;;;;;EAOY,aAAA;ADqHhB;AC5HI;EAUY,gBAAA;EACA,qBAAA;ADqHhB;AChII;EAgBQ,aAAA;ADmHZ;AChHQ;EAEQ,aAAA;ADiHhB;ACtII;EA0BQ,cAAA;AD+GZ;ACzGA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;AD2GJ;AElSA;EACI,aAAA;AFoSJ;AEjSA;EACI,oBAAA;EACA,iCAAA;AFmSJ;AEhSA;EACI,gBAAA;AFkSJ;AG9SA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;EACA,oBAAA;AHgTJ;AGxTA;EAUQ,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AHiTR;AGhTQ;EACI,yCAAA;UAAA,iCAAA;AHkTZ;AGhTQ;EACI;IACI,UAAA;IACA,mBAAA;EHkTd;EGhTU;IACI,UAAA;IACA,mBAAA;EHkTd;AACF;AG1TQ;EACI;IACI,UAAA;IACA,mBAAA;EHkTd;EGhTU;IACI,UAAA;IACA,mBAAA;EHkTd;AACF;AGnVA;EAqCQ,kBAAA;EACA,QAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,kDAAA;UAAA,0CAAA;AHiTR;AG7VA;EA+CQ,aAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,oBAAA;AHiTR;AGvWA;EAwDY,aAAA;AHkTZ;AG1WA;EA2DY,+DAAA;UAAA,uDAAA;EACA,UAAA;EACA,yBAAA;AHkTZ;AI/WC;EDgEmB,6BAAA;UAAA,qBAAA;AHkTpB;AIlXC;EDgEmB,6BAAA;UAAA,qBAAA;AHqTpB;AIrXC;EDgEmB,6BAAA;UAAA,qBAAA;AHwTpB;AIxXC;EDgEmB,6BAAA;UAAA,qBAAA;AH2TpB;AI3XC;EDgEmB,6BAAA;UAAA,qBAAA;AH8TpB;AI9XC;EDgEmB,6BAAA;UAAA,qBAAA;AHiUpB;AIjYC;EDgEmB,6BAAA;UAAA,qBAAA;AHoUpB;AGhUQ;EACI;IACI,YAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,4BAAA;EHkUd;AACF;AG9UQ;EACI;IACI,YAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,4BAAA;EHkUd;AACF;AKlZA;EACI,mEAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,yBAAA;ALoZJ;AKjZA;EACI,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,yBAAA;ALmZJ;AKlZI;EAEQ,aAAA;ALmZZ;AKrZI;EAKQ,cAAA;ALmZZ;AKjaA;EAkBQ,cAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,wBAAA;EACA,WAAA;ALkZR;AKjZQ;EAEQ,mBAAA;ALkZhB;AKpZQ;EAKQ,cAAA;EACA,UAAA;EACA,2BAAA;EACA,QAAA;EACA,WAAA;ALkZhB;AKnbA;EAqCY,WAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,2BAAA;EACA,gCAAA;ALiZZ;AKhZY;EAEQ,cAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AKxcA;EA2DgB,aAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,2BAAA;ALgZhB;AKrdA;EAyEY,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,aAAA;EACA,6BAAA;AL+YZ;AK5dA;EAgFY,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,oBAAA;AL+YZ;AKneA;EA0FY,kBAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,oCAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AL4YZ;AK7ZY;EACI,UAAA;AL+ZhB;AKvfA;EA2GY,kBAAA;EACA,WAAA;EACA,WAAA;EACA,oCAAA;EACA,eAAA;AL+YZ;AK9fA;EAiHgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,oCAAA;EACA,WAAA;EACA,yBAAA;EACA,kBAAA;ALgZhB;AKxgBA;EA2HgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;ALgZhB;AKhhBA;EAkIoB,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALiZpB;AK7hBA;EAkJQ,YAAA;EACA,kBAAA;EACA,SAAA;AL8YR;AK7YQ;EACI,aAAA;EACA,kBAAA;EACA,gCAAA;EACA,UAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;AL+YZ;AKxZQ;EAWQ,YAAA;ALgZhB;AK3ZQ;EAcQ,kBAAA;EACA,OAAA;EACA,MAAA;ALgZhB;AKhaQ;EAmBQ,kBAAA;EACA,QAAA;EACA,MAAA;ALgZhB;AKraQ;EAwBQ,kBAAA;EACA,iCAAA;EACA,YAAA;EACA,OAAA;EACA,uCAAA;EACA,kBAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;EACA,gCAAA;EACA,mBAAA;ALgZhB;AK/YgB;EACI,mBAAA;ALiZpB;AKrbQ;EAuCY,aAAA;ALiZpB;AKxbQ;EA0CY,eAAA;ALiZpB;AK3bQ;EA6CY,eAAA;EACA,WAAA;EACA,iBAAA;ALiZpB;AKhcQ;EAkDY,YAAA;ALiZpB;AKncQ;EAoDgB,kBAAA;ALkZxB;AK/YwB;EAEQ,0BAAA;ALgZhC;AK7YwB;EAEQ,0BAAA;AL8YhC;AK5cQ;EAmEgB,UAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,eAAA;EACA,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,eAAA;AL4YxB;AKzdQ;EAgFgB,mBAAA;EACA,cAAA;AL4YxB;AK7dQ;EAqFY,YAAA;AL2YpB;AKheQ;EAuFgB,YAAA;EACA,YAAA;EACA,qBAAA;AL4YxB;AKreQ;EA4FgB,WAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;AL4YxB;AK3YwB;EACI,kDAAA;UAAA,0CAAA;AL6Y5B;AKhfQ;EAyGQ,aAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,YAAA;EACA,sBAAA;EACA,WAAA;EACA,WAAA;AL0YhB;AKzYgB;EACI,WAAA;EACA,YAAA;AL2YpB;AK7YgB;EACI,WAAA;EACA,YAAA;AL2YpB;AKzYgB;EACI,aAAA;AL2YpB;AKvYQ;EAEQ,YAAA;ALwYhB;AKrYQ;EACI,WAAA;ALuYZ;AKxYQ;EAGQ,YAAA;ALwYhB;AKpqBA;;EAiSY,iBAAA;EACA,WAAA;EACA,uCAAA;EACA,sBAAA;EACA,eAAA;EACA,eAAA;ALuYZ;AK7qBA;EAySY,qBAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,kBAAA;ALuYZ;AKtrBA;EAkTY,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EACA,sBAAA;EACA,qBAAA;ALuYZ;AKjsBA;EA4TgB,gCAAA;EACA,YAAA;ALwYhB;AKtYY;EAEQ,UAAA;ALuYpB;AKpYY;EACI,WAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;ALsYhB;AKpYY;EACI,qBAAA;ALsYhB;AKpYY;EACI,kBAAA;ALsYhB;AKpYY;EACI,WAAA;ALsYhB;AKvtBA;EAqVY,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,YAAA;ALqYZ;AKpYY;EAEQ,WAAA;ALqYpB;AKvYY;EAKQ,mBAAA;ALqYpB;AKlYY;EAEQ,WAAA;ALmYpB;AKrYY;EAKQ,mBAAA;ALmYpB;AKzuBA;EA0WgB,qBAAA;EACA,qBAAA;EACA,sBAAA;EACA,YAAA;ALkYhB;AK/uBA;EA+WoB,kBAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;ALmYpB;AKvvBA;EAsXwB,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;ALoYxB;AK/vBA;EA6X4B,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALqY5B;AK5wBA;EA8YY,qBAAA;EACA,YAAA;ALiYZ;AKhxBA;EAkZY,qBAAA;EACA,YAAA;ALiYZ;AKpxBA;EAqZgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,0BAAA;EAAA,uBAAA;EAAA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,cAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,cAAA;ALmYpB;AKjYgB;EACI,mBAAA;ALmYpB;AKzyBA;EA0agB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALkYhB;AKjYgB;EACI,0CAAA;ALmYpB;AKnzBA;EAqbY,qBAAA;EACA,YAAA;ALiYZ;AKvzBA;EAwbgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,aAAA;ALmYpB;AKlYoB;EACI,cAAA;ALoYxB;AKjYgB;EACI,mBAAA;ALmYpB;AKjYgB;EACI,WAAA;EACA,kBAAA;ALmYpB;AKjYgB;EAEQ,aAAA;ALkYxB;AKpYgB;EAKQ,cAAA;ALkYxB;AKv1BA;;EA2dgB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALgYhB;AK/XgB;;EACI,0CAAA;ALkYpB;AKn2BA;EAqegB,cAAA;ALiYhB;AKt2BA;EAueoB,eAAA;EACA,eAAA;ALkYpB;AKhYgB;EAEQ,aAAA;ALiYxB;AKnYgB;EAKQ,qBAAA;ALiYxB;AK9XgB;EAEQ,aAAA;AL+XxB;AKjYgB;EAKQ,qBAAA;AL+XxB;AKt3BA;EA2foB,eAAA;EACA,sBAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;AL8XpB;AK93BA;EAkgBwB,kBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;AL+XxB;AKt4BA;EAygB4B,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;ALgY5B;AK/4BA;EAihBgC,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,gBAAA;ALiYhC;AK55BA;EAmiBY,qBAAA;EACA,YAAA;EACA,kBAAA;AL4XZ;AK3XY;EAEQ,cAAA;AL4XpB;AKp6BA;EA4iBgB,kBAAA;EACA,UAAA;EACA,UAAA;EACA,aAAA;AL2XhB;AK16BA;EAmjBY,kBAAA;EACA,qBAAA;EACA,YAAA;EACA,UAAA;AL0XZ;AKzXY;EAEQ,cAAA;AL0XpB;AK5XY;EAKQ,cAAA;AL0XpB;AKt7BA;EAgkBgB,aAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,oBAAA;ALyXhB;AK97BA;EAwkBgB,aAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;ALyXhB;AK18BA;EAolBgB,YAAA;EACA,sBAAA;EACA,eAAA;EACA,iBAAA;ALyXhB;AKxXgB;EACI,0CAAA;AL0XpB;AKn9BA;EA8lBY,qBAAA;EACA,YAAA;ALwXZ;AKv9BA;EAkmBY,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,mBAAA;ALwXZ;AK99BA;EAymBY,WAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;ALwXZ;AKx+BA;EAknBgB,aAAA;EACA,YAAA;EACA,aAAA;ALyXhB;AK7+BA;EAunBgB,qBAAA;EACA,kBAAA;EACA,iCAAA;EACA,yBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,sBAAA;EACA,eAAA;EACA,4BAAA;ALyXhB;AKz/BA;EAmoBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,mBAAA;EACA,4BAAA;ALyXhB;AKpgCA;EA8oBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,OAAA;EACA,MAAA;EACA,mBAAA;EACA,gBAAA;EACA,4BAAA;EACA,wCAAA;EACA,YAAA;EACA,WAAA;ALyXhB;AKjhCA;EA2pBgB,sCAAA;ALyXhB;AKphCA;EA8pBgB,WAAA;EACA,oCAAA;ALyXhB;AKxhCA;EAkqBgB,UAAA;ALyXhB;AKnXA;EACI,aAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EAEA,SAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;ALoXJ;AMpjCA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;ANsjCJ;AM7jCA;EASQ,qBAAA;EACA,oBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,eAAA;EACA,mBAAA;EACA,iDAAA;ANujCR;AMtjCQ;EACI,kBAAA;EACA,kBAAA;ANwjCZ;AMzkCA;EAqBQ,kBAAA;EACA,QAAA;EACA,2BAAA;ANujCR;AMtjCQ;EACI,sBAAA;EACA,iCAAA;UAAA,yBAAA;EACA,yCAAA;UAAA,iCAAA;EACA,oCAAA;UAAA,4BAAA;ANwjCZ;AMrjCI;EACI;IACI,2BAAA;ENujCV;AACF;AM1jCI;EACI;IACI,2BAAA;ENujCV;AACF;AMzlCA;;EAsCQ,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;ANujCR;AMtjCQ;;EACI,uBAAA;EACA,wCAAA;UAAA,gCAAA;EACA,yCAAA;UAAA,iCAAA;EACA,oCAAA;UAAA,4BAAA;ANyjCZ;AMtjCI;EACI;IACI,mBAAA;ENwjCV;EMtjCM;IACI,mBAAA;ENwjCV;AACF;AM9jCI;EACI;IACI,mBAAA;ENwjCV;EMtjCM;IACI,mBAAA;ENwjCV;AACF;AO/mCA;EACI,oBAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,gBAAA;APinCJ;AOvnCA;EAQQ,eAAA;EACA,gBAAA;EACA,gBAAA;APknCR;AQ5nCA;EACI,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,kCAAA;EACA,cAAA;EACA,gBAAA;EACA,UAAA;EACA,aAAA;AR8nCJ;AQ7nCI;EACI,cAAA;AR+nCR;AQzoCA;EAaQ,YAAA;EACA,sBAAA;EACA,eAAA;AR+nCR;AQ9nCQ;EACI,0CAAA;ARgoCZ;AQjpCA;EAqBY,eAAA;EACA,iBAAA;EACA,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,WAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AR+nCZ;AQ9nCY;EACI,qBAAA;ARgoChB;ASjqCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;ATmqCJ;AStqCA;EAMQ,kBAAA;EACA,iCAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,cAAA;EACA,oBAAA;EACA,kDAAA;UAAA,0CAAA;ATmqCR;AShrCA;EAiBQ,oDAAA;UAAA,4CAAA;ATkqCR;AS9pCA;EACI;IACI,UAAA;IACA,YAAA;IACA,aAAA;ETgqCN;ES9pCE;IACI,iBAAA;IACA,eAAA;IACA,eAAA;ETgqCN;AACF;AS1qCA;EACI;IACI,UAAA;IACA,YAAA;IACA,aAAA;ETgqCN;ES9pCE;IACI,iBAAA;IACA,eAAA;IACA,eAAA;ETgqCN;AACF;AS7pCA;EACI;IACI,iBAAA;IACA,eAAA;IACA,eAAA;ET+pCN;ES7pCE;IACI,eAAA;ET+pCN;ES7pCE;IACI,YAAA;IACA,iBAAA;ET+pCN;ES7pCE;IACI,UAAA;IACA,aAAA;IACA,YAAA;ET+pCN;AACF;AShrCA;EACI;IACI,iBAAA;IACA,eAAA;IACA,eAAA;ET+pCN;ES7pCE;IACI,eAAA;ET+pCN;ES7pCE;IACI,YAAA;IACA,iBAAA;ET+pCN;ES7pCE;IACI,UAAA;IACA,aAAA;IACA,YAAA;ET+pCN;AACF;AUltCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;EACA,QAAA;EACA,kBAAA;EACA,WAAA;EACA,iDAAA;EACA,eAAA;AVotCJ;AUntCI;EACI,aAAA;AVqtCR;AI/tCA;EACI,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,UAAA;EACA,aAAA;AJiuCJ;AIhuCI;EACI,cAAA;AJkuCR;AI9tCA;EACI,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AJguCJ;AIruCA;EAOQ,WAAA;EACA,YAAA;EACA,aAAA;AJiuCR;AI1uCA;EAYQ,cAAA;AJiuCR;AI7uCA;EAeQ,aAAA;AJiuCR;AW7vCA;EACI,kBAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;EACA,iCAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AX+vCJ;AW7vCI;EACI,aAAA;AX+vCR;AW3wCA;EAgBQ,eAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;AX8vCR;AW1vCQ;EACI,qBAAA;EACA,sBAAA;EACA,iBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AX4vCZ;AWzxCA;EAkCQ,YAAA;EACA,iBAAA;EACA,kBAAA;AX0vCR;AW9xCA;EAwCQ,YAAA;AXyvCR",sourcesContent:[`@keyframes my-face {
    2% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    4% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    6% {
        transform: translate(0, 1.5px) rotate(-1.5deg);
    }
    8% {
        transform: translate(0, -1.5px) rotate(-1.5deg);
    }
    10% {
        transform: translate(0, 2.5px) rotate(1.5deg);
    }
    12% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    14% {
        transform: translate(0, -1.5px) rotate(1.5deg);
    }
    16% {
        transform: translate(0, -0.5px) rotate(-1.5deg);
    }
    18% {
        transform: translate(0, 0.5px) rotate(-1.5deg);
    }
    20% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    22% {
        transform: translate(0, 0.5px) rotate(-1.5deg);
    }
    24% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    26% {
        transform: translate(0, 0.5px) rotate(0.5deg);
    }
    28% {
        transform: translate(0, 0.5px) rotate(1.5deg);
    }
    30% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    32% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    34% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    36% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    38% {
        transform: translate(0, 1.5px) rotate(-1.5deg);
    }
    40% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    42% {
        transform: translate(0, 2.5px) rotate(-1.5deg);
    }
    44% {
        transform: translate(0, 1.5px) rotate(0.5deg);
    }
    46% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    48% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    50% {
        transform: translate(0, 0.5px) rotate(0.5deg);
    }
    52% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    54% {
        transform: translate(0, -1.5px) rotate(1.5deg);
    }
    56% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    58% {
        transform: translate(0, 0.5px) rotate(2.5deg);
    }
    60% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    62% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    64% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    66% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    68% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    70% {
        transform: translate(0, 1.5px) rotate(0.5deg);
    }
    72% {
        transform: translate(0, 2.5px) rotate(1.5deg);
    }
    74% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    76% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    78% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    80% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    82% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    84% {
        transform: translate(0, 1.5px) rotate(2.5deg);
    }
    86% {
        transform: translate(0, -1.5px) rotate(-1.5deg);
    }
    88% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    90% {
        transform: translate(0, 2.5px) rotate(-0.5deg);
    }
    92% {
        transform: translate(0, 0.5px) rotate(-0.5deg);
    }
    94% {
        transform: translate(0, 2.5px) rotate(0.5deg);
    }
    96% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    98% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    0%,
    100% {
        transform: translate(0, 0) rotate(0deg);
    }
}`,`@import '../../node_modules/balloon-css/balloon.css';
@keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
.dplayer {
  position: relative;
  overflow: hidden;
  user-select: none;
  line-height: 1;
}
.dplayer * {
  box-sizing: content-box;
}
.dplayer svg {
  width: 100%;
  height: 100%;
}
.dplayer svg path,
.dplayer svg circle {
  fill: #fff;
}
.dplayer:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-danmaku {
  display: none;
}
.dplayer.dplayer-live .dplayer-time {
  display: none;
}
.dplayer.dplayer-live .dplayer-bar-wrap {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-speed {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-loop {
  display: none;
}
.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {
  display: none;
}
.dplayer.dplayer-arrow .dplayer-danmaku {
  font-size: 18px;
}
.dplayer.dplayer-arrow .dplayer-icon {
  margin: 0 -3px;
}
.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {
  animation-play-state: running;
}
@media (min-width: 900px) {
  .dplayer.dplayer-playing .dplayer-controller-mask {
    opacity: 0;
  }
  .dplayer.dplayer-playing .dplayer-controller {
    opacity: 0;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller-mask {
    opacity: 1;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller {
    opacity: 1;
  }
}
.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {
  display: block;
}
.dplayer.dplayer-loading .dplayer-danmaku,
.dplayer.dplayer-paused .dplayer-danmaku,
.dplayer.dplayer-loading .dplayer-danmaku-move,
.dplayer.dplayer-paused .dplayer-danmaku-move {
  animation-play-state: paused;
}
.dplayer.dplayer-hide-controller {
  cursor: none;
}
.dplayer.dplayer-hide-controller .dplayer-controller-mask {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-hide-controller .dplayer-controller {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-show-controller .dplayer-controller-mask {
  opacity: 1;
}
.dplayer.dplayer-show-controller .dplayer-controller {
  opacity: 1;
}
.dplayer.dplayer-fulled {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  width: 100% !important;
  height: 100% !important;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: static;
  display: inline-block;
}
.dplayer.dplayer-mobile .dplayer-bar-time {
  display: none;
}
.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-mobile-play {
  display: block;
}
.dplayer-web-fullscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
[data-balloon]:before {
  display: none;
}
[data-balloon]:after {
  padding: 0.3em 0.7em;
  background: rgba(17, 17, 17, 0.7);
}
[data-balloon][data-balloon-pos="up"]:after {
  margin-bottom: 0;
}
.dplayer-bezel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  height: 52px;
  width: 52px;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {
  animation: bezel-hide 0.5s linear;
}
@keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
.dplayer-bezel .dplayer-danloading {
  position: absolute;
  top: 50%;
  margin-top: -7px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-bezel .diplayer-loading-icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  height: 36px;
  width: 36px;
  pointer-events: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {
  display: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {
  animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  animation-delay: 0.7s;
}
@keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
.dplayer-controller-mask {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  animation-name: 'danmaku';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  animation-name: 'danmaku-center';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  animation: removeNotice 0.3s ease 1 forwards;
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`,`.dplayer {
    position: relative;
    overflow: hidden;
    user-select: none;
    line-height: 1;

    * {
        box-sizing: content-box;
    }

    svg {
        width: 100%;
        height: 100%;

        path,
        circle {
            fill: #fff;
        }
    }

    &:-webkit-full-screen {
        width: 100%;
        height: 100%;
        background: #000;
        position: fixed;
        z-index: 100000;
        left: 0;
        top: 0;
        margin: 0;
        padding: 0;
        transform: translate(0, 0);
        
    }

    &.dplayer-no-danmaku {
        .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
            .dplayer-setting-showdan,
            .dplayer-setting-danmaku,
            .dplayer-setting-danunlimit {
                display: none;
            }
        }

        .dplayer-controller .dplayer-icons .dplayer-comment {
            display: none;
        }

        .dplayer-danmaku {
            display: none;
        }
    }

    &.dplayer-live {
        .dplayer-time {
            display: none;
        }
        .dplayer-bar-wrap {
            display: none;
        }
        .dplayer-setting-speed {
            display: none;
        }
        .dplayer-setting-loop {
            display: none;
        }

        &.dplayer-no-danmaku {
            .dplayer-setting {
                display: none;
            }
        }
    }

    &.dplayer-arrow {
        .dplayer-danmaku {
            font-size: 18px;
        }
        .dplayer-icon {
            margin: 0 -3px;
        }
    }

    &.dplayer-playing {
        .dplayer-danmaku .dplayer-danmaku-move {
            animation-play-state: running;
        }

        @media (min-width: 900px) {
            .dplayer-controller-mask {
                opacity: 0;
            }
            .dplayer-controller {
                opacity: 0;
            }

            &:hover {
                .dplayer-controller-mask {
                    opacity: 1;
                }
                .dplayer-controller {
                    opacity: 1;
                }
            }
        }
    }

    &.dplayer-loading {
        .dplayer-bezel .diplayer-loading-icon {
            display: block;
        }
    }

    &.dplayer-loading,
    &.dplayer-paused {
        .dplayer-danmaku,
        .dplayer-danmaku-move {
            animation-play-state: paused;
        }
    }

    &.dplayer-hide-controller {
        cursor: none;

        .dplayer-controller-mask {
            opacity: 0;
            transform: translateY(100%);
        }
        .dplayer-controller {
            opacity: 0;
            transform: translateY(100%);
        }
    }
    &.dplayer-show-controller {
        .dplayer-controller-mask {
            opacity: 1;
        }
        .dplayer-controller {
            opacity: 1;
        }
    }
    &.dplayer-fulled {
        position: fixed;
        z-index: 100000;
        left: 0;
        top: 0;
        width: 100% !important;
        height: 100% !important;
    }
    &.dplayer-mobile {
        .dplayer-controller .dplayer-icons {
            .dplayer-volume,
            .dplayer-camera-icon,
            .dplayer-airplay-icon,
            .dplayer-chromecast-icon,
            .dplayer-play-icon {
                display: none;
            }
            .dplayer-full .dplayer-full-in-icon {
                position: static;
                display: inline-block;
            }
        }

        .dplayer-bar-time {
            display: none;
        }

        &.dplayer-hide-controller {
            .dplayer-mobile-play {
                display: none;
            }
        }

        .dplayer-mobile-play {
            display: block;
        }
    }
}

// To hide scroll bar, apply this class to <body>
.dplayer-web-fullscreen-fix {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
}
`,`@import '../../node_modules/balloon-css/balloon.css';

[data-balloon]:before {
    display: none;
}

[data-balloon]:after {
    padding: 0.3em 0.7em;
    background: rgba(17, 17, 17, 0.7);
}

[data-balloon][data-balloon-pos="up"]:after {
    margin-bottom: 0;
}`,`.dplayer-bezel {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 22px;
    color: #fff;
    pointer-events: none;
    .dplayer-bezel-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -26px 0 0 -26px;
        height: 52px;
        width: 52px;
        padding: 12px;
        box-sizing: border-box;
        background: rgba(0, 0, 0, .5);
        border-radius: 50%;
        opacity: 0;
        pointer-events: none;
        &.dplayer-bezel-transition {
            animation: bezel-hide .5s linear;
        }
        @keyframes bezel-hide {
            from {
                opacity: 1;
                transform: scale(1);
            }
            to {
                opacity: 0;
                transform: scale(2);
            }
        }
    }
    .dplayer-danloading {
        position: absolute;
        top: 50%;
        margin-top: -7px;
        width: 100%;
        text-align: center;
        font-size: 14px;
        line-height: 14px;
        animation: my-face 5s infinite ease-in-out;
    }
    .diplayer-loading-icon {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -18px 0 0 -18px;
        height: 36px;
        width: 36px;
        pointer-events: none;
        .diplayer-loading-hide {
            display: none;
        }
        .diplayer-loading-dot {
            animation: diplayer-loading-dot-fade .8s ease infinite;
            opacity: 0;
            transform-origin: 4px 4px;
            each(range(7), {
                &.diplayer-loading-dot-@{value} {
                    animation-delay: (@value * 0.1s);
                }
            });
        }
        @keyframes diplayer-loading-dot-fade {
            0% {
                opacity: .7;
                transform: scale(1.2, 1.2)
            }
            50% {
                opacity: .25;
                transform: scale(.9, .9)
            }
            to {
                opacity: .25;
                transform: scale(.85, .85)
            }
        }
    }
}`,`.dplayer-mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    display: none;
    &.dplayer-mask-show {
        display: block;
    }
}

.dplayer-video-wrap {
    position: relative;
    background: #000;
    font-size: 0;
    width: 100%;
    height: 100%;
    .dplayer-video {
        width: 100%;
        height: 100%;
        display: none;
    }
    .dplayer-video-current {
        display: block;
    }
    .dplayer-video-prepare {
        display: none;
    }
}`,`.dplayer-controller-mask {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;
    height: 98px;
    width: 100%;
    position: absolute;
    bottom: 0;
    transition: all 0.3s ease;
}

.dplayer-controller {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 41px;
    padding: 0 20px;
    user-select: none;
    transition: all 0.3s ease;
    &.dplayer-controller-comment {
        .dplayer-icons {
            display: none;
        }
        .dplayer-icons.dplayer-comment-box {
            display: block;
        }
    }
    .dplayer-bar-wrap {
        padding: 5px 0;
        cursor: pointer;
        position: absolute;
        bottom: 33px;
        width: calc(100% - 40px);
        height: 3px;
        &:hover {
            .dplayer-bar .dplayer-played .dplayer-thumb {
                transform: scale(1);
            }
            .dplayer-highlight {
                display: block;
                width: 8px;
                transform: translateX(-4px);
                top: 4px;
                height: 40%;
            }
        }
        .dplayer-highlight {
            z-index: 12;
            position: absolute;
            top: 5px;
            width: 6px;
            height: 20%;
            border-radius: 6px;
            background-color: #fff;
            text-align: center;
            transform: translateX(-3px);
            transition: all .2s ease-in-out;
            &:hover {
                .dplayer-highlight-text {
                    display: block;
                }
                &~.dplayer-bar-preview {
                    opacity: 0;
                }
                &~.dplayer-bar-time {
                    opacity: 0;
                }
            }
            .dplayer-highlight-text {
                display: none;
                position: absolute;
                left: 50%;
                top: -24px;
                padding: 5px 8px;
                background-color: rgba(0, 0, 0, .62);
                color: #fff;
                border-radius: 4px;
                font-size: 12px;
                white-space: nowrap;
                transform: translateX(-50%);
            }
        }
        .dplayer-bar-preview {
            position: absolute;
            background: #fff;
            pointer-events: none;
            display: none;
            background-size: 16000px 100%;
        }
        .dplayer-bar-preview-canvas {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
        }
        .dplayer-bar-time {
            &.hidden {
                opacity: 0;
            }
            position: absolute;
            left: 0px;
            top: -20px;
            border-radius: 4px;
            padding: 5px 7px;
            background-color: rgba(0, 0, 0, 0.62);
            color: #fff;
            font-size: 12px;
            text-align: center;
            opacity: 1;
            transition: opacity .1s ease-in-out;
            word-wrap: normal;
            word-break: normal;
            z-index: 2;
            pointer-events: none;
        }
        .dplayer-bar {
            position: relative;
            height: 3px;
            width: 100%;
            background: rgba(255, 255, 255, .2);
            cursor: pointer;
            .dplayer-loaded {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                background: rgba(255, 255, 255, .4);
                height: 3px;
                transition: all 0.5s ease;
                will-change: width;
            }
            .dplayer-played {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                height: 3px;
                will-change: width;
                .dplayer-thumb {
                    position: absolute;
                    top: 0;
                    right: 5px;
                    margin-top: -4px;
                    margin-right: -10px;
                    height: 11px;
                    width: 11px;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all .3s ease-in-out;
                    transform: scale(0);
                }
            }
        }
    }
    .dplayer-icons {
        height: 38px;
        position: absolute;
        bottom: 0;
        &.dplayer-comment-box {
            display: none;
            position: absolute;
            transition: all .3s ease-in-out;
            z-index: 2;
            height: 38px;
            bottom: 0;
            left: 20px;
            right: 20px;
            color: #fff;
            .dplayer-icon {
                padding: 7px;
            }
            .dplayer-comment-setting-icon {
                position: absolute;
                left: 0;
                top: 0;
            }
            .dplayer-send-icon {
                position: absolute;
                right: 0;
                top: 0;
            }
            .dplayer-comment-setting-box {
                position: absolute;
                background: rgba(28, 28, 28, 0.9);
                bottom: 41px;
                left: 0;
                box-shadow: 0 0 25px rgba(0, 0, 0, .3);
                border-radius: 4px;
                padding: 10px 10px 16px;
                font-size: 14px;
                width: 204px;
                transition: all .3s ease-in-out;
                transform: scale(0);
                &.dplayer-comment-setting-open {
                    transform: scale(1);
                }
                input[type=radio] {
                    display: none;
                }
                label {
                    cursor: pointer;
                }
                .dplayer-comment-setting-title {
                    font-size: 13px;
                    color: #fff;
                    line-height: 30px;
                }
                .dplayer-comment-setting-type {
                    font-size: 0;
                    .dplayer-comment-setting-title {
                        margin-bottom: 6px;
                    }
                    label {
                        &:nth-child(2) {
                            span {
                                border-radius: 4px 0 0 4px;
                            }
                        }
                        &:nth-child(4) {
                            span {
                                border-radius: 0 4px 4px 0;
                            }
                        }
                    }
                    span {
                        width: 33%;
                        padding: 4px 6px;
                        line-height: 16px;
                        display: inline-block;
                        font-size: 12px;
                        color: #fff;
                        border: 1px solid #fff;
                        margin-right: -1px;
                        box-sizing: border-box;
                        text-align: center;
                        cursor: pointer;
                    }
                    input:checked+span {
                        background: #E4E4E6;
                        color: #1c1c1c;
                    }
                }
                .dplayer-comment-setting-color {
                    font-size: 0;
                    label {
                        font-size: 0;
                        padding: 6px;
                        display: inline-block;
                    }
                    span {
                        width: 22px;
                        height: 22px;
                        display: inline-block;
                        border-radius: 50%;
                        box-sizing: border-box;
                        cursor: pointer;
                        &:hover {
                            animation: my-face 5s infinite ease-in-out;
                        }
                    }
                }
            }
            .dplayer-comment-input {
                outline: none;
                border: none;
                padding: 8px 31px;
                font-size: 14px;
                line-height: 18px;
                text-align: center;
                border-radius: 4px;
                background: none;
                margin: 0;
                height: 100%;
                box-sizing: border-box;
                width: 100%;
                color: #fff;
                &::placeholder {
                    color: #fff;
                    opacity: 0.8;
                }
                &::-ms-clear {
                    display: none;
                }
            }
        }
        &.dplayer-icons-left {
            .dplayer-icon {
                padding: 7px;
            }
        }
        &.dplayer-icons-right {
            right: 20px;
            .dplayer-icon {
                padding: 8px;
            }
        }
        .dplayer-time,
        .dplayer-live-badge {
            line-height: 38px;
            color: #eee;
            text-shadow: 0 0 2px rgba(0, 0, 0, .5);
            vertical-align: middle;
            font-size: 13px;
            cursor: default;
        }
        .dplayer-live-dot {
            display: inline-block;
            width: 6px;
            height: 6px;
            vertical-align: 4%;
            margin-right: 5px;
            content: '';
            border-radius: 6px;
        }
        .dplayer-icon {
            width: 40px;
            height: 100%;
            border: none;
            background-color: transparent;
            outline: none;
            cursor: pointer;
            vertical-align: middle;
            box-sizing: border-box;
            display: inline-block;
            .dplayer-icon-content {
                transition: all .2s ease-in-out;
                opacity: .8;
            }
            &:hover {
                .dplayer-icon-content {
                    opacity: 1;
                }
            }
            &.dplayer-quality-icon {
                color: #fff;
                width: auto;
                line-height: 22px;
                font-size: 14px;
            }
            &.dplayer-comment-icon {
                padding: 10px 9px 9px;
            }
            &.dplayer-setting-icon {
                padding-top: 8.5px;
            }
            &.dplayer-volume-icon {
                width: 43px;
            }
        }
        .dplayer-volume {
            position: relative;
            display: inline-block;
            cursor: pointer;
            height: 100%;
            &:hover {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            &.dplayer-volume-active {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            .dplayer-volume-bar-wrap {
                display: inline-block;
                margin: 0 10px 0 -5px;
                vertical-align: middle;
                height: 100%;
                .dplayer-volume-bar {
                    position: relative;
                    top: 17px;
                    width: 0;
                    height: 3px;
                    background: #aaa;
                    transition: all 0.3s ease-in-out;
                    .dplayer-volume-bar-inner {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        height: 100%;
                        transition: all 0.1s ease;
                        will-change: width;
                        .dplayer-thumb {
                            position: absolute;
                            top: 0;
                            right: 5px;
                            margin-top: -4px;
                            margin-right: -10px;
                            height: 11px;
                            width: 11px;
                            border-radius: 50%;
                            cursor: pointer;
                            transition: all .3s ease-in-out;
                            transform: scale(0);
                        }
                    }
                }
            }
        }
        .dplayer-subtitle-btn {
            display: inline-block;
            height: 100%;
        }
        .dplayer-subtitles {
            display: inline-block;
            height: 100%;
            .dplayer-subtitles-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: fit-content;
                max-width: 240px;
                min-width: 120px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: auto;
                z-index: 2;
                &.dplayer-subtitles-panel {
                    display: block;
                }
                &.dplayer-subtitles-box-open {
                    transform: scale(1);
                }
            }
            .dplayer-subtitles-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-setting {
            display: inline-block;
            height: 100%;
            .dplayer-setting-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: 150px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                z-index: 2;
                &>div {
                    display: none;
                    &.dplayer-setting-origin-panel {
                        display: block;
                    }
                }
                &.dplayer-setting-box-open {
                    transform: scale(1);
                }
                &.dplayer-setting-box-narrow {
                    width: 70px;
                    text-align: center;
                }
                &.dplayer-setting-box-speed {
                    .dplayer-setting-origin-panel {
                        display: none;
                    }
                    .dplayer-setting-speed-panel {
                        display: block;
                    }
                }
            }
            .dplayer-setting-item,
            .dplayer-setting-speed-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
            .dplayer-setting-danmaku {
                padding: 5px 0;
                .dplayer-label {
                    padding: 0 10px;
                    display: inline;
                }
                &:hover {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                &.dplayer-setting-danmaku-active {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                .dplayer-danmaku-bar-wrap {
                    padding: 0 10px;
                    box-sizing: border-box;
                    display: none;
                    vertical-align: middle;
                    height: 100%;
                    width: 100%;
                    .dplayer-danmaku-bar {
                        position: relative;
                        top: 8.5px;
                        width: 100%;
                        height: 3px;
                        background: #fff;
                        transition: all 0.3s ease-in-out;
                        .dplayer-danmaku-bar-inner {
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            height: 100%;
                            transition: all 0.1s ease;
                            background: #aaa;
                            will-change: width;
                            .dplayer-thumb {
                                position: absolute;
                                top: 0;
                                right: 5px;
                                margin-top: -4px;
                                margin-right: -10px;
                                height: 11px;
                                width: 11px;
                                border-radius: 50%;
                                cursor: pointer;
                                transition: all .3s ease-in-out;
                                background: #aaa;
                            }
                        }
                    }
                }
            }
        }
        .dplayer-full {
            display: inline-block;
            height: 100%;
            position: relative;
            &:hover {
                .dplayer-full-in-icon {
                    display: block;
                }
            }
            .dplayer-full-in-icon {
                position: absolute;
                top: -30px;
                z-index: 1;
                display: none;
            }
        }
        .dplayer-quality {
            position: relative;
            display: inline-block;
            height: 100%;
            z-index: 2;
            &:hover {
                .dplayer-quality-list {
                    display: block;
                }
                .dplayer-quality-mask {
                    display: block;
                }
            }
            .dplayer-quality-mask {
                display: none;
                position: absolute;
                bottom: 38px;
                left: -18px;
                width: 80px;
                padding-bottom: 12px;
            }
            .dplayer-quality-list {
                display: none;
                font-size: 12px;
                width: 80px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 5px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                color: #fff;
                text-align: center;
            }
            .dplayer-quality-item {
                height: 25px;
                box-sizing: border-box;
                cursor: pointer;
                line-height: 25px;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-comment {
            display: inline-block;
            height: 100%;
        }
        .dplayer-label {
            color: #eee;
            font-size: 13px;
            display: inline-block;
            vertical-align: middle;
            white-space: nowrap;
        }
        .dplayer-toggle {
            width: 32px;
            height: 20px;
            text-align: center;
            font-size: 0;
            vertical-align: middle;
            position: absolute;
            top: 5px;
            right: 10px;
            input {
                max-height: 0;
                max-width: 0;
                display: none;
            }
            input+label {
                display: inline-block;
                position: relative;
                box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;
                border: 1px solid rgb(223, 223, 223);
                height: 20px;
                width: 32px;
                border-radius: 10px;
                box-sizing: border-box;
                cursor: pointer;
                transition: .2s ease-in-out;
            }
            input+label:before {
                content: "";
                position: absolute;
                display: block;
                height: 18px;
                width: 18px;
                top: 0;
                left: 0;
                border-radius: 15px;
                transition: .2s ease-in-out;
            }
            input+label:after {
                content: "";
                position: absolute;
                display: block;
                left: 0;
                top: 0;
                border-radius: 15px;
                background: #fff;
                transition: .2s ease-in-out;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
                height: 18px;
                width: 18px;
            }
            input:checked+label {
                border-color: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:before {
                width: 30px;
                background: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:after {
                left: 12px;
            }
        }
    }
}

.dplayer-mobile-play {
    display: none;
    width: 50px;
    height: 50px;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    opacity: 0.8;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}`,`.dplayer-danmaku {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 22px;
    color: #fff;
    .dplayer-danmaku-item {
        display: inline-block;
        pointer-events: none;
        user-select: none;
        cursor: default;
        white-space: nowrap;
        text-shadow: .5px .5px .5px rgba(0, 0, 0, .5);
        &--demo {
            position: absolute;
            visibility: hidden;
        }
    }
    .dplayer-danmaku-right {
        position: absolute;
        right: 0;
        transform: translateX(100%);
        &.dplayer-danmaku-move {
            will-change: transform;
            animation-name: 'danmaku';
            animation-timing-function: linear;
            animation-play-state: paused;
        }
    }
    @keyframes danmaku {
        from {
            transform: translateX(100%);
        }
    }
    .dplayer-danmaku-top,
    .dplayer-danmaku-bottom {
        position: absolute;
        width: 100%;
        text-align: center;
        visibility: hidden;
        &.dplayer-danmaku-move {
            will-change: visibility;
            animation-name: 'danmaku-center';
            animation-timing-function: linear;
            animation-play-state: paused;
        }
    }
    @keyframes danmaku-center {
        from {
            visibility: visible;
        }
        to {
            visibility: visible;
        }
    }
}`,`.dplayer-logo {
    pointer-events: none;
    position: absolute;
    left: 20px;
    top: 20px;
    max-width: 50px;
    max-height: 50px;
    img {
        max-width: 100%;
        max-height: 100%;
        background: none;
    }
}`,`.dplayer-menu {
    position: absolute;
    width: 170px;
    border-radius: 2px;
    background: rgba(28, 28, 28, 0.85);
    padding: 5px 0;
    overflow: hidden;
    z-index: 3;
    display: none;
    &.dplayer-menu-show {
        display: block;
    }
    .dplayer-menu-item {
        height: 30px;
        box-sizing: border-box;
        cursor: pointer;
        &:hover {
            background-color: rgba(255, 255, 255, .1);
        }
        a {
            display: inline-block;
            padding: 0 10px;
            line-height: 30px;
            color: #eee;
            font-size: 13px;
            display: inline-block;
            vertical-align: middle;
            width: 100%;
            box-sizing: border-box;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            &:hover {
                text-decoration: none;
            }
        }
    }
}`,`.dplayer-notice-list{
    position: absolute;
    bottom: 60px;
    left: 20px;

    .dplayer-notice {
        border-radius: 2px;
        background: rgba(28, 28, 28, 0.9);
        transition: all .3s ease-in-out;
        overflow: hidden;
        color: #fff;
        display: table;
        pointer-events: none;
        animation: showNotice .3s ease 1 forwards;
    }

    .remove-notice{
        animation: removeNotice .3s ease 1 forwards;
    }
}

@keyframes showNotice {
    from {
        padding: 0;
        font-size: 0;
        margin-top: 0;
    }
    to {
        padding: 7px 20px;
        font-size: 14px;
        margin-top: 5px;
    }
}

@keyframes removeNotice {
    0%{
        padding: 7px 20px;
        font-size: 14px;
        margin-top: 5px;
    }
    20%{
        font-size: 12px;
    }
    21%{
        font-size: 0;
        padding: 7px 10px;
    }
    100%{
        padding: 0;
        margin-top: 0;
        font-size: 0;
    }
}
`,`.dplayer-subtitle {
    position: absolute;
    bottom: 40px;
    width: 90%;
    left: 5%;
    text-align: center;
    color: #fff;
    text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
    font-size: 20px;
    &.dplayer-subtitle-hide {
        display: none;
    }
}`,`.dplayer-info-panel {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 400px;
    background: rgba(28, 28, 28, 0.8);
    padding: 10px;
    color: #fff;
    font-size: 12px;
    border-radius: 2px;

    &-hide {
        display: none;
    }

    .dplayer-info-panel-close {
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 10px;
    }

    .dplayer-info-panel-item {
        & > span {
            display: inline-block;
            vertical-align: middle;
            line-height: 15px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }

    .dplayer-info-panel-item-title {
        width: 100px;
        text-align: right;
        margin-right: 10px;
    }
    
    .dplayer-info-panel-item-data {
        width: 260px;
    }
}`],sourceRoot:""}]);const S=C},9624:s=>{var o=[];function l(h){for(var u=-1,m=0;m<o.length;m++)if(o[m].identifier===h){u=m;break}return u}function d(h,u){for(var m={},A=[],f=0;f<h.length;f++){var g=h[f],C=u.base?g[0]+u.base:g[0],T=m[C]||0,S="".concat(C," ").concat(T);m[C]=T+1;var k=l(S),I={css:g[1],media:g[2],sourceMap:g[3],supports:g[4],layer:g[5]};if(k!==-1)o[k].references++,o[k].updater(I);else{var P=c(I,u);u.byIndex=f,o.splice(f,0,{identifier:S,updater:P,references:1})}A.push(S)}return A}function c(h,u){var m=u.domAPI(u);return m.update(h),function(A){if(A){if(A.css===h.css&&A.media===h.media&&A.sourceMap===h.sourceMap&&A.supports===h.supports&&A.layer===h.layer)return;m.update(h=A)}else m.remove()}}s.exports=function(h,u){var m=d(h=h||[],u=u||{});return function(A){A=A||[];for(var f=0;f<m.length;f++){var g=l(m[f]);o[g].references--}for(var C=d(A,u),T=0;T<m.length;T++){var S=l(m[T]);o[S].references===0&&(o[S].updater(),o.splice(S,1))}m=C}}},6892:s=>{var o={};s.exports=function(l,d){var c=function(h){if(o[h]===void 0){var u=document.querySelector(h);if(window.HTMLIFrameElement&&u instanceof window.HTMLIFrameElement)try{u=u.contentDocument.head}catch{u=null}o[h]=u}return o[h]}(l);if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(d)}},2716:s=>{s.exports=function(o){var l=document.createElement("style");return o.setAttributes(l,o.attributes),o.insert(l,o.options),l}},6359:(s,o,l)=>{s.exports=function(d){var c=l.nc;c&&d.setAttribute("nonce",c)}},6990:s=>{s.exports=function(o){var l=o.insertStyleElement(o);return{update:function(d){(function(c,h,u){var m="";u.supports&&(m+="@supports (".concat(u.supports,") {")),u.media&&(m+="@media ".concat(u.media," {"));var A=u.layer!==void 0;A&&(m+="@layer".concat(u.layer.length>0?" ".concat(u.layer):""," {")),m+=u.css,A&&(m+="}"),u.media&&(m+="}"),u.supports&&(m+="}");var f=u.sourceMap;f&&typeof btoa<"u"&&(m+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(f))))," */")),h.styleTagTransform(m,c,h.options)})(l,o,d)},remove:function(){(function(d){if(d.parentNode===null)return!1;d.parentNode.removeChild(d)})(l)}}}},230:s=>{s.exports=function(o,l){if(l.styleSheet)l.styleSheet.cssText=o;else{for(;l.firstChild;)l.removeChild(l.firstChild);l.appendChild(document.createTextNode(o))}}},6251:s=>{s.exports='<svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg"><path d="M288 90v96c0 20-16 36-36 36h-10c-16 0-16-24 0-24h10c7 0 12-5 12-12V90c0-7-5-12-12-12H36c-7 0-12 5-12 12v96c0 7 5 12 12 12h10c16 0 16 24 0 24H36c-20 0-36-16-36-36V90c0-20 16-36 36-36h216c20 0 36 16 36 36zm-120 62l48 68c14 20 1 38-20 38H92c-21 0-34-18-20-38l48-68c13-18 35-18 48 0z"></path></svg>'},8113:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"></path></svg>'},3193:s=>{s.exports='<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="chromecast" class="svg-inline--fa fa-chromecast fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M447.8,64H64c-23.6,0-42.7,19.1-42.7,42.7v63.9H64v-63.9h383.8v298.6H298.6V448H448c23.6,0,42.7-19.1,42.7-42.7V106.7 C490.7,83.1,471.4,64,447.8,64z M21.3,383.6L21.3,383.6l0,63.9h63.9C85.2,412.2,56.6,383.6,21.3,383.6L21.3,383.6z M21.3,298.6V341 c58.9,0,106.6,48.1,106.6,107h42.7C170.7,365.6,103.7,298.7,21.3,298.6z M213.4,448h42.7c-0.5-129.5-105.3-234.3-234.8-234.6l0,42.4 C127.3,255.6,213.3,342,213.4,448z"></path></svg>'},338:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"></path></svg>'},2807:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"></path></svg>'},1415:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"></path></svg>'},4574:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"></path></svg>'},4182:s=>{s.exports='<svg version="1.1" viewBox="0 0 22 22"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg>'},1965:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z"></path></svg>'},6074:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>'},730:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>'},1428:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>'},2254:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"></path></svg>'},5934:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 28"><path d="M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"></path></svg>'},8410:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>'},2644:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>'},1324:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>'},4437:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z"></path></svg>'},9959:(s,o,l)=>{var d=typeof self<"u"?self:typeof window<"u"?window:l.g!==void 0?l.g:{},c=Object.create(d),h=/["&'<>]/;function u(m){return typeof m!="string"&&(m=m==null?"":typeof m=="function"?u(m.call(m)):JSON.stringify(m)),m}c.$escape=function(m){return function(A){var f=""+A,g=h.exec(f);if(!g)return A;var C="",T=void 0,S=void 0,k=void 0;for(T=g.index,S=0;T<f.length;T++){switch(f.charCodeAt(T)){case 34:k="&#34;";break;case 38:k="&#38;";break;case 39:k="&#39;";break;case 60:k="&#60;";break;case 62:k="&#62;";break;default:continue}S!==T&&(C+=f.substring(S,T)),S=T+1,C+=k}return S!==T?C+f.substring(S,T):C}(u(m))},c.$each=function(m,A){if(Array.isArray(m))for(var f=0,g=m.length;f<g;f++)A(m[f],f);else for(var C in m)A(m[C],C)},s.exports=c},6877:(s,o,l)=>{s.exports=l(9959)},6208:(s,o,l)=>{s.exports=l(4568)},8170:(s,o,l)=>{var d=l(7201),c=l(9095),h=l(8416),u=l(6374),m=l(5967),A=l(5032),f=l(1224),g=l(4033),C=l(1766),T=l(8832),S=l(8699);s.exports=function(k){return new Promise(function(I,P){var _,N=k.data,U=k.headers,F=k.responseType;function $(){k.cancelToken&&k.cancelToken.unsubscribe(_),k.signal&&k.signal.removeEventListener("abort",_)}d.isFormData(N)&&d.isStandardBrowserEnv()&&delete U["Content-Type"];var H=new XMLHttpRequest;if(k.auth){var R=k.auth.username||"",q=k.auth.password?unescape(encodeURIComponent(k.auth.password)):"";U.Authorization="Basic "+btoa(R+":"+q)}var V=m(k.baseURL,k.url);function j(){if(H){var Y="getAllResponseHeaders"in H?A(H.getAllResponseHeaders()):null,W={data:F&&F!=="text"&&F!=="json"?H.response:H.responseText,status:H.status,statusText:H.statusText,headers:Y,config:k,request:H};c(function(le){I(le),$()},function(le){P(le),$()},W),H=null}}if(H.open(k.method.toUpperCase(),u(V,k.params,k.paramsSerializer),!0),H.timeout=k.timeout,"onloadend"in H?H.onloadend=j:H.onreadystatechange=function(){H&&H.readyState===4&&(H.status!==0||H.responseURL&&H.responseURL.indexOf("file:")===0)&&setTimeout(j)},H.onabort=function(){H&&(P(new C("Request aborted",C.ECONNABORTED,k,H)),H=null)},H.onerror=function(){P(new C("Network Error",C.ERR_NETWORK,k,H,H)),H=null},H.ontimeout=function(){var Y=k.timeout?"timeout of "+k.timeout+"ms exceeded":"timeout exceeded",W=k.transitional||g;k.timeoutErrorMessage&&(Y=k.timeoutErrorMessage),P(new C(Y,W.clarifyTimeoutError?C.ETIMEDOUT:C.ECONNABORTED,k,H)),H=null},d.isStandardBrowserEnv()){var ee=(k.withCredentials||f(V))&&k.xsrfCookieName?h.read(k.xsrfCookieName):void 0;ee&&(U[k.xsrfHeaderName]=ee)}"setRequestHeader"in H&&d.forEach(U,function(Y,W){N===void 0&&W.toLowerCase()==="content-type"?delete U[W]:H.setRequestHeader(W,Y)}),d.isUndefined(k.withCredentials)||(H.withCredentials=!!k.withCredentials),F&&F!=="json"&&(H.responseType=k.responseType),typeof k.onDownloadProgress=="function"&&H.addEventListener("progress",k.onDownloadProgress),typeof k.onUploadProgress=="function"&&H.upload&&H.upload.addEventListener("progress",k.onUploadProgress),(k.cancelToken||k.signal)&&(_=function(Y){H&&(P(!Y||Y&&Y.type?new T:Y),H.abort(),H=null)},k.cancelToken&&k.cancelToken.subscribe(_),k.signal&&(k.signal.aborted?_():k.signal.addEventListener("abort",_))),N||(N=null);var K=S(V);K&&["http","https","file"].indexOf(K)===-1?P(new C("Unsupported protocol "+K+":",C.ERR_BAD_REQUEST,k)):H.send(N)})}},4568:(s,o,l)=>{var d=l(7201),c=l(5305),h=l(2275),u=l(9834),m=function A(f){var g=new h(f),C=c(h.prototype.request,g);return d.extend(C,h.prototype,g),d.extend(C,g),C.create=function(T){return A(u(f,T))},C}(l(6339));m.Axios=h,m.CanceledError=l(8832),m.CancelToken=l(5027),m.isCancel=l(1893),m.VERSION=l(4316).version,m.toFormData=l(6615),m.AxiosError=l(1766),m.Cancel=m.CanceledError,m.all=function(A){return Promise.all(A)},m.spread=l(3282),m.isAxiosError=l(3319),s.exports=m,s.exports.default=m},5027:(s,o,l)=>{var d=l(8832);function c(h){if(typeof h!="function")throw new TypeError("executor must be a function.");var u;this.promise=new Promise(function(A){u=A});var m=this;this.promise.then(function(A){if(m._listeners){var f,g=m._listeners.length;for(f=0;f<g;f++)m._listeners[f](A);m._listeners=null}}),this.promise.then=function(A){var f,g=new Promise(function(C){m.subscribe(C),f=C}).then(A);return g.cancel=function(){m.unsubscribe(f)},g},h(function(A){m.reason||(m.reason=new d(A),u(m.reason))})}c.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},c.prototype.subscribe=function(h){this.reason?h(this.reason):this._listeners?this._listeners.push(h):this._listeners=[h]},c.prototype.unsubscribe=function(h){if(this._listeners){var u=this._listeners.indexOf(h);u!==-1&&this._listeners.splice(u,1)}},c.source=function(){var h;return{token:new c(function(u){h=u}),cancel:h}},s.exports=c},8832:(s,o,l)=>{var d=l(1766);function c(h){d.call(this,h??"canceled",d.ERR_CANCELED),this.name="CanceledError"}l(7201).inherits(c,d,{__CANCEL__:!0}),s.exports=c},1893:s=>{s.exports=function(o){return!(!o||!o.__CANCEL__)}},2275:(s,o,l)=>{var d=l(7201),c=l(6374),h=l(6808),u=l(7313),m=l(9834),A=l(5967),f=l(9712),g=f.validators;function C(T){this.defaults=T,this.interceptors={request:new h,response:new h}}C.prototype.request=function(T,S){typeof T=="string"?(S=S||{}).url=T:S=T||{},(S=m(this.defaults,S)).method?S.method=S.method.toLowerCase():this.defaults.method?S.method=this.defaults.method.toLowerCase():S.method="get";var k=S.transitional;k!==void 0&&f.assertOptions(k,{silentJSONParsing:g.transitional(g.boolean),forcedJSONParsing:g.transitional(g.boolean),clarifyTimeoutError:g.transitional(g.boolean)},!1);var I=[],P=!0;this.interceptors.request.forEach(function(R){typeof R.runWhen=="function"&&R.runWhen(S)===!1||(P=P&&R.synchronous,I.unshift(R.fulfilled,R.rejected))});var _,N=[];if(this.interceptors.response.forEach(function(R){N.push(R.fulfilled,R.rejected)}),!P){var U=[u,void 0];for(Array.prototype.unshift.apply(U,I),U=U.concat(N),_=Promise.resolve(S);U.length;)_=_.then(U.shift(),U.shift());return _}for(var F=S;I.length;){var $=I.shift(),H=I.shift();try{F=$(F)}catch(R){H(R);break}}try{_=u(F)}catch(R){return Promise.reject(R)}for(;N.length;)_=_.then(N.shift(),N.shift());return _},C.prototype.getUri=function(T){T=m(this.defaults,T);var S=A(T.baseURL,T.url);return c(S,T.params,T.paramsSerializer)},d.forEach(["delete","get","head","options"],function(T){C.prototype[T]=function(S,k){return this.request(m(k||{},{method:T,url:S,data:(k||{}).data}))}}),d.forEach(["post","put","patch"],function(T){function S(k){return function(I,P,_){return this.request(m(_||{},{method:T,headers:k?{"Content-Type":"multipart/form-data"}:{},url:I,data:P}))}}C.prototype[T]=S(),C.prototype[T+"Form"]=S(!0)}),s.exports=C},1766:(s,o,l)=>{var d=l(7201);function c(m,A,f,g,C){Error.call(this),this.message=m,this.name="AxiosError",A&&(this.code=A),f&&(this.config=f),g&&(this.request=g),C&&(this.response=C)}d.inherits(c,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var h=c.prototype,u={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(m){u[m]={value:m}}),Object.defineProperties(c,u),Object.defineProperty(h,"isAxiosError",{value:!0}),c.from=function(m,A,f,g,C,T){var S=Object.create(h);return d.toFlatObject(m,S,function(k){return k!==Error.prototype}),c.call(S,m.message,A,f,g,C),S.name=m.name,T&&Object.assign(S,T),S},s.exports=c},6808:(s,o,l)=>{var d=l(7201);function c(){this.handlers=[]}c.prototype.use=function(h,u,m){return this.handlers.push({fulfilled:h,rejected:u,synchronous:!!m&&m.synchronous,runWhen:m?m.runWhen:null}),this.handlers.length-1},c.prototype.eject=function(h){this.handlers[h]&&(this.handlers[h]=null)},c.prototype.forEach=function(h){d.forEach(this.handlers,function(u){u!==null&&h(u)})},s.exports=c},5967:(s,o,l)=>{var d=l(724),c=l(4669);s.exports=function(h,u){return h&&!d(u)?c(h,u):u}},7313:(s,o,l)=>{var d=l(7201),c=l(6431),h=l(1893),u=l(6339),m=l(8832);function A(f){if(f.cancelToken&&f.cancelToken.throwIfRequested(),f.signal&&f.signal.aborted)throw new m}s.exports=function(f){return A(f),f.headers=f.headers||{},f.data=c.call(f,f.data,f.headers,f.transformRequest),f.headers=d.merge(f.headers.common||{},f.headers[f.method]||{},f.headers),d.forEach(["delete","get","head","post","put","patch","common"],function(g){delete f.headers[g]}),(f.adapter||u.adapter)(f).then(function(g){return A(f),g.data=c.call(f,g.data,g.headers,f.transformResponse),g},function(g){return h(g)||(A(f),g&&g.response&&(g.response.data=c.call(f,g.response.data,g.response.headers,f.transformResponse))),Promise.reject(g)})}},9834:(s,o,l)=>{var d=l(7201);s.exports=function(c,h){h=h||{};var u={};function m(S,k){return d.isPlainObject(S)&&d.isPlainObject(k)?d.merge(S,k):d.isPlainObject(k)?d.merge({},k):d.isArray(k)?k.slice():k}function A(S){return d.isUndefined(h[S])?d.isUndefined(c[S])?void 0:m(void 0,c[S]):m(c[S],h[S])}function f(S){if(!d.isUndefined(h[S]))return m(void 0,h[S])}function g(S){return d.isUndefined(h[S])?d.isUndefined(c[S])?void 0:m(void 0,c[S]):m(void 0,h[S])}function C(S){return S in h?m(c[S],h[S]):S in c?m(void 0,c[S]):void 0}var T={url:f,method:f,data:f,baseURL:g,transformRequest:g,transformResponse:g,paramsSerializer:g,timeout:g,timeoutMessage:g,withCredentials:g,adapter:g,responseType:g,xsrfCookieName:g,xsrfHeaderName:g,onUploadProgress:g,onDownloadProgress:g,decompress:g,maxContentLength:g,maxBodyLength:g,beforeRedirect:g,transport:g,httpAgent:g,httpsAgent:g,cancelToken:g,socketPath:g,responseEncoding:g,validateStatus:C};return d.forEach(Object.keys(c).concat(Object.keys(h)),function(S){var k=T[S]||A,I=k(S);d.isUndefined(I)&&k!==C||(u[S]=I)}),u}},9095:(s,o,l)=>{var d=l(1766);s.exports=function(c,h,u){var m=u.config.validateStatus;u.status&&m&&!m(u.status)?h(new d("Request failed with status code "+u.status,[d.ERR_BAD_REQUEST,d.ERR_BAD_RESPONSE][Math.floor(u.status/100)-4],u.config,u.request,u)):c(u)}},6431:(s,o,l)=>{var d=l(7201),c=l(6339);s.exports=function(h,u,m){var A=this||c;return d.forEach(m,function(f){h=f.call(A,h,u)}),h}},6339:(s,o,l)=>{var d=l(7201),c=l(5227),h=l(1766),u=l(4033),m=l(6615),A={"Content-Type":"application/x-www-form-urlencoded"};function f(T,S){!d.isUndefined(T)&&d.isUndefined(T["Content-Type"])&&(T["Content-Type"]=S)}var g,C={transitional:u,adapter:((typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(g=l(8170)),g),transformRequest:[function(T,S){if(c(S,"Accept"),c(S,"Content-Type"),d.isFormData(T)||d.isArrayBuffer(T)||d.isBuffer(T)||d.isStream(T)||d.isFile(T)||d.isBlob(T))return T;if(d.isArrayBufferView(T))return T.buffer;if(d.isURLSearchParams(T))return f(S,"application/x-www-form-urlencoded;charset=utf-8"),T.toString();var k,I=d.isObject(T),P=S&&S["Content-Type"];if((k=d.isFileList(T))||I&&P==="multipart/form-data"){var _=this.env&&this.env.FormData;return m(k?{"files[]":T}:T,_&&new _)}return I||P==="application/json"?(f(S,"application/json"),function(N,U,F){if(d.isString(N))try{return(0,JSON.parse)(N),d.trim(N)}catch($){if($.name!=="SyntaxError")throw $}return(0,JSON.stringify)(N)}(T)):T}],transformResponse:[function(T){var S=this.transitional||C.transitional,k=S&&S.silentJSONParsing,I=S&&S.forcedJSONParsing,P=!k&&this.responseType==="json";if(P||I&&d.isString(T)&&T.length)try{return JSON.parse(T)}catch(_){if(P)throw _.name==="SyntaxError"?h.from(_,h.ERR_BAD_RESPONSE,this,null,this.response):_}return T}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:l(3997)},validateStatus:function(T){return T>=200&&T<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};d.forEach(["delete","get","head"],function(T){C.headers[T]={}}),d.forEach(["post","put","patch"],function(T){C.headers[T]=d.merge(A)}),s.exports=C},4033:s=>{s.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},4316:s=>{s.exports={version:"0.27.2"}},5305:s=>{s.exports=function(o,l){return function(){for(var d=new Array(arguments.length),c=0;c<d.length;c++)d[c]=arguments[c];return o.apply(l,d)}}},6374:(s,o,l)=>{var d=l(7201);function c(h){return encodeURIComponent(h).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}s.exports=function(h,u,m){if(!u)return h;var A;if(m)A=m(u);else if(d.isURLSearchParams(u))A=u.toString();else{var f=[];d.forEach(u,function(C,T){C!=null&&(d.isArray(C)?T+="[]":C=[C],d.forEach(C,function(S){d.isDate(S)?S=S.toISOString():d.isObject(S)&&(S=JSON.stringify(S)),f.push(c(T)+"="+c(S))}))}),A=f.join("&")}if(A){var g=h.indexOf("#");g!==-1&&(h=h.slice(0,g)),h+=(h.indexOf("?")===-1?"?":"&")+A}return h}},4669:s=>{s.exports=function(o,l){return l?o.replace(/\/+$/,"")+"/"+l.replace(/^\/+/,""):o}},8416:(s,o,l)=>{var d=l(7201);s.exports=d.isStandardBrowserEnv()?{write:function(c,h,u,m,A,f){var g=[];g.push(c+"="+encodeURIComponent(h)),d.isNumber(u)&&g.push("expires="+new Date(u).toGMTString()),d.isString(m)&&g.push("path="+m),d.isString(A)&&g.push("domain="+A),f===!0&&g.push("secure"),document.cookie=g.join("; ")},read:function(c){var h=document.cookie.match(new RegExp("(^|;\\s*)("+c+")=([^;]*)"));return h?decodeURIComponent(h[3]):null},remove:function(c){this.write(c,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},724:s=>{s.exports=function(o){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(o)}},3319:(s,o,l)=>{var d=l(7201);s.exports=function(c){return d.isObject(c)&&c.isAxiosError===!0}},1224:(s,o,l)=>{var d=l(7201);s.exports=d.isStandardBrowserEnv()?function(){var c,h=/(msie|trident)/i.test(navigator.userAgent),u=document.createElement("a");function m(A){var f=A;return h&&(u.setAttribute("href",f),f=u.href),u.setAttribute("href",f),{href:u.href,protocol:u.protocol?u.protocol.replace(/:$/,""):"",host:u.host,search:u.search?u.search.replace(/^\?/,""):"",hash:u.hash?u.hash.replace(/^#/,""):"",hostname:u.hostname,port:u.port,pathname:u.pathname.charAt(0)==="/"?u.pathname:"/"+u.pathname}}return c=m(window.location.href),function(A){var f=d.isString(A)?m(A):A;return f.protocol===c.protocol&&f.host===c.host}}():function(){return!0}},5227:(s,o,l)=>{var d=l(7201);s.exports=function(c,h){d.forEach(c,function(u,m){m!==h&&m.toUpperCase()===h.toUpperCase()&&(c[h]=u,delete c[m])})}},3997:s=>{s.exports=null},5032:(s,o,l)=>{var d=l(7201),c=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];s.exports=function(h){var u,m,A,f={};return h&&d.forEach(h.split(`
`),function(g){if(A=g.indexOf(":"),u=d.trim(g.substr(0,A)).toLowerCase(),m=d.trim(g.substr(A+1)),u){if(f[u]&&c.indexOf(u)>=0)return;f[u]=u==="set-cookie"?(f[u]?f[u]:[]).concat([m]):f[u]?f[u]+", "+m:m}}),f}},8699:s=>{s.exports=function(o){var l=/^([-+\w]{1,25})(:?\/\/|:)/.exec(o);return l&&l[1]||""}},3282:s=>{s.exports=function(o){return function(l){return o.apply(null,l)}}},6615:(s,o,l)=>{function d(h){return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},d(h)}var c=l(7201);s.exports=function(h,u){u=u||new FormData;var m=[];function A(f){return f===null?"":c.isDate(f)?f.toISOString():c.isArrayBuffer(f)||c.isTypedArray(f)?typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}return function f(g,C){if(c.isPlainObject(g)||c.isArray(g)){if(m.indexOf(g)!==-1)throw Error("Circular reference detected in "+C);m.push(g),c.forEach(g,function(T,S){if(!c.isUndefined(T)){var k,I=C?C+"."+S:S;if(T&&!C&&d(T)==="object"){if(c.endsWith(S,"{}"))T=JSON.stringify(T);else if(c.endsWith(S,"[]")&&(k=c.toArray(T)))return void k.forEach(function(P){!c.isUndefined(P)&&u.append(I,A(P))})}f(T,I)}}),m.pop()}else u.append(C,A(g))}(h),u}},9712:(s,o,l)=>{function d(A){return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},d(A)}var c=l(4316).version,h=l(1766),u={};["object","boolean","number","function","string","symbol"].forEach(function(A,f){u[A]=function(g){return d(g)===A||"a"+(f<1?"n ":" ")+A}});var m={};u.transitional=function(A,f,g){function C(T,S){return"[Axios v"+c+"] Transitional option '"+T+"'"+S+(g?". "+g:"")}return function(T,S,k){if(A===!1)throw new h(C(S," has been removed"+(f?" in "+f:"")),h.ERR_DEPRECATED);return f&&!m[S]&&(m[S]=!0,console.warn(C(S," has been deprecated since v"+f+" and will be removed in the near future"))),!A||A(T,S,k)}},s.exports={assertOptions:function(A,f,g){if(d(A)!=="object")throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);for(var C=Object.keys(A),T=C.length;T-- >0;){var S=C[T],k=f[S];if(k){var I=A[S],P=I===void 0||k(I,S,A);if(P!==!0)throw new h("option "+S+" must be "+P,h.ERR_BAD_OPTION_VALUE)}else if(g!==!0)throw new h("Unknown option "+S,h.ERR_BAD_OPTION)}},validators:u}},7201:(s,o,l)=>{function d(R){return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(q){return typeof q}:function(q){return q&&typeof Symbol=="function"&&q.constructor===Symbol&&q!==Symbol.prototype?"symbol":typeof q},d(R)}var c,h=l(5305),u=Object.prototype.toString,m=(c=Object.create(null),function(R){var q=u.call(R);return c[q]||(c[q]=q.slice(8,-1).toLowerCase())});function A(R){return R=R.toLowerCase(),function(q){return m(q)===R}}function f(R){return Array.isArray(R)}function g(R){return R===void 0}var C=A("ArrayBuffer");function T(R){return R!==null&&d(R)==="object"}function S(R){if(m(R)!=="object")return!1;var q=Object.getPrototypeOf(R);return q===null||q===Object.prototype}var k=A("Date"),I=A("File"),P=A("Blob"),_=A("FileList");function N(R){return u.call(R)==="[object Function]"}var U=A("URLSearchParams");function F(R,q){if(R!=null)if(d(R)!=="object"&&(R=[R]),f(R))for(var V=0,j=R.length;V<j;V++)q.call(null,R[V],V,R);else for(var ee in R)Object.prototype.hasOwnProperty.call(R,ee)&&q.call(null,R[ee],ee,R)}var $,H=($=typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array),function(R){return $&&R instanceof $});s.exports={isArray:f,isArrayBuffer:C,isBuffer:function(R){return R!==null&&!g(R)&&R.constructor!==null&&!g(R.constructor)&&typeof R.constructor.isBuffer=="function"&&R.constructor.isBuffer(R)},isFormData:function(R){var q="[object FormData]";return R&&(typeof FormData=="function"&&R instanceof FormData||u.call(R)===q||N(R.toString)&&R.toString()===q)},isArrayBufferView:function(R){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(R):R&&R.buffer&&C(R.buffer)},isString:function(R){return typeof R=="string"},isNumber:function(R){return typeof R=="number"},isObject:T,isPlainObject:S,isUndefined:g,isDate:k,isFile:I,isBlob:P,isFunction:N,isStream:function(R){return T(R)&&N(R.pipe)},isURLSearchParams:U,isStandardBrowserEnv:function(){return(typeof navigator>"u"||navigator.product!=="ReactNative"&&navigator.product!=="NativeScript"&&navigator.product!=="NS")&&typeof window<"u"&&typeof document<"u"},forEach:F,merge:function R(){var q={};function V(K,Y){S(q[Y])&&S(K)?q[Y]=R(q[Y],K):S(K)?q[Y]=R({},K):f(K)?q[Y]=K.slice():q[Y]=K}for(var j=0,ee=arguments.length;j<ee;j++)F(arguments[j],V);return q},extend:function(R,q,V){return F(q,function(j,ee){R[ee]=V&&typeof j=="function"?h(j,V):j}),R},trim:function(R){return R.trim?R.trim():R.replace(/^\s+|\s+$/g,"")},stripBOM:function(R){return R.charCodeAt(0)===65279&&(R=R.slice(1)),R},inherits:function(R,q,V,j){R.prototype=Object.create(q.prototype,j),R.prototype.constructor=R,V&&Object.assign(R.prototype,V)},toFlatObject:function(R,q,V){var j,ee,K,Y={};q=q||{};do{for(ee=(j=Object.getOwnPropertyNames(R)).length;ee-- >0;)Y[K=j[ee]]||(q[K]=R[K],Y[K]=!0);R=Object.getPrototypeOf(R)}while(R&&(!V||V(R,q))&&R!==Object.prototype);return q},kindOf:m,kindOfTest:A,endsWith:function(R,q,V){R=String(R),(V===void 0||V>R.length)&&(V=R.length),V-=q.length;var j=R.indexOf(q,V);return j!==-1&&j===V},toArray:function(R){if(!R)return null;var q=R.length;if(g(q))return null;for(var V=new Array(q);q-- >0;)V[q]=R[q];return V},isTypedArray:H,isFileList:_}},8160:s=>{s.exports=function(o){var l=[];return l.toString=function(){return this.map(function(d){var c="",h=d[5]!==void 0;return d[4]&&(c+="@supports (".concat(d[4],") {")),d[2]&&(c+="@media ".concat(d[2]," {")),h&&(c+="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {")),c+=o(d),h&&(c+="}"),d[2]&&(c+="}"),d[4]&&(c+="}"),c}).join("")},l.i=function(d,c,h,u,m){typeof d=="string"&&(d=[[null,d,void 0]]);var A={};if(h)for(var f=0;f<this.length;f++){var g=this[f][0];g!=null&&(A[g]=!0)}for(var C=0;C<d.length;C++){var T=[].concat(d[C]);h&&A[T[0]]||(m!==void 0&&(T[5]===void 0||(T[1]="@layer".concat(T[5].length>0?" ".concat(T[5]):""," {").concat(T[1],"}")),T[5]=m),c&&(T[2]&&(T[1]="@media ".concat(T[2]," {").concat(T[1],"}")),T[2]=c),u&&(T[4]?(T[1]="@supports (".concat(T[4],") {").concat(T[1],"}"),T[4]=u):T[4]="".concat(u)),l.push(T))}},l}},8431:s=>{s.exports=function(o,l){return l||(l={}),o&&(o=String(o.__esModule?o.default:o),/^['"].*['"]$/.test(o)&&(o=o.slice(1,-1)),l.hash&&(o+=l.hash),/["'() \t\n]|(%20)/.test(o)||l.needQuotes?'"'.concat(o.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):o)}},8955:s=>{s.exports=function(o){var l=o[1],d=o[3];if(!d)return l;if(typeof btoa=="function"){var c=btoa(unescape(encodeURIComponent(JSON.stringify(d)))),h="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),u="/*# ".concat(h," */"),m=d.sources.map(function(A){return"/*# sourceURL=".concat(d.sourceRoot||"").concat(A," */")});return[l].concat(m).concat([u]).join(`
`)}return[l].join(`
`)}},7831:s=>{s.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg=="}},n={};function i(s){var o=n[s];if(o!==void 0)return o.exports;var l=n[s]={id:s,exports:{}};return t[s](l,l.exports,i),l.exports}i.m=t,i.n=s=>{var o=s&&s.__esModule?()=>s.default:()=>s;return i.d(o,{a:o}),o},i.d=(s,o)=>{for(var l in o)i.o(o,l)&&!i.o(s,l)&&Object.defineProperty(s,l,{enumerable:!0,get:o[l]})},i.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),i.o=(s,o)=>Object.prototype.hasOwnProperty.call(s,o),i.b=document.baseURI||self.location.href,i.nc=void 0;var r={};return(()=>{i.d(r,{default:()=>Al});var s=i(9624),o=i.n(s),l=i(6990),d=i.n(l),c=i(6892),h=i.n(c),u=i(6359),m=i.n(u),A=i(2716),f=i.n(A),g=i(230),C=i.n(g),T=i(3150),S={};S.styleTagTransform=C(),S.setAttributes=m(),S.insert=h().bind(null,"head"),S.domAPI=d(),S.insertStyleElement=f(),o()(T.Z,S),T.Z&&T.Z.locals&&T.Z.locals;function k(E){return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(x){return typeof x}:function(x){return x&&typeof Symbol=="function"&&x.constructor===Symbol&&x!==Symbol.prototype?"symbol":typeof x},k(E)}function I(E){return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(x){return typeof x}:function(x){return x&&typeof Symbol=="function"&&x.constructor===Symbol&&x!==Symbol.prototype?"symbol":typeof x},I(E)}var P=setTimeout;function _(E){return!!(E&&E.length!==void 0)}function N(){}function U(E){if(!(this instanceof U))throw new TypeError("Promises must be constructed via new");if(typeof E!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],V(E,this)}function F(E,x){for(;E._state===3;)E=E._value;E._state!==0?(E._handled=!0,U._immediateFn(function(){var b=E._state===1?x.onFulfilled:x.onRejected;if(b!==null){var p;try{p=b(E._value)}catch(y){return void H(x.promise,y)}$(x.promise,p)}else(E._state===1?$:H)(x.promise,E._value)})):E._deferreds.push(x)}function $(E,x){try{if(x===E)throw new TypeError("A promise cannot be resolved with itself.");if(x&&(I(x)==="object"||typeof x=="function")){var b=x.then;if(x instanceof U)return E._state=3,E._value=x,void R(E);if(typeof b=="function")return void V((p=b,y=x,function(){p.apply(y,arguments)}),E)}E._state=1,E._value=x,R(E)}catch(w){H(E,w)}var p,y}function H(E,x){E._state=2,E._value=x,R(E)}function R(E){E._state===2&&E._deferreds.length===0&&U._immediateFn(function(){E._handled||U._unhandledRejectionFn(E._value)});for(var x=0,b=E._deferreds.length;x<b;x++)F(E,E._deferreds[x]);E._deferreds=null}function q(E,x,b){this.onFulfilled=typeof E=="function"?E:null,this.onRejected=typeof x=="function"?x:null,this.promise=b}function V(E,x){var b=!1;try{E(function(p){b||(b=!0,$(x,p))},function(p){b||(b=!0,H(x,p))})}catch(p){if(b)return;b=!0,H(x,p)}}U.prototype.catch=function(E){return this.then(null,E)},U.prototype.then=function(E,x){var b=new this.constructor(N);return F(this,new q(E,x,b)),b},U.prototype.finally=function(E){var x=this.constructor;return this.then(function(b){return x.resolve(E()).then(function(){return b})},function(b){return x.resolve(E()).then(function(){return x.reject(b)})})},U.all=function(E){return new U(function(x,b){if(!_(E))return b(new TypeError("Promise.all accepts an array"));var p=Array.prototype.slice.call(E);if(p.length===0)return x([]);var y=p.length;function w(M,z){try{if(z&&(I(z)==="object"||typeof z=="function")){var Q=z.then;if(typeof Q=="function")return void Q.call(z,function(pe){w(M,pe)},b)}p[M]=z,--y==0&&x(p)}catch(pe){b(pe)}}for(var L=0;L<p.length;L++)w(L,p[L])})},U.allSettled=function(E){return new this(function(x,b){if(!E||E.length===void 0)return b(new TypeError(k(E)+" "+E+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var p=Array.prototype.slice.call(E);if(p.length===0)return x([]);var y=p.length;function w(M,z){if(z&&(k(z)==="object"||typeof z=="function")){var Q=z.then;if(typeof Q=="function")return void Q.call(z,function(pe){w(M,pe)},function(pe){p[M]={status:"rejected",reason:pe},--y==0&&x(p)})}p[M]={status:"fulfilled",value:z},--y==0&&x(p)}for(var L=0;L<p.length;L++)w(L,p[L])})},U.resolve=function(E){return E&&I(E)==="object"&&E.constructor===U?E:new U(function(x){x(E)})},U.reject=function(E){return new U(function(x,b){b(E)})},U.race=function(E){return new U(function(x,b){if(!_(E))return b(new TypeError("Promise.race accepts an array"));for(var p=0,y=E.length;p<y;p++)U.resolve(E[p]).then(x,b)})},U._immediateFn=typeof setImmediate=="function"&&function(E){setImmediate(E)}||function(E){P(E,0)},U._unhandledRejectionFn=function(E){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",E)};const j=U;var ee=/mobile/i.test(window.navigator.userAgent);const K={secondToTime:function(E){if((E=E||0)===0||E===1/0||E.toString()==="NaN")return"00:00";var x=Math.floor(E/3600),b=Math.floor((E-3600*x)/60),p=Math.floor(E-3600*x-60*b);return(x>0?[x,b,p]:[b,p]).map(function(y){return y<10?"0"+y:""+y}).join(":")},getElementViewLeft:function(E){var x=E.offsetLeft,b=E.offsetParent,p=document.body.scrollLeft+document.documentElement.scrollLeft;if(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)for(;b!==null&&b!==E;)x+=b.offsetLeft,b=b.offsetParent;else for(;b!==null;)x+=b.offsetLeft,b=b.offsetParent;return x-p},getBoundingClientRectViewLeft:function(E){var x=window.scrollY||window.pageYOffset||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0);if(E.getBoundingClientRect){if(typeof this.getBoundingClientRectViewLeft.offset!="number"){var b=document.createElement("div");b.style.cssText="position:absolute;top:0;left:0;",document.body.appendChild(b),this.getBoundingClientRectViewLeft.offset=-b.getBoundingClientRect().top-x,document.body.removeChild(b),b=null}var p=E.getBoundingClientRect(),y=this.getBoundingClientRectViewLeft.offset;return p.left+y}return this.getElementViewLeft(E)},getScrollPosition:function(){return{left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}},setScrollPosition:function(E){var x=E.left,b=x===void 0?0:x,p=E.top,y=p===void 0?0:p;this.isFirefox?(document.documentElement.scrollLeft=b,document.documentElement.scrollTop=y):window.scrollTo(b,y)},isMobile:ee,isFirefox:/firefox/i.test(window.navigator.userAgent),isChrome:/chrome/i.test(window.navigator.userAgent),isSafari:/safari/i.test(window.navigator.userAgent),storage:{set:function(E,x){localStorage.setItem(E,x)},get:function(E){return localStorage.getItem(E)}},nameMap:{dragStart:ee?"touchstart":"mousedown",dragMove:ee?"touchmove":"mousemove",dragEnd:ee?"touchend":"mouseup"},color2Number:function(E){return E[0]==="#"&&(E=E.substr(1)),E.length===3&&(E="".concat(E[0]).concat(E[0]).concat(E[1]).concat(E[1]).concat(E[2]).concat(E[2])),parseInt(E,16)+0&16777215},number2Color:function(E){return"#"+("00000"+E.toString(16)).slice(-6)},number2Type:function(E){switch(E){case 0:default:return"right";case 1:return"top";case 2:return"bottom"}}};var Y=i(6208),W=i.n(Y);const le={send:function(E){W().post(E.url,E.data).then(function(x){var b=x.data;b&&b.code===0?E.success&&E.success(b):E.error&&E.error(b&&b.msg)}).catch(function(x){console.error(x),E.error&&E.error()})},read:function(E){W().get(E.url).then(function(x){var b=x.data;b&&b.code===0?E.success&&E.success(b.data.map(function(p){return{time:p[0],type:p[1],color:p[2],author:p[3],text:p[4]}})):E.error&&E.error(b&&b.msg)}).catch(function(x){console.error(x),E.error&&E.error()})}};function re(E){return re=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(x){return typeof x}:function(x){return x&&typeof Symbol=="function"&&x.constructor===Symbol&&x!==Symbol.prototype?"symbol":typeof x},re(E)}function de(E){var x=this;this.lang=E,this.fallbackLang=this.lang.includes("-")?this.lang.split("-")[0]:this.lang,this.tran=function(b){return b=b.toLowerCase(),fe[x.lang]&&fe[x.lang][b]?fe[x.lang][b]:fe[x.fallbackLang]&&fe[x.fallbackLang][b]?fe[x.fallbackLang][b]:ve[b]?ve[b]:b}}var ve={"danmaku-loading":"Danmaku is loading",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Input danmaku, hit Enter","about-author":"About author","dplayer-feedback":"DPlayer feedback","about-dplayer":"About DPlayer",loop:"Loop",speed:"Speed","opacity-danmaku":"Opacity for danmaku",normal:"Normal","please-input-danmaku":"Please input danmaku content!","set-danmaku-color":"Set danmaku color","set-danmaku-type":"Set danmaku type","show-danmaku":"Show danmaku","video-failed":"Video load failed","danmaku-failed":"Danmaku load failed","danmaku-send-failed":"Danmaku send failed","switching-quality":"Switching to %q quality","switched-quality":"Switched to %q quality",ff:"FF %s s",rew:"REW %s s","unlimited-danmaku":"Unlimited danmaku","send-danmaku":"Send danmaku",setting:"Setting",fullscreen:"Full screen","web-fullscreen":"Web full screen",send:"Send",screenshot:"Screenshot",airplay:"AirPlay",chromecast:"ChromeCast",subtitle:"Subtitle",off:"Off","show-subs":"Show subtitle","hide-subs":"Hide subtitle",volume:"Volume",live:"Live","video-info":"Video info"},fe={en:ve,"zh-cn":{"danmaku-loading":"弹幕加载中",top:"顶部",bottom:"底部",rolling:"滚动","input-danmaku-enter":"输入弹幕，回车发送","about-author":"关于作者","dplayer-feedback":"播放器意见反馈","about-dplayer":"关于 DPlayer 播放器",loop:"洗脑循环",speed:"速度","opacity-danmaku":"弹幕透明度",normal:"正常","please-input-danmaku":"要输入弹幕内容啊喂！","set-danmaku-color":"设置弹幕颜色","set-danmaku-type":"设置弹幕类型","show-danmaku":"显示弹幕","video-failed":"视频加载失败","danmaku-failed":"弹幕加载失败","danmaku-send-failed":"弹幕发送失败","switching-quality":"正在切换至 %q 画质","switched-quality":"已经切换至 %q 画质",ff:"快进 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"海量弹幕","send-danmaku":"发送弹幕",setting:"设置",fullscreen:"全屏","web-fullscreen":"页面全屏",send:"发送",screenshot:"截图",airplay:"无线投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"关闭","show-subs":"显示字幕","hide-subs":"隐藏字幕",volume:"音量",live:"直播","video-info":"视频统计信息"},"zh-tw":{"danmaku-loading":"彈幕載入中",top:"頂部",bottom:"底部",rolling:"滾動","input-danmaku-enter":"輸入彈幕，Enter 發送","about-author":"關於作者","dplayer-feedback":"播放器意見回饋","about-dplayer":"關於 DPlayer 播放器",loop:"循環播放",speed:"速度","opacity-danmaku":"彈幕透明度",normal:"正常","please-input-danmaku":"請輸入彈幕內容啊！","set-danmaku-color":"設定彈幕顏色","set-danmaku-type":"設定彈幕類型","show-danmaku":"顯示彈幕","video-failed":"影片載入失敗","danmaku-failed":"彈幕載入失敗","danmaku-send-failed":"彈幕發送失敗","switching-quality":"正在切換至 %q 畫質","switched-quality":"已經切換至 %q 畫質",ff:"快進 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"巨量彈幕","send-danmaku":"發送彈幕",setting:"設定",fullscreen:"全螢幕","web-fullscreen":"頁面全螢幕",send:"發送",screenshot:"截圖",airplay:"無線投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"關閉","show-subs":"顯示字幕","hide-subs":"隱藏字幕",volume:"音量",live:"直播","video-info":"影片統計訊息"},"ko-kr":{"danmaku-loading":"Danmaku를 불러오는 중입니다.",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Danmaku를 입력하고 Enter를 누르세요.","about-author":"만든이","dplayer-feedback":"피드백 보내기","about-dplayer":"DPlayer 정보",loop:"반복",speed:"배속","opacity-danmaku":"Danmaku 불투명도",normal:"표준","please-input-danmaku":"Danmaku를 입력하세요!","set-danmaku-color":"Danmaku 색상","set-danmaku-type":"Danmaku 설정","show-danmaku":"Danmaku 표시","video-failed":"비디오를 불러오지 못했습니다.","danmaku-failed":"Danmaku를 불러오지 못했습니다.","danmaku-send-failed":"Danmaku 전송에 실패했습니다.","Switching to":"","Switched to":"","switching-quality":"전환 %q 화질","switched-quality":"전환 됨 %q 화질",ff:"앞으로 %s 초",rew:"뒤로 %s 초","unlimited-danmaku":"끝없는 Danmaku","send-danmaku":"Danmaku 보내기",setting:"설정",fullscreen:"전체 화면","web-fullscreen":"웹 내 전체화면",send:"보내기",screenshot:"화면 캡쳐",airplay:"에어플레이",chromecast:"ChromeCast",subtitle:"부제",off:"끄다","show-subs":"자막 보이기","hide-subs":"자막 숨기기",Volume:"볼륨",live:"생방송","video-info":"비디오 정보"},de:{"danmaku-loading":"Danmaku lädt...",top:"Oben",bottom:"Unten",rolling:"Rollend","input-danmaku-enter":"Drücke Enter nach dem Einfügen vom Danmaku","about-author":"Über den Autor","dplayer-feedback":"DPlayer Feedback","about-dplayer":"Über DPlayer",loop:"Wiederholen",speed:"Geschwindigkeit","opacity-danmaku":"Transparenz für Danmaku",normal:"Normal","please-input-danmaku":"Bitte Danmaku Inhalt eingeben!","set-danmaku-color":"Danmaku Farbe festlegen","set-danmaku-type":"Danmaku Typ festlegen","show-danmaku":"Zeige Danmaku","video-failed":"Das Video konnte nicht geladen werden","danmaku-failed":"Danmaku konnte nicht geladen werden","danmaku-send-failed":"Das senden von Danmaku ist fehgeschlagen","switching-quality":"Wechsle zur %q Qualität","switched-quality":"Zur %q Qualität gewechselt",ff:"%s s Vorwärts",rew:"%s s Zurück","unlimited-danmaku":"Unlimitiertes Danmaku","send-danmaku":"Sende Danmaku",setting:"Einstellungen",fullscreen:"Vollbild","web-fullscreen":"Browser Vollbild",send:"Senden",screenshot:"Screenshot",airplay:"AirPlay","show-subs":"Zeige Untertitel",chromecast:"ChromeCast",subtitle:"Untertitel",off:"Schließung","hide-subs":"Verstecke Untertitel",volume:"Lautstärke",live:"Live","video-info":"Video Info"}},Ee=i(730),Pe=i.n(Ee),at=i(6074),xt=i.n(at),nn=i(4437),Yn=i.n(nn),Vn=i(2644),Vt=i.n(Vn),Z=i(1324),J=i.n(Z),Te=i(4574),Ct=i.n(Te),Fe=i(1415),Tt=i.n(Fe),St=i(5934),rn=i.n(St),ot=i(1428),Wn=i.n(ot),jn=i(2807),Qn=i.n(jn),me=i(338),Ne=i.n(me),sn=i(2254),Va=i.n(sn),Wa=i(1965),ja=i.n(Wa),Qa=i(8113),Xa=i.n(Qa),Za=i(6251),Ja=i.n(Za),eo=i(8410),to=i.n(eo),no=i(4182),io=i.n(no),ro=i(3193),so=i.n(ro);const Ye={play:Pe(),pause:xt(),volumeUp:Yn(),volumeDown:Vt(),volumeOff:J(),full:Ct(),fullWeb:Tt(),setting:rn(),right:Wn(),comment:Qn(),commentOff:Ne(),send:Va(),pallette:ja(),camera:Xa(),subtitle:to(),loading:io(),airplay:Ja(),chromecast:so()};var ao=i(1916),oo=i.n(ao);function ur(E,x){for(var b=0;b<x.length;b++){var p=x[b];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(E,p.key,p)}}var lo=function(){function E(y){(function(w,L){if(!(w instanceof L))throw new TypeError("Cannot call a class as a function")})(this,E),this.container=y.container,this.options=y.options,this.index=y.index,this.tran=y.tran,this.init()}var x,b,p;return x=E,p=[{key:"NewNotice",value:function(y,w){var L=document.createElement("div");return L.classList.add("dplayer-notice"),L.style.opacity=w,L.innerText=y,L}}],(b=[{key:"init",value:function(){this.container.innerHTML=oo()({options:this.options,index:this.index,tran:this.tran,icons:Ye,mobile:K.isMobile,video:{current:!0,pic:this.options.video.pic,screenshot:this.options.screenshot,airplay:!(!K.isSafari||K.isChrome)&&this.options.airplay,chromecast:this.options.chromecast,preload:this.options.preload,url:this.options.video.url,subtitle:this.options.subtitle}}),this.volumeBar=this.container.querySelector(".dplayer-volume-bar-inner"),this.volumeBarWrap=this.container.querySelector(".dplayer-volume-bar"),this.volumeBarWrapWrap=this.container.querySelector(".dplayer-volume-bar-wrap"),this.volumeButton=this.container.querySelector(".dplayer-volume"),this.volumeButtonIcon=this.container.querySelector(".dplayer-volume-icon"),this.volumeIcon=this.container.querySelector(".dplayer-volume-icon .dplayer-icon-content"),this.playedBar=this.container.querySelector(".dplayer-played"),this.loadedBar=this.container.querySelector(".dplayer-loaded"),this.playedBarWrap=this.container.querySelector(".dplayer-bar-wrap"),this.playedBarTime=this.container.querySelector(".dplayer-bar-time"),this.danmaku=this.container.querySelector(".dplayer-danmaku"),this.danmakuLoading=this.container.querySelector(".dplayer-danloading"),this.video=this.container.querySelector(".dplayer-video-current"),this.bezel=this.container.querySelector(".dplayer-bezel-icon"),this.playButton=this.container.querySelector(".dplayer-play-icon"),this.mobilePlayButton=this.container.querySelector(".dplayer-mobile-play"),this.videoWrap=this.container.querySelector(".dplayer-video-wrap"),this.controllerMask=this.container.querySelector(".dplayer-controller-mask"),this.ptime=this.container.querySelector(".dplayer-ptime"),this.settingButton=this.container.querySelector(".dplayer-setting-icon"),this.settingBox=this.container.querySelector(".dplayer-setting-box"),this.mask=this.container.querySelector(".dplayer-mask"),this.loop=this.container.querySelector(".dplayer-setting-loop"),this.loopToggle=this.container.querySelector(".dplayer-setting-loop .dplayer-toggle-setting-input"),this.showDanmaku=this.container.querySelector(".dplayer-setting-showdan"),this.showDanmakuToggle=this.container.querySelector(".dplayer-showdan-setting-input"),this.unlimitDanmaku=this.container.querySelector(".dplayer-setting-danunlimit"),this.unlimitDanmakuToggle=this.container.querySelector(".dplayer-danunlimit-setting-input"),this.speed=this.container.querySelector(".dplayer-setting-speed"),this.speedItem=this.container.querySelectorAll(".dplayer-setting-speed-item"),this.danmakuOpacityBar=this.container.querySelector(".dplayer-danmaku-bar-inner"),this.danmakuOpacityBarWrap=this.container.querySelector(".dplayer-danmaku-bar"),this.danmakuOpacityBarWrapWrap=this.container.querySelector(".dplayer-danmaku-bar-wrap"),this.danmakuOpacityBox=this.container.querySelector(".dplayer-setting-danmaku"),this.dtime=this.container.querySelector(".dplayer-dtime"),this.controller=this.container.querySelector(".dplayer-controller"),this.commentInput=this.container.querySelector(".dplayer-comment-input"),this.commentButton=this.container.querySelector(".dplayer-comment-icon"),this.commentSettingBox=this.container.querySelector(".dplayer-comment-setting-box"),this.commentSettingButton=this.container.querySelector(".dplayer-comment-setting-icon"),this.commentSettingFill=this.container.querySelector(".dplayer-comment-setting-icon path"),this.commentSendButton=this.container.querySelector(".dplayer-send-icon"),this.commentSendFill=this.container.querySelector(".dplayer-send-icon path"),this.commentColorSettingBox=this.container.querySelector(".dplayer-comment-setting-color"),this.browserFullButton=this.container.querySelector(".dplayer-full-icon"),this.webFullButton=this.container.querySelector(".dplayer-full-in-icon"),this.menu=this.container.querySelector(".dplayer-menu"),this.menuItem=this.container.querySelectorAll(".dplayer-menu-item"),this.qualityList=this.container.querySelector(".dplayer-quality-list"),this.camareButton=this.container.querySelector(".dplayer-camera-icon"),this.airplayButton=this.container.querySelector(".dplayer-airplay-icon"),this.chromecastButton=this.container.querySelector(".dplayer-chromecast-icon"),this.subtitleButton=this.container.querySelector(".dplayer-subtitle-icon"),this.subtitleButtonInner=this.container.querySelector(".dplayer-subtitle-icon .dplayer-icon-content"),this.subtitlesButton=this.container.querySelector(".dplayer-subtitles-icon"),this.subtitlesBox=this.container.querySelector(".dplayer-subtitles-box"),this.subtitlesItem=this.container.querySelectorAll(".dplayer-subtitles-item"),this.subtitle=this.container.querySelector(".dplayer-subtitle"),this.subtrack=this.container.querySelector(".dplayer-subtrack"),this.qualityButton=this.container.querySelector(".dplayer-quality-icon"),this.barPreview=this.container.querySelector(".dplayer-bar-preview"),this.barWrap=this.container.querySelector(".dplayer-bar-wrap"),this.noticeList=this.container.querySelector(".dplayer-notice-list"),this.infoPanel=this.container.querySelector(".dplayer-info-panel"),this.infoPanelClose=this.container.querySelector(".dplayer-info-panel-close"),this.infoVersion=this.container.querySelector(".dplayer-info-panel-item-version .dplayer-info-panel-item-data"),this.infoFPS=this.container.querySelector(".dplayer-info-panel-item-fps .dplayer-info-panel-item-data"),this.infoType=this.container.querySelector(".dplayer-info-panel-item-type .dplayer-info-panel-item-data"),this.infoUrl=this.container.querySelector(".dplayer-info-panel-item-url .dplayer-info-panel-item-data"),this.infoResolution=this.container.querySelector(".dplayer-info-panel-item-resolution .dplayer-info-panel-item-data"),this.infoDuration=this.container.querySelector(".dplayer-info-panel-item-duration .dplayer-info-panel-item-data"),this.infoDanmakuId=this.container.querySelector(".dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data"),this.infoDanmakuApi=this.container.querySelector(".dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data"),this.infoDanmakuAmount=this.container.querySelector(".dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data")}}])&&ur(x.prototype,b),p&&ur(x,p),Object.defineProperty(x,"prototype",{writable:!1}),E}();const hr=lo;function Xn(E){return Xn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(x){return typeof x}:function(x){return x&&typeof Symbol=="function"&&x.constructor===Symbol&&x!==Symbol.prototype?"symbol":typeof x},Xn(E)}function co(E,x){for(var b=0;b<x.length;b++){var p=x[b];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(E,p.key,p)}}var uo=function(){function E(p){(function(y,w){if(!(y instanceof w))throw new TypeError("Cannot call a class as a function")})(this,E),this.options=p,this.player=this.options.player,this.container=this.options.container,this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.dan=[],this.showing=!0,this._opacity=this.options.opacity,this.events=this.options.events,this.unlimited=this.options.unlimited,this._measure(""),this.load()}var x,b;return x=E,b=[{key:"load",value:function(){var p,y=this;p=this.options.api.maximum?"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id,"&max=").concat(this.options.api.maximum):"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id);var w=(this.options.api.addition||[]).slice(0);w.push(p),this.events&&this.events.trigger("danmaku_load_start",w),this._readAllEndpoints(w,function(L){y.dan=[].concat.apply([],L).sort(function(M,z){return M.time-z.time}),window.requestAnimationFrame(function(){y.frame()}),y.options.callback(),y.events&&y.events.trigger("danmaku_load_end")})}},{key:"reload",value:function(p){this.options.api=p,this.dan=[],this.clear(),this.load()}},{key:"_readAllEndpoints",value:function(p,y){for(var w=this,L=[],M=0,z=function(pe){w.options.apiBackend.read({url:p[pe],success:function(Se){L[pe]=Se,++M===p.length&&y(L)},error:function(Se){w.options.error(Se||w.options.tran("danmaku-failed")),L[pe]=[],++M===p.length&&y(L)}})},Q=0;Q<p.length;++Q)z(Q)}},{key:"send",value:function(p,y){var w=this,L={token:this.options.api.token,id:this.options.api.id,author:this.options.api.user,time:this.options.time(),text:p.text,color:p.color,type:p.type};this.options.apiBackend.send({url:this.options.api.address+"v3/",data:L,success:y,error:function(z){w.options.error(z||w.options.tran("danmaku-failed"))}}),this.dan.splice(this.danIndex,0,L),this.danIndex++;var M={text:this.htmlEncode(L.text),color:L.color,type:L.type,border:"2px solid ".concat(this.options.borderColor)};this.draw(M),this.events&&this.events.trigger("danmaku_send",L)}},{key:"frame",value:function(){var p=this;if(this.dan.length&&!this.paused&&this.showing){for(var y=this.dan[this.danIndex],w=[];y&&this.options.time()>parseFloat(y.time);)w.push(y),y=this.dan[++this.danIndex];this.draw(w)}window.requestAnimationFrame(function(){p.frame()})}},{key:"opacity",value:function(p){if(p!==void 0){for(var y=this.container.getElementsByClassName("dplayer-danmaku-item"),w=0;w<y.length;w++)y[w].style.opacity=p;this._opacity=p,this.events&&this.events.trigger("danmaku_opacity",this._opacity)}return this._opacity}},{key:"draw",value:function(p){var y=this;if(this.showing){var w=this.options.height,L=this.container.offsetWidth,M=this.container.offsetHeight,z=parseInt(M/w),Q=function(ae){var Ae=ae.offsetWidth||parseInt(ae.style.width),Bt=ae.getBoundingClientRect().right||y.container.getBoundingClientRect().right+Ae;return y.container.getBoundingClientRect().right-Bt},pe=function(ae){return(L+ae)/5},Se=function(ae,Ae,Bt){for(var dt=L/pe(Bt),gl=function(kt){var Pt=y.danTunnel[Ae][kt+""];if(!Pt||!Pt.length)return y.danTunnel[Ae][kt+""]=[ae],ae.addEventListener("animationend",function(){y.danTunnel[Ae][kt+""].splice(0,1)}),{v:kt%z};if(Ae!=="right")return"continue";for(var Wt=0;Wt<Pt.length;Wt++){var wr=Q(Pt[Wt])-10;if(wr<=L-dt*pe(parseInt(Pt[Wt].style.width))||wr<=0)break;if(Wt===Pt.length-1)return y.danTunnel[Ae][kt+""].push(ae),ae.addEventListener("animationend",function(){y.danTunnel[Ae][kt+""].splice(0,1)}),{v:kt%z}}},ai=0;y.unlimited||ai<z;ai++){var oi=gl(ai);if(oi!=="continue"&&Xn(oi)==="object")return oi.v}return-1};Object.prototype.toString.call(p)!=="[object Array]"&&(p=[p]);for(var Qe=document.createDocumentFragment(),Ge=function(ae){p[ae].type=K.number2Type(p[ae].type),p[ae].color||(p[ae].color=16777215);var Ae=document.createElement("div");Ae.classList.add("dplayer-danmaku-item"),Ae.classList.add("dplayer-danmaku-".concat(p[ae].type)),p[ae].border?Ae.innerHTML='<span style="border:'.concat(p[ae].border,'">').concat(p[ae].text,"</span>"):Ae.innerHTML=p[ae].text,Ae.style.opacity=y._opacity,Ae.style.color=K.number2Color(p[ae].color),Ae.addEventListener("animationend",function(){y.container.removeChild(Ae)});var Bt=y._measure(p[ae].text),dt=void 0;switch(p[ae].type){case"right":(dt=Se(Ae,p[ae].type,Bt))>=0&&(Ae.style.width=Bt+1+"px",Ae.style.top=w*dt+"px",Ae.style.transform="translateX(-".concat(L,"px)"));break;case"top":(dt=Se(Ae,p[ae].type))>=0&&(Ae.style.top=w*dt+"px");break;case"bottom":(dt=Se(Ae,p[ae].type))>=0&&(Ae.style.bottom=w*dt+"px");break;default:console.error("Can't handled danmaku type: ".concat(p[ae].type))}dt>=0&&(Ae.classList.add("dplayer-danmaku-move"),Ae.style.animationDuration=y._danAnimation(p[ae].type),Qe.appendChild(Ae))},mt=0;mt<p.length;mt++)Ge(mt);return this.container.appendChild(Qe),Qe}}},{key:"play",value:function(){this.paused=!1}},{key:"pause",value:function(){this.paused=!0}},{key:"_measure",value:function(p){if(!this.context){var y=getComputedStyle(this.container.getElementsByClassName("dplayer-danmaku-item")[0],null);this.context=document.createElement("canvas").getContext("2d"),this.context.font=y.getPropertyValue("font")}return this.context.measureText(p).width}},{key:"seek",value:function(){this.clear();for(var p=0;p<this.dan.length;p++){if(this.dan[p].time>=this.options.time()){this.danIndex=p;break}this.danIndex=this.dan.length}}},{key:"clear",value:function(){this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.options.container.innerHTML="",this.events&&this.events.trigger("danmaku_clear")}},{key:"htmlEncode",value:function(p){return p.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2f;")}},{key:"resize",value:function(){for(var p=this.container.offsetWidth,y=this.container.getElementsByClassName("dplayer-danmaku-item"),w=0;w<y.length;w++)y[w].style.transform="translateX(-".concat(p,"px)")}},{key:"hide",value:function(){this.showing=!1,this.pause(),this.clear(),this.events&&this.events.trigger("danmaku_hide")}},{key:"show",value:function(){this.seek(),this.showing=!0,this.play(),this.events&&this.events.trigger("danmaku_show")}},{key:"unlimit",value:function(p){this.unlimited=p}},{key:"speed",value:function(p){this.options.api.speedRate=p}},{key:"_danAnimation",value:function(p){var y=this.options.api.speedRate||1,w=!!this.player.fullScreen.isFullScreen();return{top:"".concat((w?6:4)/y,"s"),right:"".concat((w?8:5)/y,"s"),bottom:"".concat((w?6:4)/y,"s")}[p]}}],b&&co(x.prototype,b),Object.defineProperty(x,"prototype",{writable:!1}),E}();const ho=uo;function po(E,x){for(var b=0;b<x.length;b++){var p=x[b];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(E,p.key,p)}}const fo=function(){function E(){(function(p,y){if(!(p instanceof y))throw new TypeError("Cannot call a class as a function")})(this,E),this.events={},this.videoEvents=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],this.playerEvents=["screenshot","thumbnails_show","thumbnails_hide","danmaku_show","danmaku_hide","danmaku_clear","danmaku_loaded","danmaku_send","danmaku_opacity","contextmenu_show","contextmenu_hide","notice_show","notice_hide","quality_start","quality_end","destroy","resize","fullscreen","fullscreen_cancel","webfullscreen","webfullscreen_cancel","subtitle_show","subtitle_hide","subtitle_change"]}var x,b;return x=E,(b=[{key:"on",value:function(p,y){this.type(p)&&typeof y=="function"&&(this.events[p]||(this.events[p]=[]),this.events[p].push(y))}},{key:"trigger",value:function(p,y){if(this.events[p]&&this.events[p].length)for(var w=0;w<this.events[p].length;w++)this.events[p][w](y)}},{key:"type",value:function(p){return this.playerEvents.indexOf(p)!==-1?"player":this.videoEvents.indexOf(p)!==-1?"video":(console.error("Unknown event name: ".concat(p)),null)}}])&&po(x.prototype,b),Object.defineProperty(x,"prototype",{writable:!1}),E}();function mo(E,x){for(var b=0;b<x.length;b++){var p=x[b];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(E,p.key,p)}}var Ao=function(){function E(p){var y=this;(function(w,L){if(!(w instanceof L))throw new TypeError("Cannot call a class as a function")})(this,E),this.player=p,this.lastScrollPosition={left:0,top:0},this.player.events.on("webfullscreen",function(){y.player.resize()}),this.player.events.on("webfullscreen_cancel",function(){y.player.resize(),K.setScrollPosition(y.lastScrollPosition)}),this.fullscreenchange=function(){y.player.resize(),y.isFullScreen("browser")?y.player.events.trigger("fullscreen"):(K.setScrollPosition(y.lastScrollPosition),y.player.events.trigger("fullscreen_cancel"))},this.docfullscreenchange=function(){var w=document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;w&&w!==y.player.container||(y.player.resize(),w?y.player.events.trigger("fullscreen"):(K.setScrollPosition(y.lastScrollPosition),y.player.events.trigger("fullscreen_cancel")))},/Firefox/.test(navigator.userAgent)?(document.addEventListener("mozfullscreenchange",this.docfullscreenchange),document.addEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.addEventListener("fullscreenchange",this.fullscreenchange),this.player.container.addEventListener("webkitfullscreenchange",this.fullscreenchange),document.addEventListener("msfullscreenchange",this.docfullscreenchange),document.addEventListener("MSFullscreenChange",this.docfullscreenchange))}var x,b;return x=E,b=[{key:"isFullScreen",value:function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(p){case"browser":return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;case"web":return this.player.container.classList.contains("dplayer-fulled")}}},{key:"request",value:function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser",y=p==="browser"?"web":"browser",w=this.isFullScreen(y);switch(w||(this.lastScrollPosition=K.getScrollPosition()),p){case"browser":this.player.container.requestFullscreen?this.player.container.requestFullscreen():this.player.container.mozRequestFullScreen?this.player.container.mozRequestFullScreen():this.player.container.webkitRequestFullscreen?this.player.container.webkitRequestFullscreen():this.player.video.webkitEnterFullscreen?this.player.video.webkitEnterFullscreen():this.player.video.webkitEnterFullScreen?this.player.video.webkitEnterFullScreen():this.player.container.msRequestFullscreen&&this.player.container.msRequestFullscreen();break;case"web":this.player.container.classList.add("dplayer-fulled"),document.body.classList.add("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen")}w&&this.cancel(y)}},{key:"cancel",value:function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(p){case"browser":document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.webkitCancelFullscreen?document.webkitCancelFullscreen():document.msCancelFullScreen?document.msCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen();break;case"web":this.player.container.classList.remove("dplayer-fulled"),document.body.classList.remove("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen_cancel")}}},{key:"toggle",value:function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";this.isFullScreen(p)?this.cancel(p):this.request(p)}},{key:"destroy",value:function(){/Firefox/.test(navigator.userAgent)?(document.removeEventListener("mozfullscreenchange",this.docfullscreenchange),document.removeEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.removeEventListener("fullscreenchange",this.fullscreenchange),this.player.container.removeEventListener("webkitfullscreenchange",this.fullscreenchange),document.removeEventListener("msfullscreenchange",this.docfullscreenchange),document.removeEventListener("MSFullscreenChange",this.docfullscreenchange))}}],b&&mo(x.prototype,b),Object.defineProperty(x,"prototype",{writable:!1}),E}();const go=Ao;function yo(E,x){for(var b=0;b<x.length;b++){var p=x[b];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(E,p.key,p)}}var bo=function(){function E(p){(function(y,w){if(!(y instanceof w))throw new TypeError("Cannot call a class as a function")})(this,E),this.storageName={opacity:"dplayer-danmaku-opacity",volume:"dplayer-volume",unlimited:"dplayer-danmaku-unlimited",danmaku:"dplayer-danmaku-show",subtitle:"dplayer-subtitle-show"},this.default={opacity:.7,volume:p.options.hasOwnProperty("volume")?p.options.volume:.7,unlimited:(p.options.danmaku&&p.options.danmaku.unlimited?1:0)||0,danmaku:1,subtitle:1},this.data={},this.init()}var x,b;return x=E,(b=[{key:"init",value:function(){for(var p in this.storageName){var y=this.storageName[p];this.data[p]=parseFloat(K.storage.get(y)||this.default[p])}}},{key:"get",value:function(p){return this.data[p]}},{key:"set",value:function(p,y){this.data[p]=y,K.storage.set(this.storageName[p],y)}}])&&yo(x.prototype,b),Object.defineProperty(x,"prototype",{writable:!1}),E}();const vo=bo;function Eo(E,x){for(var b=0;b<x.length;b++){var p=x[b];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(E,p.key,p)}}var xo=function(){function E(p,y,w,L){(function(M,z){if(!(M instanceof z))throw new TypeError("Cannot call a class as a function")})(this,E),this.container=p,this.video=y,this.options=w,this.events=L,this.init()}var x,b;return x=E,b=[{key:"init",value:function(){var p=this;if(this.container.style.fontSize=this.options.fontSize,this.container.style.bottom=this.options.bottom,this.container.style.color=this.options.color,this.video.textTracks&&this.video.textTracks[0]){var y=this.video.textTracks[0];y.oncuechange=function(){var w=y.activeCues[y.activeCues.length-1];if(p.container.innerHTML="",w){var L=document.createElement("div");L.appendChild(w.getCueAsHTML());var M=L.innerHTML.split(/\r?\n/).map(function(z){return"<p>".concat(z,"</p>")}).join("");p.container.innerHTML=M}p.events.trigger("subtitle_change")}}}},{key:"show",value:function(){this.container.classList.remove("dplayer-subtitle-hide"),this.events.trigger("subtitle_show")}},{key:"hide",value:function(){this.container.classList.add("dplayer-subtitle-hide"),this.events.trigger("subtitle_hide")}},{key:"toggle",value:function(){this.container.classList.contains("dplayer-subtitle-hide")?this.show():this.hide()}}],b&&Eo(x.prototype,b),Object.defineProperty(x,"prototype",{writable:!1}),E}();const Co=xo;function To(E,x){for(var b=0;b<x.length;b++){var p=x[b];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(E,p.key,p)}}var So=function(){function E(p){var y=this;(function(z,Q){if(!(z instanceof Q))throw new TypeError("Cannot call a class as a function")})(this,E),this.player=p,this.player.template.mask.addEventListener("click",function(){y.hide()}),this.player.template.subtitlesButton.addEventListener("click",function(){y.adaptiveHeight(),y.show()});for(var w=this.player.template.subtitlesItem.length-1,L=function(z){y.player.template.subtitlesItem[z].addEventListener("click",function(){y.hide(),y.player.options.subtitle.index!==z&&(y.player.template.subtitle.innerHTML="<p></p>",y.player.template.subtrack.src=y.player.template.subtitlesItem[z].dataset.subtitle,y.player.options.subtitle.index=z,y.player.template.subtitle.classList.contains("dplayer-subtitle-hide")&&y.subContainerShow())})},M=0;M<w;M++)L(M);this.player.template.subtitlesItem[w].addEventListener("click",function(){y.hide(),y.player.options.subtitle.index!==w&&(y.player.template.subtitle.innerHTML="<p></p>",y.player.template.subtrack.src="",y.player.options.subtitle.index=w,y.subContainerHide())})}var x,b;return x=E,(b=[{key:"subContainerShow",value:function(){this.player.template.subtitle.classList.remove("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_show")}},{key:"subContainerHide",value:function(){this.player.template.subtitle.classList.add("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_hide")}},{key:"hide",value:function(){this.player.template.subtitlesBox.classList.remove("dplayer-subtitles-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.subtitlesBox.classList.add("dplayer-subtitles-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}},{key:"adaptiveHeight",value:function(){var p=30*this.player.template.subtitlesItem.length+14,y=.8*this.player.template.videoWrap.offsetHeight;p>=y-50?(this.player.template.subtitlesBox.style.bottom="8px",this.player.template.subtitlesBox.style["max-height"]=y-8+"px"):(this.player.template.subtitlesBox.style.bottom="50px",this.player.template.subtitlesBox.style["max-height"]=y-50+"px")}}])&&To(x.prototype,b),Object.defineProperty(x,"prototype",{writable:!1}),E}();const ko=So;function wo(E,x){for(var b=0;b<x.length;b++){var p=x[b];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(E,p.key,p)}}var Lo=function(){function E(p){(function(y,w){if(!(y instanceof w))throw new TypeError("Cannot call a class as a function")})(this,E),this.elements={},this.elements.volume=p.volumeBar,this.elements.played=p.playedBar,this.elements.loaded=p.loadedBar,this.elements.danmaku=p.danmakuOpacityBar}var x,b;return x=E,(b=[{key:"set",value:function(p,y,w){y=Math.max(y,0),y=Math.min(y,1),this.elements[p].style[w]=100*y+"%"}},{key:"get",value:function(p){return parseFloat(this.elements[p].style.width)/100}}])&&wo(x.prototype,b),Object.defineProperty(x,"prototype",{writable:!1}),E}();const Io=Lo;function Ro(E,x){for(var b=0;b<x.length;b++){var p=x[b];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(E,p.key,p)}}var Do=function(){function E(p){(function(y,w){if(!(y instanceof w))throw new TypeError("Cannot call a class as a function")})(this,E),this.player=p,window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(y){window.setTimeout(y,1e3/60)},this.types=["loading","info","fps"],this.init()}var x,b;return x=E,(b=[{key:"init",value:function(){var p=this;this.types.map(function(y){return y!=="fps"&&p["init".concat(y,"Checker")](),y})}},{key:"initloadingChecker",value:function(){var p=this,y=0,w=0,L=!1;this.loadingChecker=setInterval(function(){p.enableloadingChecker&&(w=p.player.video.currentTime,L||w!==y||p.player.video.paused||(p.player.container.classList.add("dplayer-loading"),L=!0),L&&w>y&&!p.player.video.paused&&(p.player.container.classList.remove("dplayer-loading"),L=!1),y=w)},100)}},{key:"initfpsChecker",value:function(){var p=this;window.requestAnimationFrame(function(){if(p.enablefpsChecker)if(p.initfpsChecker(),p.fpsStart){p.fpsIndex++;var y=new Date;y-p.fpsStart>1e3&&(p.player.infoPanel.fps(p.fpsIndex/(y-p.fpsStart)*1e3),p.fpsStart=new Date,p.fpsIndex=0)}else p.fpsStart=new Date,p.fpsIndex=0;else p.fpsStart=0,p.fpsIndex=0})}},{key:"initinfoChecker",value:function(){var p=this;this.infoChecker=setInterval(function(){p.enableinfoChecker&&p.player.infoPanel.update()},1e3)}},{key:"enable",value:function(p){this["enable".concat(p,"Checker")]=!0,p==="fps"&&this.initfpsChecker()}},{key:"disable",value:function(p){this["enable".concat(p,"Checker")]=!1}},{key:"destroy",value:function(){var p=this;this.types.map(function(y){return p["enable".concat(y,"Checker")]=!1,p["".concat(y,"Checker")]&&clearInterval(p["".concat(y,"Checker")]),y})}}])&&Ro(x.prototype,b),Object.defineProperty(x,"prototype",{writable:!1}),E}();const _o=Do;function Bo(E,x){for(var b=0;b<x.length;b++){var p=x[b];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(E,p.key,p)}}const Po=function(){function E(p){var y=this;(function(w,L){if(!(w instanceof L))throw new TypeError("Cannot call a class as a function")})(this,E),this.container=p,this.container.addEventListener("animationend",function(){y.container.classList.remove("dplayer-bezel-transition")})}var x,b;return x=E,(b=[{key:"switch",value:function(p){this.container.innerHTML=p,this.container.classList.add("dplayer-bezel-transition")}}])&&Bo(x.prototype,b),Object.defineProperty(x,"prototype",{writable:!1}),E}();function Oo(E,x){for(var b=0;b<x.length;b++){var p=x[b];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(E,p.key,p)}}var Fo=function(){function E(p){(function(y,w){if(!(y instanceof w))throw new TypeError("Cannot call a class as a function")})(this,E),this.container=p.container,this.barWidth=p.barWidth,this.container.style.backgroundImage="url('".concat(p.url,"')"),this.events=p.events}var x,b;return x=E,(b=[{key:"resize",value:function(p,y,w){this.container.style.width="".concat(p,"px"),this.container.style.height="".concat(y,"px"),this.container.style.top="".concat(2-y,"px"),this.barWidth=w}},{key:"show",value:function(){this.container.style.display="block",this.events&&this.events.trigger("thumbnails_show")}},{key:"move",value:function(p){this.container.style.backgroundPosition="-".concat(160*(Math.ceil(p/this.barWidth*100)-1),"px 0"),this.container.style.left="".concat(Math.min(Math.max(p-this.container.offsetWidth/2,-10),this.barWidth-150),"px")}},{key:"hide",value:function(){this.container.style.display="none",this.events&&this.events.trigger("thumbnails_hide")}}])&&Oo(x.prototype,b),Object.defineProperty(x,"prototype",{writable:!1}),E}();const Mo=Fo;var Zn=function(E,x){return Zn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,p){b.__proto__=p}||function(b,p){for(var y in p)Object.prototype.hasOwnProperty.call(p,y)&&(b[y]=p[y])},Zn(E,x)};function an(E,x){if(typeof x!="function"&&x!==null)throw new TypeError("Class extends value "+String(x)+" is not a constructor or null");function b(){this.constructor=E}Zn(E,x),E.prototype=x===null?Object.create(x):(b.prototype=x.prototype,new b)}function Jn(E){var x=typeof Symbol=="function"&&Symbol.iterator,b=x&&E[x],p=0;if(b)return b.call(E);if(E&&typeof E.length=="number")return{next:function(){return E&&p>=E.length&&(E=void 0),{value:E&&E[p++],done:!E}}};throw new TypeError(x?"Object is not iterable.":"Symbol.iterator is not defined.")}function on(E,x){var b=typeof Symbol=="function"&&E[Symbol.iterator];if(!b)return E;var p,y,w=b.call(E),L=[];try{for(;(x===void 0||x-- >0)&&!(p=w.next()).done;)L.push(p.value)}catch(M){y={error:M}}finally{try{p&&!p.done&&(b=w.return)&&b.call(w)}finally{if(y)throw y.error}}return L}function ln(E,x,b){if(b||arguments.length===2)for(var p,y=0,w=x.length;y<w;y++)!p&&y in x||(p||(p=Array.prototype.slice.call(x,0,y)),p[y]=x[y]);return E.concat(p||Array.prototype.slice.call(x))}function lt(E){return typeof E=="function"}function pr(E){var x=E(function(b){Error.call(b),b.stack=new Error().stack});return x.prototype=Object.create(Error.prototype),x.prototype.constructor=x,x}var ei=pr(function(E){return function(x){E(this),this.message=x?x.length+` errors occurred during unsubscription:
`+x.map(function(b,p){return p+1+") "+b.toString()}).join(""):"",this.name="UnsubscriptionError",this.errors=x}});function ti(E,x){if(E){var b=E.indexOf(x);0<=b&&E.splice(b,1)}}var dn=function(){function E(b){this.initialTeardown=b,this.closed=!1,this._parentage=null,this._finalizers=null}var x;return E.prototype.unsubscribe=function(){var b,p,y,w,L;if(!this.closed){this.closed=!0;var M=this._parentage;if(M)if(this._parentage=null,Array.isArray(M))try{for(var z=Jn(M),Q=z.next();!Q.done;Q=z.next())Q.value.remove(this)}catch(ae){b={error:ae}}finally{try{Q&&!Q.done&&(p=z.return)&&p.call(z)}finally{if(b)throw b.error}}else M.remove(this);var pe=this.initialTeardown;if(lt(pe))try{pe()}catch(ae){L=ae instanceof ei?ae.errors:[ae]}var Se=this._finalizers;if(Se){this._finalizers=null;try{for(var Qe=Jn(Se),Ge=Qe.next();!Ge.done;Ge=Qe.next()){var mt=Ge.value;try{Ar(mt)}catch(ae){L=L??[],ae instanceof ei?L=ln(ln([],on(L)),on(ae.errors)):L.push(ae)}}}catch(ae){y={error:ae}}finally{try{Ge&&!Ge.done&&(w=Qe.return)&&w.call(Qe)}finally{if(y)throw y.error}}}if(L)throw new ei(L)}},E.prototype.add=function(b){var p;if(b&&b!==this)if(this.closed)Ar(b);else{if(b instanceof E){if(b.closed||b._hasParent(this))return;b._addParent(this)}(this._finalizers=(p=this._finalizers)!==null&&p!==void 0?p:[]).push(b)}},E.prototype._hasParent=function(b){var p=this._parentage;return p===b||Array.isArray(p)&&p.includes(b)},E.prototype._addParent=function(b){var p=this._parentage;this._parentage=Array.isArray(p)?(p.push(b),p):p?[p,b]:b},E.prototype._removeParent=function(b){var p=this._parentage;p===b?this._parentage=null:Array.isArray(p)&&ti(p,b)},E.prototype.remove=function(b){var p=this._finalizers;p&&ti(p,b),b instanceof E&&b._removeParent(this)},E.EMPTY=((x=new E).closed=!0,x),E}(),fr=dn.EMPTY;function mr(E){return E instanceof dn||E&&"closed"in E&&lt(E.remove)&&lt(E.add)&&lt(E.unsubscribe)}function Ar(E){lt(E)?E():E.unsubscribe()}var No=void 0,Uo=!1,ni={setTimeout:function(E){function x(b,p){return E.apply(this,arguments)}return x.toString=function(){return E.toString()},x}(function(E,x){for(var b=[],p=2;p<arguments.length;p++)b[p-2]=arguments[p];var y=ni.delegate;return y!=null&&y.setTimeout?y.setTimeout.apply(y,ln([E,x],on(b))):setTimeout.apply(void 0,ln([E,x],on(b)))}),clearTimeout:function(E){function x(b){return E.apply(this,arguments)}return x.toString=function(){return E.toString()},x}(function(E){var x=ni.delegate;return((x==null?void 0:x.clearTimeout)||clearTimeout)(E)}),delegate:void 0};function gr(){}function cn(E){E()}var yr=function(E){function x(b){var p=E.call(this)||this;return p.isStopped=!1,b?(p.destination=b,mr(b)&&b.add(p)):p.destination=Ko,p}return an(x,E),x.create=function(b,p,y){return new ri(b,p,y)},x.prototype.next=function(b){this.isStopped?void 0:this._next(b)},x.prototype.error=function(b){this.isStopped?void 0:(this.isStopped=!0,this._error(b))},x.prototype.complete=function(){this.isStopped?void 0:(this.isStopped=!0,this._complete())},x.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,E.prototype.unsubscribe.call(this),this.destination=null)},x.prototype._next=function(b){this.destination.next(b)},x.prototype._error=function(b){try{this.destination.error(b)}finally{this.unsubscribe()}},x.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},x}(dn),$o=Function.prototype.bind;function ii(E,x){return $o.call(E,x)}var Go=function(){function E(x){this.partialObserver=x}return E.prototype.next=function(x){var b=this.partialObserver;if(b.next)try{b.next(x)}catch(p){un(p)}},E.prototype.error=function(x){var b=this.partialObserver;if(b.error)try{b.error(x)}catch(p){un(p)}else un(x)},E.prototype.complete=function(){var x=this.partialObserver;if(x.complete)try{x.complete()}catch(b){un(b)}},E}(),ri=function(E){function x(b,p,y){var w,L,M=E.call(this)||this;return lt(b)||!b?w={next:b??void 0,error:p??void 0,complete:y??void 0}:M&&Uo?((L=Object.create(b)).unsubscribe=function(){return M.unsubscribe()},w={next:b.next&&ii(b.next,L),error:b.error&&ii(b.error,L),complete:b.complete&&ii(b.complete,L)}):w=b,M.destination=new Go(w),M}return an(x,E),x}(yr);function un(E){(function(x){ni.setTimeout(function(){throw x})})(E)}function qp(E,x){}var Ko={closed:!0,next:gr,error:function(E){throw E},complete:gr},Ho=typeof Symbol=="function"&&Symbol.observable||"@@observable";function qo(E){return E}function zo(E){return E.length===0?qo:E.length===1?E[0]:function(x){return E.reduce(function(b,p){return p(b)},x)}}var br=function(){function E(x){x&&(this._subscribe=x)}return E.prototype.lift=function(x){var b=new E;return b.source=this,b.operator=x,b},E.prototype.subscribe=function(x,b,p){var y,w=this,L=(y=x)&&y instanceof yr||function(M){return M&&lt(M.next)&&lt(M.error)&&lt(M.complete)}(y)&&mr(y)?x:new ri(x,b,p);return cn(function(){var M=w,z=M.operator,Q=M.source;L.add(z?z.call(L,Q):Q?w._subscribe(L):w._trySubscribe(L))}),L},E.prototype._trySubscribe=function(x){try{return this._subscribe(x)}catch(b){x.error(b)}},E.prototype.forEach=function(x,b){var p=this;return new(b=vr(b))(function(y,w){var L=new ri({next:function(M){try{x(M)}catch(z){w(z),L.unsubscribe()}},error:w,complete:y});p.subscribe(L)})},E.prototype._subscribe=function(x){var b;return(b=this.source)===null||b===void 0?void 0:b.subscribe(x)},E.prototype[Ho]=function(){return this},E.prototype.pipe=function(){for(var x=[],b=0;b<arguments.length;b++)x[b]=arguments[b];return zo(x)(this)},E.prototype.toPromise=function(x){var b=this;return new(x=vr(x))(function(p,y){var w;b.subscribe(function(L){return w=L},function(L){return y(L)},function(){return p(w)})})},E.create=function(x){return new E(x)},E}();function vr(E){var x;return(x=E??No)!==null&&x!==void 0?x:Promise}var ft,Yo=pr(function(E){return function(){E(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),Er=function(E){function x(){var b=E.call(this)||this;return b.closed=!1,b.currentObservers=null,b.observers=[],b.isStopped=!1,b.hasError=!1,b.thrownError=null,b}return an(x,E),x.prototype.lift=function(b){var p=new xr(this,this);return p.operator=b,p},x.prototype._throwIfClosed=function(){if(this.closed)throw new Yo},x.prototype.next=function(b){var p=this;cn(function(){var y,w;if(p._throwIfClosed(),!p.isStopped){p.currentObservers||(p.currentObservers=Array.from(p.observers));try{for(var L=Jn(p.currentObservers),M=L.next();!M.done;M=L.next())M.value.next(b)}catch(z){y={error:z}}finally{try{M&&!M.done&&(w=L.return)&&w.call(L)}finally{if(y)throw y.error}}}})},x.prototype.error=function(b){var p=this;cn(function(){if(p._throwIfClosed(),!p.isStopped){p.hasError=p.isStopped=!0,p.thrownError=b;for(var y=p.observers;y.length;)y.shift().error(b)}})},x.prototype.complete=function(){var b=this;cn(function(){if(b._throwIfClosed(),!b.isStopped){b.isStopped=!0;for(var p=b.observers;p.length;)p.shift().complete()}})},x.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(x.prototype,"observed",{get:function(){var b;return((b=this.observers)===null||b===void 0?void 0:b.length)>0},enumerable:!1,configurable:!0}),x.prototype._trySubscribe=function(b){return this._throwIfClosed(),E.prototype._trySubscribe.call(this,b)},x.prototype._subscribe=function(b){return this._throwIfClosed(),this._checkFinalizedStatuses(b),this._innerSubscribe(b)},x.prototype._innerSubscribe=function(b){var p=this,y=this,w=y.hasError,L=y.isStopped,M=y.observers;return w||L?fr:(this.currentObservers=null,M.push(b),new dn(function(){p.currentObservers=null,ti(M,b)}))},x.prototype._checkFinalizedStatuses=function(b){var p=this,y=p.hasError,w=p.thrownError,L=p.isStopped;y?b.error(w):L&&b.complete()},x.prototype.asObservable=function(){var b=new br;return b.source=this,b},x.create=function(b,p){return new xr(b,p)},x}(br),xr=function(E){function x(b,p){var y=E.call(this)||this;return y.destination=b,y.source=p,y}return an(x,E),x.prototype.next=function(b){var p,y;(y=(p=this.destination)===null||p===void 0?void 0:p.next)===null||y===void 0||y.call(p,b)},x.prototype.error=function(b){var p,y;(y=(p=this.destination)===null||p===void 0?void 0:p.error)===null||y===void 0||y.call(p,b)},x.prototype.complete=function(){var b,p;(p=(b=this.destination)===null||b===void 0?void 0:b.complete)===null||p===void 0||p.call(b)},x.prototype._subscribe=function(b){var p,y;return(y=(p=this.source)===null||p===void 0?void 0:p.subscribe(b))!==null&&y!==void 0?y:fr},x}(Er);function Vo(E,x){for(var b=0;b<x.length;b++){var p=x[b];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(E,p.key,p)}}var Cr=!0,si=!1,Wo=function(){function E(p){(function(y,w){if(!(y instanceof w))throw new TypeError("Cannot call a class as a function")})(this,E),this.player=p,this.autoHideTimer=0,K.isMobile||(this.setAutoHideHandler=this.setAutoHide.bind(this),this.player.container.addEventListener("mousemove",this.setAutoHideHandler),this.player.container.addEventListener("click",this.setAutoHideHandler),this.player.on("play",this.setAutoHideHandler),this.player.on("pause",this.setAutoHideHandler)),this.initPlayButton(),this.initThumbnails(),this.initPlayedBar(),this.initFullButton(),this.initQualityButton(),this.initScreenshotButton(),this.player.options.subtitle&&typeof this.player.options.subtitle.url=="string"&&this.initSubtitleButton(),this.initHighlights(),this.initAirplayButton(),this.initChromecastButton(),K.isMobile||this.initVolumeButton()}var x,b;return x=E,(b=[{key:"initPlayButton",value:function(){var p=this;this.player.template.playButton.addEventListener("click",function(){p.player.toggle()}),this.player.template.mobilePlayButton.addEventListener("click",function(){p.player.toggle()}),K.isMobile?(this.player.template.videoWrap.addEventListener("click",function(){p.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){p.toggle()})):this.player.options.preventClickToggle||(this.player.template.videoWrap.addEventListener("click",function(){p.player.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){p.player.toggle()}))}},{key:"initHighlights",value:function(){var p=this;this.player.on("durationchange",function(){if(p.player.video.duration!==1&&p.player.video.duration!==1/0&&p.player.options.highlight){var y=p.player.template.playedBarWrap.querySelectorAll(".dplayer-highlight");[].slice.call(y,0).forEach(function(M){p.player.template.playedBarWrap.removeChild(M)});for(var w=0;w<p.player.options.highlight.length;w++)if(p.player.options.highlight[w].text&&p.player.options.highlight[w].time){var L=document.createElement("div");L.classList.add("dplayer-highlight"),L.style.left=p.player.options.highlight[w].time/p.player.video.duration*100+"%",L.innerHTML='<span class="dplayer-highlight-text">'+p.player.options.highlight[w].text+"</span>",p.player.template.playedBarWrap.insertBefore(L,p.player.template.playedBarTime)}}})}},{key:"initThumbnails",value:function(){var p=this;this.player.options.video.thumbnails&&(this.thumbnails=new Mo({container:this.player.template.barPreview,barWidth:this.player.template.barWrap.offsetWidth,url:this.player.options.video.thumbnails,events:this.player.events}),this.player.on("loadedmetadata",function(){p.thumbnails.resize(160,p.player.video.videoHeight/p.player.video.videoWidth*160,p.player.template.barWrap.offsetWidth)}))}},{key:"initPlayedBar",value:function(){var p=this,y=function(L){var M=((L.clientX||L.changedTouches[0].clientX)-K.getBoundingClientRectViewLeft(p.player.template.playedBarWrap))/p.player.template.playedBarWrap.clientWidth;M=Math.max(M,0),M=Math.min(M,1),p.player.bar.set("played",M,"width"),p.player.template.ptime.innerHTML=K.secondToTime(M*p.player.video.duration)},w=function L(M){document.removeEventListener(K.nameMap.dragEnd,L),document.removeEventListener(K.nameMap.dragMove,y);var z=((M.clientX||M.changedTouches[0].clientX)-K.getBoundingClientRectViewLeft(p.player.template.playedBarWrap))/p.player.template.playedBarWrap.clientWidth;z=Math.max(z,0),z=Math.min(z,1),p.player.bar.set("played",z,"width"),p.player.seek(p.player.bar.get("played")*p.player.video.duration),p.player.timer.enable("progress")};this.player.template.playedBarWrap.addEventListener(K.nameMap.dragStart,function(){p.player.timer.disable("progress"),document.addEventListener(K.nameMap.dragMove,y),document.addEventListener(K.nameMap.dragEnd,w)}),this.player.template.playedBarWrap.addEventListener(K.nameMap.dragMove,function(L){if(p.player.video.duration){var M=p.player.template.playedBarWrap.getBoundingClientRect().left,z=(L.clientX||L.changedTouches[0].clientX)-M;if(z<0||z>p.player.template.playedBarWrap.offsetWidth)return;var Q=p.player.video.duration*(z/p.player.template.playedBarWrap.offsetWidth);K.isMobile&&p.thumbnails&&p.thumbnails.show(),p.thumbnails&&p.thumbnails.move(z),p.player.template.playedBarTime.style.left="".concat(z-(Q>=3600?25:20),"px"),p.player.template.playedBarTime.innerText=K.secondToTime(Q),p.player.template.playedBarTime.classList.remove("hidden")}}),this.player.template.playedBarWrap.addEventListener(K.nameMap.dragEnd,function(){K.isMobile&&p.thumbnails&&p.thumbnails.hide()}),K.isMobile||(this.player.template.playedBarWrap.addEventListener("mouseenter",function(){p.player.video.duration&&(p.thumbnails&&p.thumbnails.show(),p.player.template.playedBarTime.classList.remove("hidden"))}),this.player.template.playedBarWrap.addEventListener("mouseleave",function(){p.player.video.duration&&(p.thumbnails&&p.thumbnails.hide(),p.player.template.playedBarTime.classList.add("hidden"))}))}},{key:"initFullButton",value:function(){var p=this;this.player.template.browserFullButton.addEventListener("click",function(){p.player.fullScreen.toggle("browser")}),this.player.template.webFullButton.addEventListener("click",function(){p.player.fullScreen.toggle("web")})}},{key:"initVolumeButton",value:function(){var p=this,y=function(L){var M=L||window.event,z=((M.clientX||M.changedTouches[0].clientX)-K.getBoundingClientRectViewLeft(p.player.template.volumeBarWrap)-5.5)/35;p.player.volume(z)},w=function L(){document.removeEventListener(K.nameMap.dragEnd,L),document.removeEventListener(K.nameMap.dragMove,y),p.player.template.volumeButton.classList.remove("dplayer-volume-active")};this.player.template.volumeBarWrapWrap.addEventListener("click",function(L){var M=L||window.event,z=((M.clientX||M.changedTouches[0].clientX)-K.getBoundingClientRectViewLeft(p.player.template.volumeBarWrap)-5.5)/35;p.player.volume(z)}),this.player.template.volumeBarWrapWrap.addEventListener(K.nameMap.dragStart,function(){document.addEventListener(K.nameMap.dragMove,y),document.addEventListener(K.nameMap.dragEnd,w),p.player.template.volumeButton.classList.add("dplayer-volume-active")}),this.player.template.volumeButtonIcon.addEventListener("click",function(){p.player.video.muted?(p.player.video.muted=!1,p.player.switchVolumeIcon(),p.player.bar.set("volume",p.player.volume(),"width")):(p.player.video.muted=!0,p.player.template.volumeIcon.innerHTML=Ye.volumeOff,p.player.bar.set("volume",0,"width"))})}},{key:"initQualityButton",value:function(){var p=this;this.player.options.video.quality&&this.player.template.qualityList.addEventListener("click",function(y){y.target.classList.contains("dplayer-quality-item")&&p.player.switchQuality(y.target.dataset.index)})}},{key:"initScreenshotButton",value:function(){var p=this;this.player.options.screenshot&&this.player.template.camareButton.addEventListener("click",function(){var y,w=document.createElement("canvas");w.width=p.player.video.videoWidth,w.height=p.player.video.videoHeight,w.getContext("2d").drawImage(p.player.video,0,0,w.width,w.height),w.toBlob(function(L){y=URL.createObjectURL(L);var M=document.createElement("a");M.href=y,M.download="DPlayer.png",M.style.display="none",document.body.appendChild(M),M.click(),document.body.removeChild(M),URL.revokeObjectURL(y),p.player.events.trigger("screenshot",y)})})}},{key:"initAirplayButton",value:function(){this.player.options.airplay&&(window.WebKitPlaybackTargetAvailabilityEvent?this.player.video.addEventListener("webkitplaybacktargetavailabilitychanged",function(p){p.availability==="available"?this.template.airplayButton.disable=!1:this.template.airplayButton.disable=!0,this.template.airplayButton.addEventListener("click",function(){this.video.webkitShowPlaybackTargetPicker()}.bind(this))}.bind(this.player)):this.player.template.airplayButton.style.display="none")}},{key:"initChromecast",value:function(){var p=window.document.createElement("script");p.setAttribute("type","text/javascript"),p.setAttribute("src","https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"),window.document.body.appendChild(p),window.__onGCastApiAvailable=function(y){if(y){var w=new(ft=window.chrome.cast).SessionRequest(ft.media.DEFAULT_MEDIA_RECEIVER_APP_ID),L=new ft.ApiConfig(w,function(){},function(M){M===ft.ReceiverAvailability.AVAILABLE&&console.log("chromecast: ",M)});ft.initialize(L,function(){})}}}},{key:"initChromecastButton",value:function(){var p=this;if(this.player.options.chromecast){Cr&&(Cr=!1,this.initChromecast());var y=function(L,M){p.currentMedia=M},w=function(L){console.error("Error launching media",L)};this.player.template.chromecastButton.addEventListener("click",function(){var L;si?(si=!1,p.currentMedia.stop(),p.session.stop(),p.initChromecast()):(si=!0,L=new Er,ft.requestSession(function(M){var z,Q,pe;p.session=M,L.next("CONNECTED"),z=p.player.options.video.url,Q=new ft.media.MediaInfo(z),pe=new ft.media.LoadRequest(Q),p.session?p.session.loadMedia(pe,y.bind(p,"loadMedia"),w).play():window.open(z)},function(M){M.code==="cancel"?(p.session=void 0,L.next("CANCEL")):console.error("Error selecting a cast device",M)}))})}}},{key:"initSubtitleButton",value:function(){var p=this;this.player.events.on("subtitle_show",function(){p.player.template.subtitleButton.dataset.balloon=p.player.tran("hide-subs"),p.player.template.subtitleButtonInner.style.opacity="",p.player.user.set("subtitle",1)}),this.player.events.on("subtitle_hide",function(){p.player.template.subtitleButton.dataset.balloon=p.player.tran("show-subs"),p.player.template.subtitleButtonInner.style.opacity="0.4",p.player.user.set("subtitle",0)}),this.player.template.subtitleButton.addEventListener("click",function(){p.player.subtitle.toggle()})}},{key:"setAutoHide",value:function(){var p=this;this.show(),clearTimeout(this.autoHideTimer),this.autoHideTimer=setTimeout(function(){!p.player.video.played.length||p.player.paused||p.disableAutoHide||p.hide()},3e3)}},{key:"show",value:function(){this.player.container.classList.remove("dplayer-hide-controller")}},{key:"hide",value:function(){this.player.container.classList.add("dplayer-hide-controller"),this.player.setting.hide(),this.player.comment&&this.player.comment.hide()}},{key:"isShow",value:function(){return!this.player.container.classList.contains("dplayer-hide-controller")}},{key:"toggle",value:function(){this.isShow()?this.hide():this.show()}},{key:"destroy",value:function(){K.isMobile||(this.player.container.removeEventListener("mousemove",this.setAutoHideHandler),this.player.container.removeEventListener("click",this.setAutoHideHandler)),clearTimeout(this.autoHideTimer)}}])&&Vo(x.prototype,b),Object.defineProperty(x,"prototype",{writable:!1}),E}();const jo=Wo;function Qo(E,x){for(var b=0;b<x.length;b++){var p=x[b];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(E,p.key,p)}}var Xo=function(){function E(p){var y=this;(function(Q,pe){if(!(Q instanceof pe))throw new TypeError("Cannot call a class as a function")})(this,E),this.player=p,this.player.template.mask.addEventListener("click",function(){y.hide()}),this.player.template.settingButton.addEventListener("click",function(){y.show()}),this.loop=this.player.options.loop,this.player.template.loopToggle.checked=this.loop,this.player.template.loop.addEventListener("click",function(){y.player.template.loopToggle.checked=!y.player.template.loopToggle.checked,y.player.template.loopToggle.checked?y.loop=!0:y.loop=!1,y.hide()}),this.showDanmaku=this.player.user.get("danmaku"),this.showDanmaku||this.player.danmaku&&this.player.danmaku.hide(),this.player.template.showDanmakuToggle.checked=this.showDanmaku,this.player.template.showDanmaku.addEventListener("click",function(){y.player.template.showDanmakuToggle.checked=!y.player.template.showDanmakuToggle.checked,y.player.template.showDanmakuToggle.checked?(y.showDanmaku=!0,y.player.danmaku.show()):(y.showDanmaku=!1,y.player.danmaku.hide()),y.player.user.set("danmaku",y.showDanmaku?1:0),y.hide()}),this.unlimitDanmaku=this.player.user.get("unlimited"),this.player.template.unlimitDanmakuToggle.checked=this.unlimitDanmaku,this.player.template.unlimitDanmaku.addEventListener("click",function(){y.player.template.unlimitDanmakuToggle.checked=!y.player.template.unlimitDanmakuToggle.checked,y.player.template.unlimitDanmakuToggle.checked?(y.unlimitDanmaku=!0,y.player.danmaku.unlimit(!0)):(y.unlimitDanmaku=!1,y.player.danmaku.unlimit(!1)),y.player.user.set("unlimited",y.unlimitDanmaku?1:0),y.hide()}),this.player.template.speed.addEventListener("click",function(){y.player.template.settingBox.classList.add("dplayer-setting-box-narrow"),y.player.template.settingBox.classList.add("dplayer-setting-box-speed")});for(var w=function(Q){y.player.template.speedItem[Q].addEventListener("click",function(){y.player.speed(y.player.template.speedItem[Q].dataset.speed),y.hide()})},L=0;L<this.player.template.speedItem.length;L++)w(L);if(this.player.danmaku){this.player.on("danmaku_opacity",function(Q){y.player.bar.set("danmaku",Q,"width"),y.player.user.set("opacity",Q)}),this.player.danmaku.opacity(this.player.user.get("opacity"));var M=function(Q){var pe=Q||window.event,Se=((pe.clientX||pe.changedTouches[0].clientX)-K.getBoundingClientRectViewLeft(y.player.template.danmakuOpacityBarWrap))/130;Se=Math.max(Se,0),Se=Math.min(Se,1),y.player.danmaku.opacity(Se)},z=function Q(){document.removeEventListener(K.nameMap.dragEnd,Q),document.removeEventListener(K.nameMap.dragMove,M),y.player.template.danmakuOpacityBox.classList.remove("dplayer-setting-danmaku-active")};this.player.template.danmakuOpacityBarWrapWrap.addEventListener("click",function(Q){var pe=Q||window.event,Se=((pe.clientX||pe.changedTouches[0].clientX)-K.getBoundingClientRectViewLeft(y.player.template.danmakuOpacityBarWrap))/130;Se=Math.max(Se,0),Se=Math.min(Se,1),y.player.danmaku.opacity(Se)}),this.player.template.danmakuOpacityBarWrapWrap.addEventListener(K.nameMap.dragStart,function(){document.addEventListener(K.nameMap.dragMove,M),document.addEventListener(K.nameMap.dragEnd,z),y.player.template.danmakuOpacityBox.classList.add("dplayer-setting-danmaku-active")})}}var x,b;return x=E,(b=[{key:"hide",value:function(){var p=this;this.player.template.settingBox.classList.remove("dplayer-setting-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),setTimeout(function(){p.player.template.settingBox.classList.remove("dplayer-setting-box-narrow"),p.player.template.settingBox.classList.remove("dplayer-setting-box-speed")},300),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.settingBox.classList.add("dplayer-setting-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}}])&&Qo(x.prototype,b),Object.defineProperty(x,"prototype",{writable:!1}),E}();const Zo=Xo;function Jo(E,x){for(var b=0;b<x.length;b++){var p=x[b];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(E,p.key,p)}}var el=function(){function E(p){var y=this;(function(w,L){if(!(w instanceof L))throw new TypeError("Cannot call a class as a function")})(this,E),this.player=p,this.player.template.mask.addEventListener("click",function(){y.hide()}),this.player.template.commentButton.addEventListener("click",function(){y.show()}),this.player.template.commentSettingButton.addEventListener("click",function(){y.toggleSetting()}),this.player.template.commentColorSettingBox.addEventListener("click",function(){if(y.player.template.commentColorSettingBox.querySelector("input:checked+span")){var w=y.player.template.commentColorSettingBox.querySelector("input:checked").value;y.player.template.commentSettingFill.style.fill=w,y.player.template.commentInput.style.color=w,y.player.template.commentSendFill.style.fill=w}}),this.player.template.commentInput.addEventListener("click",function(){y.hideSetting()}),this.player.template.commentInput.addEventListener("keydown",function(w){(w||window.event).keyCode===13&&y.send()}),this.player.template.commentSendButton.addEventListener("click",function(){y.send()})}var x,b;return x=E,(b=[{key:"show",value:function(){this.player.controller.disableAutoHide=!0,this.player.template.controller.classList.add("dplayer-controller-comment"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.container.classList.add("dplayer-show-controller"),this.player.template.commentInput.focus()}},{key:"hide",value:function(){this.player.template.controller.classList.remove("dplayer-controller-comment"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.container.classList.remove("dplayer-show-controller"),this.player.controller.disableAutoHide=!1,this.hideSetting()}},{key:"showSetting",value:function(){this.player.template.commentSettingBox.classList.add("dplayer-comment-setting-open")}},{key:"hideSetting",value:function(){this.player.template.commentSettingBox.classList.remove("dplayer-comment-setting-open")}},{key:"toggleSetting",value:function(){this.player.template.commentSettingBox.classList.contains("dplayer-comment-setting-open")?this.hideSetting():this.showSetting()}},{key:"send",value:function(){var p=this;this.player.template.commentInput.blur(),this.player.template.commentInput.value.replace(/^\s+|\s+$/g,"")?this.player.danmaku.send({text:this.player.template.commentInput.value,color:K.color2Number(this.player.container.querySelector(".dplayer-comment-setting-color input:checked").value),type:parseInt(this.player.container.querySelector(".dplayer-comment-setting-type input:checked").value)},function(){p.player.template.commentInput.value="",p.hide()}):this.player.notice(this.player.tran("please-input-danmaku"))}}])&&Jo(x.prototype,b),Object.defineProperty(x,"prototype",{writable:!1}),E}();const tl=el;function nl(E,x){for(var b=0;b<x.length;b++){var p=x[b];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(E,p.key,p)}}var il=function(){function E(p){(function(y,w){if(!(y instanceof w))throw new TypeError("Cannot call a class as a function")})(this,E),this.player=p,this.doHotKeyHandler=this.doHotKey.bind(this),this.cancelFullScreenHandler=this.cancelFullScreen.bind(this),this.player.options.hotkey&&document.addEventListener("keydown",this.doHotKeyHandler),document.addEventListener("keydown",this.cancelFullScreenHandler)}var x,b;return x=E,(b=[{key:"doHotKey",value:function(p){if(this.player.focus){var y=document.activeElement.tagName.toUpperCase(),w=document.activeElement.getAttribute("contenteditable");if(y!=="INPUT"&&y!=="TEXTAREA"&&w!==""&&w!=="true"){var L,M=p||window.event;switch(M.keyCode){case 32:M.preventDefault(),this.player.toggle();break;case 37:if(M.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime-5),this.player.controller.setAutoHide();break;case 39:if(M.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime+5),this.player.controller.setAutoHide();break;case 38:M.preventDefault(),L=this.player.volume()+.1,this.player.volume(L);break;case 40:M.preventDefault(),L=this.player.volume()-.1,this.player.volume(L)}}}}},{key:"cancelFullScreen",value:function(p){(p||window.event).keyCode===27&&this.player.fullScreen.isFullScreen("web")&&this.player.fullScreen.cancel("web")}},{key:"destroy",value:function(){this.player.options.hotkey&&document.removeEventListener("keydown",this.doHotKeyHandler),document.removeEventListener("keydown",this.cancelFullScreenHandler)}}])&&nl(x.prototype,b),Object.defineProperty(x,"prototype",{writable:!1}),E}();const rl=il;function sl(E,x){for(var b=0;b<x.length;b++){var p=x[b];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(E,p.key,p)}}var al=function(){function E(p){var y=this;(function(w,L){if(!(w instanceof L))throw new TypeError("Cannot call a class as a function")})(this,E),this.player=p,this.shown=!1,Array.prototype.slice.call(this.player.template.menuItem).forEach(function(w,L){y.player.options.contextmenu[L].click&&w.addEventListener("click",function(){y.player.options.contextmenu[L].click(y.player),y.hide()})}),this.contextmenuHandler=function(w){if(y.shown)y.hide();else{var L=w||window.event;L.preventDefault();var M=y.player.container.getBoundingClientRect();y.show(L.clientX-M.left,L.clientY-M.top),y.player.template.mask.addEventListener("click",function(){y.hide()})}},this.player.container.addEventListener("contextmenu",this.contextmenuHandler)}var x,b;return x=E,(b=[{key:"show",value:function(p,y){this.player.template.menu.classList.add("dplayer-menu-show");var w=this.player.container.getBoundingClientRect();p+this.player.template.menu.offsetWidth>=w.width?(this.player.template.menu.style.right=w.width-p+"px",this.player.template.menu.style.left="initial"):(this.player.template.menu.style.left=p+"px",this.player.template.menu.style.right="initial"),y+this.player.template.menu.offsetHeight>=w.height?(this.player.template.menu.style.bottom=w.height-y+"px",this.player.template.menu.style.top="initial"):(this.player.template.menu.style.top=y+"px",this.player.template.menu.style.bottom="initial"),this.player.template.mask.classList.add("dplayer-mask-show"),this.shown=!0,this.player.events.trigger("contextmenu_show")}},{key:"hide",value:function(){this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.template.menu.classList.remove("dplayer-menu-show"),this.shown=!1,this.player.events.trigger("contextmenu_hide")}},{key:"destroy",value:function(){this.player.container.removeEventListener("contextmenu",this.contextmenuHandler)}}])&&sl(x.prototype,b),Object.defineProperty(x,"prototype",{writable:!1}),E}();const ol=al;function ll(E,x){for(var b=0;b<x.length;b++){var p=x[b];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(E,p.key,p)}}var dl=function(){function E(p){var y=this;(function(w,L){if(!(w instanceof L))throw new TypeError("Cannot call a class as a function")})(this,E),this.container=p.template.infoPanel,this.template=p.template,this.video=p.video,this.player=p,this.template.infoPanelClose.addEventListener("click",function(){y.hide()})}var x,b;return x=E,(b=[{key:"show",value:function(){this.beginTime=Date.now(),this.update(),this.player.timer.enable("info"),this.player.timer.enable("fps"),this.container.classList.remove("dplayer-info-panel-hide")}},{key:"hide",value:function(){this.player.timer.disable("info"),this.player.timer.disable("fps"),this.container.classList.add("dplayer-info-panel-hide")}},{key:"triggle",value:function(){this.container.classList.contains("dplayer-info-panel-hide")?this.show():this.hide()}},{key:"update",value:function(){this.template.infoVersion.innerHTML="v".concat("1.27.0"," ").concat("a0424ca"),this.template.infoType.innerHTML=this.player.type,this.template.infoUrl.innerHTML=this.player.options.video.url,this.template.infoResolution.innerHTML="".concat(this.player.video.videoWidth," x ").concat(this.player.video.videoHeight),this.template.infoDuration.innerHTML=this.player.video.duration,this.player.options.danmaku&&(this.template.infoDanmakuId.innerHTML=this.player.options.danmaku.id,this.template.infoDanmakuApi.innerHTML=this.player.options.danmaku.api,this.template.infoDanmakuAmount.innerHTML=this.player.danmaku.dan.length)}},{key:"fps",value:function(p){this.template.infoFPS.innerHTML="".concat(p.toFixed(1))}}])&&ll(x.prototype,b),Object.defineProperty(x,"prototype",{writable:!1}),E}();const cl=dl;var ul=i(1568),hl=i.n(ul);function Tr(E,x){var b=Object.keys(E);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(E);x&&(p=p.filter(function(y){return Object.getOwnPropertyDescriptor(E,y).enumerable})),b.push.apply(b,p)}return b}function pl(E,x,b){return x in E?Object.defineProperty(E,x,{value:b,enumerable:!0,configurable:!0,writable:!0}):E[x]=b,E}function Sr(E,x){for(var b=0;b<x.length;b++){var p=x[b];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(E,p.key,p)}}var kr=0,_t=[],fl=function(){function E(y){var w=this;(function(L,M){if(!(L instanceof M))throw new TypeError("Cannot call a class as a function")})(this,E),this.options=function(L){var M={container:L.element||document.getElementsByClassName("dplayer")[0],live:!1,autoplay:!1,theme:"#b7daff",loop:!1,lang:(navigator.language||navigator.browserLanguage).toLowerCase(),screenshot:!1,airplay:!0,chromecast:!1,hotkey:!0,preload:"metadata",volume:.7,playbackSpeed:[.5,.75,1,1.25,1.5,2],apiBackend:le,video:{},contextmenu:[],mutex:!0,pluginOptions:{hls:{},flv:{},dash:{},webtorrent:{}},preventClickToggle:!1};for(var z in M)M.hasOwnProperty(z)&&!L.hasOwnProperty(z)&&(L[z]=M[z]);return L.video&&!L.video.type&&(L.video.type="auto"),re(L.danmaku)==="object"&&L.danmaku&&!L.danmaku.user&&(L.danmaku.user="DIYgod"),L.subtitle&&(!L.subtitle.type&&(L.subtitle.type="webvtt"),!L.subtitle.fontSize&&(L.subtitle.fontSize="20px"),!L.subtitle.bottom&&(L.subtitle.bottom="40px"),!L.subtitle.color&&(L.subtitle.color="#fff")),L.video.quality&&(L.video.url=L.video.quality[L.video.defaultQuality].url),L.lang&&(L.lang=L.lang.toLowerCase()),L.contextmenu=L.contextmenu.concat([{key:"video-info",click:function(Q){Q.infoPanel.triggle()}},{key:"about-author",link:"https://diygod.me"},{text:"DPlayer v".concat("1.27.0"),link:"https://github.com/MoePlayer/DPlayer"}]),L}(function(L){for(var M=1;M<arguments.length;M++){var z=arguments[M]!=null?arguments[M]:{};M%2?Tr(Object(z),!0).forEach(function(Q){pl(L,Q,z[Q])}):Object.getOwnPropertyDescriptors?Object.defineProperties(L,Object.getOwnPropertyDescriptors(z)):Tr(Object(z)).forEach(function(Q){Object.defineProperty(L,Q,Object.getOwnPropertyDescriptor(z,Q))})}return L}({preload:y.video.type==="webtorrent"?"none":"metadata"},y)),this.options.video.quality&&(this.qualityIndex=this.options.video.defaultQuality,this.quality=this.options.video.quality[this.options.video.defaultQuality]),this.tran=new de(this.options.lang).tran,this.events=new fo,this.user=new vo(this),this.container=this.options.container,this.container.classList.add("dplayer"),this.options.danmaku||this.container.classList.add("dplayer-no-danmaku"),this.options.live?this.container.classList.add("dplayer-live"):this.container.classList.remove("dplayer-live"),K.isMobile&&this.container.classList.add("dplayer-mobile"),this.arrow=this.container.offsetWidth<=500,this.arrow&&this.container.classList.add("dplayer-arrow"),this.options.subtitle&&Array.isArray(this.options.subtitle.url)&&(this.options.subtitle.url.push({subtitle:"",lang:"off"}),this.options.subtitle.defaultSubtitle&&(typeof this.options.subtitle.defaultSubtitle=="string"?this.options.subtitle.index=this.options.subtitle.url.findIndex(function(L){return L.lang===w.options.subtitle.defaultSubtitle||L.name===w.options.subtitle.defaultSubtitle}):typeof this.options.subtitle.defaultSubtitle=="number"&&(this.options.subtitle.index=this.options.subtitle.defaultSubtitle)),(this.options.subtitle.index===-1||!this.options.subtitle.index||this.options.subtitle.index>this.options.subtitle.url.length-1)&&(this.options.subtitle.index=this.options.subtitle.url.findIndex(function(L){return L.lang===w.options.lang})),this.options.subtitle.index===-1&&(this.options.subtitle.index=this.options.subtitle.url.length-1)),this.template=new hr({container:this.container,options:this.options,index:kr,tran:this.tran}),this.video=this.template.video,this.bar=new Io(this.template),this.bezel=new Po(this.template.bezel),this.fullScreen=new go(this),this.controller=new jo(this),this.options.danmaku&&(this.danmaku=new ho({player:this,container:this.template.danmaku,opacity:this.user.get("opacity"),callback:function(){setTimeout(function(){w.template.danmakuLoading.style.display="none",w.options.autoplay&&w.play()},0)},error:function(L){w.notice(L)},apiBackend:this.options.apiBackend,borderColor:this.options.theme,height:this.arrow?24:30,time:function(){return w.video.currentTime},unlimited:this.user.get("unlimited"),api:{id:this.options.danmaku.id,address:this.options.danmaku.api,token:this.options.danmaku.token,maximum:this.options.danmaku.maximum,addition:this.options.danmaku.addition,user:this.options.danmaku.user,speedRate:this.options.danmaku.speedRate},events:this.events,tran:function(L){return w.tran(L)}}),this.comment=new tl(this)),this.setting=new Zo(this),this.plugins={},this.docClickFun=function(){w.focus=!1},this.containerClickFun=function(){w.focus=!0},document.addEventListener("click",this.docClickFun,!0),this.container.addEventListener("click",this.containerClickFun,!0),this.paused=!0,this.timer=new _o(this),this.hotkey=new rl(this),this.contextmenu=new ol(this),this.initVideo(this.video,this.quality&&this.quality.type||this.options.video.type),this.infoPanel=new cl(this),!this.danmaku&&this.options.autoplay&&this.play(),kr++,_t.push(this)}var x,b,p;return x=E,b=[{key:"seek",value:function(y){y=Math.max(y,0),this.video.duration&&(y=Math.min(y,this.video.duration)),this.video.currentTime<y?this.notice("".concat(this.tran("ff").replace("%s",(y-this.video.currentTime).toFixed(0)))):this.video.currentTime>y&&this.notice("".concat(this.tran("rew").replace("%s",(this.video.currentTime-y).toFixed(0)))),this.video.currentTime=y,this.danmaku&&this.danmaku.seek(),this.bar.set("played",y/this.video.duration,"width"),this.template.ptime.innerHTML=K.secondToTime(y)}},{key:"play",value:function(y){var w=this;if(this.paused=!1,this.video.paused&&!K.isMobile&&this.bezel.switch(Ye.play),this.template.playButton.innerHTML=Ye.pause,this.template.mobilePlayButton.innerHTML=Ye.pause,y||j.resolve(this.video.play()).catch(function(){w.pause()}).then(function(){}),this.timer.enable("loading"),this.container.classList.remove("dplayer-paused"),this.container.classList.add("dplayer-playing"),this.danmaku&&this.danmaku.play(),this.options.mutex)for(var L=0;L<_t.length;L++)this!==_t[L]&&_t[L].pause()}},{key:"pause",value:function(y){this.paused=!0,this.container.classList.remove("dplayer-loading"),this.video.paused||K.isMobile||this.bezel.switch(Ye.pause),this.template.playButton.innerHTML=Ye.play,this.template.mobilePlayButton.innerHTML=Ye.play,y||this.video.pause(),this.timer.disable("loading"),this.container.classList.remove("dplayer-playing"),this.container.classList.add("dplayer-paused"),this.danmaku&&this.danmaku.pause()}},{key:"switchVolumeIcon",value:function(){this.volume()>=.95?this.template.volumeIcon.innerHTML=Ye.volumeUp:this.volume()>0?this.template.volumeIcon.innerHTML=Ye.volumeDown:this.template.volumeIcon.innerHTML=Ye.volumeOff}},{key:"volume",value:function(y,w,L){if(y=parseFloat(y),!isNaN(y)){y=Math.max(y,0),y=Math.min(y,1),this.bar.set("volume",y,"width");var M="".concat((100*y).toFixed(0),"%");this.template.volumeBarWrapWrap.dataset.balloon=M,w||this.user.set("volume",y),L||this.notice("".concat(this.tran("volume")," ").concat((100*y).toFixed(0),"%")),this.video.volume=y,this.video.muted&&(this.video.muted=!1),this.switchVolumeIcon()}return this.video.volume}},{key:"toggle",value:function(){this.video.paused?this.play():this.pause()}},{key:"on",value:function(y,w){this.events.on(y,w)}},{key:"switchVideo",value:function(y,w){this.pause(),this.video.poster=y.pic?y.pic:"",this.video.src=y.url,this.initMSE(this.video,y.type||"auto"),w&&(this.template.danmakuLoading.style.display="block",this.bar.set("played",0,"width"),this.bar.set("loaded",0,"width"),this.template.ptime.innerHTML="00:00",this.template.danmaku.innerHTML="",this.danmaku&&this.danmaku.reload({id:w.id,address:w.api,token:w.token,maximum:w.maximum,addition:w.addition,user:w.user}))}},{key:"initMSE",value:function(y,w){var L=this;if(this.type=w,this.options.video.customType&&this.options.video.customType[w])Object.prototype.toString.call(this.options.video.customType[w])==="[object Function]"?this.options.video.customType[w](this.video,this):console.error("Illegal customType: ".concat(w));else switch(this.type==="auto"&&(/m3u8(#|\?|$)/i.exec(y.src)?this.type="hls":/.flv(#|\?|$)/i.exec(y.src)?this.type="flv":/.mpd(#|\?|$)/i.exec(y.src)?this.type="dash":this.type="normal"),this.type==="hls"&&(y.canPlayType("application/x-mpegURL")||y.canPlayType("application/vnd.apple.mpegURL"))&&(this.type="normal"),this.type){case"hls":if(window.Hls)if(window.Hls.isSupported()){var M=this.options.pluginOptions.hls,z=new window.Hls(M);this.plugins.hls=z,z.loadSource(y.src),z.attachMedia(y),this.events.on("destroy",function(){z.destroy(),delete L.plugins.hls})}else this.notice("Error: Hls is not supported.");else this.notice("Error: Can't find Hls.");break;case"flv":if(window.flvjs)if(window.flvjs.isSupported()){var Q=window.flvjs.createPlayer(Object.assign(this.options.pluginOptions.flv.mediaDataSource||{},{type:"flv",url:y.src}),this.options.pluginOptions.flv.config);this.plugins.flvjs=Q,Q.attachMediaElement(y),Q.load(),this.events.on("destroy",function(){Q.unload(),Q.detachMediaElement(),Q.destroy(),delete L.plugins.flvjs})}else this.notice("Error: flvjs is not supported.");else this.notice("Error: Can't find flvjs.");break;case"dash":if(window.dashjs){var pe=window.dashjs.MediaPlayer().create().initialize(y,y.src,!1),Se=this.options.pluginOptions.dash;pe.updateSettings(Se),this.plugins.dash=pe,this.events.on("destroy",function(){window.dashjs.MediaPlayer().reset(),delete L.plugins.dash})}else this.notice("Error: Can't find dashjs.");break;case"webtorrent":if(window.WebTorrent)if(window.WebTorrent.WEBRTC_SUPPORT){this.container.classList.add("dplayer-loading");var Qe=this.options.pluginOptions.webtorrent,Ge=new window.WebTorrent(Qe);this.plugins.webtorrent=Ge;var mt=y.src;y.src="",y.preload="metadata",y.addEventListener("durationchange",function(){return L.container.classList.remove("dplayer-loading")},{once:!0}),Ge.add(mt,function(ae){ae.files.find(function(Ae){return Ae.name.endsWith(".mp4")}).renderTo(L.video,{autoplay:L.options.autoplay,controls:!1})}),this.events.on("destroy",function(){Ge.remove(mt),Ge.destroy(),delete L.plugins.webtorrent})}else this.notice("Error: Webtorrent is not supported.");else this.notice("Error: Can't find Webtorrent.")}}},{key:"initVideo",value:function(y,w){var L=this;this.initMSE(y,w),this.on("durationchange",function(){y.duration!==1&&y.duration!==1/0&&(L.template.dtime.innerHTML=K.secondToTime(y.duration))}),this.on("progress",function(){var Q=y.buffered.length?y.buffered.end(y.buffered.length-1)/y.duration:0;L.bar.set("loaded",Q,"width")}),this.on("error",function(){L.video.error&&L.tran&&L.notice&&L.type!=="webtorrent"&&L.notice(L.tran("video-failed"),-1)}),this.on("ended",function(){L.bar.set("played",1,"width"),L.setting.loop?(L.seek(0),L.play()):L.pause(),L.danmaku&&(L.danmaku.danIndex=0)}),this.on("play",function(){L.paused&&L.play(!0)}),this.on("pause",function(){L.paused||L.pause(!0)}),this.on("timeupdate",function(){L.bar.set("played",L.video.currentTime/L.video.duration,"width");var Q=K.secondToTime(L.video.currentTime);L.template.ptime.innerHTML!==Q&&(L.template.ptime.innerHTML=Q)});for(var M=function(Q){y.addEventListener(L.events.videoEvents[Q],function(){L.events.trigger(L.events.videoEvents[Q])})},z=0;z<this.events.videoEvents.length;z++)M(z);this.volume(this.user.get("volume"),!0,!0),this.options.subtitle&&(this.subtitle=new Co(this.template.subtitle,this.video,this.options.subtitle,this.events),Array.isArray(this.options.subtitle.url)&&(this.subtitles=new ko(this)),this.user.get("subtitle")||this.subtitle.hide())}},{key:"switchQuality",value:function(y){var w=this;if(y=typeof y=="string"?parseInt(y):y,this.qualityIndex!==y&&!this.switchingQuality){this.prevIndex=this.qualityIndex,this.qualityIndex=y,this.switchingQuality=!0,this.quality=this.options.video.quality[y],this.template.qualityButton.innerHTML=this.quality.name;var L=this.video.paused;this.video.pause();var M=hl()({current:!1,pic:null,screenshot:this.options.screenshot,preload:"auto",url:this.quality.url,subtitle:this.options.subtitle}),z=new DOMParser().parseFromString(M,"text/html").body.firstChild;this.template.videoWrap.insertBefore(z,this.template.videoWrap.getElementsByTagName("div")[0]),this.prevVideo=this.video,this.video=z,this.initVideo(this.video,this.quality.type||this.options.video.type),this.seek(this.prevVideo.currentTime),this.notice("".concat(this.tran("switching-quality").replace("%q",this.quality.name)),-1),this.events.trigger("quality_start",this.quality),this.on("canplay",function(){if(w.prevVideo){if(w.video.currentTime!==w.prevVideo.currentTime)return void w.seek(w.prevVideo.currentTime);w.template.videoWrap.removeChild(w.prevVideo),w.video.classList.add("dplayer-video-current"),L||w.video.play(),w.prevVideo=null,w.notice("".concat(w.tran("switched-quality").replace("%q",w.quality.name))),w.switchingQuality=!1,w.events.trigger("quality_end")}}),this.on("error",function(){w.video.error&&w.prevVideo&&(w.template.videoWrap.removeChild(w.video),w.video=w.prevVideo,L||w.video.play(),w.qualityIndex=w.prevIndex,w.quality=w.options.video.quality[w.qualityIndex],w.noticeTime=setTimeout(function(){w.template.notice.style.opacity=0,w.events.trigger("notice_hide")},3e3),w.prevVideo=null,w.switchingQuality=!1)})}}},{key:"notice",value:function(y){var w,L,M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2e3,z=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.8,Q=hr.NewNotice(y,z);this.template.noticeList.appendChild(Q),this.events.trigger("notice_show",Q),M>0&&setTimeout((w=Q,L=this,function(){w.addEventListener("animationend",function(){L.template.noticeList.removeChild(w)}),w.classList.add("remove-notice"),L.events.trigger("notice_hide")}),M)}},{key:"resize",value:function(){this.danmaku&&this.danmaku.resize(),this.controller.thumbnails&&this.controller.thumbnails.resize(160,this.video.videoHeight/this.video.videoWidth*160,this.template.barWrap.offsetWidth),this.events.trigger("resize")}},{key:"speed",value:function(y){this.video.playbackRate=y}},{key:"destroy",value:function(){_t.splice(_t.indexOf(this),1),this.pause(),document.removeEventListener("click",this.docClickFun,!0),this.container.removeEventListener("click",this.containerClickFun,!0),this.fullScreen.destroy(),this.hotkey.destroy(),this.contextmenu.destroy(),this.controller.destroy(),this.timer.destroy(),this.video.src="",this.container.innerHTML="",this.events.trigger("destroy")}}],p=[{key:"version",get:function(){return"1.27.0"}}],b&&Sr(x.prototype,b),p&&Sr(x,p),Object.defineProperty(x,"prototype",{writable:!1}),E}();const ml=fl;console.log(`
`.concat(" %c DPlayer v","1.27.0"," ").concat("a0424ca"," %c https://dplayer.diygod.dev ",`
`,`
`),"color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;");const Al=ml})(),r.default})())})(Ms);var Yl=Ms.exports;const Vl=yl(Yl);function Wl(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Ns={exports:{}};(function(a,e){(function(t){var n=/^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/,i=/^(?=([^\/?#]*))\1([^]*)$/,r=/(?:\/|^)\.(?=\/)/g,s=/(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,o={buildAbsoluteURL:function(l,d,c){if(c=c||{},l=l.trim(),d=d.trim(),!d){if(!c.alwaysNormalize)return l;var h=o.parseURL(l);if(!h)throw new Error("Error trying to parse base URL.");return h.path=o.normalizePath(h.path),o.buildURLFromParts(h)}var u=o.parseURL(d);if(!u)throw new Error("Error trying to parse relative URL.");if(u.scheme)return c.alwaysNormalize?(u.path=o.normalizePath(u.path),o.buildURLFromParts(u)):d;var m=o.parseURL(l);if(!m)throw new Error("Error trying to parse base URL.");if(!m.netLoc&&m.path&&m.path[0]!=="/"){var A=i.exec(m.path);m.netLoc=A[1],m.path=A[2]}m.netLoc&&!m.path&&(m.path="/");var f={scheme:m.scheme,netLoc:u.netLoc,path:null,params:u.params,query:u.query,fragment:u.fragment};if(!u.netLoc&&(f.netLoc=m.netLoc,u.path[0]!=="/"))if(!u.path)f.path=m.path,u.params||(f.params=m.params,u.query||(f.query=m.query));else{var g=m.path,C=g.substring(0,g.lastIndexOf("/")+1)+u.path;f.path=o.normalizePath(C)}return f.path===null&&(f.path=c.alwaysNormalize?o.normalizePath(u.path):u.path),o.buildURLFromParts(f)},parseURL:function(l){var d=n.exec(l);return d?{scheme:d[1]||"",netLoc:d[2]||"",path:d[3]||"",params:d[4]||"",query:d[5]||"",fragment:d[6]||""}:null},normalizePath:function(l){for(l=l.split("").reverse().join("").replace(r,"");l.length!==(l=l.replace(s,"")).length;);return l.split("").reverse().join("")},buildURLFromParts:function(l){return l.scheme+l.netLoc+l.path+l.params+l.query+l.fragment}};a.exports=o})()})(Ns);var Vi=Ns.exports;function Rr(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable})),t.push.apply(t,n)}return t}function _e(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Rr(Object(t),!0).forEach(function(n){Xl(a,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):Rr(Object(t)).forEach(function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(t,n))})}return a}function jl(a,e){if(typeof a!="object"||!a)return a;var t=a[Symbol.toPrimitive];if(t!==void 0){var n=t.call(a,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}function Ql(a){var e=jl(a,"string");return typeof e=="symbol"?e:String(e)}function Xl(a,e,t){return e=Ql(e),e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function we(){return we=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=t[n])}return a},we.apply(this,arguments)}const X=Number.isFinite||function(a){return typeof a=="number"&&isFinite(a)},Zl=Number.isSafeInteger||function(a){return typeof a=="number"&&Math.abs(a)<=Jl},Jl=Number.MAX_SAFE_INTEGER||9007199254740991;let v=function(a){return a.MEDIA_ATTACHING="hlsMediaAttaching",a.MEDIA_ATTACHED="hlsMediaAttached",a.MEDIA_DETACHING="hlsMediaDetaching",a.MEDIA_DETACHED="hlsMediaDetached",a.BUFFER_RESET="hlsBufferReset",a.BUFFER_CODECS="hlsBufferCodecs",a.BUFFER_CREATED="hlsBufferCreated",a.BUFFER_APPENDING="hlsBufferAppending",a.BUFFER_APPENDED="hlsBufferAppended",a.BUFFER_EOS="hlsBufferEos",a.BUFFER_FLUSHING="hlsBufferFlushing",a.BUFFER_FLUSHED="hlsBufferFlushed",a.MANIFEST_LOADING="hlsManifestLoading",a.MANIFEST_LOADED="hlsManifestLoaded",a.MANIFEST_PARSED="hlsManifestParsed",a.LEVEL_SWITCHING="hlsLevelSwitching",a.LEVEL_SWITCHED="hlsLevelSwitched",a.LEVEL_LOADING="hlsLevelLoading",a.LEVEL_LOADED="hlsLevelLoaded",a.LEVEL_UPDATED="hlsLevelUpdated",a.LEVEL_PTS_UPDATED="hlsLevelPtsUpdated",a.LEVELS_UPDATED="hlsLevelsUpdated",a.AUDIO_TRACKS_UPDATED="hlsAudioTracksUpdated",a.AUDIO_TRACK_SWITCHING="hlsAudioTrackSwitching",a.AUDIO_TRACK_SWITCHED="hlsAudioTrackSwitched",a.AUDIO_TRACK_LOADING="hlsAudioTrackLoading",a.AUDIO_TRACK_LOADED="hlsAudioTrackLoaded",a.SUBTITLE_TRACKS_UPDATED="hlsSubtitleTracksUpdated",a.SUBTITLE_TRACKS_CLEARED="hlsSubtitleTracksCleared",a.SUBTITLE_TRACK_SWITCH="hlsSubtitleTrackSwitch",a.SUBTITLE_TRACK_LOADING="hlsSubtitleTrackLoading",a.SUBTITLE_TRACK_LOADED="hlsSubtitleTrackLoaded",a.SUBTITLE_FRAG_PROCESSED="hlsSubtitleFragProcessed",a.CUES_PARSED="hlsCuesParsed",a.NON_NATIVE_TEXT_TRACKS_FOUND="hlsNonNativeTextTracksFound",a.INIT_PTS_FOUND="hlsInitPtsFound",a.FRAG_LOADING="hlsFragLoading",a.FRAG_LOAD_EMERGENCY_ABORTED="hlsFragLoadEmergencyAborted",a.FRAG_LOADED="hlsFragLoaded",a.FRAG_DECRYPTED="hlsFragDecrypted",a.FRAG_PARSING_INIT_SEGMENT="hlsFragParsingInitSegment",a.FRAG_PARSING_USERDATA="hlsFragParsingUserdata",a.FRAG_PARSING_METADATA="hlsFragParsingMetadata",a.FRAG_PARSED="hlsFragParsed",a.FRAG_BUFFERED="hlsFragBuffered",a.FRAG_CHANGED="hlsFragChanged",a.FPS_DROP="hlsFpsDrop",a.FPS_DROP_LEVEL_CAPPING="hlsFpsDropLevelCapping",a.MAX_AUTO_LEVEL_UPDATED="hlsMaxAutoLevelUpdated",a.ERROR="hlsError",a.DESTROYING="hlsDestroying",a.KEY_LOADING="hlsKeyLoading",a.KEY_LOADED="hlsKeyLoaded",a.LIVE_BACK_BUFFER_REACHED="hlsLiveBackBufferReached",a.BACK_BUFFER_REACHED="hlsBackBufferReached",a.STEERING_MANIFEST_LOADED="hlsSteeringManifestLoaded",a}({}),ie=function(a){return a.NETWORK_ERROR="networkError",a.MEDIA_ERROR="mediaError",a.KEY_SYSTEM_ERROR="keySystemError",a.MUX_ERROR="muxError",a.OTHER_ERROR="otherError",a}({}),O=function(a){return a.KEY_SYSTEM_NO_KEYS="keySystemNoKeys",a.KEY_SYSTEM_NO_ACCESS="keySystemNoAccess",a.KEY_SYSTEM_NO_SESSION="keySystemNoSession",a.KEY_SYSTEM_NO_CONFIGURED_LICENSE="keySystemNoConfiguredLicense",a.KEY_SYSTEM_LICENSE_REQUEST_FAILED="keySystemLicenseRequestFailed",a.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED="keySystemServerCertificateRequestFailed",a.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED="keySystemServerCertificateUpdateFailed",a.KEY_SYSTEM_SESSION_UPDATE_FAILED="keySystemSessionUpdateFailed",a.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED="keySystemStatusOutputRestricted",a.KEY_SYSTEM_STATUS_INTERNAL_ERROR="keySystemStatusInternalError",a.MANIFEST_LOAD_ERROR="manifestLoadError",a.MANIFEST_LOAD_TIMEOUT="manifestLoadTimeOut",a.MANIFEST_PARSING_ERROR="manifestParsingError",a.MANIFEST_INCOMPATIBLE_CODECS_ERROR="manifestIncompatibleCodecsError",a.LEVEL_EMPTY_ERROR="levelEmptyError",a.LEVEL_LOAD_ERROR="levelLoadError",a.LEVEL_LOAD_TIMEOUT="levelLoadTimeOut",a.LEVEL_PARSING_ERROR="levelParsingError",a.LEVEL_SWITCH_ERROR="levelSwitchError",a.AUDIO_TRACK_LOAD_ERROR="audioTrackLoadError",a.AUDIO_TRACK_LOAD_TIMEOUT="audioTrackLoadTimeOut",a.SUBTITLE_LOAD_ERROR="subtitleTrackLoadError",a.SUBTITLE_TRACK_LOAD_TIMEOUT="subtitleTrackLoadTimeOut",a.FRAG_LOAD_ERROR="fragLoadError",a.FRAG_LOAD_TIMEOUT="fragLoadTimeOut",a.FRAG_DECRYPT_ERROR="fragDecryptError",a.FRAG_PARSING_ERROR="fragParsingError",a.FRAG_GAP="fragGap",a.REMUX_ALLOC_ERROR="remuxAllocError",a.KEY_LOAD_ERROR="keyLoadError",a.KEY_LOAD_TIMEOUT="keyLoadTimeOut",a.BUFFER_ADD_CODEC_ERROR="bufferAddCodecError",a.BUFFER_INCOMPATIBLE_CODECS_ERROR="bufferIncompatibleCodecsError",a.BUFFER_APPEND_ERROR="bufferAppendError",a.BUFFER_APPENDING_ERROR="bufferAppendingError",a.BUFFER_STALLED_ERROR="bufferStalledError",a.BUFFER_FULL_ERROR="bufferFullError",a.BUFFER_SEEK_OVER_HOLE="bufferSeekOverHole",a.BUFFER_NUDGE_ON_STALL="bufferNudgeOnStall",a.INTERNAL_EXCEPTION="internalException",a.INTERNAL_ABORTED="aborted",a.UNKNOWN="unknown",a}({});const Lt=function(){},Di={trace:Lt,debug:Lt,log:Lt,warn:Lt,info:Lt,error:Lt};let Zt=Di;function ed(a){const e=self.console[a];return e?e.bind(self.console,`[${a}] >`):Lt}function td(a,...e){e.forEach(function(t){Zt[t]=a[t]?a[t].bind(a):ed(t)})}function nd(a,e){if(typeof console=="object"&&a===!0||typeof a=="object"){td(a,"debug","log","info","warn","error");try{Zt.log(`Debug logs enabled for "${e}" in hls.js version 1.5.19`)}catch{Zt=Di}}else Zt=Di}const D=Zt,id=/^(\d+)x(\d+)$/,Dr=/(.+?)=(".*?"|.*?)(?:,|$)/g;class ke{constructor(e){typeof e=="string"&&(e=ke.parseAttrList(e)),we(this,e)}get clientAttrs(){return Object.keys(this).filter(e=>e.substring(0,2)==="X-")}decimalInteger(e){const t=parseInt(this[e],10);return t>Number.MAX_SAFE_INTEGER?1/0:t}hexadecimalInteger(e){if(this[e]){let t=(this[e]||"0x").slice(2);t=(t.length&1?"0":"")+t;const n=new Uint8Array(t.length/2);for(let i=0;i<t.length/2;i++)n[i]=parseInt(t.slice(i*2,i*2+2),16);return n}else return null}hexadecimalIntegerAsNumber(e){const t=parseInt(this[e],16);return t>Number.MAX_SAFE_INTEGER?1/0:t}decimalFloatingPoint(e){return parseFloat(this[e])}optionalFloat(e,t){const n=this[e];return n?parseFloat(n):t}enumeratedString(e){return this[e]}bool(e){return this[e]==="YES"}decimalResolution(e){const t=id.exec(this[e]);if(t!==null)return{width:parseInt(t[1],10),height:parseInt(t[2],10)}}static parseAttrList(e){let t;const n={},i='"';for(Dr.lastIndex=0;(t=Dr.exec(e))!==null;){let r=t[2];r.indexOf(i)===0&&r.lastIndexOf(i)===r.length-1&&(r=r.slice(1,-1));const s=t[1].trim();n[s]=r}return n}}function rd(a){return a!=="ID"&&a!=="CLASS"&&a!=="START-DATE"&&a!=="DURATION"&&a!=="END-DATE"&&a!=="END-ON-NEXT"}function sd(a){return a==="SCTE35-OUT"||a==="SCTE35-IN"}class Us{constructor(e,t){if(this.attr=void 0,this._startDate=void 0,this._endDate=void 0,this._badValueForSameId=void 0,t){const n=t.attr;for(const i in n)if(Object.prototype.hasOwnProperty.call(e,i)&&e[i]!==n[i]){D.warn(`DATERANGE tag attribute: "${i}" does not match for tags with ID: "${e.ID}"`),this._badValueForSameId=i;break}e=we(new ke({}),n,e)}if(this.attr=e,this._startDate=new Date(e["START-DATE"]),"END-DATE"in this.attr){const n=new Date(this.attr["END-DATE"]);X(n.getTime())&&(this._endDate=n)}}get id(){return this.attr.ID}get class(){return this.attr.CLASS}get startDate(){return this._startDate}get endDate(){if(this._endDate)return this._endDate;const e=this.duration;return e!==null?new Date(this._startDate.getTime()+e*1e3):null}get duration(){if("DURATION"in this.attr){const e=this.attr.decimalFloatingPoint("DURATION");if(X(e))return e}else if(this._endDate)return(this._endDate.getTime()-this._startDate.getTime())/1e3;return null}get plannedDuration(){return"PLANNED-DURATION"in this.attr?this.attr.decimalFloatingPoint("PLANNED-DURATION"):null}get endOnNext(){return this.attr.bool("END-ON-NEXT")}get isValid(){return!!this.id&&!this._badValueForSameId&&X(this.startDate.getTime())&&(this.duration===null||this.duration>=0)&&(!this.endOnNext||!!this.class)}}class qn{constructor(){this.aborted=!1,this.loaded=0,this.retry=0,this.total=0,this.chunkCount=0,this.bwEstimate=0,this.loading={start:0,first:0,end:0},this.parsing={start:0,end:0},this.buffering={start:0,first:0,end:0}}}var be={AUDIO:"audio",VIDEO:"video",AUDIOVIDEO:"audiovideo"};class $s{constructor(e){this._byteRange=null,this._url=null,this.baseurl=void 0,this.relurl=void 0,this.elementaryStreams={[be.AUDIO]:null,[be.VIDEO]:null,[be.AUDIOVIDEO]:null},this.baseurl=e}setByteRange(e,t){const n=e.split("@",2);let i;n.length===1?i=(t==null?void 0:t.byteRangeEndOffset)||0:i=parseInt(n[1]),this._byteRange=[i,parseInt(n[0])+i]}get byteRange(){return this._byteRange?this._byteRange:[]}get byteRangeStartOffset(){return this.byteRange[0]}get byteRangeEndOffset(){return this.byteRange[1]}get url(){return!this._url&&this.baseurl&&this.relurl&&(this._url=Vi.buildAbsoluteURL(this.baseurl,this.relurl,{alwaysNormalize:!0})),this._url||""}set url(e){this._url=e}}class li extends $s{constructor(e,t){super(t),this._decryptdata=null,this.rawProgramDateTime=null,this.programDateTime=null,this.tagList=[],this.duration=0,this.sn=0,this.levelkeys=void 0,this.type=void 0,this.loader=null,this.keyLoader=null,this.level=-1,this.cc=0,this.startPTS=void 0,this.endPTS=void 0,this.startDTS=void 0,this.endDTS=void 0,this.start=0,this.deltaPTS=void 0,this.maxStartPTS=void 0,this.minEndPTS=void 0,this.stats=new qn,this.data=void 0,this.bitrateTest=!1,this.title=null,this.initSegment=null,this.endList=void 0,this.gap=void 0,this.urlId=0,this.type=e}get decryptdata(){const{levelkeys:e}=this;if(!e&&!this._decryptdata)return null;if(!this._decryptdata&&this.levelkeys&&!this.levelkeys.NONE){const t=this.levelkeys.identity;if(t)this._decryptdata=t.getDecryptData(this.sn);else{const n=Object.keys(this.levelkeys);if(n.length===1)return this._decryptdata=this.levelkeys[n[0]].getDecryptData(this.sn)}}return this._decryptdata}get end(){return this.start+this.duration}get endProgramDateTime(){if(this.programDateTime===null||!X(this.programDateTime))return null;const e=X(this.duration)?this.duration:0;return this.programDateTime+e*1e3}get encrypted(){var e;if((e=this._decryptdata)!=null&&e.encrypted)return!0;if(this.levelkeys){const t=Object.keys(this.levelkeys),n=t.length;if(n>1||n===1&&this.levelkeys[t[0]].encrypted)return!0}return!1}setKeyFormat(e){if(this.levelkeys){const t=this.levelkeys[e];t&&!this._decryptdata&&(this._decryptdata=t.getDecryptData(this.sn))}}abortRequests(){var e,t;(e=this.loader)==null||e.abort(),(t=this.keyLoader)==null||t.abort()}setElementaryStreamInfo(e,t,n,i,r,s=!1){const{elementaryStreams:o}=this,l=o[e];if(!l){o[e]={startPTS:t,endPTS:n,startDTS:i,endDTS:r,partial:s};return}l.startPTS=Math.min(l.startPTS,t),l.endPTS=Math.max(l.endPTS,n),l.startDTS=Math.min(l.startDTS,i),l.endDTS=Math.max(l.endDTS,r)}clearElementaryStreamInfo(){const{elementaryStreams:e}=this;e[be.AUDIO]=null,e[be.VIDEO]=null,e[be.AUDIOVIDEO]=null}}class ad extends $s{constructor(e,t,n,i,r){super(n),this.fragOffset=0,this.duration=0,this.gap=!1,this.independent=!1,this.relurl=void 0,this.fragment=void 0,this.index=void 0,this.stats=new qn,this.duration=e.decimalFloatingPoint("DURATION"),this.gap=e.bool("GAP"),this.independent=e.bool("INDEPENDENT"),this.relurl=e.enumeratedString("URI"),this.fragment=t,this.index=i;const s=e.enumeratedString("BYTERANGE");s&&this.setByteRange(s,r),r&&(this.fragOffset=r.fragOffset+r.duration)}get start(){return this.fragment.start+this.fragOffset}get end(){return this.start+this.duration}get loaded(){const{elementaryStreams:e}=this;return!!(e.audio||e.video||e.audiovideo)}}const od=10;class ld{constructor(e){this.PTSKnown=!1,this.alignedSliding=!1,this.averagetargetduration=void 0,this.endCC=0,this.endSN=0,this.fragments=void 0,this.fragmentHint=void 0,this.partList=null,this.dateRanges=void 0,this.live=!0,this.ageHeader=0,this.advancedDateTime=void 0,this.updated=!0,this.advanced=!0,this.availabilityDelay=void 0,this.misses=0,this.startCC=0,this.startSN=0,this.startTimeOffset=null,this.targetduration=0,this.totalduration=0,this.type=null,this.url=void 0,this.m3u8="",this.version=null,this.canBlockReload=!1,this.canSkipUntil=0,this.canSkipDateRanges=!1,this.skippedSegments=0,this.recentlyRemovedDateranges=void 0,this.partHoldBack=0,this.holdBack=0,this.partTarget=0,this.preloadHint=void 0,this.renditionReports=void 0,this.tuneInGoal=0,this.deltaUpdateFailed=void 0,this.driftStartTime=0,this.driftEndTime=0,this.driftStart=0,this.driftEnd=0,this.encryptedFragments=void 0,this.playlistParsingError=null,this.variableList=null,this.hasVariableRefs=!1,this.fragments=[],this.encryptedFragments=[],this.dateRanges={},this.url=e}reloaded(e){if(!e){this.advanced=!0,this.updated=!0;return}const t=this.lastPartSn-e.lastPartSn,n=this.lastPartIndex-e.lastPartIndex;this.updated=this.endSN!==e.endSN||!!n||!!t||!this.live,this.advanced=this.endSN>e.endSN||t>0||t===0&&n>0,this.updated||this.advanced?this.misses=Math.floor(e.misses*.6):this.misses=e.misses+1,this.availabilityDelay=e.availabilityDelay}get hasProgramDateTime(){return this.fragments.length?X(this.fragments[this.fragments.length-1].programDateTime):!1}get levelTargetDuration(){return this.averagetargetduration||this.targetduration||od}get drift(){const e=this.driftEndTime-this.driftStartTime;return e>0?(this.driftEnd-this.driftStart)*1e3/e:1}get edge(){return this.partEnd||this.fragmentEnd}get partEnd(){var e;return(e=this.partList)!=null&&e.length?this.partList[this.partList.length-1].end:this.fragmentEnd}get fragmentEnd(){var e;return(e=this.fragments)!=null&&e.length?this.fragments[this.fragments.length-1].end:0}get age(){return this.advancedDateTime?Math.max(Date.now()-this.advancedDateTime,0)/1e3:0}get lastPartIndex(){var e;return(e=this.partList)!=null&&e.length?this.partList[this.partList.length-1].index:-1}get lastPartSn(){var e;return(e=this.partList)!=null&&e.length?this.partList[this.partList.length-1].fragment.sn:this.endSN}}function Wi(a){return Uint8Array.from(atob(a),e=>e.charCodeAt(0))}function dd(a){const e=_i(a).subarray(0,16),t=new Uint8Array(16);return t.set(e,16-e.length),t}function cd(a){const e=function(n,i,r){const s=n[i];n[i]=n[r],n[r]=s};e(a,0,3),e(a,1,2),e(a,4,5),e(a,6,7)}function ud(a){const e=a.split(":");let t=null;if(e[0]==="data"&&e.length===2){const n=e[1].split(";"),i=n[n.length-1].split(",");if(i.length===2){const r=i[0]==="base64",s=i[1];r?(n.splice(-1,1),t=Wi(s)):t=dd(s)}}return t}function _i(a){return Uint8Array.from(unescape(encodeURIComponent(a)),e=>e.charCodeAt(0))}const Ht=typeof self<"u"?self:void 0;var ye={CLEARKEY:"org.w3.clearkey",FAIRPLAY:"com.apple.fps",PLAYREADY:"com.microsoft.playready",WIDEVINE:"com.widevine.alpha"},$e={CLEARKEY:"org.w3.clearkey",FAIRPLAY:"com.apple.streamingkeydelivery",PLAYREADY:"com.microsoft.playready",WIDEVINE:"urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"};function di(a){switch(a){case $e.FAIRPLAY:return ye.FAIRPLAY;case $e.PLAYREADY:return ye.PLAYREADY;case $e.WIDEVINE:return ye.WIDEVINE;case $e.CLEARKEY:return ye.CLEARKEY}}var hn={CENC:"1077efecc0b24d02ace33c1e52e2fb4b",CLEARKEY:"e2719d58a985b3c9781ab030af78d30e",FAIRPLAY:"94ce86fb07ff4f43adb893d2fa968ca2",PLAYREADY:"9a04f07998404286ab92e65be0885f95",WIDEVINE:"edef8ba979d64acea3c827dcd51d21ed"};function ci(a){if(a===hn.WIDEVINE)return ye.WIDEVINE;if(a===hn.PLAYREADY)return ye.PLAYREADY;if(a===hn.CENC||a===hn.CLEARKEY)return ye.CLEARKEY}function ui(a){switch(a){case ye.FAIRPLAY:return $e.FAIRPLAY;case ye.PLAYREADY:return $e.PLAYREADY;case ye.WIDEVINE:return $e.WIDEVINE;case ye.CLEARKEY:return $e.CLEARKEY}}function pn(a){const{drmSystems:e,widevineLicenseUrl:t}=a,n=e?[ye.FAIRPLAY,ye.WIDEVINE,ye.PLAYREADY,ye.CLEARKEY].filter(i=>!!e[i]):[];return!n[ye.WIDEVINE]&&t&&n.push(ye.WIDEVINE),n}const Gs=function(a){return Ht!=null&&(a=Ht.navigator)!=null&&a.requestMediaKeySystemAccess?self.navigator.requestMediaKeySystemAccess.bind(self.navigator):null}();function hd(a,e,t,n){let i;switch(a){case ye.FAIRPLAY:i=["cenc","sinf"];break;case ye.WIDEVINE:case ye.PLAYREADY:i=["cenc"];break;case ye.CLEARKEY:i=["cenc","keyids"];break;default:throw new Error(`Unknown key-system: ${a}`)}return pd(i,e,t,n)}function pd(a,e,t,n){return[{initDataTypes:a,persistentState:n.persistentState||"optional",distinctiveIdentifier:n.distinctiveIdentifier||"optional",sessionTypes:n.sessionTypes||[n.sessionType||"temporary"],audioCapabilities:e.map(r=>({contentType:`audio/mp4; codecs="${r}"`,robustness:n.audioRobustness||"",encryptionScheme:n.audioEncryptionScheme||null})),videoCapabilities:t.map(r=>({contentType:`video/mp4; codecs="${r}"`,robustness:n.videoRobustness||"",encryptionScheme:n.videoEncryptionScheme||null}))}]}function Ks(a){const e=new Uint16Array(a.buffer,a.byteOffset,a.byteLength/2),t=String.fromCharCode.apply(null,Array.from(e)),n=t.substring(t.indexOf("<"),t.length),s=new DOMParser().parseFromString(n,"text/xml").getElementsByTagName("KID")[0];if(s){const o=s.childNodes[0]?s.childNodes[0].nodeValue:s.getAttribute("VALUE");if(o){const l=Wi(o).subarray(0,16);return cd(l),l}}return null}function Rt(a,e,t){return Uint8Array.prototype.slice?a.slice(e,t):new Uint8Array(Array.prototype.slice.call(a,e,t))}const ji=(a,e)=>e+10<=a.length&&a[e]===73&&a[e+1]===68&&a[e+2]===51&&a[e+3]<255&&a[e+4]<255&&a[e+6]<128&&a[e+7]<128&&a[e+8]<128&&a[e+9]<128,Hs=(a,e)=>e+10<=a.length&&a[e]===51&&a[e+1]===68&&a[e+2]===73&&a[e+3]<255&&a[e+4]<255&&a[e+6]<128&&a[e+7]<128&&a[e+8]<128&&a[e+9]<128,Jt=(a,e)=>{const t=e;let n=0;for(;ji(a,e);){n+=10;const i=zn(a,e+6);n+=i,Hs(a,e+10)&&(n+=10),e+=n}if(n>0)return a.subarray(t,t+n)},zn=(a,e)=>{let t=0;return t=(a[e]&127)<<21,t|=(a[e+1]&127)<<14,t|=(a[e+2]&127)<<7,t|=a[e+3]&127,t},fd=(a,e)=>ji(a,e)&&zn(a,e+6)+10<=a.length-e,Qi=a=>{const e=zs(a);for(let t=0;t<e.length;t++){const n=e[t];if(qs(n))return vd(n)}},qs=a=>a&&a.key==="PRIV"&&a.info==="com.apple.streaming.transportStreamTimestamp",md=a=>{const e=String.fromCharCode(a[0],a[1],a[2],a[3]),t=zn(a,4),n=10;return{type:e,size:t,data:a.subarray(n,n+t)}},zs=a=>{let e=0;const t=[];for(;ji(a,e);){const n=zn(a,e+6);e+=10;const i=e+n;for(;e+8<i;){const r=md(a.subarray(e)),s=Ad(r);s&&t.push(s),e+=r.size+10}Hs(a,e)&&(e+=10)}return t},Ad=a=>a.type==="PRIV"?gd(a):a.type[0]==="W"?bd(a):yd(a),gd=a=>{if(a.size<2)return;const e=rt(a.data,!0),t=new Uint8Array(a.data.subarray(e.length+1));return{key:a.type,info:e,data:t.buffer}},yd=a=>{if(a.size<2)return;if(a.type==="TXXX"){let t=1;const n=rt(a.data.subarray(t),!0);t+=n.length+1;const i=rt(a.data.subarray(t));return{key:a.type,info:n,data:i}}const e=rt(a.data.subarray(1));return{key:a.type,data:e}},bd=a=>{if(a.type==="WXXX"){if(a.size<2)return;let t=1;const n=rt(a.data.subarray(t),!0);t+=n.length+1;const i=rt(a.data.subarray(t));return{key:a.type,info:n,data:i}}const e=rt(a.data);return{key:a.type,data:e}},vd=a=>{if(a.data.byteLength===8){const e=new Uint8Array(a.data),t=e[3]&1;let n=(e[4]<<23)+(e[5]<<15)+(e[6]<<7)+e[7];return n/=45,t&&(n+=4772185884e-2),Math.round(n)}},rt=(a,e=!1)=>{const t=Ed();if(t){const d=t.decode(a);if(e){const c=d.indexOf("\0");return c!==-1?d.substring(0,c):d}return d.replace(/\0/g,"")}const n=a.length;let i,r,s,o="",l=0;for(;l<n;){if(i=a[l++],i===0&&e)return o;if(i===0||i===3)continue;switch(i>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:o+=String.fromCharCode(i);break;case 12:case 13:r=a[l++],o+=String.fromCharCode((i&31)<<6|r&63);break;case 14:r=a[l++],s=a[l++],o+=String.fromCharCode((i&15)<<12|(r&63)<<6|(s&63)<<0);break}}return o};let hi;function Ed(){if(!navigator.userAgent.includes("PlayStation 4"))return!hi&&typeof self.TextDecoder<"u"&&(hi=new self.TextDecoder("utf-8")),hi}const et={hexDump:function(a){let e="";for(let t=0;t<a.length;t++){let n=a[t].toString(16);n.length<2&&(n="0"+n),e+=n}return e}},Bn=Math.pow(2,32)-1,xd=[].push,Ys={video:1,audio:2,id3:3,text:4};function Ie(a){return String.fromCharCode.apply(null,a)}function Vs(a,e){const t=a[e]<<8|a[e+1];return t<0?65536+t:t}function te(a,e){const t=Ws(a,e);return t<0?4294967296+t:t}function _r(a,e){let t=te(a,e);return t*=Math.pow(2,32),t+=te(a,e+4),t}function Ws(a,e){return a[e]<<24|a[e+1]<<16|a[e+2]<<8|a[e+3]}function pi(a,e,t){a[e]=t>>24,a[e+1]=t>>16&255,a[e+2]=t>>8&255,a[e+3]=t&255}function Cd(a){const e=a.byteLength;for(let t=0;t<e;){const n=te(a,t);if(n>8&&a[t+4]===109&&a[t+5]===111&&a[t+6]===111&&a[t+7]===102)return!0;t=n>1?t+n:e}return!1}function se(a,e){const t=[];if(!e.length)return t;const n=a.byteLength;for(let i=0;i<n;){const r=te(a,i),s=Ie(a.subarray(i+4,i+8)),o=r>1?i+r:n;if(s===e[0])if(e.length===1)t.push(a.subarray(i+8,o));else{const l=se(a.subarray(i+8,o),e.slice(1));l.length&&xd.apply(t,l)}i=o}return t}function Td(a){const e=[],t=a[0];let n=8;const i=te(a,n);n+=4;let r=0,s=0;t===0?(r=te(a,n),s=te(a,n+4),n+=8):(r=_r(a,n),s=_r(a,n+8),n+=16),n+=2;let o=a.length+s;const l=Vs(a,n);n+=2;for(let d=0;d<l;d++){let c=n;const h=te(a,c);c+=4;const u=h&2147483647;if((h&2147483648)>>>31===1)return D.warn("SIDX has hierarchical references (not supported)"),null;const A=te(a,c);c+=4,e.push({referenceSize:u,subsegmentDuration:A,info:{duration:A/i,start:o,end:o+u-1}}),o+=u,c+=4,n=c}return{earliestPresentationTime:r,timescale:i,version:t,referencesCount:l,references:e}}function js(a){const e=[],t=se(a,["moov","trak"]);for(let i=0;i<t.length;i++){const r=t[i],s=se(r,["tkhd"])[0];if(s){let o=s[0];const l=te(s,o===0?12:20),d=se(r,["mdia","mdhd"])[0];if(d){o=d[0];const c=te(d,o===0?12:20),h=se(r,["mdia","hdlr"])[0];if(h){const u=Ie(h.subarray(8,12)),m={soun:be.AUDIO,vide:be.VIDEO}[u];if(m){const A=se(r,["mdia","minf","stbl","stsd"])[0],f=Sd(A);e[l]={timescale:c,type:m},e[m]=_e({timescale:c,id:l},f)}}}}}return se(a,["moov","mvex","trex"]).forEach(i=>{const r=te(i,4),s=e[r];s&&(s.default={duration:te(i,12),flags:te(i,20)})}),e}function Sd(a){const e=a.subarray(8),t=e.subarray(8+78),n=Ie(e.subarray(4,8));let i=n;const r=n==="enca"||n==="encv";if(r){const o=se(e,[n])[0].subarray(n==="enca"?28:78);se(o,["sinf"]).forEach(d=>{const c=se(d,["schm"])[0];if(c){const h=Ie(c.subarray(4,8));if(h==="cbcs"||h==="cenc"){const u=se(d,["frma"])[0];u&&(i=Ie(u))}}})}switch(i){case"avc1":case"avc2":case"avc3":case"avc4":{const s=se(t,["avcC"])[0];i+="."+fn(s[1])+fn(s[2])+fn(s[3]);break}case"mp4a":{const s=se(e,[n])[0],o=se(s.subarray(28),["esds"])[0];if(o&&o.length>12){let l=4;if(o[l++]!==3)break;l=fi(o,l),l+=2;const d=o[l++];if(d&128&&(l+=2),d&64&&(l+=o[l++]),o[l++]!==4)break;l=fi(o,l);const c=o[l++];if(c===64)i+="."+fn(c);else break;if(l+=12,o[l++]!==5)break;l=fi(o,l);const h=o[l++];let u=(h&248)>>3;u===31&&(u+=1+((h&7)<<3)+((o[l]&224)>>5)),i+="."+u}break}case"hvc1":case"hev1":{const s=se(t,["hvcC"])[0],o=s[1],l=["","A","B","C"][o>>6],d=o&31,c=te(s,2),h=(o&32)>>5?"H":"L",u=s[12],m=s.subarray(6,12);i+="."+l+d,i+="."+c.toString(16).toUpperCase(),i+="."+h+u;let A="";for(let f=m.length;f--;){const g=m[f];(g||A)&&(A="."+g.toString(16).toUpperCase()+A)}i+=A;break}case"dvh1":case"dvhe":{const s=se(t,["dvcC"])[0],o=s[2]>>1&127,l=s[2]<<5&32|s[3]>>3&31;i+="."+Ze(o)+"."+Ze(l);break}case"vp09":{const s=se(t,["vpcC"])[0],o=s[4],l=s[5],d=s[6]>>4&15;i+="."+Ze(o)+"."+Ze(l)+"."+Ze(d);break}case"av01":{const s=se(t,["av1C"])[0],o=s[1]>>>5,l=s[1]&31,d=s[2]>>>7?"H":"M",c=(s[2]&64)>>6,h=(s[2]&32)>>5,u=o===2&&c?h?12:10:c?10:8,m=(s[2]&16)>>4,A=(s[2]&8)>>3,f=(s[2]&4)>>2,g=s[2]&3,C=1,T=1,S=1,k=0;i+="."+o+"."+Ze(l)+d+"."+Ze(u)+"."+m+"."+A+f+g+"."+Ze(C)+"."+Ze(T)+"."+Ze(S)+"."+k;break}}return{codec:i,encrypted:r}}function fi(a,e){const t=e+5;for(;a[e++]&128&&e<t;);return e}function fn(a){return("0"+a.toString(16).toUpperCase()).slice(-2)}function Ze(a){return(a<10?"0":"")+a}function kd(a,e){if(!a||!e)return a;const t=e.keyId;return t&&e.isCommonEncryption&&se(a,["moov","trak"]).forEach(i=>{const s=se(i,["mdia","minf","stbl","stsd"])[0].subarray(8);let o=se(s,["enca"]);const l=o.length>0;l||(o=se(s,["encv"])),o.forEach(d=>{const c=l?d.subarray(28):d.subarray(78);se(c,["sinf"]).forEach(u=>{const m=Qs(u);if(m){const A=m.subarray(8,24);A.some(f=>f!==0)||(D.log(`[eme] Patching keyId in 'enc${l?"a":"v"}>sinf>>tenc' box: ${et.hexDump(A)} -> ${et.hexDump(t)}`),m.set(t,8))}})})}),a}function Qs(a){const e=se(a,["schm"])[0];if(e){const t=Ie(e.subarray(4,8));if(t==="cbcs"||t==="cenc")return se(a,["schi","tenc"])[0]}return null}function wd(a,e){return se(e,["moof","traf"]).reduce((t,n)=>{const i=se(n,["tfdt"])[0],r=i[0],s=se(n,["tfhd"]).reduce((o,l)=>{const d=te(l,4),c=a[d];if(c){let h=te(i,4);if(r===1){if(h===Bn)return D.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time"),o;h*=Bn+1,h+=te(i,8)}const u=c.timescale||9e4,m=h/u;if(X(m)&&(o===null||m<o))return m}return o},null);return s!==null&&X(s)&&(t===null||s<t)?s:t},null)}function Ld(a,e){let t=0,n=0,i=0;const r=se(a,["moof","traf"]);for(let s=0;s<r.length;s++){const o=r[s],l=se(o,["tfhd"])[0],d=te(l,4),c=e[d];if(!c)continue;const h=c.default,u=te(l,0)|(h==null?void 0:h.flags);let m=h==null?void 0:h.duration;u&8&&(u&2?m=te(l,12):m=te(l,8));const A=c.timescale||9e4,f=se(o,["trun"]);for(let g=0;g<f.length;g++){if(t=Id(f[g]),!t&&m){const C=te(f[g],4);t=m*C}c.type===be.VIDEO?n+=t/A:c.type===be.AUDIO&&(i+=t/A)}}if(n===0&&i===0){let s=1/0,o=0,l=0;const d=se(a,["sidx"]);for(let c=0;c<d.length;c++){const h=Td(d[c]);if(h!=null&&h.references){s=Math.min(s,h.earliestPresentationTime/h.timescale);const u=h.references.reduce((m,A)=>m+A.info.duration||0,0);o=Math.max(o,u+h.earliestPresentationTime/h.timescale),l=o-s}}if(l&&X(l))return l}return n||i}function Id(a){const e=te(a,0);let t=8;e&1&&(t+=4),e&4&&(t+=4);let n=0;const i=te(a,4);for(let r=0;r<i;r++){if(e&256){const s=te(a,t);n+=s,t+=4}e&512&&(t+=4),e&1024&&(t+=4),e&2048&&(t+=4)}return n}function Rd(a,e,t){se(e,["moof","traf"]).forEach(n=>{se(n,["tfhd"]).forEach(i=>{const r=te(i,4),s=a[r];if(!s)return;const o=s.timescale||9e4;se(n,["tfdt"]).forEach(l=>{const d=l[0],c=t*o;if(c){let h=te(l,4);if(d===0)h-=c,h=Math.max(h,0),pi(l,4,h);else{h*=Math.pow(2,32),h+=te(l,8),h-=c,h=Math.max(h,0);const u=Math.floor(h/(Bn+1)),m=Math.floor(h%(Bn+1));pi(l,4,u),pi(l,8,m)}}})})})}function Dd(a){const e={valid:null,remainder:null},t=se(a,["moof"]);if(t.length<2)return e.remainder=a,e;const n=t[t.length-1];return e.valid=Rt(a,0,n.byteOffset-8),e.remainder=Rt(a,n.byteOffset-8),e}function ze(a,e){const t=new Uint8Array(a.length+e.length);return t.set(a),t.set(e,a.length),t}function Br(a,e){const t=[],n=e.samples,i=e.timescale,r=e.id;let s=!1;return se(n,["moof"]).map(l=>{const d=l.byteOffset-8;se(l,["traf"]).map(h=>{const u=se(h,["tfdt"]).map(m=>{const A=m[0];let f=te(m,4);return A===1&&(f*=Math.pow(2,32),f+=te(m,8)),f/i})[0];return u!==void 0&&(a=u),se(h,["tfhd"]).map(m=>{const A=te(m,4),f=te(m,0)&16777215,g=(f&1)!==0,C=(f&2)!==0,T=(f&8)!==0;let S=0;const k=(f&16)!==0;let I=0;const P=(f&32)!==0;let _=8;A===r&&(g&&(_+=8),C&&(_+=4),T&&(S=te(m,_),_+=4),k&&(I=te(m,_),_+=4),P&&(_+=4),e.type==="video"&&(s=_d(e.codec)),se(h,["trun"]).map(N=>{const U=N[0],F=te(N,0)&16777215,$=(F&1)!==0;let H=0;const R=(F&4)!==0,q=(F&256)!==0;let V=0;const j=(F&512)!==0;let ee=0;const K=(F&1024)!==0,Y=(F&2048)!==0;let W=0;const le=te(N,4);let re=8;$&&(H=te(N,re),re+=4),R&&(re+=4);let de=H+d;for(let ve=0;ve<le;ve++){if(q?(V=te(N,re),re+=4):V=S,j?(ee=te(N,re),re+=4):ee=I,K&&(re+=4),Y&&(U===0?W=te(N,re):W=Ws(N,re),re+=4),e.type===be.VIDEO){let fe=0;for(;fe<ee;){const Ee=te(n,de);if(de+=4,Bd(s,n[de])){const Pe=n.subarray(de,de+Ee);Xs(Pe,s?2:1,a+W/i,t)}de+=Ee,fe+=Ee+4}}a+=V/i}}))})})}),t}function _d(a){if(!a)return!1;const e=a.indexOf("."),t=e<0?a:a.substring(0,e);return t==="hvc1"||t==="hev1"||t==="dvh1"||t==="dvhe"}function Bd(a,e){if(a){const t=e>>1&63;return t===39||t===40}else return(e&31)===6}function Xs(a,e,t,n){const i=Zs(a);let r=0;r+=e;let s=0,o=0,l=0;for(;r<i.length;){s=0;do{if(r>=i.length)break;l=i[r++],s+=l}while(l===255);o=0;do{if(r>=i.length)break;l=i[r++],o+=l}while(l===255);const d=i.length-r;let c=r;if(o<d)r+=o;else if(o>d){D.error(`Malformed SEI payload. ${o} is too small, only ${d} bytes left to parse.`);break}if(s===4){if(i[c++]===181){const u=Vs(i,c);if(c+=2,u===49){const m=te(i,c);if(c+=4,m===1195456820){const A=i[c++];if(A===3){const f=i[c++],g=31&f,C=64&f,T=C?2+g*3:0,S=new Uint8Array(T);if(C){S[0]=f;for(let k=1;k<T;k++)S[k]=i[c++]}n.push({type:A,payloadType:s,pts:t,bytes:S})}}}}}else if(s===5&&o>16){const h=[];for(let A=0;A<16;A++){const f=i[c++].toString(16);h.push(f.length==1?"0"+f:f),(A===3||A===5||A===7||A===9)&&h.push("-")}const u=o-16,m=new Uint8Array(u);for(let A=0;A<u;A++)m[A]=i[c++];n.push({payloadType:s,pts:t,uuid:h.join(""),userData:rt(m),userDataBytes:m})}}}function Zs(a){const e=a.byteLength,t=[];let n=1;for(;n<e-2;)a[n]===0&&a[n+1]===0&&a[n+2]===3?(t.push(n+2),n+=2):n++;if(t.length===0)return a;const i=e-t.length,r=new Uint8Array(i);let s=0;for(n=0;n<i;s++,n++)s===t[0]&&(s++,t.shift()),r[n]=a[s];return r}function Pd(a){const e=a[0];let t="",n="",i=0,r=0,s=0,o=0,l=0,d=0;if(e===0){for(;Ie(a.subarray(d,d+1))!=="\0";)t+=Ie(a.subarray(d,d+1)),d+=1;for(t+=Ie(a.subarray(d,d+1)),d+=1;Ie(a.subarray(d,d+1))!=="\0";)n+=Ie(a.subarray(d,d+1)),d+=1;n+=Ie(a.subarray(d,d+1)),d+=1,i=te(a,12),r=te(a,16),o=te(a,20),l=te(a,24),d=28}else if(e===1){d+=4,i=te(a,d),d+=4;const h=te(a,d);d+=4;const u=te(a,d);for(d+=4,s=2**32*h+u,Zl(s)||(s=Number.MAX_SAFE_INTEGER,D.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")),o=te(a,d),d+=4,l=te(a,d),d+=4;Ie(a.subarray(d,d+1))!=="\0";)t+=Ie(a.subarray(d,d+1)),d+=1;for(t+=Ie(a.subarray(d,d+1)),d+=1;Ie(a.subarray(d,d+1))!=="\0";)n+=Ie(a.subarray(d,d+1)),d+=1;n+=Ie(a.subarray(d,d+1)),d+=1}const c=a.subarray(d,a.byteLength);return{schemeIdUri:t,value:n,timeScale:i,presentationTime:s,presentationTimeDelta:r,eventDuration:o,id:l,payload:c}}function Od(a,...e){const t=e.length;let n=8,i=t;for(;i--;)n+=e[i].byteLength;const r=new Uint8Array(n);for(r[0]=n>>24&255,r[1]=n>>16&255,r[2]=n>>8&255,r[3]=n&255,r.set(a,4),i=0,n=8;i<t;i++)r.set(e[i],n),n+=e[i].byteLength;return r}function Fd(a,e,t){if(a.byteLength!==16)throw new RangeError("Invalid system id");let n,i;if(e){n=1,i=new Uint8Array(e.length*16);for(let o=0;o<e.length;o++){const l=e[o];if(l.byteLength!==16)throw new RangeError("Invalid key");i.set(l,o*16)}}else n=0,i=new Uint8Array;let r;n>0?(r=new Uint8Array(4),e.length>0&&new DataView(r.buffer).setUint32(0,e.length,!1)):r=new Uint8Array;const s=new Uint8Array(4);return t&&t.byteLength>0&&new DataView(s.buffer).setUint32(0,t.byteLength,!1),Od([112,115,115,104],new Uint8Array([n,0,0,0]),a,r,i,s,t||new Uint8Array)}function Md(a){const e=[];if(a instanceof ArrayBuffer){const t=a.byteLength;let n=0;for(;n+32<t;){const i=new DataView(a,n),r=Nd(i);e.push(r),n+=r.size}}return e}function Nd(a){const e=a.getUint32(0),t=a.byteOffset,n=a.byteLength;if(n<e)return{offset:t,size:n};if(a.getUint32(4)!==1886614376)return{offset:t,size:e};const r=a.getUint32(8)>>>24;if(r!==0&&r!==1)return{offset:t,size:e};const s=a.buffer,o=et.hexDump(new Uint8Array(s,t+12,16)),l=a.getUint32(28);let d=null,c=null;if(r===0){if(e-32<l||l<22)return{offset:t,size:e};c=new Uint8Array(s,t+32,l)}else if(r===1){if(!l||n<t+32+l*16+16)return{offset:t,size:e};d=[];for(let h=0;h<l;h++)d.push(new Uint8Array(s,t+32+h*16,16))}return{version:r,systemId:o,kids:d,data:c,offset:t,size:e}}let mn={};class en{static clearKeyUriToKeyIdMap(){mn={}}constructor(e,t,n,i=[1],r=null){this.uri=void 0,this.method=void 0,this.keyFormat=void 0,this.keyFormatVersions=void 0,this.encrypted=void 0,this.isCommonEncryption=void 0,this.iv=null,this.key=null,this.keyId=null,this.pssh=null,this.method=e,this.uri=t,this.keyFormat=n,this.keyFormatVersions=i,this.iv=r,this.encrypted=e?e!=="NONE":!1,this.isCommonEncryption=this.encrypted&&e!=="AES-128"}isSupported(){if(this.method){if(this.method==="AES-128"||this.method==="NONE")return!0;if(this.keyFormat==="identity")return this.method==="SAMPLE-AES";switch(this.keyFormat){case $e.FAIRPLAY:case $e.WIDEVINE:case $e.PLAYREADY:case $e.CLEARKEY:return["ISO-23001-7","SAMPLE-AES","SAMPLE-AES-CENC","SAMPLE-AES-CTR"].indexOf(this.method)!==-1}}return!1}getDecryptData(e){if(!this.encrypted||!this.uri)return null;if(this.method==="AES-128"&&this.uri&&!this.iv){typeof e!="number"&&(this.method==="AES-128"&&!this.iv&&D.warn(`missing IV for initialization segment with method="${this.method}" - compliance issue`),e=0);const n=Ud(e);return new en(this.method,this.uri,"identity",this.keyFormatVersions,n)}const t=ud(this.uri);if(t)switch(this.keyFormat){case $e.WIDEVINE:this.pssh=t,t.length>=22&&(this.keyId=t.subarray(t.length-22,t.length-6));break;case $e.PLAYREADY:{const n=new Uint8Array([154,4,240,121,152,64,66,134,171,146,230,91,224,136,95,149]);this.pssh=Fd(n,null,t),this.keyId=Ks(t);break}default:{let n=t.subarray(0,16);if(n.length!==16){const i=new Uint8Array(16);i.set(n,16-n.length),n=i}this.keyId=n;break}}if(!this.keyId||this.keyId.byteLength!==16){let n=mn[this.uri];if(!n){const i=Object.keys(mn).length%Number.MAX_SAFE_INTEGER;n=new Uint8Array(16),new DataView(n.buffer,12,4).setUint32(0,i),mn[this.uri]=n}this.keyId=n}return this}}function Ud(a){const e=new Uint8Array(16);for(let t=12;t<16;t++)e[t]=a>>8*(15-t)&255;return e}const Js=/\{\$([a-zA-Z0-9-_]+)\}/g;function Pr(a){return Js.test(a)}function Ue(a,e,t){if(a.variableList!==null||a.hasVariableRefs)for(let n=t.length;n--;){const i=t[n],r=e[i];r&&(e[i]=Bi(a,r))}}function Bi(a,e){if(a.variableList!==null||a.hasVariableRefs){const t=a.variableList;return e.replace(Js,n=>{const i=n.substring(2,n.length-1),r=t==null?void 0:t[i];return r===void 0?(a.playlistParsingError||(a.playlistParsingError=new Error(`Missing preceding EXT-X-DEFINE tag for Variable Reference: "${i}"`)),n):r})}return e}function Or(a,e,t){let n=a.variableList;n||(a.variableList=n={});let i,r;if("QUERYPARAM"in e){i=e.QUERYPARAM;try{const s=new self.URL(t).searchParams;if(s.has(i))r=s.get(i);else throw new Error(`"${i}" does not match any query parameter in URI: "${t}"`)}catch(s){a.playlistParsingError||(a.playlistParsingError=new Error(`EXT-X-DEFINE QUERYPARAM: ${s.message}`))}}else i=e.NAME,r=e.VALUE;i in n?a.playlistParsingError||(a.playlistParsingError=new Error(`EXT-X-DEFINE duplicate Variable Name declarations: "${i}"`)):n[i]=r||""}function $d(a,e,t){const n=e.IMPORT;if(t&&n in t){let i=a.variableList;i||(a.variableList=i={}),i[n]=t[n]}else a.playlistParsingError||(a.playlistParsingError=new Error(`EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "${n}"`))}function Dt(a=!0){return typeof self>"u"?void 0:(a||!self.MediaSource)&&self.ManagedMediaSource||self.MediaSource||self.WebKitMediaSource}function Gd(a){return typeof self<"u"&&a===self.ManagedMediaSource}const Pn={audio:{a3ds:1,"ac-3":.95,"ac-4":1,alac:.9,alaw:1,dra1:1,"dts+":1,"dts-":1,dtsc:1,dtse:1,dtsh:1,"ec-3":.9,enca:1,fLaC:.9,flac:.9,FLAC:.9,g719:1,g726:1,m4ae:1,mha1:1,mha2:1,mhm1:1,mhm2:1,mlpa:1,mp4a:1,"raw ":1,Opus:1,opus:1,samr:1,sawb:1,sawp:1,sevc:1,sqcp:1,ssmv:1,twos:1,ulaw:1},video:{avc1:1,avc2:1,avc3:1,avc4:1,avcp:1,av01:.8,drac:1,dva1:1,dvav:1,dvh1:.7,dvhe:.7,encv:1,hev1:.75,hvc1:.75,mjp2:1,mp4v:1,mvc1:1,mvc2:1,mvc3:1,mvc4:1,resv:1,rv60:1,s263:1,svc1:1,svc2:1,"vc-1":1,vp08:1,vp09:.9},text:{stpp:1,wvtt:1}};function Kd(a,e){const t=Pn[e];return!!t&&!!t[a.slice(0,4)]}function mi(a,e,t=!0){return!a.split(",").some(n=>!ea(n,e,t))}function ea(a,e,t=!0){var n;const i=Dt(t);return(n=i==null?void 0:i.isTypeSupported(tn(a,e)))!=null?n:!1}function tn(a,e){return`${e}/mp4;codecs="${a}"`}function Fr(a){if(a){const e=a.substring(0,4);return Pn.video[e]}return 2}function On(a){return a.split(",").reduce((e,t)=>{const n=Pn.video[t];return n?(n*2+e)/(e?3:2):(Pn.audio[t]+e)/(e?2:1)},0)}const Ai={};function Hd(a,e=!0){if(Ai[a])return Ai[a];const t={flac:["flac","fLaC","FLAC"],opus:["opus","Opus"]}[a];for(let n=0;n<t.length;n++)if(ea(t[n],"audio",e))return Ai[a]=t[n],t[n];return a}const qd=/flac|opus/i;function Fn(a,e=!0){return a.replace(qd,t=>Hd(t.toLowerCase(),e))}function Mr(a,e){return a&&a!=="mp4a"?a:e&&e.split(",")[0]}function zd(a){const e=a.split(",");for(let t=0;t<e.length;t++){const n=e[t].split(".");if(n.length>2){let i=n.shift()+".";i+=parseInt(n.shift()).toString(16),i+=("000"+parseInt(n.shift()).toString(16)).slice(-4),e[t]=i}}return e.join(",")}const Nr=/#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g,Ur=/#EXT-X-MEDIA:(.*)/g,Yd=/^#EXT(?:INF|-X-TARGETDURATION):/m,$r=new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,/(?!#) *(\S[^\r\n]*)/.source,/#EXT-X-BYTERANGE:*(.+)/.source,/#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,/#.*/.source].join("|"),"g"),Vd=new RegExp([/#(EXTM3U)/.source,/#EXT-X-(DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source,/#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source,/#EXT-X-(DISCONTINUITY|ENDLIST|GAP|INDEPENDENT-SEGMENTS)/.source,/(#)([^:]*):(.*)/.source,/(#)(.*)(?:.*)\r?\n?/.source].join("|"));class nt{static findGroup(e,t){for(let n=0;n<e.length;n++){const i=e[n];if(i.id===t)return i}}static resolve(e,t){return Vi.buildAbsoluteURL(t,e,{alwaysNormalize:!0})}static isMediaPlaylist(e){return Yd.test(e)}static parseMasterPlaylist(e,t){const n=Pr(e),i={contentSteering:null,levels:[],playlistParsingError:null,sessionData:null,sessionKeys:null,startTimeOffset:null,variableList:null,hasVariableRefs:n},r=[];Nr.lastIndex=0;let s;for(;(s=Nr.exec(e))!=null;)if(s[1]){var o;const d=new ke(s[1]);Ue(i,d,["CODECS","SUPPLEMENTAL-CODECS","ALLOWED-CPC","PATHWAY-ID","STABLE-VARIANT-ID","AUDIO","VIDEO","SUBTITLES","CLOSED-CAPTIONS","NAME"]);const c=Bi(i,s[2]),h={attrs:d,bitrate:d.decimalInteger("BANDWIDTH")||d.decimalInteger("AVERAGE-BANDWIDTH"),name:d.NAME,url:nt.resolve(c,t)},u=d.decimalResolution("RESOLUTION");u&&(h.width=u.width,h.height=u.height),Wd(d.CODECS,h),(o=h.unknownCodecs)!=null&&o.length||r.push(h),i.levels.push(h)}else if(s[3]){const d=s[3],c=s[4];switch(d){case"SESSION-DATA":{const h=new ke(c);Ue(i,h,["DATA-ID","LANGUAGE","VALUE","URI"]);const u=h["DATA-ID"];u&&(i.sessionData===null&&(i.sessionData={}),i.sessionData[u]=h);break}case"SESSION-KEY":{const h=Gr(c,t,i);h.encrypted&&h.isSupported()?(i.sessionKeys===null&&(i.sessionKeys=[]),i.sessionKeys.push(h)):D.warn(`[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "${c}"`);break}case"DEFINE":{{const h=new ke(c);Ue(i,h,["NAME","VALUE","QUERYPARAM"]),Or(i,h,t)}break}case"CONTENT-STEERING":{const h=new ke(c);Ue(i,h,["SERVER-URI","PATHWAY-ID"]),i.contentSteering={uri:nt.resolve(h["SERVER-URI"],t),pathwayId:h["PATHWAY-ID"]||"."};break}case"START":{i.startTimeOffset=Kr(c);break}}}const l=r.length>0&&r.length<i.levels.length;return i.levels=l?r:i.levels,i.levels.length===0&&(i.playlistParsingError=new Error("no levels found in manifest")),i}static parseMasterPlaylistMedia(e,t,n){let i;const r={},s=n.levels,o={AUDIO:s.map(d=>({id:d.attrs.AUDIO,audioCodec:d.audioCodec})),SUBTITLES:s.map(d=>({id:d.attrs.SUBTITLES,textCodec:d.textCodec})),"CLOSED-CAPTIONS":[]};let l=0;for(Ur.lastIndex=0;(i=Ur.exec(e))!==null;){const d=new ke(i[1]),c=d.TYPE;if(c){const h=o[c],u=r[c]||[];r[c]=u,Ue(n,d,["URI","GROUP-ID","LANGUAGE","ASSOC-LANGUAGE","STABLE-RENDITION-ID","NAME","INSTREAM-ID","CHARACTERISTICS","CHANNELS"]);const m=d.LANGUAGE,A=d["ASSOC-LANGUAGE"],f=d.CHANNELS,g=d.CHARACTERISTICS,C=d["INSTREAM-ID"],T={attrs:d,bitrate:0,id:l++,groupId:d["GROUP-ID"]||"",name:d.NAME||m||"",type:c,default:d.bool("DEFAULT"),autoselect:d.bool("AUTOSELECT"),forced:d.bool("FORCED"),lang:m,url:d.URI?nt.resolve(d.URI,t):""};if(A&&(T.assocLang=A),f&&(T.channels=f),g&&(T.characteristics=g),C&&(T.instreamId=C),h!=null&&h.length){const S=nt.findGroup(h,T.groupId)||h[0];Hr(T,S,"audioCodec"),Hr(T,S,"textCodec")}u.push(T)}}return r}static parseLevelPlaylist(e,t,n,i,r,s){const o=new ld(t),l=o.fragments;let d=null,c=0,h=0,u=0,m=0,A=null,f=new li(i,t),g,C,T,S=-1,k=!1,I=null;for($r.lastIndex=0,o.m3u8=e,o.hasVariableRefs=Pr(e);(g=$r.exec(e))!==null;){k&&(k=!1,f=new li(i,t),f.start=u,f.sn=c,f.cc=m,f.level=n,d&&(f.initSegment=d,f.rawProgramDateTime=d.rawProgramDateTime,d.rawProgramDateTime=null,I&&(f.setByteRange(I),I=null)));const U=g[1];if(U){f.duration=parseFloat(U);const F=(" "+g[2]).slice(1);f.title=F||null,f.tagList.push(F?["INF",U,F]:["INF",U])}else if(g[3]){if(X(f.duration)){f.start=u,T&&Yr(f,T,o),f.sn=c,f.level=n,f.cc=m,l.push(f);const F=(" "+g[3]).slice(1);f.relurl=Bi(o,F),qr(f,A),A=f,u+=f.duration,c++,h=0,k=!0}}else if(g[4]){const F=(" "+g[4]).slice(1);A?f.setByteRange(F,A):f.setByteRange(F)}else if(g[5])f.rawProgramDateTime=(" "+g[5]).slice(1),f.tagList.push(["PROGRAM-DATE-TIME",f.rawProgramDateTime]),S===-1&&(S=l.length);else{if(g=g[0].match(Vd),!g){D.warn("No matches on slow regex match for level playlist!");continue}for(C=1;C<g.length&&!(typeof g[C]<"u");C++);const F=(" "+g[C]).slice(1),$=(" "+g[C+1]).slice(1),H=g[C+2]?(" "+g[C+2]).slice(1):"";switch(F){case"PLAYLIST-TYPE":o.type=$.toUpperCase();break;case"MEDIA-SEQUENCE":c=o.startSN=parseInt($);break;case"SKIP":{const R=new ke($);Ue(o,R,["RECENTLY-REMOVED-DATERANGES"]);const q=R.decimalInteger("SKIPPED-SEGMENTS");if(X(q)){o.skippedSegments=q;for(let j=q;j--;)l.unshift(null);c+=q}const V=R.enumeratedString("RECENTLY-REMOVED-DATERANGES");V&&(o.recentlyRemovedDateranges=V.split("	"));break}case"TARGETDURATION":o.targetduration=Math.max(parseInt($),1);break;case"VERSION":o.version=parseInt($);break;case"INDEPENDENT-SEGMENTS":case"EXTM3U":break;case"ENDLIST":o.live=!1;break;case"#":($||H)&&f.tagList.push(H?[$,H]:[$]);break;case"DISCONTINUITY":m++,f.tagList.push(["DIS"]);break;case"GAP":f.gap=!0,f.tagList.push([F]);break;case"BITRATE":f.tagList.push([F,$]);break;case"DATERANGE":{const R=new ke($);Ue(o,R,["ID","CLASS","START-DATE","END-DATE","SCTE35-CMD","SCTE35-OUT","SCTE35-IN"]),Ue(o,R,R.clientAttrs);const q=new Us(R,o.dateRanges[R.ID]);q.isValid||o.skippedSegments?o.dateRanges[q.id]=q:D.warn(`Ignoring invalid DATERANGE tag: "${$}"`),f.tagList.push(["EXT-X-DATERANGE",$]);break}case"DEFINE":{{const R=new ke($);Ue(o,R,["NAME","VALUE","IMPORT","QUERYPARAM"]),"IMPORT"in R?$d(o,R,s):Or(o,R,t)}break}case"DISCONTINUITY-SEQUENCE":m=parseInt($);break;case"KEY":{const R=Gr($,t,o);if(R.isSupported()){if(R.method==="NONE"){T=void 0;break}T||(T={}),T[R.keyFormat]&&(T=we({},T)),T[R.keyFormat]=R}else D.warn(`[Keys] Ignoring invalid EXT-X-KEY tag: "${$}"`);break}case"START":o.startTimeOffset=Kr($);break;case"MAP":{const R=new ke($);if(Ue(o,R,["BYTERANGE","URI"]),f.duration){const q=new li(i,t);zr(q,R,n,T),d=q,f.initSegment=d,d.rawProgramDateTime&&!f.rawProgramDateTime&&(f.rawProgramDateTime=d.rawProgramDateTime)}else{const q=f.byteRangeEndOffset;if(q){const V=f.byteRangeStartOffset;I=`${q-V}@${V}`}else I=null;zr(f,R,n,T),d=f,k=!0}break}case"SERVER-CONTROL":{const R=new ke($);o.canBlockReload=R.bool("CAN-BLOCK-RELOAD"),o.canSkipUntil=R.optionalFloat("CAN-SKIP-UNTIL",0),o.canSkipDateRanges=o.canSkipUntil>0&&R.bool("CAN-SKIP-DATERANGES"),o.partHoldBack=R.optionalFloat("PART-HOLD-BACK",0),o.holdBack=R.optionalFloat("HOLD-BACK",0);break}case"PART-INF":{const R=new ke($);o.partTarget=R.decimalFloatingPoint("PART-TARGET");break}case"PART":{let R=o.partList;R||(R=o.partList=[]);const q=h>0?R[R.length-1]:void 0,V=h++,j=new ke($);Ue(o,j,["BYTERANGE","URI"]);const ee=new ad(j,f,t,V,q);R.push(ee),f.duration+=ee.duration;break}case"PRELOAD-HINT":{const R=new ke($);Ue(o,R,["URI"]),o.preloadHint=R;break}case"RENDITION-REPORT":{const R=new ke($);Ue(o,R,["URI"]),o.renditionReports=o.renditionReports||[],o.renditionReports.push(R);break}default:D.warn(`line parsed but not handled: ${g}`);break}}}A&&!A.relurl?(l.pop(),u-=A.duration,o.partList&&(o.fragmentHint=A)):o.partList&&(qr(f,A),f.cc=m,o.fragmentHint=f,T&&Yr(f,T,o));const P=l.length,_=l[0],N=l[P-1];if(u+=o.skippedSegments*o.targetduration,u>0&&P&&N){o.averagetargetduration=u/P;const U=N.sn;o.endSN=U!=="initSegment"?U:0,o.live||(N.endList=!0),_&&(o.startCC=_.cc)}else o.endSN=0,o.startCC=0;return o.fragmentHint&&(u+=o.fragmentHint.duration),o.totalduration=u,o.endCC=m,S>0&&jd(l,S),o}}function Gr(a,e,t){var n,i;const r=new ke(a);Ue(t,r,["KEYFORMAT","KEYFORMATVERSIONS","URI","IV","URI"]);const s=(n=r.METHOD)!=null?n:"",o=r.URI,l=r.hexadecimalInteger("IV"),d=r.KEYFORMATVERSIONS,c=(i=r.KEYFORMAT)!=null?i:"identity";o&&r.IV&&!l&&D.error(`Invalid IV: ${r.IV}`);const h=o?nt.resolve(o,e):"",u=(d||"1").split("/").map(Number).filter(Number.isFinite);return new en(s,h,c,u,l)}function Kr(a){const t=new ke(a).decimalFloatingPoint("TIME-OFFSET");return X(t)?t:null}function Wd(a,e){let t=(a||"").split(/[ ,]+/).filter(n=>n);["video","audio","text"].forEach(n=>{const i=t.filter(r=>Kd(r,n));i.length&&(e[`${n}Codec`]=i.join(","),t=t.filter(r=>i.indexOf(r)===-1))}),e.unknownCodecs=t}function Hr(a,e,t){const n=e[t];n&&(a[t]=n)}function jd(a,e){let t=a[e];for(let n=e;n--;){const i=a[n];if(!i)return;i.programDateTime=t.programDateTime-i.duration*1e3,t=i}}function qr(a,e){a.rawProgramDateTime?a.programDateTime=Date.parse(a.rawProgramDateTime):e!=null&&e.programDateTime&&(a.programDateTime=e.endProgramDateTime),X(a.programDateTime)||(a.programDateTime=null,a.rawProgramDateTime=null)}function zr(a,e,t,n){a.relurl=e.URI,e.BYTERANGE&&a.setByteRange(e.BYTERANGE),a.level=t,a.sn="initSegment",n&&(a.levelkeys=n),a.initSegment=null}function Yr(a,e,t){a.levelkeys=e;const{encryptedFragments:n}=t;(!n.length||n[n.length-1].levelkeys!==e)&&Object.keys(e).some(i=>e[i].isCommonEncryption)&&n.push(a)}var he={MANIFEST:"manifest",LEVEL:"level",AUDIO_TRACK:"audioTrack",SUBTITLE_TRACK:"subtitleTrack"},ne={MAIN:"main",AUDIO:"audio",SUBTITLE:"subtitle"};function Vr(a){const{type:e}=a;switch(e){case he.AUDIO_TRACK:return ne.AUDIO;case he.SUBTITLE_TRACK:return ne.SUBTITLE;default:return ne.MAIN}}function gi(a,e){let t=a.url;return(t===void 0||t.indexOf("data:")===0)&&(t=e.url),t}class Qd{constructor(e){this.hls=void 0,this.loaders=Object.create(null),this.variableList=null,this.hls=e,this.registerListeners()}startLoad(e){}stopLoad(){this.destroyInternalLoaders()}registerListeners(){const{hls:e}=this;e.on(v.MANIFEST_LOADING,this.onManifestLoading,this),e.on(v.LEVEL_LOADING,this.onLevelLoading,this),e.on(v.AUDIO_TRACK_LOADING,this.onAudioTrackLoading,this),e.on(v.SUBTITLE_TRACK_LOADING,this.onSubtitleTrackLoading,this)}unregisterListeners(){const{hls:e}=this;e.off(v.MANIFEST_LOADING,this.onManifestLoading,this),e.off(v.LEVEL_LOADING,this.onLevelLoading,this),e.off(v.AUDIO_TRACK_LOADING,this.onAudioTrackLoading,this),e.off(v.SUBTITLE_TRACK_LOADING,this.onSubtitleTrackLoading,this)}createInternalLoader(e){const t=this.hls.config,n=t.pLoader,i=t.loader,r=n||i,s=new r(t);return this.loaders[e.type]=s,s}getInternalLoader(e){return this.loaders[e.type]}resetInternalLoader(e){this.loaders[e]&&delete this.loaders[e]}destroyInternalLoaders(){for(const e in this.loaders){const t=this.loaders[e];t&&t.destroy(),this.resetInternalLoader(e)}}destroy(){this.variableList=null,this.unregisterListeners(),this.destroyInternalLoaders()}onManifestLoading(e,t){const{url:n}=t;this.variableList=null,this.load({id:null,level:0,responseType:"text",type:he.MANIFEST,url:n,deliveryDirectives:null})}onLevelLoading(e,t){const{id:n,level:i,pathwayId:r,url:s,deliveryDirectives:o}=t;this.load({id:n,level:i,pathwayId:r,responseType:"text",type:he.LEVEL,url:s,deliveryDirectives:o})}onAudioTrackLoading(e,t){const{id:n,groupId:i,url:r,deliveryDirectives:s}=t;this.load({id:n,groupId:i,level:null,responseType:"text",type:he.AUDIO_TRACK,url:r,deliveryDirectives:s})}onSubtitleTrackLoading(e,t){const{id:n,groupId:i,url:r,deliveryDirectives:s}=t;this.load({id:n,groupId:i,level:null,responseType:"text",type:he.SUBTITLE_TRACK,url:r,deliveryDirectives:s})}load(e){var t;const n=this.hls.config;let i=this.getInternalLoader(e);if(i){const d=i.context;if(d&&d.url===e.url&&d.level===e.level){D.trace("[playlist-loader]: playlist request ongoing");return}D.log(`[playlist-loader]: aborting previous loader for type: ${e.type}`),i.abort()}let r;if(e.type===he.MANIFEST?r=n.manifestLoadPolicy.default:r=we({},n.playlistLoadPolicy.default,{timeoutRetry:null,errorRetry:null}),i=this.createInternalLoader(e),X((t=e.deliveryDirectives)==null?void 0:t.part)){let d;if(e.type===he.LEVEL&&e.level!==null?d=this.hls.levels[e.level].details:e.type===he.AUDIO_TRACK&&e.id!==null?d=this.hls.audioTracks[e.id].details:e.type===he.SUBTITLE_TRACK&&e.id!==null&&(d=this.hls.subtitleTracks[e.id].details),d){const c=d.partTarget,h=d.targetduration;if(c&&h){const u=Math.max(c*3,h*.8)*1e3;r=we({},r,{maxTimeToFirstByteMs:Math.min(u,r.maxTimeToFirstByteMs),maxLoadTimeMs:Math.min(u,r.maxTimeToFirstByteMs)})}}}const s=r.errorRetry||r.timeoutRetry||{},o={loadPolicy:r,timeout:r.maxLoadTimeMs,maxRetry:s.maxNumRetry||0,retryDelay:s.retryDelayMs||0,maxRetryDelay:s.maxRetryDelayMs||0},l={onSuccess:(d,c,h,u)=>{const m=this.getInternalLoader(h);this.resetInternalLoader(h.type);const A=d.data;if(A.indexOf("#EXTM3U")!==0){this.handleManifestParsingError(d,h,new Error("no EXTM3U delimiter"),u||null,c);return}c.parsing.start=performance.now(),nt.isMediaPlaylist(A)?this.handleTrackOrLevelPlaylist(d,c,h,u||null,m):this.handleMasterPlaylist(d,c,h,u)},onError:(d,c,h,u)=>{this.handleNetworkError(c,h,!1,d,u)},onTimeout:(d,c,h)=>{this.handleNetworkError(c,h,!0,void 0,d)}};i.load(e,o,l)}handleMasterPlaylist(e,t,n,i){const r=this.hls,s=e.data,o=gi(e,n),l=nt.parseMasterPlaylist(s,o);if(l.playlistParsingError){this.handleManifestParsingError(e,n,l.playlistParsingError,i,t);return}const{contentSteering:d,levels:c,sessionData:h,sessionKeys:u,startTimeOffset:m,variableList:A}=l;this.variableList=A;const{AUDIO:f=[],SUBTITLES:g,"CLOSED-CAPTIONS":C}=nt.parseMasterPlaylistMedia(s,o,l);f.length&&!f.some(S=>!S.url)&&c[0].audioCodec&&!c[0].attrs.AUDIO&&(D.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"),f.unshift({type:"main",name:"main",groupId:"main",default:!1,autoselect:!1,forced:!1,id:-1,attrs:new ke({}),bitrate:0,url:""})),r.trigger(v.MANIFEST_LOADED,{levels:c,audioTracks:f,subtitles:g,captions:C,contentSteering:d,url:o,stats:t,networkDetails:i,sessionData:h,sessionKeys:u,startTimeOffset:m,variableList:A})}handleTrackOrLevelPlaylist(e,t,n,i,r){const s=this.hls,{id:o,level:l,type:d}=n,c=gi(e,n),h=0,u=X(l)?l:X(o)?o:0,m=Vr(n),A=nt.parseLevelPlaylist(e.data,c,u,m,h,this.variableList);if(d===he.MANIFEST){const f={attrs:new ke({}),bitrate:0,details:A,name:"",url:c};s.trigger(v.MANIFEST_LOADED,{levels:[f],audioTracks:[],url:c,stats:t,networkDetails:i,sessionData:null,sessionKeys:null,contentSteering:null,startTimeOffset:null,variableList:null})}t.parsing.end=performance.now(),n.levelDetails=A,this.handlePlaylistLoaded(A,e,t,n,i,r)}handleManifestParsingError(e,t,n,i,r){this.hls.trigger(v.ERROR,{type:ie.NETWORK_ERROR,details:O.MANIFEST_PARSING_ERROR,fatal:t.type===he.MANIFEST,url:e.url,err:n,error:n,reason:n.message,response:e,context:t,networkDetails:i,stats:r})}handleNetworkError(e,t,n=!1,i,r){let s=`A network ${n?"timeout":"error"+(i?" (status "+i.code+")":"")} occurred while loading ${e.type}`;e.type===he.LEVEL?s+=`: ${e.level} id: ${e.id}`:(e.type===he.AUDIO_TRACK||e.type===he.SUBTITLE_TRACK)&&(s+=` id: ${e.id} group-id: "${e.groupId}"`);const o=new Error(s);D.warn(`[playlist-loader]: ${s}`);let l=O.UNKNOWN,d=!1;const c=this.getInternalLoader(e);switch(e.type){case he.MANIFEST:l=n?O.MANIFEST_LOAD_TIMEOUT:O.MANIFEST_LOAD_ERROR,d=!0;break;case he.LEVEL:l=n?O.LEVEL_LOAD_TIMEOUT:O.LEVEL_LOAD_ERROR,d=!1;break;case he.AUDIO_TRACK:l=n?O.AUDIO_TRACK_LOAD_TIMEOUT:O.AUDIO_TRACK_LOAD_ERROR,d=!1;break;case he.SUBTITLE_TRACK:l=n?O.SUBTITLE_TRACK_LOAD_TIMEOUT:O.SUBTITLE_LOAD_ERROR,d=!1;break}c&&this.resetInternalLoader(e.type);const h={type:ie.NETWORK_ERROR,details:l,fatal:d,url:e.url,loader:c,context:e,error:o,networkDetails:t,stats:r};if(i){const u=(t==null?void 0:t.url)||e.url;h.response=_e({url:u,data:void 0},i)}this.hls.trigger(v.ERROR,h)}handlePlaylistLoaded(e,t,n,i,r,s){const o=this.hls,{type:l,level:d,id:c,groupId:h,deliveryDirectives:u}=i,m=gi(t,i),A=Vr(i),f=typeof i.level=="number"&&A===ne.MAIN?d:void 0;if(!e.fragments.length){const C=new Error("No Segments found in Playlist");o.trigger(v.ERROR,{type:ie.NETWORK_ERROR,details:O.LEVEL_EMPTY_ERROR,fatal:!1,url:m,error:C,reason:C.message,response:t,context:i,level:f,parent:A,networkDetails:r,stats:n});return}e.targetduration||(e.playlistParsingError=new Error("Missing Target Duration"));const g=e.playlistParsingError;if(g){o.trigger(v.ERROR,{type:ie.NETWORK_ERROR,details:O.LEVEL_PARSING_ERROR,fatal:!1,url:m,error:g,reason:g.message,response:t,context:i,level:f,parent:A,networkDetails:r,stats:n});return}switch(e.live&&s&&(s.getCacheAge&&(e.ageHeader=s.getCacheAge()||0),(!s.getCacheAge||isNaN(e.ageHeader))&&(e.ageHeader=0)),l){case he.MANIFEST:case he.LEVEL:o.trigger(v.LEVEL_LOADED,{details:e,level:f||0,id:c||0,stats:n,networkDetails:r,deliveryDirectives:u});break;case he.AUDIO_TRACK:o.trigger(v.AUDIO_TRACK_LOADED,{details:e,id:c||0,groupId:h||"",stats:n,networkDetails:r,deliveryDirectives:u});break;case he.SUBTITLE_TRACK:o.trigger(v.SUBTITLE_TRACK_LOADED,{details:e,id:c||0,groupId:h||"",stats:n,networkDetails:r,deliveryDirectives:u});break}}}function ta(a,e){let t;try{t=new Event("addtrack")}catch{t=document.createEvent("Event"),t.initEvent("addtrack",!1,!1)}t.track=a,e.dispatchEvent(t)}function na(a,e){const t=a.mode;if(t==="disabled"&&(a.mode="hidden"),a.cues&&!a.cues.getCueById(e.id))try{if(a.addCue(e),!a.cues.getCueById(e.id))throw new Error(`addCue is failed for: ${e}`)}catch(n){D.debug(`[texttrack-utils]: ${n}`);try{const i=new self.TextTrackCue(e.startTime,e.endTime,e.text);i.id=e.id,a.addCue(i)}catch(i){D.debug(`[texttrack-utils]: Legacy TextTrackCue fallback failed: ${i}`)}}t==="disabled"&&(a.mode=t)}function $t(a){const e=a.mode;if(e==="disabled"&&(a.mode="hidden"),a.cues)for(let t=a.cues.length;t--;)a.removeCue(a.cues[t]);e==="disabled"&&(a.mode=e)}function Pi(a,e,t,n){const i=a.mode;if(i==="disabled"&&(a.mode="hidden"),a.cues&&a.cues.length>0){const r=Zd(a.cues,e,t);for(let s=0;s<r.length;s++)(!n||n(r[s]))&&a.removeCue(r[s])}i==="disabled"&&(a.mode=i)}function Xd(a,e){if(e<a[0].startTime)return 0;const t=a.length-1;if(e>a[t].endTime)return-1;let n=0,i=t;for(;n<=i;){const r=Math.floor((i+n)/2);if(e<a[r].startTime)i=r-1;else if(e>a[r].startTime&&n<t)n=r+1;else return r}return a[n].startTime-e<e-a[i].startTime?n:i}function Zd(a,e,t){const n=[],i=Xd(a,e);if(i>-1)for(let r=i,s=a.length;r<s;r++){const o=a[r];if(o.startTime>=e&&o.endTime<=t)n.push(o);else if(o.startTime>t)return n}return n}function Sn(a){const e=[];for(let t=0;t<a.length;t++){const n=a[t];(n.kind==="subtitles"||n.kind==="captions")&&n.label&&e.push(a[t])}return e}var je={audioId3:"org.id3",dateRange:"com.apple.quicktime.HLS",emsg:"https://aomedia.org/emsg/ID3"};const Jd=.25;function Oi(){if(!(typeof self>"u"))return self.VTTCue||self.TextTrackCue}function Wr(a,e,t,n,i){let r=new a(e,t,"");try{r.value=n,i&&(r.type=i)}catch{r=new a(e,t,JSON.stringify(i?_e({type:i},n):n))}return r}const An=(()=>{const a=Oi();try{a&&new a(0,Number.POSITIVE_INFINITY,"")}catch{return Number.MAX_VALUE}return Number.POSITIVE_INFINITY})();function yi(a,e){return a.getTime()/1e3-e}function ec(a){return Uint8Array.from(a.replace(/^0x/,"").replace(/([\da-fA-F]{2}) ?/g,"0x$1 ").replace(/ +$/,"").split(" ")).buffer}class tc{constructor(e){this.hls=void 0,this.id3Track=null,this.media=null,this.dateRangeCuesAppended={},this.hls=e,this._registerListeners()}destroy(){this._unregisterListeners(),this.id3Track=null,this.media=null,this.dateRangeCuesAppended={},this.hls=null}_registerListeners(){const{hls:e}=this;e.on(v.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(v.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(v.MANIFEST_LOADING,this.onManifestLoading,this),e.on(v.FRAG_PARSING_METADATA,this.onFragParsingMetadata,this),e.on(v.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(v.LEVEL_UPDATED,this.onLevelUpdated,this)}_unregisterListeners(){const{hls:e}=this;e.off(v.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(v.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(v.MANIFEST_LOADING,this.onManifestLoading,this),e.off(v.FRAG_PARSING_METADATA,this.onFragParsingMetadata,this),e.off(v.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(v.LEVEL_UPDATED,this.onLevelUpdated,this)}onMediaAttached(e,t){this.media=t.media}onMediaDetaching(){this.id3Track&&($t(this.id3Track),this.id3Track=null,this.media=null,this.dateRangeCuesAppended={})}onManifestLoading(){this.dateRangeCuesAppended={}}createTrack(e){const t=this.getID3Track(e.textTracks);return t.mode="hidden",t}getID3Track(e){if(this.media){for(let t=0;t<e.length;t++){const n=e[t];if(n.kind==="metadata"&&n.label==="id3")return ta(n,this.media),n}return this.media.addTextTrack("metadata","id3")}}onFragParsingMetadata(e,t){if(!this.media)return;const{hls:{config:{enableEmsgMetadataCues:n,enableID3MetadataCues:i}}}=this;if(!n&&!i)return;const{samples:r}=t;this.id3Track||(this.id3Track=this.createTrack(this.media));const s=Oi();if(s)for(let o=0;o<r.length;o++){const l=r[o].type;if(l===je.emsg&&!n||!i)continue;const d=zs(r[o].data);if(d){const c=r[o].pts;let h=c+r[o].duration;h>An&&(h=An),h-c<=0&&(h=c+Jd);for(let m=0;m<d.length;m++){const A=d[m];if(!qs(A)){this.updateId3CueEnds(c,l);const f=Wr(s,c,h,A,l);f&&this.id3Track.addCue(f)}}}}}updateId3CueEnds(e,t){var n;const i=(n=this.id3Track)==null?void 0:n.cues;if(i)for(let r=i.length;r--;){const s=i[r];s.type===t&&s.startTime<e&&s.endTime===An&&(s.endTime=e)}}onBufferFlushing(e,{startOffset:t,endOffset:n,type:i}){const{id3Track:r,hls:s}=this;if(!s)return;const{config:{enableEmsgMetadataCues:o,enableID3MetadataCues:l}}=s;if(r&&(o||l)){let d;i==="audio"?d=c=>c.type===je.audioId3&&l:i==="video"?d=c=>c.type===je.emsg&&o:d=c=>c.type===je.audioId3&&l||c.type===je.emsg&&o,Pi(r,t,n,d)}}onLevelUpdated(e,{details:t}){if(!this.media||!t.hasProgramDateTime||!this.hls.config.enableDateRangeMetadataCues)return;const{dateRangeCuesAppended:n,id3Track:i}=this,{dateRanges:r}=t,s=Object.keys(r);if(i){const c=Object.keys(n).filter(h=>!s.includes(h));for(let h=c.length;h--;){const u=c[h];Object.keys(n[u].cues).forEach(m=>{i.removeCue(n[u].cues[m])}),delete n[u]}}const o=t.fragments[t.fragments.length-1];if(s.length===0||!X(o==null?void 0:o.programDateTime))return;this.id3Track||(this.id3Track=this.createTrack(this.media));const l=o.programDateTime/1e3-o.start,d=Oi();for(let c=0;c<s.length;c++){const h=s[c],u=r[h],m=yi(u.startDate,l),A=n[h],f=(A==null?void 0:A.cues)||{};let g=(A==null?void 0:A.durationKnown)||!1,C=An;const T=u.endDate;if(T)C=yi(T,l),g=!0;else if(u.endOnNext&&!g){const k=s.reduce((I,P)=>{if(P!==u.id){const _=r[P];if(_.class===u.class&&_.startDate>u.startDate&&(!I||u.startDate<I.startDate))return _}return I},null);k&&(C=yi(k.startDate,l),g=!0)}const S=Object.keys(u.attr);for(let k=0;k<S.length;k++){const I=S[k];if(!rd(I))continue;const P=f[I];if(P)g&&!A.durationKnown&&(P.endTime=C);else if(d){let _=u.attr[I];sd(I)&&(_=ec(_));const N=Wr(d,m,C,{key:I,data:_},je.dateRange);N&&(N.id=h,this.id3Track.addCue(N),f[I]=N)}}n[h]={cues:f,dateRange:u,durationKnown:g}}}}class nc{constructor(e){this.hls=void 0,this.config=void 0,this.media=null,this.levelDetails=null,this.currentTime=0,this.stallCount=0,this._latency=null,this.timeupdateHandler=()=>this.timeupdate(),this.hls=e,this.config=e.config,this.registerListeners()}get latency(){return this._latency||0}get maxLatency(){const{config:e,levelDetails:t}=this;return e.liveMaxLatencyDuration!==void 0?e.liveMaxLatencyDuration:t?e.liveMaxLatencyDurationCount*t.targetduration:0}get targetLatency(){const{levelDetails:e}=this;if(e===null)return null;const{holdBack:t,partHoldBack:n,targetduration:i}=e,{liveSyncDuration:r,liveSyncDurationCount:s,lowLatencyMode:o}=this.config,l=this.hls.userConfig;let d=o&&n||t;(l.liveSyncDuration||l.liveSyncDurationCount||d===0)&&(d=r!==void 0?r:s*i);const c=i,h=1;return d+Math.min(this.stallCount*h,c)}get liveSyncPosition(){const e=this.estimateLiveEdge(),t=this.targetLatency,n=this.levelDetails;if(e===null||t===null||n===null)return null;const i=n.edge,r=e-t-this.edgeStalled,s=i-n.totalduration,o=i-(this.config.lowLatencyMode&&n.partTarget||n.targetduration);return Math.min(Math.max(s,r),o)}get drift(){const{levelDetails:e}=this;return e===null?1:e.drift}get edgeStalled(){const{levelDetails:e}=this;if(e===null)return 0;const t=(this.config.lowLatencyMode&&e.partTarget||e.targetduration)*3;return Math.max(e.age-t,0)}get forwardBufferLength(){const{media:e,levelDetails:t}=this;if(!e||!t)return 0;const n=e.buffered.length;return(n?e.buffered.end(n-1):t.edge)-this.currentTime}destroy(){this.unregisterListeners(),this.onMediaDetaching(),this.levelDetails=null,this.hls=this.timeupdateHandler=null}registerListeners(){this.hls.on(v.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.on(v.MEDIA_DETACHING,this.onMediaDetaching,this),this.hls.on(v.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.on(v.LEVEL_UPDATED,this.onLevelUpdated,this),this.hls.on(v.ERROR,this.onError,this)}unregisterListeners(){this.hls.off(v.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.off(v.MEDIA_DETACHING,this.onMediaDetaching,this),this.hls.off(v.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.off(v.LEVEL_UPDATED,this.onLevelUpdated,this),this.hls.off(v.ERROR,this.onError,this)}onMediaAttached(e,t){this.media=t.media,this.media.addEventListener("timeupdate",this.timeupdateHandler)}onMediaDetaching(){this.media&&(this.media.removeEventListener("timeupdate",this.timeupdateHandler),this.media=null)}onManifestLoading(){this.levelDetails=null,this._latency=null,this.stallCount=0}onLevelUpdated(e,{details:t}){this.levelDetails=t,t.advanced&&this.timeupdate(),!t.live&&this.media&&this.media.removeEventListener("timeupdate",this.timeupdateHandler)}onError(e,t){var n;t.details===O.BUFFER_STALLED_ERROR&&(this.stallCount++,(n=this.levelDetails)!=null&&n.live&&D.warn("[playback-rate-controller]: Stall detected, adjusting target latency"))}timeupdate(){const{media:e,levelDetails:t}=this;if(!e||!t)return;this.currentTime=e.currentTime;const n=this.computeLatency();if(n===null)return;this._latency=n;const{lowLatencyMode:i,maxLiveSyncPlaybackRate:r}=this.config;if(!i||r===1||!t.live)return;const s=this.targetLatency;if(s===null)return;const o=n-s,l=Math.min(this.maxLatency,s+t.targetduration);if(o<l&&o>.05&&this.forwardBufferLength>1){const c=Math.min(2,Math.max(1,r)),h=Math.round(2/(1+Math.exp(-.75*o-this.edgeStalled))*20)/20;e.playbackRate=Math.min(c,Math.max(1,h))}else e.playbackRate!==1&&e.playbackRate!==0&&(e.playbackRate=1)}estimateLiveEdge(){const{levelDetails:e}=this;return e===null?null:e.edge+e.age}computeLatency(){const e=this.estimateLiveEdge();return e===null?null:e-this.currentTime}}const Fi=["NONE","TYPE-0","TYPE-1",null];function ic(a){return Fi.indexOf(a)>-1}const Mn=["SDR","PQ","HLG"];function rc(a){return!!a&&Mn.indexOf(a)>-1}var kn={No:"",Yes:"YES",v2:"v2"};function jr(a){const{canSkipUntil:e,canSkipDateRanges:t,age:n}=a,i=n<e/2;return e&&i?t?kn.v2:kn.Yes:kn.No}class Qr{constructor(e,t,n){this.msn=void 0,this.part=void 0,this.skip=void 0,this.msn=e,this.part=t,this.skip=n}addDirectives(e){const t=new self.URL(e);return this.msn!==void 0&&t.searchParams.set("_HLS_msn",this.msn.toString()),this.part!==void 0&&t.searchParams.set("_HLS_part",this.part.toString()),this.skip&&t.searchParams.set("_HLS_skip",this.skip),t.href}}class qt{constructor(e){this._attrs=void 0,this.audioCodec=void 0,this.bitrate=void 0,this.codecSet=void 0,this.url=void 0,this.frameRate=void 0,this.height=void 0,this.id=void 0,this.name=void 0,this.videoCodec=void 0,this.width=void 0,this.details=void 0,this.fragmentError=0,this.loadError=0,this.loaded=void 0,this.realBitrate=0,this.supportedPromise=void 0,this.supportedResult=void 0,this._avgBitrate=0,this._audioGroups=void 0,this._subtitleGroups=void 0,this._urlId=0,this.url=[e.url],this._attrs=[e.attrs],this.bitrate=e.bitrate,e.details&&(this.details=e.details),this.id=e.id||0,this.name=e.name,this.width=e.width||0,this.height=e.height||0,this.frameRate=e.attrs.optionalFloat("FRAME-RATE",0),this._avgBitrate=e.attrs.decimalInteger("AVERAGE-BANDWIDTH"),this.audioCodec=e.audioCodec,this.videoCodec=e.videoCodec,this.codecSet=[e.videoCodec,e.audioCodec].filter(t=>!!t).map(t=>t.substring(0,4)).join(","),this.addGroupId("audio",e.attrs.AUDIO),this.addGroupId("text",e.attrs.SUBTITLES)}get maxBitrate(){return Math.max(this.realBitrate,this.bitrate)}get averageBitrate(){return this._avgBitrate||this.realBitrate||this.bitrate}get attrs(){return this._attrs[0]}get codecs(){return this.attrs.CODECS||""}get pathwayId(){return this.attrs["PATHWAY-ID"]||"."}get videoRange(){return this.attrs["VIDEO-RANGE"]||"SDR"}get score(){return this.attrs.optionalFloat("SCORE",0)}get uri(){return this.url[0]||""}hasAudioGroup(e){return Xr(this._audioGroups,e)}hasSubtitleGroup(e){return Xr(this._subtitleGroups,e)}get audioGroups(){return this._audioGroups}get subtitleGroups(){return this._subtitleGroups}addGroupId(e,t){if(t){if(e==="audio"){let n=this._audioGroups;n||(n=this._audioGroups=[]),n.indexOf(t)===-1&&n.push(t)}else if(e==="text"){let n=this._subtitleGroups;n||(n=this._subtitleGroups=[]),n.indexOf(t)===-1&&n.push(t)}}}get urlId(){return 0}set urlId(e){}get audioGroupIds(){return this.audioGroups?[this.audioGroupId]:void 0}get textGroupIds(){return this.subtitleGroups?[this.textGroupId]:void 0}get audioGroupId(){var e;return(e=this.audioGroups)==null?void 0:e[0]}get textGroupId(){var e;return(e=this.subtitleGroups)==null?void 0:e[0]}addFallback(){}}function Xr(a,e){return!e||!a?!1:a.indexOf(e)!==-1}function bi(a,e){const t=e.startPTS;if(X(t)){let n=0,i;e.sn>a.sn?(n=t-a.start,i=a):(n=a.start-t,i=e),i.duration!==n&&(i.duration=n)}else e.sn>a.sn?a.cc===e.cc&&a.minEndPTS?e.start=a.start+(a.minEndPTS-a.start):e.start=a.start+a.duration:e.start=Math.max(a.start-e.duration,0)}function ia(a,e,t,n,i,r){n-t<=0&&(D.warn("Fragment should have a positive duration",e),n=t+e.duration,r=i+e.duration);let o=t,l=n;const d=e.startPTS,c=e.endPTS;if(X(d)){const g=Math.abs(d-t);X(e.deltaPTS)?e.deltaPTS=Math.max(g,e.deltaPTS):e.deltaPTS=g,o=Math.max(t,d),t=Math.min(t,d),i=Math.min(i,e.startDTS),l=Math.min(n,c),n=Math.max(n,c),r=Math.max(r,e.endDTS)}const h=t-e.start;e.start!==0&&(e.start=t),e.duration=n-e.start,e.startPTS=t,e.maxStartPTS=o,e.startDTS=i,e.endPTS=n,e.minEndPTS=l,e.endDTS=r;const u=e.sn;if(!a||u<a.startSN||u>a.endSN)return 0;let m;const A=u-a.startSN,f=a.fragments;for(f[A]=e,m=A;m>0;m--)bi(f[m],f[m-1]);for(m=A;m<f.length-1;m++)bi(f[m],f[m+1]);return a.fragmentHint&&bi(f[f.length-1],a.fragmentHint),a.PTSKnown=a.alignedSliding=!0,h}function sc(a,e){let t=null;const n=a.fragments;for(let o=n.length-1;o>=0;o--){const l=n[o].initSegment;if(l){t=l;break}}a.fragmentHint&&delete a.fragmentHint.endPTS;let i;lc(a,e,(o,l,d,c)=>{if(e.skippedSegments&&l.cc!==o.cc){const h=o.cc-l.cc;for(let u=d;u<c.length;u++)c[u].cc+=h}X(o.startPTS)&&X(o.endPTS)&&(l.start=l.startPTS=o.startPTS,l.startDTS=o.startDTS,l.maxStartPTS=o.maxStartPTS,l.endPTS=o.endPTS,l.endDTS=o.endDTS,l.minEndPTS=o.minEndPTS,l.duration=o.endPTS-o.startPTS,l.duration&&(i=l),e.PTSKnown=e.alignedSliding=!0),l.elementaryStreams=o.elementaryStreams,l.loader=o.loader,l.stats=o.stats,o.initSegment&&(l.initSegment=o.initSegment,t=o.initSegment)});const r=e.fragments;if(t&&(e.fragmentHint?r.concat(e.fragmentHint):r).forEach(l=>{var d;l&&(!l.initSegment||l.initSegment.relurl===((d=t)==null?void 0:d.relurl))&&(l.initSegment=t)}),e.skippedSegments){if(e.deltaUpdateFailed=r.some(o=>!o),e.deltaUpdateFailed){D.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");for(let o=e.skippedSegments;o--;)r.shift();e.startSN=r[0].sn}else e.canSkipDateRanges&&(e.dateRanges=ac(a.dateRanges,e.dateRanges,e.recentlyRemovedDateranges));e.startCC=e.fragments[0].cc,e.endCC=r[r.length-1].cc}oc(a.partList,e.partList,(o,l)=>{l.elementaryStreams=o.elementaryStreams,l.stats=o.stats}),i?ia(e,i,i.startPTS,i.endPTS,i.startDTS,i.endDTS):ra(a,e),r.length&&(e.totalduration=e.edge-r[0].start),e.driftStartTime=a.driftStartTime,e.driftStart=a.driftStart;const s=e.advancedDateTime;if(e.advanced&&s){const o=e.edge;e.driftStart||(e.driftStartTime=s,e.driftStart=o),e.driftEndTime=s,e.driftEnd=o}else e.driftEndTime=a.driftEndTime,e.driftEnd=a.driftEnd,e.advancedDateTime=a.advancedDateTime}function ac(a,e,t){const n=we({},a);return t&&t.forEach(i=>{delete n[i]}),Object.keys(e).forEach(i=>{const r=new Us(e[i].attr,n[i]);r.isValid?n[i]=r:D.warn(`Ignoring invalid Playlist Delta Update DATERANGE tag: "${JSON.stringify(e[i].attr)}"`)}),n}function oc(a,e,t){if(a&&e){let n=0;for(let i=0,r=a.length;i<=r;i++){const s=a[i],o=e[i+n];s&&o&&s.index===o.index&&s.fragment.sn===o.fragment.sn?t(s,o):n--}}}function lc(a,e,t){const n=e.skippedSegments,i=Math.max(a.startSN,e.startSN)-e.startSN,r=(a.fragmentHint?1:0)+(n?e.endSN:Math.min(a.endSN,e.endSN))-e.startSN,s=e.startSN-a.startSN,o=e.fragmentHint?e.fragments.concat(e.fragmentHint):e.fragments,l=a.fragmentHint?a.fragments.concat(a.fragmentHint):a.fragments;for(let d=i;d<=r;d++){const c=l[s+d];let h=o[d];n&&!h&&d<n&&(h=e.fragments[d]=c),c&&h&&t(c,h,d,o)}}function ra(a,e){const t=e.startSN+e.skippedSegments-a.startSN,n=a.fragments;t<0||t>=n.length||Mi(e,n[t].start)}function Mi(a,e){if(e){const t=a.fragments;for(let n=a.skippedSegments;n<t.length;n++)t[n].start+=e;a.fragmentHint&&(a.fragmentHint.start+=e)}}function dc(a,e=1/0){let t=1e3*a.targetduration;if(a.updated){const n=a.fragments,i=4;if(n.length&&t*i>e){const r=n[n.length-1].duration*1e3;r<t&&(t=r)}}else t/=2;return Math.round(t)}function cc(a,e,t){if(!(a!=null&&a.details))return null;const n=a.details;let i=n.fragments[e-n.startSN];return i||(i=n.fragmentHint,i&&i.sn===e)?i:e<n.startSN&&t&&t.sn===e?t:null}function Zr(a,e,t){var n;return a!=null&&a.details?sa((n=a.details)==null?void 0:n.partList,e,t):null}function sa(a,e,t){if(a)for(let n=a.length;n--;){const i=a[n];if(i.index===t&&i.fragment.sn===e)return i}return null}function aa(a){a.forEach((e,t)=>{const{details:n}=e;n!=null&&n.fragments&&n.fragments.forEach(i=>{i.level=t})})}function Nn(a){switch(a.details){case O.FRAG_LOAD_TIMEOUT:case O.KEY_LOAD_TIMEOUT:case O.LEVEL_LOAD_TIMEOUT:case O.MANIFEST_LOAD_TIMEOUT:return!0}return!1}function Jr(a,e){const t=Nn(e);return a.default[`${t?"timeout":"error"}Retry`]}function Xi(a,e){const t=a.backoff==="linear"?1:Math.pow(2,e);return Math.min(t*a.retryDelayMs,a.maxRetryDelayMs)}function es(a){return _e(_e({},a),{errorRetry:null,timeoutRetry:null})}function Un(a,e,t,n){if(!a)return!1;const i=n==null?void 0:n.code,r=e<a.maxNumRetry&&(uc(i)||!!t);return a.shouldRetry?a.shouldRetry(a,e,t,n,r):r}function uc(a){return a===0&&navigator.onLine===!1||!!a&&(a<400||a>499)}const oa={search:function(a,e){let t=0,n=a.length-1,i=null,r=null;for(;t<=n;){i=(t+n)/2|0,r=a[i];const s=e(r);if(s>0)t=i+1;else if(s<0)n=i-1;else return r}return null}};function hc(a,e,t){if(e===null||!Array.isArray(a)||!a.length||!X(e))return null;const n=a[0].programDateTime;if(e<(n||0))return null;const i=a[a.length-1].endProgramDateTime;if(e>=(i||0))return null;t=t||0;for(let r=0;r<a.length;++r){const s=a[r];if(fc(e,t,s))return s}return null}function $n(a,e,t=0,n=0,i=.005){let r=null;if(a){r=e[a.sn-e[0].sn+1]||null;const o=a.endDTS-t;o>0&&o<15e-7&&(t+=15e-7)}else t===0&&e[0].start===0&&(r=e[0]);if(r&&((!a||a.level===r.level)&&Ni(t,n,r)===0||pc(r,a,Math.min(i,n))))return r;const s=oa.search(e,Ni.bind(null,t,n));return s&&(s!==a||!r)?s:r}function pc(a,e,t){if(e&&e.start===0&&e.level<a.level&&(e.endPTS||0)>0){const n=e.tagList.reduce((i,r)=>(r[0]==="INF"&&(i+=parseFloat(r[1])),i),t);return a.start<=n}return!1}function Ni(a=0,e=0,t){if(t.start<=a&&t.start+t.duration>a)return 0;const n=Math.min(e,t.duration+(t.deltaPTS?t.deltaPTS:0));return t.start+t.duration-n<=a?1:t.start-n>a&&t.start?-1:0}function fc(a,e,t){const n=Math.min(e,t.duration+(t.deltaPTS?t.deltaPTS:0))*1e3;return(t.endProgramDateTime||0)-n>a}function mc(a,e){return oa.search(a,t=>t.cc<e?1:t.cc>e?-1:0)}var Be={DoNothing:0,SendEndCallback:1,SendAlternateToPenaltyBox:2,RemoveAlternatePermanently:3,InsertDiscontinuity:4,RetryRequest:5},Ve={None:0,MoveAllAlternatesMatchingHost:1,MoveAllAlternatesMatchingHDCP:2,SwitchToSDR:4};class Ac{constructor(e){this.hls=void 0,this.playlistError=0,this.penalizedRenditions={},this.log=void 0,this.warn=void 0,this.error=void 0,this.hls=e,this.log=D.log.bind(D,"[info]:"),this.warn=D.warn.bind(D,"[warning]:"),this.error=D.error.bind(D,"[error]:"),this.registerListeners()}registerListeners(){const e=this.hls;e.on(v.ERROR,this.onError,this),e.on(v.MANIFEST_LOADING,this.onManifestLoading,this),e.on(v.LEVEL_UPDATED,this.onLevelUpdated,this)}unregisterListeners(){const e=this.hls;e&&(e.off(v.ERROR,this.onError,this),e.off(v.ERROR,this.onErrorOut,this),e.off(v.MANIFEST_LOADING,this.onManifestLoading,this),e.off(v.LEVEL_UPDATED,this.onLevelUpdated,this))}destroy(){this.unregisterListeners(),this.hls=null,this.penalizedRenditions={}}startLoad(e){}stopLoad(){this.playlistError=0}getVariantLevelIndex(e){return(e==null?void 0:e.type)===ne.MAIN?e.level:this.hls.loadLevel}onManifestLoading(){this.playlistError=0,this.penalizedRenditions={}}onLevelUpdated(){this.playlistError=0}onError(e,t){var n,i;if(t.fatal)return;const r=this.hls,s=t.context;switch(t.details){case O.FRAG_LOAD_ERROR:case O.FRAG_LOAD_TIMEOUT:case O.KEY_LOAD_ERROR:case O.KEY_LOAD_TIMEOUT:t.errorAction=this.getFragRetryOrSwitchAction(t);return;case O.FRAG_PARSING_ERROR:if((n=t.frag)!=null&&n.gap){t.errorAction={action:Be.DoNothing,flags:Ve.None};return}case O.FRAG_GAP:case O.FRAG_DECRYPT_ERROR:{t.errorAction=this.getFragRetryOrSwitchAction(t),t.errorAction.action=Be.SendAlternateToPenaltyBox;return}case O.LEVEL_EMPTY_ERROR:case O.LEVEL_PARSING_ERROR:{var o,l;const d=t.parent===ne.MAIN?t.level:r.loadLevel;t.details===O.LEVEL_EMPTY_ERROR&&((o=t.context)!=null&&(l=o.levelDetails)!=null&&l.live)?t.errorAction=this.getPlaylistRetryOrSwitchAction(t,d):(t.levelRetry=!1,t.errorAction=this.getLevelSwitchAction(t,d))}return;case O.LEVEL_LOAD_ERROR:case O.LEVEL_LOAD_TIMEOUT:typeof(s==null?void 0:s.level)=="number"&&(t.errorAction=this.getPlaylistRetryOrSwitchAction(t,s.level));return;case O.AUDIO_TRACK_LOAD_ERROR:case O.AUDIO_TRACK_LOAD_TIMEOUT:case O.SUBTITLE_LOAD_ERROR:case O.SUBTITLE_TRACK_LOAD_TIMEOUT:if(s){const d=r.levels[r.loadLevel];if(d&&(s.type===he.AUDIO_TRACK&&d.hasAudioGroup(s.groupId)||s.type===he.SUBTITLE_TRACK&&d.hasSubtitleGroup(s.groupId))){t.errorAction=this.getPlaylistRetryOrSwitchAction(t,r.loadLevel),t.errorAction.action=Be.SendAlternateToPenaltyBox,t.errorAction.flags=Ve.MoveAllAlternatesMatchingHost;return}}return;case O.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:{const d=r.levels[r.loadLevel],c=d==null?void 0:d.attrs["HDCP-LEVEL"];c?t.errorAction={action:Be.SendAlternateToPenaltyBox,flags:Ve.MoveAllAlternatesMatchingHDCP,hdcpLevel:c}:this.keySystemError(t)}return;case O.BUFFER_ADD_CODEC_ERROR:case O.REMUX_ALLOC_ERROR:case O.BUFFER_APPEND_ERROR:t.errorAction=this.getLevelSwitchAction(t,(i=t.level)!=null?i:r.loadLevel);return;case O.INTERNAL_EXCEPTION:case O.BUFFER_APPENDING_ERROR:case O.BUFFER_FULL_ERROR:case O.LEVEL_SWITCH_ERROR:case O.BUFFER_STALLED_ERROR:case O.BUFFER_SEEK_OVER_HOLE:case O.BUFFER_NUDGE_ON_STALL:t.errorAction={action:Be.DoNothing,flags:Ve.None};return}t.type===ie.KEY_SYSTEM_ERROR&&this.keySystemError(t)}keySystemError(e){const t=this.getVariantLevelIndex(e.frag);e.levelRetry=!1,e.errorAction=this.getLevelSwitchAction(e,t)}getPlaylistRetryOrSwitchAction(e,t){const n=this.hls,i=Jr(n.config.playlistLoadPolicy,e),r=this.playlistError++;if(Un(i,r,Nn(e),e.response))return{action:Be.RetryRequest,flags:Ve.None,retryConfig:i,retryCount:r};const o=this.getLevelSwitchAction(e,t);return i&&(o.retryConfig=i,o.retryCount=r),o}getFragRetryOrSwitchAction(e){const t=this.hls,n=this.getVariantLevelIndex(e.frag),i=t.levels[n],{fragLoadPolicy:r,keyLoadPolicy:s}=t.config,o=Jr(e.details.startsWith("key")?s:r,e),l=t.levels.reduce((c,h)=>c+h.fragmentError,0);if(i&&(e.details!==O.FRAG_GAP&&i.fragmentError++,Un(o,l,Nn(e),e.response)))return{action:Be.RetryRequest,flags:Ve.None,retryConfig:o,retryCount:l};const d=this.getLevelSwitchAction(e,n);return o&&(d.retryConfig=o,d.retryCount=l),d}getLevelSwitchAction(e,t){const n=this.hls;t==null&&(t=n.loadLevel);const i=this.hls.levels[t];if(i){var r,s;const d=e.details;i.loadError++,d===O.BUFFER_APPEND_ERROR&&i.fragmentError++;let c=-1;const{levels:h,loadLevel:u,minAutoLevel:m,maxAutoLevel:A}=n;n.autoLevelEnabled||(n.loadLevel=-1);const f=(r=e.frag)==null?void 0:r.type,C=(f===ne.AUDIO&&d===O.FRAG_PARSING_ERROR||e.sourceBufferName==="audio"&&(d===O.BUFFER_ADD_CODEC_ERROR||d===O.BUFFER_APPEND_ERROR))&&h.some(({audioCodec:P})=>i.audioCodec!==P),S=e.sourceBufferName==="video"&&(d===O.BUFFER_ADD_CODEC_ERROR||d===O.BUFFER_APPEND_ERROR)&&h.some(({codecSet:P,audioCodec:_})=>i.codecSet!==P&&i.audioCodec===_),{type:k,groupId:I}=(s=e.context)!=null?s:{};for(let P=h.length;P--;){const _=(P+u)%h.length;if(_!==u&&_>=m&&_<=A&&h[_].loadError===0){var o,l;const N=h[_];if(d===O.FRAG_GAP&&f===ne.MAIN&&e.frag){const U=h[_].details;if(U){const F=$n(e.frag,U.fragments,e.frag.start);if(F!=null&&F.gap)continue}}else{if(k===he.AUDIO_TRACK&&N.hasAudioGroup(I)||k===he.SUBTITLE_TRACK&&N.hasSubtitleGroup(I))continue;if(f===ne.AUDIO&&(o=i.audioGroups)!=null&&o.some(U=>N.hasAudioGroup(U))||f===ne.SUBTITLE&&(l=i.subtitleGroups)!=null&&l.some(U=>N.hasSubtitleGroup(U))||C&&i.audioCodec===N.audioCodec||!C&&i.audioCodec!==N.audioCodec||S&&i.codecSet===N.codecSet)continue}c=_;break}}if(c>-1&&n.loadLevel!==c)return e.levelRetry=!0,this.playlistError=0,{action:Be.SendAlternateToPenaltyBox,flags:Ve.None,nextAutoLevel:c}}return{action:Be.SendAlternateToPenaltyBox,flags:Ve.MoveAllAlternatesMatchingHost}}onErrorOut(e,t){var n;switch((n=t.errorAction)==null?void 0:n.action){case Be.DoNothing:break;case Be.SendAlternateToPenaltyBox:this.sendAlternateToPenaltyBox(t),!t.errorAction.resolved&&t.details!==O.FRAG_GAP?t.fatal=!0:/MediaSource readyState: ended/.test(t.error.message)&&(this.warn(`MediaSource ended after "${t.sourceBufferName}" sourceBuffer append error. Attempting to recover from media error.`),this.hls.recoverMediaError());break}if(t.fatal){this.hls.stopLoad();return}}sendAlternateToPenaltyBox(e){const t=this.hls,n=e.errorAction;if(!n)return;const{flags:i,hdcpLevel:r,nextAutoLevel:s}=n;switch(i){case Ve.None:this.switchLevel(e,s);break;case Ve.MoveAllAlternatesMatchingHDCP:r&&(t.maxHdcpLevel=Fi[Fi.indexOf(r)-1],n.resolved=!0),this.warn(`Restricting playback to HDCP-LEVEL of "${t.maxHdcpLevel}" or lower`);break}n.resolved||this.switchLevel(e,s)}switchLevel(e,t){t!==void 0&&e.errorAction&&(this.warn(`switching to level ${t} after ${e.details}`),this.hls.nextAutoLevel=t,e.errorAction.resolved=!0,this.hls.nextLoadLevel=this.hls.nextAutoLevel)}}class Zi{constructor(e,t){this.hls=void 0,this.timer=-1,this.requestScheduled=-1,this.canLoad=!1,this.log=void 0,this.warn=void 0,this.log=D.log.bind(D,`${t}:`),this.warn=D.warn.bind(D,`${t}:`),this.hls=e}destroy(){this.clearTimer(),this.hls=this.log=this.warn=null}clearTimer(){this.timer!==-1&&(self.clearTimeout(this.timer),this.timer=-1)}startLoad(){this.canLoad=!0,this.requestScheduled=-1,this.loadPlaylist()}stopLoad(){this.canLoad=!1,this.clearTimer()}switchParams(e,t,n){const i=t==null?void 0:t.renditionReports;if(i){let r=-1;for(let s=0;s<i.length;s++){const o=i[s];let l;try{l=new self.URL(o.URI,t.url).href}catch(d){D.warn(`Could not construct new URL for Rendition Report: ${d}`),l=o.URI||""}if(l===e){r=s;break}else l===e.substring(0,l.length)&&(r=s)}if(r!==-1){const s=i[r],o=parseInt(s["LAST-MSN"])||(t==null?void 0:t.lastPartSn);let l=parseInt(s["LAST-PART"])||(t==null?void 0:t.lastPartIndex);if(this.hls.config.lowLatencyMode){const c=Math.min(t.age-t.partTarget,t.targetduration);l>=0&&c>t.partTarget&&(l+=1)}const d=n&&jr(n);return new Qr(o,l>=0?l:void 0,d)}}}loadPlaylist(e){this.requestScheduled===-1&&(this.requestScheduled=self.performance.now())}shouldLoadPlaylist(e){return this.canLoad&&!!e&&!!e.url&&(!e.details||e.details.live)}shouldReloadPlaylist(e){return this.timer===-1&&this.requestScheduled===-1&&this.shouldLoadPlaylist(e)}playlistLoaded(e,t,n){const{details:i,stats:r}=t,s=self.performance.now(),o=r.loading.first?Math.max(0,s-r.loading.first):0;if(i.advancedDateTime=Date.now()-o,i.live||n!=null&&n.live){if(i.reloaded(n),n&&this.log(`live playlist ${e} ${i.advanced?"REFRESHED "+i.lastPartSn+"-"+i.lastPartIndex:i.updated?"UPDATED":"MISSED"}`),n&&i.fragments.length>0&&sc(n,i),!this.canLoad||!i.live)return;let l,d,c;if(i.canBlockReload&&i.endSN&&i.advanced){const g=this.hls.config.lowLatencyMode,C=i.lastPartSn,T=i.endSN,S=i.lastPartIndex,k=S!==-1,I=C===T,P=g?0:S;k?(d=I?T+1:C,c=I?P:S+1):d=T+1;const _=i.age,N=_+i.ageHeader;let U=Math.min(N-i.partTarget,i.targetduration*1.5);if(U>0){if(n&&U>n.tuneInGoal)this.warn(`CDN Tune-in goal increased from: ${n.tuneInGoal} to: ${U} with playlist age: ${i.age}`),U=0;else{const F=Math.floor(U/i.targetduration);if(d+=F,c!==void 0){const $=Math.round(U%i.targetduration/i.partTarget);c+=$}this.log(`CDN Tune-in age: ${i.ageHeader}s last advanced ${_.toFixed(2)}s goal: ${U} skip sn ${F} to part ${c}`)}i.tuneInGoal=U}if(l=this.getDeliveryDirectives(i,t.deliveryDirectives,d,c),g||!I){this.loadPlaylist(l);return}}else(i.canBlockReload||i.canSkipUntil)&&(l=this.getDeliveryDirectives(i,t.deliveryDirectives,d,c));const h=this.hls.mainForwardBufferInfo,u=h?h.end-h.len:0,m=(i.edge-u)*1e3,A=dc(i,m);i.updated&&s>this.requestScheduled+A&&(this.requestScheduled=r.loading.start),d!==void 0&&i.canBlockReload?this.requestScheduled=r.loading.first+A-(i.partTarget*1e3||1e3):this.requestScheduled===-1||this.requestScheduled+A<s?this.requestScheduled=s:this.requestScheduled-s<=0&&(this.requestScheduled+=A);let f=this.requestScheduled-s;f=Math.max(0,f),this.log(`reload live playlist ${e} in ${Math.round(f)} ms`),this.timer=self.setTimeout(()=>this.loadPlaylist(l),f)}else this.clearTimer()}getDeliveryDirectives(e,t,n,i){let r=jr(e);return t!=null&&t.skip&&e.deltaUpdateFailed&&(n=t.msn,i=t.part,r=kn.No),new Qr(n,i,r)}checkRetry(e){const t=e.details,n=Nn(e),i=e.errorAction,{action:r,retryCount:s=0,retryConfig:o}=i||{},l=!!i&&!!o&&(r===Be.RetryRequest||!i.resolved&&r===Be.SendAlternateToPenaltyBox);if(l){var d;if(this.requestScheduled=-1,s>=o.maxNumRetry)return!1;if(n&&(d=e.context)!=null&&d.deliveryDirectives)this.warn(`Retrying playlist loading ${s+1}/${o.maxNumRetry} after "${t}" without delivery-directives`),this.loadPlaylist();else{const c=Xi(o,s);this.timer=self.setTimeout(()=>this.loadPlaylist(),c),this.warn(`Retrying playlist loading ${s+1}/${o.maxNumRetry} after "${t}" in ${c}ms`)}e.levelRetry=!0,i.resolved=!0}return l}}class Ot{constructor(e,t=0,n=0){this.halfLife=void 0,this.alpha_=void 0,this.estimate_=void 0,this.totalWeight_=void 0,this.halfLife=e,this.alpha_=e?Math.exp(Math.log(.5)/e):0,this.estimate_=t,this.totalWeight_=n}sample(e,t){const n=Math.pow(this.alpha_,e);this.estimate_=t*(1-n)+n*this.estimate_,this.totalWeight_+=e}getTotalWeight(){return this.totalWeight_}getEstimate(){if(this.alpha_){const e=1-Math.pow(this.alpha_,this.totalWeight_);if(e)return this.estimate_/e}return this.estimate_}}class gc{constructor(e,t,n,i=100){this.defaultEstimate_=void 0,this.minWeight_=void 0,this.minDelayMs_=void 0,this.slow_=void 0,this.fast_=void 0,this.defaultTTFB_=void 0,this.ttfb_=void 0,this.defaultEstimate_=n,this.minWeight_=.001,this.minDelayMs_=50,this.slow_=new Ot(e),this.fast_=new Ot(t),this.defaultTTFB_=i,this.ttfb_=new Ot(e)}update(e,t){const{slow_:n,fast_:i,ttfb_:r}=this;n.halfLife!==e&&(this.slow_=new Ot(e,n.getEstimate(),n.getTotalWeight())),i.halfLife!==t&&(this.fast_=new Ot(t,i.getEstimate(),i.getTotalWeight())),r.halfLife!==e&&(this.ttfb_=new Ot(e,r.getEstimate(),r.getTotalWeight()))}sample(e,t){e=Math.max(e,this.minDelayMs_);const n=8*t,i=e/1e3,r=n/i;this.fast_.sample(i,r),this.slow_.sample(i,r)}sampleTTFB(e){const t=e/1e3,n=Math.sqrt(2)*Math.exp(-Math.pow(t,2)/2);this.ttfb_.sample(n,Math.max(e,5))}canEstimate(){return this.fast_.getTotalWeight()>=this.minWeight_}getEstimate(){return this.canEstimate()?Math.min(this.fast_.getEstimate(),this.slow_.getEstimate()):this.defaultEstimate_}getEstimateTTFB(){return this.ttfb_.getTotalWeight()>=this.minWeight_?this.ttfb_.getEstimate():this.defaultTTFB_}destroy(){}}const la={supported:!0,configurations:[],decodingInfoResults:[{supported:!0,powerEfficient:!0,smooth:!0}]},ts={};function yc(a,e,t,n,i,r){const s=a.audioCodec?a.audioGroups:null,o=r==null?void 0:r.audioCodec,l=r==null?void 0:r.channels,d=l?parseInt(l):o?1/0:2;let c=null;if(s!=null&&s.length)try{s.length===1&&s[0]?c=e.groups[s[0]].channels:c=s.reduce((h,u)=>{if(u){const m=e.groups[u];if(!m)throw new Error(`Audio track group ${u} not found`);Object.keys(m.channels).forEach(A=>{h[A]=(h[A]||0)+m.channels[A]})}return h},{2:0})}catch{return!0}return a.videoCodec!==void 0&&(a.width>1920&&a.height>1088||a.height>1920&&a.width>1088||a.frameRate>Math.max(n,30)||a.videoRange!=="SDR"&&a.videoRange!==t||a.bitrate>Math.max(i,8e6))||!!c&&X(d)&&Object.keys(c).some(h=>parseInt(h)>d)}function bc(a,e,t){const n=a.videoCodec,i=a.audioCodec;if(!n||!i||!t)return Promise.resolve(la);const r={width:a.width,height:a.height,bitrate:Math.ceil(Math.max(a.bitrate*.9,a.averageBitrate)),framerate:a.frameRate||30},s=a.videoRange;s!=="SDR"&&(r.transferFunction=s.toLowerCase());const o=n.split(",").map(l=>({type:"media-source",video:_e(_e({},r),{},{contentType:tn(l,"video")})}));return i&&a.audioGroups&&a.audioGroups.forEach(l=>{var d;l&&((d=e.groups[l])==null||d.tracks.forEach(c=>{if(c.groupId===l){const h=c.channels||"",u=parseFloat(h);X(u)&&u>2&&o.push.apply(o,i.split(",").map(m=>({type:"media-source",audio:{contentType:tn(m,"audio"),channels:""+u}})))}}))}),Promise.all(o.map(l=>{const d=vc(l);return ts[d]||(ts[d]=t.decodingInfo(l))})).then(l=>({supported:!l.some(d=>!d.supported),configurations:o,decodingInfoResults:l})).catch(l=>({supported:!1,configurations:o,decodingInfoResults:[],error:l}))}function vc(a){const{audio:e,video:t}=a,n=t||e;if(n){const i=n.contentType.split('"')[1];if(t)return`r${t.height}x${t.width}f${Math.ceil(t.framerate)}${t.transferFunction||"sd"}_${i}_${Math.ceil(t.bitrate/1e5)}`;if(e)return`c${e.channels}${e.spatialRendering?"s":"n"}_${i}`}return""}function Ec(){if(typeof matchMedia=="function"){const a=matchMedia("(dynamic-range: high)"),e=matchMedia("bad query");if(a.media!==e.media)return a.matches===!0}return!1}function xc(a,e){let t=!1,n=[];return a&&(t=a!=="SDR",n=[a]),e&&(n=e.allowedVideoRanges||Mn.slice(0),t=e.preferHDR!==void 0?e.preferHDR:Ec(),t?n=n.filter(i=>i!=="SDR"):n=["SDR"]),{preferHDR:t,allowedVideoRanges:n}}function Cc(a,e,t,n,i){const r=Object.keys(a),s=n==null?void 0:n.channels,o=n==null?void 0:n.audioCodec,l=s&&parseInt(s)===2;let d=!0,c=!1,h=1/0,u=1/0,m=1/0,A=0,f=[];const{preferHDR:g,allowedVideoRanges:C}=xc(e,i);for(let I=r.length;I--;){const P=a[r[I]];d=P.channels[2]>0,h=Math.min(h,P.minHeight),u=Math.min(u,P.minFramerate),m=Math.min(m,P.minBitrate);const _=C.filter(N=>P.videoRanges[N]>0);_.length>0&&(c=!0,f=_)}h=X(h)?h:0,u=X(u)?u:0;const T=Math.max(1080,h),S=Math.max(30,u);return m=X(m)?m:t,t=Math.max(m,t),c||(e=void 0,f=[]),{codecSet:r.reduce((I,P)=>{const _=a[P];if(P===I)return I;if(_.minBitrate>t)return ct(P,`min bitrate of ${_.minBitrate} > current estimate of ${t}`),I;if(!_.hasDefaultAudio)return ct(P,"no renditions with default or auto-select sound found"),I;if(o&&P.indexOf(o.substring(0,4))%5!==0)return ct(P,`audio codec preference "${o}" not found`),I;if(s&&!l){if(!_.channels[s])return ct(P,`no renditions with ${s} channel sound found (channels options: ${Object.keys(_.channels)})`),I}else if((!o||l)&&d&&_.channels[2]===0)return ct(P,"no renditions with stereo sound found"),I;return _.minHeight>T?(ct(P,`min resolution of ${_.minHeight} > maximum of ${T}`),I):_.minFramerate>S?(ct(P,`min framerate of ${_.minFramerate} > maximum of ${S}`),I):f.some(N=>_.videoRanges[N]>0)?_.maxScore<A?(ct(P,`max score of ${_.maxScore} < selected max of ${A}`),I):I&&(On(P)>=On(I)||_.fragmentError>a[I].fragmentError)?I:(A=_.maxScore,P):(ct(P,`no variants with VIDEO-RANGE of ${JSON.stringify(f)} found`),I)},void 0),videoRanges:f,preferHDR:g,minFramerate:u,minBitrate:m}}function ct(a,e){D.log(`[abr] start candidates with "${a}" ignored because ${e}`)}function Tc(a){return a.reduce((e,t)=>{let n=e.groups[t.groupId];n||(n=e.groups[t.groupId]={tracks:[],channels:{2:0},hasDefault:!1,hasAutoSelect:!1}),n.tracks.push(t);const i=t.channels||"2";return n.channels[i]=(n.channels[i]||0)+1,n.hasDefault=n.hasDefault||t.default,n.hasAutoSelect=n.hasAutoSelect||t.autoselect,n.hasDefault&&(e.hasDefaultAudio=!0),n.hasAutoSelect&&(e.hasAutoSelectAudio=!0),e},{hasDefaultAudio:!1,hasAutoSelectAudio:!1,groups:{}})}function Sc(a,e,t,n){return a.slice(t,n+1).reduce((i,r)=>{if(!r.codecSet)return i;const s=r.audioGroups;let o=i[r.codecSet];o||(i[r.codecSet]=o={minBitrate:1/0,minHeight:1/0,minFramerate:1/0,maxScore:0,videoRanges:{SDR:0},channels:{2:0},hasDefaultAudio:!s,fragmentError:0}),o.minBitrate=Math.min(o.minBitrate,r.bitrate);const l=Math.min(r.height,r.width);return o.minHeight=Math.min(o.minHeight,l),o.minFramerate=Math.min(o.minFramerate,r.frameRate),o.maxScore=Math.max(o.maxScore,r.score),o.fragmentError+=r.fragmentError,o.videoRanges[r.videoRange]=(o.videoRanges[r.videoRange]||0)+1,s&&s.forEach(d=>{if(!d)return;const c=e.groups[d];c&&(o.hasDefaultAudio=o.hasDefaultAudio||e.hasDefaultAudio?c.hasDefault:c.hasAutoSelect||!e.hasDefaultAudio&&!e.hasAutoSelectAudio,Object.keys(c.channels).forEach(h=>{o.channels[h]=(o.channels[h]||0)+c.channels[h]}))}),i},{})}function it(a,e,t){if("attrs"in a){const n=e.indexOf(a);if(n!==-1)return n}for(let n=0;n<e.length;n++){const i=e[n];if(Gt(a,i,t))return n}return-1}function Gt(a,e,t){const{groupId:n,name:i,lang:r,assocLang:s,characteristics:o,default:l}=a,d=a.forced;return(n===void 0||e.groupId===n)&&(i===void 0||e.name===i)&&(r===void 0||e.lang===r)&&(r===void 0||e.assocLang===s)&&(l===void 0||e.default===l)&&(d===void 0||e.forced===d)&&(o===void 0||kc(o,e.characteristics))&&(t===void 0||t(a,e))}function kc(a,e=""){const t=a.split(","),n=e.split(",");return t.length===n.length&&!t.some(i=>n.indexOf(i)===-1)}function Ft(a,e){const{audioCodec:t,channels:n}=a;return(t===void 0||(e.audioCodec||"").substring(0,4)===t.substring(0,4))&&(n===void 0||n===(e.channels||"2"))}function wc(a,e,t,n,i){const r=e[n],o=e.reduce((u,m,A)=>{const f=m.uri;return(u[f]||(u[f]=[])).push(A),u},{})[r.uri];o.length>1&&(n=Math.max.apply(Math,o));const l=r.videoRange,d=r.frameRate,c=r.codecSet.substring(0,4),h=ns(e,n,u=>{if(u.videoRange!==l||u.frameRate!==d||u.codecSet.substring(0,4)!==c)return!1;const m=u.audioGroups,A=t.filter(f=>!m||m.indexOf(f.groupId)!==-1);return it(a,A,i)>-1});return h>-1?h:ns(e,n,u=>{const m=u.audioGroups,A=t.filter(f=>!m||m.indexOf(f.groupId)!==-1);return it(a,A,i)>-1})}function ns(a,e,t){for(let n=e;n>-1;n--)if(t(a[n]))return n;for(let n=e+1;n<a.length;n++)if(t(a[n]))return n;return-1}class Lc{constructor(e){this.hls=void 0,this.lastLevelLoadSec=0,this.lastLoadedFragLevel=-1,this.firstSelection=-1,this._nextAutoLevel=-1,this.nextAutoLevelKey="",this.audioTracksByGroup=null,this.codecTiers=null,this.timer=-1,this.fragCurrent=null,this.partCurrent=null,this.bitrateTestDelay=0,this.bwEstimator=void 0,this._abandonRulesCheck=()=>{const{fragCurrent:t,partCurrent:n,hls:i}=this,{autoLevelEnabled:r,media:s}=i;if(!t||!s)return;const o=performance.now(),l=n?n.stats:t.stats,d=n?n.duration:t.duration,c=o-l.loading.start,h=i.minAutoLevel;if(l.aborted||l.loaded&&l.loaded===l.total||t.level<=h){this.clearTimer(),this._nextAutoLevel=-1;return}if(!r||s.paused||!s.playbackRate||!s.readyState)return;const u=i.mainForwardBufferInfo;if(u===null)return;const m=this.bwEstimator.getEstimateTTFB(),A=Math.abs(s.playbackRate);if(c<=Math.max(m,1e3*(d/(A*2))))return;const f=u.len/A,g=l.loading.first?l.loading.first-l.loading.start:-1,C=l.loaded&&g>-1,T=this.getBwEstimate(),S=i.levels,k=S[t.level],I=l.total||Math.max(l.loaded,Math.round(d*k.averageBitrate/8));let P=C?c-g:c;P<1&&C&&(P=Math.min(c,l.loaded*8/T));const _=C?l.loaded*1e3/P:0,N=_?(I-l.loaded)/_:I*8/T+m/1e3;if(N<=f)return;const U=_?_*8:T;let F=Number.POSITIVE_INFINITY,$;for($=t.level-1;$>h;$--){const R=S[$].maxBitrate;if(F=this.getTimeToLoadFrag(m/1e3,U,d*R,!S[$].details),F<f)break}if(F>=N||F>d*10)return;i.nextLoadLevel=i.nextAutoLevel=$,C?this.bwEstimator.sample(c-Math.min(m,g),l.loaded):this.bwEstimator.sampleTTFB(c);const H=S[$].maxBitrate;this.getBwEstimate()*this.hls.config.abrBandWidthUpFactor>H&&this.resetEstimator(H),this.clearTimer(),D.warn(`[abr] Fragment ${t.sn}${n?" part "+n.index:""} of level ${t.level} is loading too slowly;
      Time to underbuffer: ${f.toFixed(3)} s
      Estimated load time for current fragment: ${N.toFixed(3)} s
      Estimated load time for down switch fragment: ${F.toFixed(3)} s
      TTFB estimate: ${g|0} ms
      Current BW estimate: ${X(T)?T|0:"Unknown"} bps
      New BW estimate: ${this.getBwEstimate()|0} bps
      Switching to level ${$} @ ${H|0} bps`),i.trigger(v.FRAG_LOAD_EMERGENCY_ABORTED,{frag:t,part:n,stats:l})},this.hls=e,this.bwEstimator=this.initEstimator(),this.registerListeners()}resetEstimator(e){e&&(D.log(`setting initial bwe to ${e}`),this.hls.config.abrEwmaDefaultEstimate=e),this.firstSelection=-1,this.bwEstimator=this.initEstimator()}initEstimator(){const e=this.hls.config;return new gc(e.abrEwmaSlowVoD,e.abrEwmaFastVoD,e.abrEwmaDefaultEstimate)}registerListeners(){const{hls:e}=this;e.on(v.MANIFEST_LOADING,this.onManifestLoading,this),e.on(v.FRAG_LOADING,this.onFragLoading,this),e.on(v.FRAG_LOADED,this.onFragLoaded,this),e.on(v.FRAG_BUFFERED,this.onFragBuffered,this),e.on(v.LEVEL_SWITCHING,this.onLevelSwitching,this),e.on(v.LEVEL_LOADED,this.onLevelLoaded,this),e.on(v.LEVELS_UPDATED,this.onLevelsUpdated,this),e.on(v.MAX_AUTO_LEVEL_UPDATED,this.onMaxAutoLevelUpdated,this),e.on(v.ERROR,this.onError,this)}unregisterListeners(){const{hls:e}=this;e&&(e.off(v.MANIFEST_LOADING,this.onManifestLoading,this),e.off(v.FRAG_LOADING,this.onFragLoading,this),e.off(v.FRAG_LOADED,this.onFragLoaded,this),e.off(v.FRAG_BUFFERED,this.onFragBuffered,this),e.off(v.LEVEL_SWITCHING,this.onLevelSwitching,this),e.off(v.LEVEL_LOADED,this.onLevelLoaded,this),e.off(v.LEVELS_UPDATED,this.onLevelsUpdated,this),e.off(v.MAX_AUTO_LEVEL_UPDATED,this.onMaxAutoLevelUpdated,this),e.off(v.ERROR,this.onError,this))}destroy(){this.unregisterListeners(),this.clearTimer(),this.hls=this._abandonRulesCheck=null,this.fragCurrent=this.partCurrent=null}onManifestLoading(e,t){this.lastLoadedFragLevel=-1,this.firstSelection=-1,this.lastLevelLoadSec=0,this.fragCurrent=this.partCurrent=null,this.onLevelsUpdated(),this.clearTimer()}onLevelsUpdated(){this.lastLoadedFragLevel>-1&&this.fragCurrent&&(this.lastLoadedFragLevel=this.fragCurrent.level),this._nextAutoLevel=-1,this.onMaxAutoLevelUpdated(),this.codecTiers=null,this.audioTracksByGroup=null}onMaxAutoLevelUpdated(){this.firstSelection=-1,this.nextAutoLevelKey=""}onFragLoading(e,t){const n=t.frag;if(!this.ignoreFragment(n)){if(!n.bitrateTest){var i;this.fragCurrent=n,this.partCurrent=(i=t.part)!=null?i:null}this.clearTimer(),this.timer=self.setInterval(this._abandonRulesCheck,100)}}onLevelSwitching(e,t){this.clearTimer()}onError(e,t){if(!t.fatal)switch(t.details){case O.BUFFER_ADD_CODEC_ERROR:case O.BUFFER_APPEND_ERROR:this.lastLoadedFragLevel=-1,this.firstSelection=-1;break;case O.FRAG_LOAD_TIMEOUT:{const n=t.frag,{fragCurrent:i,partCurrent:r}=this;if(n&&i&&n.sn===i.sn&&n.level===i.level){const s=performance.now(),o=r?r.stats:n.stats,l=s-o.loading.start,d=o.loading.first?o.loading.first-o.loading.start:-1;if(o.loaded&&d>-1){const h=this.bwEstimator.getEstimateTTFB();this.bwEstimator.sample(l-Math.min(h,d),o.loaded)}else this.bwEstimator.sampleTTFB(l)}break}}}getTimeToLoadFrag(e,t,n,i){const r=e+n/t,s=i?this.lastLevelLoadSec:0;return r+s}onLevelLoaded(e,t){const n=this.hls.config,{loading:i}=t.stats,r=i.end-i.start;X(r)&&(this.lastLevelLoadSec=r/1e3),t.details.live?this.bwEstimator.update(n.abrEwmaSlowLive,n.abrEwmaFastLive):this.bwEstimator.update(n.abrEwmaSlowVoD,n.abrEwmaFastVoD)}onFragLoaded(e,{frag:t,part:n}){const i=n?n.stats:t.stats;if(t.type===ne.MAIN&&this.bwEstimator.sampleTTFB(i.loading.first-i.loading.start),!this.ignoreFragment(t)){if(this.clearTimer(),t.level===this._nextAutoLevel&&(this._nextAutoLevel=-1),this.firstSelection=-1,this.hls.config.abrMaxWithRealBitrate){const r=n?n.duration:t.duration,s=this.hls.levels[t.level],o=(s.loaded?s.loaded.bytes:0)+i.loaded,l=(s.loaded?s.loaded.duration:0)+r;s.loaded={bytes:o,duration:l},s.realBitrate=Math.round(8*o/l)}if(t.bitrateTest){const r={stats:i,frag:t,part:n,id:t.type};this.onFragBuffered(v.FRAG_BUFFERED,r),t.bitrateTest=!1}else this.lastLoadedFragLevel=t.level}}onFragBuffered(e,t){const{frag:n,part:i}=t,r=i!=null&&i.stats.loaded?i.stats:n.stats;if(r.aborted||this.ignoreFragment(n))return;const s=r.parsing.end-r.loading.start-Math.min(r.loading.first-r.loading.start,this.bwEstimator.getEstimateTTFB());this.bwEstimator.sample(s,r.loaded),r.bwEstimate=this.getBwEstimate(),n.bitrateTest?this.bitrateTestDelay=s/1e3:this.bitrateTestDelay=0}ignoreFragment(e){return e.type!==ne.MAIN||e.sn==="initSegment"}clearTimer(){this.timer>-1&&(self.clearInterval(this.timer),this.timer=-1)}get firstAutoLevel(){const{maxAutoLevel:e,minAutoLevel:t}=this.hls,n=this.getBwEstimate(),i=this.hls.config.maxStarvationDelay,r=this.findBestLevel(n,t,e,0,i,1,1);if(r>-1)return r;const s=this.hls.firstLevel,o=Math.min(Math.max(s,t),e);return D.warn(`[abr] Could not find best starting auto level. Defaulting to first in playlist ${s} clamped to ${o}`),o}get forcedAutoLevel(){return this.nextAutoLevelKey?-1:this._nextAutoLevel}get nextAutoLevel(){const e=this.forcedAutoLevel,n=this.bwEstimator.canEstimate(),i=this.lastLoadedFragLevel>-1;if(e!==-1&&(!n||!i||this.nextAutoLevelKey===this.getAutoLevelKey()))return e;const r=n&&i?this.getNextABRAutoLevel():this.firstAutoLevel;if(e!==-1){const s=this.hls.levels;if(s.length>Math.max(e,r)&&s[e].loadError<=s[r].loadError)return e}return this._nextAutoLevel=r,this.nextAutoLevelKey=this.getAutoLevelKey(),r}getAutoLevelKey(){return`${this.getBwEstimate()}_${this.getStarvationDelay().toFixed(2)}`}getNextABRAutoLevel(){const{fragCurrent:e,partCurrent:t,hls:n}=this,{maxAutoLevel:i,config:r,minAutoLevel:s}=n,o=t?t.duration:e?e.duration:0,l=this.getBwEstimate(),d=this.getStarvationDelay();let c=r.abrBandWidthFactor,h=r.abrBandWidthUpFactor;if(d){const g=this.findBestLevel(l,s,i,d,0,c,h);if(g>=0)return g}let u=o?Math.min(o,r.maxStarvationDelay):r.maxStarvationDelay;if(!d){const g=this.bitrateTestDelay;g&&(u=(o?Math.min(o,r.maxLoadingDelay):r.maxLoadingDelay)-g,D.info(`[abr] bitrate test took ${Math.round(1e3*g)}ms, set first fragment max fetchDuration to ${Math.round(1e3*u)} ms`),c=h=1)}const m=this.findBestLevel(l,s,i,d,u,c,h);if(D.info(`[abr] ${d?"rebuffering expected":"buffer is empty"}, optimal quality level ${m}`),m>-1)return m;const A=n.levels[s],f=n.levels[n.loadLevel];return(A==null?void 0:A.bitrate)<(f==null?void 0:f.bitrate)?s:n.loadLevel}getStarvationDelay(){const e=this.hls,t=e.media;if(!t)return 1/0;const n=t&&t.playbackRate!==0?Math.abs(t.playbackRate):1,i=e.mainForwardBufferInfo;return(i?i.len:0)/n}getBwEstimate(){return this.bwEstimator.canEstimate()?this.bwEstimator.getEstimate():this.hls.config.abrEwmaDefaultEstimate}findBestLevel(e,t,n,i,r,s,o){var l;const d=i+r,c=this.lastLoadedFragLevel,h=c===-1?this.hls.firstLevel:c,{fragCurrent:u,partCurrent:m}=this,{levels:A,allAudioTracks:f,loadLevel:g,config:C}=this.hls;if(A.length===1)return 0;const T=A[h],S=!!(T!=null&&(l=T.details)!=null&&l.live),k=g===-1||c===-1;let I,P="SDR",_=(T==null?void 0:T.frameRate)||0;const{audioPreference:N,videoPreference:U}=C,F=this.audioTracksByGroup||(this.audioTracksByGroup=Tc(f));if(k){if(this.firstSelection!==-1)return this.firstSelection;const V=this.codecTiers||(this.codecTiers=Sc(A,F,t,n)),j=Cc(V,P,e,N,U),{codecSet:ee,videoRanges:K,minFramerate:Y,minBitrate:W,preferHDR:le}=j;I=ee,P=le?K[K.length-1]:K[0],_=Y,e=Math.max(e,W),D.log(`[abr] picked start tier ${JSON.stringify(j)}`)}else I=T==null?void 0:T.codecSet,P=T==null?void 0:T.videoRange;const $=m?m.duration:u?u.duration:0,H=this.bwEstimator.getEstimateTTFB()/1e3,R=[];for(let V=n;V>=t;V--){var q;const j=A[V],ee=V>h;if(!j)continue;if(C.useMediaCapabilities&&!j.supportedResult&&!j.supportedPromise){const ve=navigator.mediaCapabilities;typeof(ve==null?void 0:ve.decodingInfo)=="function"&&yc(j,F,P,_,e,N)?(j.supportedPromise=bc(j,F,ve),j.supportedPromise.then(fe=>{if(!this.hls)return;j.supportedResult=fe;const Ee=this.hls.levels,Pe=Ee.indexOf(j);fe.error?D.warn(`[abr] MediaCapabilities decodingInfo error: "${fe.error}" for level ${Pe} ${JSON.stringify(fe)}`):fe.supported||(D.warn(`[abr] Unsupported MediaCapabilities decodingInfo result for level ${Pe} ${JSON.stringify(fe)}`),Pe>-1&&Ee.length>1&&(D.log(`[abr] Removing unsupported level ${Pe}`),this.hls.removeLevel(Pe)))})):j.supportedResult=la}if(I&&j.codecSet!==I||P&&j.videoRange!==P||ee&&_>j.frameRate||!ee&&_>0&&_<j.frameRate||j.supportedResult&&!((q=j.supportedResult.decodingInfoResults)!=null&&q[0].smooth)){R.push(V);continue}const K=j.details,Y=(m?K==null?void 0:K.partTarget:K==null?void 0:K.averagetargetduration)||$;let W;ee?W=o*e:W=s*e;const le=$&&i>=$*2&&r===0?A[V].averageBitrate:A[V].maxBitrate,re=this.getTimeToLoadFrag(H,W,le*Y,K===void 0);if(W>=le&&(V===c||j.loadError===0&&j.fragmentError===0)&&(re<=H||!X(re)||S&&!this.bitrateTestDelay||re<d)){const ve=this.forcedAutoLevel;return V!==g&&(ve===-1||ve!==g)&&(R.length&&D.trace(`[abr] Skipped level(s) ${R.join(",")} of ${n} max with CODECS and VIDEO-RANGE:"${A[R[0]].codecs}" ${A[R[0]].videoRange}; not compatible with "${T.codecs}" ${P}`),D.info(`[abr] switch candidate:${h}->${V} adjustedbw(${Math.round(W)})-bitrate=${Math.round(W-le)} ttfb:${H.toFixed(1)} avgDuration:${Y.toFixed(1)} maxFetchDuration:${d.toFixed(1)} fetchDuration:${re.toFixed(1)} firstSelection:${k} codecSet:${I} videoRange:${P} hls.loadLevel:${g}`)),k&&(this.firstSelection=V),V}}return-1}set nextAutoLevel(e){const{maxAutoLevel:t,minAutoLevel:n}=this.hls,i=Math.min(Math.max(e,n),t);this._nextAutoLevel!==i&&(this.nextAutoLevelKey="",this._nextAutoLevel=i)}}class Ic{constructor(){this._boundTick=void 0,this._tickTimer=null,this._tickInterval=null,this._tickCallCount=0,this._boundTick=this.tick.bind(this)}destroy(){this.onHandlerDestroying(),this.onHandlerDestroyed()}onHandlerDestroying(){this.clearNextTick(),this.clearInterval()}onHandlerDestroyed(){}hasInterval(){return!!this._tickInterval}hasNextTick(){return!!this._tickTimer}setInterval(e){return this._tickInterval?!1:(this._tickCallCount=0,this._tickInterval=self.setInterval(this._boundTick,e),!0)}clearInterval(){return this._tickInterval?(self.clearInterval(this._tickInterval),this._tickInterval=null,!0):!1}clearNextTick(){return this._tickTimer?(self.clearTimeout(this._tickTimer),this._tickTimer=null,!0):!1}tick(){this._tickCallCount++,this._tickCallCount===1&&(this.doTick(),this._tickCallCount>1&&this.tickImmediate(),this._tickCallCount=0)}tickImmediate(){this.clearNextTick(),this._tickTimer=self.setTimeout(this._boundTick,0)}doTick(){}}var De={NOT_LOADED:"NOT_LOADED",APPENDING:"APPENDING",PARTIAL:"PARTIAL",OK:"OK"};class Rc{constructor(e){this.activePartLists=Object.create(null),this.endListFragments=Object.create(null),this.fragments=Object.create(null),this.timeRanges=Object.create(null),this.bufferPadding=.2,this.hls=void 0,this.hasGaps=!1,this.hls=e,this._registerListeners()}_registerListeners(){const{hls:e}=this;e.on(v.BUFFER_APPENDED,this.onBufferAppended,this),e.on(v.FRAG_BUFFERED,this.onFragBuffered,this),e.on(v.FRAG_LOADED,this.onFragLoaded,this)}_unregisterListeners(){const{hls:e}=this;e.off(v.BUFFER_APPENDED,this.onBufferAppended,this),e.off(v.FRAG_BUFFERED,this.onFragBuffered,this),e.off(v.FRAG_LOADED,this.onFragLoaded,this)}destroy(){this._unregisterListeners(),this.fragments=this.activePartLists=this.endListFragments=this.timeRanges=null}getAppendedFrag(e,t){const n=this.activePartLists[t];if(n)for(let i=n.length;i--;){const r=n[i];if(!r)break;const s=r.end;if(r.start<=e&&s!==null&&e<=s)return r}return this.getBufferedFrag(e,t)}getBufferedFrag(e,t){const{fragments:n}=this,i=Object.keys(n);for(let r=i.length;r--;){const s=n[i[r]];if((s==null?void 0:s.body.type)===t&&s.buffered){const o=s.body;if(o.start<=e&&e<=o.end)return o}}return null}detectEvictedFragments(e,t,n,i){this.timeRanges&&(this.timeRanges[e]=t);const r=(i==null?void 0:i.fragment.sn)||-1;Object.keys(this.fragments).forEach(s=>{const o=this.fragments[s];if(!o||r>=o.body.sn)return;if(!o.buffered&&!o.loaded){o.body.type===n&&this.removeFragment(o.body);return}const l=o.range[e];l&&l.time.some(d=>{const c=!this.isTimeBuffered(d.startPTS,d.endPTS,t);return c&&this.removeFragment(o.body),c})})}detectPartialFragments(e){const t=this.timeRanges,{frag:n,part:i}=e;if(!t||n.sn==="initSegment")return;const r=Mt(n),s=this.fragments[r];if(!s||s.buffered&&n.gap)return;const o=!n.relurl;Object.keys(t).forEach(l=>{const d=n.elementaryStreams[l];if(!d)return;const c=t[l],h=o||d.partial===!0;s.range[l]=this.getBufferedTimes(n,i,h,c)}),s.loaded=null,Object.keys(s.range).length?(s.buffered=!0,(s.body.endList=n.endList||s.body.endList)&&(this.endListFragments[s.body.type]=s),gn(s)||this.removeParts(n.sn-1,n.type)):this.removeFragment(s.body)}removeParts(e,t){const n=this.activePartLists[t];n&&(this.activePartLists[t]=n.filter(i=>i.fragment.sn>=e))}fragBuffered(e,t){const n=Mt(e);let i=this.fragments[n];!i&&t&&(i=this.fragments[n]={body:e,appendedPTS:null,loaded:null,buffered:!1,range:Object.create(null)},e.gap&&(this.hasGaps=!0)),i&&(i.loaded=null,i.buffered=!0)}getBufferedTimes(e,t,n,i){const r={time:[],partial:n},s=e.start,o=e.end,l=e.minEndPTS||o,d=e.maxStartPTS||s;for(let c=0;c<i.length;c++){const h=i.start(c)-this.bufferPadding,u=i.end(c)+this.bufferPadding;if(d>=h&&l<=u){r.time.push({startPTS:Math.max(s,i.start(c)),endPTS:Math.min(o,i.end(c))});break}else if(s<u&&o>h){const m=Math.max(s,i.start(c)),A=Math.min(o,i.end(c));A>m&&(r.partial=!0,r.time.push({startPTS:m,endPTS:A}))}else if(o<=h)break}return r}getPartialFragment(e){let t=null,n,i,r,s=0;const{bufferPadding:o,fragments:l}=this;return Object.keys(l).forEach(d=>{const c=l[d];c&&gn(c)&&(i=c.body.start-o,r=c.body.end+o,e>=i&&e<=r&&(n=Math.min(e-i,r-e),s<=n&&(t=c.body,s=n)))}),t}isEndListAppended(e){const t=this.endListFragments[e];return t!==void 0&&(t.buffered||gn(t))}getState(e){const t=Mt(e),n=this.fragments[t];return n?n.buffered?gn(n)?De.PARTIAL:De.OK:De.APPENDING:De.NOT_LOADED}isTimeBuffered(e,t,n){let i,r;for(let s=0;s<n.length;s++){if(i=n.start(s)-this.bufferPadding,r=n.end(s)+this.bufferPadding,e>=i&&t<=r)return!0;if(t<=i)return!1}return!1}onFragLoaded(e,t){const{frag:n,part:i}=t;if(n.sn==="initSegment"||n.bitrateTest)return;const r=i?null:t,s=Mt(n);this.fragments[s]={body:n,appendedPTS:null,loaded:r,buffered:!1,range:Object.create(null)}}onBufferAppended(e,t){const{frag:n,part:i,timeRanges:r}=t;if(n.sn==="initSegment")return;const s=n.type;if(i){let o=this.activePartLists[s];o||(this.activePartLists[s]=o=[]),o.push(i)}this.timeRanges=r,Object.keys(r).forEach(o=>{const l=r[o];this.detectEvictedFragments(o,l,s,i)})}onFragBuffered(e,t){this.detectPartialFragments(t)}hasFragment(e){const t=Mt(e);return!!this.fragments[t]}hasParts(e){var t;return!!((t=this.activePartLists[e])!=null&&t.length)}removeFragmentsInRange(e,t,n,i,r){i&&!this.hasGaps||Object.keys(this.fragments).forEach(s=>{const o=this.fragments[s];if(!o)return;const l=o.body;l.type!==n||i&&!l.gap||l.start<t&&l.end>e&&(o.buffered||r)&&this.removeFragment(l)})}removeFragment(e){const t=Mt(e);e.stats.loaded=0,e.clearElementaryStreamInfo();const n=this.activePartLists[e.type];if(n){const i=e.sn;this.activePartLists[e.type]=n.filter(r=>r.fragment.sn!==i)}delete this.fragments[t],e.endList&&delete this.endListFragments[e.type]}removeAllFragments(){this.fragments=Object.create(null),this.endListFragments=Object.create(null),this.activePartLists=Object.create(null),this.hasGaps=!1}}function gn(a){var e,t,n;return a.buffered&&(a.body.gap||((e=a.range.video)==null?void 0:e.partial)||((t=a.range.audio)==null?void 0:t.partial)||((n=a.range.audiovideo)==null?void 0:n.partial))}function Mt(a){return`${a.type}_${a.level}_${a.sn}`}const Dc={length:0,start:()=>0,end:()=>0};class Ce{static isBuffered(e,t){try{if(e){const n=Ce.getBuffered(e);for(let i=0;i<n.length;i++)if(t>=n.start(i)&&t<=n.end(i))return!0}}catch{}return!1}static bufferInfo(e,t,n){try{if(e){const i=Ce.getBuffered(e),r=[];let s;for(s=0;s<i.length;s++)r.push({start:i.start(s),end:i.end(s)});return this.bufferedInfo(r,t,n)}}catch{}return{len:0,start:t,end:t,nextStart:void 0}}static bufferedInfo(e,t,n){t=Math.max(0,t),e.sort(function(d,c){const h=d.start-c.start;return h||c.end-d.end});let i=[];if(n)for(let d=0;d<e.length;d++){const c=i.length;if(c){const h=i[c-1].end;e[d].start-h<n?e[d].end>h&&(i[c-1].end=e[d].end):i.push(e[d])}else i.push(e[d])}else i=e;let r=0,s,o=t,l=t;for(let d=0;d<i.length;d++){const c=i[d].start,h=i[d].end;if(t+n>=c&&t<h)o=c,l=h,r=l-t;else if(t+n<c){s=c;break}}return{len:r,start:o||0,end:l||0,nextStart:s}}static getBuffered(e){try{return e.buffered}catch(t){return D.log("failed to get media.buffered",t),Dc}}}class Ji{constructor(e,t,n,i=0,r=-1,s=!1){this.level=void 0,this.sn=void 0,this.part=void 0,this.id=void 0,this.size=void 0,this.partial=void 0,this.transmuxing=yn(),this.buffering={audio:yn(),video:yn(),audiovideo:yn()},this.level=e,this.sn=t,this.id=n,this.size=i,this.part=r,this.partial=s}}function yn(){return{start:0,executeStart:0,executeEnd:0,end:0}}function wn(a,e){for(let n=0,i=a.length;n<i;n++){var t;if(((t=a[n])==null?void 0:t.cc)===e)return a[n]}return null}function _c(a,e,t){return!!(e&&(t.endCC>t.startCC||a&&a.cc<t.startCC))}function Bc(a,e){const t=a.fragments,n=e.fragments;if(!n.length||!t.length){D.log("No fragments to align");return}const i=wn(t,n[0].cc);if(!i||i&&!i.startPTS){D.log("No frag in previous level to align on");return}return i}function is(a,e){if(a){const t=a.start+e;a.start=a.startPTS=t,a.endPTS=t+a.duration}}function da(a,e){const t=e.fragments;for(let n=0,i=t.length;n<i;n++)is(t[n],a);e.fragmentHint&&is(e.fragmentHint,a),e.alignedSliding=!0}function Pc(a,e,t){e&&(Oc(a,t,e),!t.alignedSliding&&e&&Gn(t,e),!t.alignedSliding&&e&&!t.skippedSegments&&ra(e,t))}function Oc(a,e,t){if(_c(a,t,e)){const n=Bc(t,e);n&&X(n.start)&&(D.log(`Adjusting PTS using last level due to CC increase within current level ${e.url}`),da(n.start,e))}}function Gn(a,e){if(!a.hasProgramDateTime||!e.hasProgramDateTime)return;const t=a.fragments,n=e.fragments;if(!t.length||!n.length)return;let i,r;const s=Math.min(e.endCC,a.endCC);e.startCC<s&&a.startCC<s&&(i=wn(n,s),r=wn(t,s)),(!i||!r)&&(i=n[Math.floor(n.length/2)],r=wn(t,i.cc)||t[Math.floor(t.length/2)]);const o=i.programDateTime,l=r.programDateTime;if(!o||!l)return;const d=(l-o)/1e3-(r.start-i.start);da(d,a)}const rs=Math.pow(2,17);class Fc{constructor(e){this.config=void 0,this.loader=null,this.partLoadTimeout=-1,this.config=e}destroy(){this.loader&&(this.loader.destroy(),this.loader=null)}abort(){this.loader&&this.loader.abort()}load(e,t){const n=e.url;if(!n)return Promise.reject(new ht({type:ie.NETWORK_ERROR,details:O.FRAG_LOAD_ERROR,fatal:!1,frag:e,error:new Error(`Fragment does not have a ${n?"part list":"url"}`),networkDetails:null}));this.abort();const i=this.config,r=i.fLoader,s=i.loader;return new Promise((o,l)=>{if(this.loader&&this.loader.destroy(),e.gap)if(e.tagList.some(m=>m[0]==="GAP")){l(as(e));return}else e.gap=!1;const d=this.loader=e.loader=r?new r(i):new s(i),c=ss(e),h=es(i.fragLoadPolicy.default),u={loadPolicy:h,timeout:h.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0,highWaterMark:e.sn==="initSegment"?1/0:rs};e.stats=d.stats,d.load(c,u,{onSuccess:(m,A,f,g)=>{this.resetLoader(e,d);let C=m.data;f.resetIV&&e.decryptdata&&(e.decryptdata.iv=new Uint8Array(C.slice(0,16)),C=C.slice(16)),o({frag:e,part:null,payload:C,networkDetails:g})},onError:(m,A,f,g)=>{this.resetLoader(e,d),l(new ht({type:ie.NETWORK_ERROR,details:O.FRAG_LOAD_ERROR,fatal:!1,frag:e,response:_e({url:n,data:void 0},m),error:new Error(`HTTP Error ${m.code} ${m.text}`),networkDetails:f,stats:g}))},onAbort:(m,A,f)=>{this.resetLoader(e,d),l(new ht({type:ie.NETWORK_ERROR,details:O.INTERNAL_ABORTED,fatal:!1,frag:e,error:new Error("Aborted"),networkDetails:f,stats:m}))},onTimeout:(m,A,f)=>{this.resetLoader(e,d),l(new ht({type:ie.NETWORK_ERROR,details:O.FRAG_LOAD_TIMEOUT,fatal:!1,frag:e,error:new Error(`Timeout after ${u.timeout}ms`),networkDetails:f,stats:m}))},onProgress:(m,A,f,g)=>{t&&t({frag:e,part:null,payload:f,networkDetails:g})}})})}loadPart(e,t,n){this.abort();const i=this.config,r=i.fLoader,s=i.loader;return new Promise((o,l)=>{if(this.loader&&this.loader.destroy(),e.gap||t.gap){l(as(e,t));return}const d=this.loader=e.loader=r?new r(i):new s(i),c=ss(e,t),h=es(i.fragLoadPolicy.default),u={loadPolicy:h,timeout:h.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0,highWaterMark:rs};t.stats=d.stats,d.load(c,u,{onSuccess:(m,A,f,g)=>{this.resetLoader(e,d),this.updateStatsFromPart(e,t);const C={frag:e,part:t,payload:m.data,networkDetails:g};n(C),o(C)},onError:(m,A,f,g)=>{this.resetLoader(e,d),l(new ht({type:ie.NETWORK_ERROR,details:O.FRAG_LOAD_ERROR,fatal:!1,frag:e,part:t,response:_e({url:c.url,data:void 0},m),error:new Error(`HTTP Error ${m.code} ${m.text}`),networkDetails:f,stats:g}))},onAbort:(m,A,f)=>{e.stats.aborted=t.stats.aborted,this.resetLoader(e,d),l(new ht({type:ie.NETWORK_ERROR,details:O.INTERNAL_ABORTED,fatal:!1,frag:e,part:t,error:new Error("Aborted"),networkDetails:f,stats:m}))},onTimeout:(m,A,f)=>{this.resetLoader(e,d),l(new ht({type:ie.NETWORK_ERROR,details:O.FRAG_LOAD_TIMEOUT,fatal:!1,frag:e,part:t,error:new Error(`Timeout after ${u.timeout}ms`),networkDetails:f,stats:m}))}})})}updateStatsFromPart(e,t){const n=e.stats,i=t.stats,r=i.total;if(n.loaded+=i.loaded,r){const l=Math.round(e.duration/t.duration),d=Math.min(Math.round(n.loaded/r),l),h=(l-d)*Math.round(n.loaded/d);n.total=n.loaded+h}else n.total=Math.max(n.loaded,n.total);const s=n.loading,o=i.loading;s.start?s.first+=o.first-o.start:(s.start=o.start,s.first=o.first),s.end=o.end}resetLoader(e,t){e.loader=null,this.loader===t&&(self.clearTimeout(this.partLoadTimeout),this.loader=null),t.destroy()}}function ss(a,e=null){const t=e||a,n={frag:a,part:e,responseType:"arraybuffer",url:t.url,headers:{},rangeStart:0,rangeEnd:0},i=t.byteRangeStartOffset,r=t.byteRangeEndOffset;if(X(i)&&X(r)){var s;let o=i,l=r;if(a.sn==="initSegment"&&((s=a.decryptdata)==null?void 0:s.method)==="AES-128"){const d=r-i;d%16&&(l=r+(16-d%16)),i!==0&&(n.resetIV=!0,o=i-16)}n.rangeStart=o,n.rangeEnd=l}return n}function as(a,e){const t=new Error(`GAP ${a.gap?"tag":"attribute"} found`),n={type:ie.MEDIA_ERROR,details:O.FRAG_GAP,fatal:!1,frag:a,error:t,networkDetails:null};return e&&(n.part=e),(e||a).stats.aborted=!0,new ht(n)}class ht extends Error{constructor(e){super(e.error.message),this.data=void 0,this.data=e}}class Mc{constructor(e,t){this.subtle=void 0,this.aesIV=void 0,this.subtle=e,this.aesIV=t}decrypt(e,t){return this.subtle.decrypt({name:"AES-CBC",iv:this.aesIV},t,e)}}class Nc{constructor(e,t){this.subtle=void 0,this.key=void 0,this.subtle=e,this.key=t}expandKey(){return this.subtle.importKey("raw",this.key,{name:"AES-CBC"},!1,["encrypt","decrypt"])}}function Uc(a){const e=a.byteLength,t=e&&new DataView(a.buffer).getUint8(e-1);return t?Rt(a,0,e-t):a}class $c{constructor(){this.rcon=[0,1,2,4,8,16,32,64,128,27,54],this.subMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.invSubMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.sBox=new Uint32Array(256),this.invSBox=new Uint32Array(256),this.key=new Uint32Array(0),this.ksRows=0,this.keySize=0,this.keySchedule=void 0,this.invKeySchedule=void 0,this.initTable()}uint8ArrayToUint32Array_(e){const t=new DataView(e),n=new Uint32Array(4);for(let i=0;i<4;i++)n[i]=t.getUint32(i*4);return n}initTable(){const e=this.sBox,t=this.invSBox,n=this.subMix,i=n[0],r=n[1],s=n[2],o=n[3],l=this.invSubMix,d=l[0],c=l[1],h=l[2],u=l[3],m=new Uint32Array(256);let A=0,f=0,g=0;for(g=0;g<256;g++)g<128?m[g]=g<<1:m[g]=g<<1^283;for(g=0;g<256;g++){let C=f^f<<1^f<<2^f<<3^f<<4;C=C>>>8^C&255^99,e[A]=C,t[C]=A;const T=m[A],S=m[T],k=m[S];let I=m[C]*257^C*16843008;i[A]=I<<24|I>>>8,r[A]=I<<16|I>>>16,s[A]=I<<8|I>>>24,o[A]=I,I=k*16843009^S*65537^T*257^A*16843008,d[C]=I<<24|I>>>8,c[C]=I<<16|I>>>16,h[C]=I<<8|I>>>24,u[C]=I,A?(A=T^m[m[m[k^T]]],f^=m[m[f]]):A=f=1}}expandKey(e){const t=this.uint8ArrayToUint32Array_(e);let n=!0,i=0;for(;i<t.length&&n;)n=t[i]===this.key[i],i++;if(n)return;this.key=t;const r=this.keySize=t.length;if(r!==4&&r!==6&&r!==8)throw new Error("Invalid aes key size="+r);const s=this.ksRows=(r+6+1)*4;let o,l;const d=this.keySchedule=new Uint32Array(s),c=this.invKeySchedule=new Uint32Array(s),h=this.sBox,u=this.rcon,m=this.invSubMix,A=m[0],f=m[1],g=m[2],C=m[3];let T,S;for(o=0;o<s;o++){if(o<r){T=d[o]=t[o];continue}S=T,o%r===0?(S=S<<8|S>>>24,S=h[S>>>24]<<24|h[S>>>16&255]<<16|h[S>>>8&255]<<8|h[S&255],S^=u[o/r|0]<<24):r>6&&o%r===4&&(S=h[S>>>24]<<24|h[S>>>16&255]<<16|h[S>>>8&255]<<8|h[S&255]),d[o]=T=(d[o-r]^S)>>>0}for(l=0;l<s;l++)o=s-l,l&3?S=d[o]:S=d[o-4],l<4||o<=4?c[l]=S:c[l]=A[h[S>>>24]]^f[h[S>>>16&255]]^g[h[S>>>8&255]]^C[h[S&255]],c[l]=c[l]>>>0}networkToHostOrderSwap(e){return e<<24|(e&65280)<<8|(e&16711680)>>8|e>>>24}decrypt(e,t,n){const i=this.keySize+6,r=this.invKeySchedule,s=this.invSBox,o=this.invSubMix,l=o[0],d=o[1],c=o[2],h=o[3],u=this.uint8ArrayToUint32Array_(n);let m=u[0],A=u[1],f=u[2],g=u[3];const C=new Int32Array(e),T=new Int32Array(C.length);let S,k,I,P,_,N,U,F,$,H,R,q,V,j;const ee=this.networkToHostOrderSwap;for(;t<C.length;){for($=ee(C[t]),H=ee(C[t+1]),R=ee(C[t+2]),q=ee(C[t+3]),_=$^r[0],N=q^r[1],U=R^r[2],F=H^r[3],V=4,j=1;j<i;j++)S=l[_>>>24]^d[N>>16&255]^c[U>>8&255]^h[F&255]^r[V],k=l[N>>>24]^d[U>>16&255]^c[F>>8&255]^h[_&255]^r[V+1],I=l[U>>>24]^d[F>>16&255]^c[_>>8&255]^h[N&255]^r[V+2],P=l[F>>>24]^d[_>>16&255]^c[N>>8&255]^h[U&255]^r[V+3],_=S,N=k,U=I,F=P,V=V+4;S=s[_>>>24]<<24^s[N>>16&255]<<16^s[U>>8&255]<<8^s[F&255]^r[V],k=s[N>>>24]<<24^s[U>>16&255]<<16^s[F>>8&255]<<8^s[_&255]^r[V+1],I=s[U>>>24]<<24^s[F>>16&255]<<16^s[_>>8&255]<<8^s[N&255]^r[V+2],P=s[F>>>24]<<24^s[_>>16&255]<<16^s[N>>8&255]<<8^s[U&255]^r[V+3],T[t]=ee(S^m),T[t+1]=ee(P^A),T[t+2]=ee(I^f),T[t+3]=ee(k^g),m=$,A=H,f=R,g=q,t=t+4}return T.buffer}}const Gc=16;class er{constructor(e,{removePKCS7Padding:t=!0}={}){if(this.logEnabled=!0,this.removePKCS7Padding=void 0,this.subtle=null,this.softwareDecrypter=null,this.key=null,this.fastAesKey=null,this.remainderData=null,this.currentIV=null,this.currentResult=null,this.useSoftware=void 0,this.useSoftware=e.enableSoftwareAES,this.removePKCS7Padding=t,t)try{const n=self.crypto;n&&(this.subtle=n.subtle||n.webkitSubtle)}catch{}this.useSoftware=!this.subtle}destroy(){this.subtle=null,this.softwareDecrypter=null,this.key=null,this.fastAesKey=null,this.remainderData=null,this.currentIV=null,this.currentResult=null}isSync(){return this.useSoftware}flush(){const{currentResult:e,remainderData:t}=this;if(!e||t)return this.reset(),null;const n=new Uint8Array(e);return this.reset(),this.removePKCS7Padding?Uc(n):n}reset(){this.currentResult=null,this.currentIV=null,this.remainderData=null,this.softwareDecrypter&&(this.softwareDecrypter=null)}decrypt(e,t,n){return this.useSoftware?new Promise((i,r)=>{this.softwareDecrypt(new Uint8Array(e),t,n);const s=this.flush();s?i(s.buffer):r(new Error("[softwareDecrypt] Failed to decrypt data"))}):this.webCryptoDecrypt(new Uint8Array(e),t,n)}softwareDecrypt(e,t,n){const{currentIV:i,currentResult:r,remainderData:s}=this;this.logOnce("JS AES decrypt"),s&&(e=ze(s,e),this.remainderData=null);const o=this.getValidChunk(e);if(!o.length)return null;i&&(n=i);let l=this.softwareDecrypter;l||(l=this.softwareDecrypter=new $c),l.expandKey(t);const d=r;return this.currentResult=l.decrypt(o.buffer,0,n),this.currentIV=Rt(o,-16).buffer,d||null}webCryptoDecrypt(e,t,n){if(this.key!==t||!this.fastAesKey){if(!this.subtle)return Promise.resolve(this.onWebCryptoError(e,t,n));this.key=t,this.fastAesKey=new Nc(this.subtle,t)}return this.fastAesKey.expandKey().then(i=>this.subtle?(this.logOnce("WebCrypto AES decrypt"),new Mc(this.subtle,new Uint8Array(n)).decrypt(e.buffer,i)):Promise.reject(new Error("web crypto not initialized"))).catch(i=>(D.warn(`[decrypter]: WebCrypto Error, disable WebCrypto API, ${i.name}: ${i.message}`),this.onWebCryptoError(e,t,n)))}onWebCryptoError(e,t,n){this.useSoftware=!0,this.logEnabled=!0,this.softwareDecrypt(e,t,n);const i=this.flush();if(i)return i.buffer;throw new Error("WebCrypto and softwareDecrypt: failed to decrypt data")}getValidChunk(e){let t=e;const n=e.length-e.length%Gc;return n!==e.length&&(t=Rt(e,0,n),this.remainderData=Rt(e,n)),t}logOnce(e){this.logEnabled&&(D.log(`[decrypter]: ${e}`),this.logEnabled=!1)}}const Kc={toString:function(a){let e="";const t=a.length;for(let n=0;n<t;n++)e+=`[${a.start(n).toFixed(3)}-${a.end(n).toFixed(3)}]`;return e}},G={STOPPED:"STOPPED",IDLE:"IDLE",KEY_LOADING:"KEY_LOADING",FRAG_LOADING:"FRAG_LOADING",FRAG_LOADING_WAITING_RETRY:"FRAG_LOADING_WAITING_RETRY",WAITING_TRACK:"WAITING_TRACK",PARSING:"PARSING",PARSED:"PARSED",ENDED:"ENDED",ERROR:"ERROR",WAITING_INIT_PTS:"WAITING_INIT_PTS",WAITING_LEVEL:"WAITING_LEVEL"};class tr extends Ic{constructor(e,t,n,i,r){super(),this.hls=void 0,this.fragPrevious=null,this.fragCurrent=null,this.fragmentTracker=void 0,this.transmuxer=null,this._state=G.STOPPED,this.playlistType=void 0,this.media=null,this.mediaBuffer=null,this.config=void 0,this.bitrateTest=!1,this.lastCurrentTime=0,this.nextLoadPosition=0,this.startPosition=0,this.startTimeOffset=null,this.loadedmetadata=!1,this.retryDate=0,this.levels=null,this.fragmentLoader=void 0,this.keyLoader=void 0,this.levelLastLoaded=null,this.startFragRequested=!1,this.decrypter=void 0,this.initPTS=[],this.buffering=!0,this.onvseeking=null,this.onvended=null,this.logPrefix="",this.log=void 0,this.warn=void 0,this.playlistType=r,this.logPrefix=i,this.log=D.log.bind(D,`${i}:`),this.warn=D.warn.bind(D,`${i}:`),this.hls=e,this.fragmentLoader=new Fc(e.config),this.keyLoader=n,this.fragmentTracker=t,this.config=e.config,this.decrypter=new er(e.config),e.on(v.MANIFEST_LOADED,this.onManifestLoaded,this)}doTick(){this.onTickEnd()}onTickEnd(){}startLoad(e){}stopLoad(){this.fragmentLoader.abort(),this.keyLoader.abort(this.playlistType);const e=this.fragCurrent;e!=null&&e.loader&&(e.abortRequests(),this.fragmentTracker.removeFragment(e)),this.resetTransmuxer(),this.fragCurrent=null,this.fragPrevious=null,this.clearInterval(),this.clearNextTick(),this.state=G.STOPPED}pauseBuffering(){this.buffering=!1}resumeBuffering(){this.buffering=!0}_streamEnded(e,t){if(t.live||e.nextStart||!e.end||!this.media)return!1;const n=t.partList;if(n!=null&&n.length){const r=n[n.length-1];return Ce.isBuffered(this.media,r.start+r.duration/2)}const i=t.fragments[t.fragments.length-1].type;return this.fragmentTracker.isEndListAppended(i)}getLevelDetails(){if(this.levels&&this.levelLastLoaded!==null){var e;return(e=this.levelLastLoaded)==null?void 0:e.details}}onMediaAttached(e,t){const n=this.media=this.mediaBuffer=t.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvended=this.onMediaEnded.bind(this),n.addEventListener("seeking",this.onvseeking),n.addEventListener("ended",this.onvended);const i=this.config;this.levels&&i.autoStartLoad&&this.state===G.STOPPED&&this.startLoad(i.startPosition)}onMediaDetaching(){const e=this.media;e!=null&&e.ended&&(this.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0),e&&this.onvseeking&&this.onvended&&(e.removeEventListener("seeking",this.onvseeking),e.removeEventListener("ended",this.onvended),this.onvseeking=this.onvended=null),this.keyLoader&&this.keyLoader.detach(),this.media=this.mediaBuffer=null,this.loadedmetadata=!1,this.fragmentTracker.removeAllFragments(),this.stopLoad()}onMediaSeeking(){const{config:e,fragCurrent:t,media:n,mediaBuffer:i,state:r}=this,s=n?n.currentTime:0,o=Ce.bufferInfo(i||n,s,e.maxBufferHole);if(this.log(`media seeking to ${X(s)?s.toFixed(3):s}, state: ${r}`),this.state===G.ENDED)this.resetLoadingState();else if(t){const l=e.maxFragLookUpTolerance,d=t.start-l,c=t.start+t.duration+l;if(!o.len||c<o.start||d>o.end){const h=s>c;(s<d||h)&&(h&&t.loader&&(this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"),t.abortRequests(),this.resetLoadingState()),this.fragPrevious=null)}}n&&(this.fragmentTracker.removeFragmentsInRange(s,1/0,this.playlistType,!0),this.lastCurrentTime=s),!this.loadedmetadata&&!o.len&&(this.nextLoadPosition=this.startPosition=s),this.tickImmediate()}onMediaEnded(){this.startPosition=this.lastCurrentTime=0}onManifestLoaded(e,t){this.startTimeOffset=t.startTimeOffset,this.initPTS=[]}onHandlerDestroying(){this.hls.off(v.MANIFEST_LOADED,this.onManifestLoaded,this),this.stopLoad(),super.onHandlerDestroying(),this.hls=null}onHandlerDestroyed(){this.state=G.STOPPED,this.fragmentLoader&&this.fragmentLoader.destroy(),this.keyLoader&&this.keyLoader.destroy(),this.decrypter&&this.decrypter.destroy(),this.hls=this.log=this.warn=this.decrypter=this.keyLoader=this.fragmentLoader=this.fragmentTracker=null,super.onHandlerDestroyed()}loadFragment(e,t,n){this._loadFragForPlayback(e,t,n)}_loadFragForPlayback(e,t,n){const i=r=>{if(this.fragContextChanged(e)){this.warn(`Fragment ${e.sn}${r.part?" p: "+r.part.index:""} of level ${e.level} was dropped during download.`),this.fragmentTracker.removeFragment(e);return}e.stats.chunkCount++,this._handleFragmentLoadProgress(r)};this._doFragLoad(e,t,n,i).then(r=>{if(!r)return;const s=this.state;if(this.fragContextChanged(e)){(s===G.FRAG_LOADING||!this.fragCurrent&&s===G.PARSING)&&(this.fragmentTracker.removeFragment(e),this.state=G.IDLE);return}"payload"in r&&(this.log(`Loaded fragment ${e.sn} of level ${e.level}`),this.hls.trigger(v.FRAG_LOADED,r)),this._handleFragmentLoadComplete(r)}).catch(r=>{this.state===G.STOPPED||this.state===G.ERROR||(this.warn(`Frag error: ${(r==null?void 0:r.message)||r}`),this.resetFragmentLoading(e))})}clearTrackerIfNeeded(e){var t;const{fragmentTracker:n}=this;if(n.getState(e)===De.APPENDING){const r=e.type,s=this.getFwdBufferInfo(this.mediaBuffer,r),o=Math.max(e.duration,s?s.len:this.config.maxBufferLength),l=this.backtrackFragment;((l?e.sn-l.sn:0)===1||this.reduceMaxBufferLength(o,e.duration))&&n.removeFragment(e)}else((t=this.mediaBuffer)==null?void 0:t.buffered.length)===0?n.removeAllFragments():n.hasParts(e.type)&&(n.detectPartialFragments({frag:e,part:null,stats:e.stats,id:e.type}),n.getState(e)===De.PARTIAL&&n.removeFragment(e))}checkLiveUpdate(e){if(e.updated&&!e.live){const t=e.fragments[e.fragments.length-1];this.fragmentTracker.detectPartialFragments({frag:t,part:null,stats:t.stats,id:t.type})}e.fragments[0]||(e.deltaUpdateFailed=!0)}flushMainBuffer(e,t,n=null){if(!(e-t))return;const i={startOffset:e,endOffset:t,type:n};this.hls.trigger(v.BUFFER_FLUSHING,i)}_loadInitSegment(e,t){this._doFragLoad(e,t).then(n=>{if(!n||this.fragContextChanged(e)||!this.levels)throw new Error("init load aborted");return n}).then(n=>{const{hls:i}=this,{payload:r}=n,s=e.decryptdata;if(r&&r.byteLength>0&&s!=null&&s.key&&s.iv&&s.method==="AES-128"){const o=self.performance.now();return this.decrypter.decrypt(new Uint8Array(r),s.key.buffer,s.iv.buffer).catch(l=>{throw i.trigger(v.ERROR,{type:ie.MEDIA_ERROR,details:O.FRAG_DECRYPT_ERROR,fatal:!1,error:l,reason:l.message,frag:e}),l}).then(l=>{const d=self.performance.now();return i.trigger(v.FRAG_DECRYPTED,{frag:e,payload:l,stats:{tstart:o,tdecrypt:d}}),n.payload=l,this.completeInitSegmentLoad(n)})}return this.completeInitSegmentLoad(n)}).catch(n=>{this.state===G.STOPPED||this.state===G.ERROR||(this.warn(n),this.resetFragmentLoading(e))})}completeInitSegmentLoad(e){const{levels:t}=this;if(!t)throw new Error("init load aborted, missing levels");const n=e.frag.stats;this.state=G.IDLE,e.frag.data=new Uint8Array(e.payload),n.parsing.start=n.buffering.start=self.performance.now(),n.parsing.end=n.buffering.end=self.performance.now(),this.tick()}fragContextChanged(e){const{fragCurrent:t}=this;return!e||!t||e.sn!==t.sn||e.level!==t.level}fragBufferedComplete(e,t){var n,i,r,s;const o=this.mediaBuffer?this.mediaBuffer:this.media;if(this.log(`Buffered ${e.type} sn: ${e.sn}${t?" part: "+t.index:""} of ${this.playlistType===ne.MAIN?"level":"track"} ${e.level} (frag:[${((n=e.startPTS)!=null?n:NaN).toFixed(3)}-${((i=e.endPTS)!=null?i:NaN).toFixed(3)}] > buffer:${o?Kc.toString(Ce.getBuffered(o)):"(detached)"})`),e.sn!=="initSegment"){var l;if(e.type!==ne.SUBTITLE){const c=e.elementaryStreams;if(!Object.keys(c).some(h=>!!c[h])){this.state=G.IDLE;return}}const d=(l=this.levels)==null?void 0:l[e.level];d!=null&&d.fragmentError&&(this.log(`Resetting level fragment error count of ${d.fragmentError} on frag buffered`),d.fragmentError=0)}this.state=G.IDLE,o&&(!this.loadedmetadata&&e.type==ne.MAIN&&o.buffered.length&&((r=this.fragCurrent)==null?void 0:r.sn)===((s=this.fragPrevious)==null?void 0:s.sn)&&(this.loadedmetadata=!0,this.seekToStartPos()),this.tick())}seekToStartPos(){}_handleFragmentLoadComplete(e){const{transmuxer:t}=this;if(!t)return;const{frag:n,part:i,partsLoaded:r}=e,s=!r||r.length===0||r.some(l=>!l),o=new Ji(n.level,n.sn,n.stats.chunkCount+1,0,i?i.index:-1,!s);t.flush(o)}_handleFragmentLoadProgress(e){}_doFragLoad(e,t,n=null,i){var r;const s=t==null?void 0:t.details;if(!this.levels||!s)throw new Error(`frag load aborted, missing level${s?"":" detail"}s`);let o=null;if(e.encrypted&&!((r=e.decryptdata)!=null&&r.key)?(this.log(`Loading key for ${e.sn} of [${s.startSN}-${s.endSN}], ${this.logPrefix==="[stream-controller]"?"level":"track"} ${e.level}`),this.state=G.KEY_LOADING,this.fragCurrent=e,o=this.keyLoader.load(e).then(c=>{if(!this.fragContextChanged(c.frag))return this.hls.trigger(v.KEY_LOADED,c),this.state===G.KEY_LOADING&&(this.state=G.IDLE),c}),this.hls.trigger(v.KEY_LOADING,{frag:e}),this.fragCurrent===null&&(o=Promise.reject(new Error("frag load aborted, context changed in KEY_LOADING")))):!e.encrypted&&s.encryptedFragments.length&&this.keyLoader.loadClear(e,s.encryptedFragments),n=Math.max(e.start,n||0),this.config.lowLatencyMode&&e.sn!=="initSegment"){const c=s.partList;if(c&&i){n>e.end&&s.fragmentHint&&(e=s.fragmentHint);const h=this.getNextPart(c,e,n);if(h>-1){const u=c[h];this.log(`Loading part sn: ${e.sn} p: ${u.index} cc: ${e.cc} of playlist [${s.startSN}-${s.endSN}] parts [0-${h}-${c.length-1}] ${this.logPrefix==="[stream-controller]"?"level":"track"}: ${e.level}, target: ${parseFloat(n.toFixed(3))}`),this.nextLoadPosition=u.start+u.duration,this.state=G.FRAG_LOADING;let m;return o?m=o.then(A=>!A||this.fragContextChanged(A.frag)?null:this.doFragPartsLoad(e,u,t,i)).catch(A=>this.handleFragLoadError(A)):m=this.doFragPartsLoad(e,u,t,i).catch(A=>this.handleFragLoadError(A)),this.hls.trigger(v.FRAG_LOADING,{frag:e,part:u,targetBufferTime:n}),this.fragCurrent===null?Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING parts")):m}else if(!e.url||this.loadedEndOfParts(c,n))return Promise.resolve(null)}}this.log(`Loading fragment ${e.sn} cc: ${e.cc} ${s?"of ["+s.startSN+"-"+s.endSN+"] ":""}${this.logPrefix==="[stream-controller]"?"level":"track"}: ${e.level}, target: ${parseFloat(n.toFixed(3))}`),X(e.sn)&&!this.bitrateTest&&(this.nextLoadPosition=e.start+e.duration),this.state=G.FRAG_LOADING;const l=this.config.progressive;let d;return l&&o?d=o.then(c=>!c||this.fragContextChanged(c==null?void 0:c.frag)?null:this.fragmentLoader.load(e,i)).catch(c=>this.handleFragLoadError(c)):d=Promise.all([this.fragmentLoader.load(e,l?i:void 0),o]).then(([c])=>(!l&&c&&i&&i(c),c)).catch(c=>this.handleFragLoadError(c)),this.hls.trigger(v.FRAG_LOADING,{frag:e,targetBufferTime:n}),this.fragCurrent===null?Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING")):d}doFragPartsLoad(e,t,n,i){return new Promise((r,s)=>{var o;const l=[],d=(o=n.details)==null?void 0:o.partList,c=h=>{this.fragmentLoader.loadPart(e,h,i).then(u=>{l[h.index]=u;const m=u.part;this.hls.trigger(v.FRAG_LOADED,u);const A=Zr(n,e.sn,h.index+1)||sa(d,e.sn,h.index+1);if(A)c(A);else return r({frag:e,part:m,partsLoaded:l})}).catch(s)};c(t)})}handleFragLoadError(e){if("data"in e){const t=e.data;e.data&&t.details===O.INTERNAL_ABORTED?this.handleFragLoadAborted(t.frag,t.part):this.hls.trigger(v.ERROR,t)}else this.hls.trigger(v.ERROR,{type:ie.OTHER_ERROR,details:O.INTERNAL_EXCEPTION,err:e,error:e,fatal:!0});return null}_handleTransmuxerFlush(e){const t=this.getCurrentContext(e);if(!t||this.state!==G.PARSING){!this.fragCurrent&&this.state!==G.STOPPED&&this.state!==G.ERROR&&(this.state=G.IDLE);return}const{frag:n,part:i,level:r}=t,s=self.performance.now();n.stats.parsing.end=s,i&&(i.stats.parsing.end=s),this.updateLevelTiming(n,i,r,e.partial)}getCurrentContext(e){const{levels:t,fragCurrent:n}=this,{level:i,sn:r,part:s}=e;if(!(t!=null&&t[i]))return this.warn(`Levels object was unset while buffering fragment ${r} of level ${i}. The current chunk will not be buffered.`),null;const o=t[i],l=s>-1?Zr(o,r,s):null,d=l?l.fragment:cc(o,r,n);return d?(n&&n!==d&&(d.stats=n.stats),{frag:d,part:l,level:o}):null}bufferFragmentData(e,t,n,i,r){var s;if(!e||this.state!==G.PARSING)return;const{data1:o,data2:l}=e;let d=o;if(o&&l&&(d=ze(o,l)),!((s=d)!=null&&s.length))return;const c={type:e.type,frag:t,part:n,chunkMeta:i,parent:t.type,data:d};if(this.hls.trigger(v.BUFFER_APPENDING,c),e.dropped&&e.independent&&!n){if(r)return;this.flushBufferGap(t)}}flushBufferGap(e){const t=this.media;if(!t)return;if(!Ce.isBuffered(t,t.currentTime)){this.flushMainBuffer(0,e.start);return}const n=t.currentTime,i=Ce.bufferInfo(t,n,0),r=e.duration,s=Math.min(this.config.maxFragLookUpTolerance*2,r*.25),o=Math.max(Math.min(e.start-s,i.end-s),n+s);e.start-o>s&&this.flushMainBuffer(o,e.start)}getFwdBufferInfo(e,t){const n=this.getLoadPosition();return X(n)?this.getFwdBufferInfoAtPos(e,n,t):null}getFwdBufferInfoAtPos(e,t,n){const{config:{maxBufferHole:i}}=this,r=Ce.bufferInfo(e,t,i);if(r.len===0&&r.nextStart!==void 0){const s=this.fragmentTracker.getBufferedFrag(t,n);if(s&&r.nextStart<s.end)return Ce.bufferInfo(e,t,Math.max(r.nextStart,i))}return r}getMaxBufferLength(e){const{config:t}=this;let n;return e?n=Math.max(8*t.maxBufferSize/e,t.maxBufferLength):n=t.maxBufferLength,Math.min(n,t.maxMaxBufferLength)}reduceMaxBufferLength(e,t){const n=this.config,i=Math.max(Math.min(e-t,n.maxBufferLength),t),r=Math.max(e-t*3,n.maxMaxBufferLength/2,i);return r>=i?(n.maxMaxBufferLength=r,this.warn(`Reduce max buffer length to ${r}s`),!0):!1}getAppendedFrag(e,t=ne.MAIN){const n=this.fragmentTracker.getAppendedFrag(e,ne.MAIN);return n&&"fragment"in n?n.fragment:n}getNextFragment(e,t){const n=t.fragments,i=n.length;if(!i)return null;const{config:r}=this,s=n[0].start;let o;if(t.live){const l=r.initialLiveManifestSize;if(i<l)return this.warn(`Not enough fragments to start playback (have: ${i}, need: ${l})`),null;(!t.PTSKnown&&!this.startFragRequested&&this.startPosition===-1||e<s)&&(o=this.getInitialLiveFragment(t,n),this.startPosition=this.nextLoadPosition=o?this.hls.liveSyncPosition||o.start:e)}else e<=s&&(o=n[0]);if(!o){const l=r.lowLatencyMode?t.partEnd:t.fragmentEnd;o=this.getFragmentAtPosition(e,l,t)}return this.mapToInitFragWhenRequired(o)}isLoopLoading(e,t){const n=this.fragmentTracker.getState(e);return(n===De.OK||n===De.PARTIAL&&!!e.gap)&&this.nextLoadPosition>t}getNextFragmentLoopLoading(e,t,n,i,r){const s=e.gap,o=this.getNextFragment(this.nextLoadPosition,t);if(o===null)return o;if(e=o,s&&e&&!e.gap&&n.nextStart){const l=this.getFwdBufferInfoAtPos(this.mediaBuffer?this.mediaBuffer:this.media,n.nextStart,i);if(l!==null&&n.len+l.len>=r)return this.log(`buffer full after gaps in "${i}" playlist starting at sn: ${e.sn}`),null}return e}mapToInitFragWhenRequired(e){return e!=null&&e.initSegment&&!(e!=null&&e.initSegment.data)&&!this.bitrateTest?e.initSegment:e}getNextPart(e,t,n){let i=-1,r=!1,s=!0;for(let o=0,l=e.length;o<l;o++){const d=e[o];if(s=s&&!d.independent,i>-1&&n<d.start)break;const c=d.loaded;c?i=-1:(r||d.independent||s)&&d.fragment===t&&(i=o),r=c}return i}loadedEndOfParts(e,t){const n=e[e.length-1];return n&&t>n.start&&n.loaded}getInitialLiveFragment(e,t){const n=this.fragPrevious;let i=null;if(n){if(e.hasProgramDateTime&&(this.log(`Live playlist, switching playlist, load frag with same PDT: ${n.programDateTime}`),i=hc(t,n.endProgramDateTime,this.config.maxFragLookUpTolerance)),!i){const r=n.sn+1;if(r>=e.startSN&&r<=e.endSN){const s=t[r-e.startSN];n.cc===s.cc&&(i=s,this.log(`Live playlist, switching playlist, load frag with next SN: ${i.sn}`))}i||(i=mc(t,n.cc),i&&this.log(`Live playlist, switching playlist, load frag with same CC: ${i.sn}`))}}else{const r=this.hls.liveSyncPosition;r!==null&&(i=this.getFragmentAtPosition(r,this.bitrateTest?e.fragmentEnd:e.edge,e))}return i}getFragmentAtPosition(e,t,n){const{config:i}=this;let{fragPrevious:r}=this,{fragments:s,endSN:o}=n;const{fragmentHint:l}=n,{maxFragLookUpTolerance:d}=i,c=n.partList,h=!!(i.lowLatencyMode&&c!=null&&c.length&&l);h&&l&&!this.bitrateTest&&(s=s.concat(l),o=l.sn);let u;if(e<t){const m=e>t-d?0:d;u=$n(r,s,e,m)}else u=s[s.length-1];if(u){const m=u.sn-n.startSN,A=this.fragmentTracker.getState(u);if((A===De.OK||A===De.PARTIAL&&u.gap)&&(r=u),r&&u.sn===r.sn&&(!h||c[0].fragment.sn>u.sn)&&r&&u.level===r.level){const g=s[m+1];u.sn<o&&this.fragmentTracker.getState(g)!==De.OK?u=g:u=null}}return u}synchronizeToLiveEdge(e){const{config:t,media:n}=this;if(!n)return;const i=this.hls.liveSyncPosition,r=n.currentTime,s=e.fragments[0].start,o=e.edge,l=r>=s-t.maxFragLookUpTolerance&&r<=o;if(i!==null&&n.duration>i&&(r<i||!l)){const d=t.liveMaxLatencyDuration!==void 0?t.liveMaxLatencyDuration:t.liveMaxLatencyDurationCount*e.targetduration;(!l&&n.readyState<4||r<o-d)&&(this.loadedmetadata||(this.nextLoadPosition=i),n.readyState&&(this.warn(`Playback: ${r.toFixed(3)} is located too far from the end of live sliding playlist: ${o}, reset currentTime to : ${i.toFixed(3)}`),n.currentTime=i))}}alignPlaylists(e,t,n){const i=e.fragments.length;if(!i)return this.warn("No fragments in live playlist"),0;const r=e.fragments[0].start,s=!t,o=e.alignedSliding&&X(r);if(s||!o&&!r){const{fragPrevious:l}=this;Pc(l,n,e);const d=e.fragments[0].start;return this.log(`Live playlist sliding: ${d.toFixed(2)} start-sn: ${t?t.startSN:"na"}->${e.startSN} prev-sn: ${l?l.sn:"na"} fragments: ${i}`),d}return r}waitForCdnTuneIn(e){return e.live&&e.canBlockReload&&e.partTarget&&e.tuneInGoal>Math.max(e.partHoldBack,e.partTarget*3)}setStartPosition(e,t){let n=this.startPosition;if(n<t&&(n=-1),n===-1||this.lastCurrentTime===-1){const i=this.startTimeOffset!==null,r=i?this.startTimeOffset:e.startTimeOffset;r!==null&&X(r)?(n=t+r,r<0&&(n+=e.totalduration),n=Math.min(Math.max(t,n),t+e.totalduration),this.log(`Start time offset ${r} found in ${i?"multivariant":"media"} playlist, adjust startPosition to ${n}`),this.startPosition=n):e.live?n=this.hls.liveSyncPosition||t:this.startPosition=n=0,this.lastCurrentTime=n}this.nextLoadPosition=n}getLoadPosition(){const{media:e}=this;let t=0;return this.loadedmetadata&&e?t=e.currentTime:this.nextLoadPosition&&(t=this.nextLoadPosition),t}handleFragLoadAborted(e,t){this.transmuxer&&e.sn!=="initSegment"&&e.stats.aborted&&(this.warn(`Fragment ${e.sn}${t?" part "+t.index:""} of level ${e.level} was aborted`),this.resetFragmentLoading(e))}resetFragmentLoading(e){(!this.fragCurrent||!this.fragContextChanged(e)&&this.state!==G.FRAG_LOADING_WAITING_RETRY)&&(this.state=G.IDLE)}onFragmentOrKeyLoadError(e,t){if(t.chunkMeta&&!t.frag){const c=this.getCurrentContext(t.chunkMeta);c&&(t.frag=c.frag)}const n=t.frag;if(!n||n.type!==e||!this.levels)return;if(this.fragContextChanged(n)){var i;this.warn(`Frag load error must match current frag to retry ${n.url} > ${(i=this.fragCurrent)==null?void 0:i.url}`);return}const r=t.details===O.FRAG_GAP;r&&this.fragmentTracker.fragBuffered(n,!0);const s=t.errorAction,{action:o,retryCount:l=0,retryConfig:d}=s||{};if(s&&o===Be.RetryRequest&&d){this.resetStartWhenNotLoaded(this.levelLastLoaded);const c=Xi(d,l);this.warn(`Fragment ${n.sn} of ${e} ${n.level} errored with ${t.details}, retrying loading ${l+1}/${d.maxNumRetry} in ${c}ms`),s.resolved=!0,this.retryDate=self.performance.now()+c,this.state=G.FRAG_LOADING_WAITING_RETRY}else if(d&&s)if(this.resetFragmentErrors(e),l<d.maxNumRetry)!r&&o!==Be.RemoveAlternatePermanently&&(s.resolved=!0);else{D.warn(`${t.details} reached or exceeded max retry (${l})`);return}else(s==null?void 0:s.action)===Be.SendAlternateToPenaltyBox?this.state=G.WAITING_LEVEL:this.state=G.ERROR;this.tickImmediate()}reduceLengthAndFlushBuffer(e){if(this.state===G.PARSING||this.state===G.PARSED){const t=e.frag,n=e.parent,i=this.getFwdBufferInfo(this.mediaBuffer,n),r=i&&i.len>.5;r&&this.reduceMaxBufferLength(i.len,(t==null?void 0:t.duration)||10);const s=!r;return s&&this.warn(`Buffer full error while media.currentTime is not buffered, flush ${n} buffer`),t&&(this.fragmentTracker.removeFragment(t),this.nextLoadPosition=t.start),this.resetLoadingState(),s}return!1}resetFragmentErrors(e){e===ne.AUDIO&&(this.fragCurrent=null),this.loadedmetadata||(this.startFragRequested=!1),this.state!==G.STOPPED&&(this.state=G.IDLE)}afterBufferFlushed(e,t,n){if(!e)return;const i=Ce.getBuffered(e);this.fragmentTracker.detectEvictedFragments(t,i,n),this.state===G.ENDED&&this.resetLoadingState()}resetLoadingState(){this.log("Reset loading state"),this.fragCurrent=null,this.fragPrevious=null,this.state=G.IDLE}resetStartWhenNotLoaded(e){if(!this.loadedmetadata){this.startFragRequested=!1;const t=e?e.details:null;t!=null&&t.live?(this.startPosition=-1,this.setStartPosition(t,0),this.resetLoadingState()):this.nextLoadPosition=this.startPosition}}resetWhenMissingContext(e){this.warn(`The loading context changed while buffering fragment ${e.sn} of level ${e.level}. This chunk will not be buffered.`),this.removeUnbufferedFrags(),this.resetStartWhenNotLoaded(this.levelLastLoaded),this.resetLoadingState()}removeUnbufferedFrags(e=0){this.fragmentTracker.removeFragmentsInRange(e,1/0,this.playlistType,!1,!0)}updateLevelTiming(e,t,n,i){var r;const s=n.details;if(!s){this.warn("level.details undefined");return}if(!Object.keys(e.elementaryStreams).reduce((l,d)=>{const c=e.elementaryStreams[d];if(c){const h=c.endPTS-c.startPTS;if(h<=0)return this.warn(`Could not parse fragment ${e.sn} ${d} duration reliably (${h})`),l||!1;const u=i?0:ia(s,e,c.startPTS,c.endPTS,c.startDTS,c.endDTS);return this.hls.trigger(v.LEVEL_PTS_UPDATED,{details:s,level:n,drift:u,type:d,frag:e,start:c.startPTS,end:c.endPTS}),!0}return l},!1)&&((r=this.transmuxer)==null?void 0:r.error)===null){const l=new Error(`Found no media in fragment ${e.sn} of level ${e.level} resetting transmuxer to fallback to playlist timing`);if(n.fragmentError===0&&(n.fragmentError++,e.gap=!0,this.fragmentTracker.removeFragment(e),this.fragmentTracker.fragBuffered(e,!0)),this.warn(l.message),this.hls.trigger(v.ERROR,{type:ie.MEDIA_ERROR,details:O.FRAG_PARSING_ERROR,fatal:!1,error:l,frag:e,reason:`Found no media in msn ${e.sn} of level "${n.url}"`}),!this.hls)return;this.resetTransmuxer()}this.state=G.PARSED,this.hls.trigger(v.FRAG_PARSED,{frag:e,part:t})}resetTransmuxer(){this.transmuxer&&(this.transmuxer.destroy(),this.transmuxer=null)}recoverWorkerError(e){e.event==="demuxerWorker"&&(this.fragmentTracker.removeAllFragments(),this.resetTransmuxer(),this.resetStartWhenNotLoaded(this.levelLastLoaded),this.resetLoadingState())}set state(e){const t=this._state;t!==e&&(this._state=e,this.log(`${t}->${e}`))}get state(){return this._state}}class ca{constructor(){this.chunks=[],this.dataLength=0}push(e){this.chunks.push(e),this.dataLength+=e.length}flush(){const{chunks:e,dataLength:t}=this;let n;if(e.length)e.length===1?n=e[0]:n=Hc(e,t);else return new Uint8Array(0);return this.reset(),n}reset(){this.chunks.length=0,this.dataLength=0}}function Hc(a,e){const t=new Uint8Array(e);let n=0;for(let i=0;i<a.length;i++){const r=a[i];t.set(r,n),n+=r.length}return t}function qc(){return typeof __HLS_WORKER_BUNDLE__=="function"}function zc(){const a=new self.Blob([`var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(${__HLS_WORKER_BUNDLE__.toString()})(true);`],{type:"text/javascript"}),e=self.URL.createObjectURL(a);return{worker:new self.Worker(e),objectURL:e}}function Yc(a){const e=new self.URL(a,self.location.href).href;return{worker:new self.Worker(e),scriptURL:e}}function tt(a="",e=9e4){return{type:a,id:-1,pid:-1,inputTimeScale:e,sequenceNumber:-1,samples:[],dropped:0}}class nr{constructor(){this._audioTrack=void 0,this._id3Track=void 0,this.frameIndex=0,this.cachedData=null,this.basePTS=null,this.initPTS=null,this.lastPTS=null}resetInitSegment(e,t,n,i){this._id3Track={type:"id3",id:3,pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0}}resetTimeStamp(e){this.initPTS=e,this.resetContiguity()}resetContiguity(){this.basePTS=null,this.lastPTS=null,this.frameIndex=0}canParse(e,t){return!1}appendFrame(e,t,n){}demux(e,t){this.cachedData&&(e=ze(this.cachedData,e),this.cachedData=null);let n=Jt(e,0),i=n?n.length:0,r;const s=this._audioTrack,o=this._id3Track,l=n?Qi(n):void 0,d=e.length;for((this.basePTS===null||this.frameIndex===0&&X(l))&&(this.basePTS=Vc(l,t,this.initPTS),this.lastPTS=this.basePTS),this.lastPTS===null&&(this.lastPTS=this.basePTS),n&&n.length>0&&o.samples.push({pts:this.lastPTS,dts:this.lastPTS,data:n,type:je.audioId3,duration:Number.POSITIVE_INFINITY});i<d;){if(this.canParse(e,i)){const c=this.appendFrame(s,e,i);c?(this.frameIndex++,this.lastPTS=c.sample.pts,i+=c.length,r=i):i=d}else fd(e,i)?(n=Jt(e,i),o.samples.push({pts:this.lastPTS,dts:this.lastPTS,data:n,type:je.audioId3,duration:Number.POSITIVE_INFINITY}),i+=n.length,r=i):i++;if(i===d&&r!==d){const c=Rt(e,r);this.cachedData?this.cachedData=ze(this.cachedData,c):this.cachedData=c}}return{audioTrack:s,videoTrack:tt(),id3Track:o,textTrack:tt()}}demuxSampleAes(e,t,n){return Promise.reject(new Error(`[${this}] This demuxer does not support Sample-AES decryption`))}flush(e){const t=this.cachedData;return t&&(this.cachedData=null,this.demux(t,0)),{audioTrack:this._audioTrack,videoTrack:tt(),id3Track:this._id3Track,textTrack:tt()}}destroy(){}}const Vc=(a,e,t)=>{if(X(a))return a*90;const n=t?t.baseTime*9e4/t.timescale:0;return e*9e4+n};function Wc(a,e,t,n){let i,r,s,o;const l=navigator.userAgent.toLowerCase(),d=n,c=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];i=((e[t+2]&192)>>>6)+1;const h=(e[t+2]&60)>>>2;if(h>c.length-1){const u=new Error(`invalid ADTS sampling index:${h}`);a.emit(v.ERROR,v.ERROR,{type:ie.MEDIA_ERROR,details:O.FRAG_PARSING_ERROR,fatal:!0,error:u,reason:u.message});return}return s=(e[t+2]&1)<<2,s|=(e[t+3]&192)>>>6,D.log(`manifest codec:${n}, ADTS type:${i}, samplingIndex:${h}`),/firefox/i.test(l)?h>=6?(i=5,o=new Array(4),r=h-3):(i=2,o=new Array(2),r=h):l.indexOf("android")!==-1?(i=2,o=new Array(2),r=h):(i=5,o=new Array(4),n&&(n.indexOf("mp4a.40.29")!==-1||n.indexOf("mp4a.40.5")!==-1)||!n&&h>=6?r=h-3:((n&&n.indexOf("mp4a.40.2")!==-1&&(h>=6&&s===1||/vivaldi/i.test(l))||!n&&s===1)&&(i=2,o=new Array(2)),r=h)),o[0]=i<<3,o[0]|=(h&14)>>1,o[1]|=(h&1)<<7,o[1]|=s<<3,i===5&&(o[1]|=(r&14)>>1,o[2]=(r&1)<<7,o[2]|=8,o[3]=0),{config:o,samplerate:c[h],channelCount:s,codec:"mp4a.40."+i,manifestCodec:d}}function ua(a,e){return a[e]===255&&(a[e+1]&246)===240}function ha(a,e){return a[e+1]&1?7:9}function ir(a,e){return(a[e+3]&3)<<11|a[e+4]<<3|(a[e+5]&224)>>>5}function jc(a,e){return e+5<a.length}function Kn(a,e){return e+1<a.length&&ua(a,e)}function Qc(a,e){return jc(a,e)&&ua(a,e)&&ir(a,e)<=a.length-e}function Xc(a,e){if(Kn(a,e)){const t=ha(a,e);if(e+t>=a.length)return!1;const n=ir(a,e);if(n<=t)return!1;const i=e+n;return i===a.length||Kn(a,i)}return!1}function pa(a,e,t,n,i){if(!a.samplerate){const r=Wc(e,t,n,i);if(!r)return;a.config=r.config,a.samplerate=r.samplerate,a.channelCount=r.channelCount,a.codec=r.codec,a.manifestCodec=r.manifestCodec,D.log(`parsed codec:${a.codec}, rate:${r.samplerate}, channels:${r.channelCount}`)}}function fa(a){return 1024*9e4/a}function Zc(a,e){const t=ha(a,e);if(e+t<=a.length){const n=ir(a,e)-t;if(n>0)return{headerLength:t,frameLength:n}}}function ma(a,e,t,n,i){const r=fa(a.samplerate),s=n+i*r,o=Zc(e,t);let l;if(o){const{frameLength:h,headerLength:u}=o,m=u+h,A=Math.max(0,t+m-e.length);A?(l=new Uint8Array(m-u),l.set(e.subarray(t+u,e.length),0)):l=e.subarray(t+u,t+m);const f={unit:l,pts:s};return A||a.samples.push(f),{sample:f,length:m,missing:A}}const d=e.length-t;return l=new Uint8Array(d),l.set(e.subarray(t,e.length),0),{sample:{unit:l,pts:s},length:d,missing:-1}}let bn=null;const Jc=[32,64,96,128,160,192,224,256,288,320,352,384,416,448,32,48,56,64,80,96,112,128,160,192,224,256,320,384,32,40,48,56,64,80,96,112,128,160,192,224,256,320,32,48,56,64,80,96,112,128,144,160,176,192,224,256,8,16,24,32,40,48,56,64,80,96,112,128,144,160],eu=[44100,48e3,32e3,22050,24e3,16e3,11025,12e3,8e3],tu=[[0,72,144,12],[0,0,0,0],[0,72,144,12],[0,144,144,12]],nu=[0,1,1,4];function Aa(a,e,t,n,i){if(t+24>e.length)return;const r=ga(e,t);if(r&&t+r.frameLength<=e.length){const s=r.samplesPerFrame*9e4/r.sampleRate,o=n+i*s,l={unit:e.subarray(t,t+r.frameLength),pts:o,dts:o};return a.config=[],a.channelCount=r.channelCount,a.samplerate=r.sampleRate,a.samples.push(l),{sample:l,length:r.frameLength,missing:0}}}function ga(a,e){const t=a[e+1]>>3&3,n=a[e+1]>>1&3,i=a[e+2]>>4&15,r=a[e+2]>>2&3;if(t!==1&&i!==0&&i!==15&&r!==3){const s=a[e+2]>>1&1,o=a[e+3]>>6,l=t===3?3-n:n===3?3:4,d=Jc[l*14+i-1]*1e3,h=eu[(t===3?0:t===2?1:2)*3+r],u=o===3?1:2,m=tu[t][n],A=nu[n],f=m*8*A,g=Math.floor(m*d/h+s)*A;if(bn===null){const S=(navigator.userAgent||"").match(/Chrome\/(\d+)/i);bn=S?parseInt(S[1]):0}return!!bn&&bn<=87&&n===2&&d>=224e3&&o===0&&(a[e+3]=a[e+3]|128),{sampleRate:h,channelCount:u,frameLength:g,samplesPerFrame:f}}}function rr(a,e){return a[e]===255&&(a[e+1]&224)===224&&(a[e+1]&6)!==0}function ya(a,e){return e+1<a.length&&rr(a,e)}function iu(a,e){return rr(a,e)&&4<=a.length-e}function ba(a,e){if(e+1<a.length&&rr(a,e)){const n=ga(a,e);let i=4;n!=null&&n.frameLength&&(i=n.frameLength);const r=e+i;return r===a.length||ya(a,r)}return!1}class ru extends nr{constructor(e,t){super(),this.observer=void 0,this.config=void 0,this.observer=e,this.config=t}resetInitSegment(e,t,n,i){super.resetInitSegment(e,t,n,i),this._audioTrack={container:"audio/adts",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"aac",samples:[],manifestCodec:t,duration:i,inputTimeScale:9e4,dropped:0}}static probe(e){if(!e)return!1;const t=Jt(e,0);let n=(t==null?void 0:t.length)||0;if(ba(e,n))return!1;for(let i=e.length;n<i;n++)if(Xc(e,n))return D.log("ADTS sync word found !"),!0;return!1}canParse(e,t){return Qc(e,t)}appendFrame(e,t,n){pa(e,this.observer,t,n,e.manifestCodec);const i=ma(e,t,n,this.basePTS,this.frameIndex);if(i&&i.missing===0)return i}}const su=/\/emsg[-/]ID3/i;class au{constructor(e,t){this.remainderData=null,this.timeOffset=0,this.config=void 0,this.videoTrack=void 0,this.audioTrack=void 0,this.id3Track=void 0,this.txtTrack=void 0,this.config=t}resetTimeStamp(){}resetInitSegment(e,t,n,i){const r=this.videoTrack=tt("video",1),s=this.audioTrack=tt("audio",1),o=this.txtTrack=tt("text",1);if(this.id3Track=tt("id3",1),this.timeOffset=0,!(e!=null&&e.byteLength))return;const l=js(e);if(l.video){const{id:d,timescale:c,codec:h}=l.video;r.id=d,r.timescale=o.timescale=c,r.codec=h}if(l.audio){const{id:d,timescale:c,codec:h}=l.audio;s.id=d,s.timescale=c,s.codec=h}o.id=Ys.text,r.sampleDuration=0,r.duration=s.duration=i}resetContiguity(){this.remainderData=null}static probe(e){return Cd(e)}demux(e,t){this.timeOffset=t;let n=e;const i=this.videoTrack,r=this.txtTrack;if(this.config.progressive){this.remainderData&&(n=ze(this.remainderData,e));const o=Dd(n);this.remainderData=o.remainder,i.samples=o.valid||new Uint8Array}else i.samples=n;const s=this.extractID3Track(i,t);return r.samples=Br(t,i),{videoTrack:i,audioTrack:this.audioTrack,id3Track:s,textTrack:this.txtTrack}}flush(){const e=this.timeOffset,t=this.videoTrack,n=this.txtTrack;t.samples=this.remainderData||new Uint8Array,this.remainderData=null;const i=this.extractID3Track(t,this.timeOffset);return n.samples=Br(e,t),{videoTrack:t,audioTrack:tt(),id3Track:i,textTrack:tt()}}extractID3Track(e,t){const n=this.id3Track;if(e.samples.length){const i=se(e.samples,["emsg"]);i&&i.forEach(r=>{const s=Pd(r);if(su.test(s.schemeIdUri)){const o=X(s.presentationTime)?s.presentationTime/s.timeScale:t+s.presentationTimeDelta/s.timeScale;let l=s.eventDuration===4294967295?Number.POSITIVE_INFINITY:s.eventDuration/s.timeScale;l<=.001&&(l=Number.POSITIVE_INFINITY);const d=s.payload;n.samples.push({data:d,len:d.byteLength,dts:o,pts:o,type:je.emsg,duration:l})}})}return n}demuxSampleAes(e,t,n){return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"))}destroy(){}}const va=(a,e)=>{let t=0,n=5;e+=n;const i=new Uint32Array(1),r=new Uint32Array(1),s=new Uint8Array(1);for(;n>0;){s[0]=a[e];const o=Math.min(n,8),l=8-o;r[0]=4278190080>>>24+l<<l,i[0]=(s[0]&r[0])>>l,t=t?t<<o|i[0]:i[0],e+=1,n-=o}return t};class ou extends nr{constructor(e){super(),this.observer=void 0,this.observer=e}resetInitSegment(e,t,n,i){super.resetInitSegment(e,t,n,i),this._audioTrack={container:"audio/ac-3",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"ac3",samples:[],manifestCodec:t,duration:i,inputTimeScale:9e4,dropped:0}}canParse(e,t){return t+64<e.length}appendFrame(e,t,n){const i=Ea(e,t,n,this.basePTS,this.frameIndex);if(i!==-1)return{sample:e.samples[e.samples.length-1],length:i,missing:0}}static probe(e){if(!e)return!1;const t=Jt(e,0);if(!t)return!1;const n=t.length;return e[n]===11&&e[n+1]===119&&Qi(t)!==void 0&&va(e,n)<16}}function Ea(a,e,t,n,i){if(t+8>e.length||e[t]!==11||e[t+1]!==119)return-1;const r=e[t+4]>>6;if(r>=3)return-1;const o=[48e3,44100,32e3][r],l=e[t+4]&63,c=[64,69,96,64,70,96,80,87,120,80,88,120,96,104,144,96,105,144,112,121,168,112,122,168,128,139,192,128,140,192,160,174,240,160,175,240,192,208,288,192,209,288,224,243,336,224,244,336,256,278,384,256,279,384,320,348,480,320,349,480,384,417,576,384,418,576,448,487,672,448,488,672,512,557,768,512,558,768,640,696,960,640,697,960,768,835,1152,768,836,1152,896,975,1344,896,976,1344,1024,1114,1536,1024,1115,1536,1152,1253,1728,1152,1254,1728,1280,1393,1920,1280,1394,1920][l*3+r]*2;if(t+c>e.length)return-1;const h=e[t+6]>>5;let u=0;h===2?u+=2:(h&1&&h!==1&&(u+=2),h&4&&(u+=2));const m=(e[t+6]<<8|e[t+7])>>12-u&1,f=[2,1,2,3,3,4,4,5][h]+m,g=e[t+5]>>3,C=e[t+5]&7,T=new Uint8Array([r<<6|g<<1|C>>2,(C&3)<<6|h<<3|m<<2|l>>4,l<<4&224]),S=1536/o*9e4,k=n+i*S,I=e.subarray(t,t+c);return a.config=T,a.channelCount=f,a.samplerate=o,a.samples.push({unit:I,pts:k}),c}class lu{constructor(){this.VideoSample=null}createVideoSample(e,t,n,i){return{key:e,frame:!1,pts:t,dts:n,units:[],debug:i,length:0}}getLastNalUnit(e){var t;let n=this.VideoSample,i;if((!n||n.units.length===0)&&(n=e[e.length-1]),(t=n)!=null&&t.units){const r=n.units;i=r[r.length-1]}return i}pushAccessUnit(e,t){if(e.units.length&&e.frame){if(e.pts===void 0){const n=t.samples,i=n.length;if(i){const r=n[i-1];e.pts=r.pts,e.dts=r.dts}else{t.dropped++;return}}t.samples.push(e)}e.debug.length&&D.log(e.pts+"/"+e.dts+":"+e.debug)}}class os{constructor(e){this.data=void 0,this.bytesAvailable=void 0,this.word=void 0,this.bitsAvailable=void 0,this.data=e,this.bytesAvailable=e.byteLength,this.word=0,this.bitsAvailable=0}loadWord(){const e=this.data,t=this.bytesAvailable,n=e.byteLength-t,i=new Uint8Array(4),r=Math.min(4,t);if(r===0)throw new Error("no bytes available");i.set(e.subarray(n,n+r)),this.word=new DataView(i.buffer).getUint32(0),this.bitsAvailable=r*8,this.bytesAvailable-=r}skipBits(e){let t;e=Math.min(e,this.bytesAvailable*8+this.bitsAvailable),this.bitsAvailable>e?(this.word<<=e,this.bitsAvailable-=e):(e-=this.bitsAvailable,t=e>>3,e-=t<<3,this.bytesAvailable-=t,this.loadWord(),this.word<<=e,this.bitsAvailable-=e)}readBits(e){let t=Math.min(this.bitsAvailable,e);const n=this.word>>>32-t;if(e>32&&D.error("Cannot read more than 32 bits at a time"),this.bitsAvailable-=t,this.bitsAvailable>0)this.word<<=t;else if(this.bytesAvailable>0)this.loadWord();else throw new Error("no bits available");return t=e-t,t>0&&this.bitsAvailable?n<<t|this.readBits(t):n}skipLZ(){let e;for(e=0;e<this.bitsAvailable;++e)if(this.word&2147483648>>>e)return this.word<<=e,this.bitsAvailable-=e,e;return this.loadWord(),e+this.skipLZ()}skipUEG(){this.skipBits(1+this.skipLZ())}skipEG(){this.skipBits(1+this.skipLZ())}readUEG(){const e=this.skipLZ();return this.readBits(e+1)-1}readEG(){const e=this.readUEG();return 1&e?1+e>>>1:-1*(e>>>1)}readBoolean(){return this.readBits(1)===1}readUByte(){return this.readBits(8)}readUShort(){return this.readBits(16)}readUInt(){return this.readBits(32)}skipScalingList(e){let t=8,n=8,i;for(let r=0;r<e;r++)n!==0&&(i=this.readEG(),n=(t+i+256)%256),t=n===0?t:n}readSPS(){let e=0,t=0,n=0,i=0,r,s,o;const l=this.readUByte.bind(this),d=this.readBits.bind(this),c=this.readUEG.bind(this),h=this.readBoolean.bind(this),u=this.skipBits.bind(this),m=this.skipEG.bind(this),A=this.skipUEG.bind(this),f=this.skipScalingList.bind(this);l();const g=l();if(d(5),u(3),l(),A(),g===100||g===110||g===122||g===244||g===44||g===83||g===86||g===118||g===128){const P=c();if(P===3&&u(1),A(),A(),u(1),h())for(s=P!==3?8:12,o=0;o<s;o++)h()&&(o<6?f(16):f(64))}A();const C=c();if(C===0)c();else if(C===1)for(u(1),m(),m(),r=c(),o=0;o<r;o++)m();A(),u(1);const T=c(),S=c(),k=d(1);k===0&&u(1),u(1),h()&&(e=c(),t=c(),n=c(),i=c());let I=[1,1];if(h()&&h())switch(l()){case 1:I=[1,1];break;case 2:I=[12,11];break;case 3:I=[10,11];break;case 4:I=[16,11];break;case 5:I=[40,33];break;case 6:I=[24,11];break;case 7:I=[20,11];break;case 8:I=[32,11];break;case 9:I=[80,33];break;case 10:I=[18,11];break;case 11:I=[15,11];break;case 12:I=[64,33];break;case 13:I=[160,99];break;case 14:I=[4,3];break;case 15:I=[3,2];break;case 16:I=[2,1];break;case 255:{I=[l()<<8|l(),l()<<8|l()];break}}return{width:Math.ceil((T+1)*16-e*2-t*2),height:(2-k)*(S+1)*16-(k?2:4)*(n+i),pixelRatio:I}}readSliceType(){return this.readUByte(),this.readUEG(),this.readUEG()}}class du extends lu{parseAVCPES(e,t,n,i,r){const s=this.parseAVCNALu(e,n.data);let o=this.VideoSample,l,d=!1;n.data=null,o&&s.length&&!e.audFound&&(this.pushAccessUnit(o,e),o=this.VideoSample=this.createVideoSample(!1,n.pts,n.dts,"")),s.forEach(c=>{var h;switch(c.type){case 1:{let f=!1;l=!0;const g=c.data;if(d&&g.length>4){const C=new os(g).readSliceType();(C===2||C===4||C===7||C===9)&&(f=!0)}if(f){var u;(u=o)!=null&&u.frame&&!o.key&&(this.pushAccessUnit(o,e),o=this.VideoSample=null)}o||(o=this.VideoSample=this.createVideoSample(!0,n.pts,n.dts,"")),o.frame=!0,o.key=f;break}case 5:l=!0,(h=o)!=null&&h.frame&&!o.key&&(this.pushAccessUnit(o,e),o=this.VideoSample=null),o||(o=this.VideoSample=this.createVideoSample(!0,n.pts,n.dts,"")),o.key=!0,o.frame=!0;break;case 6:{l=!0,Xs(c.data,1,n.pts,t.samples);break}case 7:{var m,A;l=!0,d=!0;const f=c.data,C=new os(f).readSPS();if(!e.sps||e.width!==C.width||e.height!==C.height||((m=e.pixelRatio)==null?void 0:m[0])!==C.pixelRatio[0]||((A=e.pixelRatio)==null?void 0:A[1])!==C.pixelRatio[1]){e.width=C.width,e.height=C.height,e.pixelRatio=C.pixelRatio,e.sps=[f],e.duration=r;const T=f.subarray(1,4);let S="avc1.";for(let k=0;k<3;k++){let I=T[k].toString(16);I.length<2&&(I="0"+I),S+=I}e.codec=S}break}case 8:l=!0,e.pps=[c.data];break;case 9:l=!0,e.audFound=!0,o&&this.pushAccessUnit(o,e),o=this.VideoSample=this.createVideoSample(!1,n.pts,n.dts,"");break;case 12:l=!0;break;default:l=!1,o&&(o.debug+="unknown NAL "+c.type+" ");break}o&&l&&o.units.push(c)}),i&&o&&(this.pushAccessUnit(o,e),this.VideoSample=null)}parseAVCNALu(e,t){const n=t.byteLength;let i=e.naluState||0;const r=i,s=[];let o=0,l,d,c,h=-1,u=0;for(i===-1&&(h=0,u=t[0]&31,i=0,o=1);o<n;){if(l=t[o++],!i){i=l?0:1;continue}if(i===1){i=l?0:2;continue}if(!l)i=3;else if(l===1){if(d=o-i-1,h>=0){const m={data:t.subarray(h,d),type:u};s.push(m)}else{const m=this.getLastNalUnit(e.samples);m&&(r&&o<=4-r&&m.state&&(m.data=m.data.subarray(0,m.data.byteLength-r)),d>0&&(m.data=ze(m.data,t.subarray(0,d)),m.state=0))}o<n?(c=t[o]&31,h=o,u=c,i=0):i=-1}else i=0}if(h>=0&&i>=0){const m={data:t.subarray(h,n),type:u,state:i};s.push(m)}if(s.length===0){const m=this.getLastNalUnit(e.samples);m&&(m.data=ze(m.data,t))}return e.naluState=i,s}}class cu{constructor(e,t,n){this.keyData=void 0,this.decrypter=void 0,this.keyData=n,this.decrypter=new er(t,{removePKCS7Padding:!1})}decryptBuffer(e){return this.decrypter.decrypt(e,this.keyData.key.buffer,this.keyData.iv.buffer)}decryptAacSample(e,t,n){const i=e[t].unit;if(i.length<=16)return;const r=i.subarray(16,i.length-i.length%16),s=r.buffer.slice(r.byteOffset,r.byteOffset+r.length);this.decryptBuffer(s).then(o=>{const l=new Uint8Array(o);i.set(l,16),this.decrypter.isSync()||this.decryptAacSamples(e,t+1,n)})}decryptAacSamples(e,t,n){for(;;t++){if(t>=e.length){n();return}if(!(e[t].unit.length<32)&&(this.decryptAacSample(e,t,n),!this.decrypter.isSync()))return}}getAvcEncryptedData(e){const t=Math.floor((e.length-48)/160)*16+16,n=new Int8Array(t);let i=0;for(let r=32;r<e.length-16;r+=160,i+=16)n.set(e.subarray(r,r+16),i);return n}getAvcDecryptedUnit(e,t){const n=new Uint8Array(t);let i=0;for(let r=32;r<e.length-16;r+=160,i+=16)e.set(n.subarray(i,i+16),r);return e}decryptAvcSample(e,t,n,i,r){const s=Zs(r.data),o=this.getAvcEncryptedData(s);this.decryptBuffer(o.buffer).then(l=>{r.data=this.getAvcDecryptedUnit(s,l),this.decrypter.isSync()||this.decryptAvcSamples(e,t,n+1,i)})}decryptAvcSamples(e,t,n,i){if(e instanceof Uint8Array)throw new Error("Cannot decrypt samples of type Uint8Array");for(;;t++,n=0){if(t>=e.length){i();return}const r=e[t].units;for(;!(n>=r.length);n++){const s=r[n];if(!(s.data.length<=48||s.type!==1&&s.type!==5)&&(this.decryptAvcSample(e,t,n,i,s),!this.decrypter.isSync()))return}}}}const Re=188;class vt{constructor(e,t,n){this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.sampleAes=null,this.pmtParsed=!1,this.audioCodec=void 0,this.videoCodec=void 0,this._duration=0,this._pmtId=-1,this._videoTrack=void 0,this._audioTrack=void 0,this._id3Track=void 0,this._txtTrack=void 0,this.aacOverFlow=null,this.remainderData=null,this.videoParser=void 0,this.observer=e,this.config=t,this.typeSupported=n,this.videoParser=new du}static probe(e){const t=vt.syncOffset(e);return t>0&&D.warn(`MPEG2-TS detected but first sync word found @ offset ${t}`),t!==-1}static syncOffset(e){const t=e.length;let n=Math.min(Re*5,t-Re)+1,i=0;for(;i<n;){let r=!1,s=-1,o=0;for(let l=i;l<t;l+=Re)if(e[l]===71&&(t-l===Re||e[l+Re]===71)){if(o++,s===-1&&(s=l,s!==0&&(n=Math.min(s+Re*99,e.length-Re)+1)),r||(r=Ui(e,l)===0),r&&o>1&&(s===0&&o>2||l+Re>n))return s}else{if(o)return-1;break}i++}return-1}static createTrack(e,t){return{container:e==="video"||e==="audio"?"video/mp2t":void 0,type:e,id:Ys[e],pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0,duration:e==="audio"?t:void 0}}resetInitSegment(e,t,n,i){this.pmtParsed=!1,this._pmtId=-1,this._videoTrack=vt.createTrack("video"),this._audioTrack=vt.createTrack("audio",i),this._id3Track=vt.createTrack("id3"),this._txtTrack=vt.createTrack("text"),this._audioTrack.segmentCodec="aac",this.aacOverFlow=null,this.remainderData=null,this.audioCodec=t,this.videoCodec=n,this._duration=i}resetTimeStamp(){}resetContiguity(){const{_audioTrack:e,_videoTrack:t,_id3Track:n}=this;e&&(e.pesData=null),t&&(t.pesData=null),n&&(n.pesData=null),this.aacOverFlow=null,this.remainderData=null}demux(e,t,n=!1,i=!1){n||(this.sampleAes=null);let r;const s=this._videoTrack,o=this._audioTrack,l=this._id3Track,d=this._txtTrack;let c=s.pid,h=s.pesData,u=o.pid,m=l.pid,A=o.pesData,f=l.pesData,g=null,C=this.pmtParsed,T=this._pmtId,S=e.length;if(this.remainderData&&(e=ze(this.remainderData,e),S=e.length,this.remainderData=null),S<Re&&!i)return this.remainderData=e,{audioTrack:o,videoTrack:s,id3Track:l,textTrack:d};const k=Math.max(0,vt.syncOffset(e));S-=(S-k)%Re,S<e.byteLength&&!i&&(this.remainderData=new Uint8Array(e.buffer,S,e.buffer.byteLength-S));let I=0;for(let _=k;_<S;_+=Re)if(e[_]===71){const N=!!(e[_+1]&64),U=Ui(e,_),F=(e[_+3]&48)>>4;let $;if(F>1){if($=_+5+e[_+4],$===_+Re)continue}else $=_+4;switch(U){case c:N&&(h&&(r=Nt(h))&&this.videoParser.parseAVCPES(s,d,r,!1,this._duration),h={data:[],size:0}),h&&(h.data.push(e.subarray($,_+Re)),h.size+=_+Re-$);break;case u:if(N){if(A&&(r=Nt(A)))switch(o.segmentCodec){case"aac":this.parseAACPES(o,r);break;case"mp3":this.parseMPEGPES(o,r);break;case"ac3":this.parseAC3PES(o,r);break}A={data:[],size:0}}A&&(A.data.push(e.subarray($,_+Re)),A.size+=_+Re-$);break;case m:N&&(f&&(r=Nt(f))&&this.parseID3PES(l,r),f={data:[],size:0}),f&&(f.data.push(e.subarray($,_+Re)),f.size+=_+Re-$);break;case 0:N&&($+=e[$]+1),T=this._pmtId=uu(e,$);break;case T:{N&&($+=e[$]+1);const H=hu(e,$,this.typeSupported,n,this.observer);c=H.videoPid,c>0&&(s.pid=c,s.segmentCodec=H.segmentVideoCodec),u=H.audioPid,u>0&&(o.pid=u,o.segmentCodec=H.segmentAudioCodec),m=H.id3Pid,m>0&&(l.pid=m),g!==null&&!C&&(D.warn(`MPEG-TS PMT found at ${_} after unknown PID '${g}'. Backtracking to sync byte @${k} to parse all TS packets.`),g=null,_=k-188),C=this.pmtParsed=!0;break}case 17:case 8191:break;default:g=U;break}}else I++;I>0&&Hn(this.observer,new Error(`Found ${I} TS packet/s that do not start with 0x47`)),s.pesData=h,o.pesData=A,l.pesData=f;const P={audioTrack:o,videoTrack:s,id3Track:l,textTrack:d};return i&&this.extractRemainingSamples(P),P}flush(){const{remainderData:e}=this;this.remainderData=null;let t;return e?t=this.demux(e,-1,!1,!0):t={videoTrack:this._videoTrack,audioTrack:this._audioTrack,id3Track:this._id3Track,textTrack:this._txtTrack},this.extractRemainingSamples(t),this.sampleAes?this.decrypt(t,this.sampleAes):t}extractRemainingSamples(e){const{audioTrack:t,videoTrack:n,id3Track:i,textTrack:r}=e,s=n.pesData,o=t.pesData,l=i.pesData;let d;if(s&&(d=Nt(s))?(this.videoParser.parseAVCPES(n,r,d,!0,this._duration),n.pesData=null):n.pesData=s,o&&(d=Nt(o))){switch(t.segmentCodec){case"aac":this.parseAACPES(t,d);break;case"mp3":this.parseMPEGPES(t,d);break;case"ac3":this.parseAC3PES(t,d);break}t.pesData=null}else o!=null&&o.size&&D.log("last AAC PES packet truncated,might overlap between fragments"),t.pesData=o;l&&(d=Nt(l))?(this.parseID3PES(i,d),i.pesData=null):i.pesData=l}demuxSampleAes(e,t,n){const i=this.demux(e,n,!0,!this.config.progressive),r=this.sampleAes=new cu(this.observer,this.config,t);return this.decrypt(i,r)}decrypt(e,t){return new Promise(n=>{const{audioTrack:i,videoTrack:r}=e;i.samples&&i.segmentCodec==="aac"?t.decryptAacSamples(i.samples,0,()=>{r.samples?t.decryptAvcSamples(r.samples,0,0,()=>{n(e)}):n(e)}):r.samples&&t.decryptAvcSamples(r.samples,0,0,()=>{n(e)})})}destroy(){this._duration=0}parseAACPES(e,t){let n=0;const i=this.aacOverFlow;let r=t.data;if(i){this.aacOverFlow=null;const h=i.missing,u=i.sample.unit.byteLength;if(h===-1)r=ze(i.sample.unit,r);else{const m=u-h;i.sample.unit.set(r.subarray(0,h),m),e.samples.push(i.sample),n=i.missing}}let s,o;for(s=n,o=r.length;s<o-1&&!Kn(r,s);s++);if(s!==n){let h;const u=s<o-1;if(u?h=`AAC PES did not start with ADTS header,offset:${s}`:h="No ADTS header found in AAC PES",Hn(this.observer,new Error(h),u),!u)return}pa(e,this.observer,r,s,this.audioCodec);let l;if(t.pts!==void 0)l=t.pts;else if(i){const h=fa(e.samplerate);l=i.sample.pts+h}else{D.warn("[tsdemuxer]: AAC PES unknown PTS");return}let d=0,c;for(;s<o;)if(c=ma(e,r,s,l,d),s+=c.length,c.missing){this.aacOverFlow=c;break}else for(d++;s<o-1&&!Kn(r,s);s++);}parseMPEGPES(e,t){const n=t.data,i=n.length;let r=0,s=0;const o=t.pts;if(o===void 0){D.warn("[tsdemuxer]: MPEG PES unknown PTS");return}for(;s<i;)if(ya(n,s)){const l=Aa(e,n,s,o,r);if(l)s+=l.length,r++;else break}else s++}parseAC3PES(e,t){{const n=t.data,i=t.pts;if(i===void 0){D.warn("[tsdemuxer]: AC3 PES unknown PTS");return}const r=n.length;let s=0,o=0,l;for(;o<r&&(l=Ea(e,n,o,i,s++))>0;)o+=l}}parseID3PES(e,t){if(t.pts===void 0){D.warn("[tsdemuxer]: ID3 PES unknown PTS");return}const n=we({},t,{type:this._videoTrack?je.emsg:je.audioId3,duration:Number.POSITIVE_INFINITY});e.samples.push(n)}}function Ui(a,e){return((a[e+1]&31)<<8)+a[e+2]}function uu(a,e){return(a[e+10]&31)<<8|a[e+11]}function hu(a,e,t,n,i){const r={audioPid:-1,videoPid:-1,id3Pid:-1,segmentVideoCodec:"avc",segmentAudioCodec:"aac"},s=(a[e+1]&15)<<8|a[e+2],o=e+3+s-4,l=(a[e+10]&15)<<8|a[e+11];for(e+=12+l;e<o;){const d=Ui(a,e),c=(a[e+3]&15)<<8|a[e+4];switch(a[e]){case 207:if(!n){vi("ADTS AAC");break}case 15:r.audioPid===-1&&(r.audioPid=d);break;case 21:r.id3Pid===-1&&(r.id3Pid=d);break;case 219:if(!n){vi("H.264");break}case 27:r.videoPid===-1&&(r.videoPid=d,r.segmentVideoCodec="avc");break;case 3:case 4:!t.mpeg&&!t.mp3?D.log("MPEG audio found, not supported in this browser"):r.audioPid===-1&&(r.audioPid=d,r.segmentAudioCodec="mp3");break;case 193:if(!n){vi("AC-3");break}case 129:t.ac3?r.audioPid===-1&&(r.audioPid=d,r.segmentAudioCodec="ac3"):D.log("AC-3 audio found, not supported in this browser");break;case 6:if(r.audioPid===-1&&c>0){let h=e+5,u=c;for(;u>2;){switch(a[h]){case 106:t.ac3!==!0?D.log("AC-3 audio found, not supported in this browser for now"):(r.audioPid=d,r.segmentAudioCodec="ac3");break}const A=a[h+1]+2;h+=A,u-=A}}break;case 194:case 135:return Hn(i,new Error("Unsupported EC-3 in M2TS found")),r;case 36:return Hn(i,new Error("Unsupported HEVC in M2TS found")),r}e+=c+5}return r}function Hn(a,e,t){D.warn(`parsing error: ${e.message}`),a.emit(v.ERROR,v.ERROR,{type:ie.MEDIA_ERROR,details:O.FRAG_PARSING_ERROR,fatal:!1,levelRetry:t,error:e,reason:e.message})}function vi(a){D.log(`${a} with AES-128-CBC encryption found in unencrypted stream`)}function Nt(a){let e=0,t,n,i,r,s;const o=a.data;if(!a||a.size===0)return null;for(;o[0].length<19&&o.length>1;)o[0]=ze(o[0],o[1]),o.splice(1,1);if(t=o[0],(t[0]<<16)+(t[1]<<8)+t[2]===1){if(n=(t[4]<<8)+t[5],n&&n>a.size-6)return null;const d=t[7];d&192&&(r=(t[9]&14)*536870912+(t[10]&255)*4194304+(t[11]&254)*16384+(t[12]&255)*128+(t[13]&254)/2,d&64?(s=(t[14]&14)*536870912+(t[15]&255)*4194304+(t[16]&254)*16384+(t[17]&255)*128+(t[18]&254)/2,r-s>60*9e4&&(D.warn(`${Math.round((r-s)/9e4)}s delta between PTS and DTS, align them`),r=s)):s=r),i=t[8];let c=i+9;if(a.size<=c)return null;a.size-=c;const h=new Uint8Array(a.size);for(let u=0,m=o.length;u<m;u++){t=o[u];let A=t.byteLength;if(c)if(c>A){c-=A;continue}else t=t.subarray(c),A-=c,c=0;h.set(t,e),e+=A}return n&&(n-=i+3),{data:h,pts:r,dts:s,len:n}}return null}class pu extends nr{resetInitSegment(e,t,n,i){super.resetInitSegment(e,t,n,i),this._audioTrack={container:"audio/mpeg",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"mp3",samples:[],manifestCodec:t,duration:i,inputTimeScale:9e4,dropped:0}}static probe(e){if(!e)return!1;const t=Jt(e,0);let n=(t==null?void 0:t.length)||0;if(t&&e[n]===11&&e[n+1]===119&&Qi(t)!==void 0&&va(e,n)<=16)return!1;for(let i=e.length;n<i;n++)if(ba(e,n))return D.log("MPEG Audio sync word found !"),!0;return!1}canParse(e,t){return iu(e,t)}appendFrame(e,t,n){if(this.basePTS!==null)return Aa(e,t,n,this.basePTS,this.frameIndex)}}class ls{static getSilentFrame(e,t){switch(e){case"mp4a.40.2":if(t===1)return new Uint8Array([0,200,0,128,35,128]);if(t===2)return new Uint8Array([33,0,73,144,2,25,0,35,128]);if(t===3)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,142]);if(t===4)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,128,44,128,8,2,56]);if(t===5)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,56]);if(t===6)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,0,178,0,32,8,224]);break;default:if(t===1)return new Uint8Array([1,64,34,128,163,78,230,128,186,8,0,0,0,28,6,241,193,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(t===2)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(t===3)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);break}}}const At=Math.pow(2,32)-1;class B{static init(){B.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],".mp3":[],dac3:[],"ac-3":[],mvex:[],mvhd:[],pasp:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[]};let e;for(e in B.types)B.types.hasOwnProperty(e)&&(B.types[e]=[e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2),e.charCodeAt(3)]);const t=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),n=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]);B.HDLR_TYPES={video:t,audio:n};const i=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),r=new Uint8Array([0,0,0,0,0,0,0,0]);B.STTS=B.STSC=B.STCO=r,B.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),B.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]),B.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),B.STSD=new Uint8Array([0,0,0,0,0,0,0,1]);const s=new Uint8Array([105,115,111,109]),o=new Uint8Array([97,118,99,49]),l=new Uint8Array([0,0,0,1]);B.FTYP=B.box(B.types.ftyp,s,l,s,o),B.DINF=B.box(B.types.dinf,B.box(B.types.dref,i))}static box(e,...t){let n=8,i=t.length;const r=i;for(;i--;)n+=t[i].byteLength;const s=new Uint8Array(n);for(s[0]=n>>24&255,s[1]=n>>16&255,s[2]=n>>8&255,s[3]=n&255,s.set(e,4),i=0,n=8;i<r;i++)s.set(t[i],n),n+=t[i].byteLength;return s}static hdlr(e){return B.box(B.types.hdlr,B.HDLR_TYPES[e])}static mdat(e){return B.box(B.types.mdat,e)}static mdhd(e,t){t*=e;const n=Math.floor(t/(At+1)),i=Math.floor(t%(At+1));return B.box(B.types.mdhd,new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,e&255,n>>24,n>>16&255,n>>8&255,n&255,i>>24,i>>16&255,i>>8&255,i&255,85,196,0,0]))}static mdia(e){return B.box(B.types.mdia,B.mdhd(e.timescale,e.duration),B.hdlr(e.type),B.minf(e))}static mfhd(e){return B.box(B.types.mfhd,new Uint8Array([0,0,0,0,e>>24,e>>16&255,e>>8&255,e&255]))}static minf(e){return e.type==="audio"?B.box(B.types.minf,B.box(B.types.smhd,B.SMHD),B.DINF,B.stbl(e)):B.box(B.types.minf,B.box(B.types.vmhd,B.VMHD),B.DINF,B.stbl(e))}static moof(e,t,n){return B.box(B.types.moof,B.mfhd(e),B.traf(n,t))}static moov(e){let t=e.length;const n=[];for(;t--;)n[t]=B.trak(e[t]);return B.box.apply(null,[B.types.moov,B.mvhd(e[0].timescale,e[0].duration)].concat(n).concat(B.mvex(e)))}static mvex(e){let t=e.length;const n=[];for(;t--;)n[t]=B.trex(e[t]);return B.box.apply(null,[B.types.mvex,...n])}static mvhd(e,t){t*=e;const n=Math.floor(t/(At+1)),i=Math.floor(t%(At+1)),r=new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,e&255,n>>24,n>>16&255,n>>8&255,n&255,i>>24,i>>16&255,i>>8&255,i&255,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return B.box(B.types.mvhd,r)}static sdtp(e){const t=e.samples||[],n=new Uint8Array(4+t.length);let i,r;for(i=0;i<t.length;i++)r=t[i].flags,n[i+4]=r.dependsOn<<4|r.isDependedOn<<2|r.hasRedundancy;return B.box(B.types.sdtp,n)}static stbl(e){return B.box(B.types.stbl,B.stsd(e),B.box(B.types.stts,B.STTS),B.box(B.types.stsc,B.STSC),B.box(B.types.stsz,B.STSZ),B.box(B.types.stco,B.STCO))}static avc1(e){let t=[],n=[],i,r,s;for(i=0;i<e.sps.length;i++)r=e.sps[i],s=r.byteLength,t.push(s>>>8&255),t.push(s&255),t=t.concat(Array.prototype.slice.call(r));for(i=0;i<e.pps.length;i++)r=e.pps[i],s=r.byteLength,n.push(s>>>8&255),n.push(s&255),n=n.concat(Array.prototype.slice.call(r));const o=B.box(B.types.avcC,new Uint8Array([1,t[3],t[4],t[5],255,224|e.sps.length].concat(t).concat([e.pps.length]).concat(n))),l=e.width,d=e.height,c=e.pixelRatio[0],h=e.pixelRatio[1];return B.box(B.types.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,l>>8&255,l&255,d>>8&255,d&255,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,100,97,105,108,121,109,111,116,105,111,110,47,104,108,115,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),o,B.box(B.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])),B.box(B.types.pasp,new Uint8Array([c>>24,c>>16&255,c>>8&255,c&255,h>>24,h>>16&255,h>>8&255,h&255])))}static esds(e){const t=e.config.length;return new Uint8Array([0,0,0,0,3,23+t,0,1,0,4,15+t,64,21,0,0,0,0,0,0,0,0,0,0,0,5].concat([t]).concat(e.config).concat([6,1,2]))}static audioStsd(e){const t=e.samplerate;return new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,e.channelCount,0,16,0,0,0,0,t>>8&255,t&255,0,0])}static mp4a(e){return B.box(B.types.mp4a,B.audioStsd(e),B.box(B.types.esds,B.esds(e)))}static mp3(e){return B.box(B.types[".mp3"],B.audioStsd(e))}static ac3(e){return B.box(B.types["ac-3"],B.audioStsd(e),B.box(B.types.dac3,e.config))}static stsd(e){return e.type==="audio"?e.segmentCodec==="mp3"&&e.codec==="mp3"?B.box(B.types.stsd,B.STSD,B.mp3(e)):e.segmentCodec==="ac3"?B.box(B.types.stsd,B.STSD,B.ac3(e)):B.box(B.types.stsd,B.STSD,B.mp4a(e)):B.box(B.types.stsd,B.STSD,B.avc1(e))}static tkhd(e){const t=e.id,n=e.duration*e.timescale,i=e.width,r=e.height,s=Math.floor(n/(At+1)),o=Math.floor(n%(At+1));return B.box(B.types.tkhd,new Uint8Array([1,0,0,7,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,t>>24&255,t>>16&255,t>>8&255,t&255,0,0,0,0,s>>24,s>>16&255,s>>8&255,s&255,o>>24,o>>16&255,o>>8&255,o&255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,i>>8&255,i&255,0,0,r>>8&255,r&255,0,0]))}static traf(e,t){const n=B.sdtp(e),i=e.id,r=Math.floor(t/(At+1)),s=Math.floor(t%(At+1));return B.box(B.types.traf,B.box(B.types.tfhd,new Uint8Array([0,0,0,0,i>>24,i>>16&255,i>>8&255,i&255])),B.box(B.types.tfdt,new Uint8Array([1,0,0,0,r>>24,r>>16&255,r>>8&255,r&255,s>>24,s>>16&255,s>>8&255,s&255])),B.trun(e,n.length+16+20+8+16+8+8),n)}static trak(e){return e.duration=e.duration||4294967295,B.box(B.types.trak,B.tkhd(e),B.mdia(e))}static trex(e){const t=e.id;return B.box(B.types.trex,new Uint8Array([0,0,0,0,t>>24,t>>16&255,t>>8&255,t&255,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]))}static trun(e,t){const n=e.samples||[],i=n.length,r=12+16*i,s=new Uint8Array(r);let o,l,d,c,h,u;for(t+=8+r,s.set([e.type==="video"?1:0,0,15,1,i>>>24&255,i>>>16&255,i>>>8&255,i&255,t>>>24&255,t>>>16&255,t>>>8&255,t&255],0),o=0;o<i;o++)l=n[o],d=l.duration,c=l.size,h=l.flags,u=l.cts,s.set([d>>>24&255,d>>>16&255,d>>>8&255,d&255,c>>>24&255,c>>>16&255,c>>>8&255,c&255,h.isLeading<<2|h.dependsOn,h.isDependedOn<<6|h.hasRedundancy<<4|h.paddingValue<<1|h.isNonSync,h.degradPrio&61440,h.degradPrio&15,u>>>24&255,u>>>16&255,u>>>8&255,u&255],12+16*o);return B.box(B.types.trun,s)}static initSegment(e){B.types||B.init();const t=B.moov(e);return ze(B.FTYP,t)}}B.types=void 0;B.HDLR_TYPES=void 0;B.STTS=void 0;B.STSC=void 0;B.STCO=void 0;B.STSZ=void 0;B.VMHD=void 0;B.SMHD=void 0;B.STSD=void 0;B.FTYP=void 0;B.DINF=void 0;const xa=9e4;function sr(a,e,t=1,n=!1){const i=a*e*t;return n?Math.round(i):i}function fu(a,e,t=1,n=!1){return sr(a,e,1/t,n)}function jt(a,e=!1){return sr(a,1e3,1/xa,e)}function mu(a,e=1){return sr(a,xa,1/e)}const Au=10*1e3,ds=1024,gu=1152,yu=1536;let Ut=null,Ei=null;class Ln{constructor(e,t,n,i=""){if(this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.ISGenerated=!1,this._initPTS=null,this._initDTS=null,this.nextAvcDts=null,this.nextAudioPts=null,this.videoSampleDuration=null,this.isAudioContiguous=!1,this.isVideoContiguous=!1,this.videoTrackConfig=void 0,this.observer=e,this.config=t,this.typeSupported=n,this.ISGenerated=!1,Ut===null){const s=(navigator.userAgent||"").match(/Chrome\/(\d+)/i);Ut=s?parseInt(s[1]):0}if(Ei===null){const r=navigator.userAgent.match(/Safari\/(\d+)/i);Ei=r?parseInt(r[1]):0}}destroy(){this.config=this.videoTrackConfig=this._initPTS=this._initDTS=null}resetTimeStamp(e){D.log("[mp4-remuxer]: initPTS & initDTS reset"),this._initPTS=this._initDTS=e}resetNextTimestamp(){D.log("[mp4-remuxer]: reset next timestamp"),this.isVideoContiguous=!1,this.isAudioContiguous=!1}resetInitSegment(){D.log("[mp4-remuxer]: ISGenerated flag reset"),this.ISGenerated=!1,this.videoTrackConfig=void 0}getVideoStartPts(e){let t=!1;const n=e[0].pts,i=e.reduce((r,s)=>{let o=s.pts,l=o-r;return l<-4294967296&&(t=!0,o=qe(o,n),l=o-r),l>0?r:o},n);return t&&D.debug("PTS rollover detected"),i}remux(e,t,n,i,r,s,o,l){let d,c,h,u,m,A,f=r,g=r;const C=e.pid>-1,T=t.pid>-1,S=t.samples.length,k=e.samples.length>0,I=o&&S>0||S>1;if((!C||k)&&(!T||I)||this.ISGenerated||o){if(this.ISGenerated){var _,N,U,F;const q=this.videoTrackConfig;q&&(t.width!==q.width||t.height!==q.height||((_=t.pixelRatio)==null?void 0:_[0])!==((N=q.pixelRatio)==null?void 0:N[0])||((U=t.pixelRatio)==null?void 0:U[1])!==((F=q.pixelRatio)==null?void 0:F[1]))&&this.resetInitSegment()}else h=this.generateIS(e,t,r,s);const $=this.isVideoContiguous;let H=-1,R;if(I&&(H=bu(t.samples),!$&&this.config.forceKeyFrameOnDiscontinuity))if(A=!0,H>0){D.warn(`[mp4-remuxer]: Dropped ${H} out of ${S} video samples due to a missing keyframe`);const q=this.getVideoStartPts(t.samples);t.samples=t.samples.slice(H),t.dropped+=H,g+=(t.samples[0].pts-q)/t.inputTimeScale,R=g}else H===-1&&(D.warn(`[mp4-remuxer]: No keyframe found out of ${S} video samples`),A=!1);if(this.ISGenerated){if(k&&I){const q=this.getVideoStartPts(t.samples),j=(qe(e.samples[0].pts,q)-q)/t.inputTimeScale;f+=Math.max(0,j),g+=Math.max(0,-j)}if(k){if(e.samplerate||(D.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"),h=this.generateIS(e,t,r,s)),c=this.remuxAudio(e,f,this.isAudioContiguous,s,T||I||l===ne.AUDIO?g:void 0),I){const q=c?c.endPTS-c.startPTS:0;t.inputTimeScale||(D.warn("[mp4-remuxer]: regenerate InitSegment as video detected"),h=this.generateIS(e,t,r,s)),d=this.remuxVideo(t,g,$,q)}}else I&&(d=this.remuxVideo(t,g,$,0));d&&(d.firstKeyFrame=H,d.independent=H!==-1,d.firstKeyFramePTS=R)}}return this.ISGenerated&&this._initPTS&&this._initDTS&&(n.samples.length&&(m=Ca(n,r,this._initPTS,this._initDTS)),i.samples.length&&(u=Ta(i,r,this._initPTS))),{audio:c,video:d,initSegment:h,independent:A,text:u,id3:m}}generateIS(e,t,n,i){const r=e.samples,s=t.samples,o=this.typeSupported,l={},d=this._initPTS;let c=!d||i,h="audio/mp4",u,m,A;if(c&&(u=m=1/0),e.config&&r.length){switch(e.timescale=e.samplerate,e.segmentCodec){case"mp3":o.mpeg?(h="audio/mpeg",e.codec=""):o.mp3&&(e.codec="mp3");break;case"ac3":e.codec="ac-3";break}l.audio={id:"audio",container:h,codec:e.codec,initSegment:e.segmentCodec==="mp3"&&o.mpeg?new Uint8Array(0):B.initSegment([e]),metadata:{channelCount:e.channelCount}},c&&(A=e.inputTimeScale,!d||A!==d.timescale?u=m=r[0].pts-Math.round(A*n):c=!1)}if(t.sps&&t.pps&&s.length){if(t.timescale=t.inputTimeScale,l.video={id:"main",container:"video/mp4",codec:t.codec,initSegment:B.initSegment([t]),metadata:{width:t.width,height:t.height}},c)if(A=t.inputTimeScale,!d||A!==d.timescale){const f=this.getVideoStartPts(s),g=Math.round(A*n);m=Math.min(m,qe(s[0].dts,f)-g),u=Math.min(u,f-g)}else c=!1;this.videoTrackConfig={width:t.width,height:t.height,pixelRatio:t.pixelRatio}}if(Object.keys(l).length)return this.ISGenerated=!0,c?(this._initPTS={baseTime:u,timescale:A},this._initDTS={baseTime:m,timescale:A}):u=A=void 0,{tracks:l,initPTS:u,timescale:A}}remuxVideo(e,t,n,i){const r=e.inputTimeScale,s=e.samples,o=[],l=s.length,d=this._initPTS;let c=this.nextAvcDts,h=8,u=this.videoSampleDuration,m,A,f=Number.POSITIVE_INFINITY,g=Number.NEGATIVE_INFINITY,C=!1;if(!n||c===null){const Y=t*r,W=s[0].pts-qe(s[0].dts,s[0].pts);Ut&&c!==null&&Math.abs(Y-W-c)<15e3?n=!0:c=Y-W}const T=d.baseTime*r/d.timescale;for(let Y=0;Y<l;Y++){const W=s[Y];W.pts=qe(W.pts-T,c),W.dts=qe(W.dts-T,c),W.dts<s[Y>0?Y-1:Y].dts&&(C=!0)}C&&s.sort(function(Y,W){const le=Y.dts-W.dts,re=Y.pts-W.pts;return le||re}),m=s[0].dts,A=s[s.length-1].dts;const S=A-m,k=S?Math.round(S/(l-1)):u||e.inputTimeScale/30;if(n){const Y=m-c,W=Y>k,le=Y<-1;if((W||le)&&(W?D.warn(`AVC: ${jt(Y,!0)} ms (${Y}dts) hole between fragments detected at ${t.toFixed(3)}`):D.warn(`AVC: ${jt(-Y,!0)} ms (${Y}dts) overlapping between fragments detected at ${t.toFixed(3)}`),!le||c>=s[0].pts||Ut)){m=c;const re=s[0].pts-Y;if(W)s[0].dts=m,s[0].pts=re;else for(let de=0;de<s.length&&!(s[de].dts>re);de++)s[de].dts-=Y,s[de].pts-=Y;D.log(`Video: Initial PTS/DTS adjusted: ${jt(re,!0)}/${jt(m,!0)}, delta: ${jt(Y,!0)} ms`)}}m=Math.max(0,m);let I=0,P=0,_=m;for(let Y=0;Y<l;Y++){const W=s[Y],le=W.units,re=le.length;let de=0;for(let ve=0;ve<re;ve++)de+=le[ve].data.length;P+=de,I+=re,W.length=de,W.dts<_?(W.dts=_,_+=k/4|0||1):_=W.dts,f=Math.min(W.pts,f),g=Math.max(W.pts,g)}A=s[l-1].dts;const N=P+4*I+8;let U;try{U=new Uint8Array(N)}catch(Y){this.observer.emit(v.ERROR,v.ERROR,{type:ie.MUX_ERROR,details:O.REMUX_ALLOC_ERROR,fatal:!1,error:Y,bytes:N,reason:`fail allocating video mdat ${N}`});return}const F=new DataView(U.buffer);F.setUint32(0,N),U.set(B.types.mdat,4);let $=!1,H=Number.POSITIVE_INFINITY,R=Number.POSITIVE_INFINITY,q=Number.NEGATIVE_INFINITY,V=Number.NEGATIVE_INFINITY;for(let Y=0;Y<l;Y++){const W=s[Y],le=W.units;let re=0;for(let fe=0,Ee=le.length;fe<Ee;fe++){const Pe=le[fe],at=Pe.data,xt=Pe.data.byteLength;F.setUint32(h,xt),h+=4,U.set(at,h),h+=xt,re+=4+xt}let de;if(Y<l-1)u=s[Y+1].dts-W.dts,de=s[Y+1].pts-W.pts;else{const fe=this.config,Ee=Y>0?W.dts-s[Y-1].dts:k;if(de=Y>0?W.pts-s[Y-1].pts:k,fe.stretchShortVideoTrack&&this.nextAudioPts!==null){const Pe=Math.floor(fe.maxBufferHole*r),at=(i?f+i*r:this.nextAudioPts)-W.pts;at>Pe?(u=at-Ee,u<0?u=Ee:$=!0,D.log(`[mp4-remuxer]: It is approximately ${at/90} ms to the next segment; using duration ${u/90} ms for the last video frame.`)):u=Ee}else u=Ee}const ve=Math.round(W.pts-W.dts);H=Math.min(H,u),q=Math.max(q,u),R=Math.min(R,de),V=Math.max(V,de),o.push(new cs(W.key,u,re,ve))}if(o.length){if(Ut){if(Ut<70){const Y=o[0].flags;Y.dependsOn=2,Y.isNonSync=0}}else if(Ei&&V-R<q-H&&k/q<.025&&o[0].cts===0){D.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");let Y=m;for(let W=0,le=o.length;W<le;W++){const re=Y+o[W].duration,de=Y+o[W].cts;if(W<le-1){const ve=re+o[W+1].cts;o[W].duration=ve-de}else o[W].duration=W?o[W-1].duration:k;o[W].cts=0,Y=re}}}u=$||!u?k:u,this.nextAvcDts=c=A+u,this.videoSampleDuration=u,this.isVideoContiguous=!0;const j=B.moof(e.sequenceNumber++,m,we({},e,{samples:o})),ee="video",K={data1:j,data2:U,startPTS:f/r,endPTS:(g+u)/r,startDTS:m/r,endDTS:c/r,type:ee,hasAudio:!1,hasVideo:!0,nb:o.length,dropped:e.dropped};return e.samples=[],e.dropped=0,K}getSamplesPerFrame(e){switch(e.segmentCodec){case"mp3":return gu;case"ac3":return yu;default:return ds}}remuxAudio(e,t,n,i,r){const s=e.inputTimeScale,o=e.samplerate?e.samplerate:s,l=s/o,d=this.getSamplesPerFrame(e),c=d*l,h=this._initPTS,u=e.segmentCodec==="mp3"&&this.typeSupported.mpeg,m=[],A=r!==void 0;let f=e.samples,g=u?0:8,C=this.nextAudioPts||-1;const T=t*s,S=h.baseTime*s/h.timescale;if(this.isAudioContiguous=n=n||f.length&&C>0&&(i&&Math.abs(T-C)<9e3||Math.abs(qe(f[0].pts-S,T)-C)<20*c),f.forEach(function(j){j.pts=qe(j.pts-S,T)}),!n||C<0){if(f=f.filter(j=>j.pts>=0),!f.length)return;r===0?C=0:i&&!A?C=Math.max(0,T):C=f[0].pts}if(e.segmentCodec==="aac"){const j=this.config.maxAudioFramesDrift;for(let ee=0,K=C;ee<f.length;ee++){const Y=f[ee],W=Y.pts,le=W-K,re=Math.abs(1e3*le/s);if(le<=-j*c&&A)ee===0&&(D.warn(`Audio frame @ ${(W/s).toFixed(3)}s overlaps nextAudioPts by ${Math.round(1e3*le/s)} ms.`),this.nextAudioPts=C=K=W);else if(le>=j*c&&re<Au&&A){let de=Math.round(le/c);K=W-de*c,K<0&&(de--,K+=c),ee===0&&(this.nextAudioPts=C=K),D.warn(`[mp4-remuxer]: Injecting ${de} audio frame @ ${(K/s).toFixed(3)}s due to ${Math.round(1e3*le/s)} ms gap.`);for(let ve=0;ve<de;ve++){const fe=Math.max(K,0);let Ee=ls.getSilentFrame(e.manifestCodec||e.codec,e.channelCount);Ee||(D.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."),Ee=Y.unit.subarray()),f.splice(ee,0,{unit:Ee,pts:fe}),K+=c,ee++}}Y.pts=K,K+=c}}let k=null,I=null,P,_=0,N=f.length;for(;N--;)_+=f[N].unit.byteLength;for(let j=0,ee=f.length;j<ee;j++){const K=f[j],Y=K.unit;let W=K.pts;if(I!==null){const re=m[j-1];re.duration=Math.round((W-I)/l)}else if(n&&e.segmentCodec==="aac"&&(W=C),k=W,_>0){_+=g;try{P=new Uint8Array(_)}catch(re){this.observer.emit(v.ERROR,v.ERROR,{type:ie.MUX_ERROR,details:O.REMUX_ALLOC_ERROR,fatal:!1,error:re,bytes:_,reason:`fail allocating audio mdat ${_}`});return}u||(new DataView(P.buffer).setUint32(0,_),P.set(B.types.mdat,4))}else return;P.set(Y,g);const le=Y.byteLength;g+=le,m.push(new cs(!0,d,le,0)),I=W}const U=m.length;if(!U)return;const F=m[m.length-1];this.nextAudioPts=C=I+l*F.duration;const $=u?new Uint8Array(0):B.moof(e.sequenceNumber++,k/l,we({},e,{samples:m}));e.samples=[];const H=k/s,R=C/s,V={data1:$,data2:P,startPTS:H,endPTS:R,startDTS:H,endDTS:R,type:"audio",hasAudio:!0,hasVideo:!1,nb:U};return this.isAudioContiguous=!0,V}remuxEmptyAudio(e,t,n,i){const r=e.inputTimeScale,s=e.samplerate?e.samplerate:r,o=r/s,l=this.nextAudioPts,d=this._initDTS,c=d.baseTime*9e4/d.timescale,h=(l!==null?l:i.startDTS*r)+c,u=i.endDTS*r+c,m=o*ds,A=Math.ceil((u-h)/m),f=ls.getSilentFrame(e.manifestCodec||e.codec,e.channelCount);if(D.warn("[mp4-remuxer]: remux empty Audio"),!f){D.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec");return}const g=[];for(let C=0;C<A;C++){const T=h+C*m;g.push({unit:f,pts:T,dts:T})}return e.samples=g,this.remuxAudio(e,t,n,!1)}}function qe(a,e){let t;if(e===null)return a;for(e<a?t=-8589934592:t=8589934592;Math.abs(a-e)>4294967296;)a+=t;return a}function bu(a){for(let e=0;e<a.length;e++)if(a[e].key)return e;return-1}function Ca(a,e,t,n){const i=a.samples.length;if(!i)return;const r=a.inputTimeScale;for(let o=0;o<i;o++){const l=a.samples[o];l.pts=qe(l.pts-t.baseTime*r/t.timescale,e*r)/r,l.dts=qe(l.dts-n.baseTime*r/n.timescale,e*r)/r}const s=a.samples;return a.samples=[],{samples:s}}function Ta(a,e,t){const n=a.samples.length;if(!n)return;const i=a.inputTimeScale;for(let s=0;s<n;s++){const o=a.samples[s];o.pts=qe(o.pts-t.baseTime*i/t.timescale,e*i)/i}a.samples.sort((s,o)=>s.pts-o.pts);const r=a.samples;return a.samples=[],{samples:r}}class cs{constructor(e,t,n,i){this.size=void 0,this.duration=void 0,this.cts=void 0,this.flags=void 0,this.duration=t,this.size=n,this.cts=i,this.flags={isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:e?2:1,isNonSync:e?0:1}}}class vu{constructor(){this.emitInitSegment=!1,this.audioCodec=void 0,this.videoCodec=void 0,this.initData=void 0,this.initPTS=null,this.initTracks=void 0,this.lastEndTime=null}destroy(){}resetTimeStamp(e){this.initPTS=e,this.lastEndTime=null}resetNextTimestamp(){this.lastEndTime=null}resetInitSegment(e,t,n,i){this.audioCodec=t,this.videoCodec=n,this.generateInitSegment(kd(e,i)),this.emitInitSegment=!0}generateInitSegment(e){let{audioCodec:t,videoCodec:n}=this;if(!(e!=null&&e.byteLength)){this.initTracks=void 0,this.initData=void 0;return}const i=this.initData=js(e);i.audio&&(t=us(i.audio,be.AUDIO)),i.video&&(n=us(i.video,be.VIDEO));const r={};i.audio&&i.video?r.audiovideo={container:"video/mp4",codec:t+","+n,initSegment:e,id:"main"}:i.audio?r.audio={container:"audio/mp4",codec:t,initSegment:e,id:"audio"}:i.video?r.video={container:"video/mp4",codec:n,initSegment:e,id:"main"}:D.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."),this.initTracks=r}remux(e,t,n,i,r,s){var o,l;let{initPTS:d,lastEndTime:c}=this;const h={audio:void 0,video:void 0,text:i,id3:n,initSegment:void 0};X(c)||(c=this.lastEndTime=r||0);const u=t.samples;if(!(u!=null&&u.length))return h;const m={initPTS:void 0,timescale:1};let A=this.initData;if((o=A)!=null&&o.length||(this.generateInitSegment(u),A=this.initData),!((l=A)!=null&&l.length))return D.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."),h;this.emitInitSegment&&(m.tracks=this.initTracks,this.emitInitSegment=!1);const f=Ld(u,A),g=wd(A,u),C=g===null?r:g;(Eu(d,C,r,f)||m.timescale!==d.timescale&&s)&&(m.initPTS=C-r,d&&d.timescale===1&&D.warn(`Adjusting initPTS by ${m.initPTS-d.baseTime}`),this.initPTS=d={baseTime:m.initPTS,timescale:1});const T=e?C-d.baseTime/d.timescale:c,S=T+f;Rd(A,u,d.baseTime/d.timescale),f>0?this.lastEndTime=S:(D.warn("Duration parsed from mp4 should be greater than zero"),this.resetNextTimestamp());const k=!!A.audio,I=!!A.video;let P="";k&&(P+="audio"),I&&(P+="video");const _={data1:u,startPTS:T,startDTS:T,endPTS:S,endDTS:S,type:P,hasAudio:k,hasVideo:I,nb:1,dropped:0};return h.audio=_.type==="audio"?_:void 0,h.video=_.type!=="audio"?_:void 0,h.initSegment=m,h.id3=Ca(n,r,d,d),i.samples.length&&(h.text=Ta(i,r,d)),h}}function Eu(a,e,t,n){if(a===null)return!0;const i=Math.max(n,1),r=e-a.baseTime/a.timescale;return Math.abs(r-t)>i}function us(a,e){const t=a==null?void 0:a.codec;if(t&&t.length>4)return t;if(e===be.AUDIO){if(t==="ec-3"||t==="ac-3"||t==="alac")return t;if(t==="fLaC"||t==="Opus")return Fn(t,!1);const n="mp4a.40.5";return D.info(`Parsed audio codec "${t}" or audio object type not handled. Using "${n}"`),n}return D.warn(`Unhandled video codec "${t}"`),t==="hvc1"||t==="hev1"?"hvc1.1.6.L120.90":t==="av01"?"av01.0.04M.08":"avc1.42e01e"}let pt;try{pt=self.performance.now.bind(self.performance)}catch{D.debug("Unable to use Performance API on this environment"),pt=Ht==null?void 0:Ht.Date.now}const In=[{demux:au,remux:vu},{demux:vt,remux:Ln},{demux:ru,remux:Ln},{demux:pu,remux:Ln}];In.splice(2,0,{demux:ou,remux:Ln});class hs{constructor(e,t,n,i,r){this.async=!1,this.observer=void 0,this.typeSupported=void 0,this.config=void 0,this.vendor=void 0,this.id=void 0,this.demuxer=void 0,this.remuxer=void 0,this.decrypter=void 0,this.probe=void 0,this.decryptionPromise=null,this.transmuxConfig=void 0,this.currentTransmuxState=void 0,this.observer=e,this.typeSupported=t,this.config=n,this.vendor=i,this.id=r}configure(e){this.transmuxConfig=e,this.decrypter&&this.decrypter.reset()}push(e,t,n,i){const r=n.transmuxing;r.executeStart=pt();let s=new Uint8Array(e);const{currentTransmuxState:o,transmuxConfig:l}=this;i&&(this.currentTransmuxState=i);const{contiguous:d,discontinuity:c,trackSwitch:h,accurateTimeOffset:u,timeOffset:m,initSegmentChange:A}=i||o,{audioCodec:f,videoCodec:g,defaultInitPts:C,duration:T,initSegmentData:S}=l,k=xu(s,t);if(k&&k.method==="AES-128"){const N=this.getDecrypter();if(N.isSync()){let U=N.softwareDecrypt(s,k.key.buffer,k.iv.buffer);if(n.part>-1&&(U=N.flush()),!U)return r.executeEnd=pt(),xi(n);s=new Uint8Array(U)}else return this.decryptionPromise=N.webCryptoDecrypt(s,k.key.buffer,k.iv.buffer).then(U=>{const F=this.push(U,null,n);return this.decryptionPromise=null,F}),this.decryptionPromise}const I=this.needsProbing(c,h);if(I){const N=this.configureTransmuxer(s);if(N)return D.warn(`[transmuxer] ${N.message}`),this.observer.emit(v.ERROR,v.ERROR,{type:ie.MEDIA_ERROR,details:O.FRAG_PARSING_ERROR,fatal:!1,error:N,reason:N.message}),r.executeEnd=pt(),xi(n)}(c||h||A||I)&&this.resetInitSegment(S,f,g,T,t),(c||A||I)&&this.resetInitialTimestamp(C),d||this.resetContiguity();const P=this.transmux(s,k,m,u,n),_=this.currentTransmuxState;return _.contiguous=!0,_.discontinuity=!1,_.trackSwitch=!1,r.executeEnd=pt(),P}flush(e){const t=e.transmuxing;t.executeStart=pt();const{decrypter:n,currentTransmuxState:i,decryptionPromise:r}=this;if(r)return r.then(()=>this.flush(e));const s=[],{timeOffset:o}=i;if(n){const h=n.flush();h&&s.push(this.push(h,null,e))}const{demuxer:l,remuxer:d}=this;if(!l||!d)return t.executeEnd=pt(),[xi(e)];const c=l.flush(o);return Rn(c)?c.then(h=>(this.flushRemux(s,h,e),s)):(this.flushRemux(s,c,e),s)}flushRemux(e,t,n){const{audioTrack:i,videoTrack:r,id3Track:s,textTrack:o}=t,{accurateTimeOffset:l,timeOffset:d}=this.currentTransmuxState;D.log(`[transmuxer.ts]: Flushed fragment ${n.sn}${n.part>-1?" p: "+n.part:""} of level ${n.level}`);const c=this.remuxer.remux(i,r,s,o,d,l,!0,this.id);e.push({remuxResult:c,chunkMeta:n}),n.transmuxing.executeEnd=pt()}resetInitialTimestamp(e){const{demuxer:t,remuxer:n}=this;!t||!n||(t.resetTimeStamp(e),n.resetTimeStamp(e))}resetContiguity(){const{demuxer:e,remuxer:t}=this;!e||!t||(e.resetContiguity(),t.resetNextTimestamp())}resetInitSegment(e,t,n,i,r){const{demuxer:s,remuxer:o}=this;!s||!o||(s.resetInitSegment(e,t,n,i),o.resetInitSegment(e,t,n,r))}destroy(){this.demuxer&&(this.demuxer.destroy(),this.demuxer=void 0),this.remuxer&&(this.remuxer.destroy(),this.remuxer=void 0)}transmux(e,t,n,i,r){let s;return t&&t.method==="SAMPLE-AES"?s=this.transmuxSampleAes(e,t,n,i,r):s=this.transmuxUnencrypted(e,n,i,r),s}transmuxUnencrypted(e,t,n,i){const{audioTrack:r,videoTrack:s,id3Track:o,textTrack:l}=this.demuxer.demux(e,t,!1,!this.config.progressive);return{remuxResult:this.remuxer.remux(r,s,o,l,t,n,!1,this.id),chunkMeta:i}}transmuxSampleAes(e,t,n,i,r){return this.demuxer.demuxSampleAes(e,t,n).then(s=>({remuxResult:this.remuxer.remux(s.audioTrack,s.videoTrack,s.id3Track,s.textTrack,n,i,!1,this.id),chunkMeta:r}))}configureTransmuxer(e){const{config:t,observer:n,typeSupported:i,vendor:r}=this;let s;for(let u=0,m=In.length;u<m;u++){var o;if((o=In[u].demux)!=null&&o.probe(e)){s=In[u];break}}if(!s)return new Error("Failed to find demuxer by probing fragment data");const l=this.demuxer,d=this.remuxer,c=s.remux,h=s.demux;(!d||!(d instanceof c))&&(this.remuxer=new c(n,t,i,r)),(!l||!(l instanceof h))&&(this.demuxer=new h(n,t,i),this.probe=h.probe)}needsProbing(e,t){return!this.demuxer||!this.remuxer||e||t}getDecrypter(){let e=this.decrypter;return e||(e=this.decrypter=new er(this.config)),e}}function xu(a,e){let t=null;return a.byteLength>0&&(e==null?void 0:e.key)!=null&&e.iv!==null&&e.method!=null&&(t=e),t}const xi=a=>({remuxResult:{},chunkMeta:a});function Rn(a){return"then"in a&&a.then instanceof Function}class Cu{constructor(e,t,n,i,r){this.audioCodec=void 0,this.videoCodec=void 0,this.initSegmentData=void 0,this.duration=void 0,this.defaultInitPts=void 0,this.audioCodec=e,this.videoCodec=t,this.initSegmentData=n,this.duration=i,this.defaultInitPts=r||null}}class Tu{constructor(e,t,n,i,r,s){this.discontinuity=void 0,this.contiguous=void 0,this.accurateTimeOffset=void 0,this.trackSwitch=void 0,this.timeOffset=void 0,this.initSegmentChange=void 0,this.discontinuity=e,this.contiguous=t,this.accurateTimeOffset=n,this.trackSwitch=i,this.timeOffset=r,this.initSegmentChange=s}}var Sa={exports:{}};(function(a){var e=Object.prototype.hasOwnProperty,t="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(t=!1));function i(l,d,c){this.fn=l,this.context=d,this.once=c||!1}function r(l,d,c,h,u){if(typeof c!="function")throw new TypeError("The listener must be a function");var m=new i(c,h||l,u),A=t?t+d:d;return l._events[A]?l._events[A].fn?l._events[A]=[l._events[A],m]:l._events[A].push(m):(l._events[A]=m,l._eventsCount++),l}function s(l,d){--l._eventsCount===0?l._events=new n:delete l._events[d]}function o(){this._events=new n,this._eventsCount=0}o.prototype.eventNames=function(){var d=[],c,h;if(this._eventsCount===0)return d;for(h in c=this._events)e.call(c,h)&&d.push(t?h.slice(1):h);return Object.getOwnPropertySymbols?d.concat(Object.getOwnPropertySymbols(c)):d},o.prototype.listeners=function(d){var c=t?t+d:d,h=this._events[c];if(!h)return[];if(h.fn)return[h.fn];for(var u=0,m=h.length,A=new Array(m);u<m;u++)A[u]=h[u].fn;return A},o.prototype.listenerCount=function(d){var c=t?t+d:d,h=this._events[c];return h?h.fn?1:h.length:0},o.prototype.emit=function(d,c,h,u,m,A){var f=t?t+d:d;if(!this._events[f])return!1;var g=this._events[f],C=arguments.length,T,S;if(g.fn){switch(g.once&&this.removeListener(d,g.fn,void 0,!0),C){case 1:return g.fn.call(g.context),!0;case 2:return g.fn.call(g.context,c),!0;case 3:return g.fn.call(g.context,c,h),!0;case 4:return g.fn.call(g.context,c,h,u),!0;case 5:return g.fn.call(g.context,c,h,u,m),!0;case 6:return g.fn.call(g.context,c,h,u,m,A),!0}for(S=1,T=new Array(C-1);S<C;S++)T[S-1]=arguments[S];g.fn.apply(g.context,T)}else{var k=g.length,I;for(S=0;S<k;S++)switch(g[S].once&&this.removeListener(d,g[S].fn,void 0,!0),C){case 1:g[S].fn.call(g[S].context);break;case 2:g[S].fn.call(g[S].context,c);break;case 3:g[S].fn.call(g[S].context,c,h);break;case 4:g[S].fn.call(g[S].context,c,h,u);break;default:if(!T)for(I=1,T=new Array(C-1);I<C;I++)T[I-1]=arguments[I];g[S].fn.apply(g[S].context,T)}}return!0},o.prototype.on=function(d,c,h){return r(this,d,c,h,!1)},o.prototype.once=function(d,c,h){return r(this,d,c,h,!0)},o.prototype.removeListener=function(d,c,h,u){var m=t?t+d:d;if(!this._events[m])return this;if(!c)return s(this,m),this;var A=this._events[m];if(A.fn)A.fn===c&&(!u||A.once)&&(!h||A.context===h)&&s(this,m);else{for(var f=0,g=[],C=A.length;f<C;f++)(A[f].fn!==c||u&&!A[f].once||h&&A[f].context!==h)&&g.push(A[f]);g.length?this._events[m]=g.length===1?g[0]:g:s(this,m)}return this},o.prototype.removeAllListeners=function(d){var c;return d?(c=t?t+d:d,this._events[c]&&s(this,c)):(this._events=new n,this._eventsCount=0),this},o.prototype.off=o.prototype.removeListener,o.prototype.addListener=o.prototype.on,o.prefixed=t,o.EventEmitter=o,a.exports=o})(Sa);var Su=Sa.exports,ar=Wl(Su);class ka{constructor(e,t,n,i){this.error=null,this.hls=void 0,this.id=void 0,this.observer=void 0,this.frag=null,this.part=null,this.useWorker=void 0,this.workerContext=null,this.onwmsg=void 0,this.transmuxer=null,this.onTransmuxComplete=void 0,this.onFlush=void 0;const r=e.config;this.hls=e,this.id=t,this.useWorker=!!r.enableWorker,this.onTransmuxComplete=n,this.onFlush=i;const s=(d,c)=>{c=c||{},c.frag=this.frag,c.id=this.id,d===v.ERROR&&(this.error=c.error),this.hls.trigger(d,c)};this.observer=new ar,this.observer.on(v.FRAG_DECRYPTED,s),this.observer.on(v.ERROR,s);const o=Dt(r.preferManagedMediaSource)||{isTypeSupported:()=>!1},l={mpeg:o.isTypeSupported("audio/mpeg"),mp3:o.isTypeSupported('audio/mp4; codecs="mp3"'),ac3:o.isTypeSupported('audio/mp4; codecs="ac-3"')};if(this.useWorker&&typeof Worker<"u"&&(r.workerPath||qc())){try{r.workerPath?(D.log(`loading Web Worker ${r.workerPath} for "${t}"`),this.workerContext=Yc(r.workerPath)):(D.log(`injecting Web Worker for "${t}"`),this.workerContext=zc()),this.onwmsg=h=>this.onWorkerMessage(h);const{worker:c}=this.workerContext;c.addEventListener("message",this.onwmsg),c.onerror=h=>{const u=new Error(`${h.message}  (${h.filename}:${h.lineno})`);r.enableWorker=!1,D.warn(`Error in "${t}" Web Worker, fallback to inline`),this.hls.trigger(v.ERROR,{type:ie.OTHER_ERROR,details:O.INTERNAL_EXCEPTION,fatal:!1,event:"demuxerWorker",error:u})},c.postMessage({cmd:"init",typeSupported:l,vendor:"",id:t,config:JSON.stringify(r)})}catch(c){D.warn(`Error setting up "${t}" Web Worker, fallback to inline`,c),this.resetWorker(),this.error=null,this.transmuxer=new hs(this.observer,l,r,"",t)}return}this.transmuxer=new hs(this.observer,l,r,"",t)}resetWorker(){if(this.workerContext){const{worker:e,objectURL:t}=this.workerContext;t&&self.URL.revokeObjectURL(t),e.removeEventListener("message",this.onwmsg),e.onerror=null,e.terminate(),this.workerContext=null}}destroy(){if(this.workerContext)this.resetWorker(),this.onwmsg=void 0;else{const t=this.transmuxer;t&&(t.destroy(),this.transmuxer=null)}const e=this.observer;e&&e.removeAllListeners(),this.frag=null,this.observer=null,this.hls=null}push(e,t,n,i,r,s,o,l,d,c){var h,u;d.transmuxing.start=self.performance.now();const{transmuxer:m}=this,A=s?s.start:r.start,f=r.decryptdata,g=this.frag,C=!(g&&r.cc===g.cc),T=!(g&&d.level===g.level),S=g?d.sn-g.sn:-1,k=this.part?d.part-this.part.index:-1,I=S===0&&d.id>1&&d.id===(g==null?void 0:g.stats.chunkCount),P=!T&&(S===1||S===0&&(k===1||I&&k<=0)),_=self.performance.now();(T||S||r.stats.parsing.start===0)&&(r.stats.parsing.start=_),s&&(k||!P)&&(s.stats.parsing.start=_);const N=!(g&&((h=r.initSegment)==null?void 0:h.url)===((u=g.initSegment)==null?void 0:u.url)),U=new Tu(C,P,l,T,A,N);if(!P||C||N){D.log(`[transmuxer-interface, ${r.type}]: Starting new transmux session for sn: ${d.sn} p: ${d.part} level: ${d.level} id: ${d.id}
        discontinuity: ${C}
        trackSwitch: ${T}
        contiguous: ${P}
        accurateTimeOffset: ${l}
        timeOffset: ${A}
        initSegmentChange: ${N}`);const F=new Cu(n,i,t,o,c);this.configureTransmuxer(F)}if(this.frag=r,this.part=s,this.workerContext)this.workerContext.worker.postMessage({cmd:"demux",data:e,decryptdata:f,chunkMeta:d,state:U},e instanceof ArrayBuffer?[e]:[]);else if(m){const F=m.push(e,f,d,U);Rn(F)?(m.async=!0,F.then($=>{this.handleTransmuxComplete($)}).catch($=>{this.transmuxerError($,d,"transmuxer-interface push error")})):(m.async=!1,this.handleTransmuxComplete(F))}}flush(e){e.transmuxing.start=self.performance.now();const{transmuxer:t}=this;if(this.workerContext)this.workerContext.worker.postMessage({cmd:"flush",chunkMeta:e});else if(t){let n=t.flush(e);Rn(n)||t.async?(Rn(n)||(n=Promise.resolve(n)),n.then(r=>{this.handleFlushResult(r,e)}).catch(r=>{this.transmuxerError(r,e,"transmuxer-interface flush error")})):this.handleFlushResult(n,e)}}transmuxerError(e,t,n){this.hls&&(this.error=e,this.hls.trigger(v.ERROR,{type:ie.MEDIA_ERROR,details:O.FRAG_PARSING_ERROR,chunkMeta:t,frag:this.frag||void 0,fatal:!1,error:e,err:e,reason:n}))}handleFlushResult(e,t){e.forEach(n=>{this.handleTransmuxComplete(n)}),this.onFlush(t)}onWorkerMessage(e){const t=e.data;if(!(t!=null&&t.event)){D.warn(`worker message received with no ${t?"event name":"data"}`);return}const n=this.hls;if(this.hls)switch(t.event){case"init":{var i;const r=(i=this.workerContext)==null?void 0:i.objectURL;r&&self.URL.revokeObjectURL(r);break}case"transmuxComplete":{this.handleTransmuxComplete(t.data);break}case"flush":{this.onFlush(t.data);break}case"workerLog":D[t.data.logType]&&D[t.data.logType](t.data.message);break;default:{t.data=t.data||{},t.data.frag=this.frag,t.data.id=this.id,n.trigger(t.event,t.data);break}}}configureTransmuxer(e){const{transmuxer:t}=this;this.workerContext?this.workerContext.worker.postMessage({cmd:"configure",config:e}):t&&t.configure(e)}handleTransmuxComplete(e){e.chunkMeta.transmuxing.end=self.performance.now(),this.onTransmuxComplete(e)}}function wa(a,e){if(a.length!==e.length)return!1;for(let t=0;t<a.length;t++)if(!zt(a[t].attrs,e[t].attrs))return!1;return!0}function zt(a,e,t){const n=a["STABLE-RENDITION-ID"];return n&&!t?n===e["STABLE-RENDITION-ID"]:!(t||["LANGUAGE","NAME","CHARACTERISTICS","AUTOSELECT","DEFAULT","FORCED","ASSOC-LANGUAGE"]).some(i=>a[i]!==e[i])}function $i(a,e){return e.label.toLowerCase()===a.name.toLowerCase()&&(!e.language||e.language.toLowerCase()===(a.lang||"").toLowerCase())}const ps=100;class ku extends tr{constructor(e,t,n){super(e,t,n,"[audio-stream-controller]",ne.AUDIO),this.videoBuffer=null,this.videoTrackCC=-1,this.waitingVideoCC=-1,this.bufferedTrack=null,this.switchingTrack=null,this.trackId=-1,this.waitingData=null,this.mainDetails=null,this.flushing=!1,this.bufferFlushed=!1,this.cachedTrackLoadedData=null,this._registerListeners()}onHandlerDestroying(){this._unregisterListeners(),super.onHandlerDestroying(),this.mainDetails=null,this.bufferedTrack=null,this.switchingTrack=null}_registerListeners(){const{hls:e}=this;e.on(v.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(v.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(v.MANIFEST_LOADING,this.onManifestLoading,this),e.on(v.LEVEL_LOADED,this.onLevelLoaded,this),e.on(v.AUDIO_TRACKS_UPDATED,this.onAudioTracksUpdated,this),e.on(v.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.on(v.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.on(v.ERROR,this.onError,this),e.on(v.BUFFER_RESET,this.onBufferReset,this),e.on(v.BUFFER_CREATED,this.onBufferCreated,this),e.on(v.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(v.BUFFER_FLUSHED,this.onBufferFlushed,this),e.on(v.INIT_PTS_FOUND,this.onInitPtsFound,this),e.on(v.FRAG_BUFFERED,this.onFragBuffered,this)}_unregisterListeners(){const{hls:e}=this;e.off(v.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(v.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(v.MANIFEST_LOADING,this.onManifestLoading,this),e.off(v.LEVEL_LOADED,this.onLevelLoaded,this),e.off(v.AUDIO_TRACKS_UPDATED,this.onAudioTracksUpdated,this),e.off(v.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.off(v.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.off(v.ERROR,this.onError,this),e.off(v.BUFFER_RESET,this.onBufferReset,this),e.off(v.BUFFER_CREATED,this.onBufferCreated,this),e.off(v.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(v.BUFFER_FLUSHED,this.onBufferFlushed,this),e.off(v.INIT_PTS_FOUND,this.onInitPtsFound,this),e.off(v.FRAG_BUFFERED,this.onFragBuffered,this)}onInitPtsFound(e,{frag:t,id:n,initPTS:i,timescale:r}){if(n==="main"){const s=t.cc;this.initPTS[t.cc]={baseTime:i,timescale:r},this.log(`InitPTS for cc: ${s} found from main: ${i}`),this.videoTrackCC=s,this.state===G.WAITING_INIT_PTS&&this.tick()}}startLoad(e){if(!this.levels){this.startPosition=e,this.state=G.STOPPED;return}const t=this.lastCurrentTime;this.stopLoad(),this.setInterval(ps),t>0&&e===-1?(this.log(`Override startPosition with lastCurrentTime @${t.toFixed(3)}`),e=t,this.state=G.IDLE):(this.loadedmetadata=!1,this.state=G.WAITING_TRACK),this.nextLoadPosition=this.startPosition=this.lastCurrentTime=e,this.tick()}doTick(){switch(this.state){case G.IDLE:this.doTickIdle();break;case G.WAITING_TRACK:{var e;const{levels:n,trackId:i}=this,r=n==null||(e=n[i])==null?void 0:e.details;if(r){if(this.waitForCdnTuneIn(r))break;this.state=G.WAITING_INIT_PTS}break}case G.FRAG_LOADING_WAITING_RETRY:{var t;const n=performance.now(),i=this.retryDate;if(!i||n>=i||(t=this.media)!=null&&t.seeking){const{levels:r,trackId:s}=this;this.log("RetryDate reached, switch back to IDLE state"),this.resetStartWhenNotLoaded((r==null?void 0:r[s])||null),this.state=G.IDLE}break}case G.WAITING_INIT_PTS:{const n=this.waitingData;if(n){const{frag:i,part:r,cache:s,complete:o}=n;if(this.initPTS[i.cc]!==void 0){this.waitingData=null,this.waitingVideoCC=-1,this.state=G.FRAG_LOADING;const l=s.flush(),d={frag:i,part:r,payload:l,networkDetails:null};this._handleFragmentLoadProgress(d),o&&super._handleFragmentLoadComplete(d)}else if(this.videoTrackCC!==this.waitingVideoCC)this.log(`Waiting fragment cc (${i.cc}) cancelled because video is at cc ${this.videoTrackCC}`),this.clearWaitingFragment();else{const l=this.getLoadPosition(),d=Ce.bufferInfo(this.mediaBuffer,l,this.config.maxBufferHole);Ni(d.end,this.config.maxFragLookUpTolerance,i)<0&&(this.log(`Waiting fragment cc (${i.cc}) @ ${i.start} cancelled because another fragment at ${d.end} is needed`),this.clearWaitingFragment())}}else this.state=G.IDLE}}this.onTickEnd()}clearWaitingFragment(){const e=this.waitingData;e&&(this.fragmentTracker.removeFragment(e.frag),this.waitingData=null,this.waitingVideoCC=-1,this.state=G.IDLE)}resetLoadingState(){this.clearWaitingFragment(),super.resetLoadingState()}onTickEnd(){const{media:e}=this;e!=null&&e.readyState&&(this.lastCurrentTime=e.currentTime)}doTickIdle(){const{hls:e,levels:t,media:n,trackId:i}=this,r=e.config;if(!this.buffering||!n&&(this.startFragRequested||!r.startFragPrefetch)||!(t!=null&&t[i]))return;const s=t[i],o=s.details;if(!o||o.live&&this.levelLastLoaded!==s||this.waitForCdnTuneIn(o)){this.state=G.WAITING_TRACK;return}const l=this.mediaBuffer?this.mediaBuffer:this.media;this.bufferFlushed&&l&&(this.bufferFlushed=!1,this.afterBufferFlushed(l,be.AUDIO,ne.AUDIO));const d=this.getFwdBufferInfo(l,ne.AUDIO);if(d===null)return;const{bufferedTrack:c,switchingTrack:h}=this;if(!h&&this._streamEnded(d,o)){e.trigger(v.BUFFER_EOS,{type:"audio"}),this.state=G.ENDED;return}const u=this.getFwdBufferInfo(this.videoBuffer?this.videoBuffer:this.media,ne.MAIN),m=d.len,A=this.getMaxBufferLength(u==null?void 0:u.len),f=o.fragments,g=f[0].start;let C=this.flushing?this.getLoadPosition():d.end;if(h&&n){const I=this.getLoadPosition();c&&!zt(h.attrs,c.attrs)&&(C=I),o.PTSKnown&&I<g&&(d.end>g||d.nextStart)&&(this.log("Alt audio track ahead of main track, seek to start of alt audio track"),n.currentTime=g+.05)}if(m>=A&&!h&&C<f[f.length-1].start)return;let T=this.getNextFragment(C,o),S=!1;if(T&&this.isLoopLoading(T,C)&&(S=!!T.gap,T=this.getNextFragmentLoopLoading(T,o,d,ne.MAIN,A)),!T){this.bufferFlushed=!0;return}const k=u&&T.start>u.end+o.targetduration;if(k||!(u!=null&&u.len)&&d.len){const I=this.getAppendedFrag(T.start,ne.MAIN);if(I===null||(S||(S=!!I.gap||!!k&&u.len===0),k&&!S||S&&d.nextStart&&d.nextStart<I.end))return}this.loadFragment(T,s,C)}getMaxBufferLength(e){const t=super.getMaxBufferLength();return e?Math.min(Math.max(t,e),this.config.maxMaxBufferLength):t}onMediaDetaching(){this.videoBuffer=null,this.bufferFlushed=this.flushing=!1,super.onMediaDetaching()}onAudioTracksUpdated(e,{audioTracks:t}){this.resetTransmuxer(),this.levels=t.map(n=>new qt(n))}onAudioTrackSwitching(e,t){const n=!!t.url;this.trackId=t.id;const{fragCurrent:i}=this;i&&(i.abortRequests(),this.removeUnbufferedFrags(i.start)),this.resetLoadingState(),n?this.setInterval(ps):this.resetTransmuxer(),n?(this.switchingTrack=t,this.state=G.IDLE,this.flushAudioIfNeeded(t)):(this.switchingTrack=null,this.bufferedTrack=t,this.state=G.STOPPED),this.tick()}onManifestLoading(){this.fragmentTracker.removeAllFragments(),this.startPosition=this.lastCurrentTime=0,this.bufferFlushed=this.flushing=!1,this.levels=this.mainDetails=this.waitingData=this.bufferedTrack=this.cachedTrackLoadedData=this.switchingTrack=null,this.startFragRequested=!1,this.trackId=this.videoTrackCC=this.waitingVideoCC=-1}onLevelLoaded(e,t){this.mainDetails=t.details,this.cachedTrackLoadedData!==null&&(this.hls.trigger(v.AUDIO_TRACK_LOADED,this.cachedTrackLoadedData),this.cachedTrackLoadedData=null)}onAudioTrackLoaded(e,t){var n;if(this.mainDetails==null){this.cachedTrackLoadedData=t;return}const{levels:i}=this,{details:r,id:s}=t;if(!i){this.warn(`Audio tracks were reset while loading level ${s}`);return}this.log(`Audio track ${s} loaded [${r.startSN},${r.endSN}]${r.lastPartSn?`[part-${r.lastPartSn}-${r.lastPartIndex}]`:""},duration:${r.totalduration}`);const o=i[s];let l=0;if(r.live||(n=o.details)!=null&&n.live){this.checkLiveUpdate(r);const c=this.mainDetails;if(r.deltaUpdateFailed||!c)return;if(!o.details&&r.hasProgramDateTime&&c.hasProgramDateTime)Gn(r,c),l=r.fragments[0].start;else{var d;l=this.alignPlaylists(r,o.details,(d=this.levelLastLoaded)==null?void 0:d.details)}}o.details=r,this.levelLastLoaded=o,!this.startFragRequested&&(this.mainDetails||!r.live)&&this.setStartPosition(this.mainDetails||r,l),this.state===G.WAITING_TRACK&&!this.waitForCdnTuneIn(r)&&(this.state=G.IDLE),this.tick()}_handleFragmentLoadProgress(e){var t;const{frag:n,part:i,payload:r}=e,{config:s,trackId:o,levels:l}=this;if(!l){this.warn(`Audio tracks were reset while fragment load was in progress. Fragment ${n.sn} of level ${n.level} will not be buffered`);return}const d=l[o];if(!d){this.warn("Audio track is undefined on fragment load progress");return}const c=d.details;if(!c){this.warn("Audio track details undefined on fragment load progress"),this.removeUnbufferedFrags(n.start);return}const h=s.defaultAudioCodec||d.audioCodec||"mp4a.40.2";let u=this.transmuxer;u||(u=this.transmuxer=new ka(this.hls,ne.AUDIO,this._handleTransmuxComplete.bind(this),this._handleTransmuxerFlush.bind(this)));const m=this.initPTS[n.cc],A=(t=n.initSegment)==null?void 0:t.data;if(m!==void 0){const g=i?i.index:-1,C=g!==-1,T=new Ji(n.level,n.sn,n.stats.chunkCount,r.byteLength,g,C);u.push(r,A,h,"",n,i,c.totalduration,!1,T,m)}else{this.log(`Unknown video PTS for cc ${n.cc}, waiting for video PTS before demuxing audio frag ${n.sn} of [${c.startSN} ,${c.endSN}],track ${o}`);const{cache:f}=this.waitingData=this.waitingData||{frag:n,part:i,cache:new ca,complete:!1};f.push(new Uint8Array(r)),this.waitingVideoCC=this.videoTrackCC,this.state=G.WAITING_INIT_PTS}}_handleFragmentLoadComplete(e){if(this.waitingData){this.waitingData.complete=!0;return}super._handleFragmentLoadComplete(e)}onBufferReset(){this.mediaBuffer=this.videoBuffer=null,this.loadedmetadata=!1}onBufferCreated(e,t){const n=t.tracks.audio;n&&(this.mediaBuffer=n.buffer||null),t.tracks.video&&(this.videoBuffer=t.tracks.video.buffer||null)}onFragBuffered(e,t){const{frag:n,part:i}=t;if(n.type!==ne.AUDIO){if(!this.loadedmetadata&&n.type===ne.MAIN){const r=this.videoBuffer||this.media;r&&Ce.getBuffered(r).length&&(this.loadedmetadata=!0)}return}if(this.fragContextChanged(n)){this.warn(`Fragment ${n.sn}${i?" p: "+i.index:""} of level ${n.level} finished buffering, but was aborted. state: ${this.state}, audioSwitch: ${this.switchingTrack?this.switchingTrack.name:"false"}`);return}if(n.sn!=="initSegment"){this.fragPrevious=n;const r=this.switchingTrack;r&&(this.bufferedTrack=r,this.switchingTrack=null,this.hls.trigger(v.AUDIO_TRACK_SWITCHED,_e({},r)))}this.fragBufferedComplete(n,i)}onError(e,t){var n;if(t.fatal){this.state=G.ERROR;return}switch(t.details){case O.FRAG_GAP:case O.FRAG_PARSING_ERROR:case O.FRAG_DECRYPT_ERROR:case O.FRAG_LOAD_ERROR:case O.FRAG_LOAD_TIMEOUT:case O.KEY_LOAD_ERROR:case O.KEY_LOAD_TIMEOUT:this.onFragmentOrKeyLoadError(ne.AUDIO,t);break;case O.AUDIO_TRACK_LOAD_ERROR:case O.AUDIO_TRACK_LOAD_TIMEOUT:case O.LEVEL_PARSING_ERROR:!t.levelRetry&&this.state===G.WAITING_TRACK&&((n=t.context)==null?void 0:n.type)===he.AUDIO_TRACK&&(this.state=G.IDLE);break;case O.BUFFER_APPEND_ERROR:case O.BUFFER_FULL_ERROR:if(!t.parent||t.parent!=="audio")return;if(t.details===O.BUFFER_APPEND_ERROR){this.resetLoadingState();return}this.reduceLengthAndFlushBuffer(t)&&(this.bufferedTrack=null,super.flushMainBuffer(0,Number.POSITIVE_INFINITY,"audio"));break;case O.INTERNAL_EXCEPTION:this.recoverWorkerError(t);break}}onBufferFlushing(e,{type:t}){t!==be.VIDEO&&(this.flushing=!0)}onBufferFlushed(e,{type:t}){if(t!==be.VIDEO){this.flushing=!1,this.bufferFlushed=!0,this.state===G.ENDED&&(this.state=G.IDLE);const n=this.mediaBuffer||this.media;n&&(this.afterBufferFlushed(n,t,ne.AUDIO),this.tick())}}_handleTransmuxComplete(e){var t;const n="audio",{hls:i}=this,{remuxResult:r,chunkMeta:s}=e,o=this.getCurrentContext(s);if(!o){this.resetWhenMissingContext(s);return}const{frag:l,part:d,level:c}=o,{details:h}=c,{audio:u,text:m,id3:A,initSegment:f}=r;if(this.fragContextChanged(l)||!h){this.fragmentTracker.removeFragment(l);return}if(this.state=G.PARSING,this.switchingTrack&&u&&this.completeAudioSwitch(this.switchingTrack),f!=null&&f.tracks){const g=l.initSegment||l;this._bufferInitSegment(c,f.tracks,g,s),i.trigger(v.FRAG_PARSING_INIT_SEGMENT,{frag:g,id:n,tracks:f.tracks})}if(u){const{startPTS:g,endPTS:C,startDTS:T,endDTS:S}=u;d&&(d.elementaryStreams[be.AUDIO]={startPTS:g,endPTS:C,startDTS:T,endDTS:S}),l.setElementaryStreamInfo(be.AUDIO,g,C,T,S),this.bufferFragmentData(u,l,d,s)}if(A!=null&&(t=A.samples)!=null&&t.length){const g=we({id:n,frag:l,details:h},A);i.trigger(v.FRAG_PARSING_METADATA,g)}if(m){const g=we({id:n,frag:l,details:h},m);i.trigger(v.FRAG_PARSING_USERDATA,g)}}_bufferInitSegment(e,t,n,i){if(this.state!==G.PARSING)return;t.video&&delete t.video;const r=t.audio;if(!r)return;r.id="audio";const s=e.audioCodec;this.log(`Init audio buffer, container:${r.container}, codecs[level/parsed]=[${s}/${r.codec}]`),s&&s.split(",").length===1&&(r.levelCodec=s),this.hls.trigger(v.BUFFER_CODECS,t);const o=r.initSegment;if(o!=null&&o.byteLength){const l={type:"audio",frag:n,part:null,chunkMeta:i,parent:n.type,data:o};this.hls.trigger(v.BUFFER_APPENDING,l)}this.tickImmediate()}loadFragment(e,t,n){const i=this.fragmentTracker.getState(e);if(this.fragCurrent=e,this.switchingTrack||i===De.NOT_LOADED||i===De.PARTIAL){var r;if(e.sn==="initSegment")this._loadInitSegment(e,t);else if((r=t.details)!=null&&r.live&&!this.initPTS[e.cc]){this.log(`Waiting for video PTS in continuity counter ${e.cc} of live stream before loading audio fragment ${e.sn} of level ${this.trackId}`),this.state=G.WAITING_INIT_PTS;const s=this.mainDetails;s&&s.fragments[0].start!==t.details.fragments[0].start&&Gn(t.details,s)}else this.startFragRequested=!0,super.loadFragment(e,t,n)}else this.clearTrackerIfNeeded(e)}flushAudioIfNeeded(e){const{media:t,bufferedTrack:n}=this,i=n==null?void 0:n.attrs,r=e.attrs;t&&i&&(i.CHANNELS!==r.CHANNELS||n.name!==e.name||n.lang!==e.lang)&&(this.log("Switching audio track : flushing all audio"),super.flushMainBuffer(0,Number.POSITIVE_INFINITY,"audio"),this.bufferedTrack=null)}completeAudioSwitch(e){const{hls:t}=this;this.flushAudioIfNeeded(e),this.bufferedTrack=e,this.switchingTrack=null,t.trigger(v.AUDIO_TRACK_SWITCHED,_e({},e))}}class wu extends Zi{constructor(e){super(e,"[audio-track-controller]"),this.tracks=[],this.groupIds=null,this.tracksInGroup=[],this.trackId=-1,this.currentTrack=null,this.selectDefaultTrack=!0,this.registerListeners()}registerListeners(){const{hls:e}=this;e.on(v.MANIFEST_LOADING,this.onManifestLoading,this),e.on(v.MANIFEST_PARSED,this.onManifestParsed,this),e.on(v.LEVEL_LOADING,this.onLevelLoading,this),e.on(v.LEVEL_SWITCHING,this.onLevelSwitching,this),e.on(v.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.on(v.ERROR,this.onError,this)}unregisterListeners(){const{hls:e}=this;e.off(v.MANIFEST_LOADING,this.onManifestLoading,this),e.off(v.MANIFEST_PARSED,this.onManifestParsed,this),e.off(v.LEVEL_LOADING,this.onLevelLoading,this),e.off(v.LEVEL_SWITCHING,this.onLevelSwitching,this),e.off(v.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.off(v.ERROR,this.onError,this)}destroy(){this.unregisterListeners(),this.tracks.length=0,this.tracksInGroup.length=0,this.currentTrack=null,super.destroy()}onManifestLoading(){this.tracks=[],this.tracksInGroup=[],this.groupIds=null,this.currentTrack=null,this.trackId=-1,this.selectDefaultTrack=!0}onManifestParsed(e,t){this.tracks=t.audioTracks||[]}onAudioTrackLoaded(e,t){const{id:n,groupId:i,details:r}=t,s=this.tracksInGroup[n];if(!s||s.groupId!==i){this.warn(`Audio track with id:${n} and group:${i} not found in active group ${s==null?void 0:s.groupId}`);return}const o=s.details;s.details=t.details,this.log(`Audio track ${n} "${s.name}" lang:${s.lang} group:${i} loaded [${r.startSN}-${r.endSN}]`),n===this.trackId&&this.playlistLoaded(n,t,o)}onLevelLoading(e,t){this.switchLevel(t.level)}onLevelSwitching(e,t){this.switchLevel(t.level)}switchLevel(e){const t=this.hls.levels[e];if(!t)return;const n=t.audioGroups||null,i=this.groupIds;let r=this.currentTrack;if(!n||(i==null?void 0:i.length)!==(n==null?void 0:n.length)||n!=null&&n.some(o=>(i==null?void 0:i.indexOf(o))===-1)){this.groupIds=n,this.trackId=-1,this.currentTrack=null;const o=this.tracks.filter(u=>!n||n.indexOf(u.groupId)!==-1);if(o.length)this.selectDefaultTrack&&!o.some(u=>u.default)&&(this.selectDefaultTrack=!1),o.forEach((u,m)=>{u.id=m});else if(!r&&!this.tracksInGroup.length)return;this.tracksInGroup=o;const l=this.hls.config.audioPreference;if(!r&&l){const u=it(l,o,Ft);if(u>-1)r=o[u];else{const m=it(l,this.tracks);r=this.tracks[m]}}let d=this.findTrackId(r);d===-1&&r&&(d=this.findTrackId(null));const c={audioTracks:o};this.log(`Updating audio tracks, ${o.length} track(s) found in group(s): ${n==null?void 0:n.join(",")}`),this.hls.trigger(v.AUDIO_TRACKS_UPDATED,c);const h=this.trackId;if(d!==-1&&h===-1)this.setAudioTrack(d);else if(o.length&&h===-1){var s;const u=new Error(`No audio track selected for current audio group-ID(s): ${(s=this.groupIds)==null?void 0:s.join(",")} track count: ${o.length}`);this.warn(u.message),this.hls.trigger(v.ERROR,{type:ie.MEDIA_ERROR,details:O.AUDIO_TRACK_LOAD_ERROR,fatal:!0,error:u})}}else this.shouldReloadPlaylist(r)&&this.setAudioTrack(this.trackId)}onError(e,t){t.fatal||!t.context||t.context.type===he.AUDIO_TRACK&&t.context.id===this.trackId&&(!this.groupIds||this.groupIds.indexOf(t.context.groupId)!==-1)&&(this.requestScheduled=-1,this.checkRetry(t))}get allAudioTracks(){return this.tracks}get audioTracks(){return this.tracksInGroup}get audioTrack(){return this.trackId}set audioTrack(e){this.selectDefaultTrack=!1,this.setAudioTrack(e)}setAudioOption(e){const t=this.hls;if(t.config.audioPreference=e,e){const n=this.allAudioTracks;if(this.selectDefaultTrack=!1,n.length){const i=this.currentTrack;if(i&&Gt(e,i,Ft))return i;const r=it(e,this.tracksInGroup,Ft);if(r>-1){const s=this.tracksInGroup[r];return this.setAudioTrack(r),s}else if(i){let s=t.loadLevel;s===-1&&(s=t.firstAutoLevel);const o=wc(e,t.levels,n,s,Ft);if(o===-1)return null;t.nextLoadLevel=o}if(e.channels||e.audioCodec){const s=it(e,n);if(s>-1)return n[s]}}}return null}setAudioTrack(e){const t=this.tracksInGroup;if(e<0||e>=t.length){this.warn(`Invalid audio track id: ${e}`);return}this.clearTimer(),this.selectDefaultTrack=!1;const n=this.currentTrack,i=t[e],r=i.details&&!i.details.live;if(e===this.trackId&&i===n&&r||(this.log(`Switching to audio-track ${e} "${i.name}" lang:${i.lang} group:${i.groupId} channels:${i.channels}`),this.trackId=e,this.currentTrack=i,this.hls.trigger(v.AUDIO_TRACK_SWITCHING,_e({},i)),r))return;const s=this.switchParams(i.url,n==null?void 0:n.details,i.details);this.loadPlaylist(s)}findTrackId(e){const t=this.tracksInGroup;for(let n=0;n<t.length;n++){const i=t[n];if(!(this.selectDefaultTrack&&!i.default)&&(!e||Gt(e,i,Ft)))return n}if(e){const{name:n,lang:i,assocLang:r,characteristics:s,audioCodec:o,channels:l}=e;for(let d=0;d<t.length;d++){const c=t[d];if(Gt({name:n,lang:i,assocLang:r,characteristics:s,audioCodec:o,channels:l},c,Ft))return d}for(let d=0;d<t.length;d++){const c=t[d];if(zt(e.attrs,c.attrs,["LANGUAGE","ASSOC-LANGUAGE","CHARACTERISTICS"]))return d}for(let d=0;d<t.length;d++){const c=t[d];if(zt(e.attrs,c.attrs,["LANGUAGE"]))return d}}return-1}loadPlaylist(e){const t=this.currentTrack;if(this.shouldLoadPlaylist(t)&&t){super.loadPlaylist();const n=t.id,i=t.groupId;let r=t.url;if(e)try{r=e.addDirectives(r)}catch(s){this.warn(`Could not construct new URL with HLS Delivery Directives: ${s}`)}this.log(`loading audio-track playlist ${n} "${t.name}" lang:${t.lang} group:${i}`),this.clearTimer(),this.hls.trigger(v.AUDIO_TRACK_LOADING,{url:r,id:n,groupId:i,deliveryDirectives:e||null})}}}const fs=500;class Lu extends tr{constructor(e,t,n){super(e,t,n,"[subtitle-stream-controller]",ne.SUBTITLE),this.currentTrackId=-1,this.tracksBuffered=[],this.mainDetails=null,this._registerListeners()}onHandlerDestroying(){this._unregisterListeners(),super.onHandlerDestroying(),this.mainDetails=null}_registerListeners(){const{hls:e}=this;e.on(v.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(v.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(v.MANIFEST_LOADING,this.onManifestLoading,this),e.on(v.LEVEL_LOADED,this.onLevelLoaded,this),e.on(v.ERROR,this.onError,this),e.on(v.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.on(v.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),e.on(v.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.on(v.SUBTITLE_FRAG_PROCESSED,this.onSubtitleFragProcessed,this),e.on(v.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(v.FRAG_BUFFERED,this.onFragBuffered,this)}_unregisterListeners(){const{hls:e}=this;e.off(v.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(v.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(v.MANIFEST_LOADING,this.onManifestLoading,this),e.off(v.LEVEL_LOADED,this.onLevelLoaded,this),e.off(v.ERROR,this.onError,this),e.off(v.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.off(v.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),e.off(v.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.off(v.SUBTITLE_FRAG_PROCESSED,this.onSubtitleFragProcessed,this),e.off(v.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(v.FRAG_BUFFERED,this.onFragBuffered,this)}startLoad(e){this.stopLoad(),this.state=G.IDLE,this.setInterval(fs),this.nextLoadPosition=this.startPosition=this.lastCurrentTime=e,this.tick()}onManifestLoading(){this.mainDetails=null,this.fragmentTracker.removeAllFragments()}onMediaDetaching(){this.tracksBuffered=[],super.onMediaDetaching()}onLevelLoaded(e,t){this.mainDetails=t.details}onSubtitleFragProcessed(e,t){const{frag:n,success:i}=t;if(this.fragPrevious=n,this.state=G.IDLE,!i)return;const r=this.tracksBuffered[this.currentTrackId];if(!r)return;let s;const o=n.start;for(let d=0;d<r.length;d++)if(o>=r[d].start&&o<=r[d].end){s=r[d];break}const l=n.start+n.duration;s?s.end=l:(s={start:o,end:l},r.push(s)),this.fragmentTracker.fragBuffered(n),this.fragBufferedComplete(n,null)}onBufferFlushing(e,t){const{startOffset:n,endOffset:i}=t;if(n===0&&i!==Number.POSITIVE_INFINITY){const r=i-1;if(r<=0)return;t.endOffsetSubtitles=Math.max(0,r),this.tracksBuffered.forEach(s=>{for(let o=0;o<s.length;){if(s[o].end<=r){s.shift();continue}else if(s[o].start<r)s[o].start=r;else break;o++}}),this.fragmentTracker.removeFragmentsInRange(n,r,ne.SUBTITLE)}}onFragBuffered(e,t){if(!this.loadedmetadata&&t.frag.type===ne.MAIN){var n;(n=this.media)!=null&&n.buffered.length&&(this.loadedmetadata=!0)}}onError(e,t){const n=t.frag;(n==null?void 0:n.type)===ne.SUBTITLE&&(t.details===O.FRAG_GAP&&this.fragmentTracker.fragBuffered(n,!0),this.fragCurrent&&this.fragCurrent.abortRequests(),this.state!==G.STOPPED&&(this.state=G.IDLE))}onSubtitleTracksUpdated(e,{subtitleTracks:t}){if(this.levels&&wa(this.levels,t)){this.levels=t.map(n=>new qt(n));return}this.tracksBuffered=[],this.levels=t.map(n=>{const i=new qt(n);return this.tracksBuffered[i.id]=[],i}),this.fragmentTracker.removeFragmentsInRange(0,Number.POSITIVE_INFINITY,ne.SUBTITLE),this.fragPrevious=null,this.mediaBuffer=null}onSubtitleTrackSwitch(e,t){var n;if(this.currentTrackId=t.id,!((n=this.levels)!=null&&n.length)||this.currentTrackId===-1){this.clearInterval();return}const i=this.levels[this.currentTrackId];i!=null&&i.details?this.mediaBuffer=this.mediaBufferTimeRanges:this.mediaBuffer=null,i&&this.setInterval(fs)}onSubtitleTrackLoaded(e,t){var n;const{currentTrackId:i,levels:r}=this,{details:s,id:o}=t;if(!r){this.warn(`Subtitle tracks were reset while loading level ${o}`);return}const l=r[o];if(o>=r.length||!l)return;this.log(`Subtitle track ${o} loaded [${s.startSN},${s.endSN}]${s.lastPartSn?`[part-${s.lastPartSn}-${s.lastPartIndex}]`:""},duration:${s.totalduration}`),this.mediaBuffer=this.mediaBufferTimeRanges;let d=0;if(s.live||(n=l.details)!=null&&n.live){const h=this.mainDetails;if(s.deltaUpdateFailed||!h)return;const u=h.fragments[0];if(!l.details)s.hasProgramDateTime&&h.hasProgramDateTime?(Gn(s,h),d=s.fragments[0].start):u&&(d=u.start,Mi(s,d));else{var c;d=this.alignPlaylists(s,l.details,(c=this.levelLastLoaded)==null?void 0:c.details),d===0&&u&&(d=u.start,Mi(s,d))}}l.details=s,this.levelLastLoaded=l,o===i&&(!this.startFragRequested&&(this.mainDetails||!s.live)&&this.setStartPosition(this.mainDetails||s,d),this.tick(),s.live&&!this.fragCurrent&&this.media&&this.state===G.IDLE&&($n(null,s.fragments,this.media.currentTime,0)||(this.warn("Subtitle playlist not aligned with playback"),l.details=void 0)))}_handleFragmentLoadComplete(e){const{frag:t,payload:n}=e,i=t.decryptdata,r=this.hls;if(!this.fragContextChanged(t)&&n&&n.byteLength>0&&i!=null&&i.key&&i.iv&&i.method==="AES-128"){const s=performance.now();this.decrypter.decrypt(new Uint8Array(n),i.key.buffer,i.iv.buffer).catch(o=>{throw r.trigger(v.ERROR,{type:ie.MEDIA_ERROR,details:O.FRAG_DECRYPT_ERROR,fatal:!1,error:o,reason:o.message,frag:t}),o}).then(o=>{const l=performance.now();r.trigger(v.FRAG_DECRYPTED,{frag:t,payload:o,stats:{tstart:s,tdecrypt:l}})}).catch(o=>{this.warn(`${o.name}: ${o.message}`),this.state=G.IDLE})}}doTick(){if(!this.media){this.state=G.IDLE;return}if(this.state===G.IDLE){const{currentTrackId:e,levels:t}=this,n=t==null?void 0:t[e];if(!n||!t.length||!n.details)return;const{config:i}=this,r=this.getLoadPosition(),s=Ce.bufferedInfo(this.tracksBuffered[this.currentTrackId]||[],r,i.maxBufferHole),{end:o,len:l}=s,d=this.getFwdBufferInfo(this.media,ne.MAIN),c=n.details,h=this.getMaxBufferLength(d==null?void 0:d.len)+c.levelTargetDuration;if(l>h)return;const u=c.fragments,m=u.length,A=c.edge;let f=null;const g=this.fragPrevious;if(o<A){const C=i.maxFragLookUpTolerance,T=o>A-C?0:C;f=$n(g,u,Math.max(u[0].start,o),T),!f&&g&&g.start<u[0].start&&(f=u[0])}else f=u[m-1];if(!f)return;if(f=this.mapToInitFragWhenRequired(f),f.sn!=="initSegment"){const C=f.sn-c.startSN,T=u[C-1];T&&T.cc===f.cc&&this.fragmentTracker.getState(T)===De.NOT_LOADED&&(f=T)}this.fragmentTracker.getState(f)===De.NOT_LOADED&&this.loadFragment(f,n,o)}}getMaxBufferLength(e){const t=super.getMaxBufferLength();return e?Math.max(t,e):t}loadFragment(e,t,n){this.fragCurrent=e,e.sn==="initSegment"?this._loadInitSegment(e,t):(this.startFragRequested=!0,super.loadFragment(e,t,n))}get mediaBufferTimeRanges(){return new Iu(this.tracksBuffered[this.currentTrackId]||[])}}class Iu{constructor(e){this.buffered=void 0;const t=(n,i,r)=>{if(i=i>>>0,i>r-1)throw new DOMException(`Failed to execute '${n}' on 'TimeRanges': The index provided (${i}) is greater than the maximum bound (${r})`);return e[i][n]};this.buffered={get length(){return e.length},end(n){return t("end",n,e.length)},start(n){return t("start",n,e.length)}}}}class Ru extends Zi{constructor(e){super(e,"[subtitle-track-controller]"),this.media=null,this.tracks=[],this.groupIds=null,this.tracksInGroup=[],this.trackId=-1,this.currentTrack=null,this.selectDefaultTrack=!0,this.queuedDefaultTrack=-1,this.asyncPollTrackChange=()=>this.pollTrackChange(0),this.useTextTrackPolling=!1,this.subtitlePollingInterval=-1,this._subtitleDisplay=!0,this.onTextTracksChanged=()=>{if(this.useTextTrackPolling||self.clearInterval(this.subtitlePollingInterval),!this.media||!this.hls.config.renderTextTracksNatively)return;let t=null;const n=Sn(this.media.textTracks);for(let r=0;r<n.length;r++)if(n[r].mode==="hidden")t=n[r];else if(n[r].mode==="showing"){t=n[r];break}const i=this.findTrackForTextTrack(t);this.subtitleTrack!==i&&this.setSubtitleTrack(i)},this.registerListeners()}destroy(){this.unregisterListeners(),this.tracks.length=0,this.tracksInGroup.length=0,this.currentTrack=null,this.onTextTracksChanged=this.asyncPollTrackChange=null,super.destroy()}get subtitleDisplay(){return this._subtitleDisplay}set subtitleDisplay(e){this._subtitleDisplay=e,this.trackId>-1&&this.toggleTrackModes()}registerListeners(){const{hls:e}=this;e.on(v.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(v.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(v.MANIFEST_LOADING,this.onManifestLoading,this),e.on(v.MANIFEST_PARSED,this.onManifestParsed,this),e.on(v.LEVEL_LOADING,this.onLevelLoading,this),e.on(v.LEVEL_SWITCHING,this.onLevelSwitching,this),e.on(v.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.on(v.ERROR,this.onError,this)}unregisterListeners(){const{hls:e}=this;e.off(v.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(v.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(v.MANIFEST_LOADING,this.onManifestLoading,this),e.off(v.MANIFEST_PARSED,this.onManifestParsed,this),e.off(v.LEVEL_LOADING,this.onLevelLoading,this),e.off(v.LEVEL_SWITCHING,this.onLevelSwitching,this),e.off(v.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.off(v.ERROR,this.onError,this)}onMediaAttached(e,t){this.media=t.media,this.media&&(this.queuedDefaultTrack>-1&&(this.subtitleTrack=this.queuedDefaultTrack,this.queuedDefaultTrack=-1),this.useTextTrackPolling=!(this.media.textTracks&&"onchange"in this.media.textTracks),this.useTextTrackPolling?this.pollTrackChange(500):this.media.textTracks.addEventListener("change",this.asyncPollTrackChange))}pollTrackChange(e){self.clearInterval(this.subtitlePollingInterval),this.subtitlePollingInterval=self.setInterval(this.onTextTracksChanged,e)}onMediaDetaching(){if(!this.media)return;self.clearInterval(this.subtitlePollingInterval),this.useTextTrackPolling||this.media.textTracks.removeEventListener("change",this.asyncPollTrackChange),this.trackId>-1&&(this.queuedDefaultTrack=this.trackId),Sn(this.media.textTracks).forEach(t=>{$t(t)}),this.subtitleTrack=-1,this.media=null}onManifestLoading(){this.tracks=[],this.groupIds=null,this.tracksInGroup=[],this.trackId=-1,this.currentTrack=null,this.selectDefaultTrack=!0}onManifestParsed(e,t){this.tracks=t.subtitleTracks}onSubtitleTrackLoaded(e,t){const{id:n,groupId:i,details:r}=t,s=this.tracksInGroup[n];if(!s||s.groupId!==i){this.warn(`Subtitle track with id:${n} and group:${i} not found in active group ${s==null?void 0:s.groupId}`);return}const o=s.details;s.details=t.details,this.log(`Subtitle track ${n} "${s.name}" lang:${s.lang} group:${i} loaded [${r.startSN}-${r.endSN}]`),n===this.trackId&&this.playlistLoaded(n,t,o)}onLevelLoading(e,t){this.switchLevel(t.level)}onLevelSwitching(e,t){this.switchLevel(t.level)}switchLevel(e){const t=this.hls.levels[e];if(!t)return;const n=t.subtitleGroups||null,i=this.groupIds;let r=this.currentTrack;if(!n||(i==null?void 0:i.length)!==(n==null?void 0:n.length)||n!=null&&n.some(s=>(i==null?void 0:i.indexOf(s))===-1)){this.groupIds=n,this.trackId=-1,this.currentTrack=null;const s=this.tracks.filter(c=>!n||n.indexOf(c.groupId)!==-1);if(s.length)this.selectDefaultTrack&&!s.some(c=>c.default)&&(this.selectDefaultTrack=!1),s.forEach((c,h)=>{c.id=h});else if(!r&&!this.tracksInGroup.length)return;this.tracksInGroup=s;const o=this.hls.config.subtitlePreference;if(!r&&o){this.selectDefaultTrack=!1;const c=it(o,s);if(c>-1)r=s[c];else{const h=it(o,this.tracks);r=this.tracks[h]}}let l=this.findTrackId(r);l===-1&&r&&(l=this.findTrackId(null));const d={subtitleTracks:s};this.log(`Updating subtitle tracks, ${s.length} track(s) found in "${n==null?void 0:n.join(",")}" group-id`),this.hls.trigger(v.SUBTITLE_TRACKS_UPDATED,d),l!==-1&&this.trackId===-1&&this.setSubtitleTrack(l)}else this.shouldReloadPlaylist(r)&&this.setSubtitleTrack(this.trackId)}findTrackId(e){const t=this.tracksInGroup,n=this.selectDefaultTrack;for(let i=0;i<t.length;i++){const r=t[i];if(!(n&&!r.default||!n&&!e)&&(!e||Gt(r,e)))return i}if(e){for(let i=0;i<t.length;i++){const r=t[i];if(zt(e.attrs,r.attrs,["LANGUAGE","ASSOC-LANGUAGE","CHARACTERISTICS"]))return i}for(let i=0;i<t.length;i++){const r=t[i];if(zt(e.attrs,r.attrs,["LANGUAGE"]))return i}}return-1}findTrackForTextTrack(e){if(e){const t=this.tracksInGroup;for(let n=0;n<t.length;n++){const i=t[n];if($i(i,e))return n}}return-1}onError(e,t){t.fatal||!t.context||t.context.type===he.SUBTITLE_TRACK&&t.context.id===this.trackId&&(!this.groupIds||this.groupIds.indexOf(t.context.groupId)!==-1)&&this.checkRetry(t)}get allSubtitleTracks(){return this.tracks}get subtitleTracks(){return this.tracksInGroup}get subtitleTrack(){return this.trackId}set subtitleTrack(e){this.selectDefaultTrack=!1,this.setSubtitleTrack(e)}setSubtitleOption(e){if(this.hls.config.subtitlePreference=e,e){const t=this.allSubtitleTracks;if(this.selectDefaultTrack=!1,t.length){const n=this.currentTrack;if(n&&Gt(e,n))return n;const i=it(e,this.tracksInGroup);if(i>-1){const r=this.tracksInGroup[i];return this.setSubtitleTrack(i),r}else{if(n)return null;{const r=it(e,t);if(r>-1)return t[r]}}}}return null}loadPlaylist(e){super.loadPlaylist();const t=this.currentTrack;if(this.shouldLoadPlaylist(t)&&t){const n=t.id,i=t.groupId;let r=t.url;if(e)try{r=e.addDirectives(r)}catch(s){this.warn(`Could not construct new URL with HLS Delivery Directives: ${s}`)}this.log(`Loading subtitle playlist for id ${n}`),this.hls.trigger(v.SUBTITLE_TRACK_LOADING,{url:r,id:n,groupId:i,deliveryDirectives:e||null})}}toggleTrackModes(){const{media:e}=this;if(!e)return;const t=Sn(e.textTracks),n=this.currentTrack;let i;if(n&&(i=t.filter(r=>$i(n,r))[0],i||this.warn(`Unable to find subtitle TextTrack with name "${n.name}" and language "${n.lang}"`)),[].slice.call(t).forEach(r=>{r.mode!=="disabled"&&r!==i&&(r.mode="disabled")}),i){const r=this.subtitleDisplay?"showing":"hidden";i.mode!==r&&(i.mode=r)}}setSubtitleTrack(e){const t=this.tracksInGroup;if(!this.media){this.queuedDefaultTrack=e;return}if(e<-1||e>=t.length||!X(e)){this.warn(`Invalid subtitle track id: ${e}`);return}this.clearTimer(),this.selectDefaultTrack=!1;const n=this.currentTrack,i=t[e]||null;if(this.trackId=e,this.currentTrack=i,this.toggleTrackModes(),!i){this.hls.trigger(v.SUBTITLE_TRACK_SWITCH,{id:e});return}const r=!!i.details&&!i.details.live;if(e===this.trackId&&i===n&&r)return;this.log(`Switching to subtitle-track ${e}`+(i?` "${i.name}" lang:${i.lang} group:${i.groupId}`:""));const{id:s,groupId:o="",name:l,type:d,url:c}=i;this.hls.trigger(v.SUBTITLE_TRACK_SWITCH,{id:s,groupId:o,name:l,type:d,url:c});const h=this.switchParams(i.url,n==null?void 0:n.details,i.details);this.loadPlaylist(h)}}class Du{constructor(e){this.buffers=void 0,this.queues={video:[],audio:[],audiovideo:[]},this.buffers=e}append(e,t,n){const i=this.queues[t];i.push(e),i.length===1&&!n&&this.executeNext(t)}insertAbort(e,t){this.queues[t].unshift(e),this.executeNext(t)}appendBlocker(e){let t;const n=new Promise(r=>{t=r}),i={execute:t,onStart:()=>{},onComplete:()=>{},onError:()=>{}};return this.append(i,e),n}executeNext(e){const t=this.queues[e];if(t.length){const n=t[0];try{n.execute()}catch(i){D.warn(`[buffer-operation-queue]: Exception executing "${e}" SourceBuffer operation: ${i}`),n.onError(i);const r=this.buffers[e];r!=null&&r.updating||this.shiftAndExecuteNext(e)}}}shiftAndExecuteNext(e){this.queues[e].shift(),this.executeNext(e)}current(e){return this.queues[e][0]}}const ms=/(avc[1234]|hvc1|hev1|dvh[1e]|vp09|av01)(?:\.[^.,]+)+/;class _u{constructor(e){this.details=null,this._objectUrl=null,this.operationQueue=void 0,this.listeners=void 0,this.hls=void 0,this.bufferCodecEventsExpected=0,this._bufferCodecEventsTotal=0,this.media=null,this.mediaSource=null,this.lastMpegAudioChunk=null,this.appendSource=void 0,this.appendErrors={audio:0,video:0,audiovideo:0},this.tracks={},this.pendingTracks={},this.sourceBuffer=void 0,this.log=void 0,this.warn=void 0,this.error=void 0,this._onEndStreaming=n=>{this.hls&&this.hls.pauseBuffering()},this._onStartStreaming=n=>{this.hls&&this.hls.resumeBuffering()},this._onMediaSourceOpen=()=>{const{media:n,mediaSource:i}=this;this.log("Media source opened"),n&&(n.removeEventListener("emptied",this._onMediaEmptied),this.updateMediaElementDuration(),this.hls.trigger(v.MEDIA_ATTACHED,{media:n,mediaSource:i})),i&&i.removeEventListener("sourceopen",this._onMediaSourceOpen),this.checkPendingTracks()},this._onMediaSourceClose=()=>{this.log("Media source closed")},this._onMediaSourceEnded=()=>{this.log("Media source ended")},this._onMediaEmptied=()=>{const{mediaSrc:n,_objectUrl:i}=this;n!==i&&D.error(`Media element src was set while attaching MediaSource (${i} > ${n})`)},this.hls=e;const t="[buffer-controller]";this.appendSource=Gd(Dt(e.config.preferManagedMediaSource)),this.log=D.log.bind(D,t),this.warn=D.warn.bind(D,t),this.error=D.error.bind(D,t),this._initSourceBuffer(),this.registerListeners()}hasSourceTypes(){return this.getSourceBufferTypes().length>0||Object.keys(this.pendingTracks).length>0}destroy(){this.unregisterListeners(),this.details=null,this.lastMpegAudioChunk=null,this.hls=null}registerListeners(){const{hls:e}=this;e.on(v.MEDIA_ATTACHING,this.onMediaAttaching,this),e.on(v.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(v.MANIFEST_LOADING,this.onManifestLoading,this),e.on(v.MANIFEST_PARSED,this.onManifestParsed,this),e.on(v.BUFFER_RESET,this.onBufferReset,this),e.on(v.BUFFER_APPENDING,this.onBufferAppending,this),e.on(v.BUFFER_CODECS,this.onBufferCodecs,this),e.on(v.BUFFER_EOS,this.onBufferEos,this),e.on(v.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(v.LEVEL_UPDATED,this.onLevelUpdated,this),e.on(v.FRAG_PARSED,this.onFragParsed,this),e.on(v.FRAG_CHANGED,this.onFragChanged,this)}unregisterListeners(){const{hls:e}=this;e.off(v.MEDIA_ATTACHING,this.onMediaAttaching,this),e.off(v.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(v.MANIFEST_LOADING,this.onManifestLoading,this),e.off(v.MANIFEST_PARSED,this.onManifestParsed,this),e.off(v.BUFFER_RESET,this.onBufferReset,this),e.off(v.BUFFER_APPENDING,this.onBufferAppending,this),e.off(v.BUFFER_CODECS,this.onBufferCodecs,this),e.off(v.BUFFER_EOS,this.onBufferEos,this),e.off(v.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(v.LEVEL_UPDATED,this.onLevelUpdated,this),e.off(v.FRAG_PARSED,this.onFragParsed,this),e.off(v.FRAG_CHANGED,this.onFragChanged,this)}_initSourceBuffer(){this.sourceBuffer={},this.operationQueue=new Du(this.sourceBuffer),this.listeners={audio:[],video:[],audiovideo:[]},this.appendErrors={audio:0,video:0,audiovideo:0},this.lastMpegAudioChunk=null}onManifestLoading(){this.bufferCodecEventsExpected=this._bufferCodecEventsTotal=0,this.details=null}onManifestParsed(e,t){let n=2;(t.audio&&!t.video||!t.altAudio)&&(n=1),this.bufferCodecEventsExpected=this._bufferCodecEventsTotal=n,this.log(`${this.bufferCodecEventsExpected} bufferCodec event(s) expected`)}onMediaAttaching(e,t){const n=this.media=t.media,i=Dt(this.appendSource);if(n&&i){var r;const s=this.mediaSource=new i;this.log(`created media source: ${(r=s.constructor)==null?void 0:r.name}`),s.addEventListener("sourceopen",this._onMediaSourceOpen),s.addEventListener("sourceended",this._onMediaSourceEnded),s.addEventListener("sourceclose",this._onMediaSourceClose),this.appendSource&&(s.addEventListener("startstreaming",this._onStartStreaming),s.addEventListener("endstreaming",this._onEndStreaming));const o=this._objectUrl=self.URL.createObjectURL(s);if(this.appendSource)try{n.removeAttribute("src");const l=self.ManagedMediaSource;n.disableRemotePlayback=n.disableRemotePlayback||l&&s instanceof l,As(n),Bu(n,o),n.load()}catch{n.src=o}else n.src=o;n.addEventListener("emptied",this._onMediaEmptied)}}onMediaDetaching(){const{media:e,mediaSource:t,_objectUrl:n}=this;if(t){if(this.log("media source detaching"),t.readyState==="open")try{t.endOfStream()}catch(i){this.warn(`onMediaDetaching: ${i.message} while calling endOfStream`)}this.onBufferReset(),t.removeEventListener("sourceopen",this._onMediaSourceOpen),t.removeEventListener("sourceended",this._onMediaSourceEnded),t.removeEventListener("sourceclose",this._onMediaSourceClose),this.appendSource&&(t.removeEventListener("startstreaming",this._onStartStreaming),t.removeEventListener("endstreaming",this._onEndStreaming)),e&&(e.removeEventListener("emptied",this._onMediaEmptied),n&&self.URL.revokeObjectURL(n),this.mediaSrc===n?(e.removeAttribute("src"),this.appendSource&&As(e),e.load()):this.warn("media|source.src was changed by a third party - skip cleanup")),this.mediaSource=null,this.media=null,this._objectUrl=null,this.bufferCodecEventsExpected=this._bufferCodecEventsTotal,this.pendingTracks={},this.tracks={}}this.hls.trigger(v.MEDIA_DETACHED,void 0)}onBufferReset(){this.getSourceBufferTypes().forEach(e=>{this.resetBuffer(e)}),this._initSourceBuffer(),this.hls.resumeBuffering()}resetBuffer(e){const t=this.sourceBuffer[e];try{if(t){var n;this.removeBufferListeners(e),this.sourceBuffer[e]=void 0,(n=this.mediaSource)!=null&&n.sourceBuffers.length&&this.mediaSource.removeSourceBuffer(t)}}catch(i){this.warn(`onBufferReset ${e}`,i)}}onBufferCodecs(e,t){const n=this.getSourceBufferTypes().length,i=Object.keys(t);if(i.forEach(s=>{if(n){const l=this.tracks[s];if(l&&typeof l.buffer.changeType=="function"){var o;const{id:d,codec:c,levelCodec:h,container:u,metadata:m}=t[s],A=Mr(l.codec,l.levelCodec),f=A==null?void 0:A.replace(ms,"$1");let g=Mr(c,h);const C=(o=g)==null?void 0:o.replace(ms,"$1");if(g&&f!==C){s.slice(0,5)==="audio"&&(g=Fn(g,this.appendSource));const T=`${u};codecs=${g}`;this.appendChangeType(s,T),this.log(`switching codec ${A} to ${g}`),this.tracks[s]={buffer:l.buffer,codec:c,container:u,levelCodec:h,metadata:m,id:d}}}}else this.pendingTracks[s]=t[s]}),n)return;const r=Math.max(this.bufferCodecEventsExpected-1,0);this.bufferCodecEventsExpected!==r&&(this.log(`${r} bufferCodec event(s) expected ${i.join(",")}`),this.bufferCodecEventsExpected=r),this.mediaSource&&this.mediaSource.readyState==="open"&&this.checkPendingTracks()}appendChangeType(e,t){const{operationQueue:n}=this,i={execute:()=>{const r=this.sourceBuffer[e];r&&(this.log(`changing ${e} sourceBuffer type to ${t}`),r.changeType(t)),n.shiftAndExecuteNext(e)},onStart:()=>{},onComplete:()=>{},onError:r=>{this.warn(`Failed to change ${e} SourceBuffer type`,r)}};n.append(i,e,!!this.pendingTracks[e])}onBufferAppending(e,t){const{hls:n,operationQueue:i,tracks:r}=this,{data:s,type:o,frag:l,part:d,chunkMeta:c}=t,h=c.buffering[o],u=self.performance.now();h.start=u;const m=l.stats.buffering,A=d?d.stats.buffering:null;m.start===0&&(m.start=u),A&&A.start===0&&(A.start=u);const f=r.audio;let g=!1;o==="audio"&&(f==null?void 0:f.container)==="audio/mpeg"&&(g=!this.lastMpegAudioChunk||c.id===1||this.lastMpegAudioChunk.sn!==c.sn,this.lastMpegAudioChunk=c);const C=l.start,T={execute:()=>{if(h.executeStart=self.performance.now(),g){const S=this.sourceBuffer[o];if(S){const k=C-S.timestampOffset;Math.abs(k)>=.1&&(this.log(`Updating audio SourceBuffer timestampOffset to ${C} (delta: ${k}) sn: ${l.sn})`),S.timestampOffset=C)}}this.appendExecutor(s,o)},onStart:()=>{},onComplete:()=>{const S=self.performance.now();h.executeEnd=h.end=S,m.first===0&&(m.first=S),A&&A.first===0&&(A.first=S);const{sourceBuffer:k}=this,I={};for(const P in k)I[P]=Ce.getBuffered(k[P]);this.appendErrors[o]=0,o==="audio"||o==="video"?this.appendErrors.audiovideo=0:(this.appendErrors.audio=0,this.appendErrors.video=0),this.hls.trigger(v.BUFFER_APPENDED,{type:o,frag:l,part:d,chunkMeta:c,parent:l.type,timeRanges:I})},onError:S=>{const k={type:ie.MEDIA_ERROR,parent:l.type,details:O.BUFFER_APPEND_ERROR,sourceBufferName:o,frag:l,part:d,chunkMeta:c,error:S,err:S,fatal:!1};if(S.code===DOMException.QUOTA_EXCEEDED_ERR)k.details=O.BUFFER_FULL_ERROR;else{const I=++this.appendErrors[o];k.details=O.BUFFER_APPEND_ERROR,this.warn(`Failed ${I}/${n.config.appendErrorMaxRetry} times to append segment in "${o}" sourceBuffer`),I>=n.config.appendErrorMaxRetry&&(k.fatal=!0)}n.trigger(v.ERROR,k)}};i.append(T,o,!!this.pendingTracks[o])}onBufferFlushing(e,t){const{operationQueue:n}=this,i=r=>({execute:this.removeExecutor.bind(this,r,t.startOffset,t.endOffset),onStart:()=>{},onComplete:()=>{this.hls.trigger(v.BUFFER_FLUSHED,{type:r})},onError:s=>{this.warn(`Failed to remove from ${r} SourceBuffer`,s)}});t.type?n.append(i(t.type),t.type):this.getSourceBufferTypes().forEach(r=>{n.append(i(r),r)})}onFragParsed(e,t){const{frag:n,part:i}=t,r=[],s=i?i.elementaryStreams:n.elementaryStreams;s[be.AUDIOVIDEO]?r.push("audiovideo"):(s[be.AUDIO]&&r.push("audio"),s[be.VIDEO]&&r.push("video"));const o=()=>{const l=self.performance.now();n.stats.buffering.end=l,i&&(i.stats.buffering.end=l);const d=i?i.stats:n.stats;this.hls.trigger(v.FRAG_BUFFERED,{frag:n,part:i,stats:d,id:n.type})};r.length===0&&this.warn(`Fragments must have at least one ElementaryStreamType set. type: ${n.type} level: ${n.level} sn: ${n.sn}`),this.blockBuffers(o,r)}onFragChanged(e,t){this.trimBuffers()}onBufferEos(e,t){this.getSourceBufferTypes().reduce((i,r)=>{const s=this.sourceBuffer[r];return s&&(!t.type||t.type===r)&&(s.ending=!0,s.ended||(s.ended=!0,this.log(`${r} sourceBuffer now EOS`))),i&&!!(!s||s.ended)},!0)&&(this.log("Queueing mediaSource.endOfStream()"),this.blockBuffers(()=>{this.getSourceBufferTypes().forEach(r=>{const s=this.sourceBuffer[r];s&&(s.ending=!1)});const{mediaSource:i}=this;if(!i||i.readyState!=="open"){i&&this.log(`Could not call mediaSource.endOfStream(). mediaSource.readyState: ${i.readyState}`);return}this.log("Calling mediaSource.endOfStream()"),i.endOfStream()}))}onLevelUpdated(e,{details:t}){t.fragments.length&&(this.details=t,this.getSourceBufferTypes().length?this.blockBuffers(this.updateMediaElementDuration.bind(this)):this.updateMediaElementDuration())}trimBuffers(){const{hls:e,details:t,media:n}=this;if(!n||t===null||!this.getSourceBufferTypes().length)return;const r=e.config,s=n.currentTime,o=t.levelTargetDuration,l=t.live&&r.liveBackBufferLength!==null?r.liveBackBufferLength:r.backBufferLength;if(X(l)&&l>0){const d=Math.max(l,o),c=Math.floor(s/o)*o-d;this.flushBackBuffer(s,o,c)}if(X(r.frontBufferFlushThreshold)&&r.frontBufferFlushThreshold>0){const d=Math.max(r.maxBufferLength,r.frontBufferFlushThreshold),c=Math.max(d,o),h=Math.floor(s/o)*o+c;this.flushFrontBuffer(s,o,h)}}flushBackBuffer(e,t,n){const{details:i,sourceBuffer:r}=this;this.getSourceBufferTypes().forEach(o=>{const l=r[o];if(l){const d=Ce.getBuffered(l);if(d.length>0&&n>d.start(0)){if(this.hls.trigger(v.BACK_BUFFER_REACHED,{bufferEnd:n}),i!=null&&i.live)this.hls.trigger(v.LIVE_BACK_BUFFER_REACHED,{bufferEnd:n});else if(l.ended&&d.end(d.length-1)-e<t*2){this.log(`Cannot flush ${o} back buffer while SourceBuffer is in ended state`);return}this.hls.trigger(v.BUFFER_FLUSHING,{startOffset:0,endOffset:n,type:o})}}})}flushFrontBuffer(e,t,n){const{sourceBuffer:i}=this;this.getSourceBufferTypes().forEach(s=>{const o=i[s];if(o){const l=Ce.getBuffered(o),d=l.length;if(d<2)return;const c=l.start(d-1),h=l.end(d-1);if(n>c||e>=c&&e<=h)return;if(o.ended&&e-h<2*t){this.log(`Cannot flush ${s} front buffer while SourceBuffer is in ended state`);return}this.hls.trigger(v.BUFFER_FLUSHING,{startOffset:c,endOffset:1/0,type:s})}})}updateMediaElementDuration(){if(!this.details||!this.media||!this.mediaSource||this.mediaSource.readyState!=="open")return;const{details:e,hls:t,media:n,mediaSource:i}=this,r=e.fragments[0].start+e.totalduration,s=n.duration,o=X(i.duration)?i.duration:0;e.live&&t.config.liveDurationInfinity?(i.duration=1/0,this.updateSeekableRange(e)):(r>o&&r>s||!X(s))&&(this.log(`Updating Media Source duration to ${r.toFixed(3)}`),i.duration=r)}updateSeekableRange(e){const t=this.mediaSource,n=e.fragments;if(n.length&&e.live&&t!=null&&t.setLiveSeekableRange){const r=Math.max(0,n[0].start),s=Math.max(r,r+e.totalduration);this.log(`Media Source duration is set to ${t.duration}. Setting seekable range to ${r}-${s}.`),t.setLiveSeekableRange(r,s)}}checkPendingTracks(){const{bufferCodecEventsExpected:e,operationQueue:t,pendingTracks:n}=this,i=Object.keys(n).length;if(i&&(!e||i===2||"audiovideo"in n)){this.createSourceBuffers(n),this.pendingTracks={};const r=this.getSourceBufferTypes();if(r.length)this.hls.trigger(v.BUFFER_CREATED,{tracks:this.tracks}),r.forEach(s=>{t.executeNext(s)});else{const s=new Error("could not create source buffer for media codec(s)");this.hls.trigger(v.ERROR,{type:ie.MEDIA_ERROR,details:O.BUFFER_INCOMPATIBLE_CODECS_ERROR,fatal:!0,error:s,reason:s.message})}}}createSourceBuffers(e){const{sourceBuffer:t,mediaSource:n}=this;if(!n)throw Error("createSourceBuffers called when mediaSource was null");for(const r in e)if(!t[r]){var i;const s=e[r];if(!s)throw Error(`source buffer exists for track ${r}, however track does not`);let o=((i=s.levelCodec)==null?void 0:i.indexOf(","))===-1?s.levelCodec:s.codec;o&&r.slice(0,5)==="audio"&&(o=Fn(o,this.appendSource));const l=`${s.container};codecs=${o}`;this.log(`creating sourceBuffer(${l})`);try{const d=t[r]=n.addSourceBuffer(l),c=r;this.addBufferListener(c,"updatestart",this._onSBUpdateStart),this.addBufferListener(c,"updateend",this._onSBUpdateEnd),this.addBufferListener(c,"error",this._onSBUpdateError),this.appendSource&&this.addBufferListener(c,"bufferedchange",(h,u)=>{const m=u.removedRanges;m!=null&&m.length&&this.hls.trigger(v.BUFFER_FLUSHED,{type:r})}),this.tracks[r]={buffer:d,codec:o,container:s.container,levelCodec:s.levelCodec,metadata:s.metadata,id:s.id}}catch(d){this.error(`error while trying to add sourceBuffer: ${d.message}`),this.hls.trigger(v.ERROR,{type:ie.MEDIA_ERROR,details:O.BUFFER_ADD_CODEC_ERROR,fatal:!1,error:d,sourceBufferName:r,mimeType:l})}}}get mediaSrc(){var e,t;const n=((e=this.media)==null||(t=e.querySelector)==null?void 0:t.call(e,"source"))||this.media;return n==null?void 0:n.src}_onSBUpdateStart(e){const{operationQueue:t}=this;t.current(e).onStart()}_onSBUpdateEnd(e){var t;if(((t=this.mediaSource)==null?void 0:t.readyState)==="closed"){this.resetBuffer(e);return}const{operationQueue:n}=this;n.current(e).onComplete(),n.shiftAndExecuteNext(e)}_onSBUpdateError(e,t){var n;const i=new Error(`${e} SourceBuffer error. MediaSource readyState: ${(n=this.mediaSource)==null?void 0:n.readyState}`);this.error(`${i}`,t),this.hls.trigger(v.ERROR,{type:ie.MEDIA_ERROR,details:O.BUFFER_APPENDING_ERROR,sourceBufferName:e,error:i,fatal:!1});const r=this.operationQueue.current(e);r&&r.onError(i)}removeExecutor(e,t,n){const{media:i,mediaSource:r,operationQueue:s,sourceBuffer:o}=this,l=o[e];if(!i||!r||!l){this.warn(`Attempting to remove from the ${e} SourceBuffer, but it does not exist`),s.shiftAndExecuteNext(e);return}const d=X(i.duration)?i.duration:1/0,c=X(r.duration)?r.duration:1/0,h=Math.max(0,t),u=Math.min(n,d,c);u>h&&(!l.ending||l.ended)?(l.ended=!1,this.log(`Removing [${h},${u}] from the ${e} SourceBuffer`),l.remove(h,u)):s.shiftAndExecuteNext(e)}appendExecutor(e,t){const n=this.sourceBuffer[t];if(!n){if(!this.pendingTracks[t])throw new Error(`Attempting to append to the ${t} SourceBuffer, but it does not exist`);return}n.ended=!1,n.appendBuffer(e)}blockBuffers(e,t=this.getSourceBufferTypes()){if(!t.length){this.log("Blocking operation requested, but no SourceBuffers exist"),Promise.resolve().then(e);return}const{operationQueue:n}=this,i=t.map(r=>n.appendBlocker(r));Promise.all(i).then(()=>{e(),t.forEach(r=>{const s=this.sourceBuffer[r];s!=null&&s.updating||n.shiftAndExecuteNext(r)})})}getSourceBufferTypes(){return Object.keys(this.sourceBuffer)}addBufferListener(e,t,n){const i=this.sourceBuffer[e];if(!i)return;const r=n.bind(this,e);this.listeners[e].push({event:t,listener:r}),i.addEventListener(t,r)}removeBufferListeners(e){const t=this.sourceBuffer[e];t&&this.listeners[e].forEach(n=>{t.removeEventListener(n.event,n.listener)})}}function As(a){const e=a.querySelectorAll("source");[].slice.call(e).forEach(t=>{a.removeChild(t)})}function Bu(a,e){const t=self.document.createElement("source");t.type="video/mp4",t.src=e,a.appendChild(t)}const Pu={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,128:174,129:176,130:189,131:191,132:8482,133:162,134:163,135:9834,136:224,137:32,138:232,139:226,140:234,141:238,142:244,143:251,144:193,145:201,146:211,147:218,148:220,149:252,150:8216,151:161,152:42,153:8217,154:9473,155:169,156:8480,157:8226,158:8220,159:8221,160:192,161:194,162:199,163:200,164:202,165:203,166:235,167:206,168:207,169:239,170:212,171:217,172:249,173:219,174:171,175:187,176:195,177:227,178:205,179:204,180:236,181:210,182:242,183:213,184:245,185:123,186:125,187:92,188:94,189:95,190:124,191:8764,192:196,193:228,194:214,195:246,196:223,197:165,198:164,199:9475,200:197,201:229,202:216,203:248,204:9487,205:9491,206:9495,207:9499},La=a=>String.fromCharCode(Pu[a]||a),We=15,ut=100,Ou={17:1,18:3,21:5,22:7,23:9,16:11,19:12,20:14},Fu={17:2,18:4,21:6,22:8,23:10,19:13,20:15},Mu={25:1,26:3,29:5,30:7,31:9,24:11,27:12,28:14},Nu={25:2,26:4,29:6,30:8,31:10,27:13,28:15},Uu=["white","green","blue","cyan","red","yellow","magenta","black","transparent"];class $u{constructor(){this.time=null,this.verboseLevel=0}log(e,t){if(this.verboseLevel>=e){const n=typeof t=="function"?t():t;D.log(`${this.time} [${e}] ${n}`)}}}const wt=function(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].toString(16));return t};class Ia{constructor(){this.foreground="white",this.underline=!1,this.italics=!1,this.background="black",this.flash=!1}reset(){this.foreground="white",this.underline=!1,this.italics=!1,this.background="black",this.flash=!1}setStyles(e){const t=["foreground","underline","italics","background","flash"];for(let n=0;n<t.length;n++){const i=t[n];e.hasOwnProperty(i)&&(this[i]=e[i])}}isDefault(){return this.foreground==="white"&&!this.underline&&!this.italics&&this.background==="black"&&!this.flash}equals(e){return this.foreground===e.foreground&&this.underline===e.underline&&this.italics===e.italics&&this.background===e.background&&this.flash===e.flash}copy(e){this.foreground=e.foreground,this.underline=e.underline,this.italics=e.italics,this.background=e.background,this.flash=e.flash}toString(){return"color="+this.foreground+", underline="+this.underline+", italics="+this.italics+", background="+this.background+", flash="+this.flash}}class Gu{constructor(){this.uchar=" ",this.penState=new Ia}reset(){this.uchar=" ",this.penState.reset()}setChar(e,t){this.uchar=e,this.penState.copy(t)}setPenState(e){this.penState.copy(e)}equals(e){return this.uchar===e.uchar&&this.penState.equals(e.penState)}copy(e){this.uchar=e.uchar,this.penState.copy(e.penState)}isEmpty(){return this.uchar===" "&&this.penState.isDefault()}}class Ku{constructor(e){this.chars=[],this.pos=0,this.currPenState=new Ia,this.cueStartTime=null,this.logger=void 0;for(let t=0;t<ut;t++)this.chars.push(new Gu);this.logger=e}equals(e){for(let t=0;t<ut;t++)if(!this.chars[t].equals(e.chars[t]))return!1;return!0}copy(e){for(let t=0;t<ut;t++)this.chars[t].copy(e.chars[t])}isEmpty(){let e=!0;for(let t=0;t<ut;t++)if(!this.chars[t].isEmpty()){e=!1;break}return e}setCursor(e){this.pos!==e&&(this.pos=e),this.pos<0?(this.logger.log(3,"Negative cursor position "+this.pos),this.pos=0):this.pos>ut&&(this.logger.log(3,"Too large cursor position "+this.pos),this.pos=ut)}moveCursor(e){const t=this.pos+e;if(e>1)for(let n=this.pos+1;n<t+1;n++)this.chars[n].setPenState(this.currPenState);this.setCursor(t)}backSpace(){this.moveCursor(-1),this.chars[this.pos].setChar(" ",this.currPenState)}insertChar(e){e>=144&&this.backSpace();const t=La(e);if(this.pos>=ut){this.logger.log(0,()=>"Cannot insert "+e.toString(16)+" ("+t+") at position "+this.pos+". Skipping it!");return}this.chars[this.pos].setChar(t,this.currPenState),this.moveCursor(1)}clearFromPos(e){let t;for(t=e;t<ut;t++)this.chars[t].reset()}clear(){this.clearFromPos(0),this.pos=0,this.currPenState.reset()}clearToEndOfRow(){this.clearFromPos(this.pos)}getTextString(){const e=[];let t=!0;for(let n=0;n<ut;n++){const i=this.chars[n].uchar;i!==" "&&(t=!1),e.push(i)}return t?"":e.join("")}setPenStyles(e){this.currPenState.setStyles(e),this.chars[this.pos].setPenState(this.currPenState)}}class Ci{constructor(e){this.rows=[],this.currRow=We-1,this.nrRollUpRows=null,this.lastOutputScreen=null,this.logger=void 0;for(let t=0;t<We;t++)this.rows.push(new Ku(e));this.logger=e}reset(){for(let e=0;e<We;e++)this.rows[e].clear();this.currRow=We-1}equals(e){let t=!0;for(let n=0;n<We;n++)if(!this.rows[n].equals(e.rows[n])){t=!1;break}return t}copy(e){for(let t=0;t<We;t++)this.rows[t].copy(e.rows[t])}isEmpty(){let e=!0;for(let t=0;t<We;t++)if(!this.rows[t].isEmpty()){e=!1;break}return e}backSpace(){this.rows[this.currRow].backSpace()}clearToEndOfRow(){this.rows[this.currRow].clearToEndOfRow()}insertChar(e){this.rows[this.currRow].insertChar(e)}setPen(e){this.rows[this.currRow].setPenStyles(e)}moveCursor(e){this.rows[this.currRow].moveCursor(e)}setCursor(e){this.logger.log(2,"setCursor: "+e),this.rows[this.currRow].setCursor(e)}setPAC(e){this.logger.log(2,()=>"pacData = "+JSON.stringify(e));let t=e.row-1;if(this.nrRollUpRows&&t<this.nrRollUpRows-1&&(t=this.nrRollUpRows-1),this.nrRollUpRows&&this.currRow!==t){for(let o=0;o<We;o++)this.rows[o].clear();const r=this.currRow+1-this.nrRollUpRows,s=this.lastOutputScreen;if(s){const o=s.rows[r].cueStartTime,l=this.logger.time;if(o!==null&&l!==null&&o<l)for(let d=0;d<this.nrRollUpRows;d++)this.rows[t-this.nrRollUpRows+d+1].copy(s.rows[r+d])}}this.currRow=t;const n=this.rows[this.currRow];if(e.indent!==null){const r=e.indent,s=Math.max(r-1,0);n.setCursor(e.indent),e.color=n.chars[s].penState.foreground}const i={foreground:e.color,underline:e.underline,italics:e.italics,background:"black",flash:!1};this.setPen(i)}setBkgData(e){this.logger.log(2,()=>"bkgData = "+JSON.stringify(e)),this.backSpace(),this.setPen(e),this.insertChar(32)}setRollUpRows(e){this.nrRollUpRows=e}rollUp(){if(this.nrRollUpRows===null){this.logger.log(3,"roll_up but nrRollUpRows not set yet");return}this.logger.log(1,()=>this.getDisplayText());const e=this.currRow+1-this.nrRollUpRows,t=this.rows.splice(e,1)[0];t.clear(),this.rows.splice(this.currRow,0,t),this.logger.log(2,"Rolling up")}getDisplayText(e){e=e||!1;const t=[];let n="",i=-1;for(let r=0;r<We;r++){const s=this.rows[r].getTextString();s&&(i=r+1,e?t.push("Row "+i+": '"+s+"'"):t.push(s.trim()))}return t.length>0&&(e?n="["+t.join(" | ")+"]":n=t.join(`
`)),n}getTextAndFormat(){return this.rows}}class gs{constructor(e,t,n){this.chNr=void 0,this.outputFilter=void 0,this.mode=void 0,this.verbose=void 0,this.displayedMemory=void 0,this.nonDisplayedMemory=void 0,this.lastOutputScreen=void 0,this.currRollUpRow=void 0,this.writeScreen=void 0,this.cueStartTime=void 0,this.logger=void 0,this.chNr=e,this.outputFilter=t,this.mode=null,this.verbose=0,this.displayedMemory=new Ci(n),this.nonDisplayedMemory=new Ci(n),this.lastOutputScreen=new Ci(n),this.currRollUpRow=this.displayedMemory.rows[We-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null,this.logger=n}reset(){this.mode=null,this.displayedMemory.reset(),this.nonDisplayedMemory.reset(),this.lastOutputScreen.reset(),this.outputFilter.reset(),this.currRollUpRow=this.displayedMemory.rows[We-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null}getHandler(){return this.outputFilter}setHandler(e){this.outputFilter=e}setPAC(e){this.writeScreen.setPAC(e)}setBkgData(e){this.writeScreen.setBkgData(e)}setMode(e){e!==this.mode&&(this.mode=e,this.logger.log(2,()=>"MODE="+e),this.mode==="MODE_POP-ON"?this.writeScreen=this.nonDisplayedMemory:(this.writeScreen=this.displayedMemory,this.writeScreen.reset()),this.mode!=="MODE_ROLL-UP"&&(this.displayedMemory.nrRollUpRows=null,this.nonDisplayedMemory.nrRollUpRows=null),this.mode=e)}insertChars(e){for(let n=0;n<e.length;n++)this.writeScreen.insertChar(e[n]);const t=this.writeScreen===this.displayedMemory?"DISP":"NON_DISP";this.logger.log(2,()=>t+": "+this.writeScreen.getDisplayText(!0)),(this.mode==="MODE_PAINT-ON"||this.mode==="MODE_ROLL-UP")&&(this.logger.log(1,()=>"DISPLAYED: "+this.displayedMemory.getDisplayText(!0)),this.outputDataUpdate())}ccRCL(){this.logger.log(2,"RCL - Resume Caption Loading"),this.setMode("MODE_POP-ON")}ccBS(){this.logger.log(2,"BS - BackSpace"),this.mode!=="MODE_TEXT"&&(this.writeScreen.backSpace(),this.writeScreen===this.displayedMemory&&this.outputDataUpdate())}ccAOF(){}ccAON(){}ccDER(){this.logger.log(2,"DER- Delete to End of Row"),this.writeScreen.clearToEndOfRow(),this.outputDataUpdate()}ccRU(e){this.logger.log(2,"RU("+e+") - Roll Up"),this.writeScreen=this.displayedMemory,this.setMode("MODE_ROLL-UP"),this.writeScreen.setRollUpRows(e)}ccFON(){this.logger.log(2,"FON - Flash On"),this.writeScreen.setPen({flash:!0})}ccRDC(){this.logger.log(2,"RDC - Resume Direct Captioning"),this.setMode("MODE_PAINT-ON")}ccTR(){this.logger.log(2,"TR"),this.setMode("MODE_TEXT")}ccRTD(){this.logger.log(2,"RTD"),this.setMode("MODE_TEXT")}ccEDM(){this.logger.log(2,"EDM - Erase Displayed Memory"),this.displayedMemory.reset(),this.outputDataUpdate(!0)}ccCR(){this.logger.log(2,"CR - Carriage Return"),this.writeScreen.rollUp(),this.outputDataUpdate(!0)}ccENM(){this.logger.log(2,"ENM - Erase Non-displayed Memory"),this.nonDisplayedMemory.reset()}ccEOC(){if(this.logger.log(2,"EOC - End Of Caption"),this.mode==="MODE_POP-ON"){const e=this.displayedMemory;this.displayedMemory=this.nonDisplayedMemory,this.nonDisplayedMemory=e,this.writeScreen=this.nonDisplayedMemory,this.logger.log(1,()=>"DISP: "+this.displayedMemory.getDisplayText())}this.outputDataUpdate(!0)}ccTO(e){this.logger.log(2,"TO("+e+") - Tab Offset"),this.writeScreen.moveCursor(e)}ccMIDROW(e){const t={flash:!1};if(t.underline=e%2===1,t.italics=e>=46,t.italics)t.foreground="white";else{const n=Math.floor(e/2)-16,i=["white","green","blue","cyan","red","yellow","magenta"];t.foreground=i[n]}this.logger.log(2,"MIDROW: "+JSON.stringify(t)),this.writeScreen.setPen(t)}outputDataUpdate(e=!1){const t=this.logger.time;t!==null&&this.outputFilter&&(this.cueStartTime===null&&!this.displayedMemory.isEmpty()?this.cueStartTime=t:this.displayedMemory.equals(this.lastOutputScreen)||(this.outputFilter.newCue(this.cueStartTime,t,this.lastOutputScreen),e&&this.outputFilter.dispatchCue&&this.outputFilter.dispatchCue(),this.cueStartTime=this.displayedMemory.isEmpty()?null:t),this.lastOutputScreen.copy(this.displayedMemory))}cueSplitAtTime(e){this.outputFilter&&(this.displayedMemory.isEmpty()||(this.outputFilter.newCue&&this.outputFilter.newCue(this.cueStartTime,e,this.displayedMemory),this.cueStartTime=e))}}class ys{constructor(e,t,n){this.channels=void 0,this.currentChannel=0,this.cmdHistory=qu(),this.logger=void 0;const i=this.logger=new $u;this.channels=[null,new gs(e,t,i),new gs(e+1,n,i)]}getHandler(e){return this.channels[e].getHandler()}setHandler(e,t){this.channels[e].setHandler(t)}addData(e,t){this.logger.time=e;for(let n=0;n<t.length;n+=2){const i=t[n]&127,r=t[n+1]&127;let s=!1,o=null;if(i===0&&r===0)continue;this.logger.log(3,()=>"["+wt([t[n],t[n+1]])+"] -> ("+wt([i,r])+")");const l=this.cmdHistory;if(i>=16&&i<=31){if(Hu(i,r,l)){vn(null,null,l),this.logger.log(3,()=>"Repeated command ("+wt([i,r])+") is dropped");continue}vn(i,r,this.cmdHistory),s=this.parseCmd(i,r),s||(s=this.parseMidrow(i,r)),s||(s=this.parsePAC(i,r)),s||(s=this.parseBackgroundAttributes(i,r))}else vn(null,null,l);if(!s&&(o=this.parseChars(i,r),o)){const c=this.currentChannel;c&&c>0?this.channels[c].insertChars(o):this.logger.log(2,"No channel found yet. TEXT-MODE?")}!s&&!o&&this.logger.log(2,()=>"Couldn't parse cleaned data "+wt([i,r])+" orig: "+wt([t[n],t[n+1]]))}}parseCmd(e,t){const n=(e===20||e===28||e===21||e===29)&&t>=32&&t<=47,i=(e===23||e===31)&&t>=33&&t<=35;if(!(n||i))return!1;const r=e===20||e===21||e===23?1:2,s=this.channels[r];return e===20||e===21||e===28||e===29?t===32?s.ccRCL():t===33?s.ccBS():t===34?s.ccAOF():t===35?s.ccAON():t===36?s.ccDER():t===37?s.ccRU(2):t===38?s.ccRU(3):t===39?s.ccRU(4):t===40?s.ccFON():t===41?s.ccRDC():t===42?s.ccTR():t===43?s.ccRTD():t===44?s.ccEDM():t===45?s.ccCR():t===46?s.ccENM():t===47&&s.ccEOC():s.ccTO(t-32),this.currentChannel=r,!0}parseMidrow(e,t){let n=0;if((e===17||e===25)&&t>=32&&t<=47){if(e===17?n=1:n=2,n!==this.currentChannel)return this.logger.log(0,"Mismatch channel in midrow parsing"),!1;const i=this.channels[n];return i?(i.ccMIDROW(t),this.logger.log(3,()=>"MIDROW ("+wt([e,t])+")"),!0):!1}return!1}parsePAC(e,t){let n;const i=(e>=17&&e<=23||e>=25&&e<=31)&&t>=64&&t<=127,r=(e===16||e===24)&&t>=64&&t<=95;if(!(i||r))return!1;const s=e<=23?1:2;t>=64&&t<=95?n=s===1?Ou[e]:Mu[e]:n=s===1?Fu[e]:Nu[e];const o=this.channels[s];return o?(o.setPAC(this.interpretPAC(n,t)),this.currentChannel=s,!0):!1}interpretPAC(e,t){let n;const i={color:null,italics:!1,indent:null,underline:!1,row:e};return t>95?n=t-96:n=t-64,i.underline=(n&1)===1,n<=13?i.color=["white","green","blue","cyan","red","yellow","magenta","white"][Math.floor(n/2)]:n<=15?(i.italics=!0,i.color="white"):i.indent=Math.floor((n-16)/2)*4,i}parseChars(e,t){let n,i=null,r=null;if(e>=25?(n=2,r=e-8):(n=1,r=e),r>=17&&r<=19){let s;r===17?s=t+80:r===18?s=t+112:s=t+144,this.logger.log(2,()=>"Special char '"+La(s)+"' in channel "+n),i=[s]}else e>=32&&e<=127&&(i=t===0?[e]:[e,t]);return i&&this.logger.log(3,()=>"Char codes =  "+wt(i).join(",")),i}parseBackgroundAttributes(e,t){const n=(e===16||e===24)&&t>=32&&t<=47,i=(e===23||e===31)&&t>=45&&t<=47;if(!(n||i))return!1;let r;const s={};e===16||e===24?(r=Math.floor((t-32)/2),s.background=Uu[r],t%2===1&&(s.background=s.background+"_semi")):t===45?s.background="transparent":(s.foreground="black",t===47&&(s.underline=!0));const o=e<=23?1:2;return this.channels[o].setBkgData(s),!0}reset(){for(let e=0;e<Object.keys(this.channels).length;e++){const t=this.channels[e];t&&t.reset()}vn(null,null,this.cmdHistory)}cueSplitAtTime(e){for(let t=0;t<this.channels.length;t++){const n=this.channels[t];n&&n.cueSplitAtTime(e)}}}function vn(a,e,t){t.a=a,t.b=e}function Hu(a,e,t){return t.a===a&&t.b===e}function qu(){return{a:null,b:null}}class En{constructor(e,t){this.timelineController=void 0,this.cueRanges=[],this.trackName=void 0,this.startTime=null,this.endTime=null,this.screen=null,this.timelineController=e,this.trackName=t}dispatchCue(){this.startTime!==null&&(this.timelineController.addCues(this.trackName,this.startTime,this.endTime,this.screen,this.cueRanges),this.startTime=null)}newCue(e,t,n){(this.startTime===null||this.startTime>e)&&(this.startTime=e),this.endTime=t,this.screen=n,this.timelineController.createCaptionsTrack(this.trackName)}reset(){this.cueRanges=[],this.startTime=null}}var or=function(){if(Ht!=null&&Ht.VTTCue)return self.VTTCue;const a=["","lr","rl"],e=["start","middle","end","left","right"];function t(o,l){if(typeof l!="string"||!Array.isArray(o))return!1;const d=l.toLowerCase();return~o.indexOf(d)?d:!1}function n(o){return t(a,o)}function i(o){return t(e,o)}function r(o,...l){let d=1;for(;d<arguments.length;d++){const c=arguments[d];for(const h in c)o[h]=c[h]}return o}function s(o,l,d){const c=this,h={enumerable:!0};c.hasBeenReset=!1;let u="",m=!1,A=o,f=l,g=d,C=null,T="",S=!0,k="auto",I="start",P=50,_="middle",N=50,U="middle";Object.defineProperty(c,"id",r({},h,{get:function(){return u},set:function(F){u=""+F}})),Object.defineProperty(c,"pauseOnExit",r({},h,{get:function(){return m},set:function(F){m=!!F}})),Object.defineProperty(c,"startTime",r({},h,{get:function(){return A},set:function(F){if(typeof F!="number")throw new TypeError("Start time must be set to a number.");A=F,this.hasBeenReset=!0}})),Object.defineProperty(c,"endTime",r({},h,{get:function(){return f},set:function(F){if(typeof F!="number")throw new TypeError("End time must be set to a number.");f=F,this.hasBeenReset=!0}})),Object.defineProperty(c,"text",r({},h,{get:function(){return g},set:function(F){g=""+F,this.hasBeenReset=!0}})),Object.defineProperty(c,"region",r({},h,{get:function(){return C},set:function(F){C=F,this.hasBeenReset=!0}})),Object.defineProperty(c,"vertical",r({},h,{get:function(){return T},set:function(F){const $=n(F);if($===!1)throw new SyntaxError("An invalid or illegal string was specified.");T=$,this.hasBeenReset=!0}})),Object.defineProperty(c,"snapToLines",r({},h,{get:function(){return S},set:function(F){S=!!F,this.hasBeenReset=!0}})),Object.defineProperty(c,"line",r({},h,{get:function(){return k},set:function(F){if(typeof F!="number"&&F!=="auto")throw new SyntaxError("An invalid number or illegal string was specified.");k=F,this.hasBeenReset=!0}})),Object.defineProperty(c,"lineAlign",r({},h,{get:function(){return I},set:function(F){const $=i(F);if(!$)throw new SyntaxError("An invalid or illegal string was specified.");I=$,this.hasBeenReset=!0}})),Object.defineProperty(c,"position",r({},h,{get:function(){return P},set:function(F){if(F<0||F>100)throw new Error("Position must be between 0 and 100.");P=F,this.hasBeenReset=!0}})),Object.defineProperty(c,"positionAlign",r({},h,{get:function(){return _},set:function(F){const $=i(F);if(!$)throw new SyntaxError("An invalid or illegal string was specified.");_=$,this.hasBeenReset=!0}})),Object.defineProperty(c,"size",r({},h,{get:function(){return N},set:function(F){if(F<0||F>100)throw new Error("Size must be between 0 and 100.");N=F,this.hasBeenReset=!0}})),Object.defineProperty(c,"align",r({},h,{get:function(){return U},set:function(F){const $=i(F);if(!$)throw new SyntaxError("An invalid or illegal string was specified.");U=$,this.hasBeenReset=!0}})),c.displayState=void 0}return s.prototype.getCueAsHTML=function(){return self.WebVTT.convertCueToDOMTree(self,this.text)},s}();class zu{decode(e,t){if(!e)return"";if(typeof e!="string")throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(e))}}function Ra(a){function e(n,i,r,s){return(n|0)*3600+(i|0)*60+(r|0)+parseFloat(s||0)}const t=a.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);return t?parseFloat(t[2])>59?e(t[2],t[3],0,t[4]):e(t[1],t[2],t[3],t[4]):null}class Yu{constructor(){this.values=Object.create(null)}set(e,t){!this.get(e)&&t!==""&&(this.values[e]=t)}get(e,t,n){return n?this.has(e)?this.values[e]:t[n]:this.has(e)?this.values[e]:t}has(e){return e in this.values}alt(e,t,n){for(let i=0;i<n.length;++i)if(t===n[i]){this.set(e,t);break}}integer(e,t){/^-?\d+$/.test(t)&&this.set(e,parseInt(t,10))}percent(e,t){if(/^([\d]{1,3})(\.[\d]*)?%$/.test(t)){const n=parseFloat(t);if(n>=0&&n<=100)return this.set(e,n),!0}return!1}}function Da(a,e,t,n){const i=n?a.split(n):[a];for(const r in i){if(typeof i[r]!="string")continue;const s=i[r].split(t);if(s.length!==2)continue;const o=s[0],l=s[1];e(o,l)}}const Gi=new or(0,0,""),xn=Gi.align==="middle"?"middle":"center";function Vu(a,e,t){const n=a;function i(){const o=Ra(a);if(o===null)throw new Error("Malformed timestamp: "+n);return a=a.replace(/^[^\sa-zA-Z-]+/,""),o}function r(o,l){const d=new Yu;Da(o,function(u,m){let A;switch(u){case"region":for(let f=t.length-1;f>=0;f--)if(t[f].id===m){d.set(u,t[f].region);break}break;case"vertical":d.alt(u,m,["rl","lr"]);break;case"line":A=m.split(","),d.integer(u,A[0]),d.percent(u,A[0])&&d.set("snapToLines",!1),d.alt(u,A[0],["auto"]),A.length===2&&d.alt("lineAlign",A[1],["start",xn,"end"]);break;case"position":A=m.split(","),d.percent(u,A[0]),A.length===2&&d.alt("positionAlign",A[1],["start",xn,"end","line-left","line-right","auto"]);break;case"size":d.percent(u,m);break;case"align":d.alt(u,m,["start",xn,"end","left","right"]);break}},/:/,/\s/),l.region=d.get("region",null),l.vertical=d.get("vertical","");let c=d.get("line","auto");c==="auto"&&Gi.line===-1&&(c=-1),l.line=c,l.lineAlign=d.get("lineAlign","start"),l.snapToLines=d.get("snapToLines",!0),l.size=d.get("size",100),l.align=d.get("align",xn);let h=d.get("position","auto");h==="auto"&&Gi.position===50&&(h=l.align==="start"||l.align==="left"?0:l.align==="end"||l.align==="right"?100:50),l.position=h}function s(){a=a.replace(/^\s+/,"")}if(s(),e.startTime=i(),s(),a.slice(0,3)!=="-->")throw new Error("Malformed time stamp (time stamps must be separated by '-->'): "+n);a=a.slice(3),s(),e.endTime=i(),s(),r(a,e)}function _a(a){return a.replace(/<br(?: \/)?>/gi,`
`)}class Wu{constructor(){this.state="INITIAL",this.buffer="",this.decoder=new zu,this.regionList=[],this.cue=null,this.oncue=void 0,this.onparsingerror=void 0,this.onflush=void 0}parse(e){const t=this;e&&(t.buffer+=t.decoder.decode(e,{stream:!0}));function n(){let r=t.buffer,s=0;for(r=_a(r);s<r.length&&r[s]!=="\r"&&r[s]!==`
`;)++s;const o=r.slice(0,s);return r[s]==="\r"&&++s,r[s]===`
`&&++s,t.buffer=r.slice(s),o}function i(r){Da(r,function(s,o){},/:/)}try{let r="";if(t.state==="INITIAL"){if(!/\r\n|\n/.test(t.buffer))return this;r=n();const o=r.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);if(!(o!=null&&o[0]))throw new Error("Malformed WebVTT signature.");t.state="HEADER"}let s=!1;for(;t.buffer;){if(!/\r\n|\n/.test(t.buffer))return this;switch(s?s=!1:r=n(),t.state){case"HEADER":/:/.test(r)?i(r):r||(t.state="ID");continue;case"NOTE":r||(t.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(r)){t.state="NOTE";break}if(!r)continue;if(t.cue=new or(0,0,""),t.state="CUE",r.indexOf("-->")===-1){t.cue.id=r;continue}case"CUE":if(!t.cue){t.state="BADCUE";continue}try{Vu(r,t.cue,t.regionList)}catch{t.cue=null,t.state="BADCUE";continue}t.state="CUETEXT";continue;case"CUETEXT":{const o=r.indexOf("-->")!==-1;if(!r||o&&(s=!0)){t.oncue&&t.cue&&t.oncue(t.cue),t.cue=null,t.state="ID";continue}if(t.cue===null)continue;t.cue.text&&(t.cue.text+=`
`),t.cue.text+=r}continue;case"BADCUE":r||(t.state="ID")}}}catch{t.state==="CUETEXT"&&t.cue&&t.oncue&&t.oncue(t.cue),t.cue=null,t.state=t.state==="INITIAL"?"BADWEBVTT":"BADCUE"}return this}flush(){const e=this;try{if((e.cue||e.state==="HEADER")&&(e.buffer+=`

`,e.parse()),e.state==="INITIAL"||e.state==="BADWEBVTT")throw new Error("Malformed WebVTT signature.")}catch(t){e.onparsingerror&&e.onparsingerror(t)}return e.onflush&&e.onflush(),this}}const ju=/\r\n|\n\r|\n|\r/g,Ti=function(e,t,n=0){return e.slice(n,n+t.length)===t},Qu=function(e){let t=parseInt(e.slice(-3));const n=parseInt(e.slice(-6,-4)),i=parseInt(e.slice(-9,-7)),r=e.length>9?parseInt(e.substring(0,e.indexOf(":"))):0;if(!X(t)||!X(n)||!X(i)||!X(r))throw Error(`Malformed X-TIMESTAMP-MAP: Local:${e}`);return t+=1e3*n,t+=60*1e3*i,t+=60*60*1e3*r,t},Si=function(e){let t=5381,n=e.length;for(;n;)t=t*33^e.charCodeAt(--n);return(t>>>0).toString()};function lr(a,e,t){return Si(a.toString())+Si(e.toString())+Si(t)}const Xu=function(e,t,n){let i=e[t],r=e[i.prevCC];if(!r||!r.new&&i.new){e.ccOffset=e.presentationOffset=i.start,i.new=!1;return}for(;(s=r)!=null&&s.new;){var s;e.ccOffset+=i.start-r.start,i.new=!1,i=r,r=e[i.prevCC]}e.presentationOffset=n};function Zu(a,e,t,n,i,r,s){const o=new Wu,l=rt(new Uint8Array(a)).trim().replace(ju,`
`).split(`
`),d=[],c=e?mu(e.baseTime,e.timescale):0;let h="00:00.000",u=0,m=0,A,f=!0;o.oncue=function(g){const C=t[n];let T=t.ccOffset;const S=(u-c)/9e4;if(C!=null&&C.new&&(m!==void 0?T=t.ccOffset=C.start:Xu(t,n,S)),S){if(!e){A=new Error("Missing initPTS for VTT MPEGTS");return}T=S-t.presentationOffset}const k=g.endTime-g.startTime,I=qe((g.startTime+T-m)*9e4,i*9e4)/9e4;g.startTime=Math.max(I,0),g.endTime=Math.max(I+k,0);const P=g.text.trim();g.text=decodeURIComponent(encodeURIComponent(P)),g.id||(g.id=lr(g.startTime,g.endTime,P)),g.endTime>0&&d.push(g)},o.onparsingerror=function(g){A=g},o.onflush=function(){if(A){s(A);return}r(d)},l.forEach(g=>{if(f)if(Ti(g,"X-TIMESTAMP-MAP=")){f=!1,g.slice(16).split(",").forEach(C=>{Ti(C,"LOCAL:")?h=C.slice(6):Ti(C,"MPEGTS:")&&(u=parseInt(C.slice(7)))});try{m=Qu(h)/1e3}catch(C){A=C}return}else g===""&&(f=!1);o.parse(g+`
`)}),o.flush()}const ki="stpp.ttml.im1t",Ba=/^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,Pa=/^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,Ju={left:"start",center:"center",right:"end",start:"start",end:"end"};function bs(a,e,t,n){const i=se(new Uint8Array(a),["mdat"]);if(i.length===0){n(new Error("Could not parse IMSC1 mdat"));return}const r=i.map(o=>rt(o)),s=fu(e.baseTime,1,e.timescale);try{r.forEach(o=>t(eh(o,s)))}catch(o){n(o)}}function eh(a,e){const i=new DOMParser().parseFromString(a,"text/xml").getElementsByTagName("tt")[0];if(!i)throw new Error("Invalid ttml");const r={frameRate:30,subFrameRate:1,frameRateMultiplier:0,tickRate:0},s=Object.keys(r).reduce((h,u)=>(h[u]=i.getAttribute(`ttp:${u}`)||r[u],h),{}),o=i.getAttribute("xml:space")!=="preserve",l=vs(wi(i,"styling","style")),d=vs(wi(i,"layout","region")),c=wi(i,"body","[begin]");return[].map.call(c,h=>{const u=Oa(h,o);if(!u||!h.hasAttribute("begin"))return null;const m=Ii(h.getAttribute("begin"),s),A=Ii(h.getAttribute("dur"),s);let f=Ii(h.getAttribute("end"),s);if(m===null)throw Es(h);if(f===null){if(A===null)throw Es(h);f=m+A}const g=new or(m-e,f-e,u);g.id=lr(g.startTime,g.endTime,g.text);const C=d[h.getAttribute("region")],T=l[h.getAttribute("style")],S=th(C,T,l),{textAlign:k}=S;if(k){const I=Ju[k];I&&(g.lineAlign=I),g.align=k}return we(g,S),g}).filter(h=>h!==null)}function wi(a,e,t){const n=a.getElementsByTagName(e)[0];return n?[].slice.call(n.querySelectorAll(t)):[]}function vs(a){return a.reduce((e,t)=>{const n=t.getAttribute("xml:id");return n&&(e[n]=t),e},{})}function Oa(a,e){return[].slice.call(a.childNodes).reduce((t,n,i)=>{var r;return n.nodeName==="br"&&i?t+`
`:(r=n.childNodes)!=null&&r.length?Oa(n,e):e?t+n.textContent.trim().replace(/\s+/g," "):t+n.textContent},"")}function th(a,e,t){const n="http://www.w3.org/ns/ttml#styling";let i=null;const r=["displayAlign","textAlign","color","backgroundColor","fontSize","fontFamily"],s=a!=null&&a.hasAttribute("style")?a.getAttribute("style"):null;return s&&t.hasOwnProperty(s)&&(i=t[s]),r.reduce((o,l)=>{const d=Li(e,n,l)||Li(a,n,l)||Li(i,n,l);return d&&(o[l]=d),o},{})}function Li(a,e,t){return a&&a.hasAttributeNS(e,t)?a.getAttributeNS(e,t):null}function Es(a){return new Error(`Could not parse ttml timestamp ${a}`)}function Ii(a,e){if(!a)return null;let t=Ra(a);return t===null&&(Ba.test(a)?t=nh(a,e):Pa.test(a)&&(t=ih(a,e))),t}function nh(a,e){const t=Ba.exec(a),n=(t[4]|0)+(t[5]|0)/e.subFrameRate;return(t[1]|0)*3600+(t[2]|0)*60+(t[3]|0)+n/e.frameRate}function ih(a,e){const t=Pa.exec(a),n=Number(t[1]);switch(t[2]){case"h":return n*3600;case"m":return n*60;case"ms":return n*1e3;case"f":return n/e.frameRate;case"t":return n/e.tickRate}return n}class rh{constructor(e){this.hls=void 0,this.media=null,this.config=void 0,this.enabled=!0,this.Cues=void 0,this.textTracks=[],this.tracks=[],this.initPTS=[],this.unparsedVttFrags=[],this.captionsTracks={},this.nonNativeCaptionsTracks={},this.cea608Parser1=void 0,this.cea608Parser2=void 0,this.lastCc=-1,this.lastSn=-1,this.lastPartIndex=-1,this.prevCC=-1,this.vttCCs=Cs(),this.captionsProperties=void 0,this.hls=e,this.config=e.config,this.Cues=e.config.cueHandler,this.captionsProperties={textTrack1:{label:this.config.captionsTextTrack1Label,languageCode:this.config.captionsTextTrack1LanguageCode},textTrack2:{label:this.config.captionsTextTrack2Label,languageCode:this.config.captionsTextTrack2LanguageCode},textTrack3:{label:this.config.captionsTextTrack3Label,languageCode:this.config.captionsTextTrack3LanguageCode},textTrack4:{label:this.config.captionsTextTrack4Label,languageCode:this.config.captionsTextTrack4LanguageCode}},e.on(v.MEDIA_ATTACHING,this.onMediaAttaching,this),e.on(v.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(v.MANIFEST_LOADING,this.onManifestLoading,this),e.on(v.MANIFEST_LOADED,this.onManifestLoaded,this),e.on(v.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.on(v.FRAG_LOADING,this.onFragLoading,this),e.on(v.FRAG_LOADED,this.onFragLoaded,this),e.on(v.FRAG_PARSING_USERDATA,this.onFragParsingUserdata,this),e.on(v.FRAG_DECRYPTED,this.onFragDecrypted,this),e.on(v.INIT_PTS_FOUND,this.onInitPtsFound,this),e.on(v.SUBTITLE_TRACKS_CLEARED,this.onSubtitleTracksCleared,this),e.on(v.BUFFER_FLUSHING,this.onBufferFlushing,this)}destroy(){const{hls:e}=this;e.off(v.MEDIA_ATTACHING,this.onMediaAttaching,this),e.off(v.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(v.MANIFEST_LOADING,this.onManifestLoading,this),e.off(v.MANIFEST_LOADED,this.onManifestLoaded,this),e.off(v.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.off(v.FRAG_LOADING,this.onFragLoading,this),e.off(v.FRAG_LOADED,this.onFragLoaded,this),e.off(v.FRAG_PARSING_USERDATA,this.onFragParsingUserdata,this),e.off(v.FRAG_DECRYPTED,this.onFragDecrypted,this),e.off(v.INIT_PTS_FOUND,this.onInitPtsFound,this),e.off(v.SUBTITLE_TRACKS_CLEARED,this.onSubtitleTracksCleared,this),e.off(v.BUFFER_FLUSHING,this.onBufferFlushing,this),this.hls=this.config=null,this.cea608Parser1=this.cea608Parser2=void 0}initCea608Parsers(){if(this.config.enableCEA708Captions&&(!this.cea608Parser1||!this.cea608Parser2)){const e=new En(this,"textTrack1"),t=new En(this,"textTrack2"),n=new En(this,"textTrack3"),i=new En(this,"textTrack4");this.cea608Parser1=new ys(1,e,t),this.cea608Parser2=new ys(3,n,i)}}addCues(e,t,n,i,r){let s=!1;for(let o=r.length;o--;){const l=r[o],d=sh(l[0],l[1],t,n);if(d>=0&&(l[0]=Math.min(l[0],t),l[1]=Math.max(l[1],n),s=!0,d/(n-t)>.5))return}if(s||r.push([t,n]),this.config.renderTextTracksNatively){const o=this.captionsTracks[e];this.Cues.newCue(o,t,n,i)}else{const o=this.Cues.newCue(null,t,n,i);this.hls.trigger(v.CUES_PARSED,{type:"captions",cues:o,track:e})}}onInitPtsFound(e,{frag:t,id:n,initPTS:i,timescale:r}){const{unparsedVttFrags:s}=this;n==="main"&&(this.initPTS[t.cc]={baseTime:i,timescale:r}),s.length&&(this.unparsedVttFrags=[],s.forEach(o=>{this.onFragLoaded(v.FRAG_LOADED,o)}))}getExistingTrack(e,t){const{media:n}=this;if(n)for(let i=0;i<n.textTracks.length;i++){const r=n.textTracks[i];if(xs(r,{name:e,lang:t,attrs:{}}))return r}return null}createCaptionsTrack(e){this.config.renderTextTracksNatively?this.createNativeTrack(e):this.createNonNativeTrack(e)}createNativeTrack(e){if(this.captionsTracks[e])return;const{captionsProperties:t,captionsTracks:n,media:i}=this,{label:r,languageCode:s}=t[e],o=this.getExistingTrack(r,s);if(o)n[e]=o,$t(n[e]),ta(n[e],i);else{const l=this.createTextTrack("captions",r,s);l&&(l[e]=!0,n[e]=l)}}createNonNativeTrack(e){if(this.nonNativeCaptionsTracks[e])return;const t=this.captionsProperties[e];if(!t)return;const n=t.label,i={_id:e,label:n,kind:"captions",default:t.media?!!t.media.default:!1,closedCaptions:t.media};this.nonNativeCaptionsTracks[e]=i,this.hls.trigger(v.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:[i]})}createTextTrack(e,t,n){const i=this.media;if(i)return i.addTextTrack(e,t,n)}onMediaAttaching(e,t){this.media=t.media,this._cleanTracks()}onMediaDetaching(){const{captionsTracks:e}=this;Object.keys(e).forEach(t=>{$t(e[t]),delete e[t]}),this.nonNativeCaptionsTracks={}}onManifestLoading(){this.lastCc=-1,this.lastSn=-1,this.lastPartIndex=-1,this.prevCC=-1,this.vttCCs=Cs(),this._cleanTracks(),this.tracks=[],this.captionsTracks={},this.nonNativeCaptionsTracks={},this.textTracks=[],this.unparsedVttFrags=[],this.initPTS=[],this.cea608Parser1&&this.cea608Parser2&&(this.cea608Parser1.reset(),this.cea608Parser2.reset())}_cleanTracks(){const{media:e}=this;if(!e)return;const t=e.textTracks;if(t)for(let n=0;n<t.length;n++)$t(t[n])}onSubtitleTracksUpdated(e,t){const n=t.subtitleTracks||[],i=n.some(r=>r.textCodec===ki);if(this.config.enableWebVTT||i&&this.config.enableIMSC1){if(wa(this.tracks,n)){this.tracks=n;return}if(this.textTracks=[],this.tracks=n,this.config.renderTextTracksNatively){const s=this.media,o=s?Sn(s.textTracks):null;if(this.tracks.forEach((l,d)=>{let c;if(o){let h=null;for(let u=0;u<o.length;u++)if(o[u]&&xs(o[u],l)){h=o[u],o[u]=null;break}h&&(c=h)}if(c)$t(c);else{const h=Fa(l);c=this.createTextTrack(h,l.name,l.lang),c&&(c.mode="disabled")}c&&this.textTracks.push(c)}),o!=null&&o.length){const l=o.filter(d=>d!==null).map(d=>d.label);l.length&&D.warn(`Media element contains unused subtitle tracks: ${l.join(", ")}. Replace media element for each source to clear TextTracks and captions menu.`)}}else if(this.tracks.length){const s=this.tracks.map(o=>({label:o.name,kind:o.type.toLowerCase(),default:o.default,subtitleTrack:o}));this.hls.trigger(v.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:s})}}}onManifestLoaded(e,t){this.config.enableCEA708Captions&&t.captions&&t.captions.forEach(n=>{const i=/(?:CC|SERVICE)([1-4])/.exec(n.instreamId);if(!i)return;const r=`textTrack${i[1]}`,s=this.captionsProperties[r];s&&(s.label=n.name,n.lang&&(s.languageCode=n.lang),s.media=n)})}closedCaptionsForLevel(e){const t=this.hls.levels[e.level];return t==null?void 0:t.attrs["CLOSED-CAPTIONS"]}onFragLoading(e,t){if(this.enabled&&t.frag.type===ne.MAIN){var n,i;const{cea608Parser1:r,cea608Parser2:s,lastSn:o}=this,{cc:l,sn:d}=t.frag,c=(n=(i=t.part)==null?void 0:i.index)!=null?n:-1;r&&s&&(d!==o+1||d===o&&c!==this.lastPartIndex+1||l!==this.lastCc)&&(r.reset(),s.reset()),this.lastCc=l,this.lastSn=d,this.lastPartIndex=c}}onFragLoaded(e,t){const{frag:n,payload:i}=t;if(n.type===ne.SUBTITLE)if(i.byteLength){const r=n.decryptdata,s="stats"in t;if(r==null||!r.encrypted||s){const o=this.tracks[n.level],l=this.vttCCs;l[n.cc]||(l[n.cc]={start:n.start,prevCC:this.prevCC,new:!0},this.prevCC=n.cc),o&&o.textCodec===ki?this._parseIMSC1(n,i):this._parseVTTs(t)}}else this.hls.trigger(v.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:n,error:new Error("Empty subtitle payload")})}_parseIMSC1(e,t){const n=this.hls;bs(t,this.initPTS[e.cc],i=>{this._appendCues(i,e.level),n.trigger(v.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:e})},i=>{D.log(`Failed to parse IMSC1: ${i}`),n.trigger(v.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:e,error:i})})}_parseVTTs(e){var t;const{frag:n,payload:i}=e,{initPTS:r,unparsedVttFrags:s}=this,o=r.length-1;if(!r[n.cc]&&o===-1){s.push(e);return}const l=this.hls,d=(t=n.initSegment)!=null&&t.data?ze(n.initSegment.data,new Uint8Array(i)):i;Zu(d,this.initPTS[n.cc],this.vttCCs,n.cc,n.start,c=>{this._appendCues(c,n.level),l.trigger(v.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:n})},c=>{const h=c.message==="Missing initPTS for VTT MPEGTS";h?s.push(e):this._fallbackToIMSC1(n,i),D.log(`Failed to parse VTT cue: ${c}`),!(h&&o>n.cc)&&l.trigger(v.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:n,error:c})})}_fallbackToIMSC1(e,t){const n=this.tracks[e.level];n.textCodec||bs(t,this.initPTS[e.cc],()=>{n.textCodec=ki,this._parseIMSC1(e,t)},()=>{n.textCodec="wvtt"})}_appendCues(e,t){const n=this.hls;if(this.config.renderTextTracksNatively){const i=this.textTracks[t];if(!i||i.mode==="disabled")return;e.forEach(r=>na(i,r))}else{const i=this.tracks[t];if(!i)return;const r=i.default?"default":"subtitles"+t;n.trigger(v.CUES_PARSED,{type:"subtitles",cues:e,track:r})}}onFragDecrypted(e,t){const{frag:n}=t;n.type===ne.SUBTITLE&&this.onFragLoaded(v.FRAG_LOADED,t)}onSubtitleTracksCleared(){this.tracks=[],this.captionsTracks={}}onFragParsingUserdata(e,t){this.initCea608Parsers();const{cea608Parser1:n,cea608Parser2:i}=this;if(!this.enabled||!n||!i)return;const{frag:r,samples:s}=t;if(!(r.type===ne.MAIN&&this.closedCaptionsForLevel(r)==="NONE"))for(let o=0;o<s.length;o++){const l=s[o].bytes;if(l){const d=this.extractCea608Data(l);n.addData(s[o].pts,d[0]),i.addData(s[o].pts,d[1])}}}onBufferFlushing(e,{startOffset:t,endOffset:n,endOffsetSubtitles:i,type:r}){const{media:s}=this;if(!(!s||s.currentTime<n)){if(!r||r==="video"){const{captionsTracks:o}=this;Object.keys(o).forEach(l=>Pi(o[l],t,n))}if(this.config.renderTextTracksNatively&&t===0&&i!==void 0){const{textTracks:o}=this;Object.keys(o).forEach(l=>Pi(o[l],t,i))}}}extractCea608Data(e){const t=[[],[]],n=e[0]&31;let i=2;for(let r=0;r<n;r++){const s=e[i++],o=127&e[i++],l=127&e[i++];if(o===0&&l===0)continue;if((4&s)!==0){const c=3&s;(c===0||c===1)&&(t[c].push(o),t[c].push(l))}}return t}}function Fa(a){return a.characteristics&&/transcribes-spoken-dialog/gi.test(a.characteristics)&&/describes-music-and-sound/gi.test(a.characteristics)?"captions":"subtitles"}function xs(a,e){return!!a&&a.kind===Fa(e)&&$i(e,a)}function sh(a,e,t,n){return Math.min(e,n)-Math.max(a,t)}function Cs(){return{ccOffset:0,presentationOffset:0,0:{start:0,prevCC:-1,new:!0}}}class dr{constructor(e){this.hls=void 0,this.autoLevelCapping=void 0,this.firstLevel=void 0,this.media=void 0,this.restrictedLevels=void 0,this.timer=void 0,this.clientRect=void 0,this.streamController=void 0,this.hls=e,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.firstLevel=-1,this.media=null,this.restrictedLevels=[],this.timer=void 0,this.clientRect=null,this.registerListeners()}setStreamController(e){this.streamController=e}destroy(){this.hls&&this.unregisterListener(),this.timer&&this.stopCapping(),this.media=null,this.clientRect=null,this.hls=this.streamController=null}registerListeners(){const{hls:e}=this;e.on(v.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),e.on(v.MEDIA_ATTACHING,this.onMediaAttaching,this),e.on(v.MANIFEST_PARSED,this.onManifestParsed,this),e.on(v.LEVELS_UPDATED,this.onLevelsUpdated,this),e.on(v.BUFFER_CODECS,this.onBufferCodecs,this),e.on(v.MEDIA_DETACHING,this.onMediaDetaching,this)}unregisterListener(){const{hls:e}=this;e.off(v.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),e.off(v.MEDIA_ATTACHING,this.onMediaAttaching,this),e.off(v.MANIFEST_PARSED,this.onManifestParsed,this),e.off(v.LEVELS_UPDATED,this.onLevelsUpdated,this),e.off(v.BUFFER_CODECS,this.onBufferCodecs,this),e.off(v.MEDIA_DETACHING,this.onMediaDetaching,this)}onFpsDropLevelCapping(e,t){const n=this.hls.levels[t.droppedLevel];this.isLevelAllowed(n)&&this.restrictedLevels.push({bitrate:n.bitrate,height:n.height,width:n.width})}onMediaAttaching(e,t){this.media=t.media instanceof HTMLVideoElement?t.media:null,this.clientRect=null,this.timer&&this.hls.levels.length&&this.detectPlayerSize()}onManifestParsed(e,t){const n=this.hls;this.restrictedLevels=[],this.firstLevel=t.firstLevel,n.config.capLevelToPlayerSize&&t.video&&this.startCapping()}onLevelsUpdated(e,t){this.timer&&X(this.autoLevelCapping)&&this.detectPlayerSize()}onBufferCodecs(e,t){this.hls.config.capLevelToPlayerSize&&t.video&&this.startCapping()}onMediaDetaching(){this.stopCapping()}detectPlayerSize(){if(this.media){if(this.mediaHeight<=0||this.mediaWidth<=0){this.clientRect=null;return}const e=this.hls.levels;if(e.length){const t=this.hls,n=this.getMaxLevel(e.length-1);n!==this.autoLevelCapping&&D.log(`Setting autoLevelCapping to ${n}: ${e[n].height}p@${e[n].bitrate} for media ${this.mediaWidth}x${this.mediaHeight}`),t.autoLevelCapping=n,t.autoLevelCapping>this.autoLevelCapping&&this.streamController&&this.streamController.nextLevelSwitch(),this.autoLevelCapping=t.autoLevelCapping}}}getMaxLevel(e){const t=this.hls.levels;if(!t.length)return-1;const n=t.filter((i,r)=>this.isLevelAllowed(i)&&r<=e);return this.clientRect=null,dr.getMaxLevelByMediaSize(n,this.mediaWidth,this.mediaHeight)}startCapping(){this.timer||(this.autoLevelCapping=Number.POSITIVE_INFINITY,self.clearInterval(this.timer),this.timer=self.setInterval(this.detectPlayerSize.bind(this),1e3),this.detectPlayerSize())}stopCapping(){this.restrictedLevels=[],this.firstLevel=-1,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.timer&&(self.clearInterval(this.timer),this.timer=void 0)}getDimensions(){if(this.clientRect)return this.clientRect;const e=this.media,t={width:0,height:0};if(e){const n=e.getBoundingClientRect();t.width=n.width,t.height=n.height,!t.width&&!t.height&&(t.width=n.right-n.left||e.width||0,t.height=n.bottom-n.top||e.height||0)}return this.clientRect=t,t}get mediaWidth(){return this.getDimensions().width*this.contentScaleFactor}get mediaHeight(){return this.getDimensions().height*this.contentScaleFactor}get contentScaleFactor(){let e=1;if(!this.hls.config.ignoreDevicePixelRatio)try{e=self.devicePixelRatio}catch{}return e}isLevelAllowed(e){return!this.restrictedLevels.some(n=>e.bitrate===n.bitrate&&e.width===n.width&&e.height===n.height)}static getMaxLevelByMediaSize(e,t,n){if(!(e!=null&&e.length))return-1;const i=(o,l)=>l?o.width!==l.width||o.height!==l.height:!0;let r=e.length-1;const s=Math.max(t,n);for(let o=0;o<e.length;o+=1){const l=e[o];if((l.width>=s||l.height>=s)&&i(l,e[o+1])){r=o;break}}return r}}class ah{constructor(e){this.hls=void 0,this.isVideoPlaybackQualityAvailable=!1,this.timer=void 0,this.media=null,this.lastTime=void 0,this.lastDroppedFrames=0,this.lastDecodedFrames=0,this.streamController=void 0,this.hls=e,this.registerListeners()}setStreamController(e){this.streamController=e}registerListeners(){this.hls.on(v.MEDIA_ATTACHING,this.onMediaAttaching,this)}unregisterListeners(){this.hls.off(v.MEDIA_ATTACHING,this.onMediaAttaching,this)}destroy(){this.timer&&clearInterval(this.timer),this.unregisterListeners(),this.isVideoPlaybackQualityAvailable=!1,this.media=null}onMediaAttaching(e,t){const n=this.hls.config;if(n.capLevelOnFPSDrop){const i=t.media instanceof self.HTMLVideoElement?t.media:null;this.media=i,i&&typeof i.getVideoPlaybackQuality=="function"&&(this.isVideoPlaybackQualityAvailable=!0),self.clearInterval(this.timer),this.timer=self.setInterval(this.checkFPSInterval.bind(this),n.fpsDroppedMonitoringPeriod)}}checkFPS(e,t,n){const i=performance.now();if(t){if(this.lastTime){const r=i-this.lastTime,s=n-this.lastDroppedFrames,o=t-this.lastDecodedFrames,l=1e3*s/r,d=this.hls;if(d.trigger(v.FPS_DROP,{currentDropped:s,currentDecoded:o,totalDroppedFrames:n}),l>0&&s>d.config.fpsDroppedMonitoringThreshold*o){let c=d.currentLevel;D.warn("drop FPS ratio greater than max allowed value for currentLevel: "+c),c>0&&(d.autoLevelCapping===-1||d.autoLevelCapping>=c)&&(c=c-1,d.trigger(v.FPS_DROP_LEVEL_CAPPING,{level:c,droppedLevel:d.currentLevel}),d.autoLevelCapping=c,this.streamController.nextLevelSwitch())}}this.lastTime=i,this.lastDroppedFrames=n,this.lastDecodedFrames=t}}checkFPSInterval(){const e=this.media;if(e)if(this.isVideoPlaybackQualityAvailable){const t=e.getVideoPlaybackQuality();this.checkFPS(e,t.totalVideoFrames,t.droppedVideoFrames)}else this.checkFPS(e,e.webkitDecodedFrameCount,e.webkitDroppedFrameCount)}}const Cn="[eme]";class Kt{constructor(e){this.hls=void 0,this.config=void 0,this.media=null,this.keyFormatPromise=null,this.keySystemAccessPromises={},this._requestLicenseFailureCount=0,this.mediaKeySessions=[],this.keyIdToKeySessionPromise={},this.setMediaKeysQueue=Kt.CDMCleanupPromise?[Kt.CDMCleanupPromise]:[],this.debug=D.debug.bind(D,Cn),this.log=D.log.bind(D,Cn),this.warn=D.warn.bind(D,Cn),this.error=D.error.bind(D,Cn),this.onMediaEncrypted=t=>{const{initDataType:n,initData:i}=t,r=`"${t.type}" event: init data type: "${n}"`;if(this.debug(r),i!==null){if(!this.keyFormatPromise){let s=Object.keys(this.keySystemAccessPromises);s.length||(s=pn(this.config));const o=s.map(ui).filter(l=>!!l);this.keyFormatPromise=this.getKeyFormatPromise(o)}this.keyFormatPromise.then(s=>{const o=di(s);let l,d;if(n==="sinf"){if(o!==ye.FAIRPLAY){this.warn(`Ignoring unexpected "${t.type}" event with init data type: "${n}" for selected key-system ${o}`);return}const A=Ie(new Uint8Array(i));try{const f=Wi(JSON.parse(A).sinf),g=Qs(f);if(!g)throw new Error("'schm' box missing or not cbcs/cenc with schi > tenc");l=g.subarray(8,24),d=ye.FAIRPLAY}catch(f){this.warn(`${r} Failed to parse sinf: ${f}`);return}}else{if(o!==ye.WIDEVINE&&o!==ye.PLAYREADY){this.warn(`Ignoring unexpected "${t.type}" event with init data type: "${n}" for selected key-system ${o}`);return}const A=Md(i),f=A.filter(C=>!!C.systemId&&ci(C.systemId)===o);f.length>1&&this.warn(`${r} Using first of ${f.length} pssh found for selected key-system ${o}`);const g=f[0];if(!g){A.length===0||A.some(C=>!C.systemId)?this.warn(`${r} contains incomplete or invalid pssh data`):this.log(`ignoring ${r} for ${A.map(C=>ci(C.systemId)).join(",")} pssh data in favor of playlist keys`);return}if(d=ci(g.systemId),g.version===0&&g.data)if(d===ye.WIDEVINE){const C=g.data.length-22;l=g.data.subarray(C,C+16)}else d===ye.PLAYREADY&&(l=Ks(g.data))}if(!d||!l){this.log(`Unable to handle ${r} with key-system ${o}`);return}const c=et.hexDump(l),{keyIdToKeySessionPromise:h,mediaKeySessions:u}=this;let m=h[c];for(let A=0;A<u.length;A++){const f=u[A],g=f.decryptdata;if(!g.keyId)continue;const C=et.hexDump(g.keyId);if(c===C||g.uri.replace(/-/g,"").indexOf(c)!==-1){if(m=h[C],g.pssh)break;delete h[C],g.pssh=new Uint8Array(i),g.keyId=l,m=h[c]=m.then(()=>this.generateRequestWithPreferredKeySession(f,n,i,"encrypted-event-key-match")),m.catch(T=>this.handleError(T));break}}if(!m){if(d!==o){this.log(`Ignoring "${r}" with ${d} init data for selected key-system ${o}`);return}m=h[c]=this.getKeySystemSelectionPromise([d]).then(({keySystem:A,mediaKeys:f})=>{var g;this.throwIfDestroyed();const C=new en("ISO-23001-7",c,(g=ui(A))!=null?g:"");return C.pssh=new Uint8Array(i),C.keyId=l,this.attemptSetMediaKeys(A,f).then(()=>{this.throwIfDestroyed();const T=this.createMediaKeySessionContext({decryptdata:C,keySystem:A,mediaKeys:f});return this.generateRequestWithPreferredKeySession(T,n,i,"encrypted-event-no-match")})}),m.catch(A=>this.handleError(A))}})}},this.onWaitingForKey=t=>{this.log(`"${t.type}" event`)},this.hls=e,this.config=e.config,this.registerListeners()}destroy(){this.unregisterListeners(),this.onMediaDetached();const e=this.config;e.requestMediaKeySystemAccessFunc=null,e.licenseXhrSetup=e.licenseResponseCallback=void 0,e.drmSystems=e.drmSystemOptions={},this.hls=this.config=this.keyIdToKeySessionPromise=null,this.onMediaEncrypted=this.onWaitingForKey=null}registerListeners(){this.hls.on(v.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.on(v.MEDIA_DETACHED,this.onMediaDetached,this),this.hls.on(v.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.on(v.MANIFEST_LOADED,this.onManifestLoaded,this)}unregisterListeners(){this.hls.off(v.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.off(v.MEDIA_DETACHED,this.onMediaDetached,this),this.hls.off(v.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.off(v.MANIFEST_LOADED,this.onManifestLoaded,this)}getLicenseServerUrl(e){const{drmSystems:t,widevineLicenseUrl:n}=this.config,i=t[e];if(i)return i.licenseUrl;if(e===ye.WIDEVINE&&n)return n}getLicenseServerUrlOrThrow(e){const t=this.getLicenseServerUrl(e);if(t===void 0)throw new Error(`no license server URL configured for key-system "${e}"`);return t}getServerCertificateUrl(e){const{drmSystems:t}=this.config,n=t[e];if(n)return n.serverCertificateUrl;this.log(`No Server Certificate in config.drmSystems["${e}"]`)}attemptKeySystemAccess(e){const t=this.hls.levels,n=(s,o,l)=>!!s&&l.indexOf(s)===o,i=t.map(s=>s.audioCodec).filter(n),r=t.map(s=>s.videoCodec).filter(n);return i.length+r.length===0&&r.push("avc1.42e01e"),new Promise((s,o)=>{const l=d=>{const c=d.shift();this.getMediaKeysPromise(c,i,r).then(h=>s({keySystem:c,mediaKeys:h})).catch(h=>{d.length?l(d):h instanceof Ke?o(h):o(new Ke({type:ie.KEY_SYSTEM_ERROR,details:O.KEY_SYSTEM_NO_ACCESS,error:h,fatal:!0},h.message))})};l(e)})}requestMediaKeySystemAccess(e,t){const{requestMediaKeySystemAccessFunc:n}=this.config;if(typeof n!="function"){let i=`Configured requestMediaKeySystemAccess is not a function ${n}`;return Gs===null&&self.location.protocol==="http:"&&(i=`navigator.requestMediaKeySystemAccess is not available over insecure protocol ${location.protocol}`),Promise.reject(new Error(i))}return n(e,t)}getMediaKeysPromise(e,t,n){const i=hd(e,t,n,this.config.drmSystemOptions),r=this.keySystemAccessPromises[e];let s=r==null?void 0:r.keySystemAccess;if(!s){this.log(`Requesting encrypted media "${e}" key-system access with config: ${JSON.stringify(i)}`),s=this.requestMediaKeySystemAccess(e,i);const o=this.keySystemAccessPromises[e]={keySystemAccess:s};return s.catch(l=>{this.log(`Failed to obtain access to key-system "${e}": ${l}`)}),s.then(l=>{this.log(`Access for key-system "${l.keySystem}" obtained`);const d=this.fetchServerCertificate(e);return this.log(`Create media-keys for "${e}"`),o.mediaKeys=l.createMediaKeys().then(c=>(this.log(`Media-keys created for "${e}"`),d.then(h=>h?this.setMediaKeysServerCertificate(c,e,h):c))),o.mediaKeys.catch(c=>{this.error(`Failed to create media-keys for "${e}"}: ${c}`)}),o.mediaKeys})}return s.then(()=>r.mediaKeys)}createMediaKeySessionContext({decryptdata:e,keySystem:t,mediaKeys:n}){this.log(`Creating key-system session "${t}" keyId: ${et.hexDump(e.keyId||[])}`);const i=n.createSession(),r={decryptdata:e,keySystem:t,mediaKeys:n,mediaKeysSession:i,keyStatus:"status-pending"};return this.mediaKeySessions.push(r),r}renewKeySession(e){const t=e.decryptdata;if(t.pssh){const n=this.createMediaKeySessionContext(e),i=this.getKeyIdString(t),r="cenc";this.keyIdToKeySessionPromise[i]=this.generateRequestWithPreferredKeySession(n,r,t.pssh,"expired")}else this.warn("Could not renew expired session. Missing pssh initData.");this.removeSession(e)}getKeyIdString(e){if(!e)throw new Error("Could not read keyId of undefined decryptdata");if(e.keyId===null)throw new Error("keyId is null");return et.hexDump(e.keyId)}updateKeySession(e,t){var n;const i=e.mediaKeysSession;return this.log(`Updating key-session "${i.sessionId}" for keyID ${et.hexDump(((n=e.decryptdata)==null?void 0:n.keyId)||[])}
      } (data length: ${t&&t.byteLength})`),i.update(t)}selectKeySystemFormat(e){const t=Object.keys(e.levelkeys||{});return this.keyFormatPromise||(this.log(`Selecting key-system from fragment (sn: ${e.sn} ${e.type}: ${e.level}) key formats ${t.join(", ")}`),this.keyFormatPromise=this.getKeyFormatPromise(t)),this.keyFormatPromise}getKeyFormatPromise(e){return new Promise((t,n)=>{const i=pn(this.config),r=e.map(di).filter(s=>!!s&&i.indexOf(s)!==-1);return this.getKeySystemSelectionPromise(r).then(({keySystem:s})=>{const o=ui(s);o?t(o):n(new Error(`Unable to find format for key-system "${s}"`))}).catch(n)})}loadKey(e){const t=e.keyInfo.decryptdata,n=this.getKeyIdString(t),i=`(keyId: ${n} format: "${t.keyFormat}" method: ${t.method} uri: ${t.uri})`;this.log(`Starting session for key ${i}`);let r=this.keyIdToKeySessionPromise[n];return r||(r=this.keyIdToKeySessionPromise[n]=this.getKeySystemForKeyPromise(t).then(({keySystem:s,mediaKeys:o})=>(this.throwIfDestroyed(),this.log(`Handle encrypted media sn: ${e.frag.sn} ${e.frag.type}: ${e.frag.level} using key ${i}`),this.attemptSetMediaKeys(s,o).then(()=>{this.throwIfDestroyed();const l=this.createMediaKeySessionContext({keySystem:s,mediaKeys:o,decryptdata:t}),d="cenc";return this.generateRequestWithPreferredKeySession(l,d,t.pssh,"playlist-key")}))),r.catch(s=>this.handleError(s))),r}throwIfDestroyed(e="Invalid state"){if(!this.hls)throw new Error("invalid state")}handleError(e){this.hls&&(this.error(e.message),e instanceof Ke?this.hls.trigger(v.ERROR,e.data):this.hls.trigger(v.ERROR,{type:ie.KEY_SYSTEM_ERROR,details:O.KEY_SYSTEM_NO_KEYS,error:e,fatal:!0}))}getKeySystemForKeyPromise(e){const t=this.getKeyIdString(e),n=this.keyIdToKeySessionPromise[t];if(!n){const i=di(e.keyFormat),r=i?[i]:pn(this.config);return this.attemptKeySystemAccess(r)}return n}getKeySystemSelectionPromise(e){if(e.length||(e=pn(this.config)),e.length===0)throw new Ke({type:ie.KEY_SYSTEM_ERROR,details:O.KEY_SYSTEM_NO_CONFIGURED_LICENSE,fatal:!0},`Missing key-system license configuration options ${JSON.stringify({drmSystems:this.config.drmSystems})}`);return this.attemptKeySystemAccess(e)}attemptSetMediaKeys(e,t){const n=this.setMediaKeysQueue.slice();this.log(`Setting media-keys for "${e}"`);const i=Promise.all(n).then(()=>{if(!this.media)throw new Error("Attempted to set mediaKeys without media element attached");return this.media.setMediaKeys(t)});return this.setMediaKeysQueue.push(i),i.then(()=>{this.log(`Media-keys set for "${e}"`),n.push(i),this.setMediaKeysQueue=this.setMediaKeysQueue.filter(r=>n.indexOf(r)===-1)})}generateRequestWithPreferredKeySession(e,t,n,i){var r,s;const o=(r=this.config.drmSystems)==null||(s=r[e.keySystem])==null?void 0:s.generateRequest;if(o)try{const A=o.call(this.hls,t,n,e);if(!A)throw new Error("Invalid response from configured generateRequest filter");t=A.initDataType,n=e.decryptdata.pssh=A.initData?new Uint8Array(A.initData):null}catch(A){var l;if(this.warn(A.message),(l=this.hls)!=null&&l.config.debug)throw A}if(n===null)return this.log(`Skipping key-session request for "${i}" (no initData)`),Promise.resolve(e);const d=this.getKeyIdString(e.decryptdata);this.log(`Generating key-session request for "${i}": ${d} (init data type: ${t} length: ${n?n.byteLength:null})`);const c=new ar,h=e._onmessage=A=>{const f=e.mediaKeysSession;if(!f){c.emit("error",new Error("invalid state"));return}const{messageType:g,message:C}=A;this.log(`"${g}" message event for session "${f.sessionId}" message size: ${C.byteLength}`),g==="license-request"||g==="license-renewal"?this.renewLicense(e,C).catch(T=>{this.handleError(T),c.emit("error",T)}):g==="license-release"?e.keySystem===ye.FAIRPLAY&&(this.updateKeySession(e,_i("acknowledged")),this.removeSession(e)):this.warn(`unhandled media key message type "${g}"`)},u=e._onkeystatuseschange=A=>{if(!e.mediaKeysSession){c.emit("error",new Error("invalid state"));return}this.onKeyStatusChange(e);const g=e.keyStatus;c.emit("keyStatus",g),g==="expired"&&(this.warn(`${e.keySystem} expired for key ${d}`),this.renewKeySession(e))};e.mediaKeysSession.addEventListener("message",h),e.mediaKeysSession.addEventListener("keystatuseschange",u);const m=new Promise((A,f)=>{c.on("error",f),c.on("keyStatus",g=>{g.startsWith("usable")?A():g==="output-restricted"?f(new Ke({type:ie.KEY_SYSTEM_ERROR,details:O.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED,fatal:!1},"HDCP level output restricted")):g==="internal-error"?f(new Ke({type:ie.KEY_SYSTEM_ERROR,details:O.KEY_SYSTEM_STATUS_INTERNAL_ERROR,fatal:!0},`key status changed to "${g}"`)):g==="expired"?f(new Error("key expired while generating request")):this.warn(`unhandled key status change "${g}"`)})});return e.mediaKeysSession.generateRequest(t,n).then(()=>{var A;this.log(`Request generated for key-session "${(A=e.mediaKeysSession)==null?void 0:A.sessionId}" keyId: ${d}`)}).catch(A=>{throw new Ke({type:ie.KEY_SYSTEM_ERROR,details:O.KEY_SYSTEM_NO_SESSION,error:A,fatal:!1},`Error generating key-session request: ${A}`)}).then(()=>m).catch(A=>{throw c.removeAllListeners(),this.removeSession(e),A}).then(()=>(c.removeAllListeners(),e))}onKeyStatusChange(e){e.mediaKeysSession.keyStatuses.forEach((t,n)=>{this.log(`key status change "${t}" for keyStatuses keyId: ${et.hexDump("buffer"in n?new Uint8Array(n.buffer,n.byteOffset,n.byteLength):new Uint8Array(n))} session keyId: ${et.hexDump(new Uint8Array(e.decryptdata.keyId||[]))} uri: ${e.decryptdata.uri}`),e.keyStatus=t})}fetchServerCertificate(e){const t=this.config,n=t.loader,i=new n(t),r=this.getServerCertificateUrl(e);return r?(this.log(`Fetching server certificate for "${e}"`),new Promise((s,o)=>{const l={responseType:"arraybuffer",url:r},d=t.certLoadPolicy.default,c={loadPolicy:d,timeout:d.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0},h={onSuccess:(u,m,A,f)=>{s(u.data)},onError:(u,m,A,f)=>{o(new Ke({type:ie.KEY_SYSTEM_ERROR,details:O.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,fatal:!0,networkDetails:A,response:_e({url:l.url,data:void 0},u)},`"${e}" certificate request failed (${r}). Status: ${u.code} (${u.text})`))},onTimeout:(u,m,A)=>{o(new Ke({type:ie.KEY_SYSTEM_ERROR,details:O.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,fatal:!0,networkDetails:A,response:{url:l.url,data:void 0}},`"${e}" certificate request timed out (${r})`))},onAbort:(u,m,A)=>{o(new Error("aborted"))}};i.load(l,c,h)})):Promise.resolve()}setMediaKeysServerCertificate(e,t,n){return new Promise((i,r)=>{e.setServerCertificate(n).then(s=>{this.log(`setServerCertificate ${s?"success":"not supported by CDM"} (${n==null?void 0:n.byteLength}) on "${t}"`),i(e)}).catch(s=>{r(new Ke({type:ie.KEY_SYSTEM_ERROR,details:O.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED,error:s,fatal:!0},s.message))})})}renewLicense(e,t){return this.requestLicense(e,new Uint8Array(t)).then(n=>this.updateKeySession(e,new Uint8Array(n)).catch(i=>{throw new Ke({type:ie.KEY_SYSTEM_ERROR,details:O.KEY_SYSTEM_SESSION_UPDATE_FAILED,error:i,fatal:!0},i.message)}))}unpackPlayReadyKeyMessage(e,t){const n=String.fromCharCode.apply(null,new Uint16Array(t.buffer));if(!n.includes("PlayReadyKeyMessage"))return e.setRequestHeader("Content-Type","text/xml; charset=utf-8"),t;const i=new DOMParser().parseFromString(n,"application/xml"),r=i.querySelectorAll("HttpHeader");if(r.length>0){let c;for(let h=0,u=r.length;h<u;h++){var s,o;c=r[h];const m=(s=c.querySelector("name"))==null?void 0:s.textContent,A=(o=c.querySelector("value"))==null?void 0:o.textContent;m&&A&&e.setRequestHeader(m,A)}}const l=i.querySelector("Challenge"),d=l==null?void 0:l.textContent;if(!d)throw new Error("Cannot find <Challenge> in key message");return _i(atob(d))}setupLicenseXHR(e,t,n,i){const r=this.config.licenseXhrSetup;return r?Promise.resolve().then(()=>{if(!n.decryptdata)throw new Error("Key removed");return r.call(this.hls,e,t,n,i)}).catch(s=>{if(!n.decryptdata)throw s;return e.open("POST",t,!0),r.call(this.hls,e,t,n,i)}).then(s=>(e.readyState||e.open("POST",t,!0),{xhr:e,licenseChallenge:s||i})):(e.open("POST",t,!0),Promise.resolve({xhr:e,licenseChallenge:i}))}requestLicense(e,t){const n=this.config.keyLoadPolicy.default;return new Promise((i,r)=>{const s=this.getLicenseServerUrlOrThrow(e.keySystem);this.log(`Sending license request to URL: ${s}`);const o=new XMLHttpRequest;o.responseType="arraybuffer",o.onreadystatechange=()=>{if(!this.hls||!e.mediaKeysSession)return r(new Error("invalid state"));if(o.readyState===4)if(o.status===200){this._requestLicenseFailureCount=0;let l=o.response;this.log(`License received ${l instanceof ArrayBuffer?l.byteLength:l}`);const d=this.config.licenseResponseCallback;if(d)try{l=d.call(this.hls,o,s,e)}catch(c){this.error(c)}i(l)}else{const l=n.errorRetry,d=l?l.maxNumRetry:0;if(this._requestLicenseFailureCount++,this._requestLicenseFailureCount>d||o.status>=400&&o.status<500)r(new Ke({type:ie.KEY_SYSTEM_ERROR,details:O.KEY_SYSTEM_LICENSE_REQUEST_FAILED,fatal:!0,networkDetails:o,response:{url:s,data:void 0,code:o.status,text:o.statusText}},`License Request XHR failed (${s}). Status: ${o.status} (${o.statusText})`));else{const c=d-this._requestLicenseFailureCount+1;this.warn(`Retrying license request, ${c} attempts left`),this.requestLicense(e,t).then(i,r)}}},e.licenseXhr&&e.licenseXhr.readyState!==XMLHttpRequest.DONE&&e.licenseXhr.abort(),e.licenseXhr=o,this.setupLicenseXHR(o,s,e,t).then(({xhr:l,licenseChallenge:d})=>{e.keySystem==ye.PLAYREADY&&(d=this.unpackPlayReadyKeyMessage(l,d)),l.send(d)})})}onMediaAttached(e,t){if(!this.config.emeEnabled)return;const n=t.media;this.media=n,n.removeEventListener("encrypted",this.onMediaEncrypted),n.removeEventListener("waitingforkey",this.onWaitingForKey),n.addEventListener("encrypted",this.onMediaEncrypted),n.addEventListener("waitingforkey",this.onWaitingForKey)}onMediaDetached(){const e=this.media,t=this.mediaKeySessions;e&&(e.removeEventListener("encrypted",this.onMediaEncrypted),e.removeEventListener("waitingforkey",this.onWaitingForKey),this.media=null),this._requestLicenseFailureCount=0,this.setMediaKeysQueue=[],this.mediaKeySessions=[],this.keyIdToKeySessionPromise={},en.clearKeyUriToKeyIdMap();const n=t.length;Kt.CDMCleanupPromise=Promise.all(t.map(i=>this.removeSession(i)).concat(e==null?void 0:e.setMediaKeys(null).catch(i=>{this.log(`Could not clear media keys: ${i}`)}))).then(()=>{n&&(this.log("finished closing key sessions and clearing media keys"),t.length=0)}).catch(i=>{this.log(`Could not close sessions and clear media keys: ${i}`)})}onManifestLoading(){this.keyFormatPromise=null}onManifestLoaded(e,{sessionKeys:t}){if(!(!t||!this.config.emeEnabled)&&!this.keyFormatPromise){const n=t.reduce((i,r)=>(i.indexOf(r.keyFormat)===-1&&i.push(r.keyFormat),i),[]);this.log(`Selecting key-system from session-keys ${n.join(", ")}`),this.keyFormatPromise=this.getKeyFormatPromise(n)}}removeSession(e){const{mediaKeysSession:t,licenseXhr:n}=e;if(t){this.log(`Remove licenses and keys and close session ${t.sessionId}`),e._onmessage&&(t.removeEventListener("message",e._onmessage),e._onmessage=void 0),e._onkeystatuseschange&&(t.removeEventListener("keystatuseschange",e._onkeystatuseschange),e._onkeystatuseschange=void 0),n&&n.readyState!==XMLHttpRequest.DONE&&n.abort(),e.mediaKeysSession=e.decryptdata=e.licenseXhr=void 0;const i=this.mediaKeySessions.indexOf(e);return i>-1&&this.mediaKeySessions.splice(i,1),t.remove().catch(r=>{this.log(`Could not remove session: ${r}`)}).then(()=>t.close()).catch(r=>{this.log(`Could not close session: ${r}`)})}}}Kt.CDMCleanupPromise=void 0;class Ke extends Error{constructor(e,t){super(t),this.data=void 0,e.error||(e.error=new Error(t)),this.data=e,e.err=e.error}}var Oe;(function(a){a.MANIFEST="m",a.AUDIO="a",a.VIDEO="v",a.MUXED="av",a.INIT="i",a.CAPTION="c",a.TIMED_TEXT="tt",a.KEY="k",a.OTHER="o"})(Oe||(Oe={}));var Ki;(function(a){a.DASH="d",a.HLS="h",a.SMOOTH="s",a.OTHER="o"})(Ki||(Ki={}));var It;(function(a){a.OBJECT="CMCD-Object",a.REQUEST="CMCD-Request",a.SESSION="CMCD-Session",a.STATUS="CMCD-Status"})(It||(It={}));const oh={[It.OBJECT]:["br","d","ot","tb"],[It.REQUEST]:["bl","dl","mtp","nor","nrr","su"],[It.SESSION]:["cid","pr","sf","sid","st","v"],[It.STATUS]:["bs","rtp"]};class Yt{constructor(e,t){this.value=void 0,this.params=void 0,Array.isArray(e)&&(e=e.map(n=>n instanceof Yt?n:new Yt(n))),this.value=e,this.params=t}}class Ma{constructor(e){this.description=void 0,this.description=e}}const lh="Dict";function dh(a){return Array.isArray(a)?JSON.stringify(a):a instanceof Map?"Map{}":a instanceof Set?"Set{}":typeof a=="object"?JSON.stringify(a):String(a)}function ch(a,e,t,n){return new Error(`failed to ${a} "${dh(e)}" as ${t}`,{cause:n})}const Ts="Bare Item",uh="Boolean",hh="Byte Sequence",ph="Decimal",fh="Integer";function mh(a){return a<-999999999999999||999999999999999<a}const Ah=/[\x00-\x1f\x7f]+/,gh="Token",yh="Key";function st(a,e,t){return ch("serialize",a,e,t)}function bh(a){if(typeof a!="boolean")throw st(a,uh);return a?"?1":"?0"}function vh(a){return btoa(String.fromCharCode(...a))}function Eh(a){if(ArrayBuffer.isView(a)===!1)throw st(a,hh);return`:${vh(a)}:`}function Na(a){if(mh(a))throw st(a,fh);return a.toString()}function xh(a){return`@${Na(a.getTime()/1e3)}`}function Ua(a,e){if(a<0)return-Ua(-a,e);const t=Math.pow(10,e);if(Math.abs(a*t%1-.5)<Number.EPSILON){const i=Math.floor(a*t);return(i%2===0?i:i+1)/t}else return Math.round(a*t)/t}function Ch(a){const e=Ua(a,3);if(Math.floor(Math.abs(e)).toString().length>12)throw st(a,ph);const t=e.toString();return t.includes(".")?t:`${t}.0`}const Th="String";function Sh(a){if(Ah.test(a))throw st(a,Th);return`"${a.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`}function kh(a){return a.description||a.toString().slice(7,-1)}function Ss(a){const e=kh(a);if(/^([a-zA-Z*])([!#$%&'*+\-.^_`|~\w:/]*)$/.test(e)===!1)throw st(e,gh);return e}function Hi(a){switch(typeof a){case"number":if(!X(a))throw st(a,Ts);return Number.isInteger(a)?Na(a):Ch(a);case"string":return Sh(a);case"symbol":return Ss(a);case"boolean":return bh(a);case"object":if(a instanceof Date)return xh(a);if(a instanceof Uint8Array)return Eh(a);if(a instanceof Ma)return Ss(a);default:throw st(a,Ts)}}function qi(a){if(/^[a-z*][a-z0-9\-_.*]*$/.test(a)===!1)throw st(a,yh);return a}function cr(a){return a==null?"":Object.entries(a).map(([e,t])=>t===!0?`;${qi(e)}`:`;${qi(e)}=${Hi(t)}`).join("")}function $a(a){return a instanceof Yt?`${Hi(a.value)}${cr(a.params)}`:Hi(a)}function wh(a){return`(${a.value.map($a).join(" ")})${cr(a.params)}`}function Lh(a,e={whitespace:!0}){if(typeof a!="object")throw st(a,lh);const t=a instanceof Map?a.entries():Object.entries(a),n=e!=null&&e.whitespace?" ":"";return Array.from(t).map(([i,r])=>{r instanceof Yt||(r=new Yt(r));let s=qi(i);return r.value===!0?s+=cr(r.params):(s+="=",Array.isArray(r.value)?s+=wh(r):s+=$a(r)),s}).join(`,${n}`)}function Ih(a,e){return Lh(a,e)}const Rh=a=>a==="ot"||a==="sf"||a==="st",Dh=a=>typeof a=="number"?X(a):a!=null&&a!==""&&a!==!1;function _h(a,e){const t=new URL(a),n=new URL(e);if(t.origin!==n.origin)return a;const i=t.pathname.split("/").slice(1),r=n.pathname.split("/").slice(1,-1);for(;i[0]===r[0];)i.shift(),r.shift();for(;r.length;)r.shift(),i.unshift("..");return i.join("/")}function Bh(){try{return crypto.randomUUID()}catch{try{const e=URL.createObjectURL(new Blob),t=e.toString();return URL.revokeObjectURL(e),t.slice(t.lastIndexOf("/")+1)}catch{let t=new Date().getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,i=>{const r=(t+Math.random()*16)%16|0;return t=Math.floor(t/16),(i=="x"?r:r&3|8).toString(16)})}}}const Dn=a=>Math.round(a),Ph=(a,e)=>(e!=null&&e.baseUrl&&(a=_h(a,e.baseUrl)),encodeURIComponent(a)),Tn=a=>Dn(a/100)*100,Oh={br:Dn,d:Dn,bl:Tn,dl:Tn,mtp:Tn,nor:Ph,rtp:Tn,tb:Dn};function Fh(a,e){const t={};if(a==null||typeof a!="object")return t;const n=Object.keys(a).sort(),i=we({},Oh,e==null?void 0:e.formatters),r=e==null?void 0:e.filter;return n.forEach(s=>{if(r!=null&&r(s))return;let o=a[s];const l=i[s];l&&(o=l(o,e)),!(s==="v"&&o===1)&&(s=="pr"&&o===1||Dh(o)&&(Rh(s)&&typeof o=="string"&&(o=new Ma(o)),t[s]=o))}),t}function Ga(a,e={}){return a?Ih(Fh(a,e),we({whitespace:!1},e)):""}function Mh(a,e={}){if(!a)return{};const t=Object.entries(a),n=Object.entries(oh).concat(Object.entries((e==null?void 0:e.customHeaderMap)||{})),i=t.reduce((r,s)=>{var o,l;const[d,c]=s,h=((o=n.find(u=>u[1].includes(d)))==null?void 0:o[0])||It.REQUEST;return(l=r[h])!=null||(r[h]={}),r[h][d]=c,r},{});return Object.entries(i).reduce((r,[s,o])=>(r[s]=Ga(o,e),r),{})}function Nh(a,e,t){return we(a,Mh(e,t))}const Uh="CMCD";function $h(a,e={}){if(!a)return"";const t=Ga(a,e);return`${Uh}=${encodeURIComponent(t)}`}const ks=/CMCD=[^&#]+/;function Gh(a,e,t){const n=$h(e,t);if(!n)return a;if(ks.test(a))return a.replace(ks,n);const i=a.includes("?")?"&":"?";return`${a}${i}${n}`}class Kh{constructor(e){this.hls=void 0,this.config=void 0,this.media=void 0,this.sid=void 0,this.cid=void 0,this.useHeaders=!1,this.includeKeys=void 0,this.initialized=!1,this.starved=!1,this.buffering=!0,this.audioBuffer=void 0,this.videoBuffer=void 0,this.onWaiting=()=>{this.initialized&&(this.starved=!0),this.buffering=!0},this.onPlaying=()=>{this.initialized||(this.initialized=!0),this.buffering=!1},this.applyPlaylistData=i=>{try{this.apply(i,{ot:Oe.MANIFEST,su:!this.initialized})}catch(r){D.warn("Could not generate manifest CMCD data.",r)}},this.applyFragmentData=i=>{try{const r=i.frag,s=this.hls.levels[r.level],o=this.getObjectType(r),l={d:r.duration*1e3,ot:o};(o===Oe.VIDEO||o===Oe.AUDIO||o==Oe.MUXED)&&(l.br=s.bitrate/1e3,l.tb=this.getTopBandwidth(o)/1e3,l.bl=this.getBufferLength(o)),this.apply(i,l)}catch(r){D.warn("Could not generate segment CMCD data.",r)}},this.hls=e;const t=this.config=e.config,{cmcd:n}=t;n!=null&&(t.pLoader=this.createPlaylistLoader(),t.fLoader=this.createFragmentLoader(),this.sid=n.sessionId||Bh(),this.cid=n.contentId,this.useHeaders=n.useHeaders===!0,this.includeKeys=n.includeKeys,this.registerListeners())}registerListeners(){const e=this.hls;e.on(v.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(v.MEDIA_DETACHED,this.onMediaDetached,this),e.on(v.BUFFER_CREATED,this.onBufferCreated,this)}unregisterListeners(){const e=this.hls;e.off(v.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(v.MEDIA_DETACHED,this.onMediaDetached,this),e.off(v.BUFFER_CREATED,this.onBufferCreated,this)}destroy(){this.unregisterListeners(),this.onMediaDetached(),this.hls=this.config=this.audioBuffer=this.videoBuffer=null,this.onWaiting=this.onPlaying=null}onMediaAttached(e,t){this.media=t.media,this.media.addEventListener("waiting",this.onWaiting),this.media.addEventListener("playing",this.onPlaying)}onMediaDetached(){this.media&&(this.media.removeEventListener("waiting",this.onWaiting),this.media.removeEventListener("playing",this.onPlaying),this.media=null)}onBufferCreated(e,t){var n,i;this.audioBuffer=(n=t.tracks.audio)==null?void 0:n.buffer,this.videoBuffer=(i=t.tracks.video)==null?void 0:i.buffer}createData(){var e;return{v:1,sf:Ki.HLS,sid:this.sid,cid:this.cid,pr:(e=this.media)==null?void 0:e.playbackRate,mtp:this.hls.bandwidthEstimate/1e3}}apply(e,t={}){we(t,this.createData());const n=t.ot===Oe.INIT||t.ot===Oe.VIDEO||t.ot===Oe.MUXED;this.starved&&n&&(t.bs=!0,t.su=!0,this.starved=!1),t.su==null&&(t.su=this.buffering);const{includeKeys:i}=this;i&&(t=Object.keys(t).reduce((r,s)=>(i.includes(s)&&(r[s]=t[s]),r),{})),this.useHeaders?(e.headers||(e.headers={}),Nh(e.headers,t)):e.url=Gh(e.url,t)}getObjectType(e){const{type:t}=e;if(t==="subtitle")return Oe.TIMED_TEXT;if(e.sn==="initSegment")return Oe.INIT;if(t==="audio")return Oe.AUDIO;if(t==="main")return this.hls.audioTracks.length?Oe.VIDEO:Oe.MUXED}getTopBandwidth(e){let t=0,n;const i=this.hls;if(e===Oe.AUDIO)n=i.audioTracks;else{const r=i.maxAutoLevel,s=r>-1?r+1:i.levels.length;n=i.levels.slice(0,s)}for(const r of n)r.bitrate>t&&(t=r.bitrate);return t>0?t:NaN}getBufferLength(e){const t=this.hls.media,n=e===Oe.AUDIO?this.audioBuffer:this.videoBuffer;return!n||!t?NaN:Ce.bufferInfo(n,t.currentTime,this.config.maxBufferHole).len*1e3}createPlaylistLoader(){const{pLoader:e}=this.config,t=this.applyPlaylistData,n=e||this.config.loader;return class{constructor(r){this.loader=void 0,this.loader=new n(r)}get stats(){return this.loader.stats}get context(){return this.loader.context}destroy(){this.loader.destroy()}abort(){this.loader.abort()}load(r,s,o){t(r),this.loader.load(r,s,o)}}}createFragmentLoader(){const{fLoader:e}=this.config,t=this.applyFragmentData,n=e||this.config.loader;return class{constructor(r){this.loader=void 0,this.loader=new n(r)}get stats(){return this.loader.stats}get context(){return this.loader.context}destroy(){this.loader.destroy()}abort(){this.loader.abort()}load(r,s,o){t(r),this.loader.load(r,s,o)}}}}const Hh=3e5;class qh{constructor(e){this.hls=void 0,this.log=void 0,this.loader=null,this.uri=null,this.pathwayId=".",this.pathwayPriority=null,this.timeToLoad=300,this.reloadTimer=-1,this.updated=0,this.started=!1,this.enabled=!0,this.levels=null,this.audioTracks=null,this.subtitleTracks=null,this.penalizedPathways={},this.hls=e,this.log=D.log.bind(D,"[content-steering]:"),this.registerListeners()}registerListeners(){const e=this.hls;e.on(v.MANIFEST_LOADING,this.onManifestLoading,this),e.on(v.MANIFEST_LOADED,this.onManifestLoaded,this),e.on(v.MANIFEST_PARSED,this.onManifestParsed,this),e.on(v.ERROR,this.onError,this)}unregisterListeners(){const e=this.hls;e&&(e.off(v.MANIFEST_LOADING,this.onManifestLoading,this),e.off(v.MANIFEST_LOADED,this.onManifestLoaded,this),e.off(v.MANIFEST_PARSED,this.onManifestParsed,this),e.off(v.ERROR,this.onError,this))}startLoad(){if(this.started=!0,this.clearTimeout(),this.enabled&&this.uri){if(this.updated){const e=this.timeToLoad*1e3-(performance.now()-this.updated);if(e>0){this.scheduleRefresh(this.uri,e);return}}this.loadSteeringManifest(this.uri)}}stopLoad(){this.started=!1,this.loader&&(this.loader.destroy(),this.loader=null),this.clearTimeout()}clearTimeout(){this.reloadTimer!==-1&&(self.clearTimeout(this.reloadTimer),this.reloadTimer=-1)}destroy(){this.unregisterListeners(),this.stopLoad(),this.hls=null,this.levels=this.audioTracks=this.subtitleTracks=null}removeLevel(e){const t=this.levels;t&&(this.levels=t.filter(n=>n!==e))}onManifestLoading(){this.stopLoad(),this.enabled=!0,this.timeToLoad=300,this.updated=0,this.uri=null,this.pathwayId=".",this.levels=this.audioTracks=this.subtitleTracks=null}onManifestLoaded(e,t){const{contentSteering:n}=t;n!==null&&(this.pathwayId=n.pathwayId,this.uri=n.uri,this.started&&this.startLoad())}onManifestParsed(e,t){this.audioTracks=t.audioTracks,this.subtitleTracks=t.subtitleTracks}onError(e,t){const{errorAction:n}=t;if((n==null?void 0:n.action)===Be.SendAlternateToPenaltyBox&&n.flags===Ve.MoveAllAlternatesMatchingHost){const i=this.levels;let r=this.pathwayPriority,s=this.pathwayId;if(t.context){const{groupId:o,pathwayId:l,type:d}=t.context;o&&i?s=this.getPathwayForGroupId(o,d,s):l&&(s=l)}s in this.penalizedPathways||(this.penalizedPathways[s]=performance.now()),!r&&i&&(r=i.reduce((o,l)=>(o.indexOf(l.pathwayId)===-1&&o.push(l.pathwayId),o),[])),r&&r.length>1&&(this.updatePathwayPriority(r),n.resolved=this.pathwayId!==s),n.resolved||D.warn(`Could not resolve ${t.details} ("${t.error.message}") with content-steering for Pathway: ${s} levels: ${i&&i.length} priorities: ${JSON.stringify(r)} penalized: ${JSON.stringify(this.penalizedPathways)}`)}}filterParsedLevels(e){this.levels=e;let t=this.getLevelsForPathway(this.pathwayId);if(t.length===0){const n=e[0].pathwayId;this.log(`No levels found in Pathway ${this.pathwayId}. Setting initial Pathway to "${n}"`),t=this.getLevelsForPathway(n),this.pathwayId=n}return t.length!==e.length&&this.log(`Found ${t.length}/${e.length} levels in Pathway "${this.pathwayId}"`),t}getLevelsForPathway(e){return this.levels===null?[]:this.levels.filter(t=>e===t.pathwayId)}updatePathwayPriority(e){this.pathwayPriority=e;let t;const n=this.penalizedPathways,i=performance.now();Object.keys(n).forEach(r=>{i-n[r]>Hh&&delete n[r]});for(let r=0;r<e.length;r++){const s=e[r];if(s in n)continue;if(s===this.pathwayId)return;const o=this.hls.nextLoadLevel,l=this.hls.levels[o];if(t=this.getLevelsForPathway(s),t.length>0){this.log(`Setting Pathway to "${s}"`),this.pathwayId=s,aa(t),this.hls.trigger(v.LEVELS_UPDATED,{levels:t});const d=this.hls.levels[o];l&&d&&this.levels&&(d.attrs["STABLE-VARIANT-ID"]!==l.attrs["STABLE-VARIANT-ID"]&&d.bitrate!==l.bitrate&&this.log(`Unstable Pathways change from bitrate ${l.bitrate} to ${d.bitrate}`),this.hls.nextLoadLevel=o);break}}}getPathwayForGroupId(e,t,n){const i=this.getLevelsForPathway(n).concat(this.levels||[]);for(let r=0;r<i.length;r++)if(t===he.AUDIO_TRACK&&i[r].hasAudioGroup(e)||t===he.SUBTITLE_TRACK&&i[r].hasSubtitleGroup(e))return i[r].pathwayId;return n}clonePathways(e){const t=this.levels;if(!t)return;const n={},i={};e.forEach(r=>{const{ID:s,"BASE-ID":o,"URI-REPLACEMENT":l}=r;if(t.some(c=>c.pathwayId===s))return;const d=this.getLevelsForPathway(o).map(c=>{const h=new ke(c.attrs);h["PATHWAY-ID"]=s;const u=h.AUDIO&&`${h.AUDIO}_clone_${s}`,m=h.SUBTITLES&&`${h.SUBTITLES}_clone_${s}`;u&&(n[h.AUDIO]=u,h.AUDIO=u),m&&(i[h.SUBTITLES]=m,h.SUBTITLES=m);const A=Ka(c.uri,h["STABLE-VARIANT-ID"],"PER-VARIANT-URIS",l),f=new qt({attrs:h,audioCodec:c.audioCodec,bitrate:c.bitrate,height:c.height,name:c.name,url:A,videoCodec:c.videoCodec,width:c.width});if(c.audioGroups)for(let g=1;g<c.audioGroups.length;g++)f.addGroupId("audio",`${c.audioGroups[g]}_clone_${s}`);if(c.subtitleGroups)for(let g=1;g<c.subtitleGroups.length;g++)f.addGroupId("text",`${c.subtitleGroups[g]}_clone_${s}`);return f});t.push(...d),ws(this.audioTracks,n,l,s),ws(this.subtitleTracks,i,l,s)})}loadSteeringManifest(e){const t=this.hls.config,n=t.loader;this.loader&&this.loader.destroy(),this.loader=new n(t);let i;try{i=new self.URL(e)}catch{this.enabled=!1,this.log(`Failed to parse Steering Manifest URI: ${e}`);return}if(i.protocol!=="data:"){const c=(this.hls.bandwidthEstimate||t.abrEwmaDefaultEstimate)|0;i.searchParams.set("_HLS_pathway",this.pathwayId),i.searchParams.set("_HLS_throughput",""+c)}const r={responseType:"json",url:i.href},s=t.steeringManifestLoadPolicy.default,o=s.errorRetry||s.timeoutRetry||{},l={loadPolicy:s,timeout:s.maxLoadTimeMs,maxRetry:o.maxNumRetry||0,retryDelay:o.retryDelayMs||0,maxRetryDelay:o.maxRetryDelayMs||0},d={onSuccess:(c,h,u,m)=>{this.log(`Loaded steering manifest: "${i}"`);const A=c.data;if(A.VERSION!==1){this.log(`Steering VERSION ${A.VERSION} not supported!`);return}this.updated=performance.now(),this.timeToLoad=A.TTL;const{"RELOAD-URI":f,"PATHWAY-CLONES":g,"PATHWAY-PRIORITY":C}=A;if(f)try{this.uri=new self.URL(f,i).href}catch{this.enabled=!1,this.log(`Failed to parse Steering Manifest RELOAD-URI: ${f}`);return}this.scheduleRefresh(this.uri||u.url),g&&this.clonePathways(g);const T={steeringManifest:A,url:i.toString()};this.hls.trigger(v.STEERING_MANIFEST_LOADED,T),C&&this.updatePathwayPriority(C)},onError:(c,h,u,m)=>{if(this.log(`Error loading steering manifest: ${c.code} ${c.text} (${h.url})`),this.stopLoad(),c.code===410){this.enabled=!1,this.log(`Steering manifest ${h.url} no longer available`);return}let A=this.timeToLoad*1e3;if(c.code===429){const f=this.loader;if(typeof(f==null?void 0:f.getResponseHeader)=="function"){const g=f.getResponseHeader("Retry-After");g&&(A=parseFloat(g)*1e3)}this.log(`Steering manifest ${h.url} rate limited`);return}this.scheduleRefresh(this.uri||h.url,A)},onTimeout:(c,h,u)=>{this.log(`Timeout loading steering manifest (${h.url})`),this.scheduleRefresh(this.uri||h.url)}};this.log(`Requesting steering manifest: ${i}`),this.loader.load(r,l,d)}scheduleRefresh(e,t=this.timeToLoad*1e3){this.clearTimeout(),this.reloadTimer=self.setTimeout(()=>{var n;const i=(n=this.hls)==null?void 0:n.media;if(i&&!i.ended){this.loadSteeringManifest(e);return}this.scheduleRefresh(e,this.timeToLoad*1e3)},t)}}function ws(a,e,t,n){a&&Object.keys(e).forEach(i=>{const r=a.filter(s=>s.groupId===i).map(s=>{const o=we({},s);return o.details=void 0,o.attrs=new ke(o.attrs),o.url=o.attrs.URI=Ka(s.url,s.attrs["STABLE-RENDITION-ID"],"PER-RENDITION-URIS",t),o.groupId=o.attrs["GROUP-ID"]=e[i],o.attrs["PATHWAY-ID"]=n,o});a.push(...r)})}function Ka(a,e,t,n){const{HOST:i,PARAMS:r,[t]:s}=n;let o;e&&(o=s==null?void 0:s[e],o&&(a=o));const l=new self.URL(a);return i&&!o&&(l.host=i),r&&Object.keys(r).sort().forEach(d=>{d&&l.searchParams.set(d,r[d])}),l.href}const zh=/^age:\s*[\d.]+\s*$/im;class Ha{constructor(e){this.xhrSetup=void 0,this.requestTimeout=void 0,this.retryTimeout=void 0,this.retryDelay=void 0,this.config=null,this.callbacks=null,this.context=null,this.loader=null,this.stats=void 0,this.xhrSetup=e&&e.xhrSetup||null,this.stats=new qn,this.retryDelay=0}destroy(){this.callbacks=null,this.abortInternal(),this.loader=null,this.config=null,this.context=null,this.xhrSetup=null}abortInternal(){const e=this.loader;self.clearTimeout(this.requestTimeout),self.clearTimeout(this.retryTimeout),e&&(e.onreadystatechange=null,e.onprogress=null,e.readyState!==4&&(this.stats.aborted=!0,e.abort()))}abort(){var e;this.abortInternal(),(e=this.callbacks)!=null&&e.onAbort&&this.callbacks.onAbort(this.stats,this.context,this.loader)}load(e,t,n){if(this.stats.loading.start)throw new Error("Loader can only be used once.");this.stats.loading.start=self.performance.now(),this.context=e,this.config=t,this.callbacks=n,this.loadInternal()}loadInternal(){const{config:e,context:t}=this;if(!e||!t)return;const n=this.loader=new self.XMLHttpRequest,i=this.stats;i.loading.first=0,i.loaded=0,i.aborted=!1;const r=this.xhrSetup;r?Promise.resolve().then(()=>{if(!(this.loader!==n||this.stats.aborted))return r(n,t.url)}).catch(s=>{if(!(this.loader!==n||this.stats.aborted))return n.open("GET",t.url,!0),r(n,t.url)}).then(()=>{this.loader!==n||this.stats.aborted||this.openAndSendXhr(n,t,e)}).catch(s=>{this.callbacks.onError({code:n.status,text:s.message},t,n,i)}):this.openAndSendXhr(n,t,e)}openAndSendXhr(e,t,n){e.readyState||e.open("GET",t.url,!0);const i=t.headers,{maxTimeToFirstByteMs:r,maxLoadTimeMs:s}=n.loadPolicy;if(i)for(const o in i)e.setRequestHeader(o,i[o]);t.rangeEnd&&e.setRequestHeader("Range","bytes="+t.rangeStart+"-"+(t.rangeEnd-1)),e.onreadystatechange=this.readystatechange.bind(this),e.onprogress=this.loadprogress.bind(this),e.responseType=t.responseType,self.clearTimeout(this.requestTimeout),n.timeout=r&&X(r)?r:s,this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this),n.timeout),e.send()}readystatechange(){const{context:e,loader:t,stats:n}=this;if(!e||!t)return;const i=t.readyState,r=this.config;if(!n.aborted&&i>=2&&(n.loading.first===0&&(n.loading.first=Math.max(self.performance.now(),n.loading.start),r.timeout!==r.loadPolicy.maxLoadTimeMs&&(self.clearTimeout(this.requestTimeout),r.timeout=r.loadPolicy.maxLoadTimeMs,this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this),r.loadPolicy.maxLoadTimeMs-(n.loading.first-n.loading.start)))),i===4)){self.clearTimeout(this.requestTimeout),t.onreadystatechange=null,t.onprogress=null;const s=t.status,o=t.responseType==="text"?t.responseText:null;if(s>=200&&s<300){const h=o??t.response;if(h!=null){n.loading.end=Math.max(self.performance.now(),n.loading.first);const u=t.responseType==="arraybuffer"?h.byteLength:h.length;if(n.loaded=n.total=u,n.bwEstimate=n.total*8e3/(n.loading.end-n.loading.first),!this.callbacks)return;const m=this.callbacks.onProgress;if(m&&m(n,e,h,t),!this.callbacks)return;const A={url:t.responseURL,data:h,code:s};this.callbacks.onSuccess(A,n,e,t);return}}const l=r.loadPolicy.errorRetry,d=n.retry,c={url:e.url,data:void 0,code:s};Un(l,d,!1,c)?this.retry(l):(D.error(`${s} while loading ${e.url}`),this.callbacks.onError({code:s,text:t.statusText},e,t,n))}}loadtimeout(){if(!this.config)return;const e=this.config.loadPolicy.timeoutRetry,t=this.stats.retry;if(Un(e,t,!0))this.retry(e);else{var n;D.warn(`timeout while loading ${(n=this.context)==null?void 0:n.url}`);const i=this.callbacks;i&&(this.abortInternal(),i.onTimeout(this.stats,this.context,this.loader))}}retry(e){const{context:t,stats:n}=this;this.retryDelay=Xi(e,n.retry),n.retry++,D.warn(`${status?"HTTP Status "+status:"Timeout"} while loading ${t==null?void 0:t.url}, retrying ${n.retry}/${e.maxNumRetry} in ${this.retryDelay}ms`),this.abortInternal(),this.loader=null,self.clearTimeout(this.retryTimeout),this.retryTimeout=self.setTimeout(this.loadInternal.bind(this),this.retryDelay)}loadprogress(e){const t=this.stats;t.loaded=e.loaded,e.lengthComputable&&(t.total=e.total)}getCacheAge(){let e=null;if(this.loader&&zh.test(this.loader.getAllResponseHeaders())){const t=this.loader.getResponseHeader("age");e=t?parseFloat(t):null}return e}getResponseHeader(e){return this.loader&&new RegExp(`^${e}:\\s*[\\d.]+\\s*$`,"im").test(this.loader.getAllResponseHeaders())?this.loader.getResponseHeader(e):null}}function Yh(){if(self.fetch&&self.AbortController&&self.ReadableStream&&self.Request)try{return new self.ReadableStream({}),!0}catch{}return!1}const Vh=/(\d+)-(\d+)\/(\d+)/;class Ls{constructor(e){this.fetchSetup=void 0,this.requestTimeout=void 0,this.request=null,this.response=null,this.controller=void 0,this.context=null,this.config=null,this.callbacks=null,this.stats=void 0,this.loader=null,this.fetchSetup=e.fetchSetup||Xh,this.controller=new self.AbortController,this.stats=new qn}destroy(){this.loader=this.callbacks=this.context=this.config=this.request=null,this.abortInternal(),this.response=null,this.fetchSetup=this.controller=this.stats=null}abortInternal(){this.controller&&!this.stats.loading.end&&(this.stats.aborted=!0,this.controller.abort())}abort(){var e;this.abortInternal(),(e=this.callbacks)!=null&&e.onAbort&&this.callbacks.onAbort(this.stats,this.context,this.response)}load(e,t,n){const i=this.stats;if(i.loading.start)throw new Error("Loader can only be used once.");i.loading.start=self.performance.now();const r=Wh(e,this.controller.signal),s=n.onProgress,o=e.responseType==="arraybuffer",l=o?"byteLength":"length",{maxTimeToFirstByteMs:d,maxLoadTimeMs:c}=t.loadPolicy;this.context=e,this.config=t,this.callbacks=n,this.request=this.fetchSetup(e,r),self.clearTimeout(this.requestTimeout),t.timeout=d&&X(d)?d:c,this.requestTimeout=self.setTimeout(()=>{this.abortInternal(),n.onTimeout(i,e,this.response)},t.timeout),self.fetch(this.request).then(h=>{this.response=this.loader=h;const u=Math.max(self.performance.now(),i.loading.start);if(self.clearTimeout(this.requestTimeout),t.timeout=c,this.requestTimeout=self.setTimeout(()=>{this.abortInternal(),n.onTimeout(i,e,this.response)},c-(u-i.loading.start)),!h.ok){const{status:m,statusText:A}=h;throw new Zh(A||"fetch, bad network response",m,h)}return i.loading.first=u,i.total=Qh(h.headers)||i.total,s&&X(t.highWaterMark)?this.loadProgressively(h,i,e,t.highWaterMark,s):o?h.arrayBuffer():e.responseType==="json"?h.json():h.text()}).then(h=>{const u=this.response;if(!u)throw new Error("loader destroyed");self.clearTimeout(this.requestTimeout),i.loading.end=Math.max(self.performance.now(),i.loading.first);const m=h[l];m&&(i.loaded=i.total=m);const A={url:u.url,data:h,code:u.status};s&&!X(t.highWaterMark)&&s(i,e,h,u),n.onSuccess(A,i,e,u)}).catch(h=>{if(self.clearTimeout(this.requestTimeout),i.aborted)return;const u=h&&h.code||0,m=h?h.message:null;n.onError({code:u,text:m},e,h?h.details:null,i)})}getCacheAge(){let e=null;if(this.response){const t=this.response.headers.get("age");e=t?parseFloat(t):null}return e}getResponseHeader(e){return this.response?this.response.headers.get(e):null}loadProgressively(e,t,n,i=0,r){const s=new ca,o=e.body.getReader(),l=()=>o.read().then(d=>{if(d.done)return s.dataLength&&r(t,n,s.flush(),e),Promise.resolve(new ArrayBuffer(0));const c=d.value,h=c.length;return t.loaded+=h,h<i||s.dataLength?(s.push(c),s.dataLength>=i&&r(t,n,s.flush(),e)):r(t,n,c,e),l()}).catch(()=>Promise.reject());return l()}}function Wh(a,e){const t={method:"GET",mode:"cors",credentials:"same-origin",signal:e,headers:new self.Headers(we({},a.headers))};return a.rangeEnd&&t.headers.set("Range","bytes="+a.rangeStart+"-"+String(a.rangeEnd-1)),t}function jh(a){const e=Vh.exec(a);if(e)return parseInt(e[2])-parseInt(e[1])+1}function Qh(a){const e=a.get("Content-Range");if(e){const n=jh(e);if(X(n))return n}const t=a.get("Content-Length");if(t)return parseInt(t)}function Xh(a,e){return new self.Request(a.url,e)}class Zh extends Error{constructor(e,t,n){super(e),this.code=void 0,this.details=void 0,this.code=t,this.details=n}}const Jh=/\s/,ep={newCue(a,e,t,n){const i=[];let r,s,o,l,d;const c=self.VTTCue||self.TextTrackCue;for(let u=0;u<n.rows.length;u++)if(r=n.rows[u],o=!0,l=0,d="",!r.isEmpty()){var h;for(let f=0;f<r.chars.length;f++)Jh.test(r.chars[f].uchar)&&o?l++:(d+=r.chars[f].uchar,o=!1);r.cueStartTime=e,e===t&&(t+=1e-4),l>=16?l--:l++;const m=_a(d.trim()),A=lr(e,t,m);a!=null&&(h=a.cues)!=null&&h.getCueById(A)||(s=new c(e,t,m),s.id=A,s.line=u+1,s.align="left",s.position=10+Math.min(80,Math.floor(l*8/32)*10),i.push(s))}return a&&i.length&&(i.sort((u,m)=>u.line==="auto"||m.line==="auto"?0:u.line>8&&m.line>8?m.line-u.line:u.line-m.line),i.forEach(u=>na(a,u))),i}},tp={maxTimeToFirstByteMs:8e3,maxLoadTimeMs:2e4,timeoutRetry:null,errorRetry:null},qa=_e(_e({autoStartLoad:!0,startPosition:-1,defaultAudioCodec:void 0,debug:!1,capLevelOnFPSDrop:!1,capLevelToPlayerSize:!1,ignoreDevicePixelRatio:!1,preferManagedMediaSource:!0,initialLiveManifestSize:1,maxBufferLength:30,backBufferLength:1/0,frontBufferFlushThreshold:1/0,maxBufferSize:60*1e3*1e3,maxBufferHole:.1,highBufferWatchdogPeriod:2,nudgeOffset:.1,nudgeMaxRetry:3,maxFragLookUpTolerance:.25,liveSyncDurationCount:3,liveMaxLatencyDurationCount:1/0,liveSyncDuration:void 0,liveMaxLatencyDuration:void 0,maxLiveSyncPlaybackRate:1,liveDurationInfinity:!1,liveBackBufferLength:null,maxMaxBufferLength:600,enableWorker:!0,workerPath:null,enableSoftwareAES:!0,startLevel:void 0,startFragPrefetch:!1,fpsDroppedMonitoringPeriod:5e3,fpsDroppedMonitoringThreshold:.2,appendErrorMaxRetry:3,loader:Ha,fLoader:void 0,pLoader:void 0,xhrSetup:void 0,licenseXhrSetup:void 0,licenseResponseCallback:void 0,abrController:Lc,bufferController:_u,capLevelController:dr,errorController:Ac,fpsController:ah,stretchShortVideoTrack:!1,maxAudioFramesDrift:1,forceKeyFrameOnDiscontinuity:!0,abrEwmaFastLive:3,abrEwmaSlowLive:9,abrEwmaFastVoD:3,abrEwmaSlowVoD:9,abrEwmaDefaultEstimate:5e5,abrEwmaDefaultEstimateMax:5e6,abrBandWidthFactor:.95,abrBandWidthUpFactor:.7,abrMaxWithRealBitrate:!1,maxStarvationDelay:4,maxLoadingDelay:4,minAutoBitrate:0,emeEnabled:!1,widevineLicenseUrl:void 0,drmSystems:{},drmSystemOptions:{},requestMediaKeySystemAccessFunc:Gs,testBandwidth:!0,progressive:!1,lowLatencyMode:!0,cmcd:void 0,enableDateRangeMetadataCues:!0,enableEmsgMetadataCues:!0,enableID3MetadataCues:!0,useMediaCapabilities:!0,certLoadPolicy:{default:tp},keyLoadPolicy:{default:{maxTimeToFirstByteMs:8e3,maxLoadTimeMs:2e4,timeoutRetry:{maxNumRetry:1,retryDelayMs:1e3,maxRetryDelayMs:2e4,backoff:"linear"},errorRetry:{maxNumRetry:8,retryDelayMs:1e3,maxRetryDelayMs:2e4,backoff:"linear"}}},manifestLoadPolicy:{default:{maxTimeToFirstByteMs:1/0,maxLoadTimeMs:2e4,timeoutRetry:{maxNumRetry:2,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:1,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},playlistLoadPolicy:{default:{maxTimeToFirstByteMs:1e4,maxLoadTimeMs:2e4,timeoutRetry:{maxNumRetry:2,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:2,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},fragLoadPolicy:{default:{maxTimeToFirstByteMs:1e4,maxLoadTimeMs:12e4,timeoutRetry:{maxNumRetry:4,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:6,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},steeringManifestLoadPolicy:{default:{maxTimeToFirstByteMs:1e4,maxLoadTimeMs:2e4,timeoutRetry:{maxNumRetry:2,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:1,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},manifestLoadingTimeOut:1e4,manifestLoadingMaxRetry:1,manifestLoadingRetryDelay:1e3,manifestLoadingMaxRetryTimeout:64e3,levelLoadingTimeOut:1e4,levelLoadingMaxRetry:4,levelLoadingRetryDelay:1e3,levelLoadingMaxRetryTimeout:64e3,fragLoadingTimeOut:2e4,fragLoadingMaxRetry:6,fragLoadingRetryDelay:1e3,fragLoadingMaxRetryTimeout:64e3},np()),{},{subtitleStreamController:Lu,subtitleTrackController:Ru,timelineController:rh,audioStreamController:ku,audioTrackController:wu,emeController:Kt,cmcdController:Kh,contentSteeringController:qh});function np(){return{cueHandler:ep,enableWebVTT:!0,enableIMSC1:!0,enableCEA708Captions:!0,captionsTextTrack1Label:"English",captionsTextTrack1LanguageCode:"en",captionsTextTrack2Label:"Spanish",captionsTextTrack2LanguageCode:"es",captionsTextTrack3Label:"Unknown CC",captionsTextTrack3LanguageCode:"",captionsTextTrack4Label:"Unknown CC",captionsTextTrack4LanguageCode:"",renderTextTracksNatively:!0}}function ip(a,e){if((e.liveSyncDurationCount||e.liveMaxLatencyDurationCount)&&(e.liveSyncDuration||e.liveMaxLatencyDuration))throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");if(e.liveMaxLatencyDurationCount!==void 0&&(e.liveSyncDurationCount===void 0||e.liveMaxLatencyDurationCount<=e.liveSyncDurationCount))throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');if(e.liveMaxLatencyDuration!==void 0&&(e.liveSyncDuration===void 0||e.liveMaxLatencyDuration<=e.liveSyncDuration))throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');const t=zi(a),n=["manifest","level","frag"],i=["TimeOut","MaxRetry","RetryDelay","MaxRetryTimeout"];return n.forEach(r=>{const s=`${r==="level"?"playlist":r}LoadPolicy`,o=e[s]===void 0,l=[];i.forEach(d=>{const c=`${r}Loading${d}`,h=e[c];if(h!==void 0&&o){l.push(c);const u=t[s].default;switch(e[s]={default:u},d){case"TimeOut":u.maxLoadTimeMs=h,u.maxTimeToFirstByteMs=h;break;case"MaxRetry":u.errorRetry.maxNumRetry=h,u.timeoutRetry.maxNumRetry=h;break;case"RetryDelay":u.errorRetry.retryDelayMs=h,u.timeoutRetry.retryDelayMs=h;break;case"MaxRetryTimeout":u.errorRetry.maxRetryDelayMs=h,u.timeoutRetry.maxRetryDelayMs=h;break}}}),l.length&&D.warn(`hls.js config: "${l.join('", "')}" setting(s) are deprecated, use "${s}": ${JSON.stringify(e[s])}`)}),_e(_e({},t),e)}function zi(a){return a&&typeof a=="object"?Array.isArray(a)?a.map(zi):Object.keys(a).reduce((e,t)=>(e[t]=zi(a[t]),e),{}):a}function rp(a){const e=a.loader;e!==Ls&&e!==Ha?(D.log("[config]: Custom loader detected, cannot enable progressive streaming"),a.progressive=!1):Yh()&&(a.loader=Ls,a.progressive=!0,a.enableSoftwareAES=!0,D.log("[config]: Progressive streaming enabled, using FetchLoader"))}let Ri;class sp extends Zi{constructor(e,t){super(e,"[level-controller]"),this._levels=[],this._firstLevel=-1,this._maxAutoLevel=-1,this._startLevel=void 0,this.currentLevel=null,this.currentLevelIndex=-1,this.manualLevelIndex=-1,this.steering=void 0,this.onParsedComplete=void 0,this.steering=t,this._registerListeners()}_registerListeners(){const{hls:e}=this;e.on(v.MANIFEST_LOADING,this.onManifestLoading,this),e.on(v.MANIFEST_LOADED,this.onManifestLoaded,this),e.on(v.LEVEL_LOADED,this.onLevelLoaded,this),e.on(v.LEVELS_UPDATED,this.onLevelsUpdated,this),e.on(v.FRAG_BUFFERED,this.onFragBuffered,this),e.on(v.ERROR,this.onError,this)}_unregisterListeners(){const{hls:e}=this;e.off(v.MANIFEST_LOADING,this.onManifestLoading,this),e.off(v.MANIFEST_LOADED,this.onManifestLoaded,this),e.off(v.LEVEL_LOADED,this.onLevelLoaded,this),e.off(v.LEVELS_UPDATED,this.onLevelsUpdated,this),e.off(v.FRAG_BUFFERED,this.onFragBuffered,this),e.off(v.ERROR,this.onError,this)}destroy(){this._unregisterListeners(),this.steering=null,this.resetLevels(),super.destroy()}stopLoad(){this._levels.forEach(t=>{t.loadError=0,t.fragmentError=0}),super.stopLoad()}resetLevels(){this._startLevel=void 0,this.manualLevelIndex=-1,this.currentLevelIndex=-1,this.currentLevel=null,this._levels=[],this._maxAutoLevel=-1}onManifestLoading(e,t){this.resetLevels()}onManifestLoaded(e,t){const n=this.hls.config.preferManagedMediaSource,i=[],r={},s={};let o=!1,l=!1,d=!1;t.levels.forEach(c=>{var h,u;const m=c.attrs;let{audioCodec:A,videoCodec:f}=c;((h=A)==null?void 0:h.indexOf("mp4a.40.34"))!==-1&&(Ri||(Ri=/chrome|firefox/i.test(navigator.userAgent)),Ri&&(c.audioCodec=A=void 0)),A&&(c.audioCodec=A=Fn(A,n)),((u=f)==null?void 0:u.indexOf("avc1"))===0&&(f=c.videoCodec=zd(f));const{width:g,height:C,unknownCodecs:T}=c;if(o||(o=!!(g&&C)),l||(l=!!f),d||(d=!!A),T!=null&&T.length||A&&!mi(A,"audio",n)||f&&!mi(f,"video",n))return;const{CODECS:S,"FRAME-RATE":k,"HDCP-LEVEL":I,"PATHWAY-ID":P,RESOLUTION:_,"VIDEO-RANGE":N}=m,F=`${`${P||"."}-`}${c.bitrate}-${_}-${k}-${S}-${N}-${I}`;if(r[F])if(r[F].uri!==c.url&&!c.attrs["PATHWAY-ID"]){const $=s[F]+=1;c.attrs["PATHWAY-ID"]=new Array($+1).join(".");const H=new qt(c);r[F]=H,i.push(H)}else r[F].addGroupId("audio",m.AUDIO),r[F].addGroupId("text",m.SUBTITLES);else{const $=new qt(c);r[F]=$,s[F]=1,i.push($)}}),this.filterAndSortMediaOptions(i,t,o,l,d)}filterAndSortMediaOptions(e,t,n,i,r){let s=[],o=[],l=e;if((n||i)&&r&&(l=l.filter(({videoCodec:A,videoRange:f,width:g,height:C})=>(!!A||!!(g&&C))&&rc(f))),l.length===0){Promise.resolve().then(()=>{if(this.hls){t.levels.length&&this.warn(`One or more CODECS in variant not supported: ${JSON.stringify(t.levels[0].attrs)}`);const A=new Error("no level with compatible codecs found in manifest");this.hls.trigger(v.ERROR,{type:ie.MEDIA_ERROR,details:O.MANIFEST_INCOMPATIBLE_CODECS_ERROR,fatal:!0,url:t.url,error:A,reason:A.message})}});return}if(t.audioTracks){const{preferManagedMediaSource:A}=this.hls.config;s=t.audioTracks.filter(f=>!f.audioCodec||mi(f.audioCodec,"audio",A)),Is(s)}t.subtitles&&(o=t.subtitles,Is(o));const d=l.slice(0);l.sort((A,f)=>{if(A.attrs["HDCP-LEVEL"]!==f.attrs["HDCP-LEVEL"])return(A.attrs["HDCP-LEVEL"]||"")>(f.attrs["HDCP-LEVEL"]||"")?1:-1;if(n&&A.height!==f.height)return A.height-f.height;if(A.frameRate!==f.frameRate)return A.frameRate-f.frameRate;if(A.videoRange!==f.videoRange)return Mn.indexOf(A.videoRange)-Mn.indexOf(f.videoRange);if(A.videoCodec!==f.videoCodec){const g=Fr(A.videoCodec),C=Fr(f.videoCodec);if(g!==C)return C-g}if(A.uri===f.uri&&A.codecSet!==f.codecSet){const g=On(A.codecSet),C=On(f.codecSet);if(g!==C)return C-g}return A.averageBitrate!==f.averageBitrate?A.averageBitrate-f.averageBitrate:0});let c=d[0];if(this.steering&&(l=this.steering.filterParsedLevels(l),l.length!==d.length)){for(let A=0;A<d.length;A++)if(d[A].pathwayId===l[0].pathwayId){c=d[A];break}}this._levels=l;for(let A=0;A<l.length;A++)if(l[A]===c){var h;this._firstLevel=A;const f=c.bitrate,g=this.hls.bandwidthEstimate;if(this.log(`manifest loaded, ${l.length} level(s) found, first bitrate: ${f}`),((h=this.hls.userConfig)==null?void 0:h.abrEwmaDefaultEstimate)===void 0){const C=Math.min(f,this.hls.config.abrEwmaDefaultEstimateMax);C>g&&g===qa.abrEwmaDefaultEstimate&&(this.hls.bandwidthEstimate=C)}break}const u=r&&!i,m={levels:l,audioTracks:s,subtitleTracks:o,sessionData:t.sessionData,sessionKeys:t.sessionKeys,firstLevel:this._firstLevel,stats:t.stats,audio:r,video:i,altAudio:!u&&s.some(A=>!!A.url)};this.hls.trigger(v.MANIFEST_PARSED,m),(this.hls.config.autoStartLoad||this.hls.forceStartLoad)&&this.hls.startLoad(this.hls.config.startPosition)}get levels(){return this._levels.length===0?null:this._levels}get level(){return this.currentLevelIndex}set level(e){const t=this._levels;if(t.length===0)return;if(e<0||e>=t.length){const c=new Error("invalid level idx"),h=e<0;if(this.hls.trigger(v.ERROR,{type:ie.OTHER_ERROR,details:O.LEVEL_SWITCH_ERROR,level:e,fatal:h,error:c,reason:c.message}),h)return;e=Math.min(e,t.length-1)}const n=this.currentLevelIndex,i=this.currentLevel,r=i?i.attrs["PATHWAY-ID"]:void 0,s=t[e],o=s.attrs["PATHWAY-ID"];if(this.currentLevelIndex=e,this.currentLevel=s,n===e&&s.details&&i&&r===o)return;this.log(`Switching to level ${e} (${s.height?s.height+"p ":""}${s.videoRange?s.videoRange+" ":""}${s.codecSet?s.codecSet+" ":""}@${s.bitrate})${o?" with Pathway "+o:""} from level ${n}${r?" with Pathway "+r:""}`);const l={level:e,attrs:s.attrs,details:s.details,bitrate:s.bitrate,averageBitrate:s.averageBitrate,maxBitrate:s.maxBitrate,realBitrate:s.realBitrate,width:s.width,height:s.height,codecSet:s.codecSet,audioCodec:s.audioCodec,videoCodec:s.videoCodec,audioGroups:s.audioGroups,subtitleGroups:s.subtitleGroups,loaded:s.loaded,loadError:s.loadError,fragmentError:s.fragmentError,name:s.name,id:s.id,uri:s.uri,url:s.url,urlId:0,audioGroupIds:s.audioGroupIds,textGroupIds:s.textGroupIds};this.hls.trigger(v.LEVEL_SWITCHING,l);const d=s.details;if(!d||d.live){const c=this.switchParams(s.uri,i==null?void 0:i.details,d);this.loadPlaylist(c)}}get manualLevel(){return this.manualLevelIndex}set manualLevel(e){this.manualLevelIndex=e,this._startLevel===void 0&&(this._startLevel=e),e!==-1&&(this.level=e)}get firstLevel(){return this._firstLevel}set firstLevel(e){this._firstLevel=e}get startLevel(){if(this._startLevel===void 0){const e=this.hls.config.startLevel;return e!==void 0?e:this.hls.firstAutoLevel}return this._startLevel}set startLevel(e){this._startLevel=e}onError(e,t){t.fatal||!t.context||t.context.type===he.LEVEL&&t.context.level===this.level&&this.checkRetry(t)}onFragBuffered(e,{frag:t}){if(t!==void 0&&t.type===ne.MAIN){const n=t.elementaryStreams;if(!Object.keys(n).some(r=>!!n[r]))return;const i=this._levels[t.level];i!=null&&i.loadError&&(this.log(`Resetting level error count of ${i.loadError} on frag buffered`),i.loadError=0)}}onLevelLoaded(e,t){var n;const{level:i,details:r}=t,s=this._levels[i];if(!s){var o;this.warn(`Invalid level index ${i}`),(o=t.deliveryDirectives)!=null&&o.skip&&(r.deltaUpdateFailed=!0);return}i===this.currentLevelIndex?(s.fragmentError===0&&(s.loadError=0),this.playlistLoaded(i,t,s.details)):(n=t.deliveryDirectives)!=null&&n.skip&&(r.deltaUpdateFailed=!0)}loadPlaylist(e){super.loadPlaylist();const t=this.currentLevelIndex,n=this.currentLevel;if(n&&this.shouldLoadPlaylist(n)){let i=n.uri;if(e)try{i=e.addDirectives(i)}catch(s){this.warn(`Could not construct new URL with HLS Delivery Directives: ${s}`)}const r=n.attrs["PATHWAY-ID"];this.log(`Loading level index ${t}${(e==null?void 0:e.msn)!==void 0?" at sn "+e.msn+" part "+e.part:""} with${r?" Pathway "+r:""} ${i}`),this.clearTimer(),this.hls.trigger(v.LEVEL_LOADING,{url:i,level:t,pathwayId:n.attrs["PATHWAY-ID"],id:0,deliveryDirectives:e||null})}}get nextLoadLevel(){return this.manualLevelIndex!==-1?this.manualLevelIndex:this.hls.nextAutoLevel}set nextLoadLevel(e){this.level=e,this.manualLevelIndex===-1&&(this.hls.nextAutoLevel=e)}removeLevel(e){var t;const n=this._levels.filter((i,r)=>r!==e?!0:(this.steering&&this.steering.removeLevel(i),i===this.currentLevel&&(this.currentLevel=null,this.currentLevelIndex=-1,i.details&&i.details.fragments.forEach(s=>s.level=-1)),!1));aa(n),this._levels=n,this.currentLevelIndex>-1&&(t=this.currentLevel)!=null&&t.details&&(this.currentLevelIndex=this.currentLevel.details.fragments[0].level),this.hls.trigger(v.LEVELS_UPDATED,{levels:n})}onLevelsUpdated(e,{levels:t}){this._levels=t}checkMaxAutoUpdated(){const{autoLevelCapping:e,maxAutoLevel:t,maxHdcpLevel:n}=this.hls;this._maxAutoLevel!==t&&(this._maxAutoLevel=t,this.hls.trigger(v.MAX_AUTO_LEVEL_UPDATED,{autoLevelCapping:e,levels:this.levels,maxAutoLevel:t,minAutoLevel:this.hls.minAutoLevel,maxHdcpLevel:n}))}}function Is(a){const e={};a.forEach(t=>{const n=t.groupId||"";t.id=e[n]=e[n]||0,e[n]++})}class ap{constructor(e){this.config=void 0,this.keyUriToKeyInfo={},this.emeController=null,this.config=e}abort(e){for(const n in this.keyUriToKeyInfo){const i=this.keyUriToKeyInfo[n].loader;if(i){var t;if(e&&e!==((t=i.context)==null?void 0:t.frag.type))return;i.abort()}}}detach(){for(const e in this.keyUriToKeyInfo){const t=this.keyUriToKeyInfo[e];(t.mediaKeySessionContext||t.decryptdata.isCommonEncryption)&&delete this.keyUriToKeyInfo[e]}}destroy(){this.detach();for(const e in this.keyUriToKeyInfo){const t=this.keyUriToKeyInfo[e].loader;t&&t.destroy()}this.keyUriToKeyInfo={}}createKeyLoadError(e,t=O.KEY_LOAD_ERROR,n,i,r){return new ht({type:ie.NETWORK_ERROR,details:t,fatal:!1,frag:e,response:r,error:n,networkDetails:i})}loadClear(e,t){if(this.emeController&&this.config.emeEnabled){const{sn:n,cc:i}=e;for(let r=0;r<t.length;r++){const s=t[r];if(i<=s.cc&&(n==="initSegment"||s.sn==="initSegment"||n<s.sn)){this.emeController.selectKeySystemFormat(s).then(o=>{s.setKeyFormat(o)});break}}}}load(e){return!e.decryptdata&&e.encrypted&&this.emeController&&this.config.emeEnabled?this.emeController.selectKeySystemFormat(e).then(t=>this.loadInternal(e,t)):this.loadInternal(e)}loadInternal(e,t){var n,i;t&&e.setKeyFormat(t);const r=e.decryptdata;if(!r){const d=new Error(t?`Expected frag.decryptdata to be defined after setting format ${t}`:"Missing decryption data on fragment in onKeyLoading");return Promise.reject(this.createKeyLoadError(e,O.KEY_LOAD_ERROR,d))}const s=r.uri;if(!s)return Promise.reject(this.createKeyLoadError(e,O.KEY_LOAD_ERROR,new Error(`Invalid key URI: "${s}"`)));let o=this.keyUriToKeyInfo[s];if((n=o)!=null&&n.decryptdata.key)return r.key=o.decryptdata.key,Promise.resolve({frag:e,keyInfo:o});if((i=o)!=null&&i.keyLoadPromise){var l;switch((l=o.mediaKeySessionContext)==null?void 0:l.keyStatus){case void 0:case"status-pending":case"usable":case"usable-in-future":return o.keyLoadPromise.then(d=>(r.key=d.keyInfo.decryptdata.key,{frag:e,keyInfo:o}))}}switch(o=this.keyUriToKeyInfo[s]={decryptdata:r,keyLoadPromise:null,loader:null,mediaKeySessionContext:null},r.method){case"ISO-23001-7":case"SAMPLE-AES":case"SAMPLE-AES-CENC":case"SAMPLE-AES-CTR":return r.keyFormat==="identity"?this.loadKeyHTTP(o,e):this.loadKeyEME(o,e);case"AES-128":return this.loadKeyHTTP(o,e);default:return Promise.reject(this.createKeyLoadError(e,O.KEY_LOAD_ERROR,new Error(`Key supplied with unsupported METHOD: "${r.method}"`)))}}loadKeyEME(e,t){const n={frag:t,keyInfo:e};if(this.emeController&&this.config.emeEnabled){const i=this.emeController.loadKey(n);if(i)return(e.keyLoadPromise=i.then(r=>(e.mediaKeySessionContext=r,n))).catch(r=>{throw e.keyLoadPromise=null,r})}return Promise.resolve(n)}loadKeyHTTP(e,t){const n=this.config,i=n.loader,r=new i(n);return t.keyLoader=e.loader=r,e.keyLoadPromise=new Promise((s,o)=>{const l={keyInfo:e,frag:t,responseType:"arraybuffer",url:e.decryptdata.uri},d=n.keyLoadPolicy.default,c={loadPolicy:d,timeout:d.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0},h={onSuccess:(u,m,A,f)=>{const{frag:g,keyInfo:C,url:T}=A;if(!g.decryptdata||C!==this.keyUriToKeyInfo[T])return o(this.createKeyLoadError(g,O.KEY_LOAD_ERROR,new Error("after key load, decryptdata unset or changed"),f));C.decryptdata.key=g.decryptdata.key=new Uint8Array(u.data),g.keyLoader=null,C.loader=null,s({frag:g,keyInfo:C})},onError:(u,m,A,f)=>{this.resetLoader(m),o(this.createKeyLoadError(t,O.KEY_LOAD_ERROR,new Error(`HTTP Error ${u.code} loading key ${u.text}`),A,_e({url:l.url,data:void 0},u)))},onTimeout:(u,m,A)=>{this.resetLoader(m),o(this.createKeyLoadError(t,O.KEY_LOAD_TIMEOUT,new Error("key loading timed out"),A))},onAbort:(u,m,A)=>{this.resetLoader(m),o(this.createKeyLoadError(t,O.INTERNAL_ABORTED,new Error("key loading aborted"),A))}};r.load(l,c,h)})}resetLoader(e){const{frag:t,keyInfo:n,url:i}=e,r=n.loader;t.keyLoader===r&&(t.keyLoader=null,n.loader=null),delete this.keyUriToKeyInfo[i],r&&r.destroy()}}function za(){return self.SourceBuffer||self.WebKitSourceBuffer}function Ya(){if(!Dt())return!1;const e=za();return!e||e.prototype&&typeof e.prototype.appendBuffer=="function"&&typeof e.prototype.remove=="function"}function op(){if(!Ya())return!1;const a=Dt();return typeof(a==null?void 0:a.isTypeSupported)=="function"&&(["avc1.42E01E,mp4a.40.2","av01.0.01M.08","vp09.00.50.08"].some(e=>a.isTypeSupported(tn(e,"video")))||["mp4a.40.2","fLaC"].some(e=>a.isTypeSupported(tn(e,"audio"))))}function lp(){var a;const e=za();return typeof(e==null||(a=e.prototype)==null?void 0:a.changeType)=="function"}const dp=250,_n=2,cp=.1,up=.05;class hp{constructor(e,t,n,i){this.config=void 0,this.media=null,this.fragmentTracker=void 0,this.hls=void 0,this.nudgeRetry=0,this.stallReported=!1,this.stalled=null,this.moved=!1,this.seeking=!1,this.config=e,this.media=t,this.fragmentTracker=n,this.hls=i}destroy(){this.media=null,this.hls=this.fragmentTracker=null}poll(e,t){const{config:n,media:i,stalled:r}=this;if(i===null)return;const{currentTime:s,seeking:o}=i,l=this.seeking&&!o,d=!this.seeking&&o;if(this.seeking=o,s!==e){if(this.moved=!0,o||(this.nudgeRetry=0),r!==null){if(this.stallReported){const g=self.performance.now()-r;D.warn(`playback not stuck anymore @${s}, after ${Math.round(g)}ms`),this.stallReported=!1}this.stalled=null}return}if(d||l){this.stalled=null;return}if(i.paused&&!o||i.ended||i.playbackRate===0||!Ce.getBuffered(i).length){this.nudgeRetry=0;return}const c=Ce.bufferInfo(i,s,0),h=c.nextStart||0;if(o){const g=c.len>_n,C=!h||t&&t.start<=s||h-s>_n&&!this.fragmentTracker.getPartialFragment(s);if(g||C)return;this.moved=!1}if(!this.moved&&this.stalled!==null){var u;if(!(c.len>0)&&!h)return;const C=Math.max(h,c.start||0)-s,T=this.hls.levels?this.hls.levels[this.hls.currentLevel]:null,k=(T==null||(u=T.details)==null?void 0:u.live)?T.details.targetduration*2:_n,I=this.fragmentTracker.getPartialFragment(s);if(C>0&&(C<=k||I)){i.paused||this._trySkipBufferHole(I);return}}const m=self.performance.now();if(r===null){this.stalled=m;return}const A=m-r;if(!o&&A>=dp&&(this._reportStall(c),!this.media))return;const f=Ce.bufferInfo(i,s,n.maxBufferHole);this._tryFixBufferStall(f,A)}_tryFixBufferStall(e,t){const{config:n,fragmentTracker:i,media:r}=this;if(r===null)return;const s=r.currentTime,o=i.getPartialFragment(s);o&&(this._trySkipBufferHole(o)||!this.media)||(e.len>n.maxBufferHole||e.nextStart&&e.nextStart-s<n.maxBufferHole)&&t>n.highBufferWatchdogPeriod*1e3&&(D.warn("Trying to nudge playhead over buffer-hole"),this.stalled=null,this._tryNudgeBuffer())}_reportStall(e){const{hls:t,media:n,stallReported:i}=this;if(!i&&n){this.stallReported=!0;const r=new Error(`Playback stalling at @${n.currentTime} due to low buffer (${JSON.stringify(e)})`);D.warn(r.message),t.trigger(v.ERROR,{type:ie.MEDIA_ERROR,details:O.BUFFER_STALLED_ERROR,fatal:!1,error:r,buffer:e.len})}}_trySkipBufferHole(e){const{config:t,hls:n,media:i}=this;if(i===null)return 0;const r=i.currentTime,s=Ce.bufferInfo(i,r,0),o=r<s.start?s.start:s.nextStart;if(o){const l=s.len<=t.maxBufferHole,d=s.len>0&&s.len<1&&i.readyState<3,c=o-r;if(c>0&&(l||d)){if(c>t.maxBufferHole){const{fragmentTracker:u}=this;let m=!1;if(r===0){const A=u.getAppendedFrag(0,ne.MAIN);A&&o<A.end&&(m=!0)}if(!m){const A=e||u.getAppendedFrag(r,ne.MAIN);if(A){let f=!1,g=A.end;for(;g<o;){const C=u.getPartialFragment(g);if(C)g+=C.duration;else{f=!0;break}}if(f)return 0}}}const h=Math.max(o+up,r+cp);if(D.warn(`skipping hole, adjusting currentTime from ${r} to ${h}`),this.moved=!0,this.stalled=null,i.currentTime=h,e&&!e.gap){const u=new Error(`fragment loaded with buffer holes, seeking from ${r} to ${h}`);n.trigger(v.ERROR,{type:ie.MEDIA_ERROR,details:O.BUFFER_SEEK_OVER_HOLE,fatal:!1,error:u,reason:u.message,frag:e})}return h}}return 0}_tryNudgeBuffer(){const{config:e,hls:t,media:n,nudgeRetry:i}=this;if(n===null)return;const r=n.currentTime;if(this.nudgeRetry++,i<e.nudgeMaxRetry){const s=r+(i+1)*e.nudgeOffset,o=new Error(`Nudging 'currentTime' from ${r} to ${s}`);D.warn(o.message),n.currentTime=s,t.trigger(v.ERROR,{type:ie.MEDIA_ERROR,details:O.BUFFER_NUDGE_ON_STALL,error:o,fatal:!1})}else{const s=new Error(`Playhead still not moving while enough data buffered @${r} after ${e.nudgeMaxRetry} nudges`);D.error(s.message),t.trigger(v.ERROR,{type:ie.MEDIA_ERROR,details:O.BUFFER_STALLED_ERROR,error:s,fatal:!0})}}}const pp=100;class fp extends tr{constructor(e,t,n){super(e,t,n,"[stream-controller]",ne.MAIN),this.audioCodecSwap=!1,this.gapController=null,this.level=-1,this._forceStartLoad=!1,this.altAudio=!1,this.audioOnly=!1,this.fragPlaying=null,this.onvplaying=null,this.onvseeked=null,this.fragLastKbps=0,this.couldBacktrack=!1,this.backtrackFragment=null,this.audioCodecSwitch=!1,this.videoBuffer=null,this._registerListeners()}_registerListeners(){const{hls:e}=this;e.on(v.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(v.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(v.MANIFEST_LOADING,this.onManifestLoading,this),e.on(v.MANIFEST_PARSED,this.onManifestParsed,this),e.on(v.LEVEL_LOADING,this.onLevelLoading,this),e.on(v.LEVEL_LOADED,this.onLevelLoaded,this),e.on(v.FRAG_LOAD_EMERGENCY_ABORTED,this.onFragLoadEmergencyAborted,this),e.on(v.ERROR,this.onError,this),e.on(v.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.on(v.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),e.on(v.BUFFER_CREATED,this.onBufferCreated,this),e.on(v.BUFFER_FLUSHED,this.onBufferFlushed,this),e.on(v.LEVELS_UPDATED,this.onLevelsUpdated,this),e.on(v.FRAG_BUFFERED,this.onFragBuffered,this)}_unregisterListeners(){const{hls:e}=this;e.off(v.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(v.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(v.MANIFEST_LOADING,this.onManifestLoading,this),e.off(v.MANIFEST_PARSED,this.onManifestParsed,this),e.off(v.LEVEL_LOADED,this.onLevelLoaded,this),e.off(v.FRAG_LOAD_EMERGENCY_ABORTED,this.onFragLoadEmergencyAborted,this),e.off(v.ERROR,this.onError,this),e.off(v.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.off(v.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),e.off(v.BUFFER_CREATED,this.onBufferCreated,this),e.off(v.BUFFER_FLUSHED,this.onBufferFlushed,this),e.off(v.LEVELS_UPDATED,this.onLevelsUpdated,this),e.off(v.FRAG_BUFFERED,this.onFragBuffered,this)}onHandlerDestroying(){this._unregisterListeners(),super.onHandlerDestroying()}startLoad(e){if(this.levels){const{lastCurrentTime:t,hls:n}=this;if(this.stopLoad(),this.setInterval(pp),this.level=-1,!this.startFragRequested){let i=n.startLevel;i===-1&&(n.config.testBandwidth&&this.levels.length>1?(i=0,this.bitrateTest=!0):i=n.firstAutoLevel),n.nextLoadLevel=i,this.level=n.loadLevel,this.loadedmetadata=!1}t>0&&e===-1&&(this.log(`Override startPosition with lastCurrentTime @${t.toFixed(3)}`),e=t),this.state=G.IDLE,this.nextLoadPosition=this.startPosition=this.lastCurrentTime=e,this.tick()}else this._forceStartLoad=!0,this.state=G.STOPPED}stopLoad(){this._forceStartLoad=!1,super.stopLoad()}doTick(){switch(this.state){case G.WAITING_LEVEL:{const{levels:t,level:n}=this,i=t==null?void 0:t[n],r=i==null?void 0:i.details;if(r&&(!r.live||this.levelLastLoaded===i)){if(this.waitForCdnTuneIn(r))break;this.state=G.IDLE;break}else if(this.hls.nextLoadLevel!==this.level){this.state=G.IDLE;break}break}case G.FRAG_LOADING_WAITING_RETRY:{var e;const t=self.performance.now(),n=this.retryDate;if(!n||t>=n||(e=this.media)!=null&&e.seeking){const{levels:i,level:r}=this,s=i==null?void 0:i[r];this.resetStartWhenNotLoaded(s||null),this.state=G.IDLE}}break}this.state===G.IDLE&&this.doTickIdle(),this.onTickEnd()}onTickEnd(){super.onTickEnd(),this.checkBuffer(),this.checkFragmentChanged()}doTickIdle(){const{hls:e,levelLastLoaded:t,levels:n,media:i}=this;if(t===null||!i&&(this.startFragRequested||!e.config.startFragPrefetch)||this.altAudio&&this.audioOnly)return;const r=this.buffering?e.nextLoadLevel:e.loadLevel;if(!(n!=null&&n[r]))return;const s=n[r],o=this.getMainFwdBufferInfo();if(o===null)return;const l=this.getLevelDetails();if(l&&this._streamEnded(o,l)){const f={};this.altAudio&&(f.type="video"),this.hls.trigger(v.BUFFER_EOS,f),this.state=G.ENDED;return}if(!this.buffering)return;e.loadLevel!==r&&e.manualLevel===-1&&this.log(`Adapting to level ${r} from level ${this.level}`),this.level=e.nextLoadLevel=r;const d=s.details;if(!d||this.state===G.WAITING_LEVEL||d.live&&this.levelLastLoaded!==s){this.level=r,this.state=G.WAITING_LEVEL;return}const c=o.len,h=this.getMaxBufferLength(s.maxBitrate);if(c>=h)return;this.backtrackFragment&&this.backtrackFragment.start>o.end&&(this.backtrackFragment=null);const u=this.backtrackFragment?this.backtrackFragment.start:o.end;let m=this.getNextFragment(u,d);if(this.couldBacktrack&&!this.fragPrevious&&m&&m.sn!=="initSegment"&&this.fragmentTracker.getState(m)!==De.OK){var A;const g=((A=this.backtrackFragment)!=null?A:m).sn-d.startSN,C=d.fragments[g-1];C&&m.cc===C.cc&&(m=C,this.fragmentTracker.removeFragment(C))}else this.backtrackFragment&&o.len&&(this.backtrackFragment=null);if(m&&this.isLoopLoading(m,u)){if(!m.gap){const g=this.audioOnly&&!this.altAudio?be.AUDIO:be.VIDEO,C=(g===be.VIDEO?this.videoBuffer:this.mediaBuffer)||this.media;C&&this.afterBufferFlushed(C,g,ne.MAIN)}m=this.getNextFragmentLoopLoading(m,d,o,ne.MAIN,h)}m&&(m.initSegment&&!m.initSegment.data&&!this.bitrateTest&&(m=m.initSegment),this.loadFragment(m,s,u))}loadFragment(e,t,n){const i=this.fragmentTracker.getState(e);this.fragCurrent=e,i===De.NOT_LOADED||i===De.PARTIAL?e.sn==="initSegment"?this._loadInitSegment(e,t):this.bitrateTest?(this.log(`Fragment ${e.sn} of level ${e.level} is being downloaded to test bitrate and will not be buffered`),this._loadBitrateTestFrag(e,t)):(this.startFragRequested=!0,super.loadFragment(e,t,n)):this.clearTrackerIfNeeded(e)}getBufferedFrag(e){return this.fragmentTracker.getBufferedFrag(e,ne.MAIN)}followingBufferedFrag(e){return e?this.getBufferedFrag(e.end+.5):null}immediateLevelSwitch(){this.abortCurrentFrag(),this.flushMainBuffer(0,Number.POSITIVE_INFINITY)}nextLevelSwitch(){const{levels:e,media:t}=this;if(t!=null&&t.readyState){let n;const i=this.getAppendedFrag(t.currentTime);i&&i.start>1&&this.flushMainBuffer(0,i.start-1);const r=this.getLevelDetails();if(r!=null&&r.live){const o=this.getMainFwdBufferInfo();if(!o||o.len<r.targetduration*2)return}if(!t.paused&&e){const o=this.hls.nextLoadLevel,l=e[o],d=this.fragLastKbps;d&&this.fragCurrent?n=this.fragCurrent.duration*l.maxBitrate/(1e3*d)+1:n=0}else n=0;const s=this.getBufferedFrag(t.currentTime+n);if(s){const o=this.followingBufferedFrag(s);if(o){this.abortCurrentFrag();const l=o.maxStartPTS?o.maxStartPTS:o.start,d=o.duration,c=Math.max(s.end,l+Math.min(Math.max(d-this.config.maxFragLookUpTolerance,d*(this.couldBacktrack?.5:.125)),d*(this.couldBacktrack?.75:.25)));this.flushMainBuffer(c,Number.POSITIVE_INFINITY)}}}}abortCurrentFrag(){const e=this.fragCurrent;switch(this.fragCurrent=null,this.backtrackFragment=null,e&&(e.abortRequests(),this.fragmentTracker.removeFragment(e)),this.state){case G.KEY_LOADING:case G.FRAG_LOADING:case G.FRAG_LOADING_WAITING_RETRY:case G.PARSING:case G.PARSED:this.state=G.IDLE;break}this.nextLoadPosition=this.getLoadPosition()}flushMainBuffer(e,t){super.flushMainBuffer(e,t,this.altAudio?"video":null)}onMediaAttached(e,t){super.onMediaAttached(e,t);const n=t.media;this.onvplaying=this.onMediaPlaying.bind(this),this.onvseeked=this.onMediaSeeked.bind(this),n.addEventListener("playing",this.onvplaying),n.addEventListener("seeked",this.onvseeked),this.gapController=new hp(this.config,n,this.fragmentTracker,this.hls)}onMediaDetaching(){const{media:e}=this;e&&this.onvplaying&&this.onvseeked&&(e.removeEventListener("playing",this.onvplaying),e.removeEventListener("seeked",this.onvseeked),this.onvplaying=this.onvseeked=null,this.videoBuffer=null),this.fragPlaying=null,this.gapController&&(this.gapController.destroy(),this.gapController=null),super.onMediaDetaching()}onMediaPlaying(){this.tick()}onMediaSeeked(){const e=this.media,t=e?e.currentTime:null;X(t)&&this.log(`Media seeked to ${t.toFixed(3)}`);const n=this.getMainFwdBufferInfo();if(n===null||n.len===0){this.warn(`Main forward buffer length on "seeked" event ${n?n.len:"empty"})`);return}this.tick()}onManifestLoading(){this.log("Trigger BUFFER_RESET"),this.hls.trigger(v.BUFFER_RESET,void 0),this.fragmentTracker.removeAllFragments(),this.couldBacktrack=!1,this.startPosition=this.lastCurrentTime=this.fragLastKbps=0,this.levels=this.fragPlaying=this.backtrackFragment=this.levelLastLoaded=null,this.altAudio=this.audioOnly=this.startFragRequested=!1}onManifestParsed(e,t){let n=!1,i=!1;t.levels.forEach(r=>{const s=r.audioCodec;s&&(n=n||s.indexOf("mp4a.40.2")!==-1,i=i||s.indexOf("mp4a.40.5")!==-1)}),this.audioCodecSwitch=n&&i&&!lp(),this.audioCodecSwitch&&this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),this.levels=t.levels,this.startFragRequested=!1}onLevelLoading(e,t){const{levels:n}=this;if(!n||this.state!==G.IDLE)return;const i=n[t.level];(!i.details||i.details.live&&this.levelLastLoaded!==i||this.waitForCdnTuneIn(i.details))&&(this.state=G.WAITING_LEVEL)}onLevelLoaded(e,t){var n;const{levels:i}=this,r=t.level,s=t.details,o=s.totalduration;if(!i){this.warn(`Levels were reset while loading level ${r}`);return}this.log(`Level ${r} loaded [${s.startSN},${s.endSN}]${s.lastPartSn?`[part-${s.lastPartSn}-${s.lastPartIndex}]`:""}, cc [${s.startCC}, ${s.endCC}] duration:${o}`);const l=i[r],d=this.fragCurrent;d&&(this.state===G.FRAG_LOADING||this.state===G.FRAG_LOADING_WAITING_RETRY)&&d.level!==t.level&&d.loader&&this.abortCurrentFrag();let c=0;if(s.live||(n=l.details)!=null&&n.live){var h;if(this.checkLiveUpdate(s),s.deltaUpdateFailed)return;c=this.alignPlaylists(s,l.details,(h=this.levelLastLoaded)==null?void 0:h.details)}if(l.details=s,this.levelLastLoaded=l,this.hls.trigger(v.LEVEL_UPDATED,{details:s,level:r}),this.state===G.WAITING_LEVEL){if(this.waitForCdnTuneIn(s))return;this.state=G.IDLE}this.startFragRequested?s.live&&this.synchronizeToLiveEdge(s):this.setStartPosition(s,c),this.tick()}_handleFragmentLoadProgress(e){var t;const{frag:n,part:i,payload:r}=e,{levels:s}=this;if(!s){this.warn(`Levels were reset while fragment load was in progress. Fragment ${n.sn} of level ${n.level} will not be buffered`);return}const o=s[n.level],l=o.details;if(!l){this.warn(`Dropping fragment ${n.sn} of level ${n.level} after level details were reset`),this.fragmentTracker.removeFragment(n);return}const d=o.videoCodec,c=l.PTSKnown||!l.live,h=(t=n.initSegment)==null?void 0:t.data,u=this._getAudioCodec(o),m=this.transmuxer=this.transmuxer||new ka(this.hls,ne.MAIN,this._handleTransmuxComplete.bind(this),this._handleTransmuxerFlush.bind(this)),A=i?i.index:-1,f=A!==-1,g=new Ji(n.level,n.sn,n.stats.chunkCount,r.byteLength,A,f),C=this.initPTS[n.cc];m.push(r,h,u,d,n,i,l.totalduration,c,g,C)}onAudioTrackSwitching(e,t){const n=this.altAudio;if(!!!t.url){if(this.mediaBuffer!==this.media){this.log("Switching on main audio, use media.buffered to schedule main fragment loading"),this.mediaBuffer=this.media;const s=this.fragCurrent;s&&(this.log("Switching to main audio track, cancel main fragment load"),s.abortRequests(),this.fragmentTracker.removeFragment(s)),this.resetTransmuxer(),this.resetLoadingState()}else this.audioOnly&&this.resetTransmuxer();const r=this.hls;n&&(r.trigger(v.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:null}),this.fragmentTracker.removeAllFragments()),r.trigger(v.AUDIO_TRACK_SWITCHED,t)}}onAudioTrackSwitched(e,t){const n=t.id,i=!!this.hls.audioTracks[n].url;if(i){const r=this.videoBuffer;r&&this.mediaBuffer!==r&&(this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"),this.mediaBuffer=r)}this.altAudio=i,this.tick()}onBufferCreated(e,t){const n=t.tracks;let i,r,s=!1;for(const o in n){const l=n[o];if(l.id==="main"){if(r=o,i=l,o==="video"){const d=n[o];d&&(this.videoBuffer=d.buffer)}}else s=!0}s&&i?(this.log(`Alternate track found, use ${r}.buffered to schedule main fragment loading`),this.mediaBuffer=i.buffer):this.mediaBuffer=this.media}onFragBuffered(e,t){const{frag:n,part:i}=t;if(n&&n.type!==ne.MAIN)return;if(this.fragContextChanged(n)){this.warn(`Fragment ${n.sn}${i?" p: "+i.index:""} of level ${n.level} finished buffering, but was aborted. state: ${this.state}`),this.state===G.PARSED&&(this.state=G.IDLE);return}const r=i?i.stats:n.stats;this.fragLastKbps=Math.round(8*r.total/(r.buffering.end-r.loading.first)),n.sn!=="initSegment"&&(this.fragPrevious=n),this.fragBufferedComplete(n,i)}onError(e,t){var n;if(t.fatal){this.state=G.ERROR;return}switch(t.details){case O.FRAG_GAP:case O.FRAG_PARSING_ERROR:case O.FRAG_DECRYPT_ERROR:case O.FRAG_LOAD_ERROR:case O.FRAG_LOAD_TIMEOUT:case O.KEY_LOAD_ERROR:case O.KEY_LOAD_TIMEOUT:this.onFragmentOrKeyLoadError(ne.MAIN,t);break;case O.LEVEL_LOAD_ERROR:case O.LEVEL_LOAD_TIMEOUT:case O.LEVEL_PARSING_ERROR:!t.levelRetry&&this.state===G.WAITING_LEVEL&&((n=t.context)==null?void 0:n.type)===he.LEVEL&&(this.state=G.IDLE);break;case O.BUFFER_APPEND_ERROR:case O.BUFFER_FULL_ERROR:if(!t.parent||t.parent!=="main")return;if(t.details===O.BUFFER_APPEND_ERROR){this.resetLoadingState();return}this.reduceLengthAndFlushBuffer(t)&&this.flushMainBuffer(0,Number.POSITIVE_INFINITY);break;case O.INTERNAL_EXCEPTION:this.recoverWorkerError(t);break}}checkBuffer(){const{media:e,gapController:t}=this;if(!(!e||!t||!e.readyState)){if(this.loadedmetadata||!Ce.getBuffered(e).length){const n=this.state!==G.IDLE?this.fragCurrent:null;t.poll(this.lastCurrentTime,n)}this.lastCurrentTime=e.currentTime}}onFragLoadEmergencyAborted(){this.state=G.IDLE,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.tickImmediate()}onBufferFlushed(e,{type:t}){if(t!==be.AUDIO||this.audioOnly&&!this.altAudio){const n=(t===be.VIDEO?this.videoBuffer:this.mediaBuffer)||this.media;this.afterBufferFlushed(n,t,ne.MAIN),this.tick()}}onLevelsUpdated(e,t){this.level>-1&&this.fragCurrent&&(this.level=this.fragCurrent.level),this.levels=t.levels}swapAudioCodec(){this.audioCodecSwap=!this.audioCodecSwap}seekToStartPos(){const{media:e}=this;if(!e)return;const t=e.currentTime;let n=this.startPosition;if(n>=0&&t<n){if(e.seeking){this.log(`could not seek to ${n}, already seeking at ${t}`);return}const i=Ce.getBuffered(e),s=(i.length?i.start(0):0)-n;s>0&&(s<this.config.maxBufferHole||s<this.config.maxFragLookUpTolerance)&&(this.log(`adjusting start position by ${s} to match buffer start`),n+=s,this.startPosition=n),this.log(`seek to target start position ${n} from current time ${t}`),e.currentTime=n}}_getAudioCodec(e){let t=this.config.defaultAudioCodec||e.audioCodec;return this.audioCodecSwap&&t&&(this.log("Swapping audio codec"),t.indexOf("mp4a.40.5")!==-1?t="mp4a.40.2":t="mp4a.40.5"),t}_loadBitrateTestFrag(e,t){e.bitrateTest=!0,this._doFragLoad(e,t).then(n=>{const{hls:i}=this;if(!n||this.fragContextChanged(e))return;t.fragmentError=0,this.state=G.IDLE,this.startFragRequested=!1,this.bitrateTest=!1;const r=e.stats;r.parsing.start=r.parsing.end=r.buffering.start=r.buffering.end=self.performance.now(),i.trigger(v.FRAG_LOADED,n),e.bitrateTest=!1})}_handleTransmuxComplete(e){var t;const n="main",{hls:i}=this,{remuxResult:r,chunkMeta:s}=e,o=this.getCurrentContext(s);if(!o){this.resetWhenMissingContext(s);return}const{frag:l,part:d,level:c}=o,{video:h,text:u,id3:m,initSegment:A}=r,{details:f}=c,g=this.altAudio?void 0:r.audio;if(this.fragContextChanged(l)){this.fragmentTracker.removeFragment(l);return}if(this.state=G.PARSING,A){if(A!=null&&A.tracks){const S=l.initSegment||l;this._bufferInitSegment(c,A.tracks,S,s),i.trigger(v.FRAG_PARSING_INIT_SEGMENT,{frag:S,id:n,tracks:A.tracks})}const C=A.initPTS,T=A.timescale;X(C)&&(this.initPTS[l.cc]={baseTime:C,timescale:T},i.trigger(v.INIT_PTS_FOUND,{frag:l,id:n,initPTS:C,timescale:T}))}if(h&&f&&l.sn!=="initSegment"){const C=f.fragments[l.sn-1-f.startSN],T=l.sn===f.startSN,S=!C||l.cc>C.cc;if(r.independent!==!1){const{startPTS:k,endPTS:I,startDTS:P,endDTS:_}=h;if(d)d.elementaryStreams[h.type]={startPTS:k,endPTS:I,startDTS:P,endDTS:_};else if(h.firstKeyFrame&&h.independent&&s.id===1&&!S&&(this.couldBacktrack=!0),h.dropped&&h.independent){const N=this.getMainFwdBufferInfo(),U=(N?N.end:this.getLoadPosition())+this.config.maxBufferHole,F=h.firstKeyFramePTS?h.firstKeyFramePTS:k;if(!T&&U<F-this.config.maxBufferHole&&!S){this.backtrack(l);return}else S&&(l.gap=!0);l.setElementaryStreamInfo(h.type,l.start,I,l.start,_,!0)}else T&&k>_n&&(l.gap=!0);l.setElementaryStreamInfo(h.type,k,I,P,_),this.backtrackFragment&&(this.backtrackFragment=l),this.bufferFragmentData(h,l,d,s,T||S)}else if(T||S)l.gap=!0;else{this.backtrack(l);return}}if(g){const{startPTS:C,endPTS:T,startDTS:S,endDTS:k}=g;d&&(d.elementaryStreams[be.AUDIO]={startPTS:C,endPTS:T,startDTS:S,endDTS:k}),l.setElementaryStreamInfo(be.AUDIO,C,T,S,k),this.bufferFragmentData(g,l,d,s)}if(f&&m!=null&&(t=m.samples)!=null&&t.length){const C={id:n,frag:l,details:f,samples:m.samples};i.trigger(v.FRAG_PARSING_METADATA,C)}if(f&&u){const C={id:n,frag:l,details:f,samples:u.samples};i.trigger(v.FRAG_PARSING_USERDATA,C)}}_bufferInitSegment(e,t,n,i){if(this.state!==G.PARSING)return;this.audioOnly=!!t.audio&&!t.video,this.altAudio&&!this.audioOnly&&delete t.audio;const{audio:r,video:s,audiovideo:o}=t;if(r){let l=e.audioCodec;const d=navigator.userAgent.toLowerCase();if(this.audioCodecSwitch){l&&(l.indexOf("mp4a.40.5")!==-1?l="mp4a.40.2":l="mp4a.40.5");const c=r.metadata;c&&"channelCount"in c&&(c.channelCount||1)!==1&&d.indexOf("firefox")===-1&&(l="mp4a.40.5")}l&&l.indexOf("mp4a.40.5")!==-1&&d.indexOf("android")!==-1&&r.container!=="audio/mpeg"&&(l="mp4a.40.2",this.log(`Android: force audio codec to ${l}`)),e.audioCodec&&e.audioCodec!==l&&this.log(`Swapping manifest audio codec "${e.audioCodec}" for "${l}"`),r.levelCodec=l,r.id="main",this.log(`Init audio buffer, container:${r.container}, codecs[selected/level/parsed]=[${l||""}/${e.audioCodec||""}/${r.codec}]`)}s&&(s.levelCodec=e.videoCodec,s.id="main",this.log(`Init video buffer, container:${s.container}, codecs[level/parsed]=[${e.videoCodec||""}/${s.codec}]`)),o&&this.log(`Init audiovideo buffer, container:${o.container}, codecs[level/parsed]=[${e.codecs}/${o.codec}]`),this.hls.trigger(v.BUFFER_CODECS,t),Object.keys(t).forEach(l=>{const c=t[l].initSegment;c!=null&&c.byteLength&&this.hls.trigger(v.BUFFER_APPENDING,{type:l,data:c,frag:n,part:null,chunkMeta:i,parent:n.type})}),this.tickImmediate()}getMainFwdBufferInfo(){return this.getFwdBufferInfo(this.mediaBuffer?this.mediaBuffer:this.media,ne.MAIN)}backtrack(e){this.couldBacktrack=!0,this.backtrackFragment=e,this.resetTransmuxer(),this.flushBufferGap(e),this.fragmentTracker.removeFragment(e),this.fragPrevious=null,this.nextLoadPosition=e.start,this.state=G.IDLE}checkFragmentChanged(){const e=this.media;let t=null;if(e&&e.readyState>1&&e.seeking===!1){const n=e.currentTime;if(Ce.isBuffered(e,n)?t=this.getAppendedFrag(n):Ce.isBuffered(e,n+.1)&&(t=this.getAppendedFrag(n+.1)),t){this.backtrackFragment=null;const i=this.fragPlaying,r=t.level;(!i||t.sn!==i.sn||i.level!==r)&&(this.fragPlaying=t,this.hls.trigger(v.FRAG_CHANGED,{frag:t}),(!i||i.level!==r)&&this.hls.trigger(v.LEVEL_SWITCHED,{level:r}))}}}get nextLevel(){const e=this.nextBufferedFrag;return e?e.level:-1}get currentFrag(){const e=this.media;return e?this.fragPlaying||this.getAppendedFrag(e.currentTime):null}get currentProgramDateTime(){const e=this.media;if(e){const t=e.currentTime,n=this.currentFrag;if(n&&X(t)&&X(n.programDateTime)){const i=n.programDateTime+(t-n.start)*1e3;return new Date(i)}}return null}get currentLevel(){const e=this.currentFrag;return e?e.level:-1}get nextBufferedFrag(){const e=this.currentFrag;return e?this.followingBufferedFrag(e):null}get forceStartLoad(){return this._forceStartLoad}}class Et{static get version(){return"1.5.19"}static isMSESupported(){return Ya()}static isSupported(){return op()}static getMediaSource(){return Dt()}static get Events(){return v}static get ErrorTypes(){return ie}static get ErrorDetails(){return O}static get DefaultConfig(){return Et.defaultConfig?Et.defaultConfig:qa}static set DefaultConfig(e){Et.defaultConfig=e}constructor(e={}){this.config=void 0,this.userConfig=void 0,this.coreComponents=void 0,this.networkControllers=void 0,this.started=!1,this._emitter=new ar,this._autoLevelCapping=-1,this._maxHdcpLevel=null,this.abrController=void 0,this.bufferController=void 0,this.capLevelController=void 0,this.latencyController=void 0,this.levelController=void 0,this.streamController=void 0,this.audioTrackController=void 0,this.subtitleTrackController=void 0,this.emeController=void 0,this.cmcdController=void 0,this._media=null,this.url=null,this.triggeringException=void 0,nd(e.debug||!1,"Hls instance");const t=this.config=ip(Et.DefaultConfig,e);this.userConfig=e,t.progressive&&rp(t);const{abrController:n,bufferController:i,capLevelController:r,errorController:s,fpsController:o}=t,l=new s(this),d=this.abrController=new n(this),c=this.bufferController=new i(this),h=this.capLevelController=new r(this),u=new o(this),m=new Qd(this),A=new tc(this),f=t.contentSteeringController,g=f?new f(this):null,C=this.levelController=new sp(this,g),T=new Rc(this),S=new ap(this.config),k=this.streamController=new fp(this,T,S);h.setStreamController(k),u.setStreamController(k);const I=[m,C,k];g&&I.splice(1,0,g),this.networkControllers=I;const P=[d,c,h,u,A,T];this.audioTrackController=this.createController(t.audioTrackController,I);const _=t.audioStreamController;_&&I.push(new _(this,T,S)),this.subtitleTrackController=this.createController(t.subtitleTrackController,I);const N=t.subtitleStreamController;N&&I.push(new N(this,T,S)),this.createController(t.timelineController,P),S.emeController=this.emeController=this.createController(t.emeController,P),this.cmcdController=this.createController(t.cmcdController,P),this.latencyController=this.createController(nc,P),this.coreComponents=P,I.push(l);const U=l.onErrorOut;typeof U=="function"&&this.on(v.ERROR,U,l)}createController(e,t){if(e){const n=new e(this);return t&&t.push(n),n}return null}on(e,t,n=this){this._emitter.on(e,t,n)}once(e,t,n=this){this._emitter.once(e,t,n)}removeAllListeners(e){this._emitter.removeAllListeners(e)}off(e,t,n=this,i){this._emitter.off(e,t,n,i)}listeners(e){return this._emitter.listeners(e)}emit(e,t,n){return this._emitter.emit(e,t,n)}trigger(e,t){if(this.config.debug)return this.emit(e,e,t);try{return this.emit(e,e,t)}catch(n){if(D.error("An internal error happened while handling event "+e+'. Error message: "'+n.message+'". Here is a stacktrace:',n),!this.triggeringException){this.triggeringException=!0;const i=e===v.ERROR;this.trigger(v.ERROR,{type:ie.OTHER_ERROR,details:O.INTERNAL_EXCEPTION,fatal:i,event:e,error:n}),this.triggeringException=!1}}return!1}listenerCount(e){return this._emitter.listenerCount(e)}destroy(){D.log("destroy"),this.trigger(v.DESTROYING,void 0),this.detachMedia(),this.removeAllListeners(),this._autoLevelCapping=-1,this.url=null,this.networkControllers.forEach(t=>t.destroy()),this.networkControllers.length=0,this.coreComponents.forEach(t=>t.destroy()),this.coreComponents.length=0;const e=this.config;e.xhrSetup=e.fetchSetup=void 0,this.userConfig=null}attachMedia(e){D.log("attachMedia"),this._media=e,this.trigger(v.MEDIA_ATTACHING,{media:e})}detachMedia(){D.log("detachMedia"),this.trigger(v.MEDIA_DETACHING,void 0),this._media=null}loadSource(e){this.stopLoad();const t=this.media,n=this.url,i=this.url=Vi.buildAbsoluteURL(self.location.href,e,{alwaysNormalize:!0});this._autoLevelCapping=-1,this._maxHdcpLevel=null,D.log(`loadSource:${i}`),t&&n&&(n!==i||this.bufferController.hasSourceTypes())&&(this.detachMedia(),this.attachMedia(t)),this.trigger(v.MANIFEST_LOADING,{url:e})}startLoad(e=-1){D.log(`startLoad(${e})`),this.started=!0,this.resumeBuffering();for(let t=0;t<this.networkControllers.length&&(this.networkControllers[t].startLoad(e),!(!this.started||!this.networkControllers));t++);}stopLoad(){D.log("stopLoad"),this.started=!1;for(let e=0;e<this.networkControllers.length&&(this.networkControllers[e].stopLoad(),!(this.started||!this.networkControllers));e++);}resumeBuffering(){D.log("resume buffering"),this.networkControllers.forEach(e=>{e.resumeBuffering&&e.resumeBuffering()})}pauseBuffering(){D.log("pause buffering"),this.networkControllers.forEach(e=>{e.pauseBuffering&&e.pauseBuffering()})}swapAudioCodec(){D.log("swapAudioCodec"),this.streamController.swapAudioCodec()}recoverMediaError(){D.log("recoverMediaError");const e=this._media;this.detachMedia(),e&&this.attachMedia(e)}removeLevel(e){this.levelController.removeLevel(e)}get levels(){const e=this.levelController.levels;return e||[]}get currentLevel(){return this.streamController.currentLevel}set currentLevel(e){D.log(`set currentLevel:${e}`),this.levelController.manualLevel=e,this.streamController.immediateLevelSwitch()}get nextLevel(){return this.streamController.nextLevel}set nextLevel(e){D.log(`set nextLevel:${e}`),this.levelController.manualLevel=e,this.streamController.nextLevelSwitch()}get loadLevel(){return this.levelController.level}set loadLevel(e){D.log(`set loadLevel:${e}`),this.levelController.manualLevel=e}get nextLoadLevel(){return this.levelController.nextLoadLevel}set nextLoadLevel(e){this.levelController.nextLoadLevel=e}get firstLevel(){return Math.max(this.levelController.firstLevel,this.minAutoLevel)}set firstLevel(e){D.log(`set firstLevel:${e}`),this.levelController.firstLevel=e}get startLevel(){const e=this.levelController.startLevel;return e===-1&&this.abrController.forcedAutoLevel>-1?this.abrController.forcedAutoLevel:e}set startLevel(e){D.log(`set startLevel:${e}`),e!==-1&&(e=Math.max(e,this.minAutoLevel)),this.levelController.startLevel=e}get capLevelToPlayerSize(){return this.config.capLevelToPlayerSize}set capLevelToPlayerSize(e){const t=!!e;t!==this.config.capLevelToPlayerSize&&(t?this.capLevelController.startCapping():(this.capLevelController.stopCapping(),this.autoLevelCapping=-1,this.streamController.nextLevelSwitch()),this.config.capLevelToPlayerSize=t)}get autoLevelCapping(){return this._autoLevelCapping}get bandwidthEstimate(){const{bwEstimator:e}=this.abrController;return e?e.getEstimate():NaN}set bandwidthEstimate(e){this.abrController.resetEstimator(e)}get ttfbEstimate(){const{bwEstimator:e}=this.abrController;return e?e.getEstimateTTFB():NaN}set autoLevelCapping(e){this._autoLevelCapping!==e&&(D.log(`set autoLevelCapping:${e}`),this._autoLevelCapping=e,this.levelController.checkMaxAutoUpdated())}get maxHdcpLevel(){return this._maxHdcpLevel}set maxHdcpLevel(e){ic(e)&&this._maxHdcpLevel!==e&&(this._maxHdcpLevel=e,this.levelController.checkMaxAutoUpdated())}get autoLevelEnabled(){return this.levelController.manualLevel===-1}get manualLevel(){return this.levelController.manualLevel}get minAutoLevel(){const{levels:e,config:{minAutoBitrate:t}}=this;if(!e)return 0;const n=e.length;for(let i=0;i<n;i++)if(e[i].maxBitrate>=t)return i;return 0}get maxAutoLevel(){const{levels:e,autoLevelCapping:t,maxHdcpLevel:n}=this;let i;if(t===-1&&e!=null&&e.length?i=e.length-1:i=t,n)for(let r=i;r--;){const s=e[r].attrs["HDCP-LEVEL"];if(s&&s<=n)return r}return i}get firstAutoLevel(){return this.abrController.firstAutoLevel}get nextAutoLevel(){return this.abrController.nextAutoLevel}set nextAutoLevel(e){this.abrController.nextAutoLevel=e}get playingDate(){return this.streamController.currentProgramDateTime}get mainForwardBufferInfo(){return this.streamController.getMainFwdBufferInfo()}setAudioOption(e){var t;return(t=this.audioTrackController)==null?void 0:t.setAudioOption(e)}setSubtitleOption(e){var t;return(t=this.subtitleTrackController)==null||t.setSubtitleOption(e),null}get allAudioTracks(){const e=this.audioTrackController;return e?e.allAudioTracks:[]}get audioTracks(){const e=this.audioTrackController;return e?e.audioTracks:[]}get audioTrack(){const e=this.audioTrackController;return e?e.audioTrack:-1}set audioTrack(e){const t=this.audioTrackController;t&&(t.audioTrack=e)}get allSubtitleTracks(){const e=this.subtitleTrackController;return e?e.allSubtitleTracks:[]}get subtitleTracks(){const e=this.subtitleTrackController;return e?e.subtitleTracks:[]}get subtitleTrack(){const e=this.subtitleTrackController;return e?e.subtitleTrack:-1}get media(){return this._media}set subtitleTrack(e){const t=this.subtitleTrackController;t&&(t.subtitleTrack=e)}get subtitleDisplay(){const e=this.subtitleTrackController;return e?e.subtitleDisplay:!1}set subtitleDisplay(e){const t=this.subtitleTrackController;t&&(t.subtitleDisplay=e)}get lowLatencyMode(){return this.config.lowLatencyMode}set lowLatencyMode(e){this.config.lowLatencyMode=e}get liveSyncPosition(){return this.latencyController.liveSyncPosition}get latency(){return this.latencyController.latency}get maxLatency(){return this.latencyController.maxLatency}get targetLatency(){return this.latencyController.targetLatency}get drift(){return this.latencyController.drift}get forceStartLoad(){return this.streamController.forceStartLoad}}Et.defaultConfig=void 0;const mp={style:{width:"100%"}},Ap={key:0},gp="/dev-api/video/m3u8/",yp=Yi({__name:"dpPlayer",props:{videoList:Array},setup(a){const e=a,t=oe(null),n=oe(),i=oe([]),r=oe(),s=l=>{if(i.value.length>l){if(n.value=i.value[l],n.value.isReady==0){Je.warning("视频尚未准备就绪，请稍候重试");return}r.value&&r.value.switchVideo({url:gp+n.value.filename+".m3u8",type:"customHls",customType:{customHls:(d,c)=>{const h=new Et;h.loadSource(d.src),h.attachMedia(d)}}})}},o=()=>{r.value=new Vl({container:t.value,autoplay:!1,theme:"#FADFA3",loop:!1,lang:"zh-cn",hotkey:!0,preload:"auto",volume:.5,mutex:!0,video:{url:"",type:"customHls",customType:{customHls:(l,d)=>{const c=new Et;c.loadSource(l.src),c.attachMedia(l)}}}}),r.value&&s(0)};return Ds(()=>{i.value=e.videoList,n.value=i.value[0]}),_s(()=>{o()}),(l,d)=>{const c=Bs,h=Ps,u=Os;return ce(),ue("div",mp,[ge(u,null,{default:xe(()=>[ge(c,{span:20},{default:xe(()=>[n.value?(ce(),ue("div",Ap,[Le("div",{ref_key:"playVideoRef",ref:t,class:"play-video"},null,512)])):Me("",!0)]),_:1}),ge(c,{span:4},{default:xe(()=>[(ce(!0),ue(gt,null,yt(i.value,(m,A)=>(ce(),Xt(u,{style:{overflow:"hidden"}},{default:xe(()=>[ge(h,{title:m.name.slice(0,-4),link:"",onClick:f=>s(A)},{default:xe(()=>[bt(He(m.name.slice(0,-4)),1)]),_:2},1032,["title","onClick"])]),_:2},1024))),256))]),_:1})]),_:1})])}}});const bp=Fs(yp,[["__scopeId","data-v-a86d2451"]]),vp={key:0,class:"resource"},Ep={style:{"font-size":"46px",color:"#33b8b9"}},xp=["src"],Cp={key:0},Tp={key:0},Sp={key:1},kp={key:1,style:{"margin-top":"30px"},class:"pic-div"},wp=["src"],Lp={key:3},Ip={key:0},Rp={key:0},Dp={key:0},_p={style:{display:"flex","align-items":"center","margin-right":"3vw"}},Bp={class:"task-module-img"},Pp=["src"],Op={class:"task-name"},Fp={key:0,style:{display:"flex","flex-direction":"column","align-items":"flex-start","justify-content":"flex-start",width:"100%","padding-left":"30px"}},Mp={class:"task-module-content"},Np={style:{display:"flex","align-items":"center","margin-left":"3vw"}},Up={key:0,class:"guidance"},$p=["innerHTML"],Gp={key:2},Kp={style:{"font-size":"20px"}},Hp=Yi({__name:"index",setup(a){const e=bl(),t=e.params.courseId,n=oe({id:"",name:"",parentId:"",cover:"",introduction:"",introduce:"",target:"",guidance:"",third:"",fourthType:"",fourth:"",keyWord:"",packageId:"",isDelete:"",pkgs:[],mdCourse:null}),i=oe("0"),r=oe();Lr(r,(Z,J)=>{Z&&R(Z)}),Lr(i,(Z,J)=>{Z=="0"&&!T.value&&setTimeout(()=>{N()},1e3)});const s=oe(!1),o=async()=>{await Ir.push({name:"AppliedCourse",params:{courseId:t}})},l=oe([]),d=oe([]),c=()=>{if(d.value.length>0){let Z=[];for(let J=0;J<d.value.length;J++)Z.push(d.value[J].id);return!!Z.includes(n.value.id)}else return!1},h=({rowIndex:Z})=>{if(Z%2===1)return{backgroundColor:"#f2faff"}},u=oe(!1),m=oe([]),A=oe([]),f=oe(0),g=oe(5);oe();const C=Z=>{Kl(Z).then(J=>{J.state==200?(k.value=J.data,F()):Je.error(J.message)})},T=oe(!1),S=oe({tooltip:{trigger:"item",triggerOn:"mousemove"},series:[{type:"tree",name:"tree",data:[],top:"5%",left:"10%",bottom:"5%",right:"10%",symbolSize:10,symbol:"emptyCircle",itemStyle:{color:"#89c7c7"},leaves:{label:{position:"right"}},emphasis:{focus:"relative"},initialTreeDepth:3,animationDuration:550,animationDurationUpdate:750,layout:"orthogonal",orient:"LR"}]}),k=oe([]),I=oe(),P=oe(1e3);oe(0);function _(Z,J){return Array.isArray(Z)?Z.forEach(Te=>{Te.children&&Te.children.length>0?_(Te.children,J):J.push(Te)}):Z.children&&Z.children.length>0?_(Z.children,J):J.push(Z),J}const N=()=>{if(i.value!="0"||($(),!document.getElementById("course_mapping")))return;const Z=_(k.value,[]),J=40,Te=J*(Z.length-1)||J,Ct=Math.max(Te,J,P.value);P.value=Ct,I.value=Rl(document.getElementById("course_mapping")),I.value.showLoading(),S.value.series[0].data=k.value,I.value.setOption(S.value),I.value.hideLoading(),I.value.on("mousedown",function(Fe){const Tt=Fe.data.name,St=Fe.dataIndex;I.value._chartsViews[0]._data.tree._nodes.filter(function(ot){return ot.name===Tt})[0].depth&&I.value._chartsViews[0]._data.tree._nodes.forEach(function(ot){Fe.event.target.culling===!1&&ot.dataIndex===St&&(ot.isExpand=!ot.isExpand)})}),I.value.on("click",function(Fe){Fe.event.target.culling===!1&&Fe.data.link&&Fe.data.link!=""&&(Fe.data.link.startsWith("http",0)||Fe.data.link.startsWith("#",0))&&window.open(Fe.data.link)}),window.addEventListener("resize",function(){Vt(),I.value&&I.value.resize()}),I.value.getWidth()&&I.value.getHeight()?(T.value=!0,I.value.resize({height:P.value+"px"})):I.value=null},U=()=>{T.value||N()},F=()=>{I.value!=null&&(S.value.series[0].data=k.value,I.value.setOption(S.value))},$=()=>{I.value!=null&&(I.value.dispose(),I.value=null),T.value=!1},H=oe([]),R=Z=>{console.log("getArticleList 。。。。。。。。。。。。"),Hl(Z).then(J=>{if(J.state==200){if(J.data.length>3)for(let Te=0;Te<J.data.length;Te++)H.value.length<3&&J.data[Te].content&&J.data[Te].content!=""&&H.value.push(J.data[Te]);else H.value=J.data;console.log(H.value)}else Je.error(J.message)})},q=Z=>{const J=oe(document.getElementsByClassName("article_"+Z));if(J.value[0].style.display=="block"){J.value[0].style.display="none";return}J.value[0].style.display="block"},V=oe([]),j=oe(),ee=Z=>{Gl(Z).then(J=>{J.state==200?(V.value=J.data,V.value.length>0&&(j.value=V.value[0])):Je.error(J.message)})};Ds(async()=>{await vl(t).then(Z=>{Z.state==200?(n.value=Z.data,console.log("-------------------》"),console.log(Z.data),r.value=n.value.mdCourse,u.value=!0):Je.error(Z.message)}),await C(t),await El(t).then(Z=>{Z.state==200?n.value.guidance=Z.data:Je.error("获取课程指导异常")}),await Ml(t).then(Z=>{Z.state==200?l.value=Z.data:Je.error("获取课程设计异常")}),await xl(t).then(Z=>{Z.state==200?n.value.pkgs=Z.data:Je.warning(Z.message)}),await Cl(t).then(Z=>{Z.state==200?(m.value=Z.data,A.value=m.value.slice(f.value,g.value)):Je.error(Z.message)}),await Nl().then(Z=>{Z.state==200?d.value=Z.data:Je.error(Z.message)}),n.value.fourthType==="video"&&ee(n.value.id)}),window.addEventListener("popstate",function(){Ir.go(0)});const K=()=>le.value>1900?"padding: 0px calc(164px + 4.8vw);":"padding: 0px 10px;";oe({top:20,background:""});const Y=oe(""),W=()=>{window.scrollY||document.documentElement.scrollTop||document.body.scrollTop?Y.value="down":Y.value=""},le=oe(0),re=oe(0);oe(0),oe(0);const de=oe(0);oe(null);const ve=oe(null),fe=oe(null),Ee=oe(null),Pe=oe(0),at=()=>{if(de.value>=Math.ceil(m.value.length/5)-1)return;de.value+=1;let Z=0-de.value/Math.ceil(m.value.length/5)*Ee.value.clientWidth;Ee.value.style.transform="translateX("+Z+"px)"},xt=()=>{if(de.value<=0)return;de.value-=1;let Z=0-de.value/Math.ceil(m.value.length/5)*Ee.value.clientWidth;Ee.value.style.transform="translateX("+Z+"px)"},nn=()=>{setTimeout(()=>{if(Pe.value=ve.value.clientWidth,fe.value)for(let J=0;J<fe.value.length;J++)fe.value[J].style.width=ve.value.clientWidth+"px";let Z=0-de.value/Math.ceil(m.value.length/5)*Ee.value.clientWidth;Ee.value.style.transform="translateX("+Z+"px)"},10),U()},Yn=Z=>{document.getElementById(Z).scrollIntoView({behavior:"smooth"}),q(Z)},Vn=()=>{const Z=e.meta.scrollTo;Z&&(i.value="2",setTimeout(()=>{Yn(decodeURIComponent(Z).slice(1))},1e3))};_s(async()=>{Vt(),window.addEventListener("resize",function(){Vt(),I.value&&I.value.resize()}),Vn(),setTimeout(()=>{N()},2e3),console.log("1111"),console.log(e)});const Vt=function(){le.value=window.innerWidth,re.value=window.innerHeight,nn()};return Tl(()=>{$()}),window.addEventListener("scroll",W),(Z,J)=>{const Te=Os,Ct=Ps,Fe=Bs,Tt=Dl,St=_l,rn=Bl,ot=Sl("Download"),Wn=Pl,jn=Ol,Qn=Fl;return["CourseDetail","MyCourseDetail"].includes(Qt(e).name)?(ce(),ue("div",vp,[ge(kl,{route:Qt(e)},null,8,["route"]),ge(Te,{style:Xe(K())},{default:xe(()=>[ge(Fe,{span:10,style:{display:"flex","flex-direction":"column","justify-content":"center"}},{default:xe(()=>[ge(Te,null,{default:xe(()=>[Le("h1",Ep,He(n.value.name),1)]),_:1}),c()==!0?(ce(),Xt(Te,{key:0},{default:xe(()=>[ge(Ct,{type:"primary",style:{"background-color":"#33b8b9",color:"#fff","align-self":"stretch"},onClick:J[0]||(J[0]=me=>o()),disabled:s.value},{default:xe(()=>J[4]||(J[4]=[bt("发布课程",-1)])),_:1,__:[4]},8,["disabled"])]),_:1})):Me("",!0)]),_:1}),ge(Fe,{span:14,style:{display:"flex","justify-content":"center"}},{default:xe(()=>[n.value.cover?(ce(),ue("img",{key:0,src:"/local-resource/image/"+n.value.cover,alt:"",style:{width:"auto",height:"31vh","object-fit":"contain"}},null,8,xp)):Me("",!0)]),_:1})]),_:1},8,["style"]),ge(Qn,{modelValue:i.value,"onUpdate:modelValue":J[3]||(J[3]=me=>i.value=me),stretch:"",onTabClick:nn},{default:xe(()=>[ge(Tt,{label:"课程概览",name:"0"},{default:xe(()=>[Le("div",{style:Xe([K(),{"background-color":"#fff","padding-bottom":"50px"}])},[ge(Te,{class:"summary_title"},{default:xe(()=>J[5]||(J[5]=[bt(" 课程介绍 ",-1)])),_:1,__:[5]}),ge(Te,{class:"summary_detail"},{default:xe(()=>[Le("div",null,He(n.value.introduction),1),Le("div",null,He(n.value.introduce),1),n.value.target?(ce(),ue("div",Cp,He(n.value.target),1)):Me("",!0)]),_:1}),n.value.fourthType!==null?(ce(),Xt(Te,{key:0,class:"points_title"},{default:xe(()=>[n.value.fourthType!=="video"?(ce(),ue("span",Tp,"理实映射")):(ce(),ue("span",Sp,"视频介绍"))]),_:1})):Me("",!0),n.value.fourthType==="image"?(ce(),ue("div",kp,[Le("img",{src:"/local-resource/image/"+n.value.fourth,alt:""},null,8,wp)])):n.value.fourthType==="map"?(ce(),ue("div",{key:2,class:"course_mapping",id:"course_mapping",style:Xe({height:P.value+"px"})},null,4)):n.value.fourthType==="video"?(ce(),ue("div",Lp,[V.value?(ce(),ue("div",Ip,[V.value.length>0?(ce(),Xt(bp,{key:0,videoList:V.value},null,8,["videoList"])):Me("",!0)])):Me("",!0)])):Me("",!0)],4)]),_:1}),ge(Tt,{label:"课程设计",name:"1"},{default:xe(()=>[ge(Te,{class:"table_title",style:Xe(K())},{default:xe(()=>J[6]||(J[6]=[bt(" 课程对毕业能力的支撑关系 ",-1)])),_:1,__:[6]},8,["style"]),Le("div",{style:Xe([{"background-color":"#fff",padding:"20px 20px","padding-bottom":"50px","padding-top":"50px"},K()])},[ge(rn,{class:"table",data:l.value,border:!0,"header-cell-style":{background:"#33b8b9",fontSize:"24px",color:"#fff",lineHeight:"30px"},"header-row-style":{height:"60px"},"cell-style":{fontSize:"18px",whiteSpace:"pre-line"},"row-style":h},{default:xe(()=>[ge(St,{label:"毕业要求",prop:"graduationRequirementName","header-align":"center"}),ge(St,{label:"毕业要求指标点","header-align":"center"},{default:xe(me=>[l.value.length>0&&l.value[0]!=null?(ce(),ue("div",Rp,[(ce(!0),ue(gt,null,yt(me.row.graduationPointList.length,Ne=>(ce(),ue("li",null,He(me.row.graduationPointList[Ne-1].name),1))),256))])):Me("",!0)]),_:1}),ge(St,{label:"课程目标","header-align":"center"},{default:xe(me=>[l.value.length>0&&l.value[0]!=null?(ce(),ue("div",Dp,[(ce(!0),ue(gt,null,yt(me.row.courseTargetList.length,Ne=>(ce(),ue("li",null,He(me.row.courseTargetList[Ne-1].name),1))),256))])):Me("",!0)]),_:1})]),_:1},8,["data"])],4),ge(Te,{class:"task-title",style:Xe(K())},{default:xe(()=>J[7]||(J[7]=[bt(" 课程实验模块 ",-1)])),_:1,__:[7]},8,["style"]),ge(Te,{class:"task-info",style:Xe(K())},{default:xe(()=>[bt(" 本课程共设计"+He(m.value.length)+"个教学实验。详细实验内容请参考课程资源的实验指导书。 ",1)]),_:1},8,["style"]),Le("div",{class:"task",style:Xe(K())},[Le("div",_p,[ge(Ct,{icon:Qt(wl),circle:"",type:"primary",onClick:J[1]||(J[1]=me=>xt())},null,8,["icon"])]),Le("div",{class:"moveable-container",style:{width:"100%",height:"100%"},ref_key:"parentDiv",ref:ve},[Le("div",{class:"slideway",ref_key:"slideway",ref:Ee},[(ce(!0),ue(gt,null,yt(Math.ceil(m.value.length/5),me=>(ce(),ue("div",{class:"hh",key:me,ref_for:!0,ref_key:"childDiv",ref:fe,style:{display:"flex",width:"100%"}},[(ce(!0),ue(gt,null,yt(m.value.slice((me-1)*5,me*5),Ne=>(ce(),ue("div",{class:"task-module",id:"task-module",key:Ne.id},[Le("div",Bp,[Ne.taskCover?(ce(),ue("img",{key:0,src:"/local-resource/image/"+Ne.taskCover,alt:"",style:{width:"100%",height:"100%","object-fit":"cover",position:"relative"}},null,8,Pp)):Me("",!0),Le("div",Op,He(Ne.taskName),1)]),Ne.requirementLis?(ce(),ue("div",Fp,[Le("div",Mp,[J[8]||(J[8]=Le("h1",null,"实验目的",-1)),(ce(!0),ue(gt,null,yt(Ne.requirementList.length,sn=>(ce(),ue("div",null,He(Ne.requirementList[sn-1].name),1))),256))])])):Me("",!0)]))),128))]))),128))],512)],512),Le("div",Np,[ge(Ct,{icon:Qt(Ll),circle:"",type:"primary",onClick:J[2]||(J[2]=me=>at())},null,8,["icon"])])],4)]),_:1}),ge(Tt,{label:"课程样章",name:"2"},{default:xe(()=>[n.value.mdCourse==null?(ce(),ue("div",Up,[Le("div",{class:"editor-content-view",innerHTML:n.value.guidance},null,8,$p)])):(ce(),ue("div",{key:1,class:"article_container",style:Xe(K())},[(ce(!0),ue(gt,null,yt(H.value,(me,Ne)=>(ce(),ue("div",null,[me.content&&me.content!=""?(ce(),Xt(Te,{key:0,class:"article_title",id:me.chapterName,onClick:sn=>q(me.chapterName)},{default:xe(()=>[bt(He("样章--"+me.chapterName),1)]),_:2},1032,["id","onClick"])):Me("",!0),ge(zl,{class:Il(["article_content","article_"+me.chapterName]),id:"preview-only_"+me.chapterId,content:me.content,articleId:me.articleId,parentId:"preview-only_"+me.chapterId},null,8,["class","id","content","articleId","parentId"])]))),256)),J[9]||(J[9]=Le("div",{style:{height:"30px"}},null,-1))],4)),c()?(ce(),ue("div",Gp,[Le("div",{class:"download",style:Xe(K())},[(ce(!0),ue(gt,null,yt(n.value.pkgs,me=>(ce(),ue("div",Kp,[ge(jn,{underline:!1,type:"primary",href:"/local-resource/file/"+me.filename},{default:xe(()=>[ge(Wn,null,{default:xe(()=>[ge(ot)]),_:1}),bt(He(me.originFilename),1)]),_:2},1032,["href"])]))),256))],4)])):Me("",!0)]),_:1})]),_:1},8,["modelValue"])])):Me("",!0)}}});const nf=Fs(Hp,[["__scopeId","data-v-69741a16"]]);export{nf as default};
