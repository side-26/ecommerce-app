import { BASE_URL } from '../Config/Url.config';
const { default: axios } = require("axios");
const http = axios.create({ baseURL: BASE_URL });
// http.interceptors.request.use(()=>{
//     console.log("hello")
// })
http.interceptors.response.use(()=>{
    console.log("hello")
})
// class Http{
//     constructor() {
//         axios.defaults.baseURL=BASE_URL
//         axios.interceptors.request.use(()=>{
//             console.log("interceptors request is");
//         })
//         axios.interceptors.response.use(()=>{
//             console.log("interceptors response is");
//         })
//     }
//     get(URL,config){
//         return axios.get(URL,config)
//     }
//     post(URL,data,config={}){
//         return axios.post(URL,data,config)
//     }
//     put(URL,data,config={}){
//         return axios.put(URL,data,config)
//     }
//     patch(URL,data,config={}){
//         return axios.patch(URL,data,config)
//     }
//     delete(URL,config={}){
//         return axios.delete(URL,config)
//     }
// }
export default http;