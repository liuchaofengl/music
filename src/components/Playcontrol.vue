<template>
    <div class="playcontrol">
        <div class="left" @click="show = !show">
            <img :src="tracks[palyCurrentIndex].al.picUrl" alt=""> 
           <div class="content">
                <div class="title">{{tracks[palyCurrentIndex].al.name}}</div>
                <div class="tips">横滑可以上下首哦</div>
            </div>
        </div>
        <div class="right">
            <svg v-if="paused" class="icon" aria-hidden="true" @click="play">
                <use xlink:href="#icon-bofang"></use>
            </svg>
              <svg v-else  class="icon" aria-hidden="true" @click="play">
                <use xlink:href="#icon-zantingtingzhi1"></use>
            </svg>
             
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liebiao"></use>
            </svg>
            <playMusic  :play="play" :paused="paused" :playDatail="tracks[palyCurrentIndex]" @back="show = !show" v-show="show"></playMusic>
            <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${tracks[palyCurrentIndex].id}.mp3`"></audio>
        </div>
    </div>
</template>
<script>
import playMusic from "@/components/playMusic.vue"
import {mapState,mapMutations} from "vuex"
     import store from "@/store/index.js"
    export default{
         data(){
          return {
               paused:true,
               show:false
          }
       },
       components:{
           playMusic
       },
       computed:{
           ...mapState(['tracks','palyCurrentIndex'])
       },
      
       updated(){
           console.log(this.tracks[this.palyCurrentIndex])
           this.$store.dispatch("reqLyric",{id:this.tracks[this.palyCurrentIndex].id})
           console.log(this.$store.state.tracks)
          
       },
       mounted(){
            
            this.$store.dispatch("reqLyric",{id:this.tracks[this.palyCurrentIndex].id})
       },

       methods:{
           play(){
               if(this.$refs.audio.paused){
                   this.$refs.audio.play()
                   this.paused = false
                   console.log(this.$refs.audio.currentTime)
                  this.getCurrentTime()
                  
                
               }else{
                  this.$refs.audio.pause()
                  this.paused = true
                  clearInterval(this.$store.state.intervalId)
               }
           },
           //获取当前时间
           getCurrentTime(){
               this.$store.state.intervalId = setInterval(()=>{
                   this.$store.commit("setCurrentTime",this.$refs.audio.currentTime)
               },1000)
           }
           
       }
       
    }
</script>
<style lang="less">
    .playcontrol{
        background-color: #fff;
        z-index: 100;
        width:7.5rem;
        height:1.2rem;
        position: fixed;
        left:0;
        bottom:0;
        display:flex;
        justify-content: space-between;
        align-items: center; 
        border-top:1px solid #ccc;
        .left{
            display:flex;
            justify-content: space-around;
            margin-left:.1rem;
            .content{
                margin-left:.1rem;
            }
            img{
                width:.8rem;
                height:.8rem;
                border-radius: .5rem;
            }
        }
        .right{
            .icon{
                width:.5rem;
                height:.5rem;
                margin:0 .1rem;
            }
        }
        
    }
</style>