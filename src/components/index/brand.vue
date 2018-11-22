<template>
	<section id="brand">
		{{changeHome(false)}}
		<div class="head">
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
				<div class="home">
					<router-link to="/dailyRecommendation">
						<svg class="icon" aria-hidden="true" id="home">
						  <use xlink:href="#icon-shouye"></use>
						</svg>
					</router-link>	
				</div>
			</header>
		</div>
		<div class="big">
			<div :class="class1">
				<nav class="search">
					<button>
						<router-link to="/search">
							<i></i>
							<span>搜索品牌或商品</span>
						</router-link>
					</button>
					<router-link to="/dailyRecommendation">全部品牌</router-link>
				</nav>
				<div class="navList">
					<ul class="oUl">
						<li v-for="(v,i) in navList" @click="color1(i)">
							<img :src="v.url" />
							<span :class="{active:selected==i}">{{v.details}}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
		
		<div class="swipt">
			<mt-swipe :auto="4000">
			  <mt-swipe-item>
			  		<img src="../../assets/images/lbt1.jpg" />
			  </mt-swipe-item>
			  <mt-swipe-item>
			  		<img src="../../assets/images/lbt2.jpg" />
			  </mt-swipe-item>
			  <mt-swipe-item>
			  		<img src="../../assets/images/lbt3.jpg" />
			  </mt-swipe-item>
			</mt-swipe>
		</div>
		<div v-for="(v,i) in list" class="brandD">
			<h2>{{v.title}}<span>{{v.more}}</span></h2>
			<ul>
				<li v-for="(v,i) in list[i].details" id="cnxh">
					<div><img :src="v.src" alt=""></div>
					<span>{{v.tips}}</span>
				</li>
			</ul>
		</div>
		<div v-for="(v,i) in brandDetails" class="brandDetails" :id="v.id">
			<h2>{{v.title}}<span>{{v.more}}</span></h2>
			<ul>
				<li v-for="(v,i) in brandDetails[i].details">
					<!-- <img :src="v.src"> -->
					<img v-lazy.brand="v.src">
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
	export default({
		data(){
			return{
				'selected':0,
				'class1':'fixe',
				'i':0,
				"navList":[
					{'url':'./src/assets/images/cnxh.png','details':'猜你喜欢'},
					{'url':'./src/assets/images/nz.png','details':'女装'},
					{'url':'./src/assets/images/xx.png','details':'鞋靴'},
					{'url':'./src/assets/images/mz.png','details':'美妆'},
					{'url':'./src/assets/images/my.png','details':'母婴'},
					{'url':'./src/assets/images/nsz.png','details':'男装'},
					{'url':'./src/assets/images/jp.png','details':'精品'},
					{'url':'./src/assets/images/ydhw.png','details':'户外运动'},
					{'url':'./src/assets/images/ny.png','details':'内衣'},
					{'url':'./src/assets/images/jjjw.png','details':'家居家纺'},
					{'url':'./src/assets/images/jdsm.png','details':'家电数码'},
					{'url':'./src/assets/images/wfs.png','details':'唯风尚'},
					{'url':'./src/assets/images/jp.png','details':'精包'}
				],
				"list":[
					{
						"title":"猜你喜欢",
						"more":"换一换",
						"details":[
							{
								"src":'./src/assets/images/c1.png',
								"tips":'菲比'
							},
							{
								"src":'./src/assets/images/c2.png',
								"tips":'新经典'
							},
							{
								"src":'./src/assets/images/c3.png',
								"tips":'里美'
							},
							{
								"src":'./src/assets/images/c4.png',
								"tips":'汇美舍'
							},
							{
								"src":'./src/assets/images/c5.png',
								"tips":'奥康'
							},
							{
								"src":'./src/assets/images/c6.png',
								"tips":'雀氏'
							}
						]
					}
				],
				"brandDetails":[
					{
						"title":"女装",
						"more":"更多",
						"name":'nz',
						'id':'nz',
						"details":[
							{
								"src":'./src/assets/images/n1.jpg'
							},
							{
								"src":'./src/assets/images/n2.jpg'
							},
							{
								"src":'./src/assets/images/n3.jpg'
							},
							{
								"src":'./src/assets/images/n4.jpg'
							},
							{
								"src":'./src/assets/images/n5.jpg'
							},
							{
								"src":'./src/assets/images/n6.jpg'
							},
							{
								"src":'./src/assets/images/n7.jpg'
							},
							{
								"src":'./src/assets/images/nv8.png'
							},
							{
								"src":'./src/assets/images/n9.jpg'
							}
						]
					},
					{
						"title":"鞋靴",
						"more":"更多",
						'name':'xx',
						'id':'xx',
						"details":[
							{
								"src":'./src/assets/images/x1.jpg'
							},
							{
								"src":'./src/assets/images/x2.jpg'
							},
							{
								"src":'./src/assets/images/x3.jpg'
							},
							{
								"src":'./src/assets/images/x4.jpg'
							},
							{
								"src":'./src/assets/images/x5.jpg'
							},
							{
								"src":'./src/assets/images/x6.jpg'
							}
						]
					},
					{
						"title":"美妆",
						"more":"更多",
						"name":'mz',
						'id':'mz',
						"details":[
							{
								"src":'./src/assets/images/n1.jpg'
							},
							{
								"src":'./src/assets/images/n2.jpg'
							},
							{
								"src":'./src/assets/images/n3.jpg'
							},
							{
								"src":'./src/assets/images/n4.jpg'
							},
							{
								"src":'./src/assets/images/n5.jpg'
							},
							{
								"src":'./src/assets/images/n6.jpg'
							},
							{
								"src":'./src/assets/images/n7.jpg'
							},
							{
								"src":'./src/assets/images/nv8.png'
							},
							{
								"src":'./src/assets/images/n9.jpg'
							}
						]
					},
					{
						"title":"母婴",
						"more":"更多",
						"name":'my',
						'id':'my',
						"details":[
							{
								"src":'./src/assets/images/x1.jpg'
							},
							{
								"src":'./src/assets/images/x2.jpg'
							},
							{
								"src":'./src/assets/images/x3.jpg'
							},
							{
								"src":'./src/assets/images/x4.jpg'
							},
							{
								"src":'./src/assets/images/x5.jpg'
							},
							{
								"src":'./src/assets/images/x6.jpg'
							}
						]
					},
					{
						"title":"男装",
						"more":"更多",
						"name":'nsz',
						'id':'nsz',
						"details":[
							{
								"src":'./src/assets/images/n1.jpg'
							},
							{
								"src":'./src/assets/images/n2.jpg'
							},
							{
								"src":'./src/assets/images/n3.jpg'
							},
							{
								"src":'./src/assets/images/n4.jpg'
							},
							{
								"src":'./src/assets/images/n5.jpg'
							},
							{
								"src":'./src/assets/images/n6.jpg'
							},
							{
								"src":'./src/assets/images/n7.jpg'
							},
							{
								"src":'./src/assets/images/nv8.png'
							},
							{
								"src":'./src/assets/images/n9.jpg'
							}						]
					},
				]
			}
		},
		methods:{
			changeHome(a){
				this.$store.commit('nohome',a);
			},
			color1(a){
				this.selected=a;
				this.class1='fix';
				
				// 点击跳转到指定位置。
				var oTop = document.getElementById(this.brandDetails[a-1].id);
				window.scroll(0,oTop.offsetTop-160);

				var oNav = document.getElementsByClassName('navList')[0];
				 // 把窗口滚动到指定位置（把内容滚动到指定的坐标）
				oNav.scrollTo((a-2)*56.25,0);
			},
			scroll(){
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
	            var scroll = scrollTop - this.i;
	            this.i = scrollTop;
	            if(scroll<0){
	                this.class1='fix';
	                // console.log('on');
	            }else{
	                this.class1='fixe';
	                // console.log('down');
	            }
			},
			back(){
				// 返回到上一级
				this.$router.go(-1);
			}	
		},
		mounted(){
			window.addEventListener('scroll',this.scroll);
			title.innerHTML='唯品会VIP特卖会：品牌';
		}
	})
</script>

<style scoped>
	a{
		text-decoration: none;
		font-size:28px; 
		color:#222;
	}
	div.head{
		height: 1.17333rem;
		position: relative;
	}
	header{
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;
		height: 1.17333rem;
	    background-color: #fbfbfa;
	    border-bottom: 1px solid #dbdbdb;
	    color: #555;
	    text-align: center;
	    z-index: 33;
	}
	header>.triangle{
		float: left;
		height: 100%;
		padding: 0 .4rem;
    	position: relative;
	}
	.big{
		height: 3.23rem;
	}
	.fix{
		width: 100%;
		height: 3.23rem;
		position: fixed;
		background-color: #fff;
		z-index: 33;
	}
	.fixe{
		width: 100%;
		height: 3.23rem;
		background-color: #fff;
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
    	text-decoration: none;
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
    	position: relative;
    	display: flex;
	}
	.search>button{
	    font-size: 14px;
	    border: 1px solid #d8d8d8;
	    border-top-left-radius: .05333rem;
	    border-bottom-left-radius: .05333rem;
	    background-color: #fff;
	    outline: none;
	    color: #98989f;
	    height: .98667rem;
	    flex: 2;
	    text-align: center;
	}
	.search>button>a{
		text-decoration: none;
		display: block;
	}
	.search>button>a span{
		font-size: 14px;
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
	.search>a{
		display:block;
		position: relative;
		font-size: 15px;
		height: .93rem;
	    line-height: .90667rem;
	    text-align: center;
	    background-color: #fff;
	    border: 1px solid #d8d8d8;
	    border-top-right-radius: .05333rem;
	    border-bottom-right-radius: .05333rem;
	    white-space: nowrap;
	    margin-left: -2px;
    	border-left: none;
    	flex: 1;
	}
	.search>a:after{
		content: '';
	    position: absolute;
	    display: block;
	    left: 0;
	    top: 0;
	    height: .48rem;
	    width: 1.5px;
	    background-color: #dcdcdc;
	    margin-top: .21333rem;
	}
	.navList{
		height: 1.8rem;
		overflow: hidden;
		overflow-x: auto;
	}
	.navList>ul{
		height: 1.5rem;
		white-space: nowrap;
	    display: inline-block;
	    padding: .34667rem .13333rem .01333rem;
	}
	.navList>ul>li{
		width: 2rem;
		height: 1.5rem;
	    text-align: center;
	    display: inline-block;
	}
	.navList>ul>li img{
		margin: 0 auto;
	    width: .64rem;
	    height: .64rem;
	    display: block;
	}
    .navList>ul>li span{
		display: inline-block;
	    vertical-align: top;
	    overflow: hidden;
	    white-space: nowrap;
	    padding-top: .02667rem;
	    font-size: 14px;
	}
	.navList>ul>li span.active{
		color: #dc5ca3;
	}
	.navList::-webkit-scrollbar{
        display: none;
    }
    .swipt{
    	height: 124px;
    }
    #brand .swipt .mint-swipe-items-wrap{
		padding-bottom: 32.4%;
		height: 0;
	}
	#brand .mint-swipe-items-wrap img{
		width:100%;
	}
	#brand .mint-swipe-indicator{
		opacity:1;
	}
	.brandD h2,.brandDetails h2{
		line-height: 1;
	    padding: .45333rem .4rem;
	    color: #222;
	    font-weight: bold;
	    font-size: 14px;
	}
	.brandD h2>span,.brandDetails h2>span{
		float: right;
	    color: #585c64;
    	font-size: .32rem;
	}
	.brandD ul:after,.brandDetails ul:after{
		content: '';
		display: block;
		clear: both;
	}
	.brandD ul,.brandDetails ul{
		overflow: hidden;
	    width: 100%;
	    vertical-align: top;
	    padding: 0 .4rem;
	    padding-bottom: .05333rem;
	    box-sizing: border-box;
	}
	.brandDetails ul>li{
		width: 32.5%;
		float: left;
		margin-left: .05333rem;
		margin-bottom: .05333rem;
	}
	.brandD ul>li{
		width: 32.5%;
		float: left;
		padding: 0.7rem 0;
		background-color: #f3f3f3;
		margin-left: .05333rem;
		margin-bottom: .05333rem;
	}
	.brandD ul>li div{
	    width: 1.70667rem;
	    margin-left: auto;
	    margin-right: auto;
	    overflow: hidden;
	}
	.brandD ul>li img,.brandDetails ul>li img{
		width: 100%;
		vertical-align: middle;
	}
	.brandD ul>li img[lazy=loading],.brandDetails ul>li img[lazy=loading]{
		width: 0;
	}
	
	.brandD ul>li span{
		display: block;
		font-size: 14px;
		text-align: center;
	}
</style>