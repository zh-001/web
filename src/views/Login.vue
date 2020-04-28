<template>
	<div class="login">
		<div class="top">
			<van-icon @click='fan' name="cross" style="float: left;margin-left: .25rem;font-size: 28px;"/>
			<h3>登录书房</h3>
		</div>
		
		<div class="deng" v-if="logtype=='yes'">
			<van-cell-group>
			  <van-field v-model="value" placeholder="邮箱/手机号码/邮箱" />
			  <van-field v-model="password" type="password" placeholder="密码" />
			</van-cell-group>
			<van-button type="primary" size="large" @click="den(1)" class='bucolo'>立即登录/注册</van-button>
			<van-button type="primary" class='sss' size="large" @click="den2('no')">用户密码登录</van-button>
		</div>
		
		<div class="deng2" v-if="logtype=='no'">
			<van-cell-group>
			  <van-field v-model="value" placeholder="手机号码" />
			  <van-field v-model="password" placeholder="短信验证码" />
			  <button  class='yan' @click="yan">获取验证码</button>
			</van-cell-group>
			<van-button type="primary" size="large" @click="den(2)">登录</van-button>
			<van-button class='sss' type="primary" size="large" @click="den2('yes')">手机号登录/注册</van-button>
		</div>
		
		<div v-if="logtype=='yes'" style="margin: 20px 0;">
			<router-link to="/zhuce">立即注册</router-link>|<router-link to="#">忘记密码</router-link>
		</div>
		<div v-if="logtype=='no'" style="margin: 20px 0;">
			<router-link to="#">收不到验证码</router-link>
		</div>
		
		<div class="solidTop">
			<p style="position: relative;top: -20px; font-size: 12px;color: #999;">其他方式登录</p>
			<div class="third">
				<div class="weibo"><i></i></div>
				<div class="zhifubao"><i></i></div>
				<div class="weixin"><i></i></div>	
			</div>
		</div>
		
		
		
		<div style="margin-top: 30px;">
			<router-link to="#">简体</router-link>|<router-link to="#">繁体</router-link>|
			<router-link to="#">Englis</router-link>|<router-link to="#">繁体</router-link>|
			<router-link to="#">隐私政策</router-link>
		</div>
		
		
	</div>
		
</template>

<style scoped="scoped" lang="less">
	.login{
		a{
			font-size: 12px;
			color: #000;
		}
		.van-button--primary{
			width: 80%;
			margin-top: 30px;
			background-color: #C7C7C7;
			border: 1px #C7C7C7 solid;
			border-radius:10px
		}
		.sss{
			background-color: #fff;
			border: 1px #ccc solid;
			color: #000;
		}
		.solidTop{
			margin: 0 auto;
			margin-top: 50px;
			width: 70%;
			border-top: 1px #ccc solid;
		}
		.yan{
			position: relative;
			top: -30px;
			right: -90px;
			background-color: #fff;
			font-size: 12px;
			color: #3333FF;
			border: none;
		}
		.third{
			margin-left: 55px;
			display: flex;
			.weibo,.zhifubao,.weixin{
				width: 30px;
				height: 30px;
				margin: 0 10px;
				border-radius: 50%;
			}
			.weibo{
				background-color: #ed9090;
			}
			.zhifubao{
				background-color: #6bb6ea;
			}
			.weixin{
				background-color: #00be00;
			}
			.weibo i,.zhifubao i,.weixin i{
				background: url(../assets/img/icons_type.png) no-repeat;
				display: block;
				height: 18px;
				margin: 5px auto 0;
			}
			.weibo i{
				background-position: -38px 0;
				width: 18px;
			}
			.zhifubao i{
				background-position: -57px 0;
				width: 26px;
			}
			.weixin i{
				background-position: -84px 0;
				width: 23px;
			}
		}
	}
</style>

<script>
	export default{
		data(){
			return{
				value:'',
				password:'',
				logtype:'yes',  
			}
		},
		methods:{
			fan(){
				this.$toast('返回')
				this.$router.go(-1)
			},
			den2(type){
				this.logtype = type
			},
			yan(){
				console.log("=====")
			},
			den(type){
				if(type==1){
					this.$api.loginAPI({
						fmdo:"telphone",
						dopost:"login",
						telephone:this.tel,
						sms:this.sms
					
					}).then(res=>{
						if(res.data.code==0){
							this.$jsCookie.set('token', res.data.token, { expires: 7 }) 
							this.$jsCookie.set('username', this.tel, { expires: 7 }) 
							let next= this.$route.query.next;
							if(next){
								this.$router.push(next)
							}
							else{
								this.$router.push('/')
							}
						}
						
					}).catch(err=>{
						console.log("登录失败",err);
					})
				}
				else if(type==2){
					this.$api.loginAPI({
						fmdo:"normal",
						dopost:"login",
						userid:this.username,
						pwd:this.password
					
					}).then(res=>{
						if(res.data.code==0){
							this.$jsCookie.set('token', res.data.token, { expires: 7 }) 
							this.$jsCookie.set('username', this.username, { expires: 7 }) 
							let next= this.$route.query.next;
							if(next){
								this.$router.push(next)
							}
							else{
								this.$router.push('/')
							}
						}
						
					}).catch(err=>{
						console.log("登录失败",err);
					})
				}
				else if(type==3||type==4||type==5)
				{
					this.$api.loginAPI({
						fmdo:"third",
						dopost:"login",
						token:""
					
					}).then(res=>{
						if(res.data.code==0){
							this.$jsCookie.set('token', res.data.token, { expires: 7 }) 
							this.$jsCookie.set('username', this.username, { expires: 7 }) 
							let next= this.$route.query.next;
							if(next){
								this.$router.push(next)
							}
							else{
								this.$router.push('/')
							}
						}
						
					}).catch(err=>{
						console.log("登录失败",err);
					})
				}
			},
		}
	}
</script>
