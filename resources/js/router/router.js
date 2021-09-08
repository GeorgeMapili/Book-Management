import Vue from "vue";
import VueRouter from "vue-router";
import middleware from "./middleware/index"

Vue.use(VueRouter);

export default new VueRouter ({
    mode: "history",
    routes: [
        {
            path: "/login",
            name: "login",
            component: () => import(/* webpackChunkName: "Login" */ "../views/auth/Login"),
            beforeEnter: middleware.guest,
        },
        {
            path: "/",
            component: () => import(/* webpackChunkName: "Login" */ "../views/home/Home"),
            beforeEnter: middleware.guest,
        },
        {
            path: "/register",
            name: "register",
            component: () => import(/* webpackChunkName: "Register" */ "../views/auth/Register"),
            beforeEnter: middleware.guest,
        },
        {
            path: "/book",
            name: "book",
            component: () => import(/* webpackChunkName: "Book" */ "../views/book/Book"),
            beforeEnter: middleware.user
        },
        {
            path: "/book/add-book",
            name: "addbook",
            component: () => import(/* webpackChunkName: "AddBook" */ "../views/book/AddBook"),
            beforeEnter: middleware.user
        },
        {
            path: "/book/edit-book/:id",
            name: "editbook",
            component: () => import(/* webpackChunkName: "AddBook" */ "../views/book/EditBook"),
            beforeEnter: middleware.user
        },
        {
            path: "*",
            name: "notFound",
            component: () => import(/* webpackChunkName: "NotFound" */ "../views/auth/NotFound"),
            beforeEnter: middleware.guest,
        },
    ]
})