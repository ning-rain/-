import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/views/Layout'
Vue.use(VueRouter)
const Home = () => import('@/views/Home')
const Search = () => import('@/views/Searsh')
const Play =() => import('@/views/Play')
const router = new VueRouter({
    routes:[
        {path:'/', component: Layout, children:[
            {path:'home', component: Home},
            {path:'search', component: Search}
        ]},
        {path:'/play', component: Play}
    ]
})
export default router