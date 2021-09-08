<template>
    <div>
        <Header />
                <div class="mt-3">
                    <button v-if="authenticated" @click="back">Go Back</button>
                    <button v-if="authenticated" @click="forward">Go Forward</button>
                </div>
                <router-view></router-view>
    </div>
</template>

<script>
import Header from "./components/Header.vue"
import { mapGetters } from "vuex"

export default {
    components: {
        Header,
    },    
    computed: {
        ...mapGetters({
            authenticated: 'authenticated'
        })
    },
    methods: {
        back() {
            this.$router.go(-1)
        },
        forward() {
            this.$router.go(1)
        },
    }
}
</script>

<style scoped>
button {
    margin: 0 10px;
    padding: 10px;
    border: none;
    border-radius: 4px;
}
</style>