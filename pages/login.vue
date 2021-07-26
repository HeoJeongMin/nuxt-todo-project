<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <!-- <h2 class="title has-text-centered">Welcome back!</h2> -->

          <Notification :message="error" v-if="error"/>

          <form method="post" @submit.prevent="login">
            <div class="field">
              <label class="label">ID</label>
              <div class="control">
                <input
                  type="text"
                  class="input-group-addon"
                  v-model="userId"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  type="password"
                  class="input-group-addon"
                  v-model="password"
                />
              </div>
            </div>
            <div class="control">
              <button type="submit" class="input-group-addon">Log In</button>
            </div>
          </form>
          <!-- <div class="has-text-centered" style="margin-top: 20px">
            <p>
              Don't have an account? <nuxt-link to="/user/register">Register</nuxt-link>
            </p>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Notification from '~/components/Notification'

export default {
  components: {
    Notification,
  },

  data() {
    return {
      userId: '',
      password: '',
      error: null
    }
  },

  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
          email: this.email,
          password: this.password
          }
        })

        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>

<style scoped>
  button { margin-top: '20px' }
</style>