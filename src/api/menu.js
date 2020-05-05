import request from "../utils/request"

//目录接口

//获取所有目录
export function listMenu(page,size) {
    return request({
        url: "/Menu/"+page+"/"+size,
        method: 'get'
    })
}