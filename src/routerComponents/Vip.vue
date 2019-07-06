<template>
<div class="vip container">
    <div class="headerbox">
        <div class="leftBox col-md-7">
            <img src="../../static/img/vip/zx1.png" alt="">
        </div>
        <div class="rightBox col-md-4 col-md-offset-1">
            <div class="headerLogo">
                <img src="../../static/img/head/header.png" alt="">
            </div>
            <p class="dl">
                立即登录
            </p>
            <div class="tj">
                <span>10</span>
                <div>
                    <div>
                        <span>原价</span>
                        <span class="red15">15元</span>
                    </div>
                    <p>元/月</p>
                </div>
            </div>
            <p class="kt">开通VIP，立享优惠</p>

            <div class="footerText">
                <p>多项特权服务，畅想音乐生活</p>
                <p>尊享高品质高音乐生活</p>
            </div>
        </div>
            <div class="clearfix"></div>
    </div>

    <div class="wechat">
        <div class="left">
            <img src="../assets/images/wechat.jpg" alt="">
        </div>
        <div class="right">
            <p class="title">会员收费说明</p>
            <p class="content">由于公司业务初步上线期间，后期会更新我们新的业务网站，如果在操作试听中遇到什么问题，及时跟我们的客服联系</p>
            <p class="tel"> 豆先生：0571-8697-2071</p>
        </div>
        
    </div>

    <div class="privilege">  
        <div class="title">
            会员特权
        </div>
        <div  class="imgbox">
            <img src="../../static/img/vip/1.png" alt="">
        </div>
    </div>

    <div class="allPrivilege">
        <div class="title">
            所有特权
        </div>
        <div class="imgbox">
            <img src="../../static/img/vip/sf.png" alt="">
        </div>
    </div>

    <div class="bottomPrivilege">
        <div class="title">
            所有特权
        </div>
        <div  class="imgbox">
            <img src="../../static/img/vip/footer.png" alt="">
        </div>
    </div>
</div>
</template>



<style lang="stylus" scoped>

    .wechat
        &>div
            display inline-block
            width 49%
        
        .left
            img
                width 100%
        .right 
            .title
                text-align center
                font-size 40px
                font-weight 700
            .content
            .tel
                font-size 20px
                
    .privilege
    .allPrivilege
    .bottomPrivilege
        .title
            background-color #DADADA
            padding 10px 0
            line-height 20px
            text-align center
            font-size 16px
            color #979797
            margin-bottom 10px
    .imgbox
        overflow hidden
        img
            width 100%
    .bottomPrivilege
        margin-bottom 20px
    .vip 
        .headerbox
            margin 60px auto
        
        .leftBox
        .rightBox
            display inline-block
            vertical-align middle

        .leftBox
            // height 200px
            background-color #333
            padding 0
            margin 0

            img 
                width 100%
        
        .rightBox
            text-align center
            box-shadow 0 1px 20px #DDD
            padding 20px 50px 

            .tj 
                margin 10px 0;
                vertical-align middle
                &>span
                    font-size 50px
                    color #000
                    vertical-align middle

                &>div
                    display inline-block
                    vertical-align middle
                    font-size: 13px;
                    height: 56px;
                    text-align: left;
                    padding-top: 3px;
                    padding-left: 7px;

                    .red15
                        color red
                        text-decoration:line-through; 

                    span 
                        line-height 25px

                    p
                        margin 0

            .dl
                margin 0 90px
                margin-top 10px
                color #FF7474
                border 1px solid #FF7474
                padding 5px 10px 
                border-radius 20px
                cursor pointer

            .kt
                height 50px
                background-color #F98A8A
                font-size 20px
                padding 10px 20px
                color #fff
                border-radius 30px
                font-weight 100
                margin 0 20px
                cursor pointer
            
            .footerText
                color #666
                margin 20px 0 0 0

</style>
