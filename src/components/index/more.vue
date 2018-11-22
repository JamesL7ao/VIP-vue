<template>
	 <div id="more">
		<ul class="recommendation">
			<li>
				<router-link to="/dailyRecommendation">
					<div>
						<i></i>
						<span>今日推荐</span>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="/dailyRecommendation">
					<div>
						<i></i>
						<span>最后疯抢</span>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="/dailyRecommendation">
					<div>
						<i></i>
						<span>时尚</span>
					</div>
				</router-link>
				<li>
				<router-link to="/dailyRecommendation">
					<div>
						<i></i>
						<span>美妆</span>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="/dailyRecommendation">
					<div>
						<i></i>
						<span>母婴</span>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="/dailyRecommendation">
					<div>
						<i></i>
						<span>家电</span>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="/dailyRecommendation">
					<div>
						<i></i>
						<span>家居</span>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="/dailyRecommendation">
					<div>
						<i></i>
						<span>国际</span>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="/dailyRecommendation">
					<div>
						<i></i>
						<span>生活</span>
					</div>
				</router-link>
			</li>
		</ul>
		<div class="second">
			<h3>更多推荐</h3>
			<ul>
				<li v-for="(v,i) in list">
					<router-link to="/crazy">
						<span>{{v}}</span>
					</router-link>
				</li>
			</ul>
		</div>
	 </div>
</template>

<script>
	export default{
		name:"more",
		data(){
			return{
				list:["女装","男装","鞋包","运动户外","家居家纺","数码家电","大家电","家具家装","手表配饰","男女内衣","唯风尚","唯品优选"]
			}
		}
	}
</script>

<style scoped>
	ul.recommendation{
		display: flex;
		flex-wrap: wrap;
		border-bottom: 1px dashed grey;
	}
	ul.recommendation>li{
		width: 25%;
	    height: 1.92rem;
	    text-align: center;
	    position: relative;
	}
	ul.recommendation>li>a{
		display: block;
		width: 100%;
		height: 100%;
		text-decoration: none;
	}
	ul.recommendation>li>a>div{
		width: 100%;
		position: absolute;
		left: 50%;
		top: 50%;
		transform:translate(-50%,-50%);
	}
	ul.recommendation>li i{
		margin: 0 auto;
	}
	ul.recommendation>li span{
		display: block;
		margin-top: .21333rem;
		color: #585c64;
		text-align: center;
		font-size: .32rem;
	}
	ul.recommendation>li i{
		display: block;
	    width: 0.53333rem;
	    height: 0.53333rem;
	    background-size: 100% 100%;
	}
	ul.recommendation>li:nth-of-type(1) i{
		background: url(../../assets/images/tui.png) no-repeat;
		background-size: 100% 100%;
	}
	ul.recommendation>li:nth-of-type(2) i{
		background: url(../../assets/images/zui.png) no-repeat;
		background-size: 100% 100%;
	}
	ul.recommendation>li:nth-of-type(3) i{
		background: url(../../assets/images/shi.png) no-repeat;
		background-size: 100% 100%;
	}
	ul.recommendation>li:nth-of-type(4) i{
		background: url(../../assets/images/mei.png) no-repeat;
		background-size: 100% 100%;
	}
	ul.recommendation>li:nth-of-type(5) i{
		background: url(../../assets/images/mu.png) no-repeat;
		background-size: 100% 100%;
	}
	ul.recommendation>li:nth-of-type(6) i{
		background: url(../../assets/images/jia.png) no-repeat;
		background-size: 100% 100%;
	}
	ul.recommendation>li:nth-of-type(7) i{
		background: url(../../assets/images/ju.png) no-repeat;
		background-size: 100% 100%;
	}
	ul.recommendation>li:nth-of-type(8) i{
		background: url(../../assets/images/guo.png) no-repeat;
		background-size: 100% 100%;
	}
	ul.recommendation>li:nth-of-type(9) i{
		background: url(../../assets/images/sheng.png) no-repeat;
		background-size: 100% 100%;
	}
	h3{
		font-size: 0.38rem;
		margin-top: 0.2rem;
		padding-left: 0.2rem;
		color: #585c64;
	}
	div.second{
		border-bottom: 1px dashed grey;
		padding: 0.1rem 0;
	}
	div.second>ul:before{
		content: '';
		display: block;
		clear: both;
	}
	div.second>ul>li{
		float: left;
		width: 25%;
	}
	div.second>ul>li>a{
		text-decoration: none;
		display: block;
	    margin: 0.13333rem .26667rem;
	    background-color: #f3f4f5;
	    height: 1.01333rem;
	    line-height: 1.01333rem;
	    font-size: .32rem;
	    border-radius: 2px;
    	text-align: center;
	}
	div.second>ul span{
		display: block;
		margin-top: .21333rem;
		color: #585c64;
		text-align: center;
		font-size: .38rem;
	}
</style>