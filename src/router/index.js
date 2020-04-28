import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Cart from '../views/Cart.vue'
import Mine from '../views/Mine.vue'
import Detail from '../views/Detail.vue'
import Search from '../views/Search.vue'
import Classify from '../views/Classify.vue'
import Login from '../views/Login.vue'

import jsCookie from 'js-cookie'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
	meta:{
		showtabbar:true
	}
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
	meta:{
		showtabbar:true
	}
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
	meta:{
		showtabbar:true,
		auth:true
	}
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine,
	meta:{
		showtabbar:true,
		auth:true
	}
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/classify',  //分类页面
    name: 'Classify',
    component: Classify,
	meta:{
		showtabbar:true
	}
  },
  {
    path: '/search',  //搜索页面
    name: 'Search',
    component: Search
  },
  {
    path: '/login',  //登录页面
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

// const router = new VueRouter({
//   routes
// })

const router = new VueRouter({
  routes,
  scrollBehavior:function(a,b,c){     //将滚动条设置为从0开始
	  return {
		  x:0,
		  y:0
	  }
  }
})

router.beforeEach( (t,f,n)=>{
	if(t.meta.auth){
		let logined = jsCookie.get('username');
		if(!logined){
			n("/login?next="+t.path)
		}else{
			n()
		}
	}
	else{
		n()
	}
} )

export default router
