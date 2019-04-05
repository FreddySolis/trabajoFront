<template>
  <div id="app">  
    <navbar></navbar>
    <router-view></router-view>


<dev></dev>
  </div>
</template>

<script>

import footer from './components/footer.vue'
import Navbar from './components/Navbar/Navbar.vue'
export default {
  
  name: 'App',
  components: {
    dev:footer,
    Navbar:Navbar,
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
