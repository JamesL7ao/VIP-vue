<template>
	<section id="shop">
		{{changeHome(false)}}
		<header>
			<div class="triangle" @click="back()">
				<svg class="icon" aria-hidden="true" id="triangle">
				  <use xlink:href="#icon-fanhui"></use>
				</svg>
			</div>
			<h3>卫衣</h3>
			<div class="home" @click="changeHome(true)">
				<router-link to="/dailyRecommendation">
					<svg class="icon" aria-hidden="true" id="home">
					  <use xlink:href="#icon-shouye"></use>
					</svg>
				</router-link>				
			</div>
		</header>
		<main>
			<div class="navW">
				<ul>
					<li>价格</li>
					<li>折扣</li>
					<li>品牌</li>
					<li>筛选</li>
				</ul>
			</div>
			<dl v-for="(v,i) in priceD">
				<dt @click="param1(v)">
					<!-- <router-link :to="{name:'shopping',params:{url:v.url,pro:v.pro,price:v.price,aPri:v.aPri,discount:v.discount}}"> -->
					<router-link to="/shopping">
						<img :src="v.url"/>
					</router-link>
				</dt>
				<dd>
					 {{v.pro}}
				</dd>
				<dd>
					 <span>￥{{v.price}}</span>
					 <span>{{v.aPri}}</span>
					 <span>{{v.discount}}</span>
				</dd>
			</dl>
		</main>
	</section>
</template>

<script>
	export default({
		data(){
			return{
				priceD:[
					{
						"url":"./src/assets/images/h3.jpg",
						"pro":"韩都衣舍 |韩都衣舍2018秋季新款韩版女装学院风宽松长袖连帽加绒卫衣",
						"price":"128",
						"aPri":"￥578",
						"discount":"2.2折",
						"num":1
					},
					{
						"url":"./src/assets/images/h2.jpg",
						"pro":"【ins爆款卫衣】2018新款女士韩版时尚潮流百搭圆领拼色卫衣 女装卫衣外套",
						"price":"65",
						"aPri":"￥289",
						"discount":"2.2折",
						"num":1
					},
					{
						"url":"./src/assets/images/h1.jpg",
						"pro":"加绒卫衣女款卫衣加绒加厚女士卫衣女字母连帽卫衣女款学生学院女装卫衣套头女款卫衣长袖宽松刺绣卫衣女款文字连帽卫衣女装卫衣",
						"price":"139",
						"aPri":"￥329",
						"discount":"4.2折",
						"num":1
					},
					{
						"url":"./src/assets/images/h4.jpg",
						"pro":"【杜鹃同款 保暖加绒】对白2018冬季新款 女士休闲纯色字母绣花落肩袖长袖加绒卫衣",
						"price":"87",
						"aPri":"￥369",
						"discount":"2.4折",
						"num":1
					},
					{
						"url":"./src/assets/images/h5.jpg",
						"pro":"GYM 时尚短款圆领韩版绣花小清新减龄气质长袖女圆领套头秋装上衣女装卫衣",
						"price":"129",
						"aPri":"￥308",
						"discount":"3.2折",
						"num":1
					},
					{
						"url":"./src/assets/images/h6.jpg",
						"pro":"2018秋季新款韩版女装卫衣秋冬装春秋休闲宽松字母套头连帽加绒长袖卫衣",
						"price":"148",
						"aPri":"￥598",
						"discount":"2.5折",
						"num":1
					}
				]
			}
		},
		methods:{
			changeHome(a){
				this.$store.commit('nohome',a);
			},
			back(){
				// 返回到上一级
				this.$router.go(-1);
			},
			param1(a){
				this.$store.commit('imgUrl',a);
			}
		}
	})
</script>

<style scoped>
	header{
		height: 1.17333rem;
	    background-color: #fbfbfa;
	    border-bottom: 1px solid #dbdbdb;
	    color: #555;
	    text-align: center;
	    position: relative;
	}
	header>.triangle{
		float: left;
		height: 100%;
		padding: 0 .4rem;
    	position: relative;
	}
	h3{
		text-align: center;
		width: 7.7rem;
		float: left;
		height: 100%;
		line-height: 1.2rem;
		font-size: 16px;
		display: inline-block;
		font-weight: bold;
	}
	.home{
		float: right;
		height: 100%;
		padding: 0 .4rem;
    	line-height: 1.17333rem;
    	position: relative;
    	margin-right: 0.3rem;
	}
	.home>a{
		display: block;
		width: 100%;
		height: 100%;
	}
	.navW{
		height: 1.22667rem;
	}
	.navW>ul:after{
		content: '';
		display: block;
		clear: both;
	}
	.navW>ul>li{
		width: 25%;
		float: left;
		height: .96rem;
	    line-height: .96rem;
	    text-align: center;
	    font-size: .4rem;
	    box-sizing: border-box;
	    border-right: 1px solid #ccc;
	    border-top: none;
	    border-bottom: 1px solid #e4e3e6;
	}
	dl{
		margin-left: 1%;
		display: inline-block;
	    vertical-align: top;
	    width: 48%;
	    margin-bottom: .66667rem;
	    background: #fff;
	    box-sizing: border-box;
	}
	dt{
		display: block;
	    width: 100%;
	    height: 0;
	    padding-bottom: 125%;
	    border: 1px solid #efefef;
	    overflow: hidden;
	    box-sizing: border-box;
	}
	dt img{
		display: block;
	    width: 100%;
	    height: auto;
	}
	dd:nth-of-type(1){	
		padding: .18667rem .13333rem 0;
	    height: .90667rem;
	    font-size: .32rem;
	    line-height: .45333rem;
	    color: #000;
	    word-break: break-all;
	    display: -webkit-box;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    -webkit-box-orient: vertical;
    	-webkit-line-clamp: 2;
	}
	dd:nth-of-type(2){
		position: relative;
		padding: 0 .13333rem;
	    line-height: .42667rem;
	    margin-bottom: .13333rem;
	}
	dd>span:nth-of-type(1){
		font-size: .37333rem;
		color: #e80080;
	}
	dd>span:nth-of-type(2){
		/*删除线*/
		text-decoration: line-through;
	    font-size: .24rem;
	    color: #888;
	    padding-left: .13333rem;
	    padding-bottom: .10667rem;
	}
	dd>span:nth-of-type(3){
		position: absolute;
	    right: .13333rem;
	    top: 70%;
	    transform: translateY(-50%);
	    height: .37333rem;
	    background-color: #000;
	    color: #fff;
	    padding: 0 .10667rem;
	    font-size: .26667rem;
	    line-height: .37333rem;
	}
</style>