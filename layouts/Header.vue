<template>
  <div class="row mt10">
    <div class="col-4 tac">
      <nuxt-link 
        to="/todos/todo" 
        class="btn btn-dark mr20"
      >
        추가 페이지
      </nuxt-link> |
      <nuxt-link 
        to="/todos/list" 
        class="btn btn-dark ml20 mr20"
      >
        목록 페이지
      </nuxt-link> |
      <nuxt-link 
        to="/user/list" 
        class="btn btn-dark ml20 mr20"
      >
        사용자 관리
      </nuxt-link>
    </div>
  </div>
</template>