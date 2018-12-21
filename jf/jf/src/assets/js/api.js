let BASE_PATH = '/Services/Api.svc/';
// console.log('Vue',this)
// console.log('BASE_PATH',process.env)
// lottyInfo 模块api请求
// login 模块API请求
export const login = params =>{ // 登录
  return Axios.post(BASE_PATH + 'Login', params).then(res => res)
}
