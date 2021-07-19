
export default {
    getTodoList (state, todo) {
      state.todoList = todo
    },
    
    // 삭제
    deleteTodo (state, index) {
      state.todoList.splice(index, 1)
    },
  
    // seen 변경
    changeSeen (state, { index, value }) {
      state.todoList[index].seen = value
    },
  
    toggleTodo (state, { index }) {
      if(state.todoList[index].completed) {
        state.todoList[index].completed = false
      } else {
        state.todoList[index].completed = true
      }
    }
}  