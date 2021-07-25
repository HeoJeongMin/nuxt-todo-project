<template>
  <div class="input-group">
    <input
        v-model="todo"
        placeholder="insert to-do"
        class="form-control2"
    >

    <button 
      @click="onAddTodo"
      class="input-group-addon" 
    >
      <span>
        <i class="fa fa-plus"></i>
        Add
      </span>
    </button>

  </div>
</template>

<script>

import { createNamespacedHelpers } from 'vuex'

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
    computedData () {
      console.log('watch')
    },
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
