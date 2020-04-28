<template>
  <div class="home">
	<div class="nav">
		<img src="../assets/img/logo.png" alt="">
		<van-search
		@click="goSearch"
		  v-model="value"
		  shape="round"
		  placeholder="商品名称 作者 出版社 ISBN"
		/>
	</div>
	<HomeTable></HomeTable>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HomeTable from '@/components/HomeTable.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
	HomeTable
  },
  data(){
	  return{
		  value:""
	  }
  },
  methods:{
	  goSearch(){
		  this.$router.replace('/search')
	  }
  }
}
</script>
<style scoped="scoped" lang="less">
	.home{
		.van-search__content--round{
			background-color: #fff;
		}
		background-color: #f6f6f6;
		.nav{
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			img{
				float: left;
				width: 10%;
				margin-top: 10px;
				margin-left: 15px;
				padding-bottom: 20px;
			}
			.van-search{
				width: 80%;
			}
			.van-search__content--round[data-v-fae5bece]{
				background-color: #F5F5F5;
			}
		}
	}
</style>