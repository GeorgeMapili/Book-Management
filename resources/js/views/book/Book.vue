<template>
    <div>
        <h1 class="text-center mt-3 display-3">Book Page</h1>

        <div class="container mt-5">
            <router-link class="btn btn-primary m-1" :to="{name: 'addbook'}">Add Books</router-link>

            <table class="table">    
                <thead>
                    <tr>
                    <th scope="col">Author</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="book in books" :key="book.id">
                        <th scope="row">{{ book.author }}</th>
                        <td>{{ book.title }}</td>
                        <td>{{ book.description }}</td>
                        <td>{{ book.price }}</td>
                        <td>
                            <router-link :to="{name: 'editbook', params: {id: book.id}}" class="btn btn-secondary">Update</router-link>
                            <button class="btn btn-danger" @click.prevent="deleteBook(book.id)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>
import repository from "../../api/repository"

export default {
    data(){
        return {
            books: {},
            error: {}
        }
    },
    mounted() {
        this.loadData()
    },
    methods: {
        async loadData(){
            try {
                let { data } = await repository.getBook()
                this.books = data.data
            } catch (error) {
                this.error = error.response.data.message
            }
        },

        deleteBook(id){
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.axios.delete(`api/v1/deletebook/${id}`)
                    .then((response) => {
                        if(response.status){

                            Swal.fire(
                                'Deleted!',
                                'Successfully deleted.',
                                'success'
                            )

                            this.loadData();
                        }else{
                            this.$utils.showError('Error', response.message);
                        }
                    })
                    .catch(error => {
                        this.$utils.showError('Error', error.response.data.errors);
                        console.log(error);
                    });

                }
            })
        }
    }
}
</script>