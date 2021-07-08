<template>
  <div id="todo-app">
    <b>TO-DO App</b>
    <br/>

    <input-component />

    <list-component input-seen/>

  </div>
</template>

<script>

  import InputComponent from '@/components/InputComponent.vue'
  import ListComponent from '@/components/ListComponent.vue'

  export default {
    name: 'todo-app',
    components: {
      InputComponent,
      ListComponent
    }
  }
</script>
