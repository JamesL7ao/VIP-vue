<template>
  <section id="app">
    <div v-if="this.$store.state.home">
      <div class="header" v-show="msg">
        <div>
            <p>新会员满38元包邮</p>
            <p>品牌特卖，天天都有3折封顶</p>
        </div>
        <span class="close" @click="close()">×</span>
      </div>
      <div class="second">
        <div>
          <router-link to="/register">登录</router-link>
        </div>
        <div>
          <form>
            <router-link to="/search">
               <input type="text" placeholder="搜索品牌或商品" />
            </router-link>
          </form>
        </div>
        <div @click="change(false)">
          <router-link to="/classifivation"><i></i></router-link>
        </div>
      </div>
      <nav :id="msgN">
        <ul @click="changeNav()">
          <li><router-link to="/dailyRecommendation"><span>今日推荐</span></router-link></li>
          <li><router-link to="/shop"><span>最后疯抢</span></router-link></li>
          <li><router-link to="/fashion"><span>时尚</span></router-link></li>
          <li><router-link to="/beauty"><span>美妆</span></router-link></li>
          <li><router-link to="/mother"><span>母婴</span></router-link></li>
          <li><router-link to="/application"><span>家电</span></router-link></li>
          <li><router-link to="/more"><span>更多</span></router-link></li>
        </ul>
      </nav>
    </div>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: 'app',
  data () {
    return{
      msg:true,
      msgN:'homeNav',
    }
  },
  methods:{
    close(){
      this.msg=false;
    },
    change(n){
       this.$store.commit('nohome',n)
    },
    oppisite(n){
       this.$store.commit('oppisite',n)
    },
    changeNav(){
    	this.msgN='';
    }
  },
  mounted(){
    // console.log(document.documentElement.clientWidth);
    document.documentElement.style.fontSize=document.documentElement.clientWidth/10+'px';
    
  }
}
</script>
  
<style>
  .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
  }
  #homeNav>ul>li:nth-of-type(1) span{
  	color: #d34ba8;
  }
  svg#triangle{
    font-size: 20px;
    color: #222;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  svg#home{
    font-size: 28px;
    color: #222;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  html{
    font-size: 37.5px;
  }
  .router-link-active span{
    color: #d34ba8;
  }
  div.header{
    position: relative;
    width: 100%;
    height: 1.73rem;
    background:url(assets/images/vips.png) no-repeat;
    -webkit-background-size: 100%;
    background-size: 100%;
  }
  div.header span.close{
    position: absolute;
    top: -0.31rem;
    left: 0;
    width: 0.7rem;
    height: 1.2em;
    font-size: 0.8rem;
    color: hsla(0,0%,100%,.6);
    font-weight: 700;
    display: block;
  }
  div.header>div{
      width: 100%;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
  }
  div.header p:nth-of-type(1){
    color: #fff;
    font-size: 0.42667rem;
    padding: 0 2.85333rem 0 2.82667rem;
  }
  div.header p:nth-of-type(2){
    color: #fff;
    font-size: 0.32rem;
    padding: 0 2.85333rem 0 2.82667rem;
  }
  nav{
    height: 0.90667rem;
  }
  nav>ul{
    display: table;
    width: 100%;
    list-style: none;
    padding-left: 0;
  }
  nav>ul li{
    display: table-cell;
    text-align: center;
    background-color: #f9f9fa;
  }
  nav>ul li a{
   float: left;
   height: 0.90667rem;
   line-height: 0.5rem;
   width: 100%;
   text-decoration: none;
  }
  nav>ul li span{
    width: 100%;
    display: inline-block;
    height: 0.90667rem;
    line-height: 0.90667rem;
    text-align: center;
    font-size: 0.34667rem;
    color: #585c64;
    vertical-align: middle;
  }
  nav>ul:before{
    content:'';
    display: block;
    clear: both;
  }
  div.genuineasale img{
    width: 100%;
  }
  div.second:after{
    content: '';
    display: block;
    clear: both;
  }
  div.second form a{
    display: block;
  }
  div.second>div:nth-of-type(1){
    float: left;
    height: 1.17333rem;
    line-height: 1.17333rem;
    width: 1.17333rem;
  }
  div.second>div:nth-of-type(1)>a{
    display: block;
    text-decoration: none;
    font-size: 0.34667rem;
    color: #585c64;
    text-align: center;
  }
  div.second>div:nth-of-type(2){
    float: left;
    height: 1.17333rem;
    line-height: 1.17333rem;
    width: 7.5rem;
  }
  div.second>div:nth-of-type(2) input{
    display: block;
    width: 100%;
    font-size: 0.37333rem;
    border-radius: 2.66667rem;
    margin-top: 0.2rem;
    border:1px solid grey;
    outline: 0;
    padding: .16rem .26667rem;
    box-sizing: border-box;
    background-color: #fafaf9;
  }
  div.second>div:nth-of-type(3){
    position: relative;
    float: right;
    height: 1.17333rem;
    line-height: 1.17333rem;
    width: 1.17333rem;
  }
  div.second>div:nth-of-type(3) a{
    display: block;
    width: 0.64rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  div.second>div:nth-of-type(3) i{
    display: block;
    width: 0.64rem;
    height: 0.64rem;
    background: url(assets/images/tian.png) no-repeat;
    background-size: 100% 100%;

  }
</style>
