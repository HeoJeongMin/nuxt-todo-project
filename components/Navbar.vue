<template>
    <nav class="navbar is-light">
        <div>
            <div class="navbar-item has-dropdown is-hoverable" v-if="isAuthenticated">
                <a class="navbar-link">
                    {{ loggedInUser.username }}
                </a>
                <div class="navbar-dropdown">
                    <nuxt-link class="navbar-item" to="/profile">My Profile</nuxt-link>
                    <a class="navbar-item" @click="logout">Logout</a>
                </div>
            </div>
            <template v-else>
                <nuxt-link class="btn btn-dark mr20" to="/user/list">User</nuxt-link>
                <nuxt-link class="btn btn-dark mr20" to="/todos/todo">TO-DO</nuxt-link>
                <nuxt-link class="btn btn-dark mr20" to="/todos/list">TO-DO List</nuxt-link> |
                <nuxt-link class="navbar-item" to="/user/register">Register</nuxt-link> |
                <nuxt-link class="navbar-item" to="/login">Log In</nuxt-link> |
            </template>
        </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(['isAuthenticated', 'loggedInUser'])
    },
    methods: {
        async logout() {
            await this.$auth.logout();
        }
    }
}
</script>
