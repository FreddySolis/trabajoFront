
<template>
  <v-layout justify-center>
    <v-flex xs12 sm12 md12>

      <v-card 
      color=" darken-1"      
      > 
        <v-container
          fluid
          grid-list-md
        >
          <v-layout row wrap>
            <v-flex
              v-for="card in cards"
              :key="card.id"
              v-bind="{ [`xs${card.flex}`]: true }"
            >
              <v-card
              color="black"
              >

              <router-link :to="{ path: '/producto-'+card.id}">
                <v-img
                  :src="require('../../assets/'+card.id+'.jpg')"                  
                  height="200px"
                >              
                  <v-container
                    fill-height
                    fluid
                    pa-2
                  >
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        
                      </v-flex>
                    </v-layout>
                  </v-container>
                  
                </v-img>
                <span style="color:white; font-weight: bold;" class="headline oscurecer" v-text="card.producto+' - $'+card.precio"></span>
              </router-link>

                <v-card-actions>                  
                  <v-spacer></v-spacer>                            

                    <router-link :to="{ path: '/comprar/'+card.id}">   
                    <v-btn icon>                    
                      <i class="fas fa-dollar-sign" style="font-size:20px; color:white"></i>
                    </v-btn>
                    </router-link>

                  <!-- <router-link :to="{ path: '/perfil/'+card.id}">
                  <v-btn icon>
                    <i class="fas fa-user" style="font-size:20px; color:white"></i>
                  </v-btn>
                  </router-link> -->

                  <v-btn v-on:click="add(card)" icon>
                    <i class="fas fa-cart-plus" style="font-size:20px; color:white"></i>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data(){
      return{
        cards:{},
        datos:[],
        id_producto:"",
        id_usuario:"",
        cantidad:"",
        total:"",

      }
    },
    created(){
      this.$http.get("api/producto").then((response) => {
        console.log(response)
        this.cards=response.body
      })
    },
    methods: {
       add(card){
         if(this.$auth.isAuthenticated()){
            this.datos = {
                id_producto:card.id,
                id_usuario:this.$auth.getUserId(),
                cantidad:"1",
                total:card.precio,

            }
            
            this.$http.post("api/newCarrito",this.datos,this.Header).then((response) =>{
                alert("Se agrego al carrito")
            });
         }
         else{
           alert("Inicia secion para agregar algo al carrtio")
         }
            
        }
    }
  }
</script>

<style scoped>
.oscurecer:hover{
    background-color: black
}
</style>