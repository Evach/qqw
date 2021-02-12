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
    // devServer: {
    //     proxy: {
            // 标识符: config{target,changeOrigin,pathRewrite,ws,..} 
            // 标识符：是用于识别哪一个请求是需要代理的
            //! 注意： 一个目标服务器就写一个标识符

            //todo 写法一 推荐的
                // '/ajax': { //!!! 这里的/ajax取了域名后的第一个路径
                //     target: 'https://m.maoyan.com',  // target是代理目标源服务器
                //     changeOrigin: true,//使用反向代理服务器来代替目标服务器
                // },
            //todo 写法二
                // '/lakers': {
                //     target: 'https://m.maoyan.com',
                //     changeOrigin: true,
                //     pathRewrite: {
                //         '^/lakers': ''
                //     }
                // },
                // '/index.php': {
                //     target: 'http://www.qinqin.net',
                //     changeOrigin: true
                // }
    //     }
    // }
}