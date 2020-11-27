<template>
    <div>
        <ListTop :playlist="state.datalist"></ListTop>
        <ListContent :playlist="state.datalist"></ListContent>
    </div>
</template>
<script>
    import {onMounted,reactive} from "vue"
    import {getListView} from "@/api/index.js"
    import { useRoute } from "vue-router"
    import ListTop from "@/components/ListTop.vue"
    import ListContent from "@/components/ListContent.vue"
    import store from "@/store/index.js"
    export default {
        setup(){
            const state = reactive({
                list:[],
                datalist:{
                    creator:{},
                    tracks:[]
                }
            })
            const route = useRoute()
           
            onMounted(async () => {
                let id= route.query.id
                let result = await getListView(id)
                state.datalist = result.data.playlist
                store.commit("setTracks",state.datalist.tracks)
                console.log(result)
                
                
            })
            return {state}
        },
        components:{
            ListTop,
            ListContent
        }
    }
</script>