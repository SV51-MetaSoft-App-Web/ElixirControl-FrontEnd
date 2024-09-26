<!-- src/views/HomePage.vue -->
<template>
  <div>
    <section class="home">
      <div class="home__text">
        <h1>Desde la uva hasta la botella, todo bajo control.</h1>
        <p>ElixirControl: Tú mejor aliado en el proceso productivo de vinos</p>
        <div class="home__buttons">
          <router-link to="/login-producer" class="button producer">Productor</router-link>
          <router-link to="/login-distributor" class="button distributor">Distribuidor</router-link>
        </div>
      </div>
      <div class="home__image">
        <img src="@/assets/Homeee.png" alt="Botella de vino" />
      </div>
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "HomePage",
  components: {
    Header,
  },
};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  background-color: #ffffff;
  min-height: 100vh;
}

.home__text h1 {
  font-size: 42px;
  font-weight: bold;
  color: #8B0000;
}

.home__text p {
  margin-top: 20px;
  font-size: 20px;
  color: #555;
}

.home__buttons {
  margin-top: 40px;
  display: flex;
}

.button {
  padding: 15px 30px;
  margin-right: 20px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 18px;
}

.producer {
  background-color: #8B4513;
  color: white;
}

.distributor {
  background-color: #A52A2A;
  color: white;
}

.home__image img {
  height: 600px;
  width: 400px;

}

</style>
