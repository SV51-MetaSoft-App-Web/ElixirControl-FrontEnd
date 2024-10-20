<script>
export default {
  data() {
    return {
      order: null,
    };
  },
  created() {
    const id = this.$route.params.id;
    this.fetchItemDetails(id);
  },
  methods: {
    async fetchItemDetails(id) {
      const response = await fetch(`https://my-json-server.typicode.com/SV51-MetaSoft-App-Web/endpoint-order-management/order/${id}`);
      this.order = await response.json();
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<template>
  <div class="order-details">
    <h1>Order Details</h1>
    <div v-if="order" class="card">
      <div class="card-header">
        <p><strong>Name of Business: </strong>{{order.business}}</p>
        <p><strong>Requested Date:</strong> {{ order.requestedDate }}</p>
        <p><strong>Quantity:</strong> {{ order.quantity }}</p>
        <p><strong>Phone:</strong> {{ order.phone }}</p>
      </div>
      <div class="card-body">
        <p><strong>Address:</strong> {{ order.contact.address }}</p>
        <p><strong>Email:</strong> {{ order.contact.email }}</p>
        <p><strong>RUC:</strong> {{ order.contact.ruc }}</p>
        <p><strong>Wine Type:</strong> {{ order.contact.wineType }}</p>
        <p><strong>Payment Method:</strong> {{ order.contact.paymentMethod }}</p>
        <p><strong>Delivery Date:</strong> {{ order.contact.deliveryDate }}</p>
      </div>
    </div>
    <div class="button-container">
      <button class="back-button" @click="goBack">Back</button>
    </div>
  </div>
</template>

<style scoped>
.order-details {
  padding: 20px;
  text-align: left;
}
h2{
  text-align: center;
  font-size: 30px;
}
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin: 10px 0;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.card-header {
  margin-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.card-body h3 {
  margin-top: 15px;
}
.card {
  max-width: 600px;
}
.button-container {
  margin-top: 20px;
  text-align: center;
}
.back-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.back-button:hover {
  background-color: #0056b3;
}
</style>