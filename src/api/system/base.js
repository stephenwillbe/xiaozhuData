import request from '../../utils/request'

//基本数据分析接口

//分页查询每日新增注册，日活等等信息信息
export function listUserAnalysis(page,size) {
   return request({
       url: "/userAnalysis/"+page+"/"+size,
       method: 'get'
   })
}