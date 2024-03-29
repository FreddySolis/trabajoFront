import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App.vue'
import Router from './routes.js'
import VueResource from 'vue-resource'
import Vuetify from 'vuetify'
Vue.use(Vuetify)
import Auth from './packages/auth/Auth.js'
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);
Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(Auth)



// Ruta del endpoint
Vue.http.options.root="http://127.0.0.1:8000/"
Vue.http.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken()
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'


Router.beforeEach(
  (to,from,next) =>{    
    if(to.matched.some(record => record.meta.forVisitors)){      
      console.log('Para visitantes')
      if(Vue.auth.isAuthenticated()){
        console.log('Autenticado no debe ver vistas de visitantes')
        next('/producto')
      }
      else{
        next()
      }
    }
    else if(to.matched.some(record => record.meta.forAuth)){
     
      if(!Vue.auth.isAuthenticated()){    
        alert('Debes iniciar sesión primero')    
        next('/login')
      }
      else{
        next()
      }      
    }
    else{
      console.log('No visitantes')
      next()
    }
    
  }
)

new Vue({
  render: h => h(App),
  router: Router
}).$mount('#app')
