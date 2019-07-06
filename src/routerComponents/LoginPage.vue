<template>
    
    <div class="LoginPage">
        
    <div id="signIn">
        <div class="main">
            <div class="title">
                <i class="glyphicon glyphicon-earphone"></i>
                <span class="p">手机注册</span>
            </div>

            <div class="content">
                <label for="phone">*手机注册:</label>
                <input id="phone" type="number">
                <br>
                <label for="dx">*短信验证:</label>
                <input id="dx" type="number">
                <br>
                <label for="rename">*真实姓名:</label>
                <input id="rename" type="number">
                <br>
                <label for="idn">*身份证号:</label>
                <input id="idn" type="number">
                <br>
                <label for="passwd">*登录密码:</label>
                <input id="passwd" type="number">
                <br>
                <label for="qr">*确认密码:</label>
                <input id="qr" type="number">
                <br>
                <label for="sex">*性别:</label>
                <input id="sex" type="radio" name="sex" >男
                <input id="sex" type="radio" name="sex" >女
                <br>
                <input id="sf" type="checkbox">
                <label for="sf">
                    我已认真阅读并同意
                    <a href="">用户协议</a>
                    <a href="">隐私政策</a>
                </label>

                <p class="ok">确认注册</p>
            </div>
            
            
        </div>
    </div>
    </div>

</template>


<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"]{
  -moz-appearance: textfield;
}
#signIn {
    height: 650px;
    width: 100%;
    /* padding:50px 0; */
    /* background-image: url("../img/web/bg.png"); */
    background-image: url("../../static/img/web/bg.png");
    background-repeat: no-repeat;
    background-size: cover;
}

#signIn .main{
    margin:0 auto;
    width: 50%;
    height: 100%;
    background-color: #fff;
    border:1px solid #463AF7;
    text-align: center;
}
#signIn .main input{
    background-color: #F3F3F3;
    padding: 3px 5px;
}

#signIn .main #dx,
#signIn .main #rename{
    width: 40%;
}

.main .content {
    margin:0 auto;
    width: 40%;
    text-align: left;
}
.main .title{
    margin:20px auto 30px;
    font-size: 3rem;
    color:#7D62D8;
}
.main .title i{
    font-size: 2.5rem;
    /* vertical-align: middle; */
    margin-right:30px;
}

.main .content label{
    margin-top:20px;
}
.main .content .sf{
    margin-top:10px;
}
.main .content .sf a{
    color:#8CDDFE;
}

.main .content .ok{
    padding:5px 2px;
    background-color: #44C8FE;
    color:#fff;
    font-size: 2rem;
    width: 90px;
    text-align: center;
    margin:20px auto;
}

</style>
