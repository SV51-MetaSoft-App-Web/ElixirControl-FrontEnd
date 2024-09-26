<!-- src/views/LoginProducer.vue -->
<template>
  <div>
    <section class="login">
      <form class="login__form">
        <h2>Productor - Elixir Control</h2>
        <label for="email">E-mail</label>
        <input type="email" id="email" />
        <label for="password">Contraseña</label>
        <input type="password" id="password" />
        <button type="submit">Ingresar</button>
        <p><router-link to="/register-producer">¿No tienes una cuenta? Regístrate</router-link></p>
      </form>
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "LoginProducer",
  components: {
    Header,
  },
};
</script>

<style scoped>

.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #ffffff;
}

.login__form {
  background-color: #f5f5dc;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 450px;
}

.login__form label {
  display: block;
  font-size: 18px;
  color: #8b0000;
  margin-bottom: 5px;
}

.login__form input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 2px solid #8b0000;
  border-radius: 5px;
  font-size: 16px;
}

.login__form button {
  width: 100%;
  padding: 12px;
  background-color: #8b0000;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login__form button:hover {
  background-color: #a00000;
}


</style>