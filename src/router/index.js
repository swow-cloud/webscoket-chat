import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../views/IndexView.vue'),
        meta: {
            title: '首页'  // 标题设置在这里
        }
    },
    {
        path: '/login',
        name: "login",
        component: () => import('../views/LoginView.vue'),
        meta: {
            title: '登录'  // 标题设置在这里
        }

    },
    {
        path: '/register',
        name: "register",
        component: () => import('../views/RegisterView.vue'),
        meta: {
            title: '注册'  // 标题设置在这里
        }
    }
]

const router = new VueRouter({
    routes
})

export default router
