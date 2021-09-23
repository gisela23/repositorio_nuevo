const imagenes = {



    data(){

        return {

            titulo:'',
            url:'',
            catalogo_imagen:[],

        }

    },

    methods: {

        guardarImagen () {

            let unaImagen ={
                titulo:this.titulo,
                url:this.url,
                
            },
            
            this.catalogo_imagen.push(unaImagen);

            
            this.titulo = ''; this.url = '';


        }

    },
    mounted(){
           
    },
    
}
Vue.createApp(imagenes).mount("#app");
