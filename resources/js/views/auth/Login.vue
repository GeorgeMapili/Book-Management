<template>
    <div class="col-lg-4 offset-lg-4 mt-5">
        <div class="card">
            <div class="card-header">
                Login
            </div>
            <div class="card-body">
                <div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="text" class="form-control" id="email" v-model="fields.email">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" v-model="fields.password">
                    </div>
                    <button type="submit" class="btn btn-primary" @click="submitLogin">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fields: {},
            errors: {},
            loading: false,
        }
    },
    methods: {
        async submitLogin(){
            this.errors = null;

            try {
                await this.$store.dispatch('login', this.fields)
                await this.$router.push({name: "book"})
            } catch (error) {
                this.error = error
                console.log(error.response);
            }

        }
    }
}
</script>