
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
              :key="card.title"
              v-bind="{ [`xs${card.flex}`]: true }"
            >
              <v-card
              href="aquivaelenlace"
              color="black"
              >
                <v-img
                  :src="card.src"
                  height="200px"
                >
                  <v-container
                    fill-height
                    fluid
                    pa-2
                  >
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text oscurecer" v-text="card.title+' - $'+card.price"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>

                <v-card-actions>                  
                  <v-spacer></v-spacer>                  
                  <v-btn icon>                    
                    <i class="fas fa-dollar-sign" style="font-size:20px; color:white"></i>
                  </v-btn>
                  <v-btn icon>
                    <i class="fas fa-user" style="font-size:20px; color:white"></i>
                  </v-btn>
                  <v-btn icon>
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

      }
    },
    created(){
      this.$http.get("api/producto").then((response) => {
        console.log(response)
      })
    }
  }
</script>

<style scoped>
.oscurecer:hover{
    background-color: black
}
</style>