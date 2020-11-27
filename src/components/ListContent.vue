<template>
    <div class="contentList">
        <div class="listTitle">
            <div class="listTitleLeft">
                  <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-bofang"></use>
                </svg>
                <div class="title">
                    <span class="maintitle">播放全部</span>
                    <span class="badtitle">({{playlist.tracks.length}})首</span>
                </div>
            </div>
            <div class="listTitleRight">
               
                    <span>+收藏({{filterValue(playlist.playCount)}})</span> 
               
            </div>
        </div>
        <div class="list">
            <div class="playItem" v-for="(item,i) in playlist.tracks" :key="i">
                <div class="left">
                    <div class="index">{{i+1}}</div>
                    <div class="content">
                        <div class="title">{{item.name}}</div>
                        <div class="author">
                            <span class="tag">榜单</span>
                            <span>{{item.al.name}}</span>
                        </div>
                    </div>
                </div>
                <div class="right">
                      <svg class="icon" aria-hidden="true" @click="setPalyCurrentIndex(i)">
                        <use xlink:href="#icon-bofang"></use>
                    </svg>
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-liebiao"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapState,mapMutations} from "vuex"
    export default{
    
        props:['playlist'],
        mounted(){
            console.log(this.playlist);
        },
        setup(){
          
           function filterValue(count){
               let res = 0
               if(count>=100000000){
                   res = count/100000000
                   res = res.toFixed(2) + "亿"
               }
               if(count>=10000){
                   res = count/10000
                   res = res.toFixed(2) + "万"
               }
               return res
           }
           return {
                filterValue
           }
        },
        methods:{
             //播放音乐
           ...mapMutations(['setPalyCurrentIndex']),
        }
    }
</script>

<style lang="less">
    .contentList{
        width:7.5rem;
       
        .listTitle{
            display: flex;
            border-top-left-radius: 0.2rem;
            border-top-right-radius: 0.2rem;
             background-color: #fff;
           
            justify-content: space-between;
            .listTitleLeft{
                display: flex;
                align-items: center;
                margin-left:.3rem;
                .icon{
                    width:.4rem;
                    height:.4rem;
                }
                .title{
                    margin-left:.2rem;
                    .maintitle{
                        font-weight: 700;
                    }
                    .badtitle{
                        font-size: .2rem;
                        margin-left:.1rem;
                    }
                }
            }
            .listTitleRight{
                background-color: orangered;
                height:.9rem;
                line-height: .9rem;
                border-radius: .3rem;
                padding: 0 .2rem;
                margin-right:.3rem;
                 margin-top:.17rem;
               
            }
        }
        .list{
            .playItem{
                display: flex;
                justify-content: space-between;
                height:1rem;
                .left{
                    display: flex;
                    align-items: center;
                    margin-left: .2rem;
                    .content{
                         margin-left: .2rem;
                        .title{
                            font-size:.3rem;
                            font-weight: 900;
                            color:#000;
                        }
                        .tag{
                            font-size:.2rem;
                            color:orangered;
                            border:1px solid orangered;
                        }
                        .author{
                            color:#666;  
                        }
                    }
                }
                .right{
                    margin:0 .3rem;
                    .icon{
                        margin: 0 .1rem;
                    }
                }
            }
        }
        
    }
</style>