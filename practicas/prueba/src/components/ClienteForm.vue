<template>

    <div class="row">
        <div class="col-4">
            
            <div class="mb-3">
                <label class="form-label">Nombre</label>
                <input v-model="nombre" class="form-control" type="text" placeholder="ingrese nombre">
            </div>

            <div class="mb-3">
            
                <label class="form-label">Apellido</label>
                <input v-model="apellido" class="form-control" type="text" placeholder="ingrese Apellido">
            
            </div>
            <div class="mb-3">
                <label class="form-label">DNI</label>
                <input v-model="dni" class="form-control" type="number" placeholder="ingrese dni">
            </div>
            <div v-if="estado == 0">
                <button @click="guardarCliente()" class="btn btn-success">Guardar cliente</button>
            </div>
            <div v-if="estado == 1">
                <button @click="actualizarCliente()" class="btn btn-primary">Actualizar Cliente</button>
            </div>  
              
        </div>
         <div class="col-8">

             <table class="table">
                
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>DNI</th>
                        <th>Acción</th>
                    </tr>
                    
                </thead>
                <tbody>
                    <tr v-for="cliente of lista" v-bind:key="cliente.id_cliente">
                        <td>{{cliente.nombre}}</td>
                        <td>{{cliente.apellido}}</td>
                        <td>{{cliente.dni}}</td>
                        <td>
                        
                            <button @click="eliminarCliente(cliente.id_cliente)" class="btn btn-danger btn-sm">x</button>
                            <button @click="editar(cliente)" class="btn btn-primary btn-sm">edit</button>
                        </td>

                    </tr>
                </tbody>
             </table>


         </div>
      
    </div>
       
            
   
</template>

<script>
   
    export default {
        name:"ClienteForm",
        data(){

            return{

                nombre:'',
                apellido:'',
                dni:null,
                id:null,
                lista:[],
                estado:0

            
            }
        },
        methods:{

            vaciar(){
                this.nombre = '';
                this.apellido = '';
                this.dni = null;

            },
            guardarCliente(){

                const unCLiente = {

                    nombre:this.nombre,
                    apellido:this.apellido,
                    dni:this.dni,
                    
                }

                this.axios.post("http://localhost:3002/clientes",unCLiente).then(result => {

                    alert(result.data)
                    this.vaciar(),

                    this.listarClientes();
                })
            },

            listarClientes(){
                this.axios.get("http://localhost:3002/clientes").then(result => {

                    this.lista = result.data;
                    
                })

            },
            eliminarCliente(id){
                this.axios.delete("http://localhost:3002/clientes/"+id).then(result => {
                    alert(result.data)
                    this.listarClientes();
                })

            },
            editar(unCLiente){
                this.estado = 1;
                this.nombre = unCLiente.nombre;
                this.apellido = unCLiente.apellido;
                this.dni = unCLiente.dni;
                this.id = unCLiente.id_cliente;
            },
            actualizarCliente(){
                const clienteModificado = {
                    nombre:this.nombre,
                    apellido:this.apellido,
                    dni:this.dni,
                }
                this.axios.put("http://localhost:3002/clientes/"+this.id,clienteModificado).then(result => {
                    alert(result.data)
                    this.listarClientes()
                    this.vaciar()
                    this.estado = 0;
                })
            }
        },
        mounted(){

            this.listarClientes()
        }
    
    }
</script>   