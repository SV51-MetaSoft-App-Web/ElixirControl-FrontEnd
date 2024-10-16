import { createRouter, createWebHistory } from 'vue-router';
import HomeContentComponent from "../public/pages/home-content.component.vue";
import ClientManagementComponent from "../elixir-control/customer-management/pages/client-management.component.vue";
import ClientDetailsComponent from "../elixir-control/customer-management/pages/client-details.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeContentComponent,
            meta: { title: 'Home'}
        },
        {
            path:'/productor/clients',
            name: 'Clients',
            component: ClientManagementComponent,
            meta: { title: 'Clients'}
        },
        {
            path:'/productor/clients/details/:id',
            name: 'ClientDetails',
            component: ClientDetailsComponent,
            meta: { title: 'Client Details'},
            props: true
        }
    ]
});

export default router;