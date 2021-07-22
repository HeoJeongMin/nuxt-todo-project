import axios from 'axios'

export default {
    fetchUserList ({ commit }) {
      axios
        .get(`${process.env.VUE_APP_API_URL}/user/list`)
        .then(response => {
          const user = response.data
          
          if(user.length > 0) {
            commit('getUserList', user)
          }
        })
    },
  
    postUser ({ dispatch }, user) {
      const param = user
      
      axios
        .post(`${process.env.VUE_APP_API_URL}/user/post`, param)
        .then(response => {
          if(response.data === 1) {
            dispatch('fetchUserList')
          }
        })
    },

    deleteUser ({ dispatch }, user) {
      axios
        .delete(`${process.env.VUE_APP_API_URL}/user/delete/`+user.user_id)
        .then(response => {
          console.log(response)
          // if(response.data === 1) {
            dispatch('fetchUserList')
            alert('삭제되었습니다.')
          // }
        })
    }
  }