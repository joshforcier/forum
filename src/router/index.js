import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/PageHome'
import ThreadShow from '@/pages/PageThreadShow'
import ThreadEdit from '@/pages/PageThreadEdit'
import ThreadCreate from '@/pages/PageThreadCreate'
import Category from '@/pages/PageCategory'
import NotFound from '@/pages/PageNotFound'
import Forum from '@/pages/PageForum'
import Profile from '@/pages/PageProfile'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/category/:id',
            name: 'Category',
            component: Category,
            props: true,
        },
        {
            path: '/forum/:id',
            name: 'Forum',
            component: Forum,
            props: true,
        },
        {
            path: '/thread/create/:forumId',
            name: 'ThreadCreate',
            component: ThreadCreate,
            props: true,
        },
        {
            path: '/thread/:id',
            name: 'ThreadShow',
            component: ThreadShow,
            props: true,
        },
        {
            path: '/thread/:id/edit',
            name: 'ThreadEdit',
            component: ThreadEdit,
            props: true,
        },
        {
            path: '/me',
            name: 'Profile',
            component: Profile,
            props: true,
        },
        {
            path: '/me/edit',
            name: 'ProfileEdit',
            component: Profile,
            props: {edit: true},
        },
        {
            path: '*',
            name: 'NotFound',
            component: NotFound,
        },
    ],

    mode: 'history'
})
