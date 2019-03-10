
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
    data: () => ({
      cards: [        
        { title: 'Xbox One', src: 'https://i.blogs.es/d2a441/xboxonex/450_1000.jpg', flex: 4, price:'1234'},
        { title: 'Playstation 4', src: 'https://i.blogs.es/94688b/playstation-4/450_1000.jpg', flex: 4, price:'1234' },
        { title: '1000 Pavos Fortnite', src: 'https://cdn140.picsart.com/264940182007212.png?r1024x1024', flex: 4, price:'1234' },
        { title: 'Minecraft Premium', src: 'https://www.tecnogaming.com/wp-content/uploads/2016/09/minecraft-featured.jpg', flex: 4, price:'1234' },
        { title: 'Monas Chinas', src: 'https://i.ytimg.com/vi/2yaZx772Nh8/maxresdefault.jpg', flex: 4, price:'1234' }
      ]
    })
  }
</script>

<style scoped>
.oscurecer:hover{
    background-color: black
}
</style>