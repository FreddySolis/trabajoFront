<template>
<div style="  position: sticky;top: 0;">


  <nav class="navbar navbar-dark bg-primary">
    <router-link :to="{ path: '/'}">
  <button class="navbar-brand">G2A Azul</button>
  </router-link> 
  <form  class="form-inline">
               <router-link :to="{ path: '/profile'}">
                   <button  class="btn btn-outline-dark btn-lg"><i class="fas fa-user"></i></button>               
          </router-link>  
          <router-link :to="{ path: '/Car'}">
                   <button  class="btn btn-outline-dark btn-lg"><i class="fas fa-shopping-cart"></i></button>               
          </router-link>
          <div v-if="this.$auth.isAuthenticated()">
            <router-link :to="{ path: '/login'}">
            <button @click="exit()" class="btn btn-outline-dark btn-lg"><i class="fas fa-sign-out-alt"></i></button>               
          </router-link>
          </div>
          <div v-else>
            <router-link :to="{ path: '/login'}">
            <button class="btn btn-outline-dark btn-lg"><i class="fas fa-user-plus"></i></button>               
          </router-link>
          </div>

  </form>

</nav>
</div>
</template>
<script>
  export default {
    data(){
      return{
        cards:{}
      }
    },
         methods: {
           exit(){
            localStorage.removeItem('token')
            localStorage.removeItem('expiration')
            localStorage.removeItem('user_id')
           }
         
  }

  }
</script>

