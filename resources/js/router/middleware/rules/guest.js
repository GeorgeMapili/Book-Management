import store from "../../../store/index"

export default (to, from, next) => {
    if(store.getters['authenticated']) {
        next({ name: "book"})
    } else {
        next()
    }
}