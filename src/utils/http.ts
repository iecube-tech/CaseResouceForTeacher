//axios 封装
import axios from 'axios'
import router from '@/router';
import { ElMessage } from 'element-plus';
import { RouterStore } from '@/stores/routerRederict';

axios.defaults.withCredentials = true

declare module "axios" {
    interface AxiosResponse<T = any> {
        state: null;
        message: null
    }
    export function create(config?: AxiosRequestConfig): AxiosInstance;
}

const httpInstance = axios.create({
    baseURL: '/dev-api',
    timeout: 100000
})

//拦截器
//请求拦截器
httpInstance.interceptors.request.use(config => {
    config.headers["x-access-type"] = localStorage.getItem("x-access-type")
    config.headers["x-access-token"] = localStorage.getItem("x-access-token")
    return config
}, e => Promise.reject(e))
//响应拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    
    if (e.code == "ECONNABORTED" && e.message.indexOf("timeout") != -1){
        return Promise.reject(e)
    }
    
    // console.log(e)
    if (e.response.status == 403) {
        RouterStore().savePath(window.location.pathname)
        ElMessage.error("请登录")
        localStorage.removeItem("x-access-token")
        localStorage.removeItem("x-access-type")
        localStorage.removeItem("auth")
        router.push('/login')
        return Promise.reject(e)
    }
    if (e.response.status == 401) {
        RouterStore().savePath(window.location.pathname)
        ElMessage.error("请重新登录")
        localStorage.removeItem("x-access-token")
        localStorage.removeItem("x-access-type")
        localStorage.removeItem("auth")
        router.push('/login')
        return Promise.reject(e)
    }

    if (e.response.status !== 200) {
        ElMessage.error("请求错误")
        return Promise.reject(e)
    }
    return Promise.reject(e)
})


export default httpInstance