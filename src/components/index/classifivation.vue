<template>
	<section id="classifivation">
		{{changeHome(false)}}
		<header>
			<div class="triangle" @click="back()">
				<svg class="icon" aria-hidden="true" id="triangle">
				  <use xlink:href="#icon-fanhui"></use>
				</svg>
			</div>
			<div class="nav">
				<router-link to="/classifivation">分类</router-link>
				<router-link to="/brand">品牌</router-link>
			</div>
			<div class="home" @click="changeHome(true)">
				<router-link to="/dailyRecommendation">
					<svg class="icon" aria-hidden="true" id="home">
					  <use xlink:href="#icon-shouye"></use>
					</svg>
				</router-link> 
			</div>
		</header>
		<div>
			<div class="search">
				<button>
					<router-link to="/search">
						<i></i>
						<span>搜索品牌或商品</span>
					</router-link>
				</button>
			</div>
			<div class="content">
				<aside>
					<ul class="oUl">
						<li v-for="(v,i) in items" :class="{current:selected==i}" @click="change(i)">{{v.side}}</li>
					</ul>
				</aside>
				<section>
					<div v-for="(v,i) in items" :class="{sel:selected==i}" @click="change1(i)">	
						<div v-for="(v1,i1) in items[i].title">
							<h2>{{v1}}<span>热销榜 ></span></h2>
							<div v-if="i1==0" class="brand">
								<ul>
									<li v-for="(v2,i2) in items[i].src">
										<img :src="v2.url" />
										<span>{{v2.details}}</span>
									</li>
								</ul>
							</div>
							<div v-if="i1==1" class="brand">
								<ul>
									<li v-for="(v2,i2) in items[i].src1">
										<img :src="v2.url" />
										<span>{{v2.details}}</span>
									</li>
								</ul>
							</div>
							<div v-if="i1==2" class="brand">
								<ul>
									<li v-for="(v2,i2) in items[i].src2">
										<img :src="v2.url" />
										<span>{{v2.details}}</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	</section>
</template>

<script>
	export default({
		data(){
			return{
				selected:0,
				items:[
					{
						"side":"为你推荐",
						"title":["猜你想找","你可能喜欢","保暖/羊绒"],
						"src":[
							{"details":'夹克',"url":"./src/assets/images/n1.png"},
							{"details":'长轴衬衫',"url":"./src/assets/images/n2.png"},
							{"details":'长轴T恤',"url":"./src/assets/images/n3.png"},
							{"details":'棉衣',"url":"./src/assets/images/n4.png"},
							{"details":'羽绒服',"url":"./src/assets/images/n5.png"},
							{"details":'大衣',"url":"./src/assets/images/n6.png"}
						],
						"src1":[
							{"details":'毛衣',"url":"./src/assets/images/n7.png"},
							{"details":'针织衫',"url":"./src/assets/images/n8.png"},
							{"details":'长袖T恤',"url":"./src/assets/images/n9.png"},
							{"details":'加绒卫衣',"url":"./src/assets/images/n10.png"},
							{"details":'薄款卫衣',"url":"./src/assets/images/n11.png"},
							{"details":'衬衫',"url":"./src/assets/images/n12.png"}
						],
						"src2":[
							{"details":'妈妈装',"url":"./src/assets/images/w7.jpg"},
							{"details":'连衣裙',"url":"./src/assets/images/w8.jpg"},
							{"details":'针织衫',"url":"./src/assets/images/w9.jpg"},
							{"details":'T恤',"url":"./src/assets/images/w10.jpg"},
							{"details":'半身裙',"url":"./src/assets/images/w11.jpg"},
							{"details":'衬衫',"url":"./src/assets/images/w12.jpg"}
						]
					},
					{
						"side":"女装",
						"title":["冬季必买","人气美衣","保暖/羊绒"],
						"src":[
							{"details":'大衣',"url":"./src/assets/images/w1.jpg"},
							{"details":'羽绒',"url":"./src/assets/images/w2.jpg"},
							{"details":'皮衣皮革',"url":"./src/assets/images/w3.jpg"},
							{"details":'外套',"url":"./src/assets/images/w4.jpg"},
							{"details":'毛衣',"url":"./src/assets/images/w5.jpg"},
							{"details":'卫衣',"url":"./src/assets/images/w6.jpg"}
						],
						"src1":[
							{"details":'妈妈装',"url":"./src/assets/images/w7.jpg"},
							{"details":'连衣裙',"url":"./src/assets/images/w8.jpg"},
							{"details":'针织衫',"url":"./src/assets/images/w9.jpg"},
							{"details":'T恤',"url":"./src/assets/images/w10.jpg"},
							{"details":'半身裙',"url":"./src/assets/images/w11.jpg"},
							{"details":'衬衫',"url":"./src/assets/images/w12.jpg"}
						],
						"src2":[
							{"details":'妈妈装',"url":"./src/assets/images/b7.jpg"},
							{"details":'连衣裙',"url":"./src/assets/images/b8.jpg"},
							{"details":'针织衫',"url":"./src/assets/images/b9.jpg"},
							{"details":'睡裙',"url":"./src/assets/images/b10.jpg"},
							{"details":'半身裙',"url":"./src/assets/images/b6.jpg"}
						]
					},
					{
						"side":"男装",
						"title":["热销分类","内塔","保暖/羊绒"],
						"src1":[
							{"details":'夹克',"url":"./src/assets/images/n1.png"},
							{"details":'长轴衬衫',"url":"./src/assets/images/n2.png"},
							{"details":'大衣',"url":"./src/assets/images/n6.png"},
							{"details":'毛衣',"url":"./src/assets/images/n7.png"},
							{"details":'针织衫',"url":"./src/assets/images/n8.png"},
							{"details":'衬衫',"url":"./src/assets/images/n12.png"}
						],
						"src":[
							{"details":'长袖T恤',"url":"./src/assets/images/n9.png"},
							{"details":'加绒卫衣',"url":"./src/assets/images/n10.png"},
							{"details":'薄款卫衣',"url":"./src/assets/images/n11.png"},
							{"details":'长轴T恤',"url":"./src/assets/images/n3.png"},
							{"details":'棉衣',"url":"./src/assets/images/n4.png"},
							{"details":'羽绒服',"url":"./src/assets/images/n5.png"}
						],
						"src2":[
							{"details":'妈妈装',"url":"./src/assets/images/b7.jpg"},
							{"details":'连衣裙',"url":"./src/assets/images/b8.jpg"},
							{"details":'针织衫',"url":"./src/assets/images/b9.jpg"},
							{"details":'睡裙',"url":"./src/assets/images/b10.jpg"},
							{"details":'半身裙',"url":"./src/assets/images/b6.jpg"}
						]
					},
					{
						"side":"男女内衣",
						"title":["精选品牌","保暖/羊绒","保暖/羊绒"],
						"src":[
							{"details":'女士保暖',"url":"./src/assets/images/b1.jpg"},
							{"details":'羽绒',"url":"./src/assets/images/b2.jpg"},
							{"details":'女加厚睡衣',"url":"./src/assets/images/b3.jpg"},
							{"details":'男士保暖',"url":"./src/assets/images/b4.jpg"},
							{"details":'毛衣',"url":"./src/assets/images/b5.jpg"}
						],
						"src1":[
							{"details":'妈妈装',"url":"./src/assets/images/b7.jpg"},
							{"details":'连衣裙',"url":"./src/assets/images/b8.jpg"},
							{"details":'针织衫',"url":"./src/assets/images/b9.jpg"},
							{"details":'睡裙',"url":"./src/assets/images/b10.jpg"},
							{"details":'半身裙',"url":"./src/assets/images/b6.jpg"}
						],
						"src2":[
							{"details":'妈妈装',"url":"./src/assets/images/b7.jpg"},
							{"details":'连衣裙',"url":"./src/assets/images/b8.jpg"},
							{"details":'针织衫',"url":"./src/assets/images/b9.jpg"},
							{"details":'睡裙',"url":"./src/assets/images/b10.jpg"},
							{"details":'半身裙',"url":"./src/assets/images/b6.jpg"}
						]
					},
					{
						"side":"女鞋",
						"title":["单鞋","休闲鞋","保暖/羊绒"],
						"src":[
							{"details":'大衣',"url":"./src/assets/images/w1.jpg"},
							{"details":'羽绒',"url":"./src/assets/images/w2.jpg"},
							{"details":'皮衣皮革',"url":"./src/assets/images/w3.jpg"},
							{"details":'外套',"url":"./src/assets/images/w4.jpg"},
							{"details":'毛衣',"url":"./src/assets/images/w5.jpg"},
							{"details":'卫衣',"url":"./src/assets/images/w6.jpg"}
						],
						"src1":[
							{"details":'妈妈装',"url":"./src/assets/images/w7.jpg"},
							{"details":'连衣裙',"url":"./src/assets/images/w8.jpg"},
							{"details":'针织衫',"url":"./src/assets/images/w9.jpg"},
							{"details":'T恤',"url":"./src/assets/images/w10.jpg"},
							{"details":'半身裙',"url":"./src/assets/images/w11.jpg"},
							{"details":'衬衫',"url":"./src/assets/images/w12.jpg"}
						],
						"src2":[
							{"details":'妈妈装',"url":"./src/assets/images/b7.jpg"},
							{"details":'连衣裙',"url":"./src/assets/images/b8.jpg"},
							{"details":'针织衫',"url":"./src/assets/images/b9.jpg"},
							{"details":'睡裙',"url":"./src/assets/images/b10.jpg"},
							{"details":'半身裙',"url":"./src/assets/images/b6.jpg"}
						]
					},
					{
						"side":"男鞋",
						"title":["运动鞋","单鞋","保暖/羊绒"],
						"src1":[
							{"details":'夹克',"url":"./src/assets/images/n1.png"},
							{"details":'长轴衬衫',"url":"./src/assets/images/n2.png"},
							{"details":'大衣',"url":"./src/assets/images/n6.png"},
							{"details":'毛衣',"url":"./src/assets/images/n7.png"},
							{"details":'针织衫',"url":"./src/assets/images/n8.png"},
							{"details":'衬衫',"url":"./src/assets/images/n12.png"}
						],
						"src":[
							{"details":'长袖T恤',"url":"./src/assets/images/n9.png"},
							{"details":'加绒卫衣',"url":"./src/assets/images/n10.png"},
							{"details":'薄款卫衣',"url":"./src/assets/images/n11.png"},
							{"details":'长轴T恤',"url":"./src/assets/images/n3.png"},
							{"details":'棉衣',"url":"./src/assets/images/n4.png"},
							{"details":'羽绒服',"url":"./src/assets/images/n5.png"}
						],
						"src2":[
							{"details":'妈妈装',"url":"./src/assets/images/b7.jpg"},
							{"details":'连衣裙',"url":"./src/assets/images/b8.jpg"},
							{"details":'针织衫',"url":"./src/assets/images/b9.jpg"},
							{"details":'睡裙',"url":"./src/assets/images/b10.jpg"},
							{"details":'半身裙',"url":"./src/assets/images/b6.jpg"}
						]
					},
					{
						"side":"精包皮具",
						"title":["女包","男包","保暖/羊绒"],
						"src":[
							{"details":'女士保暖',"url":"./src/assets/images/b1.jpg"},
							{"details":'羽绒',"url":"./src/assets/images/b2.jpg"},
							{"details":'女加厚睡衣',"url":"./src/assets/images/b3.jpg"},
							{"details":'男士保暖',"url":"./src/assets/images/b4.jpg"},
							{"details":'毛衣',"url":"./src/assets/images/b5.jpg"}
						],
						"src1":[
							{"details":'妈妈装',"url":"./src/assets/images/b7.jpg"},
							{"details":'连衣裙',"url":"./src/assets/images/b8.jpg"},
							{"details":'针织衫',"url":"./src/assets/images/b9.jpg"},
							{"details":'睡裙',"url":"./src/assets/images/b10.jpg"},
							{"details":'半身裙',"url":"./src/assets/images/b6.jpg"}
						],
						"src2":[
							{"details":'妈妈装',"url":"./src/assets/images/b7.jpg"},
							{"details":'连衣裙',"url":"./src/assets/images/b8.jpg"},
							{"details":'针织衫',"url":"./src/assets/images/b9.jpg"},
							{"details":'睡裙',"url":"./src/assets/images/b10.jpg"},
							{"details":'半身裙',"url":"./src/assets/images/b6.jpg"}
						]
					},
					{
						"side":"手表配饰",
						"title":["女包","男包","保暖/羊绒"],
						"src":[
							{"details":'夹克',"url":"./src/assets/images/n1.png"},
							{"details":'长轴衬衫',"url":"./src/assets/images/n2.png"},
							{"details":'长轴T恤',"url":"./src/assets/images/n3.png"},
							{"details":'棉衣',"url":"./src/assets/images/n4.png"},
							{"details":'羽绒服',"url":"./src/assets/images/n5.png"},
							{"details":'大衣',"url":"./src/assets/images/n6.png"}
						],
						"src1":[
							{"details":'毛衣',"url":"./src/assets/images/n7.png"},
							{"details":'针织衫',"url":"./src/assets/images/n8.png"},
							{"details":'长袖T恤',"url":"./src/assets/images/n9.png"},
							{"details":'加绒卫衣',"url":"./src/assets/images/n10.png"},
							{"details":'薄款卫衣',"url":"./src/assets/images/n11.png"},
							{"details":'衬衫',"url":"./src/assets/images/n12.png"}
						],
						"src2":[
							{"details":'妈妈装',"url":"./src/assets/images/b7.jpg"},
							{"details":'连衣裙',"url":"./src/assets/images/b8.jpg"},
							{"details":'针织衫',"url":"./src/assets/images/b9.jpg"},
							{"details":'睡裙',"url":"./src/assets/images/b10.jpg"},
							{"details":'半身裙',"url":"./src/assets/images/b6.jpg"}
						]
					},
					{
						"side":"护肤彩妆",
						"title":["女包","男包","保暖/羊绒"],
						"src":[
							{"details":'女士保暖',"url":"./src/assets/images/b1.jpg"},
							{"details":'羽绒',"url":"./src/assets/images/b2.jpg"},
							{"details":'女加厚睡衣',"url":"./src/assets/images/b3.jpg"},
							{"details":'男士保暖',"url":"./src/assets/images/b4.jpg"},
							{"details":'毛衣',"url":"./src/assets/images/b5.jpg"}
						],
						"src1":[
							{"details":'妈妈装',"url":"./src/assets/images/b7.jpg"},
							{"details":'连衣裙',"url":"./src/assets/images/b8.jpg"},
							{"details":'针织衫',"url":"./src/assets/images/b9.jpg"},
							{"details":'睡裙',"url":"./src/assets/images/b10.jpg"},
							{"details":'半身裙',"url":"./src/assets/images/b6.jpg"}
						],
						"src2":[
							{"details":'妈妈装',"url":"./src/assets/images/b7.jpg"},
							{"details":'连衣裙',"url":"./src/assets/images/b8.jpg"},
							{"details":'针织衫',"url":"./src/assets/images/b9.jpg"},
							{"details":'睡裙',"url":"./src/assets/images/b10.jpg"},
							{"details":'半身裙',"url":"./src/assets/images/b6.jpg"}
						]
					},
					{
						"side":"个人护理",
						"title":["女包","男包","保暖/羊绒"],
						"src":[
							{"details":'夹克',"url":"./src/assets/images/n1.png"},
							{"details":'长轴衬衫',"url":"./src/assets/images/n2.png"},
							{"details":'长轴T恤',"url":"./src/assets/images/n3.png"},
							{"details":'棉衣',"url":"./src/assets/images/n4.png"},
							{"details":'羽绒服',"url":"./src/assets/images/n5.png"},
							{"details":'大衣',"url":"./src/assets/images/n6.png"}
						],
						"src1":[
							{"details":'毛衣',"url":"./src/assets/images/n7.png"},
							{"details":'针织衫',"url":"./src/assets/images/n8.png"},
							{"details":'长袖T恤',"url":"./src/assets/images/n9.png"},
							{"details":'加绒卫衣',"url":"./src/assets/images/n10.png"},
							{"details":'薄款卫衣',"url":"./src/assets/images/n11.png"},
							{"details":'衬衫',"url":"./src/assets/images/n12.png"}
						],
						"src2":[
							{"details":'妈妈装',"url":"./src/assets/images/b7.jpg"},
							{"details":'连衣裙',"url":"./src/assets/images/b8.jpg"},
							{"details":'针织衫',"url":"./src/assets/images/b9.jpg"},
							{"details":'睡裙',"url":"./src/assets/images/b10.jpg"},
							{"details":'半身裙',"url":"./src/assets/images/b6.jpg"}
						]
					},
					{"side":"母婴"},
					{"side":"运动户外"},
					{"side":"手机数码"},
					{"side":"家用电器"},
					{"side":"家居家纺"},
					{"side":"生活超市"},
					{"side":"唯品国际"},
					{"side":"唯品优选"},
					{"side":"唯品.奢"},
					{"side":"唯品.奢"},
					{"side":"唯品金融"},
					{"side":"唯品医药"},
					{"side":"图书文娱"}
				]
			}
		},
		methods:{
			change(a){
				this.selected=a;
			},
			change1(b){
				this.selected=b;
			},
			back(){
				// 返回到上一级
				this.$router.go(-1)
			},
			changeHome(a){
				this.$store.commit('nohome',a);
			}
		},
		mounted(){
			this.selected=this.$store.state.selected;
			title.innerHTML='唯品会VIP特卖会：分类';

			var oUl = document.getElementsByClassName('oUl')[0];
			// 把窗口滚动到指定位置（把内容滚动到指定的坐标）
			oUl.scrollTo(0,(this.$store.state.selected-5)*48);
		}
	})
</script>

<style scoped>
	a{
		text-decoration: none;
		color: #585c64;
	}
	#classifivation{
		height: 100%;
	}
	#classifivation>div{
		height: 100%;
	}
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
	.nav{
		display: inline-block;
		width: 4.26667rem;
		height: .69333rem;
    	border: 1px solid #585c64;
    	border-radius: .10667rem;
    	position: absolute;
    	top: 50%;
	    left: 50%;
	    transform: translate(-50%,-50%);
	}
	header>.nav>a{
		font-size: 16px;
		height: .69333rem;
		display: inline-block;
    	line-height: .69333rem;
    	width: 50%;
    	float: left;
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
	.router-link-active{
		background-color: #585c64;
    	color: #fff;
	}
	.search{
		background-color: #f3f4f5;
    	padding: .26667rem .4rem;
	}
	.search>button{
		display: block;
	    font-size: 14px;
	    border: 1px solid #d8d8d8;
	    border-top-left-radius: .05333rem;
	    border-bottom-left-radius: .05333rem;
	    background-color: #fff;
	    outline: none;
	    color: #98989f;
	    height: .98667rem;
	    width: 9.16rem;
	    text-align: center;
	}
	.search>button>a{
		text-decoration: none;
		display: block;
	}
	.search>button i{
		width: .37333rem;
	    height: .37333rem;
	    background: url(../../assets/images/search.png) 0 0 no-repeat;
	    background-size: 100%;
	    margin-right: .13333rem;
	    display: inline-block;
	    vertical-align: middle;
	}
	.content{
		height: 100%;
	}
	.content:after{
		content: '';
		display: block;
		clear: both;
	}
	.content>aside{
		float: left;
    	width: 24%;
    	height: 100%;
    	background-color: #f3f4f5;
    	overflow-y: hidden;
	}
	.content>aside>ul:after{
		content: '';
		display: block;
		clear: both;
	}
	.content>aside>ul{
		width: 2.48rem;
	    height: 15rem;
	    overflow-x: hidden;
	    overflow-y: auto;
	}
	.content>aside>ul li{
		list-style: none;
		font-size: 16px;
		width: 100%;
		height: 1.28rem;
	    line-height: 1.28rem;
	    color: #585c64;
	    text-align: center;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
	.content>aside>ul li.current{
		border-left: 4px solid #de3d96;
		background-color: #fff;
	}
	.content>section{
		width: 76%;
		float: right;
	}
	.content>section>div{
		display: none;
	}
	.content>section>div.sel{
		width: 100%;
		height: 15rem;
		overflow-y: auto;
		display:block;
	}
	div.sel>div{
		width: 100%;
	}
	div.sel>div>h2{
		font-size: 14px;
		padding-top: .53333rem;
	    margin: 0 .74667rem 0 .69333rem;
	    letter-spacing: normal;
	    overflow: hidden;
	    font-weight: bold;
	}
	div.sel>div>h2>span{
		float: right;
	    padding-right: .21333rem;
	    color: #585c64;
	    font-weight: 400;
	    white-space: nowrap;
	}
	.brand{
		width: 100%;
		overflow: hidden;
    	padding: .53333rem .66667rem 0 .61333rem;
    	box-sizing: border-box;
	}
	.brand>ul:after{
		content: '';
		display: block;
		clear: both;
	}
	.brand>ul{
		width: 100%;
		height: 100%;
		overflow-y: auto;
	}
	.brand>ul>li{
		width: 33.333%;
		float: left;
	}
	.brand>ul>li>img{
		width: 1.65333rem;
	    height: 1.65333rem;
	    display: block;
	    margin-left: auto;
	    margin-right: auto;
	    background-size: contain;
	    background-repeat: no-repeat;
	    background-position: 50%;
	}
	.brand>ul>li>span{
		display: block;
		font-size: 14px;
		color: #222;
		text-align: center;
		white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    width: 100%;
	    padding: .29333rem 0 .66667rem;
	    line-height: .18667rem;
	}
</style>