import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  goodList:[
		  
	  ],
	  asd:false
  },
  getters:{
	  getGoodList(state){
		  return state.goodList;
	  }
  },
  mutations: {
	  addGood(state,good){
		  let canAdd = true;
		  state.goodList.forEach((item,index)=>{
			  if(item.id==good.id){
				  if(good.skuid==item.skuid){
					  canAdd = false;
					  item.num += good.num
				  }
			  }
		  })
		  if(canAdd){
			  state.goodList.push(good)
		  }
	  },
	  add(state,good){
		  state.goodList.forEach((item,index)=>{
			  if(item.id==good.id){
				  if(item.skuid==good.skuid){
					  item.num = good.num
				  }
			  }
		  })
	  }
	  
  },
  actions: {
	  //加
		addAsync(context,good){
			context.commit("add",good)
		},
	  addGoodAsync(context,good){
		context.commit("addGood",good)
	  }
  },
  modules: {
  }
})
