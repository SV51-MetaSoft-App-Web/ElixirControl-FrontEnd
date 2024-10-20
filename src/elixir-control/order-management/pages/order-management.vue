<script>
import OrderService from '../services/order-api.service.js';
import OrderCreateAndEdit from "../components/order-create-and-edit.vue";
export default {
  components: {
    OrderCreateAndEdit,
  },
  data() {
    return {
      orders: [],
      editDialogVisible: false,
      selectedOrder: null,
    };
  },
  created() {
    this.fetchOrders();
  },
  methods: {
    async fetchOrders() {
      try {
        this.orders = await OrderService.getAllOrders();
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    },

    showDetails(order) {
      this.$router.push({ name: 'OrderDetails', params: { id: order.id } });
    },

    closeEditDialog() {
      this.editDialogVisible = false;
      this.selectedOrder = null;
    },

    openNewOrderDialog() {
      this.selectedOrder = {
        business: '',
        date: '',
        quantity: 0,
        phone: '',
        contact: {
          phone: '',
          address: '',
          email: '',
          ruc: '',
          wineType: '',
          paymentMethod: '',
          deliveryDate: ''
        }
      };
      this.editDialogVisible = true;
    }
  },
};
</script>

<template>
  <div class="order-history">
    <h1>My Orders</h1>

    <pv-data-table
        :value="orders"
        :paginator="true"
        :rows="10"
        :rows-per-page-options="[5, 10, 15]"
        current-page-report-template="Showing {first} to {last} of {totalRecords} items"
    >
      <pv-column field="business" header="Business" />
      <pv-column field="date" header="Date" />
      <pv-column field="quantity" header="Quantity" />
      <pv-column field="phone" header="Phone" />

      <pv-column headerStyle="width: 8rem">
        <template #body="{ data }">
          <pv-button label="Details" icon="pi pi-info-circle" @click="showDetails(data)" />
        </template>
      </pv-column>
    </pv-data-table>

    <!-- Paginador -->
    <paginator :totalRecords="orders.length" :rows="10" @page="onPageChange"></paginator>

    <!-- Botón para agregar un nuevo pedido -->
    <pv-button label="Add New Order" @click="openNewOrderDialog" class="mt-3" />

    <!-- Dialog for order creation/editing -->
    <OrderCreateAndEdit
        v-model:visible="editDialogVisible"
        :order="selectedOrder"
        :edit="selectedOrder !== null"
        @canceled="closeEditDialog"
        @saved="fetchOrders"
    />
  </div>
</template>

<style scoped>

</style>