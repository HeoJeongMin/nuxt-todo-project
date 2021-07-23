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
            alert(`${param.user_name} 사용자가 등록되었습니다.`)
          }
        })
    },

    fetchUser ({ commit }, user) {
      axios
        .get(`${process.env.VUE_APP_API_URL}/user/get/`+user.user_id)
        .then(response => {
          const resUser = response.data
          if(Object.keys(resUser).length > 0) {
            commit('getUser', resUser)
          }
        })
    },

    deleteUser ({ dispatch }, user) {
      axios
        .delete(`${process.env.VUE_APP_API_URL}/user/delete/`+user.user_id)
        .then(response => {
          if(response.data === 1) {
            dispatch('fetchUserList')
            alert('삭제되었습니다.')
          }
        })
    }
  }