<!-- src/views/RegisterProducer.vue -->
<template>
  <div>
    <section class="register">
      <form class="register__form">
        <h2>Registrar - Productor</h2>
        <label for="company-name">Empresa de vinos</label>
        <input type="text" id="company-name" />
        <label for="ruc">RUC</label>
        <input type="text" id="ruc" />
        <label for="phone">Teléfono</label>
        <input type="text" id="phone" />
        <label for="password">Contraseña</label>
        <input type="password" id="password" />
        <button type="submit">Registrar</button>
      </form>
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "RegisterProducer",
  components: {
    Header,
  },
};
</script>

<style scoped>

.register {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #ffffff;
}

.register__form {
  background-color: #f5f5dc;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 450px;
}

.register__form label {
  display: block;
  font-size: 18px;
  color: #8b0000;
  margin-bottom: 5px;
}

.register__form input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 2px solid #8b0000;
  border-radius: 5px;
  font-size: 16px;
}

.register__form button {
  width: 100%;
  padding: 12px;
  background-color: #8b0000;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.register__form button:hover {
  background-color: #a00000;
}


</style>