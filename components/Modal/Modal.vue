<template>
    <div class="modal fade show">
        <div class="modal-dialog  modal-full">
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
                            <div class="form-group form-setup row">
                                <label class="col-3 col-form-label">사용자 ID</label>
                                <div class="col-9">
                                    <input 
                                        type="text" 
                                        v-model="userInfo.userId"
                                        class="form-control"
                                        required
                                        :readonly="!registSeen"
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
                            <div
                                v-show="registSeen" 
                                class="form-group form-setup row"
                            >
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
                            <div 
                                v-show="registSeen" 
                                class="form-group form-setup row"
                            >
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
                            
                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <button 
                        v-show="registSeen"
                        type="submit"
                        class="input-group-addon"
                        @click="onAddUser"
                    >
                        <!-- @click="$emit('apply', {})" -->
                        등록
                    </button>
                    <button 
                        v-show="!registSeen"
                        type="submit"
                        class="input-group-addon"
                        @click="onUpdateUser(userInfo.userId)"
                    >
                        <!-- @click="$emit('update', {})" -->
                        수정
                    </button>
                    <button
                        @click="closeModal"
                        class="input-group-addon"
                    >
                        닫기
                    </button>
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
      'postUser',
      'updateUser'
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
        const user = {
            user_id : this.userInfo.userId,
            user_name : this.userInfo.userName,
            password : this.userInfo.password,
            email : this.userInfo.email,
            phone : this.userInfo.phone
        }
        
        this.postUser(user)
        this.$emit('close')
    },
    onUpdateUser (user_id) {
        const user = {
            user_id : user_id,
            user_name : this.userInfo.userName,
            password : this.userInfo.password,
            email : this.userInfo.email,
            phone : this.userInfo.phone
        }
        this.updateUser(user)
        this.$emit('close')
    },
    closeModal () {
        const user = {
            userId: void 0,
            userName: void 0,
            password: void 0,
            email: void 0,
            phone: void 0
        }
        Object.assign(this.userInfo, user)

        this.$emit('close')
    }
  }
}
</script>

<style> 
</style>
