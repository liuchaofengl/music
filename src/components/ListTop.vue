<template>
    <div class="listTop">
        <img :src="playlist.coverImgUrl" alt="" class="bg">
        <div class="listTopNav">
            <div class="back" @click="$router.go(-1)">
                <!-- 返回 -->
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shang"></use>
                </svg>
                <div class="title">
                    歌单
                </div>

            </div>
            <div class="search">
                <svg class="icon" aria-hidden="true" @click="$router.push('/searchview')">
                    <use xlink:href="#icon-sousuo"></use>
                </svg>
                <svg class="icon list-right" aria-hidden="true">
                    <use xlink:href="#icon-liebiao"></use>
                </svg>
            </div>
        </div>
        
        <div class="listContent">
            <div class="listLeft">
                <img :src="playlist.coverImgUrl" alt="">
                <div class="count">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-bofang"></use>
                    </svg>
                    <span>{{filterCount(playlist.playCount)}}</span> 
                </div>
            </div>
            <div class="listRight">
                <div class="listTitle">
                    {{playlist.name}}
                </div>
                <div class="midListTitle">
                    <img :src="playlist.creator.backgroundUrl" alt="">
                    <span>{{playlist.creator.nickname}}</span>
                </div>
                <div class="dircationList">
                    {{playlist.description}}
                </div>
            </div>
        </div>

        <div class="iconLists">
            <div class="iconList">
                 <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-pinglun"></use>
                </svg>
                <span>{{playlist.commentCount}}</span> 
            </div>
            <div class="iconList">
                 <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-iconfontzhizuobiaozhun43"></use>
                </svg>
                <span>{{playlist.playCount}}</span> 
            </div>
            <div class="iconList">
                 <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-fenxiang"></use>
                </svg>
                <span>{{playlist.shareCount}}</span> 
            </div>
            <div class="iconList">
                 <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-xuanze"></use>
                </svg>
                <span>多选</span> 
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        props:["playlist"],
  
        methods:{
            filterCount(count){
                let res = 0
                if(count>=10000000){
                    res = (count/10000000).toFixed(2) + "亿"
                   
                }
                if(count>=10000){
                    res = (count/10000).toFixed(2) + "万"
                   
                }
                return res
            }
        }


    }
</script>

<style  lang="less" scoped >
    .listTop{
        width:7.5rem;
        padding:0 .2rem;
        margin-top:.2rem;
        .bg{
            width:7.5rem;
            height:4.5rem;
            filter:blur(40px);
            z-index:-1;
            position: fixed;
            top:0;
            right:0;
        }
        .icon{
            width:.4rem;
            height:.4rem;
        }
        .title{
            margin-left:.25rem;
        }
        .list-right{
            margin-left: .25rem;
        }
        .listTopNav{
            display:flex;
            justify-content: space-between;

            .back,.search{
                display:flex;
                justify-content: space-between;
            }
        }
        .listContent{
            display: flex;
            margin-top:.3rem;
            .listLeft{
                img{
                    width:2.5rem;
                    height:2.5rem;

                }
                position: relative;
                .count{
                    display: flex;
                    position: absolute;
                    right:0.2rem;
                    top:0.2rem;
                    span{
                        margin-left:.1rem;
                        color:#ccc;
                    }
                    .icon{
                        fill:#ccc;
                    }
                }

            }
            .listRight{
                margin-left:.2rem;
                
                .listTitle{
                    color:#ccc;
                }
                .midListTitle{
                    margin-top:.3rem;
                    img{
                        width:.6rem;
                        height:.6rem;
                        border-radius: .3rem;
                    }
                    span{
                        margin-left:.2rem;
                    }
                }
                .dircationList{
                    overflow: hidden;
                    text-overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp:2;
                    -webkit-box-orient:vertical
                }

            }
        }
        .iconLists{
            margin-top:.3rem;
            display: flex;
            justify-content: space-around;
            .iconList{
                align-items: center;
                display: flex;
                flex-direction: column;
                .icon{
                    width:0.48rem;
                    height:0.48rem;
                    fill:#fff;
                }
                span{
                    color:#fff;
                }
            }
        }
    }
</style>