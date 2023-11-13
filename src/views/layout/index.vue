<template>
    <el-container>
        <header :class="headrClass" @mouseover="hover()" @mouseleave="leave()">
            <a href="/" class="logo"><img src="@/assets/images/产业案例教学资源库和过程评价系统LOGO.svg" alt=""></a>
            <div class="menu">
                <div class="navs">
                    <div class="item">
                        <a href="/">首页</a>
                    </div>
                    <div class="item hasnav" @mousemove="chooseItem1 = 1" @mouseleave="chooseItem1 = 0">
                        <a href="/resource">教学资源</a>
                        <div class="navs1"
                            style=" height: 30vh; padding-top: 0px;  margin-top: 1px; padding-bottom: 0px; margin-bottom: 0px;"
                            :style="getDisplay1()">
                            <div class="flexbox" style="max-height: 30vh;">
                                <div class="navs1box">
                                    <dl>
                                        <a href="/resource">
                                            <dt>
                                                产业项目案例
                                            </dt>
                                        </a>
                                        <dd>
                                            <a>工科基础</a>
                                            <a>信息与电子</a>
                                            <a>机电与测控</a>
                                            <a>能源与动力</a>
                                        </dd>
                                    </dl>
                                </div>
                                <div class="navs1box">
                                    <dl>
                                        <a href="/course">
                                            <dt>
                                                课程资源
                                            </dt>
                                        </a>
                                        <dd>
                                            <a>工科基础</a>
                                            <a>信息与电子</a>
                                            <a>机电与测控</a>
                                            <a>能源与动力</a>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item hasnav" @mousemove="chooseItem2 = 1" @mouseleave="chooseItem2 = 0">
                        <a href="/myresource">我的资源</a>
                        <div class="navs1"
                            style="height: 30vh; padding-top: 0px;  margin-top: 1px; padding-bottom: 0px; margin-bottom: 0px;"
                            :style="getDisplay2()">
                            <div class="flexbox">
                                <div class="navs1box">
                                    <dl>
                                        <a href="/myresource">
                                            <dt>
                                                产业项目案例
                                            </dt>
                                        </a>
                                        <dd>
                                            <a>工科基础</a>
                                            <a>信息与电子</a>
                                            <a>机电与测控</a>
                                            <a>能源与动力</a>
                                        </dd>
                                    </dl>
                                </div>
                                <div class="navs1box">
                                    <dl>
                                        <a href="/mycourse">
                                            <dt>
                                                课程资源
                                            </dt>
                                        </a>
                                        <dd>
                                            <a>工科基础</a>
                                            <a>信息与电子</a>
                                            <a>机电与测控</a>
                                            <a>能源与动力</a>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item hasnav">
                        <a href="/myproject">我的发布</a>
                    </div>
                    <div class="item hasnav">
                        <a href="/analysis">数据分析</a>
                    </div>
                    <div class="item hasnav">
                        <a href="/suggestion">改进建议</a>
                    </div>
                </div>
            </div>
            <div>
                <el-dropdown trigger="click">
                    <el-icon size="40px">
                        <UserFilled />
                    </el-icon>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <router-link to="/account"><el-dropdown-item>账户信息</el-dropdown-item></router-link>
                            <router-link to="/student"><el-dropdown-item>学生管理</el-dropdown-item></router-link>
                            <router-link to="/device"><el-dropdown-item disabled>设备管理</el-dropdown-item></router-link>
                            <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </header>
        <el-main style="padding-top: 100px; padding-left: 3vw; padding-right: 3vw;">
            <div class="maincontainer">
                <RouterView :key="$route.path" />
            </div>
        </el-main>
        <el-footer class="footer">
            京ICP备20018557号-3
        </el-footer>
    </el-container>
</template>

<script setup lang="ts">
import router from '@/router';
import { Logout } from '@/apis/logout'
import { ref } from 'vue';
import { ElMessage } from 'element-plus';


const logout = async () => {
    await Logout().then(res => {
        if (res.state == 200) {
            ElMessage.success("退出成功")
        } else {
            ElMessage.error("退出失败")
        }
        router.push('/login')
    })
}

const down = ref({
    top: 20,
    background: "",
})

const hover = () => {
    headrClass.value = 'down'
}

const leave = () => {
    handleScroll();
}

const chooseItem1 = ref(0)
const chooseItem2 = ref(0)

const getDisplay1 = () => {
    if (chooseItem1.value == 1) {
        return "display:block"
    }
}
const getDisplay2 = () => {
    if (chooseItem2.value == 1) {
        return "display:block"
    }
}

const headrClass = ref('')

const handleScroll = () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop) {
        headrClass.value = "down"
    } else {
        headrClass.value = ""
    }
}

window.addEventListener("scroll", handleScroll)
</script>

<style scoped>
.navs1box dd a {
    display: block;
    line-height: 2.429;
    color: #333;
    font-size: 14px;
    transition: all .5s;
}

.navs1 .flexbox {
    padding: 2.5vw 3.2vw 4vw;
    display: flex;
    flex-direction: row;

}

.navs1 .flexbox .navs1box {
    flex: 1
}

.navs1 .flexbox .navs1box dl {
    width: 280px;
}

.navs1 .flexbox .navs1box dl dt {
    font-size: 16px;
    color: #333;
    line-height: 56px;
    border-bottom: 1px solid #c1c1c1;
    font-weight: bold;
    margin-bottom: 20px;
}

.navs1 {
    display: none;
    position: absolute;
    top: 100%;
    left: 3vw;
    right: 3vw;
    box-shadow: 0px 0.28rem 0.24rem 0px rgb(0 0 0 / 2%);
    background: #fff;
}

.footer {
    display: flex;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #f2faff;
}

.maincontainer {
    min-height: 100%;
}

.el-container,
.el-main {
    min-height: 100%;
    background: #f2faff;
}


header {
    left: 0;
    right: 0;
    position: fixed;
    height: 100px;
    top: 20px;
    z-index: 999;
    display: flex;
    align-items: center;
    padding: 0 3vw;
    transition: all 0.3s;
}

header .logo {
    width: 164px;
    display: block;
    margin-right: 4.8vw;
}

.down {
    top: 0;
    background: #fff;
    box-shadow: 0 3px 6px 0px rgb(0 0 0 / 5%);
}

.menu {
    -webkit-box-flex: 1;
    flex: 1;
    height: 100px;
}

header .navs {
    display: flex;
    align-items: center;
    height: 100px;
}

header .navs .item {
    display: flex;
    align-items: center;
    margin-right: 2.5vw;
    position: relative;
    height: 100px;
}

.hasnav {
    position: static !important;
}

header .navs .item>a {
    font-size: 16px;
    color: #333;
    transition: all .3s;
    position: relative;
    display: block;
}

header .navs .item>a::after {
    content: '';
    right: 0;
    transition: all .5s;
    bottom: -8px;
    height: 2px;
    background: #33b8b9;
    position: absolute;
    width: 0;
}

a,
a:link,
a:visited,
a:hover,
a:active {
    outline: 0;
    text-decoration: none;
    background: none;
}



@media (min-width:1200px) {
    header .navs .item>a:hover {
        color: #33b8b9;
    }

    header .navs .item>a:hover:after {
        width: 100%;
        right: auto;
        left: 0;
    }

    header .language a:hover {
        color: #33b8b9;
    }

    .foot1 dd a:hover {
        color: #33b8b9;
    }

    .linkbox .after a:hover {
        color: #33b8b9;
    }

    .pages a:hover {
        color: #33b8b9;
    }

    .page1:hover {
        color: #33b8b9;
    }

    .right-menu .item:hover:after {
        transform: translateY(0);
    }

    .right-menu .item:hover img:nth-child(1) {
        opacity: 0;
    }

    .right-menu .item:hover img:nth-child(2) {
        opacity: 1;
    }
}
</style>