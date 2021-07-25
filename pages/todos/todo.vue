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
          <input-component ref="inputComp"/>

          <list-component input-seen/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import InputComponent from '@/components/InputComponent.vue'
  import ListComponent from '@/components/ListComponent.vue'

  // function getName () {
  //   return 'test'
  // }

  // const getName = (name) => {
  //   return 'test'
  // }

  // const getName = function (name) {
  //   return 'test'
  // }


  export default {
    name: 'todo-app',
    // fetch({store}) {
    //   // 컴포넌트 생성 되기도 전에 api 호출할 떄 많이 사용
    //   store.actions.getData()
    // },
    // aysncData () { },
    components: {
      InputComponent,
      ListComponent
    },
    beforeCreate(){},
    created() {},
    beforeMount() {},
    // mounted() {},
    beforeDestroy() {},
    destroyed() {},
    mounted() {
      //es6 
    // this.$refs.InputComponent
    // let self = this

    // const getName = (name) => {
    //   return this.$refs.InputComponent.getName()
    // }

    // const parser = [{name: 'test'}].map(function (res) {
    //   return res + '1'
    // })

    // [{name: 'test'}].map((res, index) => res + '1')

    // const getName = (name) => this.$refs.InputComponent.getName()

    // const getName2 = function () {
    //   return this.$refs.InputComponent.getName()
    // }

    // function getName3 () {
    //   // return this.$refs.InputComponent.getName()
    //   return self.$refs.InputComponent
    // }

// -----------------------------------------------------
      // refs를 통한 하위 컴포넌트 접근 방식
      //this.$refs.inputComp.computedData()

      // promise()

      // Promise((resolve, reject) => {
      //   try {
      //     const id = getData()
      //     resolve(id)
      //   } catch(err) {
      //     reject(err)
      //   }
      // })
    }
  }
</script>
