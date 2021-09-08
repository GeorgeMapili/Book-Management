import api from "./api"

export default{
    createSession(){
        return api.get('/sanctum/csrf-cookie')
    },

    login(params){
        return api.post('/api/login_user', params)
    },

    getBook(){
        return api.get('/api/v1/book')
    },

    createBook(params){
        return api.post('/api/v1/addbook', params)
    },

    logout(){
        return api.delete('/api/v1/logout')
    }

}