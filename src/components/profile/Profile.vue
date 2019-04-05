<template>

<div class="container">

<div>
    
</div>
    <div class="datos" style="text-align: center;">

        <div style="margin:4%;">
            <label style="font: 150% sans-serif;" for="">Nombre:</label><input style="font: 200% sans-serif;" type="text" v-if="editName" v-model="user.name">
            <label style="font: 200% sans-serif;" v-else>{{user.name}}</label>
            <button class="btn btn-success" @click="save()" v-if="editName" style="margin-left:2%;"><i class="fas fa-save"></i></button>
            <button class="btn btn-primary" @click="editN()" v-else style="margin-left:2%;"><i class="far fa-edit"></i></button>
        </div>

        <div style="margin:4%;">
            <label style="font: 150% sans-serif;" for="">Correo:</label><input style="font: 200% sans-serif;" type="text" v-if="editEmail" v-model="user.email">
            <label style="font: 200% sans-serif;" v-else>{{user.email}}</label>
            <button class="btn btn-success" @click="save()" v-if="editEmail" style="margin-left:2%;"><i class="fas fa-save"></i></button>
            <button class="btn btn-primary" @click="editE()" v-else style="margin-left:2%;"><i class="far fa-edit"></i></button>
            
        </div>

        <div style="margin:4%;" v-for="tarjeta in tarjetas" :key="tarjeta.id" >
            <i style="margin-right:5%;font-size:250%" class="fas fa-credit-card"></i>
            <label style="font: 200% sans-serif;" for="">{{tarjeta.numero}}</label>
            <button class="btn btn-danger" style="margin-top:-1%" @click="eliminar(tarjeta.id)" v-if="im"><i class="fas fa-trash-alt"></i></button>
            <br>
        </div>
        <div style="margin:4%;">
        <router-link :to="{ path: '/addTarjeta/' + user.id}">
          <button class="btn btn-success" v-if="im"><i style="margin-right:5%;font-size:250%" class="fas fa-credit-card"></i></button>                   
          </router-link>
            
            <br>
        </div>

    </div>

</div>
</template>

<script>
export default {
    
   data() {
         return{          
            user: {},
            tarjetas:[],
            editName:false,
            editEmail:false,
            im:false,
            editingN:false,
            editingE:false
         };
     },
     created() {
           var Header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.$auth.getToken()
      }
    };
      this.$http
          .get("api/users/" + this.$auth.getUserId(), Header)
          .then(response => {
              console.log(response);
              console.log(response.data);

            this.user = response.data;

            console.log(response.data.id + "  "  + this.$auth.getUserId())
            if(response.data.id == this.$auth.getUserId()){
                this.im=true;
            }
            
          });
          this.$http
          .get("api/tarjeta/" + this.$auth.getUserId(),Header)
          .then(response => {
              this.tarjetas= response.body;
          });
     },
     
    components: {
    },
     methods: {
         editN(){
            this.editingN = true
            this.editName= true
         },

         editE(){
             this.editingE = true
             this.editEmail = true
         },
         save(){
        this.$http.put("api/users/" +this.$auth.getUserId(), this.user,this.Header).then(response => {

      });
      this.editName = false
      this.editEmail = false
         },
         eliminar(id){
             this.$http
             .get("api/borrarTarjeta/" + id ,this.Header)
             .then(response =>{
                 this.tarjetas = response.body
             });
         }
         
  }
}
</script>