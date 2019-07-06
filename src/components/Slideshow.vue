<!-- The ref attr used to find the swiper instance -->
<template>
  <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="console.log('test')">
    <!-- slides -->
    <swiper-slide>
      <img src="../../static/img/slideshow/1.png" alt="">

    </swiper-slide>
    <swiper-slide>
      <img src="../../static/img/slideshow/2.png" alt="">

    </swiper-slide>
    <swiper-slide>
      <img src="../../static/img/slideshow/3.png" alt="">

    </swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
</template>

<script>

  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          autoplay: {
                    stopOnLastSilde: true,
                },
                loop: true, // 循环模式选项
            
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                },
                
                // 如果需要前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }, 
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      // console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
  }
</script>