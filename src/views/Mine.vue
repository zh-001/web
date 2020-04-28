<template>
  <div class="me">
		<router-link to="#">
			<div class="hear" v-if="userinfo">
				<img src="../assets/imgme/icon.gif" alt="" class="img1">
				<span class="text1">用户名:{{userinfo.username}}</span>
				<span class="text2">登录id:{{userinfo.id}}</span>
				<img src="../assets/imgme/icon1.png" alt="" class="img2">
				<img @click="exit" src="../assets/imgme/icon2.png" alt="" class="img3">
				<img src="" alt="">
			</div>
		</router-link>
		
		<div class="boximg"></div>
		
		<div class="din">
			<div class="top">
				<p class="p1">我的订单</p>
				<p class="p2">更多></p>
			</div>
			<div class="con">
				<div v-for="item in imgs" class="item">
					<img :src="item.img" alt="">
					<p>{{item.txt}}</p>
				</div>
			</div>
		</div>
		
		<div class="din">
			<div class="top">
				<p class="p1">我的拍卖</p>
				<p class="p2">更多></p>
			</div>
			<div class="con">
				<div v-for="item in imgs2" class="item">
					<img :src="item.img" alt="">
					<p>{{item.txt}}</p>
				</div>
			</div>
		</div>
		
		<div class="boximg2"></div>
		
  </div>
</template>

<style scoped="scoped" lang="less">
	
	.me{
		margin-bottom: 70px;
		min-height: 5rem;
		background: url(../assets/imgme/personal-bg.png);
		background-color: #f3f3f3!important;
		background-repeat: no-repeat;
		background-size: 7.5rem 4.1rem;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		a{
			color: #000;
			font-size: 12px;
		}
		.hear{
			position: relative;
			top: 0;
			.img1{
				position: absolute;
				top: .8rem;
				left: .4rem;
				width: 1.3rem;
				height: 1.3rem;
				margin-right: .24rem;
				border-radius: 50%;
				overflow: hidden;
			}
			.text1{
				position: absolute;
				top: .8rem;
				left: 2rem;
				font-size: .3rem;
				font-weight: 800;
			}
			.text2{
				position: absolute;
				top: 1.5rem;
				left: 2rem;
				font-size: .25rem;
			}
			.img2,.img3{
				position: absolute;
				top: .4rem;
				width: .48rem;
				height: .48rem;
			}
			.img2{
				right: 1.5rem;
			}
			.img3{
				width: .4rem;
				height: .4rem;
				right: .5rem;
				top: .42rem;
			}
		}
		.boximg{
			margin-top: 2.5rem;
			height: 2.4rem;
			background: url(../assets/imgme/guide.gif) no-repeat;
			background-size: 7.1rem 2.4rem;
			-webkit-box-shadow: 0 0.05rem 0.14rem 0 rgba(55,9,9,.33);
			box-shadow: 0 0.05rem 0.14rem 0 rgba(55,9,9,.33);
		}
		.din{
			margin-top: .26rem;
			-webkit-box-shadow: 0 0.06rem 0.16rem 0 hsla(0,0%,60%,.1);
			box-shadow: 0 0.06rem 0.16rem 0 hsla(0,0%,60%,.1);
			border-radius: .24rem;
			background: #fff;
		}
		.top{
			padding: 0 20px;
			display: flex;
			justify-content: space-between;
			border-bottom: 1px #ccc solid;
			.p1,.p2{
				font-size: .26rem;
			}
			.p2{
				color: #999
			}
		}
		.con{
			display: flex;
			flex-wrap: wrap;
			width: 100%;
			padding: .3rem 0;
			img{
				width: .48rem;
				height: .48rem;
			}
			.item{
				margin-top: 20px;
				margin-left: 5px;
				width: 30%;
				p{
					font-size: 12px;
				}
			}
		}
		.boximg2{
			width: 7.1rem;
			height: 1.6rem;
			margin-top: 0.4rem;
			background: url(http://res2.kongfz.com/wx/shop/image/fanli-bg.jpg) no-repeat;
			background-size: cover;
			-webkit-box-shadow: 0 0.05rem 0.14rem 0 rgba(55,9,9,.33);
			box-shadow: 0 0.05rem 0.14rem 0 rgba(55,9,9,.33);
		}
	}
	
</style>



<script>
import jsCookie from 'js-cookie'
export default {
  name: 'Me',
  components: {
    
  },
  data(){
	  return{
		  userinfo:null,
		  imgs:[
				{
					img:require('../assets/imgme/icon3.png'),
					txt:'待确定'
				},
				{
					img:require('../assets/imgme/icon4.png'),
					txt:'代付款'
				},
				{
					img:require('../assets/imgme/icon5.png'),
					txt:'代发货'
				},
				{
					img:require('../assets/imgme/icon6.png'),
					txt:'代收货'
				},
				{
					img:require('../assets/imgme/icon7.png'),
					txt:'待评价'
				},
				{
					img:require('../assets/imgme/icon8.png'),
					txt:'退款退货'
				},
		  ],
		  imgs2:[
				{
					img:require('../assets/imgme/icon4.png'),
					txt:'代付款'
				},
				{
					img:require('../assets/imgme/icon5.png'),
					txt:'代发货'
				},
				{
					img:require('../assets/imgme/icon6.png'),
					txt:'代收货'
				},
				{
					img:require('../assets/imgme/icon7.png'),
					txt:'待评价'
				},
		  ]
	  }
  },
  created() {
	  this.$api.userinfoAPI().then(res=>{
	  	this.userinfo=res.data.userinfo
		
	  }).catch(err=>{
		  
	  	console.log("出错",err);
	  }) 	
  },
  methods:{
	  exit(){
		  this.$router.push("/")
		  jsCookie.remove('username')
	  }
  }
}
</script>
