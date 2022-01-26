import axios from 'axios'



const service = axios.create({
    baseURL: "https://api.github.com/"
})

// 拦截器
service.interceptors.request.use(
    config => {
        // 先这么写着，对token的处理后续再增加
        return config;
    },
    // 对请求失败时暂时不作处理
    err => {

    }
)

service.interceptors.response.use(
    response => {
        return response;
    },
    err => {
        if(err.response.status == 401){
            console.log("请求失败,token有误")
        }
    }

)

export default service