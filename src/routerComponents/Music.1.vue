<template>
    <div class="audio">

        <div class="musicContent">

        </div>

        <div class="musicFooter">
            <audio id="audio" :src="musiclist.url"></audio>
            <div style="height:40px;weight:20px;"></div>
            <div class="audioButton">
                <span class="pre" v-on:click="premusic()">
                    <img src="../../static/newimg/play/上一曲.png" alt="">
                </span>
                <span class="play" v-on:click="musicplay()">
                    <img :src="playimg" alt="">
                </span>
                <span class="next" v-on:click="nextmusic()">
                    <img src="../../static/newimg/play/上一曲.png" alt="">
                </span>
                <div class="seekbar">
                    <div class="seektitle">
                        <div class="musicinfo">
                            <span class="music">{{musiclist.music}}</span>
                            <!-- <span class="hx"></span> -->
                            <span class="artist">{{musiclist.name}}</span>
                        </div>
                        <div class="time">
                            <span class="timeStart">{{startTime}}</span> /
                            <span class="timeEnd">{{endTime}}</span>
                        </div>
                    </div>
                    <div class="seeklen">
                        <p class="fg"></p>
                        <p class="bg"></p>

                    </div>
                </div>
                <span class="circulation sm">
                    <img src="../../static/newimg/play/单曲循环.png" alt="">
                </span>
                <span class="volume sm" v-on:click="volume">
                    <img src="../../static/newimg/play/音量.png" alt="">
                </span>
                <span class="down sm">
                    <img src="../../static/newimg/play/下载.png" alt="">
                </span>
                <span class="share sm">
                    <img src="../../static/newimg/play/分享.png" alt="">
                </span>
                <span class="list sm">
                    <img src="../../static/newimg/play/播放列表 (1).png" alt="">
                </span>
            </div>
        </div>
        
    </div>
</template>


<script>



export default ({

    methods: {
        musicplay(){
            var myAudio = document.querySelector("#audio")
            if(this.playFlag){
                myAudio.pause()
                this.playimg="../../static/newimg/play/播放.png"
            }else{
                myAudio.play()
                this.playimg="../../static/newimg/play/暂停.png"
            }
            this.playFlag = !this.playFlag
        },

        nextmusic(){
            console.log("下一曲")
        },
        premusic(){
            console.log("上一曲")
        },
        volume(){
            var myAudio = document.querySelector("#audio")
            
            if(this.volumeFlag){
                myAudio.volume = 0
                this.volumeFlag = false
            }else {
                this.volumeFlag = true
                myAudio.volume = this.musicVolume
            }

        },
        present(){
            var myAudio = document.querySelector("#audio")
            var length = myAudio.currentTime/myAudio.duration*100
            document.querySelector(".fg").style.width = length + "%"

            var startMiute = Math.floor(myAudio.currentTime/myAudio.duration * myAudio.duration / 60)
            var startSecond = Math.round(myAudio.currentTime/myAudio.duration * myAudio.duration) - startMiute * 60
            if(startSecond < 10){
                startSecond = "0" + startSecond
            }else if (startSecond > 60){
                startSecond = "0"
            }


            var endMinute = Math.round(myAudio.duration / 60)
            var endSecond = Math.round(myAudio.duration) - endMinute * 60
            if(endSecond < 10){
                endSecond = "0" + endSecond
            }

            this.startTime = startMiute + " : " + startSecond            
            this.endTime = endMinute + " : " + endSecond


            // console.log(myAudio.duration)
        }
    },
    data(){
        return{
            musiclist :{
                url:"../../static/aqzy.mp3",
                name:"陈奕迅",
                music:"爱情转移"
            },


            playFlag : false,
            playimg:"../../static/newimg/play/播放.png",

            startTime:"",
            endTime:"",

            musicVolume:0.8,
            volumeFlag:true,

        }
    },
    mounted : function(){
        setInterval(() => {
            this.present()
        },700)

    }

})

</script>


<style lang="stylus" scoped>

@import '../assets/css/Songer'
// @import "../assets/css/music";



</style>
