import request from "u/request"
const LOCAL_URL = 'http://192.168.10.4:8080'


//todo 获取用户列表
export function getUserList (data) {
    return request({
        url: 'users',
        data
    })
}

//获取qqw的banner
export function getHomeApi(data){
    return request({
        url:`${LOCAL_URL}/api/category/product/model-detail-by-model-id-new`,
        data
    })
}

//获取qqw的 分类
export function getBanner(){
    return request({
        url:`${LOCAL_URL}/api/category/product/model-detail-by-model-id-new`,
        data:{
            entityId: 4,
            modelId: -1,
            proModelId: 1,
            source: 3,
            version: "v1",
            tuserId: 771131,
            isWechat: 0,
        }
    })
}
