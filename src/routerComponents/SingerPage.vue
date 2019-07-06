<template>
    <div class="Songer">

        <div class="naber">
            <div class="hot">
                <span>热门</span>
                <ul>
                    <li v-for="item in az">
                        {{ item }}
                    </li>
                </ul>
            </div>

            <div class="position">
                <span>全部</span>
                <ul>
                    <li v-for="pos in site">{{ pos }}</li>
                </ul>
            </div>

            <div class="sex">
                <span>全部</span>
                <ul>
                    <li v-for="s in sex">{{s}}</li>
                </ul>
            </div>

            <div class="genre">
                <span>全部</span>
                <ul>
                    <li v-for="a in genre">{{a}}</li>
                </ul>
            </div>
        </div>

        <div class="starImg row" >

            <div class="col-md-2 col-lg-2" :class="i.class" v-for="i in img">
                <div class="circle">
                    <img :src="i.imgurl" alt="">
                </div>
                <span>{{i.name}}</span>
            </div>
        </div>

        <div class="gs">
            <div v-for="s in songer">
                <span>{{s}}</span>
            </div>
        </div>

        <div class="footerPage">
            <ul>
                <li class="active">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>···</li>
                <li>299</li>
                <li>></li>
            </ul>
        </div>

    </div>
</template>
<script>
export default{
    methods: {
        ab(){
            var azArr=[]
            for (var j = 0; j < 26; j++) {
                var str = "A";
                azArr.push(String.fromCharCode(str.charCodeAt() + j))
            }
            azArr.push("#")
            return azArr
        },
    },
    data(){

        return {
            az:this.ab(),
            site:["内地","港台","欧美",'日本','韩国','其他'],
            sex:["男",'女','组合'],
            genre:["流行",'嘻哈','摇滚','电子','民谣','R&B','民歌','轻音乐','爵士','古典','乡村','蓝调'],
            img:[
                {name:"陈雪凝",imgurl:"../../static/img/newimg/songer/1.jpg",class:"col-md-offset-1"},
                {name:"薛之谦",imgurl:"../../static/img/newimg/songer/2.jpg"},
                {name:"周杰伦",imgurl:"../../static/img/newimg/songer/3.jpg"},
                {name:"林俊杰",imgurl:"../../static/img/newimg/songer/4.jpg"},
                {name:"G.E.M 邓紫棋",imgurl:"../../static/img/newimg/songer/5.jpg"},
                {name:"毛不易",imgurl:"../../static/img/newimg/songer/6.jpg",class:"col-md-offset-1"},
                {name:"Alan Walker",imgurl:"../../static/img/newimg/songer/7.jpg"},
                {name:"李荣浩",imgurl:"../../static/img/newimg/songer/8.jpg"},
                {name:"胡夏",imgurl:"../../static/img/newimg/songer/9.jpg"},
                {name:"张敬轩",imgurl:"../../static/img/newimg/songer/10.jpg"},
                ],
            songer:["陈奕迅","王源","庄心妍","许嵩","汪苏泷",
                    "贺一航","李玉刚","半阳","白小白","张靓颖",
                    "吴亦凡","王力宏","样宗纬","于文文","BEYOND",
                    "梁博","二歌","Toylor Swift(泰勒斯威夫特)","李宇春","摩登兄弟",
                    "张学友","陈粒","张杰","胡66","曲肖冰",
                    "黄子韬","赵雷","广东雨神","BINGBANG","五月天",
                    "刀郎","华晨宇","鹿晗","孙露","烟鬼组合",
                    "佛教歌曲","张宇","周笔畅","简弘亦","A-Lin",
                    "黑龙","莫文蔚","金志文","BLACKPINK","龙梅子",
                    "许巍","范玮琪","刘德华","蔡健雅","郑源",
                    "冯提莫","宋冬野","韩红","易烊千玺","张信哲",
                    "周兴哲","音阈诗听","丁当","降央卓玛","朴树",
                    "Olly Murs","孙燕姿","刘若英","张韶涵","袁维娅",
                    "梁静茹","艾辰","蒋家驹","Sia(希雅)","胡彦斌",
                ]
        }
    }

}

</script>

<style lang="stylus" scoped>

    // @import "../css/Songer.styl";
    *
        padding 0
        margin 0
        box-sizing border-box

    .Songer
        margin-top 30px
    .naber
        margin 20px 0 30px 200px

        div
            margin 25px 0
            span
                background-color #28b2ff
                padding 5px 10px
                color #fff
                font-size 10px
                margin 0 20px
                cursor pointer
            ul li   
                margin 0 10px
                cursor pointer
                font-size 14px
                // font-weight 600

    .naber
        margin-top 30px
    .naber ul
    .hot ul
        display inline-block
        li
            list-style none
            display inline-block
    // .Songer
        // text-align center
    .starImg
        margin 30px 0
        padding 0 120px
        // display flex
        // justify-content center
        text-align center
        &>div
            padding 10px
            margin 0 10px
            margin-bottom 30px
            text-align center
            text-align center

            .circle
                width 120px
                height 120px
                background-color #333
                border-radius 50%
                margin 10px auto
                overflow hidden
            img     
                display block
                height 100%
            span
                text-align center
    .gs 
        padding 0 0 0 120px
        margin 0 20px
        div
            display inline-block
            width 19%
            padding 4px 10px
            // text-align center

            span 
                cursor pointer
                font-size 12px
                font-weight 600


    .footerPage
        margin 50px auto
        width 100%
        display flex
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

