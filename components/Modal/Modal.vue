<template>
    <div class="modal">
        <div class="modal-dialog modal-nomal">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">
                        사용자 등록
                    </h4>
                </div>
                <div class="modal-body">
                    <div class="def_info_box">
                        <form @submit.prevent="onAddUser">
                            <!-- <ValidationProvider 
                                v-slot="{ errors }"
                                rules="email"
                            >
                                <input v-model="test" type="text">
                                <span>{{ errors[0] }}</span>
                            </ValidationProvider> -->
                            <div class="form-group form-setup row">
                                <label class="col-3 col-form-label">사용자 ID</label>
                                <div class="col-9">
                                    <input type="text" v-model="user_id" class="form-control">
                                </div>
                            </div>
                            <div class="form-group form-setup row">
                                <label class="col-3 col-form-label">사용자 이름</label>
                                <div class="col-9">
                                    <input type="text" v-model="user_name" class="form-control">
                                </div>
                            </div>
                            <div class="form-group form-setup row">
                                <label class="col-3 col-form-label">패스워드</label>
                                <div class="col-9">
                                    <input type="password" v-model="password" class="form-control">
                                </div>
                            </div>
                            <div class="form-group form-setup row">
                                <label class="col-3 col-form-label">패스워드 확인</label>
                                <div class="col-9">
                                    <input type="password" v-model="rePassword" class="form-control">
                                </div>
                            </div>
                            <div class="form-group form-setup row">
                                <label class="col-3 col-form-label">이메일</label>
                                <div class="col-9">
                                    <input type="text" v-model="email" class="form-control">
                                </div>
                            </div>
                            <div class="form-group form-setup row">
                                <label class="col-3 col-form-label">전화번호</label>
                                <div class="col-9">
                                    <input type="text" v-model="phone" class="form-control">
                                </div>
                            </div>
                            
                            <button
                                type="submit"
                                class="input-group-addon"
                            >
                                등록
                            </button>
                            <button
                                @click="$emit('close-modal')"
                                class="input-group-addon"
                            >
                                닫기
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { createNamespacedHelpers } from 'vuex'
import { ValidationProvider } from 'vee-validate'

const userStoreHelper = createNamespacedHelpers('modules/user')

export default {
  name: 'modal-component',
  components: {
      ValidationProvider
  },
  data: () => {
    return {
      user_id: void 0,
      user_name: void 0,
      password: void 0,
      rePassword: void 0,
      email: void 0,
      phone: void 0,
      test: void 0
    }
  },
  methods: {
    ...userStoreHelper.mapActions([
      'postUser'
    ]),
    onAddUser () {
        if(this.password !== this.rePassword) {
            alert('Password를 확인해주세요.')
            return false
        }
        const user = {}
        user.user_id = this.user_id
        user.user_name = this.user_name
        user.password = this.password
        user.email = this.email
        user.phone = this.phone
        
        this.postUser(user)
    }
  }
}
</script>

<style> 
/* Modal */ 
/* .modal, 
.overlay { width: 100%; height: 100%; position: fixed; left: 0; top: 0; } 
.overlay { opacity: 0.5; background-color: black; } 
.modal-card { position: relative; max-width: 80%; margin: auto; margin-top: 30px; padding: 20px; background-color: white; min-height: 500px; z-index: 10; opacity: 1; }  */
</style>
