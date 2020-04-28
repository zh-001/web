<template>
	<div class="category">
		<div class="nav">
			<p class="navtxt">书店区</p>
		</div>
		<!-- 轮播图 -->
		<div class="homeimg" v-if="goods!=null">			
			<van-swipe :autoplay="3000">
			  <van-swipe-item v-for="(item, indexOne) in images" :key="indexOne">
			    <img v-lazy="item" />
			  </van-swipe-item>
			</van-swipe>
		</div>
		<div class="ul">
			<van-row type="flex" justify="space-around">
			  <van-col span="4">
				  <img src="https://img0.kfzimg.com/operation/37/04/3704e889c9bf128f0885b56aff3e139f.png" alt="">
					<p>线装古籍</p>
			  </van-col>
			  <van-col span="4">
				  <img src="https://img0.kfzimg.com/operation/2a/16/2a160cbf488782342afa5ca7c08d6b16.png" alt="">
					<p>民国旧书</p>
			  </van-col>
			  <van-col span="4">
				  <img src="https://img0.kfzimg.com/operation/70/4a/704af39433730039bce141f312674ea3.png" alt="">
					<p>名人墨迹</p>
			  </van-col>
			  <van-col span="4">
				  <img src="https://img0.kfzimg.com/operation/b4/cd/b4cd48f2f8adfa4ba92271061e1292bc.png" alt="">
					<p>古玩杂项</p>
			  </van-col>
			  <van-col span="4">
				  <img src="https://img0.kfzimg.com/operation/d3/71/d371a223d9c055abf993c068520117c7.png" alt="">
					<p>全部分类</p>
			  </van-col>
			</van-row>
		</div>
		
		<div class="linghtc"></div> <!-- 分割线 -->
		
		<!-- 导入数据h1010 -->
		<div v-for="good in goods[9].goodlist" style="padding: 0 3px;margin:20px 0;">
			<div v-for="list in good.result.list" style="display: flex;width: 100%;justify-content: space-between;">
				<div v-for="arr in list.data" style=" display: flex;
					justify-content: space-between;
				    width: 3.42rem;
				    height: 1.32rem;
				    background: #fafafa;
				    border-radius: .08rem;">
					<div class="box1">
						<p class="p1">{{arr.title}}</p>
						<p class="p2">{{arr.subTitle}}</p>
					</div>
					<img :src="arr.imgUrl" alt="" class="box">
				</div>
			</div>
		</div>
		
		<div class="linghtc"></div> <!-- 分割线 -->
		
		<!-- 导入数据h1011 -->
		<div v-for="good in goods[10].goodlist[0].result.list" class="feat">
			<h3>{{good.name}}</h3>
			<div v-if="good.name=='特色推荐'">
				<van-tabs>
				  <van-tab v-for="list in good.data" :title="list.subTitle">
						<div class="subarea">
							<div v-for="arr in list.data">
								<router-link :to="'/detail/'+arr.shopId">
									<img :src="arr.imgUrl" alt="">
									<p class="p1">{{arr.itemName}}</p>
									<p class="p2">￥{{arr.price}}</p>
								</router-link>
							</div>						
						</div>
				  </van-tab>
				</van-tabs>
			</div>
			<div class="box5" v-if="good.name=='书单推荐'">
				
				<div v-for="list in good.data" class="auth2">
					<img :src="list.imgUrl" alt="">
					<p class="p2">{{list.description}}</p>
				</div>
			</div>
		</div>
		
		<div class="linghtc"></div> <!-- 分割线 -->
		
		<!-- 导入数据h1012 -->
		<div v-for="good in goods[11].goodlist[0].result.list" class="feat">
			<h3>{{good.name}}</h3>
			<van-tabs>
			  <van-tab v-for="list in good.data" :title="list.subTitle">
					<div class="subarea2">
						<div v-for="arr in list.data">
							<img :src="arr.imgUrl" alt="">
							<p class="te1">{{arr.shopName}}</p>
							<p class="te2">{{arr.tags[0]}}</p>
							<p class="te3">{{arr.tags[1]}}</p>
							<div class="boxx">
								<van-button plain size="mini" type="danger">进店</van-button>
							</div>
							<div class="subarea">
								<div class="subbox" v-for="item in arr.data">
									<img :src="item.imgUrl" alt="">
									<p class="p1">{{item.itemName}}</p>
									<p class="p2">￥{{item.price}}</p>
								</div>
							</div>
						</div>
					</div>
			  </van-tab>
			</van-tabs>
		</div>
		
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Lazyload } from 'vant';
	
	Vue.use(Lazyload);
	import data from '../data'
	export default{
		data(){
			return{
				goods:null,
				images: [
					'https://img0.kfzimg.com/operation/5c/ec/5cecab9f492c69a0c9bf0854c59fd6a5.jpg',
					'https://img0.kfzimg.com/operation/e3/ff/e3ff03a5f5b301174fa1ebf27adc8b2b.jpg',
					'https://img0.kfzimg.com/operation/d4/5c/d45c2c443293741b6e680bb9e331f774.jpg',
					'https://img0.kfzimg.com/operation/61/69/616931cc97d16453b62a5340f135a92a.jpg',
					'https://img0.kfzimg.com/operation/ac/82/ac8219b327d38590ba3173b76afc62a8.jpg',
					'https://img0.kfzimg.com/operation/43/a6/43a632e3c69f5e62ed5c97e4b5d4f538.jpg',
					'https://img0.kfzimg.com/operation/5f/43/5f430aa708b2d9f6fae808df938b1a24.jpg'
				],
			}
		},
		created(){
			this.goods = data[0].data.advList
			console.log(this.goods[9])
		},
		methods:{
			
		}
	}
</script>

<style scoped="scoped" lang="less">
	.category{
		.linghtc{
			width: 100%;
			height: .16rem;
			background: #f3f3f3;
		}
		*{
			margin: 0;
			padding: 0;
		}
		.nav{
			position:fixed; 
			top:0; 
			width: 100%;
			height: .88rem;
			background-color: #fff;
			.navtxt{
				line-height: .88rem;
				font-size: .34rem;
				color: #262626;
				font-weight: 600;
			}
		}
		.homeimg{
			margin-top: 60px;
			img{
				width: 100%;
				height: 3rem;
			}
		}
		.ul{
			margin: 20px 0;
			padding: 0 10px;
			img{
				width: .88rem;
				height: .88rem;
			}
			p{
				font-size: 0.2rem;
			}
		}
		.box{
			width: 1.04rem;
			height: 1.04rem;
			// text-align: center;
			// line-height: 1.04rem;
			// margin-top: .14rem;
			// margin-right: .2rem;
			border-radius: .08rem;
			// font-size: 0;
		}
		.box1{
			// margin-top: .24rem;
			// margin-left: .2rem;
			.p1{
				font-size: .3rem;
				font-weight: 700;
				color: #333;
			}
			.p2{
				font-size: .24rem;
				color: #999;
			}
		}
		.feat{
			padding: 0 10px;
			margin-bottom: 20px;
			h3{
				text-align: left;
				margin-left: 10px;
				margin: 20px 10px;
			}
			.box5{
				display: flex;
				overflow-x: scroll;
			}
			.box5::-webkit-scrollbar{
				display: none;
			}
			.auth2{
				width: 6rem;
				border: .01rem #ccc solid;
				margin-left: 10px;
				img{
					width: 6rem;
					height: 3rem;
					line-height: 3rem;
				}
				.p2{
					font-size: .22rem;
					color: #999;
				}
			}
		}
		.subarea{
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			margin-top: 20px;
			img{
				border-radius: .08rem;
				width: 2.1rem;
				height: 2.1rem;
			}
			.p1{
				width: 2.1rem;
				height: .7rem;
				font-size: .26rem;
				color: #262626;
				text-align: justify;
				overflow: hidden;
				margin-top: .16rem;
				overflow: hidden;
			}
			.p2{
				width: 100%;
				color: #9e100e;
				margin-top: .04rem;
			}
		}
		.subarea2{
			margin-top: 20px;
			width: 100%;
			height: 5.1rem;
			background: #fafafa;
			border-radius: .16rem;
			margin-bottom: .2rem;
			.te1,.te2,.te3{
				text-align: left;
				margin-left: 10px;
			}
			.te1{
				font-weight: 600;
				font-size: .3rem;
				color: #262626;
			}
			.te2,.te3{
				font-size: .22rem;
				color: #999;
			}
			.boxx{
				float: right;
				transform: translateY(-40px);
			}
		}
	}
</style>
