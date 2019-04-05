<template>
  <nav class="navbar navbar-dark bg-primary">
  <a class="navbar-brand">Empresa name</a>
  <form  class="form-inline">
               <router-link :to="{ path: '/profile'}">
                   <button  class="btn btn-outline-dark btn-lg">Perfil <i class="fas fa-user"></i></button>               
          </router-link>  
  </form>
</nav>
</template>
