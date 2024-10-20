import { createRouter, createWebHistory } from 'vue-router';
import OrderHistory from "../elixir-control/order-management/pages/order-management.vue";
import OrderDetails from "../elixir-control/order-management/pages/order-details.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/productor/orders/history',
            name: 'MyOrder',
            component: OrderHistory,
            meta: { title: 'My Orders' }
        },
        {
            path: '/productor/orders/:id',
            name: 'OrderDetails',
            component: OrderDetails,
            meta: { title: 'Order Details' }
        }
    ]
});

export default router;