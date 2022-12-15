import {
    createRouter,
    createWebHistory
} from 'vue-router'
import BookCard from '../client/cards/BookCard.vue'
import GameCard from '../client/cards/GameCard.vue'
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
        },
        {
            path: '/GameCard',
            component: GameCard
        },
    ]
})

export default router