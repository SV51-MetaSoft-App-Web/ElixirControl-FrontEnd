import { createRouter, createWebHistory } from 'vue-router';

import InventoryManagementComponent from "../elixir-control/inventory-management/pages/inventory-management.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/productor/inventory',
            name: 'InventoryManagement',
            component: InventoryManagementComponent,
            meta: { title: 'Inventory Management' }
        }
    ]
});



export default router;