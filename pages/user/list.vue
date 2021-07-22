<template>
    <div>
        <div class="row mt10">
            <div class="breadcrumb">
                <div class="breadcrumb-item">
                    <i class="fa fa-home"></i>
                    사용자
                </div>
            </div>
            <hr>
        </div>
        <br/>

        <user-list-component/>
    </div>
</template>

<script>
import UserListComponent from '@/components/UserListComponent.vue'

export default {
    components: { UserListComponent }
//     middleware: 'authenticated'
}
</script>