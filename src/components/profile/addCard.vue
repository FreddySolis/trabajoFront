<template>
    <div class="container">
        <div style="text-align: center;">
            <div>
                <input class="cosa" type="text" v-model="numero" placeholder="Numero">
            </div>
            <div>
                <input class="cosa" type="text" v-model="tipo" placeholder="Tipo">
            </div>
            <div>
                <input class="cosa" type="text" v-model="banco" placeholder="Banco">
            </div>
            <div>
                <input class="cosa" type="pass" v-model="cvv" placeholder="Cvv">
            </div>
            <div>
                <input class="cosa" type="text" v-model="expiracion" placeholder="Expiracion">
            </div>
            <div>
                      <router-link :to="{ path: '/profile' }">
<button class="btn btn-success" @click="save()" ><i style="margin-right:5%;font-size:250%" class="fas fa-save"></i></button>
           </router-link>
            </div>
        </div>
        
    </div>
</template>
<style>

.cosa{
    font: 200% sans-serif;
    border-color: black;
    border-style: solid;
    margin: 2%;
}

</style>

<script>
export default {
    
   data() {
         return{          
            tarjeta: {},
            numero:"",
            tipo:"",
            banco:"",
            cvv:"",
            expiracion:"",
            id_usuario:"",

         };
     },
     created() {
           var Header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.$auth.getToken()
      }
    };
      
     },
     
    components: {
    },
     methods: {
         save(){
             this.tarjeta= {
                 numero: this.numero,
                 tipo: this.tipo,
                 banco: this.banco,
                 cvv: this.cvv,
                 expiracion: this.expiracion,
                 id_usuario: this.$auth.getUserId(),

             }
                   this.$http.post("api/newTarjeta",this.tarjeta,this.Header).then((response) => {
      });
         }
  }
}
</script>