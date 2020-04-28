<template>
	<div class="detail">
		<div style="width: 100%;
		height: 7.5rem;background-color: #ccc;position: fixed;top: 0;">
		<img src="../assets/img/imgle.png" alt="" class="le" @click="fan">
			<p class="p1">商品id:
			<span class="p2">{{$route.params.id}}</span></p>
		</div>
		
		<van-sku
		  v-model="show"
		  :sku="sku"
		  :goods="goods"
		  @buy-clicked="onBuyClicked"
		  @add-cart="onAddCartClicked"
		  @sku-selected = "skuSe"
		/>
		
		<van-goods-action>
		<van-goods-action-icon icon="chat-o" text="首页" @click="onClickHome" />
		  <van-goods-action-icon icon="chat-o" text="客服"/>
		  <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickCart" />
		  <van-goods-action-button
		    type="warning"
		    text="加入购物车"
		    @click="onAddCartClicked"
		  />
		  <van-goods-action-button
		    type="danger"
		    text="立即购买"
		    @click="onBuyClicked"
		  />
		</van-goods-action>
		
	</div>
</template>
<style scoped="scoped" lang="less">
	.detail{
		.p1{
			font-size: 30px;
			font-weight: 700;
			text-align: center;
		}
		.p2{
			color: red;
		}
	}
</style>
<script>
	export default{
		name:'Detail',
		data(){
			return{
				goods:{
						
				},
				show: false,
				sku: {
						  // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
						  // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
						  tree: [
							{
							  k: '颜色', // skuKeyName：规格类目名称
							  v: [
								{
								  id: '1167', // skuValueId：规格值 id
								  name: '深海微光', // skuValueName：规格值名称
								},
								{
								  id: '1168',
								  name: '紫玉幻境',
								},
								,
								{
								  id: '1169',
								  name: '花影惊鸿',
								}
							  ],
							  k_s: 's381' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
							},
							{
							  k: '版本', // skuKeyName：规格类目名称
							  v: [
								{
								  id: '1164', // skuValueId：规格值 id
								  name: '6GB+128GB', // skuValueName：规格值名称
								},
								{
								  id: '1165',
								  name: '8GB+128GB',
								},
								{
								  id: '1166',
								  name: '8GB+256GB',
								}
							  ],
							  k_s: 's380' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
							}
						  ],
						  // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
						  list: [
							{
							  id: 2194700016, // skuId，下单时后端需要
							  price: 1699*100, // 价格（单位分）
							  s380: '1164', // 规格类目 k_s 为 s1 的对应规格值 id
							  s381: '1167', // 规格类目 k_s 为 s2 的对应规格值 id
							  stock_num: 100 // 当前 sku 组合对应的库存
							},
							{
							  id: 2194700019, // skuId，下单时后端需要
							  price: 1899*100, // 价格（单位分）
							  s380: '1165', // 规格类目 k_s 为 s1 的对应规格值 id
							  s381: '1167', // 规格类目 k_s 为 s2 的对应规格值 id
							  stock_num: 120 // 当前 sku 组合对应的库存
							},
							{
							  id: 2194700022, // skuId，下单时后端需要
							  price: 2199*100, // 价格（单位分）
							  s380: '1166', // 规格类目 k_s 为 s1 的对应规格值 id
							  s381: '1167', // 规格类目 k_s 为 s2 的对应规格值 id
							  stock_num: 140 // 当前 sku 组合对应的库存
							},
						  ],
						  hide_stock: true // 是否隐藏剩余库存
						},
				goods: {
						
				},
			}
		},
		methods:{
			fan(){
				  this.$router.go(-1)
				  },
				  get(){
					  this.show=true
				  },
				  onBuyClicked(good){
				  		 this.$toast('点击了购买');
				  },
				  onAddCartClicked(good){
					 console.log(good)
					 this.$store.dispatch("addGoodAsync",{   //异步方法
						 goodid:this.$route.params.id,
						 num:1
					 }).then(()=>{
						 this.$toast('加入购物车成功');
					 })
						 
						 
				  },
				  onClickHome(){
				  		  this.$router.push("/")
				  },
				  onClickCart(){
				  		  this.$router.push("/cart")
				  },
				  skuSe(goood){
						  
				  }
			
		}
		// created(){
		// 	this.$api.shoppingAPI({
		// 		id:this.$route.params.id
		// 	}).then(res=>{
				
		// 	}).catch(err=>{
		// 		console.log("获取出错",err)
		// 	})
		// }
	}
</script>
