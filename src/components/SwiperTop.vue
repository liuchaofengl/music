<template>
       <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in img" :key="index">
                    <img :src="item.pic" alt="" >
                </div>
        
            </div>
             <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
    
   
        </div>
</template>

<script>
import {getBanners} from "@/api/index.js"
import Swiper from 'swiper';
import 'swiper/css/swiper.css'
    export default {
        data(){
      return {
        img:[
            {pic:require("../assets/im1.jpg")},
            {pic:require("../assets/im2.jpg")},
            {pic:require("../assets/im3.jpg")}
        ]
      }
  },
  async mounted(){
      var mySwiper = new Swiper('.swiper-container', {
           
           loop: true, // 循环模式选项
    
        // 如果需要分页器
        pagination: {
        el: '.swiper-pagination',
        },
    
        });

        //获取后台数据
        const result = await getBanners(2)
        this.img = result.data.banners
  }

}
</script>

<style lang="less">
        .swiper-container {
    width: 7.1rem;
    height: 2.5rem;
    // border-radius: .2rem;
    .swiper-wrapper img{
      width:100%;
    }
}  
</style>