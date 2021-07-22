<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">

          <Notification :message="error" v-if="error"/>

          <form method="post" @submit.prevent="login">
            <div class="field">
              <label class="label">ID</label>
              <div class="control">
                <input
                  type="text"
                  class="input"
                  name="id"
                  v-model="frmId"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  type="password"
                  class="input"
                  name="password"
                  v-model="frmPw"
                />
              </div>
            </div>
            <div class="control">
              <button type="submit" class="button is-dark is-fullwidth">Log In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Notification from '~/components/Notification'

export default {
    components: {
        Notification
    },
    data() {
        return {frmId: '', frmPw: '', error: null}
    },
    methods: {
        async login() {
            try {
                await this.$store.dispatch('login', {
                        id: this.frmId,
                        pw: this.frmPw
                    })
                    .then(() => this.redirect())
            } catch (e) {
                this.returnMsg = e.message
            }
        },
        redirect() {
            this.$router.push('/')
        }
    }
}
</script>