import { createRouter, createWebHistory } from 'vue-router';
import OrderHistory from "../elixir-control/order-management/pages/order-management.vue";
import OrderDetails from "../elixir-control/order-management/pages/order-details.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/productor/myorders',
            name: 'MyOrder',
            component: OrderHistory,
            meta: { title: 'My Orders' }
        },
        {
            path: '/productor/orderdetails/:id',
            name: 'OrderDetails',
            component: OrderDetails,
            meta: { title: 'Order Details' }
        }
    ]
});

export default router;