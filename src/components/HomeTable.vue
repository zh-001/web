<template>
	<div class="con">
		
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
		<div class="hometab" v-if="goods[0].active=='h101'">
			<div v-if="good.name!='拍卖'" v-for="(good,index) in goods[0].goodlist[0].result.list" 
			style="display: flex;width: 100%;">
				<div v-for="list in good.data" class="box">
					<div style="width: 60%;">
						<p style="font-size: .3rem;font-weight: 800;">{{list.title}}</p>
						<p style="font-size: .24rem;">{{list.subTitle}}</p>
					</div>
					<div style="width: 40%;">
						<img :src="list.imgUrl" alt="" class="imgs">
					</div>
				</div>
			</div>
			
			<div class="linghtc"></div> <!-- 分割线 -->
			<!-- 拍卖 -->
			<div class="area"><h3>拍卖</h3></div>
			<div v-if="good.name=='拍卖'" v-for="(good,index) in goods[0].goodlist[0].result.list"
			style="display: flex;width: 100%;flex-wrap:wrap">
				<div v-for="list in good.data" class="box">
					<div style="width: 60%;">
						<p style="font-size: .3rem;font-weight: 800;">{{list.title}}</p>
						<p style="font-size: .24rem;">{{list.subTitle}}</p>
					</div>
					<div style="width: 40%;">
						<img :src="list.imgUrl" alt="" class="imgs">
					</div>
				</div>
			</div>
		</div>
		<div class="hometab" v-if="goods[1].active=='h102'" style="margin-top: -10px;">
			<div v-for="(good,index) in goods[1].goodlist[0].result.list"
			style="display: flex;width: 100%;flex-wrap:wrap">
				<div v-if="list.description != '墨笺楼 4.25-4.30 古有虚斋·今有虚苑·虚苑e术'" v-for="list in good.data" class="box">
					<div style="width: 60%;">
						<p style="font-size: .3rem;font-weight: 800;">{{list.title}}</p>
						<p style="font-size: .24rem;">{{list.subTitle}}</p>
					</div>
					<div style="width: 40%;">
						<img :src="list.imgUrl" alt="" class="imgs">
					</div>
				</div>
			</div>
		</div>
		
		<div class="linghtc"></div> <!-- 分割线 -->
		<!-- 好书推荐 -->
		<div class="hometab2" v-if="goods[2].active=='h103'">
			<div v-for="(good,index) in goods[2].goodlist[0].result.list" style="padding: 0 15px;">
				<div style="width: 100%;height: 50px;position: relative;">
					<h3 style="display: inline-block;position:absolute; left: 0;">{{good.name}}</h3>
					<a href="#" style="position: absolute;right: 0;top: 20px;font-size: 12px;"> 更多> </a>
				</div>
				<div class="box5" v-if="good.name=='好书推荐'">
					<div v-for="list in good.data[0].data" class="auth">
						<router-link :to="'/detail/'+list.mid">
							<img :src="list.imgUrl" alt="">
							<p class="p1">{{list.itemName}}</p>
							<p class="p2">{{list.author}}</p>
							<p class="p3">￥{{list.price}}</p>
						</router-link>
						
					</div>
				</div>
				<div class="box5" v-if="good.name=='书单推荐'">
					<div v-for="list in good.data" class="auth2">
						<img :src="list.imgUrl" alt="">
						<p class="p2">{{list.description}}</p>
					</div>
				</div>
				<div class="box6" v-if="good.name=='新书广场'">
					<div v-for="list in good.data[0].data" class="auth3">
						<img :src="list.imgUrl" alt="">
						<p class="p1">{{list.itemName}}</p>
					</div>
				</div>				
				<br>
				<div class="linghtc"></div> <!-- 分割线 -->
			</div>
		</div>
		
		<!-- 旧书-国学经典 -->
		<div class="hometab3" v-if="goods[3].active=='h104'">
			<div v-for="(good,index) in goods[3].goodlist[0].result.list">
				<div style="width: 100%;height: 50px;position: relative;">
					<h3 style="display: inline-block;position:absolute; left: 0;">{{good.name}}</h3>
					<a href="#" style="position: absolute;right: 0;top: 20px;font-size: 12px;"> 更多> </a>
				</div>
				<div v-for="list in good.data[0].data" class="boxming">
					<div class="box1">
						<img :src="list.imgUrl" alt="">
					</div>
					<div class="box2">
						<p class="p1">{{list.itemName}}</p>
						<p class="p2">{{list.author}}/{{list.press}}/{{list.pubDate}}
						/{{list.binding}}</p>
						<p class="p3">{{list.contentIntroduction}}</p>
					</div>
				</div>
			</div>
		</div>
		
		<div class="linghtc"></div> <!-- 分割线 -->
		<!-- 旧籍寻踪 -->
		<div class="hometab4" v-if="goods[4].active=='h105'">
			<div v-for="(good,index) in goods[4].goodlist[0].result.list">
				<div style="width: 100%;height: 50px;position: relative;margin-bottom: 20px;">
					<h3 style="display: inline-block;position:absolute; left: 0;">{{good.name}}</h3>
					<a href="#" style="position: absolute;right: 0;top: 20px;font-size: 12px;"> 更多> </a>
				</div>
				<div class="area">
					<div v-for="list in good.data[0].data" class="text">
						<div class="box">
							<img :src="list.imgUrl" alt="">
							<p class="p1">{{list.itemName}}</p>
							<p class="p2">￥{{list.price}}</p>
						</div>
						<div class="linghtc"></div> <!-- 分割线 -->
					</div>
				</div>
			</div>		
		</div>
		<div class="hometab4" v-if="goods[5].active=='h106'">
			<div v-for="(good,index) in goods[5].goodlist[0].result.list">
				<div style="width: 100%;height: 50px;position: relative;margin-bottom: 20px;">
					<h3 style="display: inline-block;position:absolute; left: 0;">{{good.name}}</h3>
					<a href="#" style="position: absolute;right: 0;top: 20px;font-size: 12px;"> 更多> </a>
				</div>
				<div class="area">
					<div v-for="list in good.data[0].data" class="text">
						<div class="box">
							<img :src="list.imgUrl" alt="">
							<p class="p1">{{list.itemName}}</p>
							<p class="p2" v-if="list.price">￥{{list.price}}</p>
							<p class="p2" v-if="!list.price">
							<span style="font-size: 10px;color: #BCBCBC;">{{list.pmprice.n}}</span>
							{{list.pmprice.c}}
							</p>
						</div>
						<div class="linghtc"></div> <!-- 分割线 -->
					</div>
				</div>
			</div>		
		</div>
		
		<div class="hometab4" v-if="goods[6].active=='h107'">
			<div v-for="(good,index) in goods[6].goodlist[0].result.list">
				<div style="width: 100%;height: 50px;position: relative;margin-bottom: 20px;">
					<h3 style="display: inline-block;position:absolute; left: 0;">{{good.name}}</h3>
					<a href="#" style="position: absolute;right: 0;top: 20px;font-size: 12px;"> 更多> </a>
				</div>
				<div class="area" v-if="good.name=='期刊拍卖'">
					<div v-for="list in good.data[0].data" class="text">
						<div class="box">
							<img :src="list.imgUrl" alt="">
							<p class="p1">{{list.itemName}}</p>
							<p class="p2" v-if="list.price">￥{{list.price}}</p>
							<p class="p2" v-if="!list.price">
							<span style="font-size: 10px;color: #BCBCBC;">{{list.pmprice.n}}</span>
							{{list.pmprice.c}}
							</p>
						</div>
						<div class="linghtc"></div> <!-- 分割线 -->
					</div>
				</div>	
				<!-- 艺术品拍卖 -->
				<div v-if="good.name=='艺术品拍卖'" class="paimai">
					<div style="display: flex;width: 100%;flex-wrap: wrap;">
						<div v-for="list1 in good.bqList" class="text" style="width: 33%;">
							<van-button type="default" round >{{list1.title}}</van-button>
						</div>
					</div>
					<div class="area">
						<div v-for="list in good.data[0].data" class="text">
							<div class="box">
								<img :src="list.imgUrl" alt="">
								<p class="p1">{{list.itemName}}</p>
								<p class="p2" v-if="list.price">￥{{list.price}}</p>
								<p class="p2" v-if="!list.price">
								<span style="font-size: 10px;color: #BCBCBC;">{{list.pmprice.n}}</span>
								{{list.pmprice.c}}
								</p>
							</div>
							<div class="linghtc"></div> <!-- 分割线 -->
						</div>
					</div>	
				</div>
				
				<div v-if="good.name=='艺术品专场'">					
					<div class="area">
						<div v-for="list in good.data">
							<p style="font-size: 13px;">{{list.name}}</p>
							<div style="display: flex;">
								<div class="box" v-for="arr in list.data" style="margin-left: 10px;">
									<img :src="arr.imgUrl" alt="">
									
								</div>
							</div>
							<p style="font-size: 10px;text-align: left;margin-left: 20px;">{{list.time}}</p>
							<div class="linghtc"></div> <!-- 分割线 -->
						</div>
					</div>	
				</div>
				
			</div>
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
			console.log(this.goods[1].active)
		},
		methods:{
			tofen(){
				console.log("====")
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.con{
		.homeimg{
			margin-top: 60px;
			img{
				width: 100%;
				height: 3rem;
			}
		}
		.ul{
			margin-top: 20px;
			padding: 0 10px;
			img{
				width: .88rem;
				height: .88rem;
			}
			p{
				font-size: 0.2rem;
			}
		}
		img{
			border-radius: 10px;
		}
		.linghtc{
			width: 100%;
			height: .16rem;
			background: #f3f3f3;
		}
		margin-bottom: 50px;
		background-color: #fff;
		.hometab{
			margin-top: 10px;
			.box{
				width: 43%;
				height: 1.5rem;
				background-color: #FAFAFA;
				display: flex;
				margin: 10px 10px;
				.box1{
					display: flex;
				}
			}
		}
		.imgs{
			max-width: 80%;
			max-height: 80%;
			margin-top: 15px;
		}
		.area{
			width: 100%;
			h3{
				text-align: left;
				padding-left: 0.25rem;
			}
		}
		.hometab2{
			.box5{
				display: flex;
				overflow-x: scroll;
			}
			.box5::-webkit-scrollbar{
				display: none;
			}
			.auth{
				margin-right: 10px;
				width: 104.194px;
				img{
					height: 2.8rem;
				}
				p{
					text-align: left;
					text-overflow:ellipsis; 
					white-space:nowrap; 
					overflow:hidden; 
				}
				.p1{
					font-size: .26rem;
				}
				.p2{
					font-size: .22rem;
					color: #999;
				}
				.p3{
					font-size: .3rem;
					color: #9e100e;
				}
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
			.box6{
				width: 100%;
				.auth3{
					margin-top: 20px;
					display: flex;
					width: 100%;
					img{
						width: 2rem;
						height: 2rem;
						
					}
					.p1{
						padding-right: 10px;
						font-weight: 800;
						text-overflow:ellipsis;
						white-space:nowrap; 
						overflow:hidden;
					}
				}
			}
		}
		.hometab3{
			padding: 0 10px;
			.boxming{
				width: 100%;
				display: flex;
				.box1{
					width: 40%;
					img{
						margin-top: 15px;
						width: 2rem;
						height: 2rem;
					}
				}
				.box2{
					width: 60%;
					.p1{
						font-size: .3rem;
						font-weight: 700;
						color: #262626;
						text-overflow:ellipsis;
						white-space:nowrap; 
						overflow:hidden;
					}
					.p2{
						font-size: .24rem;
					}
					.p3{
						font-size: .24rem;
						color: #999;
						text-align: justify;
					}
				}
			}
		}
		.hometab4{
			padding: 0 10px;
			.area{
				display: flex;
				overflow-x: scroll;
				.box{
					width: 2.1rem;
					img{
						width: 2rem;
						height: 2rem;
					}
					p{
						text-align: left;
					}
					.p1{
						width: 2rem;
						height: .7rem;
						font-size: .26rem;
						color: #262626;
						overflow: hidden;
						margin-top: .16rem;
					}
					.p2{
						color: #9e100e;
						margin-top: .04rem;
						font-size: 14px;
					}
				}
			}
			.area::-webkit-scrollbar{
				display: none;
			}
			.paimai{
				.van-button--normal{
					margin-bottom: 10px;
					
				}
			}
			.arr{
				display: flex;
				overflow-x: scroll;
			}
		}
	}
	
</style>
