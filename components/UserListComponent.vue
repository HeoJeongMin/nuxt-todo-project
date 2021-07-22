<template>
<div class="col-12">
    <div class="table-responsive">
        <table class="table table-dark table-hover m-0">
            <thead class="thead-dark">
                <tr>
                    <th>사용자 ID</th>
                    <th>사용자 이름</th>
                    <th>이메일</th>
                    <th>전화번호</th>
                    <th>삭제</th>
                </tr>
            </thead>
            <tbody>
                <tr 
                    v-for="(user, index) in userList"
                    :key="index"
                >
                    <td>{{ user.user_id }}</td>
                    <td>{{ user.user_name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.phone }}</td>
                    <td>                      
                    <button
                        @click="onDeleteUser(user.user_id)"
                        class="btn-warning"
                    >
                      Delete
                    </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>

import { createNamespacedHelpers } from 'vuex'

const userStoreHelper = createNamespacedHelpers('modules/user')

export default {
  name: 'user-list-component',
  created () {
    this.fetchUserList()
  },
  computed: {
    ...userStoreHelper.mapState([
      'userList'
    ])
  },
  methods: {
    ...userStoreHelper.mapActions([
      'fetchUserList',
      'deleteUser'
    ]),
    onDeleteUser (user_id) {
      const delete_confirm = confirm('삭제하시겠습니까?')
      if(delete_confirm) {
        this.deleteUser({ user_id: user_id })
      }
    }
  }
}
</script>