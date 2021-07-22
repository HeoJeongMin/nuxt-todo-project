
export default {
    getUserList (state, user) {
      state.userList = user
    },
    
    // 삭제
    deleteTodo (state, index) {
      state.todoList.splice(index, 1)
    }
}  