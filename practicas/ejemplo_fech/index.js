const obtener_fotos = async () => {

   const respuesta = await fetch ("https://jsonplaceholder.typicode.com/photos?albumid=1");
    
   const datos = await respuesta.json();

   let total_columnas = [] ;
    datos.forEach(element => {

        let columna = `
           

        `;
        total_columnas.push(columna);
    });

  document.querySelector("#r_fotos").innerHTML = total_columnas.join("")


}

const boton = document.querySelector("#btn_mostrar");

boton.addEventListener("click", obtener_fotos);