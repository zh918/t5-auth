import Cookie from 'js-cookie'

class cacheData {

	static set(key,value) {
		Cookie.set(key, value, {path:"/",expires: 7});
		localStorage.setItem(key, value);
	}

	static get(key) {
		if (localStorage) {
			return localStorage.getItem(key);
		}
		else {
			return Cookie.get(key);
		}
	}

	static del(key) {
		Cookie.remove(key);
		!!localStorage && localStorage.removeItem(key);
	}

	static remove(igons=[]) {
		let obj = Cookie.get();
		for(let c in obj){
			if (obj.hasOwnProperty(c)) {
				!igons.some(i=>i == c) && Cookie.remove(c);
				!igons.some(i=>i == c) && !!localStorage && localStorage.removeItem(c);
			}
		}  
	}
 

}

window.$Data = cacheData;