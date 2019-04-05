
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
                        <span class="headline white--text oscurecer" v-text="card.producto+' - $'+card.precio"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
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

                  <router-link :to="{ path: '/agregar/'+card.id}">
                  <v-btn icon>
                    <i class="fas fa-cart-plus" style="font-size:20px; color:white"></i>
                  </v-btn>
                  </router-link>
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
        cards:{}
      }
    },
    created(){
      this.$http.get("api/producto").then((response) => {
        console.log(response)
        this.cards=response.body
      })
    }
  }
</script>

<style scoped>
.oscurecer:hover{
    background-color: black
}
</style>