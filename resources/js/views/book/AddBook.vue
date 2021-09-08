<template>
    <div>
        <div class="col-lg-4 offset-lg-4 mt-5">
            <div class="card">
                <div class="card-header">
                    Create Book
                </div>
                <div class="card-body">
                    <div>
                        <div class="mb-3">
                            <label for="title" class="form-label">Title</label>
                            <input type="text" class="form-control" :class="errors.title ? 'is-invalid': ''" id="title" v-model="fields.title">
                            <span v-if="errors.title" class="text-danger">{{ errors.title[0] }}</span>
                        </div>
                        <div class="mb-3">
                            <label for="author" class="form-label">Author</label>
                            <input type="text" class="form-control" :class="errors.author ? 'is-invalid':'' " id="author" v-model="fields.author">
                            <span v-if="errors.author" class="text-danger">{{ errors.author[0] }}</span>
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Description</label>
                            <textarea class="form-control" :class="errors.description ? 'is-invalid':'' " id="description" v-model="fields.description"></textarea>
                            <span v-if="errors.description" class="text-danger">{{ errors.description[0] }}</span>
                        </div>
                        <div class="mb-3">
                            <label for="price" class="form-label">Price</label>
                            <input type="number" class="form-control" :class="errors.price? 'is-invalid':'' " id="price" v-model="fields.price">
                            <span v-if="errors.price" class="text-danger">{{ errors.price[0] }}</span>
                        </div>
                        <button type="submit" class="btn btn-primary" @click="addBook">Add</button>
                    </div>
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
        }
    },
    methods: {
        async addBook(){
            this.axios.post('/api/v1/addbook', this.fields)
            .then((response) => {
                this.fields = {};
                this.$utils.showSuccess('Success', response.data.success.message);
            })
            .catch(error => {
                this.errors = error.response.data.errors
            })
        }
    }
}
</script>