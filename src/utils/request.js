// 具体用哪个ajax库可以随便替换掉和具体的vue代码解耦低耦合
// 可以同时配置多个接口服务器
import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000, // 超时时间
})
export default instance
