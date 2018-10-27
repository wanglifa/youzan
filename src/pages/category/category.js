import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import './category.css'
import 'css/common.css'
import Foot from 'components/Foot.vue'

let app = new Vue({
    el: '#app',
    data: {
        topList: null,
        current: 0,
        rankData: null,
        subListData: null,
        currentId: 800
    },
    components: {
        Foot
    },
    created: function(){
        this.getTopList()
        this.getrank(800,0)
    },
    methods: {
        getTopList(){
            axios.post(url.topList)
            .then((res)=>{
                this.topList = res.data.lists
            })
        },
        getrank(id,index){
            this.current = index,
            this.currentId = id;
            if(id === 800){
                axios.post(url.rank)
                .then((res)=>{
                    this.rankData = res.data.data
                })
            }else{
                this.getsubList(id)
            }
            
        },
        getsubList(id){
            axios.post(url.subList,{
                id
            })
            .then((res)=>{
                this.subListData = res.data.data;
            })
        }
    },
    filters: {
        priceNum(value){
            let newValue = value-Math.floor(value)
            if(newValue===0){
                return value+'.00'
            }else{
                return value + '0'
            }
        }
    }
})