<script>
import {SecurityApiService} from "../services/security-api.service.js";
import {User} from "../model/user.entity.js";

export default {
  name: "sign-in",

  data() {
    return {
      userArray: [],
      securityApiService: null,
      logged: false,
      username: '',
      password: ''
    }
  },

  methods: {

    checkLogin() {
      this.securityApiService.getAllResources().then(response => {
        this.userArray = response.data;
        console.log("Users data: ", this.userArray);

        const user = this.userArray.find(u => u.username === this.username && u.password === this.password);

        if (user) {
          this.logged = true;
          console.log('Login successful');
        } else {
          this.logged = false;
          console.log('Invalid username or password');
        }

      }).catch (error => {
        console.log("Error getting all users: ", error);
      });
    },


  },

  created() {
    console.log('Sign In component created');
    this.securityApiService = new SecurityApiService("/users");

  }


}
</script>

<template>

</template>

<style scoped>

</style>