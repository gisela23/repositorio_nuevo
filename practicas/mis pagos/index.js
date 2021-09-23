const mispropiedades = {

  data(){

      return {
          nombre:'',
          apellido:'',
          dni:null,
          correo:'',
          cuota:'',
          importe:'',
          fecha:'',
          lista_pagos:[]

        }
    },
  
    methods: {
        guardarPagos () {

          let unPago ={
              nombre:this.nombre,
              apellido:this.apellido,
              dni:this.dni,
              correo:this.correo,
              cuota:this.cuota,
              importe:this.importe,
              fecha:this.fecha,
            }
         
          if ("Pagos_Clientes" in localStorage)
           {
             this.lista_pagos-JSON.parse(localStorage.getItem("Pagos_Clientes"))
             this.lista_pagos.push(unPago);
             localStorage.setItem("Pagos_Clientes",JSON.stringify(this.lista_pagos))
             this.nombre = ''; this.apellido = ''; this.dni = null; this.correo = ''; this.cuota = '' ; this.importe = ''; this.fecha = '';
          
          
          
            }else{

                this.lista_pagos.push(unPago)
                localStorage.setItem("Pagos_Clientes",JSON.stringify(this.lista_pagos))
            }
            
  
        },        
        
        listarEmpleados(){

            if ("Pagos_Clientes" in localStorage){
               this.lista_pagos = JSON.parse(localStorage.getItem("Pagos_Clientes"))




            }else{

                this.lista_pagos=[]
            }
            
            



        },
        eliminarCliente(index)
        {
            this.lista_pagos.splice(index,1);

        }
    },
    mounted(){

        this.listarEmpleados()
    },

}
Vue.createApp(mispropiedades).mount("#app");