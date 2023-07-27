import axios from "axios";
// import 'dotenv/config'
const api = {
  prod: 'http://39.105.169.117:5000',
  test: 'http://localhost:5000',
}
const service = axios.create({
  baseURL: 'https://sunsunblog.top:5000', //这里是你部署后台服务的主机和端口号
  timeout: 20000 // 请求超时时间
})
console.log(service.defaults.baseURL)
// console.log(process.env, 'process.env.BASE_URL')
export { service }