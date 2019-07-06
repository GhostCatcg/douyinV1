<template>
    <div class="Download">
        <div class="downpcbg"  v-on:click="showHide(false)" styl="display:none;">
            <div id="down">
                <div class="title">
                    <span>豆印音乐</span>
                </div>
                <div class="online">
                    <span>1.0.0版本</span>
                    <span>崭新上线</span>
                </div>
                <div class="downapp">
                    <div>
                        <a href="">下载PC端</a>
                    </div>
                    <div>
                        <a href="">下载移动端</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['show'],
    methods:{
        showHide(val){

            this.$emit('success',false);

            // this.$emit('success',false);
        }
    },
}
</script>

<style scoped>
.downpcbg{
    background-color: rgba(0,0,0,.5);
    top:0;
    bottom: 0;
    right:0;
    left: 0;
    z-index: 10000;
    position:fixed;
    width: 100%;
}
#down{
    width: 100%;
    letter-spacing: 2px;
}
#down > div{
    width: 100%;
    text-align: center;
}

#down .title{
    width: 100%;
    margin:90px auto 30px;
    font-size: 4rem;
    color:#f1f1f1;
    letter-spacing: 20px;
}

#down .online{
    color:#f1f1f1;
    letter-spacing: 5px;
    font-size: 2rem;
    font-family:"Times New Roman",Georgia,Serif;
}
#down .online span{
    margin:0 30px;
}
#down .downapp{
    margin-top:50px;
}
#down .downapp div a{
    color:#f1f1f1;
}
#down .downapp div{
    cursor: pointer;
    display: inline-block;
    padding: 32px 70px;
    border: 2px solid #f1f1f1;
    border-radius: 98px;
    color: #f1f1f1;
    font-size: 3.5rem;
    margin: 0 30px;
}

</style>
