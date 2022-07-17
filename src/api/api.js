import http from '../utils/http'
//
/**
 *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */
let request = "/api"

export default {
    get(uri, params) {
        return http.get(`${request}/${uri}`, params)
    },
    post(uri, params) {
        return http.post(`${request}/${uri}`, params)
    }
}
