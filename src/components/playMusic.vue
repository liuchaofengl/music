<template>
    <div class="playMusic">
        <div class="bg" :style="{backgroundImage:`url(${playDatail.al.picUrl})`}"></div>
        <div class="playTop">
            <div class="back" @click="$emit('back')">
                <svg class="icon" aria-hidden="true" >
                    <use xlink:href="#icon-shang"></use>
                </svg>
              
            </div>
            <div class="title">
                <marquee behavior="scroll" direction="left">{{playDatail.al.name}}</marquee>
            </div>
            <div class="share">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-fenxiang"></use>
                </svg>
            </div>
        </div>
        <div class="playContent" v-show="!isIrlyc">
            <img class="need" :class="{active:!paused}" src="@/assets/needle-ab.png" alt="">
            <img class="circle" src="@/assets/circle.png" alt="">
            <img class="cirimg" :src="playDatail.al.picUrl" alt="">
        </div>
        <div class="playIrlyc" v-show="isIrlyc" ref="playIrlyc">
         
             <p :class="{active:(currentTime*1000 >=item.times&&currentTime*1000<item.next)}"  v-for="(item,i) in $store.getters.newLyric" :key="i">{{item.lyric}}</p>
            
        </div>
        <div class="playProgress"></div>
        <div class="playFooter">
             <svg class="icon" aria-hidden="true" >
                <use xlink:href="#icon-xunhuan"></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click="goplay(-1)">
                <use xlink:href="#icon-icon-test"></use>
            </svg>
           <svg v-if="paused" class="icon" aria-hidden="true" @click="play" >
                <use xlink:href="#icon-bofang"></use>
            </svg>
             <svg v-else  class="icon" aria-hidden="true" @click="play">
                <use xlink:href="#icon-zantingtingzhi1"></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click="goplay(1)">
                <use xlink:href="#icon-xiayishou"></use>
            </svg>
            <svg class="icon" aria-hidden="true" >
                <use xlink:href="#icon-liebiao"></use>
            </svg>
            
        </div>
    </div>
</template>
<script>
    import { mapState } from "vuex"
    export default {
        props:['playDatail',"paused","play"],
        data(){
            return {
                isIrlyc:true
            }
        },
        mounted(){
            console.log(this.$store.state.Lyric)
            
        },
        computed:{
            ...mapState(['currentTime','tracks','palyCurrentIndex'])
        },
        watch:{
            currentTime:function (newValue) {
              
            }
        },
        methods:{
            goplay(num){
                console.log(this.tracks)
                console.log(this.palyCurrentIndex)
                let count = this.palyCurrentIndex + num
                if(count<0){
                    count = this.tracks.length-1
                }else if(count>this.tracks.length-1){
                    count= 0 
                }
                this.$store.commit('setPalyCurrentIndex',count)
            }
        }
      
    }
</script> 
<style lang="less">
    .playMusic{
        position: fixed;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        .bg{
            position: absolute;
            left:0;
            top:0;
            width:100vw;
            height:100vh;
            filter:blur(5px);
            background-size: auto 100%;
            background-position: center;

        }
        .playTop{
            margin-top:.2rem;
            position: absolute;
            left:0;
            right:0;
            display: flex;
            justify-content: space-between;
            width:7.5rem;
            height:1.2rem;
            padding:0 .2rem;
            marquee{
                width:5rem;
            }
            .icon{
                fill:#ccc;
            }

        }
        .playContent{
            position: absolute;
            width:7.5rem;
            height: 7.5rem;
            top:1rem;
            left:0rem;
            .need{
                position: absolute;
                left:45%;
                width:3rem;
                height: auto;
                transform:rotate(0deg);
                transform-origin:.3rem 0;
                z-index:20;
                transition:all 1s;

            }
             .need.active{
                position: absolute;
                left:45%;
                width:3rem;
                height: auto;
                transform:rotate(11deg);
                transform-origin:.3rem 0;
                z-index:20;
                transition:all 1s;

            }
            .circle{
                position: absolute;
                width:4rem;
                height:4rem;
                left:calc(50% - 2rem);
                top:4rem;
            }
            .cirimg{
                width:2.6rem;
                height:2.6rem;
                position: absolute;
                border-radius: 2rem;
                left:calc(50% - 1.3rem);
                top:4.78rem;
            }
        }
        .playFooter{
            width:7.5rem;
            height:1.5rem;
            position: absolute;
            left:0;
            bottom:0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding:0 .1rem;
            .icon{
                fill: #fff;
            }
        }
        .playIrlyc{
            position: absolute;
            width:7.5rem;
            height:8rem;
            overflow: scroll;
            top:calc(50% - 4rem);
            text-align: center;
            left:0rem;
            padding: .2rem 0rem;
            color:#ccc;
            .active{
                color:red;
            }

            
        }


    }
</style>