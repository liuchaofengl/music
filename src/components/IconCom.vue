<template>
    <div class="Icon-items">
        <div class="icon-item">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-meirituijian"></use>
            </svg>
            <span>每日推荐</span>
        </div>
        <div class="icon-item">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-yinle"></use>
            </svg>
            <span>歌单</span>
        </div>
        <div class="icon-item">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sirenfm-copy-copy"></use>
            </svg>
            <span>私人FM</span>
        </div>
        <div class="icon-item">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-paihangbang"></use>
            </svg>
            <span>排行榜</span>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .Icon-items{
        margin-top:.2rem;
        display: flex;
        justify-content: space-around;
        .icon-item{
            display: flex;
            align-items: center;
            flex-direction: column;
           
        }
        .icon{
            width:.6rem;
            height:.6rem;
        }
        span{
            font-size: .2rem;
            padding: .1rem;
        }

    }
</style>