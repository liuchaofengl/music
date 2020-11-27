<template>
    <div class="musicLists">
        <div class="musicListTop">
            <div class="musicTitle">发现好歌单</div>
            <div class="musicMore">查看更多</div>
        </div>
        <div class="musiclist">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <router-link   class="swiper-slide" v-for="(item,i) in state.musicList" :key="i" :to="{path:'listview',query:{id:item.id}}">
                        <img :src="item.picUrl" :alt="item.name">
                        <div class="name">{{item.name}}</div>
                        <div class="count">{{changeValue(item.playCount)}}</div>
                    </router-link>
                  
                </div>
                
                <div class="swiper-pagination"></div>
            </div>


  

        </div>
    </div>
</template>
<script>
import { onMounted,onUpdated,reactive} from "vue"
import Swiper from 'swiper';
import 'swiper/css/swiper.css'
import {getMusicList} from "@/api/index.js"

    export default {
        setup(){
            //申明数据
            let state = reactive({musicList:[]})
            //挂载钩子函数
            onMounted(async() => {
                var swiper = new Swiper('.swiper-container', {
                    slidesPerView: 3,
                    spaceBetween: 10,
               
                 });
                 //获取后台数据
                    const res = await getMusicList()
                    console.log(res)
                    state.musicList = res.data.result
            })
            //组件更新函数
            onUpdated(() => {
                 var swiper = new Swiper('.swiper-container', {
                    slidesPerView: 3,
                    spaceBetween: 10,
               
                 });  
            })
            //数据过滤函数
           function changeValue (count){
               let res = 0;
               if(count>=100000000){
                   res = count/100000000 
                   res = res.toFixed(2)+"亿"
               }else if(count>=10000){
                   res = count/10000 
                   res = res.toFixed(2)+"万"
               }
               return res

           }
            return {state,changeValue}
        }
      

    }
    // export default {
    //     data(){
    //         return {
    //             musicList:[]
    //         }
    //     },
    //    async mounted(){
    //          //获取后台数据
    //         const res = await getMusicList()
    //         console.log(res)
    //         this.musicList = res.data.result
         

    //         var swiper = new Swiper('.swiper-container', {
    //             slidesPerView: 3,
    //             spaceBetween: 10,
               
    //             });
             
    //     },
    //     updated(){
    //           var swiper = new Swiper('.swiper-container', {
    //             slidesPerView: 3,
    //             spaceBetween: 8,
               
    //             });
    //     },
    //     methods:{
    //        changeValue:function(count){
    //            let res = 0;
    //            if(count>=100000000){
    //                res = count/100000000 
    //                res = res.toFixed(2)+"亿"
    //            }else if(count>=10000){
    //                res = count/10000 
    //                res = res.toFixed(2)+"万"
    //            }
    //            return res

    //        }
    //     }
    // }
</script>
<style lang="less" scoped>
    .musicLists{
        width:100%;
        padding:.2rem;
        
        
        .musicListTop{
            display: flex;
            justify-content: space-between;
            .musicTitle{
                font-size:.4rem;
                padding:.3rem;
            }
            .musicMore{
                font-size:.3rem;
                
                border:1px solid #ccc;
                border-radius:.4rem;
                width:2rem;
                height:.5rem;
                text-align: center;
                margin-top:.2rem ;
    
            }
        }
        .musiclist{
         
            .swiper-container{
                width:100%;
                height:3rem;
                .swiper-slide{
                
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    .name{
                        font-size:.2rem;
                        height:.6rem;
                    }
                    .count{
                        position: absolute;
                        right:.2rem;
                        top:.15rem;
                        color:#ccc;
                        font-size:.1rem;
                    }
                }
            }
        }
        
        
    }
</style>