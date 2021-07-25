<template>
    <div class="modal">
        <div class="modal-dialog modal-nomal">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">
                        사용자 등록
                    </h4>
                </div>
                <!-- <content-template ref="template"/> -->

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
                                    <input 
                                        type="text" 
                                        v-model="userInfo.userId"
                                        class="form-control"
                                        required
                                    >
                                </div>
                            </div>
                            <div class="form-group form-setup row">
                                <label class="col-3 col-form-label">사용자 이름</label>
                                <div class="col-9">
                                    <input 
                                        type="text" 
                                        v-model="userInfo.userName" 
                                        class="form-control"
                                        required
                                    >
                                </div>
                            </div>
                            <div class="form-group form-setup row">
                                <label class="col-3 col-form-label">패스워드</label>
                                <div class="col-9">
                                    <input 
                                        type="password" 
                                        v-model="userInfo.password" 
                                        class="form-control"
                                        required
                                    >
                                </div>
                            </div>
                            <div class="form-group form-setup row">
                                <label class="col-3 col-form-label">패스워드 확인</label>
                                <div class="col-9">
                                    <input 
                                        type="password" 
                                        v-model="userInfo.rePassword" 
                                        class="form-control"
                                        required
                                    >
                                </div>
                            </div>
                            <div class="form-group form-setup row">
                                <label class="col-3 col-form-label">이메일</label>
                                <div class="col-9">
                                    <input 
                                        type="email" 
                                        v-model="userInfo.email" 
                                        class="form-control"
                                        required
                                    >
                                </div>
                            </div>
                            <div class="form-group form-setup row">
                                <label class="col-3 col-form-label">전화번호</label>
                                <div class="col-9">
                                    <input 
                                        type="tel" 
                                        v-model="userInfo.phone" 
                                        class="form-control"
                                        required
                                    >
                                </div>
                            </div>
                            
                            <button v-show="registSeen"
                                type="submit"
                                class="input-group-addon"
                                @click="$emit('apply', {})"
                            >
                                등록
                            </button>
                            <button v-show="!registSeen"
                                type="submit"
                                class="input-group-addon"
                                @click="$emit('update', {})"
                            >
                                수정
                            </button>
                            <button
                                @click="$emit('close')"
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

const userStoreHelper = createNamespacedHelpers('modules/user')

export default {
  name: 'modal-component',
  data: () => {
    return {

    }
  },
  props: {
    registSeen: Boolean
  },
  computed: {
    ...userStoreHelper.mapState([
      'userInfo'
    ])
  },
  methods: {
    ...userStoreHelper.mapActions([
      'postUser'
    ]),
    reset() {
        //this.$emit('reset', )

        this.$refs.template.reset()
    },
    onAddUser () {
        if(this.password !== this.rePassword) {
            alert('Password를 확인해주세요.')
            return false
        }
        const user = {}
        user.user_id = this.userId
        user.user_name = this.userName
        user.password = this.password
        user.email = this.email
        user.phone = this.phone
        
        this.postUser(user)
        this.$emit('close')
    }
  }
}
</script>

<style> 
</style>
