<template>
    <div class='banner'>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"
                v-for='(item,index) of list'
                :key='index'
                >
       
                  <img :src="item.picUrl" alt="">
                </div>
               
            </div>
         <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
import  Swiper from 'swiper' //引入swiper
import  ApiConfig from 'common/api/apiconfig.js'
export default {
    data(){
        return {
            list :[]
        }
    },
    methods:{
        initswiper(){
         new Swiper ('.swiper-container', {
                loop: true,// 循环模式选项
                autoplay:true
                })
        },
        initdata(){
            let url=ApiConfig.bannerApi
            // Axios.get(url,{params:{us:wangyi,ps:wanger}})
            this.$axios.get(url)
            .then((data)=>{
                
              this.list=data.data.slider
              //在上一次数据更新结束并且页面加载完成执行
              this.$nextTick(()=>{
                   this.initswiper()
              })
              console.log(this.list)
            })
        }
    },
    created(){
        this.initdata()
    },
    mounted(){
       
    }

}
</script>
<style lang="less" scoped>
@import '../../../../node_modules/swiper/dist/css/swiper.min.css';
@import '~common/style/index.less';
.banner{
    .swiper-container{
        .w(375);
        .h(180);
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>
