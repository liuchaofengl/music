import { createStore } from 'vuex'
import { getPlayLyric } from "@/api/index.js"
export default createStore({
  state: {
    tracks:[{
      name: "Butterflies (Synchronice Remix)",
      id: 1468664771,
      al:{
        id: 93548701,
        name: "Butterflies (Synchronice Remix)",
        pic: 109951165206790020,
        picUrl: "http://p4.music.126.net/KP_rF2qAfkqXpIWRsNEGtw==/109951165206790009.jpg",
        pic_str: "109951165206790009"
      }}
    ],
    palyCurrentIndex:0,
    Lyric:'',
    currentTime:1,
    intervalId:0,
    user:{
      isLogin:false,
      usename:"未登录"
    }
  },
  getters:{
      newLyric(state){
        let arr =  state.Lyric.split(/\n/ig).map((item,i) =>{
            let min = parseInt(item.slice(1,3));
            let sec = parseInt(item.slice(4,6));
            let mill = parseInt(item.slice(7,9));
            return {
              min,
              sec,
              mill,
              item,
              lyric:item.slice(11,item.length),
              times:mill+sec*1000+min*60*1000
            }
        })
        arr.forEach((item,i)=>{
          if(i>=arr.length-1){
            item.next = arr[i].times
          }else{
            item.next = arr[i+1].times
          }
        })
        console.log(arr)
        return arr
      }
  },
  mutations: {
      setTracks:function(state,value){

        state.tracks = value
      },
      pushSetTracks(state,item){
        state.tracks.push(item)
      },
      setPalyCurrentIndex:function(state,value){
        state.palyCurrentIndex = value
      },
      //获取歌词
      setLyric:function(state,value){
        state.Lyric = value;
      },
      //获取播放的当前时间
      setCurrentTime:function(state,value){
        state.currentTime = value;
      }
  },
  actions: {
      async reqLyric(content,payload){
          let result = await getPlayLyric(payload.id);
          console.log(result)
          content.commit('setLyric',result.data.lrc.lyric)
      }    
  },
  modules: {
  }
})
