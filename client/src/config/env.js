const path = {
	authApi:null,
	busApi:null
}

if (process.env.NODE_ENV === 'dev') {
	console.log('process.env.NODE_ENV',process.env.NODE_ENV)
	path.authApi = 'http://192.168.1.25:30006/caiHuiCustomer'
	path.busApi = 'http://192.168.1.25:30006/caiHuiCustomer'

	// path.authApi = 'http://192.168.2.7:21613'
	// path.busApi = 'http://192.168.2.7:21613'
	path.authApi = 'https://wxtest.yitianxian.com/caiHuiCustomer'
	path.busApi = 'https://wxtest.yitianxian.com/caiHuiCustomer'
}
else if (process.env.NODE_ENV === 'devlepment') {
	console.log('process.env.NODE_ENV',process.env.NODE_ENV)
	// path.authApi = 'http://192.168.1.25:30006/caiHuiCustomer'
	// path.busApi = 'http://192.168.1.25:30006/caiHuiCustomer'
    path.authApi = 'https://wxdev.yitianxian.com/caiHuiCustomer'
    path.busApi = 'https://wxdev.yitianxian.com/caiHuiCustomer'
	     
}
else if (process.env.NODE_ENV === 'test') {
	console.log('process.env.NODE_ENV',process.env.NODE_ENV)
	path.authApi = 'https://wxtest.yitianxian.com/caiHuiCustomer'
	path.busApi = 'https://wxtest.yitianxian.com/caiHuiCustomer'
	
}
else if (process.env.NODE_ENV === 'uat') {
	console.log('process.env.NODE_ENV',process.env.NODE_ENV)
	path.authApi = 'http://192.168.1.25:30006/caiHuiCustomer'
	path.busApi = 'http://192.168.1.25:30006/caiHuiCustomer'
}
else if (process.env.NODE_ENV === 'prod') {
	console.log('process.env.NODE_ENV',process.env.NODE_ENV)
	path.authApi = 'https://domain.caihuilife.com/caiHuiCustomer'
	path.busApi = 'https://domain.caihuilife.com/caiHuiCustomer'
}

export default path
