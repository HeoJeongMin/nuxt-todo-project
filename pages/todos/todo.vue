<template>
  <div id="todo-app">
    <div class="row mt10">
      <div class="breadcrumb">
        <div class="breadcrumb-item">
          <i class="fa fa-home"></i> 
          TO-DO App
        </div>
      </div>
      <hr>
    </div>
    <br/>

    <div class="row mt10">
      <div class="col-4">
        <div class="card-box">
          <input-component />

          <list-component input-seen/>
        </div>
      </div>
    </div>
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
