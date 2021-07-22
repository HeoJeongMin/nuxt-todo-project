<template>
  <div class="container-fluid">
    <!-- <Header /> -->
    <Navbar />
    <Nuxt/>
  </div>
</template>

<script>
import Header from '@/layouts/Header.vue'
import Navbar from '~/components/Navbar'

export default {
  components: {
    Header,
    Navbar
  }
}
</script>

<style>
</style>
