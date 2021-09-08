export default {
    showSuccess(title, message){
        Swal.fire(
            title,
            message,
            'success'
        )
    },
    showError(title, message){
        Swal.fire({
            type: '',
            title: title,
            text: message
        })
    },

    swal(id){
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