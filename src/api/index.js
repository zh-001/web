//配置全局默认项
axios.defaults.baseURL = 'http://httpbin.org';

//封装api
import axios from 'axios'
			
axios.defaults.baseURL = 'http://520mg.com';

import jsCookie from 'js-cookie'


// 添加拦截请求
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
	// let token = jsCookie.get('token')
	// if(token){
	// 	config.headers.Authorizetion = `Bear ${token}`
	// }
	
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// 添加拦截响应
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });




import './mockdata.js'

let searchAPI = (data)=>{
	return axios.post("mi/search.php",data)
}

// 发送验证码
let sendSMSAPI = (data)=>{
	return axios.post("mi/sms.php",data)
}

// 发送登录
let loginAPI = (data)=>{
	return axios.post("mi/login.php",data)
}

// 注册
let registAPI = (data)=>{
	return axios.post("mi/regist.php",data)
}

// 用户中心 token令牌
let userinfoAPI = ()=>{
	//get方法访问不传参
	return axios.get("mi/userinfo.php")
}

//商品详情页数据api
// let shoppingAPI = (data)=>{
// 	return axios.get("http://httpbin.org/product.php",{
// 		params:{
// 			id:data.id
// 		}
// 	})
// }


let getHomeDataAPI = (data)=>{
	return axios.get("/mi/page.php",{
		params:{
			page_type:data.page_type,
			page_id:data.page_id
		}
	})
}


export {
	getHomeDataAPI,
	searchAPI,
	loginAPI,
	sendSMSAPI,
	registAPI,
	// shoppingAPI,
	userinfoAPI
}