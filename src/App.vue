<template>
  <div>
     <router-view/>
    <Playcontrol></Playcontrol>
  </div>
</template>
<script>
import Playcontrol from "@/components/Playcontrol.vue"
  export default{
    components:{
      Playcontrol
    }
  }
</script>

<style lang="less">
    *{
      margin:0;
      padding:0;
      box-sizing: border-box;
      font-family: '微软雅黑';

    }
    .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
    a{
      color:black;
    }
</style>
