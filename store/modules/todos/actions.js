import axios from 'axios'

export default {
    fetchTodoList ({ commit }) {
      axios
        .get(`http://localhost:3000/api/list`)
        .then(response => {
          const todo = response.data
          
          if(todo.length > 0) {
            todo.map(value => ( value.seen = false))
            commit('getTodoList', todo)
          }
        })
    },
  
    postTodo ({ dispatch }, todo) {
      const param = todo
      
      axios
        .post('http://localhost:3000/api/post', param)
        .then(response => {
          if(response.data === 1) {
            dispatch('fetchTodoList')
            // console.log(commit)
            // commit('getTodoList', todo)
          }
        })
    }
  }