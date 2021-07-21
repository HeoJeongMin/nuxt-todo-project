<template>
    <div id="list-app">
        <div class="row mt10">
            <div class="breadcrumb">
            <div class="breadcrumb-item">
                <i class="fa fa-list"></i>
                TO-DO List
            </div>
            </div>
        </div>
        <br/>
        <div class="row mt10">
            <div class="col-4">
                <div class="card-box">
                    <list-component/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import ListComponent from '@/components/ListComponent.vue'

export default {
    name: 'list-app',
    components: { ListComponent }
}
</script>
