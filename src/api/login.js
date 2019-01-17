import request from '../util/request'

export function login(email, password) {
  let form = new FormData()
  form.append('username', email)
  form.append('password', password)
  return request({
    url: 'http://manager.itinga.cn/admin/login',
    method: 'post',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    data: form
  })
}