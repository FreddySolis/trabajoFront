import Vue from 'vue';
import VueRouter from 'vue-router'
import Login from './components/authentication/Login.vue'
import Register from './components/authentication/Register.vue'
import Feed from './components/Feed.vue'
import MakeQuestion from './components/question/MakeQuestion.vue'
import QuestionDetails from './components/question/QuestionDetails.vue'
import Myquestion from './components/question/Myquestion.vue'
import Question from './components/question/Question.vue'
import Welcome from './components/welcome/welcome.vue'
import NavbarUser from './components/Navbar/NavbarUser.vue'
import Profile from './components/Profile.vue'
import Edprofile from './components/Edprofile.vue'
import FindQuestion from './components/question/FindQuestion.vue'
import FindMateria from './components/FindMateria.vue'

// ---------------------------------------------------------------------------

import Preview from './components/producto/Preview.vue'
<<<<<<< HEAD
import Profile2 from './components/profile/Profile.vue'
=======
import Single from './components/producto/Single.vue'
>>>>>>> 78c6706870436abbd3a0575c3021e32ccee225e6

Vue.use(VueRouter)

const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:"/navbar",
            component:NavbarUser,
      
        },
        {
            path:"/",
            component:Welcome,
      
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
            path:"/feed",
            component:Feed,
            meta:{
                forAuth:true
            }
        },
        {
            path:"/questionform",
            component:MakeQuestion,
            meta:{
                forAuth:true
            }
        },
        {
            path:"/details/:id",
            component:QuestionDetails,
            meta:{
                forAuth:true
            }
        },
        {
            path:"/editprofile",
            component:Edprofile,
      
        },
        {
            path:"/myquestions",
            component:Myquestion,
      
        },
        {
            path:"/question",
            component:Question,
      
        },
        {
            path:"/findquestion/:title",
            component:FindQuestion,
            meta:{
                forAuth:true
            }
        },
        {
            path:"/findsubject/:subject",
            component:FindMateria,
            meta:{
                forAuth:true
            }
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
        {
            path:"/profile",
            component:Profile2,
            meta:{
                forAuth:false
            }
        }
        
    ]
});

export default router