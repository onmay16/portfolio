// import Vue from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home'
import About from '@/components/About'
import Project from '@/components/Project'
import Contact from '@/components/Contact'

// Vue.use(Router); 

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/project',
        name: 'Project',
        component: Project
    },
    {
        path: '/about'
        , component: About
    },
    {
        path: '/contact'
        , component: Contact
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

// export default new Router({
//     mode: 'history', 
//     routes: [
//         {
//             path: '/'
//             , component: Home
//         },
//         {
//             path: '/project'
//             , component: Project
//         },
//         {
//             path: '/about'
//             , component: About
//         },
//         {
//             path: '/contact'
//             , component: Contact
//         },
//     ]
// })