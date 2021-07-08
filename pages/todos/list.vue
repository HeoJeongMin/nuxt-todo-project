<template>
    <div id="list-app">
        <b>TO-DO List</b>
        <br/>
        <list-component/>
    </div>
</template>

<script>

import ListComponent from '@/components/ListComponent.vue'

export default {
    name: 'list-app',
    components: { ListComponent }
}
</script>
