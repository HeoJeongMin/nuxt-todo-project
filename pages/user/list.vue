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
                    <user-list-component/>
                </div>
                <div class="btn_area tar">
                    <button
                        @click="openModal"
                        class="input-group-addon"
                    >
                        사용자 등록
                    </button>
                </div>
            </div>
        </div>
        <Modal v-show="isModalView">
        </Modal>
    </div>
</template>

<script>
import UserListComponent from '@/components/UserListComponent'
import Modal from '@/components/Modal/Modal'

export default {
    name: 'user-list-app',
    components: {
        UserListComponent,
        Modal
    },
    data () {
        return {
            isModalView : false
        }
    },
    methods: {
        openModal () {
            this.isModalView = true
        },
        closeModal () {
            console.log("aaaa")
            this.isModalView = false
        }
    }
}
</script>
