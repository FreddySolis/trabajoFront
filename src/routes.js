import Vue from 'vue';
import VueRouter from 'vue-router'
import Login from './components/authentication/Login.vue'
import Register from './components/authentication/Register.vue'
import NavbarUser from './components/Navbar/NavbarUser.vue'

import Edprofile from './components/Edprofile.vue'


// ---------------------------------------------------------------------------

import Preview from './components/producto/Preview.vue'
import Profile2 from './components/profile/Profile.vue'

import Single from './components/producto/Single.vue'

import addTarjeta from './components/profile/addCard.vue'
import Car from './components/Car/Car.vue'
Vue.use(VueRouter)

const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:"/navbar",
            component:NavbarUser,
      
        },

        {
            path:"/login",
            component:Login,
            meta:{
                forVisitors:true
            }
        },
        {
            path:"/register",
            component:Register,
            meta:{
                forVisitors:true
            }
        },
        
        {
            path:"/editprofile",
            component:Edprofile,
      
        },
    
        {
            path:"/",
            component:Preview,
            meta:{
                forAuth:false
            }
        },
        {
            path:"/producto-:id",
            component:Single,
            meta:{
                forAuth:false
            }
        },
        {
            path:"/profile",
            component:Profile2,
            meta:{
                forAuth:false
            }
        },
        {
            path:"/addTarjeta/:id",
            component:addTarjeta,
            meta:{
                forAuth:false
            }
        },
        {
            path:"/Car",
            component:Car,
            meta:{
                forAuth:true
            }
        }
        
    ]
});

export default router