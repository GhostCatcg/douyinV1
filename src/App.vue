<template>
  <div id="app">
    <appHeader></appHeader>
    <router-view></router-view>
    <appFoter></appFoter>

  </div>
</template>

<script>

import Header from './components/Header'
import Footer from './components/Footer'


// 登录和下载测试
import Register from './components/Register'
import Download from './components/Download'


// import { swiper, swiperSlide } from 'vue-awesome-swiper'  

export default {

name:"app",
components: {
    appHeader: Header,
    appFoter:Footer,
    appRegister:Register,
    appDownload:Download
  }
}
</script>



<style lang="stylus" >
  li
    list-style none
  *{
        padding:0;
        margin:0;
        list-style:none;
    }
    a{
        text-decoration: none;
        color:#737373;
    }
    a:hover{
        text-decoration: none;
        color:#737373;

    }
    input{  
        /* background:none;   */
        outline:none;  
        border:none;
    }
    input:focus{   
        border:none;
    }


</style>
