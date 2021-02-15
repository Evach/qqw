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
        // 启用 CSS modules
        modules: false,
        // 是否使用css分离插件
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    //remUnit这个配置项的数值是多少呢？？？ 通常我们是根据设计图来定这个值，原因很简单，便于开发。
                    //假如设计图给的宽度是750，我们通常就会把remUnit设置为75，这样我们写样式时，可以直接按照设计图标注的宽高来1:1还原开发。
                    require('postcss-px2rem')({
                        remUnit: 75
                    })
                ]
            }
        },
    }
}