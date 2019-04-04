<template>
  <div class="container">
  <v-layout justify-center>
  <v-container fluid>
    <v-layout row wrap>
    <v-flex xs12 sm12 md12>
        <v-flex xs6 sm6 md6>
        <v-img :src="producto.imagen" 
        :aspect-ratio="16/9"    
        >

        </v-img>
        </v-flex>

        <v-flex xs6 sm6 md6>
            <label>{{producto.producto}}</label><br>
            <label>Descripcion: {{producto.descripcion}}</label><br>
            <label>Precio: {{producto.precio}}</label><br>
        </v-flex>
    </v-flex>
  </v-layout>
  </v-container>
  </v-layout>
  </div>
</template>

<script>
export default {
    data(){
        return{
            producto :{}
        }
    },
    created(){
        this.$http.get("api/producto/"+this.$route.params.id).then((response) => {
            this.producto=response.body
        })
    }
};
</script>

<style scoped>
</style>