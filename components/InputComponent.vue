<template>
  <div>
    <input
        v-model="todo"
        placeholder="insert to-do"
    >

    <button @click="onAddTodo">
      <span>Add</span>
    </button>

  </div>
</template>

<script>

// namespace utils
import { createNamespacedHelpers } from 'vuex'

// helper
const todoStoreHelper = createNamespacedHelpers('modules/todos')

export default {
  name: 'input-component',
  data: () => {
    return {
      todo: void 0
    }
  },
  methods: {
    ...todoStoreHelper.mapActions([
      'postTodo'
    ]),
    onAddTodo () {
      const date = new Date()
      const formatDate = 
        date.getFullYear() + '/' + 
        ('0' + (1 + date.getMonth())).slice(-2) + '/' + 
        ('0' + date.getDate()).slice(-2) + 
        ' ' + 
        ('0' + date.getHours()).slice(-2) + ':' + 
        ('0' + date.getMinutes()).slice(-2) + ':' + 
        ('0' + date.getSeconds()).slice(-2)

      this.postTodo({ title: this.todo, date: formatDate })
      this.todo = void 0
    }
  }
}
</script>
