<template>
    <div>
        <appSlideshow></appSlideshow>
        <appHomeContent></appHomeContent>

    </div>
</template>


<script>

import Slideshow from '../components/Slideshow'
import HomeContent from '../components/HomeContent'


export default {
    name:"homepage",
    components:{
        appSlideshow:Slideshow,
        appHomeContent:HomeContent
    }
}

</script>
