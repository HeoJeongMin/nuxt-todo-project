import axios from 'axios'

export default {
    fetchTodoList ({ commit }) {
      axios
        .get(`${process.env.VUE_APP_API_URL}/api/list`)
        .then(response => {
          const todo = response.data
          
          if(todo.length > 0) {
            todo.map(value => ( value.seen = false))
            todo.map(value => ( value.completed = false))

            commit('getTodoList', todo)
          }
        })
    },
  
    postTodo ({ dispatch }, todo) {
      const param = todo
      
      axios
        .post(`${process.env.VUE_APP_API_URL}/api/post`, param)
        .then(response => {
          if(response.data === 1) {
            dispatch('fetchTodoList')
          }
        })
    },

    deleteTodo ({ dispatch }, todo) {
      axios
        .delete(`${process.env.VUE_APP_API_URL}/api/delete/`+todo.id)
        .then(response => {
          if(response.data === 1) {
            dispatch('fetchTodoList')
            alert('삭제되었습니다.')
          }
        })
    }
  }