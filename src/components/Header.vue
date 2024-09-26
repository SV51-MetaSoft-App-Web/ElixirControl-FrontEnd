<!-- src/components/Header.vue -->
<template>
  <header class="header">
    <div class="header__logo">
      <img src="@/assets/logo.png" alt="Elixir Control Logo" />
    </div>
    <nav class="header__nav">
      <router-link to="/login-distributor">Iniciar Sesión</router-link>
      <router-link to="/register-producer">Registrarse</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #8B0000;
  padding: 10px 20px;
  width: 100%; /* Asegura que ocupe el 100% del ancho */
}
.header__logo img {
  height: 50px;
}
.header__nav a {
  color: #fff;
  margin-left: 20px;
  text-decoration: none;
}
</style>