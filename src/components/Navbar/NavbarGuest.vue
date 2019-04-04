<template>
  <nav class="navbar navbar-dark bg-primary">
  <a class="navbar-brand">Navbar</a>
  <form  class="form-inline">
               <router-link :to="{ path: '/profile'}">
                   <button  class="btn btn-outline-dark btn-lg"><i class="fas fa-user"></i></button>               
          </router-link>  
  </form>
</nav>
</template>
