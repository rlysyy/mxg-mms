import request from '@/utils/request'

export default{
    getList(){
        return request({
            url:'/member/list',
            method:'get'
        })
    },

    search(page,size,searchMap){
        return request({
            url:`/member/list/search`,
            method:'post',
            data:searchMap
        })
    }
}