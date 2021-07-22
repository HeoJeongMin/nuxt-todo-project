<template>
  <ul>
    <li
        v-for="(item, index) in todoList"
        :key="index"
    >
      <input
        v-show="!item.seen && inputSeen"
        @change="toggleTodo( { item, index } )"
        type="checkbox"
      >
      <b 
        v-show="!inputSeen"
        class="font-16 mt7 mr20 fl pu"
      >
        {{ index + 1 }}
      </b>
      <div
        v-show="!item.seen"
        :class="{ 'checkedColor' : item.completed }"
        class="di mt5"
      >
        <div class="wh fl mr20 font-18">
          {{ item.title }}
        </div>
        <div class="ye fr ml20 mt7 font-12">
          {{ item.date }}
        </div>
      </div>

      <input
          v-show="item.seen && inputSeen"
          v-model="item.title"
      >

      <button
          v-show="!item.seen && inputSeen"
          @click="updateTodo(index)"
          class="input-group-addon"
      >
        Update
      </button>

      <button
          v-show="!item.seen && inputSeen"
          @click="onDeleteTodo(item.id)"
          class="input-group-addon"
      >
        Delete
      </button>

      <button
          v-show="item.seen && inputSeen"
          @click="applyTodo(index)"
          class="input-group-addon"
      >
        Apply
      </button>
    </li>
  </ul>
</template>

<script>

import { createNamespacedHelpers } from 'vuex'

const todoStoreHelper = createNamespacedHelpers('modules/todos')

export default {
  name: 'list-component',
  props: {
    inputSeen: Boolean
  },
  created () {
    this.fetchTodoList()
  },
  computed: {
    ...todoStoreHelper.mapState([
      'todoList'
    ])
  },
  methods: {
    ...todoStoreHelper.mapMutations([
      'changeSeen',
      'toggleTodo'
    ]),
    ...todoStoreHelper.mapActions([
      'fetchTodoList',
      'deleteTodo'
    ]),
    updateTodo (index) {
      this.changeSeen({ index, value: true })
    },
    applyTodo (index) {
      this.updateTodo({ })
      // this.changeSeen({ index, value: false })
    },
    onDeleteTodo (id) {
      const delete_confirm = confirm('삭제하시겠습니까?')
      if(delete_confirm) {
        this.deleteTodo({ id: id })
      }
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
}

button {
  margin-left: 10px;
}

.checkedColor {
  color: green;
  text-decoration-line: line-through;
}

b {
  margin-right: 5px;
}
</style>
