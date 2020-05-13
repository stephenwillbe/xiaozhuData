import Axios from "axios";
Axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
//创建axios实例
const service = Axios.create({
    //设置url公共部分
    baseURL: "http://localhost:8083",
    //超时
    timeout: 10000
})
//request拦截
service.interceptors.request.use()

//response拦截
service.interceptors.response.use()

//导出service
export default service