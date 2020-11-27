<template>
    <div class="searchTop">
        <div class="searchTopNav">
            <div  class="back" @click="$router.go(-1)">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shang"></use>
                </svg>
            </div>
            <div class="right">
                <input type="text" v-model="inputvalue" :placeholder="placeholder" @keydown.enter="saveKey">
            </div>
          
        </div>
        <div class="history" v-show="songs.length == 0">
            <div class="historyLeft">历史</div>
            <div class="historyRight" >
               <div class="keywordItem"  v-for="(item,i) in keybody" :key="i" @click="serchHistory(item)">{{item}}</div>
            </div>
        </div>
        <!-- 歌单详细 -->
         <div class="contentList" v-show="songs.length != 0">
            <div class="listTitle">
                <div class="listTitleLeft">
                    <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-bofang"></use>
                    </svg>
                    <div class="title">
                        <span class="maintitle">播放全部</span>
                        <span class="badtitle">({{songs.length}})首</span>
                    </div>
                </div>
            
            </div>
            <div class="list">
                <div class="playItem" v-for="(item,i) in songs" :key="i">
                    <div class="left">
                        <div class="index">{{i+1}}</div>
                        <div class="content">
                            <div class="title">{{item.name}}</div>
                            <div class="author">
                                <span class="tag">榜单</span>
                                <span>{{item.album.name}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <svg class="icon" aria-hidden="true" @click="setPaly(item,i)">
                            <use xlink:href="#icon-bofang"></use>
                        </svg>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-liebiao"></use>
                        </svg>
                    </div>
                </div>
            </div>
    </div>
           

    </div>
</template>
<script>
import { getSearch } from "@/api/index.js"

export default {
    data(){
        return {
            placeholder:"陈奕迅",
            keybody:[],
            inputvalue:'',
            songs:[]
        }
    },
    beforeMount(){
        this.keybody = localStorage.keybody ? JSON.parse(localStorage.keybody):[]
        
    },
    methods:{
        
      async saveKey(){
            this.keybody.push(this.inputvalue)
            // 去重处理
            this.keybody = Array.from(new Set(this.keybody))
            if(this.keybody.length>10){
                this.keybody = this.keybody.splice(this.keybody.length-10,this.keybody.length)
            }
            localStorage.keybody = JSON.stringify(this.keybody) 
            let result = await getSearch(this.inputvalue)
            this.songs = result.data.result.songs
            console.log(result)

        },
        // 搜索历史的点击事件
        serchHistory(item){
            this.inputvalue = item;
            this. saveKey()
            
        },
        // 搜索列表的播放方法
        setPaly(item,i){
            item.al= item.album;
            item.al.picUrl = item.album.artist.img1v1Url
            console.log(item)
            this.$store.commit('pushSetTracks',item)
            this.$store.commit('setPalyCurrentIndex',this.$store.state.tracks.length-1)
        }
    }
}
   
</script>
<style lang="less" scoped>
    .searchTop{
        width: 7.5rem;
        height:calc(100vh - 1.2rem);
        padding: 0 .4rem;
        .searchTopNav{
            position: fixed;
            top:0;
            left:0;
            display: flex;
            width:100%;
            height:1.2rem;
            align-items: center;
            .icon{
                width:.5rem;
                height:.5rem;
            }
            .right{
                padding: 0 0 0 .4rem;
                flex:1;
                input{
                     border: none;
                    outline: none;
                    border-bottom:1px solid #666 ;
                    width:100%;
                    height: .5rem;
                }
                
            }

        }
        .history{
            display: flex;
            align-items: center;
            margin-top:1.2rem;
            .historyLeft{
                width:1.8rem;
                height:0.8rem;
                font-weight: 900;
                line-height: 0.8rem;
            }
            .historyRight{
                color: #666;
                display: flex;
                flex-wrap: wrap;
               .keywordItem{
                   background-color: #eee;

                   height: 0.8rem;
                   padding:0 .2rem;
                   border-radius: .4rem;

                   line-height:0.8rem;
                   margin: 0.2rem .1rem;

               } 
            }
        }
        .contentList{
            width:7.5rem;
            margin-top:.4rem;
            position: fixed;
            top:1.2rem;
            bottom:1.2rem;
            overflow: scroll;
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
    }
</style>