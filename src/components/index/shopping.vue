<template>
	<section>
		{{changeHome(false)}}
		<div v-if="this.$store.state.allM.length!=0">
			<header>
				<div class="triangle" @click="back()">
					<svg class="icon" aria-hidden="true" id="triangle">
					  <use xlink:href="#icon-fanhui"></use>
					</svg>
				</div>
				<h3>确认订单</h3>
			</header>
			<div class="product">
				<ul>
					<li v-for="(v,i) in allMes">
						<a href="#" class="imgT">
							<img :src="v.url" />
						</a>
						<div class="con">
							<a href="#" class="left">
								<h4>{{v.pro}}</h4>
								<p>{{v.discount}}</p>
								<p>L</p>
							</a>
							<p class="bottom">
								<a class="re" @click="re(i)">-</a>
								<span>{{v.num}}</span>
								<a class="add" @click="add(i)">+</a>
								<a class="del" @click="del(i)">×</a>
							</p>
							<a class="right">
								<span>￥{{v.price}}</span>
								<del>{{v.aPri}}</del>
							</a>
						</div>
					</li>
				</ul>
			</div>
			<div class="total">
				￥{{this.$store.state.total}}
			</div>
		</div>
		<div v-else>
			<header>
				<div class="triangle" @click="back()">
					<svg class="icon" aria-hidden="true" id="triangle">
					  <use xlink:href="#icon-fanhui"></use>
					</svg>
				</div>
				<h3>购物车</h3>
			</header>
			<div class="big">
				<div class="bg"></div>
				<div class="cart"></div>
				<h2>购物车空空如也</h2>
				<p class="brr"></p>
				<router-link to="/shop">去抢购</router-link>
			</div>
		</div>
	</section>
</template>

<script>
	export default({
		data(){
			return{
				
				'allMes':[]
			}
		},
		methods:{
			changeHome(a){
				this.$store.commit('nohome',a);
			},
			back(){
				// 返回到上一级
				this.$router.go(-1)
			},
			add(a){
				this.allMes[a].num++;
				this.$store.state.total=0;

				for (var i = 0;i<this.$store.state.allM.length;i++) {
					this.$store.state.total+=parseFloat(this.$store.state.allM[i].num*this.$store.state.allM[i].price);
				}

			},
			re(a){
				if (this.allMes[a].num > 1) {
					this.allMes[a].num--;
					this.$store.state.total=0;

					for (var i = 0;i<this.$store.state.allM.length;i++) {
						this.$store.state.total+=parseFloat(this.$store.state.allM[i].num*this.$store.state.allM[i].price);
					}
				}
			},
			del(a){
				this.$store.state.allM.splice(a,1);
				this.$store.state.total=0;

				for (var i = 0;i<this.$store.state.allM.length;i++) {
					this.$store.state.total+=parseFloat(this.$store.state.allM[i].num*this.$store.state.allM[i].price);
				}
			}
		},
		mounted(){
			if (this.$store.state.allM.length>0) {
				this.allMes=this.$store.state.allM;
				this.$store.state.total=0;

				for (var i = 0;i<this.$store.state.allM.length;i++) {
					this.$store.state.total+=parseFloat(this.$store.state.allM[i].num*this.$store.state.allM[i].price);
				}
			}
			title.innerHTML='购物车';
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
	ul{
		padding: .26667rem 0;
    	position: relative;
        margin: 0 .4rem;
	}
	ul>li{
		padding: .4rem 0;
    	font-size: .37333rem;
	}
	.imgT{
		float: left;
	    width: 1.81333rem;
	    margin-right: .26667rem;
	}
	.imgT>img{
		width: 100%;
	}
	.con{
		position: relative;
	    overflow: hidden;
	    padding-left: .02667rem;
	    padding-bottom: .02667rem;
	}
	a.left{
		display: block;
		color: #555;
    	text-decoration: none;
	}
	a.left>h4{
		padding-right: 2.13333rem;
	    line-height: .45333rem;
	    color: #222;
		margin-bottom: .16rem;
	    display: -webkit-box;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 2;
	}
	.left>p{
		padding-right: 25%;
	    line-height: .42667rem;
	    color: #999;
	    font-size: .32rem;
	}
	.left>p:nth-of-type(2){
		margin-bottom: 4px;
	}
	a.right{
		position: absolute;
	    right: 0;
	    top: 0;
	    width: 2.13333rem;
	    text-align: right;
	}
	a.right>a{
		display: block;
		margin-bottom: .16rem;
	    line-height: .45333rem;
	    font-size: .37333rem;
	    color: #222;
	}
	a.right>del{
		display: block;
		line-height: .37333rem;
	    color: #98989f;
	    font-size: .32rem;
	}
	.bottom{
		position: relative;
    	height: .64rem;
    	font-size: 16px;
	}
	.bottom>a{
		border-radius: .05333rem 0 0 .05333rem;
		display: inline-block;
		float: left;
	    padding: 0 .08rem;
	    border: 1px solid #e7e7e7;
	    height: .64rem;
	    width: .64rem;
	    line-height: .64rem;
	    text-align: center;
	}
	.bottom>a:nth-of-type(3){
		right: 0;
	    position: absolute;
	    top: 50%;
	    transform: translateY(-50%);
	    border:none;
	}
	.bottom>span{
		float: left;
	    padding: 0 .4rem;
	    height: .64rem;
	    line-height: .64rem;
	    border-top: 1px solid #e7e7e7;
	    border-bottom: 1px solid #e7e7e7;
	    color: #595d65;
	}
	.total{
		color: red;
		text-align: right;
		margin-right: 0.3rem;
	}
	.big{
		padding-top: 1.6rem;
	    padding-bottom: 1.6rem;
	    background-color: #fff;
	    text-align: center;
	    position: relative;
	}
	.bg{
		position: absolute;
	    width: 8.29333rem;
	    height: 3.73333rem;
	    background-image: url(../../assets/images/gb.png);
	    left: 50%;
	    transform: translateX(-50%);
	    -webkit-background-size: 100%;
	    background-size: 100%;
	    top: 0;
	}
	.cart{
		width: 2.93333rem;
	    height: 3.76rem;
	    background-image: url(../../assets/images/cart.png);
	    -webkit-background-size: 100%;
	    background-size: 100%;
	    margin: 0 auto;
	    position: relative;
	}
	.big>h2{
		font-size: .42667rem;
	    color: #222;
	    margin-top: .53333rem;
	    line-height: .74667rem;
	    font-weight: 400;
	}
	.big>p{
		font-size: .37333rem;
	    color: #98989f;
	    line-height: .74667rem;
	    margin-bottom: .48rem;
	}
	.big>a{
		text-decoration: none;
		width: 4.26667rem;
	    display: block;
	    margin: 0 auto;
	    border: 1px solid #de3c96;
	    color: #de3c96;
	    text-align: center;
	    border-radius: .10667rem;
	    line-height: .8rem;
	    position: relative;
    	font-size: .37333rem;
	}
</style>