<template>
	<div id="login">
		{{changeHome(false)}}
		<header>
			<div></div>
			<router-link to="/dailyRecommendation"><span>×</span></router-link>
		</header>
		<div>
			<form action="#">
				<div class="mobile">
					<label for="mobile">手机号</label>
					<input type="text" name="mobile" id="mobile" placeholder="请输入手机号">
				</div>
				<div class="code">
					<label for="code">验证号</label>
					<input type="text" name="code" id="code" placeholder="请输入验证码">
					<button>获取验证码</button>
				</div>
				<div class="footer">
					<router-link to="/dailyRecommendation">手机号注册登录</router-link>
					<p>
						<i></i>同意<router-link to="/dailyRecommendation">《唯品会服务条款》</router-link>、<router-link to="/dailyRecommendation">《隐私条款》</router-link>、<router-link to="/dailyRecommendation">《唯品支付用户服务协议》</router-link>、<router-link to="/dailyRecommendation">《唯品信用服务协议》</router-link>
					</p>
				</div>
			</form>
		</div>
		<fieldset class="bottom">
			<legend>或</legend>
			<router-link to="/login">密码登录</router-link>
		</fieldset>
	</div>
</template>

<script>
	export default({
		methods:{
			changeHome(a){
				this.$store.commit('nohome',a);
			}
		},
		mounted(){
			title.innerHTML='唯品会VIP特卖会：注册';
		}
	})
</script>

<style scoped>
	.router-link-active{
		color: #d34ba8;
	}
	header{
		background: #f6f6f6 url(../../assets/images/bcg.jpg) no-repeat 0 0;
   		height: 170px;
   		position: relative;
	}
	header>div{
		width: 125px;
	    height: 50px;
	    background: url(../../assets/images/wei.png) no-repeat 0 0;
	    background-size: 100% auto;
	    position: absolute;
	    left: 50%;
	    top: 50%;
	    transform: translate(-50%,-50%);
	}
	header>a{
		position: absolute;
		color: #222;
	    border-radius: 12px;
	    line-height: 20px;
	    display: block;
	    text-align: center;
	    height: 20px;
	    width: 20px;
	    font-size: 25px;
	    padding: 1px;
	    top: 5px;
	    right: 10px;
	    text-decoration: none;
	}
	header>a>span{
		display: block;
	}
	label{
		float: left;
	    font-size: 16px;
	    margin-right: 15px;
	    height: 52px;
	    line-height: 52px;
	    padding: 0;
	    display: block;
	    position: relative;
	    width: auto;
	}
	input#mobile,input#code{
		float: left;
	    font-size: 16px;
	    height: 20px;
	    background-color: #fff;
	    border: none;
	    padding: 16px 0 15px;
	    color: #222;
	    border:0;
	    outline: 0;
	}
	div.mobile,div.code{
		height: 52px;
	    background: #fff;
	    line-height: 52px;
	    padding-left: 15px;
	    padding-right: 0;
	    border-bottom: 1px solid #e7e7e7;
	    position: relative;
	}
	div.mobile:after,div.code:after{
		content: '';
		display: block;
		clear: both;
	}
	div.code>button{
		color: #98989f;
		height: 52px;
	    line-height: 52px;
	    width: 120px;
	    background-color: transparent;
	    font-size: 16px;
	    border: 0 none;
	    border-left: 1px solid #e7e7e7;
	    outline: 0 none;
	    padding: 0;
	    position: absolute;
	    right: 0;
	    top: 0;
	}
	div.footer{
		padding: 30px 15px 0;
	}
	div.footer>a{
		background: #de3d96;
	    text-decoration: none;
	    text-align: center;
	    border-radius: 3px;
	    box-sizing: border-box;
	    font-size: 16px;
	    color: #fff;
	    display: block;
	    height: 44px;
	    line-height: 44px;
	    width: 100%;
	}
	div.footer>p{
		padding-top: 12px;
	    padding-left: 24px;
	    letter-spacing: .02rem;
	    font-size: 12px;
	    color: #98989f;
	}
	div.footer>p>i{
		display: inline-block;
	    margin-right: 2px;
	    margin-left: -24px;
	    width: 21px;
	    height: 22px;
	    vertical-align: middle;
	    background: url(../../assets/images/check.png) no-repeat;
	    background-size: 100%;
	    background-position: 0 -22px;
	}
	div.footer>p>a{
		color: #157efa;
		text-decoration: none;
	}
	fieldset.bottom{
		margin-top: 16px;
		position: relative;
	    height: 120px;
	    text-align: center;
	    clear: both;
	    color: #dbdbdb;
	    border-top: 1px solid #dbdbdb;
	    border-right: 0;
	    font-size: 12px;
	    border-left: 0;
	    border-bottom: 0;
	}
	fieldset.bottom>legend{
		width: 32px;
		color:  #dbdbdb;
	}
	fieldset.bottom>a{
		text-decoration: none;
		height: 36px;
	    line-height: 36px;
	    padding: 0 14px;
	    border-radius: 3px;
	    display: inline-block;
	    border: 1px solid #e4007f;
	    color: #e4007f;
	    margin: 13px auto;
	    font-size: 14px;
	}
</style>