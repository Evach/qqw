/* 
    vue.config.js   是cli的配置文件，可以用于配置项目功能
        1. 它是Node.js文件，采用的是Common.js模块化

    !!! 注意
        !!! 配置文件一旦修改，必须重启项目才能生效
*/
const path = require('path')
module.exports = {
    // 1. 路径别名
    chainWebpack: config => {
        config.resolve.alias      // alias  别名
            // .set('@',绝对路径)
            .set('@',path.join(__dirname,'./src'))
            .set('a',path.join(__dirname,'./src/assets'))
            .set('c',path.join(__dirname,'./src/components'))
            .set('u',path.join(__dirname,'./src/utils'))
            .set('s',path.join(__dirname,'./src/service'))
            .set('r',path.join(__dirname,'./src/router'))
            .set('store',path.join(__dirname,'./src/store'))
            .set('v',path.join(__dirname,'./src/views'))
    },
    devServer: {
        proxy: {
            
            '/api': { 
                target: 'http://cmsjapi.ffquan.cn',  
                changeOrigin: true,
            },
           
            '/lakers': {
                target: 'https://m.maoyan.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/lakers': ''
                }
            },
            '/index.php': {
                target: 'http://www.qinqin.net',
                changeOrigin: true
            }
        }
    },
    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        remUnit: 37.5
                    })
                ]
            }
        }
    },
}