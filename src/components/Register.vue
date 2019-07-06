<template>

    <div class="Register">
        <div class="black" v-on:click.self="shide(false)" styl="display: none;">
            <div id="register" style="z-index: 100000;">
                <div class="title">
                    <span>账</span>
                    <span>号</span>
                    <span>登</span>
                    <span>录</span>
                </div>
                <p class="error ename" style="display: none;">请输入正确的手机号</p>
                <div class="name">
                    <img src="../../static/img/register/1.png" alt="">
                    <div>
                        <p>账号</p>
                        <p>NAME</p>
                    </div>
                    <input type="text" placeholder="昵称/手机号/邮箱">
                    <span class="cw ncw" style="display: none;">!</span>
                    <span class="dl ndl" style="display: none;">√</span>
                </div>
                <p class="error epass" style="display: none;">密码与账号不匹配</p>
                <div class="pass">
                    <img src="../../static/img/register/2.png" alt="">
                    <div>
                        <p>密码</p>
                        <p>PASS</p>
                    </div>
                    <input type="password" placeholder="12-20位字母数字密码">
                    <span class="cw pcw" style="display: none">!</span>
                    <span class="dl pdl" style="display: none;">√</span>

                </div>
                <div class="forget">
                    <input type="checkbox" name="" id="re">
                    <label for="re">记住密码</label>
                    <span><a href="">忘记密码？</a></span>
                </div>
                <div class="enter">
                    <span>
                        <img src="../../static/img/register/3.png" alt="">
                        <span class="zc"></span>
                    </span>
                    <div class="wb">
                            <img src="../../static/img/register/4.png" alt="">
                            <img src="../../static/img/register/5.png" alt="">
                            <img src="../../static/img/register/6.png" alt="">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    methods:{
        shide(val){
            this.$emit("re",false)
        }
    }
}
</script>


<style scoped>

#register{
    position: fixed;
    top:100px;
    left:0;
    right:0;
    width: 600px;
    height: 350px;
    margin:0 auto;
    background-color: #fff;
    border-radius: 20px;
    padding:10px;
}

.black{
    background-color: rgba(0,0,0,.5);
    top:0;
    bottom: 0;
    right:0;
    left: 0;
    z-index: 10000;
    position:fixed;
}

#register .error {
    position: absolute;
    top:115px;
    right:96px;
    margin:0;
    color:#ED4B3D;
}
#register .epass{
    top:183px;
}

#register div{
    margin:0 auto;
    text-align: center;
}
#register .title{
    margin:40px 0;
    margin-bottom: 30px;
    font-size: 2.5rem;
    font-weight: 600;
}
#register .title span::before{
    content: "·";
    font-size: 4rem;
    color:#5039FF;
    vertical-align: middle;
    position: relative;
    left:-5px;
}
#register .title span:nth-child(4)::after{
    content: "·";
    font-size: 4rem;
    color:#5039FF;
    vertical-align: middle;
    position: relative;
    left:5px;
}
#register .title span{
    margin:0 5px;
}
#register .pass{
    margin-top:20px;
}
#register .pass,
#register .name{
    position: relative;
}
#register .pass img,
#register .pass div,
#register .name img,
#register .name div{
    display: inline-block;
    vertical-align: middle;
    margin-right:20px;
    font-size: 2rem;
}
#register .name img,
#register .pass img{
    width: 40px;
    height: 40px;
    margin-right:10px;
}
#register .name div p:nth-child(2),
#register .pass div p:nth-child(2){
    font-size: 11px;
}
#register .pass div p,
#register .name div p{
    margin:0;
}

#register .pass input,
#register .name input{
    border:1px solid #D0D0D0;
    border-radius: 10px;
    height: 35px;
    width: 300px;
    padding:4px 5px;
    padding-right:20px;
}
#register .name .dl,
#register .pass .dl,
#register .pass .cw,
#register .name .cw{
    color:#fff;
    padding:2px 9px;
    border-radius: 50%;
    position: absolute;
    right:90px;
}
#register .pass .cw,
#register .name .cw{
    background-color: #EA3323;
    top:9px;
}
#register .name .dl,
#register .pass .dl{
    background-color: #6CE776;
    top:9px;
}

#register .forget{
    margin-top:10px;
}
#register .forget span{
    margin-left:130px;
    color:#fff;
    background-color: #4C34FF;
    padding:2px 5px;
    border-radius: 5px;
}
#register .forget span a{
    color:#fff;
}
#register .forget input{
    margin-left:117px;
    vertical-align: middle;
}
#register .forget label{
    vertical-align: middle;
    margin-bottom: 0;
    color:#CCCCCC;
}

#register .enter{
    margin:10px 0;
}
#register .enter span img{
    vertical-align: none;
    margin:0 auto;
    width: 300px;
}
#register .enter span{
    cursor: pointer;
    text-align: center;
    position: relative;
    left:61px;
}
#register .enter .zc{
    position: relative;
    top:38px;
    left:-100px;
    background-image: url("../../static/img/register/7.png");
    width: 120px;
    height: 90px;
    display: inline-block;
    cursor: pointer;
}
#register .enter .wb{
    text-align: center;
}

#register .enter .wb img{
    width: 100%;
    height: 100%;
    width: 40px;
    height: 40px;
    margin:0 10px;
    cursor: pointer;
}


</style>
