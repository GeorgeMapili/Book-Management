<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <router-link class="navbar-brand" :to="{name: 'login'}">Library Management System</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                    <div class="d-flex navbar-nav">
                        <li class="nav-item" v-if="!authenticated">
                            <router-link class="nav-link" aria-current="page" :to="{name: 'login'}">Login</router-link>
                        </li>
                        <li class="nav-item" v-if="!authenticated">
                            <router-link class="nav-link" :to="{name: 'register'}">Register</router-link>
                        </li>
                        <li class="nav-item" v-if="authenticated">
                            <button class="nav-link text-dark" @click="logout">Logout</button>
                        </li>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    data(){
        return {
            user: null
        }
    },
    computed: {
        ...mapGetters({
            authenticated: 'authenticated'
        })
    },
    methods: {
        async logout(){

            try {
                await this.$store.dispatch('logout')
                await this.$router.push({name: "login"})
            } catch (error) {
                this.error = error
            }

        }
    }
}
</script>