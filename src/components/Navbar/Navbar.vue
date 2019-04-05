<template>
<div style="  position: sticky;top: 0;">


  <nav class="navbar navbar-dark bg-primary">
  <a class="navbar-brand">G2A Azul</a>
  <form  class="form-inline">
               <router-link :to="{ path: '/profile'}">
                   <button  class="btn btn-outline-dark btn-lg"><i class="fas fa-user"></i></button>               
          </router-link>  
          <router-link :to="{ path: '/Car'}">
                   <button  class="btn btn-outline-dark btn-lg"><i class="fas fa-shopping-cart"></i></button>               
          </router-link> 
  </form>

</nav>
</div>
</template>
