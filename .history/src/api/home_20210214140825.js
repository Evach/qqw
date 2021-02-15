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
export function getHotMovies () {
    return request({
        url: `${LOCAL_URL}/lakers/ajax/topRatedMovies`,
        data: {
            token: '',
            optimus_uuid: 'FCF89D005B8D11EBB0CB73EC4B4FD6B3979D27D3601A48B0BC70BE60D63C1DA3',
            optimus_risk_level: 71,
            optimus_code: 10
        }
    })
}