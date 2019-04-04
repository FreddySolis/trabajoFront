import Vue from 'vue';
import VueRouter from 'vue-router'
import Login from './components/authentication/Login.vue'
import Register from './components/authentication/Register.vue'
import NavbarUser from './components/Navbar/NavbarUser.vue'
import Profile from './components/Profile.vue'
import Edprofile from './components/Edprofile.vue'


// ---------------------------------------------------------------------------

import Preview from './components/producto/Preview.vue'
import Single from './components/producto/Single.vue'

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
            path:"/profile",
            component:Profile,
      
        },
        {
            path:"/editprofile",
            component:Edprofile,
      
        },
    
        {
            path:"/producto",
            component:Preview,
            meta:{
                forAuth:false
            }
        },
        {
            path:"/producto/:id",
            component:Single,
            meta:{
                forAuth:false
            }
        },
    ]
});

export default router