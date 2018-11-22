<template>
	<section id="search">
		{{changeHome(false)}}
		<header>
			<div class="triangle">
				<router-link to="/dailyRecommendation">
					<svg class="icon" aria-hidden="true" id="triangle">
					  <use xlink:href="#icon-fanhui"></use>
					</svg>
				</router-link>
			</div>
			<div class="inputS">
				<!-- 暂时没有试成功<mt-search v-model="value" placeholder="搜索品牌或商品">
  					<mt-cell v-for="item in result" :title="item.title" :value="item.value"></mt-cell>
				</mt-search> -->
				<mt-search v-model="value" placeholder="搜索品牌或商品" :result="filterResult"></mt-search>
			</div>
			<div class="sou">
				<a href="#">搜索</a>
			</div>
		</header>
		<footer>
			<h2>热门搜索</h2>
			<div>
				<router-link to="/classifivation" v-for="(v,i) in list">{{v}}</router-link>
			</div>
		</footer>
	</section>
</template>

<script>
	export default({
		data(){
			return{
				"value":'',
				"list":['新人限时秒杀',"女鞋","面膜","卫衣","外套","女款羽绒服","口红"],
				'result':[
					{
						"title":'aa',
						"value":'aa'
					},
					{
						"title":'bb',
						"value":'bb'
					}
				],
				defaultResult: [
			        'Apple',
			        'Banana',
			        'Orange',
			        'Durian',
			        'Lemon',
			        'Peach',
			        'Cherry',
			        'Berry',
			        'Core',
			        'Fig',
			        'Haw',
			        'Melon',
			        'Plum',
			        'Pear',
			        'Peanut',
			        'Other',
			        '阿迪达斯',
			        '帽子',
			        '围巾',
			        '毛巾'
			    ]
			}
		},
		methods:{
			changeHome(a){
				this.$store.commit('nohome',a);
			}
		},
		computed: {
		    filterResult() {
		      return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
		    }
		},
		mounted(){
			title.innerHTML='唯品会VIP特卖会：搜索';
		}
	})
</script>

<style>
	div#search{
		position: fixed;
		width:100%;
		height: 100%;
		background:#f60;
	}
	header:after{
		content: '';
		display: block;
		clear: both;
	}
	header{
		width: 100%;
		height: 1.17333rem;
	    background-color: #fbfbfa;
	    color: #555;
	    text-align: center;
	    z-index: 33;
	    overflow: hidden;
	}
	header>.triangle{
		float: left;
		height: 100%;
		padding: 0 .4rem;
    	position: relative;
	}
	.inputS{
		font-size: 15px;
	    padding: .16rem .26667rem;
	    z-index: 7;
	    width: 7.6rem;
	    height: 1.17333rem;
	    box-sizing: border-box;
	    padding-right: 0;
	    float: left;
	}
	.mint-searchbar-cancel{
		display: none;
	}
	.mint-search{
		height: 1.07333rem;
	}
	.mint-searchbar{
		padding: 0;
		background-color: #fff;
		border: 1px solid lightgrey;
		border-radius: 2.66667rem;
	}
	.mint-searchbar input{
		padding: 0 0.2rem;
		background-color: #fff;
	}
	#search .mintui-search{
		display: none;
	}
	.mint-searchbar-inner{
		border-radius: 2.66667rem;
		height: 0.6rem;
	}
	.mint-cell-title{
		text-align: left;
	}
	.sou{
		float: right;
		width: 1.6rem;
		display: inline-block;
		font-size: .37333rem;;
		height: 1.17333rem;
    	line-height: 1.17333rem;
	}
	.sou>a{
		display: block;
		text-decoration: none;
		color: #585c64;
	}
	footer{
		padding: .4rem .4rem 0;
    	margin-top: -.16rem;
	}
	footer>h2{
		font-size: .32rem;
	}
	footer>div{
		margin: .13333rem 0;
    	padding-bottom: .50667rem;
	}
	footer>div:after{
		content: '';
		display: block;
		clear: both;
	}
	footer>div>a{
		text-decoration: none;
		color: #5d78ab;
	    font-size: .32rem;
	    padding: 0 .4rem;
	    line-height: .74667rem;
	    height: .74667rem;
	    max-height: .74667rem;
	    margin: .13333rem .13333rem .16rem 0;
	    max-width: 100%;
	    float: left;
	    box-sizing: border-box;
	    border: 1px solid #c4cddc;
	}    
	footer>div>a:nth-of-type(1){
		color: #e4007f;
    	border-color: #e4007f;
	}
</style>