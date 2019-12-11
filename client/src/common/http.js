import axios from 'axios'
import Progress from './progress'

class http {
	static post(url, parms={}, headers={}, isToken=true) {
		let ran = Math.floor(Math.random() * 100);
		let option = Object.assign({},{ 'content-type': 'application/json; charset=utf-8' },headers);
		if (isToken) {
			if($Data.get('accessToken')){
				Object.assign(option,{Authorization : $Data.get('accessToken')});
			} 
			else{
				globalVue.$router.push({path:'/login'});
			}
		}
		else {
			if($Data.get('accessToken')){
				Object.assign(option,{Authorization : $Data.get('accessToken')});
			} 
		}
		        


		var instance = axios.create({
			timeout: 1000 * 30,
			headers: option, //{'Authorization': option.Authorization}
			maxContentLength: 2000,
			withCredentials: false, // default
			onUploadProgress:function (progressEvent) {
				// console.log('onUploadProgress',progressEvent)

		    // globalVue.$emit('progress',progressEvent.percent);
			},
			onDownloadProgress: function (progressEvent) {
		    if (progressEvent.total > 0) {
		        progressEvent.percent = parseInt(progressEvent.loaded / progressEvent.total * 100);
		    }

		    Progress.drawTopLine(progressEvent.percent)
		  },
		});

		return instance.post(url,parms).then(function(res){
			if (res.data.errorCode == 12) {
				globalVue.$toast.fail("登录超时或用户信息丢失，请重新登录");
				// setTimeout(()=>{
				// 	globalVue.$router.push({path:'/login'});
				// },800)
			}
			else if (res.data.errorCode == 14) {
				globalVue.$toast.text(res.data.errorMsg);
			}

			return res.data;
		}).catch(res=>{
			if (res.toString().indexOf('Network Error'))
			{
				globalVue.$toast.fail("网络异常，系统发生错误");
				// setTimeout(()=>{
				// 	globalVue.$router.push({path:'/login'});
				// },800)
			}
			return {};
		});

	}

	static get(url, parms={}, headers={}) {
		let ran = Math.floor(Math.random() * 100);

		let option = Object.assign({},headers);
		if($Data.get('accessToken')){
			Object.assign(option,{Authorization : $Data.get('accessToken')});
		} 
		// else {
	 //        globalVue.$router.push({path:'/login'});
		// }
		var instance = axios.create({
			timeout: 1000 * 30,
			headers: option
		});

		return instance.get(url).then(function(res){

			if(res.data.errorCode != 0){
				globalVue.$alert(res.data.errorMsg, '提示', {
					confirmButtonText: '确定'
				});
			}
			return res.data;
		}).catch(res=>{
			console.log('error',res);
		});
	}
}

window.$http = http;
