<template>

    <div class="row">
        <div class="col-4">
            
            <div class="mb-3">
                
                <label class="form-label">Descripción</label>
                <div class="input-group mb-3"> 

                    <span class="input-group-text"> <i class="bi bi-bookmark-check-fill " ></i></span>
                    
                    <input v-model="descripcion" class="form-control" type="text" placeholder="ingrese una descripción">
                </div>
               
            </div>

             <label class="form-label">Precio compra</label>
            <div class="input-group mb-3">
            
               
                <span class="input-group-text"><i class="bi bi-currency-dollar"></i></span>
                <input v-model="precio_compra" class="form-control" type="number" placeholder="ingrese Precio Compra">
            
            </div>
            <div class="mb-3">
            
                <label class="form-label">Precio venta</label>
                <input v-model="precio_venta" class="form-control" type="number" placeholder="ingrese Precio Venta">
            
            </div>
            <div class="mb-3">
                <label class="form-label">Stock</label>
                <input v-model="stock" class="form-control" type="number" placeholder="ingrese stock">
            </div>

            <div v-if="estado == 0">
                <button @click="guardarProducto()" class="btn btn-success">Guardar Producto</button>
            </div>
            <div v-if="estado == 1">
                <button @click="actualizarProducto()" class="btn btn-primary">Actualizar Producto</button>
            </div>  
              
        </div>
         <div class="col-8">

             <table class="table">
                
                <thead>
                    <tr>
                        <th>Descripción</th>
                        <th>Precio Compra</th>
                        <th>Precio Venta</th>
                        <th>Stock</th>
                        <th>Acción</th>
                    </tr>
                    
                </thead>
                <tbody>
                    <tr v-for="producto of lista" v-bind:key="producto.id_producto">

                        <td>{{producto.descripcion}}</td>
                        <td>{{producto.precio_compra}}</td>
                        <td>{{producto.precio_venta}}</td>
                        <td>{{producto.stock}}</td>
                        <td>
                        
                            <button @click="eliminarProducto(producto.id_producto)" class="btn btn-danger btn-sm">x</button>
                            <button @click="editar(producto)" class="btn btn-primary btn-sm">edit</button>
                        </td>

                    </tr>
                </tbody>
             </table>


         </div>
      
    </div>
       
            
   
</template>

<script>
   
    export default {
        name:"ProductoForm",
        data(){

            return{

                descripcion:'',
                precio_compra:null,
                precio_venta:null,
                stock:null,
                id:null,
                lista:[],
                estado:0

            
            }
        },
        methods:{

            vaciar(){

                this.descripcion = '';
                this.precio_compra = null;
                this.precio_venta = null;
                this.stock = null;

            },
            guardarProducto(){

                const unProducto = {

                    descripcion:this.descripcion,
                    precio_compra:this.precio_compra,
                    precio_venta:this.precio_venta,
                    stock:this.stock,
                    
                }

                this.axios.post("http://localhost:3002/producto",unProducto).then(result => {

                    alert(result.data)
                    this.vaciar(),

                    this.listarProducto();
                })
            },

            listarProducto(){

                this.axios.get("http://localhost:3002/producto").then(result => {

                    this.lista = result.data;
                    
                })

            },
            eliminarProducto(id){
                this.axios.delete("http://localhost:3002/producto/"+id).then(result => {
                    alert(result.data)
                    this.listarProducto();
                })

            },
            editar(unProducto){
                this.estado = 1;
                this.descripcion = unProducto.descripcion;
                this.precio_compra = unProducto.precio_compra;
                this.precio_venta = unProducto.precio_venta;
                this.stock = unProducto.stock;
                this.id = unProducto.id_producto;
            },
            actualizarProducto(){
                const productoModificado = {
                    descripcion:this.descripcion,
                    precio_compra:this.precio_compra,
                    precio_venta:this.precio_venta,
                    stock:this.stock,
                }
                this.axios.put("http://localhost:3002/producto/"+this.id,productoModificado).then(result => {
                   
                   alert(result.data)
                    this.listarProducto()
                    this.vaciar()
                    this.estado = 0;
                })
            }
        },
        mounted(){

            this.listarProducto()
        }
    
    }
</script>   