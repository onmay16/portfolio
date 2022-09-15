import Vue from 'vue';
import VueRouter from 'vue-router';
import AboutMe from '../components/AboutMe'
import Career from '../components/Career'
import Project from '../components/Project'
import Contact from '../components/Contact'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'AboutMe',
            component: AboutMe
        },
        {
            path: '/project',
            name: 'Project',
            component: Project
        },
        {
            path: '/career',
            name: 'Career',
            component: Career
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
    ]
})

export default router;