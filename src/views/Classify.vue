<template>
	<div class="classif">
		<div class="nav" >
				  <van-nav-bar title="全部分类—孔夫子旧书网" 
				  left-arrow @click-left="onClickLeft" @click-right="onClickRight">
				    <template #right >
				      <van-icon name="search" size="18" />
				    </template>
				  </van-nav-bar>
		</div>
		
		<!-- 导入搜索页面数据h109 -->
		<!-- <div v-if="goods[8].active=='h109'">
			<div v-for="good in goods[8].goodlist[0].data.section">
				<p>{{good.name}}</p>
			</div>
		</div> -->
		
		<div class="conter" style="margin-top: 50px;display: flex;position:absolute;top: 0;bottom: 50px;left: 0;right: 0;">
				  <div class="left" style="width: 30%;overflow: auto;
				  position: absolute;left: 0;top: 0;right: 0;bottom: 0;">
					  <van-sidebar v-model="activeKey">
					    <van-sidebar-item v-for="good in goods[8].goodlist[0].data.section"
						 :title="good.name"/>
					  </van-sidebar>
				  </div>
				  
				<div class="right" style="width: 70%;
				position: absolute;left: 30%;top: 0;right: 0;bottom: 0;overflow: auto;">
					<div v-if="index==activeKey" v-for="(item,index) in goods[8].goodlist[0].data.section" title="item.category_name">
						<p class="p1">{{item.name}}</p>
						<div class="box">
							<div v-for="list in item.list" class="area">
								<img :src="list.img" alt="">
								<div>
									<p class="p2">{{list.name}}</p>
									<p class="p3">{{list.num}}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import data from '../data'

export default {
  name: 'Search',
  components: {
    
  },
  data(){
	  return {
		  goods:null,
		  activeKey: 0,
	  }
  },
  methods:{
	  onClickLeft(){
	    		  this.$toast('返回')
	    		  this.$router.go(-1)
	  },
	  onClickRight(){
	    		  this.$router.replace('/search')
	  }
  },
  created(){
  	this.goods = data[0].data.advList
  }
 
}
</script>

<style lang="less" scoped="scoped">
	.classif{
		.van-nav-bar .van-icon{
			color: #000;
		}
		.right{
			.p1{
				text-align: left;
				font-weight: 600;
				font-size: 18px;
			}
			.box{
				display: flex;
				flex-wrap: wrap;
				.area{
					margin: 10px 10px;
					.p2{
						font-size: .28rem;
						color: #555;
					}
					.p3{
						font-size: .24rem;
						color: #999;
					}
				}
			}
		}
	}
</style>
