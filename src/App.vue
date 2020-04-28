<template>
  <div id="app">
			<router-view/>		
				<van-tabbar v-show='$route.meta.showtabbar' v-model="active" active-color="#C21B28" inactive-color="#999">
					<van-tabbar-item icon="home-o" to='/'>
						<span>首页</span>
							<template #icon="props">
							  <img :src="props.active ? require('./assets/img/icon1.png') : require('./assets/img/icon11.png')" />
							</template>
					</van-tabbar-item>
					<van-tabbar-item icon="search" to='/category'>
						<span>书店</span>
							<template #icon="props">
							  <img :src="props.active ? require('./assets/img/icon2.png') : require('./assets/img/icon22.png')" />
							</template>
					</van-tabbar-item>
					<van-tabbar-item icon="search" to='/classify'>
						<span>分类</span>
							<template #icon="props">
							  <img :src="props.active ? require('./assets/img/icon3.png') : require('./assets/img/icon33.png')" />
							</template>
					</van-tabbar-item>
					<van-tabbar-item icon="friends-o" to='/cart'>
						<span>购物车</span>
							<template #icon="props">
							  <img :src="props.active ? require('./assets/img/icon4.png') : require('./assets/img/icon44.png')" />
							</template>
					</van-tabbar-item>
					<van-tabbar-item icon="setting-o" to='/mine'>
						<span>我的</span>
							<template #icon="props">
							  <img :src="props.active ? require('./assets/img/icon5.png') : require('./assets/img/icon55.png')" />
							</template>
					</van-tabbar-item>
			  </van-tabbar>
      
    </div>
  </div>
</template>

<script>
	
export default {
  data() {
    return {
      active: 0,
    };
  },
  // watch:{   监听路由事件
	 //  $route(newvalue,oldvalue){
		  
	 //  }
  // }
};

</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
	
}
</style>
