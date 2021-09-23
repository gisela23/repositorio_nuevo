const valor_dolar = async () => {
    
  const resultado = await fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales");  
    const dolares = await resultado.json();
 
    let total_valores = [] ;
     dolares.forEach(element => {
 
         let valores = `
           <tr>

              <td>${element.casa.nombre}</td>
              <td> ${element.casa.venta}</td>
              <td>${element.casa.compra}</td>
              
            
            </tr>

         `
         total_valores.push(valores);
     });
 
   document.querySelector("#dolares").innerHTML = total_valores.join("")
 
}

const boton = document.querySelector("#btn_valor");

boton.addEventListener("click", valor_dolar);