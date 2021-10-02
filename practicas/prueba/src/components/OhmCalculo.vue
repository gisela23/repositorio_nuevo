<template>
    <div class="mb-3">
        <label class="form-label">Método de calculo</label>
        <select @change="modificarlabels()" v-model="select" class="form-select">
            <option value="-1" disabled selected>Seleccione un método</option>
            <option value="0">Intencidad</option>
            <option value="1">Tension </option>
            <option value="2">Potencia </option>
        </select>
    </div>

    
    <div class="mb-3">
        <label  class="form-label">{{lbl1}}</label>
        <input v-model="dato1" class="form-control" type="number">


    </div>

    <div class="mb-3">
        <label class="form-label">{{lbl2}}</label>
        <input v-model="dato2" class="form-control" type="number">

    </div>
   
   <button @click="calcular()" class="btn btn-success">Calcular</button>
    

</template>

<script>
    export default {
        name:'OhmCalculo',
        data(){

            return{
                
                dato1:null,
                dato2:null,
                select:-1,
                lbl1:'',
                lbl2:'',
            }
            
           
        },
        methods:{
            
            validacion(to){
                if(this.select == 0){
                    if(to==0){
                        //cambiamos labels
                    }else{
                        //hacemos el calculo
                    }
                }else{
                    if(this.select == 1){

                    }else{

                    }
                }
            },
            modificarlabels(){
                this.validacion(0)
            },

            calcular(){
                this.validacion(1)
            },
            
        }
    }
</script>