function mostrar() {

    let info = {
        nombre: 'Andrea',
        apellido: 'Suazo',
        correos: {
            gmail: 'gisela.suazo.h@gmail.com',

        }
    }
    //estas comillas se llaman template string
    console.log(`
    
        Mi nombre es: ${info.nombre},
        Mi apellido es: ${info.apellido},
        Correo: ${info.correos.gmail},   
    
    `)

}

function arreglos() {

    let valores = [44, 10, 8, 99];
    console.log(valores[2]);
}


function array_objetos() {

    let arreglos_objetos =
        [{
            taller: 'Programación 1',
            anio: '5to',
            secundario:'cet30'

        },
        {
            taller: 'Web 2',
            anio: '6to',
            secundario: 'cet30'
        }
        ];
        
        let totalidad_filas = [];
        arreglos_objetos.forEach(objeto => {

            let fila = `
                <tr>
                    <td>${objeto.secundario}</td>
                    <td>${objeto.taller}</td>
                    <td>${objeto.anio}</td>

                </tr>
            `;
            totalidad_filas.push(fila);
            
        });
        document.querySelector("#tb_datos").innerHTML = totalidad_filas.join("");

        


}

