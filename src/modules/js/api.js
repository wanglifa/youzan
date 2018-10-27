let url = {
    hostlists: '/index/hotLists',
    banner: '/index/banner',
    topList: '/category/topList',
    rank: '/category/rank',
    subList: '/category/subList'
}
let host = 'http://rap2api.taobao.org/app/mock/105486'
for(var key in url){
    if(url.hasOwnProperty(key)){
        url[key] = host + url[key]
    }
}
export default url