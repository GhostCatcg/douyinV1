<template>
    <div class="mv container">
        <div class="topbar">
            <div class="qy">
                <span>区域</span>
                <ul>
                    <li v-for="item in qy">
                        {{ item }}
                    </li>
                </ul>
            </div>
            <div class="bb">
                <span>版本</span>
                <ul>
                    <li v-for="b in bb">{{ b }}</li>
                </ul>
            </div>

        </div>
        <div class="centerbar">
            <div>
                <span>全部</span>
            </div>
            <div>
                <span>最新</span>
                <span>最热</span>
            </div>
        </div>
        <div class="clearfix"></div>

        <div class="mvContent">
            <!-- <h1>mv开始</h1> -->
            <div class="box" v-for="item in mv" v-on:click="playVideo(item)">
                <div class="img">
                    <img :src="item.imgurl" alt="">
                </div>
                <div class="text">
                    <p class="title">{{item.title}}</p>
                    <p>{{item.name}}</p>
                    <p>{{item.time}}</p>
                </div>
            </div>
        </div>

         <div class="footerPage">
            <ul>
                <li class="active">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>···</li>
                <li>50</li>
                <li>></li>
            </ul>
        </div>

        <div id="videoBox" v-show="showVideo">
            <div class="vd">
                <video id="video" :src="src" controls></video>
            </div>
        </div>


    </div>
</template>

<style lang="stylus" scoped>

    #videoBox
        background-color rgba(0,0,0,.4)
        width 100%
        height 100%
        .vd
            position fixed
            // margin:0 auto;
            // left:0;
            // width 200px
            // height 200px
            // right: 0;
            margin: 0 auto;
            display: flex;
            left 0
            top 60px
            video 
                z-index 999999
                margin 0 auto




    .mv
        .topbar
            ul
                display inline-block
                li
                    display inline-block

        .topbar
            margin 20px 0 20px 0px

            div
                margin 25px 0
                span
                    // margin 0 20px
                    vertical-align middle

                ul li:nth-child(1)
                    background-color #28b2ff
                    padding 5px 10px
                    color #fff
                    // font-size 10px
                    // margin 0 20px
                    cursor pointer

                ul li   
                    margin 0 10px
                    cursor pointer
                    font-size 14px
                    // font-weight 600
                    vertical-align middle
        .centerbar
            // padding 0 60px
            margin 20px 0
            & > div
                display inline-block
            

            div:first-child

                float left
                vertical-align middle
                span    
                    font-size 30px

            div:last-child
                float right
                vertical-align middle
                line-height 42px


        .mvContent
            margin-bottom 20px
            .box
                cursor pointer
                display inline-block
                width 25%
                padding 10px
                margin 10px 0
                .img
                    overflow hidden

                    img
                        width 100%
                        height 100%
                .text
                    p
                        margin 2px 0
                        color #AFAEB0
                        font-size 15px
                    .title
                        color #000
                    p:last-child::before
                        content ""
    .footerPage
        display none
        margin 50px auto
        width 100%
        // display flex
        justify-content center
        ul
            // width 100%
            // display block

            li
                display inline-block
                margin 0 10px
                text-align center
                padding 5px 12px
                line-height 20px
                color #9a9a9a
                font-weight 100
                cursor pointer
            .active
                background-color #28b2ff
                color #fafafa


</style>


<script>
import { setTimeout } from 'timers';
export default {
    
    methods:{
        playVideo(i){
            this.showVideo = true
            var myVideo = document.querySelector("#video")
            this.src = i.videourl
            setTimeout(()=>{
                myVideo.play()
            },200)
        }
    },


    data(){

        return {
            src:"",
            showVideo:false,

            qy:["全部","内地","港台","欧美","韩国","日本",],
            bb:["全部","MV","现场","翻唱","舞蹈","影视","综艺","儿歌",],
            mv:[
                {videourl:"../../static/MV/于文华-次北固山下(标清).mp4",title:"次北固山下",name:"于文华",time:"597 2019-05-10",imgurl:"../../static/img/newimg/mv/1 (1).gif"},
                {videourl:"../../static/MV/于文华-腊八(标清).mp4",title:"腊八",name:"于文华",time:"255 2019-05-10",imgurl:"../../static/img/newimg/mv/1 (2).gif"},
                {videourl:"../../static/MV/于文华-离骚(标清).mp4",title:"离骚",name:"于文华",time:"536 2019-05-10",imgurl:"../../static/img/newimg/mv/1 (3).gif"},
                {videourl:"../../static/MV/于文华-青玉案 元夕(标清).mp4",title:"青玉案 元夕",name:"于文华",time:"737 2019-05-10",imgurl:"../../static/img/newimg/mv/1 (4).gif"},

                {videourl:"../../static/MV/张伦硕-就是现在(标清).mp4",title:"就是现在",name:"张伦硕",time:"1811 2019-05-10",imgurl:"../../static/img/newimg/mv/321.jpg"},
                {videourl:"../../static/MV/Patri Dené - Vienen a verme (From #El Chapo#).mp4",title:"Vienen a verme (From 'El Chapo')",name:"Patri Dene",time:"80 2019-05-10",imgurl:"../../static/img/newimg/mv/1 (5).gif"},
                {videourl:"../../static/MV/Nil Moliner-Déjame Escapar (Acústico) (En Directo, Estudio Medusa, Barcelona, 2019)(标清).mp4",title:"Dejame Escapar(Acustico)",name:"Nil Moliner",time:"33 2019-05-10",imgurl:"../../static/img/newimg/mv/1 (6).gif"},
                {videourl:"../../static/MV/Miriam Bryant-Du Med Dig(标清).mp4",title:"Du Med Dig",name:"Miriam Bryont",time:"251 2019-05-10",imgurl:"../../static/img/newimg/mv/1 (7).gif"},

                {videourl:"../../static/MV/Bustamante-Voy A Apagar La Luz (En Directo En El Teatro De La Ciudad Esperanza Iris - 2016)(标清).mp4",title:"Apagar la luz(feat. Gustavo Elis)",name:"Polo Nandez / Gustavo Elis",time:"39 2019-05-10",imgurl:"../../static/img/newimg/mv/123.jpg"},
                {videourl:"../../static/MV/Buika-Vete que te quiero(标清).mp4",title:"Vete que te quiero",name:"Buika",time:"58 2019-05-10",imgurl:"../../static/img/newimg/mv/1 (8).gif"},
                {videourl:"../../static/MV/Mad Season-Wake Up (Live at the RKCNDY - NYE Show, 1995)(标清).mp4",title:"Wake Up(Live at the RKCNDY - NYF)",name:"Mad Season",time:"29 2019-05-10",imgurl:"../../static/img/newimg/mv/1 (9).gif"},
                {videourl:"../../static/MV/鹿晗-鹿晗《体会（Nature）》MV Teaser (预告版)(标清).mp4",title:"鹿晗《体会（Nature）》",name:"鹿晗",time:"734 2019-05-10",imgurl:"../../static/img/newimg/mv/1 (10).gif"},

                {videourl:"../../static/MV/Playa Cuberris-Marte(标清).mp4",title:"Marte",name:"Playa Cuberris",time:"40 2019-05-10",imgurl:"../../static/img/newimg/mv/1 (11).gif"},
                {videourl:"../../static/MV/Martin James Bartlett-Schumann- Widmung, Op. 25 No. 1 (Arr. Liszt, S. 566a)(标清).mp4",title:"Schumann:Widmung.Op.25 No.1",name:"Martin James Bartlett",time:"34 2019-05-10",imgurl:"../../static/img/newimg/mv/1 (12).gif"},
                {videourl:"../../static/MV/Ricardo Ribeiro-Jarrod Cagwin-João Paulo Esteves da Silva-Depois de Ti (with João Paulo Esteves da Silva & Jarrod Cagwin)(标清).mp4",title:"Depois de Ti(with Joao paulo Esteves)",name:"Ricardo Ribeiro / Jarrod Cagwin",time:"16 2019-05-10",imgurl:"../../static/img/newimg/mv/1 (13).gif"},
                {videourl:"../../static/MV/Virgul-Difícil Demais(标清).mp4",title:"Diffcil Demais",name:"Virgul",time:"37 2019-05-10",imgurl:"../../static/img/newimg/mv/1 (14).gif"},

                {videourl:"../../static/MV/Run River North-Casina(标清).mp4",title:"Casina",name:"Run River North",time:"27 2019-05-10",imgurl:"../../static/img/newimg/mv/1 (15).gif"},
                {videourl:"../../static/MV/Tungevaag & Raaban-A7S-Try Again (feat. A7S)(标清).mp4",title:"Tru Again(feat. A7S)",name:"Tungevaag & Raaban/A7S",time:"597 2019-05-10",imgurl:"../../static/img/newimg/mv/1 (16).gif"},
                {videourl:"../../static/MV/Jubel-On The Beach(标清).mp4",title:"On The Beach",name:"Jubel",time:"59 2019-05-10",imgurl:"../../static/img/newimg/mv/1 (17).gif"},
                {videourl:"../../static/MV/张可盈-一生中最爱(标清).mp4",title:"一生中最爱",name:"张可盈",time:"339 2019-05-10",imgurl:"../../static/img/newimg/mv/1 (18).gif"},


            ]
        }
    }
}
</script>
