<template>
  <div class="login-distributor-container">
    <div class="form-container">
      <img src="@/assets/logo.png" alt="Elixir Control Logo" class="logo" />
      <form @submit.prevent="loginDistributor" class="login-form">
        <div class="form-group">
          <label for="providerName">Nombre de proveedor</label>
          <input type="text" id="providerName" v-model="providerName" required />
        </div>

        <div class="form-group">
          <label for="distributorCode">Código de distribuidor</label>
          <input type="text" id="distributorCode" v-model="distributorCode" required />
        </div>

        <button type="submit" class="submit-btn">Ingresar</button>
      </form>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"; // Asegúrate que la ruta sea correcta

export default {
  name: "LoginDistributor",
  components: {
    Header,
  },
  data() {
    return {
      providerName: "",
      distributorCode: "",
    };
  },
  methods: {
    loginDistributor() {
      // Aquí iría la lógica para iniciar sesión
      console.log("Nombre del proveedor:", this.providerName);
      console.log("Código del distribuidor:", this.distributorCode);
    },
  },
};
</script>

<style scoped>
.login-distributor-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #ffffff;
}

.form-container {
  background-color: #f5f5dc;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 450px;
  height: 500px;
}

.logo {
  width: 100px;
  margin-bottom: 20px;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

.form-group label {
  display: block;
  font-size: 18px;
  color: #8b0000;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 2px solid #8b0000;
  border-radius: 5px;
  font-size: 16px;
}

.submit-btn {
  width: 100%;
  padding: 12px;
  background-color: #8b0000;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #a00000;
}
</style>
