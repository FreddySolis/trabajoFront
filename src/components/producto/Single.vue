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
              <button @click="add(producto)" class="btn btn-info">Agregar al Carrito<i class="fas fa-cart-plus" style="font-size:20px; color:white"></i></button>          
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
            producto :{},
            datos:[],

        }
    },
    created(){
                 var Header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.$auth.getToken()
      }
    };
        this.$http.get("api/producto/"+this.$route.params.id).then((response) => {
            this.producto=response.body
            console.log(response.body)
        })
    },
    methods:{
        add(producto){
            if(this.$auth.isAuthenticated() == true){
            this.datos = {
                id_producto:producto.id,
                id_usuario:this.$auth.getUserId(),
                cantidad:"1",
                total:producto.precio,
            }
            
            this.$http.post("api/newCarrito",this.datos,this.Header).then((response) =>{
                alert("Se agrego al carrito")
            });
            }
            else{
                alert("Inicia sesion para agregar algo al carrtio")
            }
        }
    }
};
</script>

<style scoped>
</style>