
<template>
  <v-layout justify-center>
    <v-flex xs12 sm12 md12>

      <v-card 
      color="light-blue darken-1"      
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

              <router-link :to="{ path: '/producto/'+card.id}">
                <v-img
                  :src="card.imagen"                  
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
      this.$http.get("api/carrito/" + this.$auth.getUserId()).then((response) => {
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