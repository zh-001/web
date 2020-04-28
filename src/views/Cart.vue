<template>
	<div class="cart">
		<div class="hear">
			购物车
		</div>
		
		<div class="zhan" v-for="(good,index) in $store.getters.getGoodList">
			<van-card
			  :num="good.num"
			  title="左上角商品id"
			  :tag="good.goodid"
			  thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
			>
			  <template #footer>
			    <van-button size="mini" v-if="good.num!=0" @click='add(good.num-1)'>-</van-button>
			    <van-button size="mini" @click='add(good.num+1)'>+</van-button>
			  </template>
			</van-card>
		</div>
		
		<div class="img">
			<img src="../assets/imgme/cart.png" alt="">
			<van-button plain type="danger" size="small" @click='dian' class="right">去逛逛</van-button>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			dian(){
				this.$router.push("/category")
			},
			add(num){
				  this.$store.dispatch("addAsync",{
					  num:num
				  }).then(()=>{
					  this.$toast('修改了数量')
				  })
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.cart{
		.hear{
			position: fixed;
			top: 0;
			width: 7.5rem;
			height: .86rem;
			line-height: .86rem;
			background-color: #f3f3f3;
			font-size: .34rem;
			color: #000;
			text-align: center;
		}
		.img{
			margin-top: 50px;
			img{
				width: 2.03rem;
				height: 1.73rem;
				margin-top: 20px;
			}
		}
		.zhan{
			margin-top: 90px;
		}
		.van-button--danger{
			margin-left: 1rem;
			color: #AC3533;
			border: 1px #AC3533 solid;
		}
	}
</style>
