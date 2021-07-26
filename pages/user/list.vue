<template>
    <div id="user-list-app">
        <div class="row mt10">
            <div class="breadcrumb">
            <div class="breadcrumb-item">
                <i class="fa fa-user"></i>
                사용자 관리
            </div>
            </div>
        </div>
        <br/>
        <div class="row mt10">
            <div class="col-4">
                <div class="card-box">
                    <user-list-component @open="openModal" />
                </div>
                <div class="btn_area tar">
                    <button
                        @click="openModal()"
                        class="input-group-addon"
                    >
                        사용자 등록
                    </button>
                </div>
            </div>
        </div>
        <modal 
            :registSeen="registSeen"
            v-if="isModalView" 
            @close="closeModal"
        >
        </modal>
    </div>
</template>

<script>
import UserListComponent from '@/components/UserListComponent'
import Modal from '@/components/Modal/Modal'
import UserLayout from '@/layouts/UserLayout.vue'

export default {
    name: 'user-list-app',
    components: {
        UserListComponent,
        Modal,
        UserLayout
    },
    data: () => {
        return {
            isModalView: false,
            registSeen: Boolean
        }
    },
    methods: {
        openModal (user_id) {
            if(user_id !== undefined && user_id !== '') {
                this.registSeen = false
            } else {
                this.registSeen = true
            }
            this.isModalView = true
        },
        closeModal() {
            this.isModalView = false
        }
    }
}
</script>
