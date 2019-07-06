

<template>
    <div class="Song">

        <div class="topbar">

            <div class="yz">
                <div class="border">
                    <p>语种</p>
                    <li v-for="y in yz" v-bind:key="y.id"><span>{{y}}</span></li>
                </div>
                
            </div>

            <div class="lp">
                <div class="border">
                    <p>流派</p>
                    <li  v-for="y in lp" v-bind:key="y.id"><span>{{y}}</span></li>
                </div>
                
            </div>

            <div class="zt">
                <div class="border">
                    <p>主题</p>
                    <li v-for="y in zt"><span>{{y}}</span></li>
                </div>
                
            </div>

            <div class="xq">
                <div class="border">
                    <p>心情</p>
                    <li v-for="y in xq"><span>{{y}}</span></li>
                </div>
                
            </div>

            <div class="cj">
                <div class="border">
                    <p>场景</p>
                    <li v-for="y in cj"><span>{{y}}</span></li>
                </div>
                
            </div>

        </div>

        <div class="centerBar">
            <div class="left">
                <span>国语 X</span>
            </div>
            <div class="right">
                <span class="tj">推荐</span>
                <span>最新</span>
            </div>
            <div class="clearfix"></div>
        </div>

        <div class="content">
            <div class="box">
                <div class="con" v-for="c in content">
                    <div class="img">
                        <img :src="c.imgurl" alt="">
                    </div>
                    <div class="text">
                        <p>{{c.title}}</p>
                        <p>{{c.name}}</p>
                        <p>播放量：{{c.play}}万</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="downpc">
            <p>查看更多内容，请下载客户端</p>
            <div>
                <span>立即下载</span>
            </div>
        </div>
    </div>
</template>



<style lang="stylus" scoped>
    * 
        padding 0
        margin 0
        box-sizing border-box

    li
        list-style none
    .Song
        .centerBar
            margin 20px auto 
            padding 0 80px

            div 
                display inline-block
                span    
                    // display inline-block
                    padding 7px 15px
                    border 1px solid #ddd
                    font-size 15px
                    cursor pointer

            .left
                float left 
                left 0
            .right 
                float right
                right 0
                .tj
                    background-color #009DF2
                    color #fff
        .topbar
            margin 40px 0
            width 100%
            // text-align center
            padding 0 60px
            display flex
            justify-content center

            & > div           
                width 21%
                display inline-block
                padding 8px 20px
                // marign 0 10px

                .border 
                    border 1px solid #efefef
                    padding 10px 20px
                    p
                        // font-size 17px
                        margin-bottom 10px
                        text-align left
                        color #ccc
                        // padding-left 20px
                  
            li
                display inline-block
                width 32%
                text-align left
                margin 2px 0
                font-size 15px
                span
                    cursor pointer
            
            .yz 
                width 16%
                .border
                
                    li 

                        width 50%
                    li:nth-child(2)
                        span
                            background-color #31C27C
                            color #ffffff
                            // width 40px
                            padding 2px 4px
                            cursor pointer


        .content


            .box
                display flex
                justify-content center
                color #000
                flex-wrap: wrap;
                padding 0 60px
                
                .con
                    width 20%
                    color #000
                    // padding 0 20px
                    padding 0 20px
                    margin-bottom 20px
                    .img
                        text-align center
                        margin 10px 0
                        img
                            width 100%
                            border-radius 3px
                            cursor pointer
                    .text 
                        color #B5ABAA
                        p   
                            margin 4px 0
                        p:nth-child(1)
                            color #000
    .downpc
        text-align center
        margin 40px 0
        p
            color #000
            font-size 17px

        div 
            margin 30px 0
            span
                // width 80px
                // height 30px
                padding 10px 40px
                border-radius 40px
                background-color #009DF2
                color #fff
                font-size 20px
                cursor pointer


</style>

<script>
export default {
    
    data(){

        return {
            yz:["国语","英语","韩语","粤语","日语","更多",],
            lp:["流行","轻音乐","摇滚","民谣","R&B","嘻哈","电子","古典","更多",],
            zt:["ACG","经典","网络歌曲","影视","KTC热歌","儿歌","中国风","古风","更多",],
            xq:["伤感","安静","快乐","治愈","励志","甜蜜","寂寞","宣泄","思念",],
            cj:["睡前","夜店","学习","运动","开车","约会","工作","旅行","更多",],

            content:[
                {title:"燃向江湖：我纵芜湖掉，万里一长歌",name:"王酥酥",play:"1.7",imgurl:"../../static/img/newimg/song/mv-1_03.gif"},
                {title:"青色烟雨，独韵盼君归",name:"北鹤",play:"2",imgurl:"../../static/img/newimg/song/mv-1_05.gif"},
                {title:"京都烟云录|古风里的前尘往事",name:"韩夜哥",play:"3.9",imgurl:"../../static/img/newimg/song/mv-1_07.gif"},
                {title:"古风倾言：春灼满地雁归迟",name:"几森",play:"5.3",imgurl:"../../static/img/newimg/song/mv-1_09.gif"},
                {title:"剧情古风：不知君此曲，曾断几人肠",name:"谢景行很爱篱诗",play:"1.5",imgurl:"../../static/img/newimg/song/mv-1_11.gif"},

                {title:"如果思念有声音",name:"QQ音乐官方歌单",play:"20642.3",imgurl:"../../static/img/newimg/song/mv-1_18.gif"},
                {title:"任贤齐 滚石精选集",name:"今晚煲个机",play:"28.8",imgurl:"../../static/img/newimg/song/mv-1_19.gif"},
                {title:"张震岳 滚石精选集",name:"塞纳河边拉二胡",play:"4",imgurl:"../../static/img/newimg/song/1.jpg"},
                {title:"莫文蔚 滚石精选集",name:"万年蹦野迪",play:"15.3",imgurl:"../../static/img/newimg/song/mv-1_20.gif"},
                {title:"五月天 滚石精选集",name:"进度条加载中",play:"16.3",imgurl:"../../static/img/newimg/song/mv-1_21.gif"},

                {title:"地名之歌：带有民谣味的城市",name:"木焓",play:"3.2",imgurl:"../../static/img/newimg/song/mv-1_26.gif"},
                {title:"刘若英 滚石精选集",name:"今晚煲个机",play:"19.9",imgurl:"../../static/img/newimg/song/mv-1_27.gif"},
                {title:"林忆莲 滚石精选集",name:"万年蹦野迪",play:"27.5",imgurl:"../../static/img/newimg/song/mv-1_28.gif"},
                {title:"梁静茹 滚石精选集",name:"进度条加载中",play:"16.1",imgurl:"../../static/img/newimg/song/mv-1_29.gif"},
                {title:"成语儿歌：让小朋友愉快学习",name:"木焓",play:"1.5",imgurl:"../../static/img/newimg/song/mv-1_30.gif"},

                {title:"李宗盛 滚石精选集",name:"万年蹦野迪",play:"39.1",imgurl:"../../static/img/newimg/song/mv-1_36.gif"},
                {title:"《如果可以这样爱》现代都市剧原声",name:"薄荷凉",play:"54.5",imgurl:"../../static/img/newimg/song/mv-1_37.gif"},
                {title:"花若怜·落在谁的指尖",name:"北鹤",play:"64.6",imgurl:"../../static/img/newimg/song/mv-1_38.gif"},
                {title:"故梦终有意，曲中醉古里",name:"几森",play:"23.7",imgurl:"../../static/img/newimg/song/mv-1_39.gif"},
                {title:"淡雅古风|梦醒时分别眷恋",name:"南柯梦",play:"60",imgurl:"../../static/img/newimg/song/mv-1_40.gif"},
            ]
        }
    }
}
</script>