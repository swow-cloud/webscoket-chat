const { defineConfig } = require('@vue/cli-service')
const path =  require('path');

const IS_PRODUCTION = ['production', 'prod'].includes(process.env.NODE_ENV);//判断是否是生产环境

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // proxy: 'http://localhost:8080'   // 配置跨域处理,只有一个代理
    proxy: { //配置多个代理
      "/api": {
        target: "http://127.0.0.1:9764",
        changeOrigin: true,
        ws: false,//websocket支持
        secure: false,
        pathRewrite: {
          "^/api": "/"
        }
      }
    }
  }
})
