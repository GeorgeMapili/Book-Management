<template>
    <div class="col-lg-4 offset-lg-4 mt-5">
        <div class="card">
            <div class="card-header">
                Register
            </div>
            <div class="card-body">
                <form @submit.prevent="submitRegister">
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" :class="errors.name? ' is-invalid': ''" id="name" name="name" v-model="fields.name">
                        <span v-if="errors.name" class="text-danger">{{ errors.name[0] }}</span>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="text" class="form-control" :class="errors.email? ' is-invalid' : '' " id="email" name="email" v-model="fields.email">
                        <span v-if="errors.email" class="text-danger">{{ errors.email[0] }}</span>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" :class="errors.password? ' is-invalid' : '' " id="password" name="password" v-model="fields.password">
                        <span v-if="errors.password" class="text-danger">{{ errors.password[0] }}</span>
                    </div>
                    <div class="mb-3">
                        <label for="confirm_password" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" :class="errors.confirm_password? ' is-invalid' : '' " id="confirm_password" name="confirm_password" v-model="fields.confirm_password">
                        <span v-if="errors.confirm_password" class="text-danger">{{ errors.confirm_password[0] }}</span>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fields: {},
            errors: {}
        }
    },
    methods: {
        submitRegister(){
            this.axios.post('/api/register_user', this.fields)
            .then((response) => {
                this.$utils.showSuccess('Success', response.data.success.message);
                this.errors = {};
                this.fields = {};
            })
            .catch(error => {
                this.errors = error.response.data.errors;
            })
        }
    }
}
</script>