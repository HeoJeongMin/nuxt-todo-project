
export default {
    // 삭제
    deleteTodo (state, index) {
      state.todoList.splice(index, 1)
    },
  
    // seen 변경
    changeSeen (state, { index, value }) {
      state.todoList[index].seen = value
    },
  
    getTodoList (state, todo) {
      state.todoList = todo
    },

    toggleTodo (state, todo) {
      // console.log(state)
      // console.log(state.todoList[todo.id])
      
      state.todoList[todo.id].completed = true
    }
}  