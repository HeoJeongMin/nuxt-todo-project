export default {
    getUserList (state, user) {
      state.userList = user
    },
    
    getUser (state, user) {
      state.userInfo = {
        userId : user.user_id,
        userName : user.user_name,
        password : user.password,
        email : user.email,
        phone : user.phone
      }
    }
}