import axios from 'axios'

function fetch({ isPost = false, endpoint, data }) {
  return new Promise((resolve, reject) => {
    window._DGPublic.getAccessToken((token) => {
      if (token) {
        const axiosConfig = {
          url: window._DGPublic.apiPrefix + endpoint,
          method: isPost ? 'POST' : 'GET',
          mode: 'cors',
          headers: {
            Authorization: token,
          },
        }

        if (isPost) axiosConfig.data = data
        else axiosConfig.params = data


        window.console.info('Getting ' + endpoint + ' using axios')
        axios(axiosConfig)
          .then((result) => {
            window.console.info('Getting ' + endpoint + ' succeed')
            resolve(result.data)
          })
          .catch((error) => {
            if (error.response) {
              window.console.warn('Getting ' + endpoint + ' failed')
              window.console.warn(error)
              reject(error)
            }
          })
      }
    })
  })
}

export default fetch
