/*
 * @Description: 封装请求
 * @Autor: kangpeng
 * @Date: 2020-03-13 15:02:23
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-03-13 16:47:17
 */
import axios from 'axios'
import Cookies from 'js-cookie'
import { Message } from 'element-ui'

// 环境的切换

if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = 'xxx'
} else if (process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = 'xxx'
}

// 设置请求超时
axios.defaults.timeout = 10000;

// post请求头设置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 请求拦截
axios.interceptors.request.use(
    config => {
        const token = Cookies.get('token')
        token && (config.headers.Authorization = token)
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 响应拦截
axios.interceptors.response.use(
    response => {
        if (response.status == 200) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
    },
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                // 401: 未登录
                case 401:
                    router.replace({
                        path:'/login',
                        query:{
                            redirect:router.currentRoute.fullPath
                        }
                    });
                    break;

                // 403：token过期
                case 403:
                    Message.warning('登录过期，请重新登录')
                    // 清除token
                    Cookies.remove('token');
                    setTimeout(() => {
                        router.replace({
                            path:'/login',
                            query:{
                                redirect:router.currentRoute.fullPath
                            }
                        })
                    },1000);
                    break;

                // 404请求不存在
                case 404: 
                    Message.error('网络请求不存在')
                    break;
                default:
                    Message.error(error.response.data.message)
            }
            return Promise.reject(error.response)
        }
    }
);

// 封装get方法
export function get(url,params) {
    return new Promise((resolve,reject) => {
        axios.get(url,{
            params:params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    })
}

// 封装post方法
export function post(url,params) {
    return new Promise((resolve,reject) => {
        axios.post(url,params)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err.data)
            })
    })
}