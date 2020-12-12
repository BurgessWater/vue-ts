import axios from 'axios'

axios.defaults.timeout = 12000 // 请求超时时间
axios.defaults.baseURL = process.env.VUE_APP_BASE_API

axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.error(error)
  }
)
// axios respone拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200 && response.data.code === 0) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  error => {

    return Promise.reject(error.response)
  }
)

/**
 * 封装get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
  // 或者return axios.get();
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
  //  或者return axios.post();
}

export {
  get,
  post
}