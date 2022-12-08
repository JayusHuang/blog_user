import {
    createRouter,
    createWebHistory
} from 'vue-router'
import BookCard from '../components/cards/BookCard.vue'
import Home from '../App.vue'

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [{
            path: '/',
            component: Home
        },
        {
            path: '/BookCard',
            component: BookCard
        }
    ]
})

export default router