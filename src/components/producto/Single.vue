<template>
  <div style="background-color:black;">
      <div class="container">
      <div class="row">
          <div class="col col-sm-6">
              <v-img :src="require('../../assets/'+producto.id+'.jpg')"></v-img>
          </div>
      
          <div class="col col-sm-6 text-center" style="color:white;">
              <h3>Nombre: {{producto.producto}}</h3>
              <h3>Descripcion: {{producto.descripcion}}</h3>
              <h3>Precio: ${{producto.precio}} MXN</h3>
          </div>
      </div>
      <br>
      <div class="row align-center">   
          <div class="col col-sm-4"></div>  
          <div style="margin:5px;" class="col col-sm-2">
              <button class="btn btn-success">Comprar   <i class="fas fa-dollar-sign" style="font-size:20px; color:white"></i></button>        
          </div>
          <div style="margin:5px;" class="col col-sm-2">
              <button class="btn btn-info">Agregar al Carrito <i class="fas fa-cart-plus" style="font-size:20px; color:white"></i></button>          
          </div>
          <div class="col col-sm-4"></div>  
      </div>
      
      </div>
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
            console.log(response.body)
        })
    }
};
</script>

<style scoped>
</style>