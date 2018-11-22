<template>
	<div id="register">
		{{changeHome(false)}}
		<header>
			<h2>密码登录</h2>
			<router-link to="/register"></router-link>
		</header>
		<div>
			<form action="#">
				<div class="username">
					<label for="username">登录名</label>
					<input type="text" name="username" id="username" placeholder="请输入手机号或邮箱">
				</div>
				<div class="password">
					<label for="password">密码</label>
					<input type="text" name="password" id="password" placeholder="请输入密码">
					<a href="#"></a>
				</div>
				<div class="footer">
					<router-link to="/dailyRecommendation">密码登录</router-link>
				</div>
			</form>
		</div>
		<div>
			<p class="forget">
				<a href="#">忘记密码？</a>
			</p>
			<fieldset class="bottom">
				<legend>或</legend>
				<router-link to="/register">手机号注册登录</router-link>
			</fieldset>
		</div>
		
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
			title.innerHTML='唯品会VIP特卖会：登录';
		}
	})
</script>

<style scoped>
	div#register{
		background: #f3f4f5;
		height: 524px;
	}
	header{
		font-size: 18px;
	    font-weight: 300;
	    text-align: center;
	    height: 44px;
	    background: #fff;
	    line-height: 44px;
	    margin-bottom: 15px;
	    position: relative;
	    border-bottom: 1px solid #ddd;
	}
	header>a{
		background: url(../../assets/images/zuo.png) no-repeat 50%;
	    background-size: 50% auto;
	    display: block;
	    width: 48px;
	    height: 48px;
	    position: absolute;
	    left: 0;
	    top: 0;
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
	input#username,input#password{
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
	div.username,div.password{
		height: 52px;
	    background: #fff;
	    line-height: 52px;
	    padding-left: 15px;
	    padding-right: 0;
	    border-bottom: 1px solid #e7e7e7;
	    position: relative;
	}
	div.username:after,div.password:after{
		content: '';
		display: block;
		clear: both;
	}
	div.password>a{
		color: #555;
		height: 52px;
	    width: 50px;
	    position: absolute;
	    right: 0;
	    top: 0;
	    background: url(../../assets/images/yan.png) no-repeat 50%;
    	background-size: 50% auto;
	}
	div.footer{
		padding: 30px 15px 0;
	}
	div.footer>a{
		background: #e0e0e1;
    	color: #98989f;
	    text-decoration: none;
	    text-align: center;
	    border-radius: 3px;
	    box-sizing: border-box;
	    font-size: 16px;
	    display: block;
	    height: 44px;
	    line-height: 44px;
	    width: 100%;
	}
	fieldset.bottom{
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
	p.forget:after{
		content: '';
		clear: both;
		display: block;
	}
	p.forget>a{
		text-decoration: none;
		color: #999;
		font-size: 16px;
	    height: 22px;
	    line-height: 22px;
	    float: right;
	    padding: 12px;
	}
</style>