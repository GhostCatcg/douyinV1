<template>
    <div class="ListPage">
        
        <div class="main">
            <div class="container">
                <div class="row">
                    <div class="left-mune col-md-2 col-md-offset-">
                        <p>巅峰榜</p>
                        <ul>
                            <li><a class="left-active" href="">流行音乐榜</a></li>
                            <li><a href="">热歌榜</a></li>
                            <li><a href="">新歌榜</a></li>
                            <li><a href="">MV榜</a></li>
                        </ul>
                        <p>地区榜</p>
                        <ul>
                            <li><a href="">内地榜</a></li>
                            <li><a href="">港台榜</a></li>
                            <li><a href="">欧美榜</a></li>
                            <li><a href="">韩国榜</a></li>
                            <li><a href="">日本榜</a></li>
                            <li><a href="">香港本地榜</a></li>
                        </ul>
                        <p>特色榜</p>
                        <ul>
                            <li><a href="">抖音排行榜</a></li>
                            <li><a href="">网络歌曲榜</a></li>
                            <li><a href="">电音榜</a></li>
                            <li><a href="">影视金曲榜</a></li>
                            <li><a href="">腾讯音乐人原创榜</a></li>
                            <li><a href="">K歌金曲榜</a></li>
                            <li><a href="">说唱榜</a></li>
                        </ul>
                        <p>全球榜</p>
                        <ul>
                            <li><a href="">美国公告牌榜</a></li>
                            <li><a href="">美国itunes榜</a></li>
                            <li><a href="">韩国Ment榜</a></li>
                            <li><a href="">英国UK榜</a></li>
                            <li><a href="">日本公信榜</a></li>
                            <li><a href="">香港电台榜</a></li>
                            <li><a href="">香港商台榜</a></li>
                            <li><a href="">台湾Hito中文榜</a></li>
                        </ul>
                    </div>

                    <div class="right-content col-md-10">
                        <div class="title">
                            <span class="title-name">流行音乐榜单</span>
                            <span class="time"> 2019-05-03</span>
                            <span class="rule"> 榜单规则</span>
                        </div>
                        <div class="button">
                            <span class="right-active">播放全部</span>
                            <span>添加到</span>
                            <span>下载</span>
                            <span>批量操作</span>
                            <span>评论(274818)</span>
                        </div>
                        <div class="music-list">

                            <ul>
                                <input type="checkbox" name="all" id="all">
                                <label for="all">全选</label>
                                
                                <li v-for="(item,index) in music" v-on:click="playMusic(item)" style="cursor:pointer;">
                                    <input type="checkbox" name="select-1" id="1">
                                    <span class="sx">{{++ index }}</span>
                                    <span class="newmusic">{{item.name}}</span>
                                    -
                                    <span>{{item.music}}</span>
                                    <span class="time">{{item.time}}</span>
                                </li>
                            
                                
                            </ul>
                            
                        </div>
                        <div class="page">
                            <span><</span>
                            <span class="page-active">1</span>
                            <span>2</span>
                            <span>3</span>
                            <div>...</div>
                            <span>94</span>
                            <span>></span>
                        </div>
                    </div>
                </div>
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
        return{
            n : 2,

            src:"",
            showAudio:false,
            music:
            [      
                    {
                        "name":"王琪",
                        "music":"万爱千恩",
                        "time":"5:22",
                        "url":"../../static/list/王琪 - 万爱千恩 (V0).mp3"
                    },
                    {
                        "name":"夏婉安",
                        "music":"拒绝",
                        "time":"3:33",
                        "url":"../../static/list/夏婉安 - 拒绝 (V0).mp3"
                    },
                    {
                        "name":"靖哥哥",
                        "music":"好好珍惜现在",
                        "time":"4:24",
                        "url":"../../static/list/靖哥哥 - 好好珍惜现在 (V0).mp3"
                    },
                    {
                        "name":"任然",
                        "music":"鹦鹉",
                        "time":"3:53",
                        "url":"../../static/list/任然 - 鹦鹉 (V0).mp3"
                    },
                    {
                        "name":"翟潇闻",
                        "music":"情深深雨濛濛(Live)",
                        "time":"1:28",
                        "url":"../../static/list/翟潇闻 - 情深深雨濛濛 (Live) (V0).mp3"
                    },
                {
                        "name":"东方晴儿",
                        "music":"格局",
                        "time":"4:24",
                        "url":"../../static/list/东方晴儿 - 格局 (V0).mp3"
                    },
                {
                        "name":"童丹",
                        "music":"宽心歌",
                        "time":"3:08",
                        "url":"../../static/list/童丹 - 宽心歌 (V0).mp3"
                    },
                {
                        "name":"威仔、阿夏",
                        "music":"忘川河彼岸花(新版)",
                        "time":"3:07",
                        "url":"../../static/list/威仔 _ 阿夏 - 忘川河彼岸花 (新版) (V0).mp3"
                    },
                {
                        "name":"ANU",
                        "music":"ANU",
                        "time":"3:33",
                        "url":"../../static/list/ANU - ANU (V0).mp3"
                    },
                    {
                        "name":"望海高歌",
                        "music":"想你的日子好苦好长",
                        "time":"4:28",
                        "url":"../../static/list/望海高歌 - 想你的日子好苦好长 (V0).mp3"
                    },
                    {
                        "name":"秦博",
                        "music":"把悲伤留给自己(经典怀旧版)",
                        "time":"4:30",
                        "url":"../../static/list/秦博 - 把悲伤留给自己 (经典怀旧版) (V0).mp3"
                    },
                    {
                        "name":"姜玉阳",
                        "music":"狼说",
                        "time":"3:34",
                        "url":"../../static/list/姜玉阳 - 狼说 (V0).mp3"
                    },
                    {
                        "name":"名诀",
                        "music":"山水不相逢",
                        "time":"2:42",
                        "url":"../../static/list/名决 - 山水不相逢 (V0).mp3"
                    },
                    {
                        "name":"小洲",
                        "music":"义气",
                        "time":"3:05",
                        "url":"../../static/list/小洲 - 义气 (V0).mp3"
                    },
                    {
                        "name":"洛天依",
                        "music":"古城一侧",
                        "time":"3:57",
                        "url":"../../static/list/洛天依 - 古城一侧 (V0).mp3"
                    },
                    {
                        "name":"庄心妍",
                        "music":"惩罚我",
                        "time":"3:56",
                        "url":"../../static/list/庄心妍 - 惩罚我 (V0).mp3"
                    },
                    {
                        "name":"龙梅子",
                        "music":"蝶恋花愿为花更美【月亮河之恋电影片尾曲】",
                        "time":"4:34",
                        "url":"../../static/list/龙梅子 - 蝶恋花·愿为花更美 (V0).mp3"
                    },
                    {
                        "name":"张玮、王韵韵",
                        "music":"纯白 Duet【夜空中最闪亮的星电视剧插曲】",
                        "time":"3:08",
                        "url":"../../static/list/张玮 _ 王韵韵 - 纯白 Duet (V0).mp3"
                    },
                    {
                        "name":"蒋瑶佳",
                        "music":"重游【夜空中最闪亮的星电视剧插曲】",
                        "time":"3:42",
                        "url":"../../static/list/蒋瑶佳 - 重游 (V0).mp3"
                    },
                    {
                        "name":"张玮",
                        "music":"无常【夜空中最闪亮的星电视剧插曲】",
                        "time":"4:36",
                        "url":"../../static/list/张玮 - 无常 (V0).mp3"
                    },
                    {
                        "name":"郁可唯、曾一鸣",
                        "music":"一心【封神演义电视剧主题曲】",
                        "time":"4:30",
                        "url":"../../static/list/郁可唯 _ 曾一鸣 - 一心 (V0).mp3"
                    },
                    {
                        "name":"王韵韵",
                        "music":"TALK【夜空中最闪亮的星电视剧插曲】",
                        "time":"2:17",
                        "url":"../../static/list/王韵韵 - TALK (1) (V0).mp3"
                    }
                
            ]
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


body{
    background-color: #f6f6f6;
}
.main{
    margin:20px 0;
}
.main .left-mune{
    border:1px solid #EFEFEF;
    padding:0;
    padding-top:5px;
}
.main .left-mune p{
    font-size: 1.7rem;
    font-weight: 550;
    padding:5px 10px;
    position: relative;
}
.main .left-mune p::after{
    content:"";
    display: inline-block;
    width: 85%;
    border: 0.5px solid #ECECEC;
    height: 1px;
    position: absolute;
    bottom: -5px;
    right:16px;
}

.main .left-mune ul li a{
    display: inline-block;
    width: 100%;
    font-size: 1.3rem;
    padding:7px 14px;
    color:#383132;
}
.main .left-mune ul li a.left-active{
    background-color: #2C28F3;
    color:#fff;
}



.main .right-content .title{
    margin:8px 0;
    margin-right:4px;
    font-size:1.2rem;
    font-weight: 600;
    padding: 2px;
}
.main .right-content .title span{
    margin-right:5px;
}
.main .right-content .title .title-name{
    font-size: 2.2rem;
    vertical-align: sub;
}
.main .right-content .button{
    margin:20px 0 30px;
    font-size: 1.3rem;
    font-weight: 500;
}
.main .right-content .button span{
    border:1px solid #D3D3D3;
    padding:10px 25px;
    color:#393233;
    cursor: pointer;
    margin-right:4px;
}
.main .right-content .music-list{
    background-color: #FAFAFA;
}
.main .right-content .music-list ul {
    padding:5px 10px;
}
.main .right-content .music-list ul label{
    font-size: 1.5rem;
    vertical-align: middle;
    margin-left:5px;
}
.main .right-content .music-list ul li{
    padding:20px 0;
    border-bottom:1px solid #F1F1F1;
}
.main .right-content .music-list ul li input{
    padding:2px;
    color:#008AF1;
    background-color: #fff;
    vertical-align: middle;
}
.main .right-content .button span.right-active{
    background-color:#2C28F3;
    color:#fff;
}
.main .right-content .music-list ul li span{
    margin-right:6px;
    font-size: 2rem;
    color:#333;
    vertical-align: middle;
}
.main .right-content .music-list,
.main .right-content .music-list ul li span.sx{
    color:#A2A3AD;
    font-size: 2rem;
    vertical-align: middle;
}
.main .right-content .music-list ul li span.newmusic::before{
    content: "new";
    color:#fff;
    background-color: #764AF6;
    font-size: 11px;
    border-radius: 3px;
    margin:0 5px;
    vertical-align: middle;
}
.main .right-content .music-list ul li span.time{
    float: right;
    color:#A4A3A6;
    font-size: 1.8rem;
    vertical-align: middle;
}

/* 翻页 */
.main .page {
    display: flex;
    justify-content:center;
    margin:20px;
}
.main .page span{
    border-radius: 50%;
    padding:10px;
    background-color: #EAEAEA;
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 20px;
    text-align: center;
    color:#000;
    margin:0 7px;
    vertical-align: middle;
    cursor: pointer;
}
.main .page div{
    display: inline-block;
    vertical-align: middle;
    line-height: 40px;
}
.main .page span.page-active{
    background-color: #7A5CFA;
}


</style>
