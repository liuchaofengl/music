<template>
    <div class="topNav">
        <div class="topLft">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liebiao"></use>
            </svg>
        </div>
        <div class="topCenter">
            <span class="mid" @click="$router.push('/me')">我的</span>
            <span class="mid active">发现</span>
            <span class="mid">云村</span>
            <span class="mid">视频</span>
        </div>
        <div class="topButtom">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sousuo"></use>
            </svg>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .topNav{
        width:7.5rem;
        height:0.8rem;
        display: flex;
        justify-content: space-between;
        padding:0 0.2rem;
        margin-top:.2rem;
        .icon{
            width:0.4rem;
            height:0.4rem;

        }
        .topCenter{
            width:5rem;
            display: flex;
            justify-content: space-around;
        }
        .active{
            font-weight:700
        }
       
    }
   
</style>