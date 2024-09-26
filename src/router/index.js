import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import LoginDistributor from '@/views/LoginDistributor.vue';
import LoginProducer from '@/views/LoginProducer.vue';
import RegisterProducer from '@/views/RegisterProducer.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/login-distributor',
        name: 'LoginDistributor',
        component: LoginDistributor,
    },
    {
        path: '/login-producer',
        name: 'LoginProducer',
        component: LoginProducer,
    },
    {
        path: '/register-producer',
        name: 'RegisterProducer',
        component: RegisterProducer,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;


