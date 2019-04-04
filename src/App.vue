<template>
  <div id="app">  
    <navbar-guest></navbar-guest>
    <!-- <navbar-user v-else></navbar-user>   -->
    <router-view></router-view>   
<!-- <dev></dev> -->
  </div>
</template>

<script>

import footer from './components/footer.vue'
import NavbarUser from './components/Navbar/NavbarUser.vue'
import NavbarGuest from './components/Navbar/NavbarGuest.vue'
import Navbar from './components/Navbar/Navbar.vue'
export default {
  
  name: 'App',
  components: {
    dev:footer,
    NavbarUser,
    NavbarGuest
  },
  data () {
    return {
      validacion:'no'
    }
  },
  created(){
      if(this.$auth.getToken()==null){
      }else{
        this.validacion=this.$auth.getToken();
      }
  },
  updated(){
      if(this.$auth.getToken()==null){
this.validacion='no';
      }else{
        this.validacion=this.$auth.getToken();
      }
  }
}
</script>
