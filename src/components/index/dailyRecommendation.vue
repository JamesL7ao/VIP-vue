<template>
  <div id="app">
    {{changeHome(true)}}
    <div class="genuineasale">
      <router-link to="/shop"><img src="../../assets/images/Genuinesale.jpg"></router-link>
    </div>
    <div class="circle">
      <ul>
        <li v-for="(v,i) in circleImg" @click="oppisite(v.num)">
          <router-link to="/classifivation">
            <img :src="v.src">
          </router-link>
        </li>
      </ul>
    </div>
    <div class="genuineasale">
      <router-link to="/crazy"><img src="../../assets/images/new people.jpg"></router-link>
      <router-link to="/crazy"><img src="../../assets/images/Selected Activities.jpg"></router-link>
      <router-link to="/crazy"><img src="../../assets/images/skii.jpg"></router-link>
      <router-link to="/crazy"><img src="../../assets/images/delicacy.jpg"></router-link>
    </div>
    <div class="delicacy">
      <ul>
        <li><router-link to="/crazy"><img src="../../assets/images/99.jpg"></router-link></li>
        <li><router-link to="/crazy"><img src="../../assets/images/39.jpg"></router-link></li>
        <li><router-link to="/crazy"><img src="../../assets/images/11.jpg"></router-link></li>
      </ul>
    </div>
    <div class="second">
      <ul>
        <li><router-link to="/crazy"><img src="../../assets/images/100.jpg"></router-link></li>
        <li><router-link to="/crazy"><img src="../../assets/images/good.jpg"></router-link></li>
      </ul>
    </div>
    <div class="details">
      <p>今日特卖 · 每天早10点 晚8点上新</p>
      <ul>
        <li v-for="(v,i) in details">
          <router-link :to="v.to">
            <img :src="v.src">
          </router-link>
          <div class="del"  v-if="v.show">
              <p><span class="discount">{{v.discount}}</span>{{v.del}}</p>
              <span class="day">{{v.day}}</span>
              <div v-if="v.show1">
                <img src="../../assets/images/small.png">
                {{v.quan}}
              </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="top" v-if="top" @click="toTop()"></div>
    <div class="shop">
      <router-link to="/shopping">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gouwuche"></use>
        </svg>
      </router-link>
      
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return{
    		top:false,
        circleImg:[
          {
            "to":'/dailyRecommendation',
            "src":'./src/assets/images/women.jpg',
            'num':'1'
          },
          {
            "to":'/crazy',
            "src":'./src/assets/images/beauty.jpg',
            'num':'8'
          },
          {
            "to":'/fashion',
            "src":'./src/assets/images/man.jpg',
            'num':'2'
          },
          {
            "to":'/beauty',
            "src":'./src/assets/images/mother.jpg',
            'num':'10'
          },
          {
            "to":'/dailyRecommendation',
            "src":'./src/assets/images/today.jpg',
            'num':'5'
          },
          {
            "to":'/dailyRecommendation',
            "src":'./src/assets/images/shoes.jpg',
            'num':'4'
          },
          {
            "to":'/dailyRecommendation',
            "src":'./src/assets/images/sports.jpg',
            'num':'11'
          },
          {
            "to":'/dailyRecommendation',
            "src":'./src/assets/images/bras.jpg',
            'num':'3'
          },
          {
            "to":'/dailyRecommendation',
            "src":'./src/assets/images/shop.jpg',
            'num':'15'
          },
          {
            "to":'/dailyRecommendation',
            "src":'./src/assets/images/more.jpg',
            'num':'0'
          }
        ],
        details:[
          {
            "show":false,
            "to":'/dailyRecommendation',
            "src":'./src/assets/images/you.jpg',
            "show1":true
          },
          {
            "show":true,
            "to":'/dailyRecommendation',
            "src":'./src/assets/images/fin.jpg',
            "discount":'0.5折起',
            "del":'爆款返场-菲妮迪FINITY女装专场',
            "day":'剩2天',
            "quan":'全场折上8.8折',
            "show1":true
          },
          {
            "show":true,
            "to":'/dailyRecommendation',
            "src":'./src/assets/images/bao.jpg',
            "discount":'1.2折起',
            "del":'羊绒好货直击底价，香港鳄鱼恤-今日大牌',
            "day":'剩2天',
            "quan":'全场折上6.5折',
            "show1":true
          },
          {
            "show":true,
            "to":'/dailyRecommendation',
            "src":'./src/assets/images/qiu.jpg',
            "discount":'1.4折起',
            "del":'【今日大牌】秋水伊人冬新品狂欢专场',
            "day":'剩2天',
            "quan":'全场折上7折',
            "show1":true
          },
          {
            "show":true,
            "to":'/dailyRecommendation',
            "src":'./src/assets/images/ri.jpg',
            "discount":'3.2折起',
            "del":'日着rizhuo原创设计尖货大赏',
            "day":'剩2天',
            "quan":'全场折上7.8折',
            "show1":true
          },
          {
            "show":true,
            "to":'/dailyRecommendation',
            "src":'./src/assets/images/mian.jpg',
            "discount":'3折起',
            "del":'今日大牌-全棉时代PurCotton母婴用品专场直发货',
            "day":'剩1天',
            "show1":false
          },
          {
            "show":true,
            "to":'/dailyRecommendation',
            "src":'./src/assets/images/ar.jpg',
            "discount":'2折起',
            "del":'ARMANI OUTLET官方店',
            "day":'剩44天',
            "show1":false
          },
          {
            "show":true,
            "to":'/dailyRecommendation',
            "src":'./src/assets/images/en.jpg',
            "discount":'0.7折起',
            "del":'恩裳INSUN女装专场',
            "day":'剩2天',
            "show1":false
          },
          {
            "show":true,
            "to":'/dailyRecommendation',
            "src":'./src/assets/images/yin.jpg',
            "discount":'1折起',
            "del":'音儿YINER女装专场 ',
            "day":'剩2天',
            "show1":false
          },
          {
            "show":true,
            "to":'/dailyRecommendation',
            "src":'./src/assets/images/jen.jpg',
            "discount":'1.1折起',
            "del":'杰米克JenMick集团冬季新品 ',
            "day":'剩13天',
            "show1":false
          },
          {
            "show":true,
            "to":'/dailyRecommendation',
            "src":'./src/assets/images/ko.jpg',
            "discount":'1.4折起',
            "del":'珂莱蒂尔koradior女装专场',
            "day":'剩2天',
            "show1":false
          },
          {
            "show":true,
            "to":'/dailyRecommendation',
            "src":'./src/assets/images/jd.jpg',
            "discount":'1折起',
            "del":'宠爱女人-捷迪尼娅JDNVH女鞋专场 ',
            "day":'剩2天',
            "show1":false
          },
          {
            "show":true,
            "to":'/dailyRecommendation',
            "src":'./src/assets/images/be.jpg',
            "discount":'1.8折起',
            "del":'百丽BeLLE女鞋专场 ',
            "day":'剩2天',
            "show1":false
          },
          {
            "show":true,
            "to":'/dailyRecommendation',
            "src":'./src/assets/images/ta.jpg',
            "discount":'1.2折起',
            "del":'他她TATA女鞋专场 ',
            "day":'剩2天',
            "show1":false
          },
          {
            "show":true,
            "to":'/dailyRecommendation',
            "src":'./src/assets/images/adidas.jpg',
            "discount":'2.4折起',
            "del":'adidas运动男女混合专场 ',
            "day":'剩2天',
            "show1":false
          },
        ]
    }
  },
  methods:{
    close(){
      $('.header').hide();
    },
    changeHome(a){
      this.$store.commit('nohome',a);
    },
    // 相对应的索引
    oppisite(a){
      this.$store.state.selected=a;
      // console.log(this.$store.state.selected);
    },
    //回到顶部
    scroll(){
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
	    if(scrollTop>40){
	  			this.top=true;
	    }else{
							this.top=false;
	    }
		},
		toTop(){
			document.documentElement.scrollTop = document.body.scrollTop = 0;
		}
  },
  mounted(){
		 window.addEventListener('scroll',this.scroll);
     title.innerHTML='唯品会手机购物正品商城：全球精选 正品特卖手机版';
	}
}
</script>
  
<style>
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
    float: right;
    height: 1.17333rem;
    line-height: 1.17333rem;
    width: 1.17333rem;
  }
  div.genuineasale{
    width: 100%;
  }
  div.genuineasale>a{
    display: block;
  }
  div.genuineasale>a>img{
    vertical-align: middle;
  }
  div.circle ul{
    display: flex;
    flex-wrap: wrap;
  }
  div.circle li{
    width: 20%;
  }
  div.circle li a{
    display: block;
  }
  div.circle img{
    width: 100%;
    vertical-align: middle;
  }
  div.delicacy ul:after,div.second ul:after{
    content: "";
    display: block;
    clear: both;
  }
  div.delicacy ul li{
    float: left;
    width: 33.333333%;
  }
  div.delicacy ul li a{
    display: block;
  }
  div.delicacy ul li img,div.second ul li img{
    width: 100%;
    vertical-align: middle;
  }
  div.second ul li{
    float: left;
    width: 50%;
  }
  div.details>p{
    font-size: 0.43667rem;
    text-align: center;
    padding: 0.45333rem 0 0.10667rem;
    color: #000;
  }
  div.details>ul:bofore{
   content: '';
   display: block;
   clear: both;
  }
  div.details>ul li{
    padding-top: .26667rem;
    background-color: #f3f4f5;
  }
  div.details>ul li:nth-of-type(1){
    padding-top: 0;
  }
  div.details>ul li a{
   display: block;
  }
  div.details>ul li>a>img{
   width: 100%;
   vertical-align: middle;
  }
  div.del{
    width: 93.75%;
    padding: .26667rem 3.125% .37333rem;
    font-size: .4rem;
    color: #222;
    background-color: #fff;
  }
  div.del:after{
    content: '';
    display: block;
    clear: both;
  }
  div.del>p{
    width: 80%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 0.50667rem;
    font-weight: 600;
    float: left;
  }
  span.day{
    float: right;
    font-size: 0.32rem; 
    color: #98989f;
  }
  div.del>div{
    float: left;
    font-size: .32rem;
    color: #5771a8;
    width: 93.75%;
    margin-top: 0.18667rem;
    height: .50667rem;
    line-height: .56rem;
  }
  div.del>div>img{
    width: 0.50667rem;
    vertical-align: middle;
  }
  div.top{
  	position: fixed;
  	bottom: 8px;
  	right: 8px;
  	width: 1.17333rem;
    height: 1.17333rem;
    background: url(../../assets/images/top.png) 50% no-repeat;
    background-size: 100% 100%;
  }
  div.shop{
  	position: fixed;
  	bottom: 8px;
  	left: 8px;
  	width: 1.17333rem;
    height: 1.17333rem;
    border-radius: 12px;
    background-color:rgba(25,29,38,.95);
  }
  .shop>a{
    display: block;
    text-decoration: none;
  }
  .shop svg{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    color: #fff;
  }
</style>