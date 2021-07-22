<template>
<div class="table-responsive">
    <table class="table table-dark table-hover m-0 scrollTable">
        <thead>
            <tr>
                <td>
                    사용자 이름
                </td>
                <td>
                    사용자 ID
                </td>
                <td>
                    이메일
                </td>
                <td>
                    전화번호
                </td>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              AA
            </td>
          </tr>
        </tbody>
  </table>
</div>
</template>

<script>

// import { createNamespacedHelpers } from 'vuex'

// const todoStoreHelper = createNamespacedHelpers('modules/todos')

// export default {
//   name: 'list-component',
//   props: {
//     inputSeen: Boolean
//   },
//   created () {
//     this.fetchTodoList()
//   },
//   computed: {
//     ...todoStoreHelper.mapState([
//       'todoList'
//     ])
//   },
//   methods: {
//     ...todoStoreHelper.mapMutations([
//       'changeSeen',
//       'toggleTodo'
//     ]),
//     ...todoStoreHelper.mapActions([
//       'fetchTodoList',
//       'deleteTodo'
//     ]),
//     updateTodo (index) {
//       this.changeSeen({ index, value: true })
//     },
//     applyTodo (index) {
//       this.updateTodo({ })
//       // this.changeSeen({ index, value: false })
//     },
//     onDeleteTodo (id) {
//       const delete_confirm = confirm('삭제하시겠습니까?')
//       if(delete_confirm) {
//         this.deleteTodo({ id: id })
//       }
//     }
//   }
// }
</script>

