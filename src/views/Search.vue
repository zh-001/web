<template>
  <div class="search">
    <div class="ca">     <!-- 标题 -->
		  <form action="/">
		    <van-search
			  shape="round"
		      v-model="value"
			  background="#f3f3f3"
		      show-action
		      placeholder="请输入搜索关键词"
		      @search="onClickRight"
		      @cancel="onClickLeft"
		    />
		  </form>
    </div>
	<div class="li" style="width: 100%;height: 40px;">
		<p style="float: left;font-size: 12px;padding-left: 20px;">热门搜索</p>
	</div>
	
	<!-- 导入数据h108 -->
	<div v-if="goods[7].active=='h108'" style="display: flex;flex-wrap: wrap;margin: 0 30px;">
		<div v-for="good in goods[7].goodlist[0].data.wordList" style="margin:10px 20px;">
			<van-button plain hairline type="primary" :url="good.url" size="small" round >{{good.keyword}}</van-button>
		</div>
	</div>
	
  </div>
</template>

<style scoped="scoped" lang="less">
	.search{
		.ca{
			.van-search__content{				
				background-color: #fff;
			}
		}
	}
</style>

<script>
import Vue from 'vue';
import data from '../data'

export default {
  name: 'Search',
  components: {
    
  },
  data(){
	  return {
		  value:'',
		  goods:null
	  }
  },
  created(){
  	this.goods = data[0].data.advList
  },
  methods:{
	  onClickLeft() {
		this.$toast('返回')
		this.$router.replace('/')
	  },
	  onClickRight(){
		  this.$toast('搜索')
	  }
  }
}
</script>
