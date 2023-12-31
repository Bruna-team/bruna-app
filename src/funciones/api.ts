import axios from 'axios'
import router from '../router'
const baseURL = 'http://localhost/Bruna/Brunapi/api/consultas.php'
// const baseURL = process.env.NODE_ENV === 'production'
//   ? ''
//   : 'http://localhost/Bruna/Bruna__api/api/consultas.php'

/**
 * @param {object} params
 * @param {object} data
 * @return {object}
 */
function brunaApi (params: any, data: any) {
  return new Promise((resolve, reject) => {
    axios.request({
      baseURL,
      method: 'post',
      params,
      data,
      withCredentials: true
    })
      .then((respuesta) => {
        if (typeof respuesta.data === 'string' && respuesta.data.indexOf('<!--log-->') === 0) {
          router.push('LogIn')
        }
        return resolve(respuesta)
      })
      .catch((error) => reject(error))
  })
}

export {
  brunaApi
}
