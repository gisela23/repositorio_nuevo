<template>
        <div class="row">
            
            <div class="col-4">
                <div class="mb-3">
                    <label class="form-label">Cateto opuesto</label>
                    <input v-model="opuesto" type="number" class="form-control">
                </div>


                <div class="mb-3">

                    <label for="form-label">Cateto adyacente</label>    
                    <input v-model="adyacente" type="number" class="form-control">

                </div>
                <button @click="calcular()" class="btn btn-success">Calcular Hipotenusa</button>

            </div>

           <div class="col-4">
                
                <h1>Hipotenusa</h1>

            </div>

        </div>
        
</template>

<script>
    export default {
        name:'PitagorasForm',
        data(){
           return{

                opuesto:null,
                adyacente:null,


           } 
            
        },
        methods:{
            



        }
    }
    
</script>