import axios from "axios"
export function getBanners(type=0){
   return axios.get(`http://localhost:3000/banner?type=${type}`)
}
export function getMusicList(limit=10){
    return axios.get(`http://localhost:3000/personalized?limit=${limit}`)
}
export function getListView(id){
    return axios.get(`http://localhost:3000/playlist/detail?id=${id}`)
}
export function getPlayLyric(id){
    return axios.get(`http://localhost:3000/lyric?id=${id}`)
}
// 搜索api
export function getSearch(keyword){
    return axios.get(`http://localhost:3000/search?keywords=${keyword}`)
}
