<template>
    <div class="HomeContent">
        <div class="recom">
            <p class="text-center">精彩推荐</p>
            <div class="col-sm-6 col-md-6 text-right">
                <a href="#">
                    <img src="../../static/img/recommend/1230257.jpg" alt="">
                </a>
            </div>
            <div class="col-sm-6 col-md-6 text-left">
                <a href="#">
                    <img src="../../static/img/recommend/1229723.jpg" alt="">
                </a>
            </div>
            <div class="clearfix"></div>
        </div>

        <div class="newmusic">
            <p class="title">新歌首发</p>
            <div>
                <span class="col-sm-offset-2 col-sm-2 play">播放全部</span>
                <div class="col-sm-7 navbar">
                    <span class="n-active">最新</span>
                    <span>内地</span>
                    <span>港台</span>
                    <span>欧美</span>
                    <span>韩国</span>
                    <span>日本</span>
                </div>
                <div class="clearfix"></div>
            </div>
            <div class="music-main">

                <div :class="item.class" v-for="(item,index) in musicList" :key="index">
                    <div v-on:click="playMusic(item)" style="cursor:pointer;">
                        <img :src="item.imgurl" alt="">
                        <div class="mess">
                            <p>{{item.music}}</p>
                            <p class="by">{{item.name}}</p>
                            <span class="time">{{item.time}}</span>
                        </div>
                    </div>
                    <div :class="item.html"></div>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
        <div class="music" v-show="showAudio">
            <div class="ad">
                <audio id="audio" controls :src="src"></audio>
            </div>
        </div>
    </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
    methods:{
        playMusic(i){
            this.showAudio = true
            var myAudio = document.querySelector("#audio")
            this.src = i.url
            setTimeout(()=>{
                myAudio.play()
            },200)
        }
    },

    data(){
        return {

            play:true,
            src:"",
            showAudio:false,

            musicList:[
                {   name:"容祖儿",
                    music:"Pretty Crazy",
                    time:"03:15",
                    imgurl:"../../static/img/newmusic/画板-2_03.gif",
                    class:"col-sm-3 col-md-3 col-md-offset-2",
                    url:"../../static/music/容祖儿 - Pretty Crazy.mp3"
                },
                {
                    name:"Tiesto / SWACQ",  
                    music:"Pretty Crazy",
                    time:"02:46",
                    imgurl:"../../static/img/newmusic/画板-2_05.gif",
                    class:"col-sm-3 col-md-3",
                    url:"../../static/music/Tiësto _ SWACQ - Party Time.mp3"
                },
                {
                    name:"周深",  
                    music:"落花《燕阳春》电视剧插曲",
                    time:"03:15",
                    imgurl:"../../static/img/newmusic/画板-2_07.gif",
                    class:"col-sm-3 col-md-3",
                    html : "clearfix",
                    url:"../../static/music/周深 - 落花 (V0).mp3"
                },
                {
                    name:"Ellie Goulding / Diplo / Red...",  
                    music:"Close To Me",
                    time:"03:11",
                    imgurl:"../../static/img/newmusic/画板-2_12.gif",
                    class:"col-sm-3 col-md-3 col-md-offset-2",
                    url:"../../static/music/Ellie Goulding _ Diplo _ Red Velvet - Close To Me (Red Velvet Remix).mp3"
                },
                {
                    name:"井柏然 / 宋佳 / 马思纯 / 秦",  
                    music:"一场游戏一场梦《风中有朵》",
                    time:"02:14",
                    imgurl:"../../static/img/newmusic/画板-2_13.gif",
                    class:"col-sm-3 col-md-3",
                    url:"../../static/music/井柏然 _ 宋佳 _ 马思纯 _ 秦昊 _ 陈妍希 - 一场游戏一场梦 (V0).mp3"
                },
                {
                    name:"Sarah Connor",  
                    music:"Vincent",
                    time:"04:42",
                    imgurl:"../../static/img/newmusic/画板-2_14.gif",
                    class:"col-sm-3 col-md-3",
                    
                    html : "clearfix",
                    url:"../../static/music/Sarah Connor - Vincent (akustisch).mp3"
                },
                {
                    name:"Sara Bareilles / John Lege",  
                    music:"A Safe Place to Land",
                    time:"04:29",
                    imgurl:"../../static/img/newmusic/画板-2_18.gif",
                    class:"col-sm-3 col-md-3 col-md-offset-2",
                    
                    url:"../../static/music/Sara Bareilles _ John Legend - A Safe Place to Land.mp3"
                },
                {
                    name:"Calvin Harris",  
                    music:"I'm Not Alone",
                    time:"03:21",
                    imgurl:"../../static/img/newmusic/画板-2_19.gif",
                    class:"col-sm-3 col-md-3",
                    url:"../../static/music/Calvin Harris - I'm Not Alone (CamelPhat Remix).mp3"
                },
                {
                    name:"Trey Songz / Chris Brown",  
                    music:"Chi Chi(teat, Chris Brown)",
                    time:"02:48",
                    imgurl:"../../static/img/newmusic/画板-2_20.gif",
                    class:"col-sm-3 col-md-3",
                    html : "clearfix",
                    url:"../../static/music/Trey Songz _ Chris Brown - Chi Chi(feat. Chris Brown) (Croatia Squad Remix_Explicit).mp3"
                },
               
 


            ],
        }
    }
}
</script>


<style lang="stylus" scoped>
.music
    .ad
        width 100%
        // padding 0 20%
        audio
            position fixed
            left 0 
            bottom 20px
            z-index 99999



    
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
input[type="number"]{
    -moz-appearance: textfield;
}
/* 轮播图区域 */
.slideshow img{
    width: 100%;
}

/* 音乐推荐区域 */
.recom{
    margin:10px 0;
    margin-bottom: 80px;
}

.recom p{
    font-size: 4rem;
    padding:20px 0;
    font-weight: 500;
    letter-spacing: 5px;
}
.recom img{
    width: 500px;
}

/* 新歌首发 */
.newmusic{
    background-color: #F3F3F3;
    padding-bottom: 50px;
}
.newmusic .title{
    text-align: center;
    font-size: 3.5rem;
    letter-spacing: 5px;
    padding:40px 0 20px;
    font-weight:900;
}
.newmusic .play{
    padding:0 20px;
    font-size: 1.5rem;
    border:1px solid #D0D0D0;
    cursor: pointer;
    width: 102px;
    font-weight: 700px;
    height: 50px;
    line-height: 50px;
}

.newmusic .navbar{
    display: inline-block;
    text-align: center;
    vertical-align: sub;
}
.newmusic .navbar span{
    margin:0 30px;
    font-size: 2rem;
    line-height: 50px;
    font-weight: 500;
    cursor: pointer;
}

.newmusic .navbar span.n-active{
    color:#3EC584;
}



.music-main .col-sm-3{
    padding:5px 10px;
    margin-top:40px;
}
.music-main .col-sm-3 > div{
    padding:10px 0;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
}
.music-main .mess{
    display: inline-block;
    vertical-align: middle;
}
.music-main .mess p{
    padding-left:10px;
}
.music-main .mess span{
    position: absolute;
    right:20px;
    top:45px;
}
.music-main .mess .by,
.music-main .mess .time{
    color:#B0B0B0;
}


</style>


