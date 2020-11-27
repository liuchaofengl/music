<template>
  <div class="home">
      <!-- 头部组件 -->
      <TopNav></TopNav>
      <SwiperTop></SwiperTop>
      <IconCom></IconCom>
      <!-- 发现好歌单 -->
      <MusicList></MusicList>
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/TopNav.vue'
import SwiperTop from "@/components/SwiperTop.vue"
import IconCom from "@/components/IconCom.vue"
import MusicList from "@/components/MusicList.vue"

export default {
  name: 'Home',
  components: {
    TopNav,
    SwiperTop,
    IconCom,
    MusicList
  
  }
  
  
}
</script>
<style lang="less" scoped>
    .d1{
      width:3.75rem;
      height:3.75rem;
      background: red;
    }
    .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }

  
</style>
