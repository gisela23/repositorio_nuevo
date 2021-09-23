/// cálculo TENSION 
const tension = () => {                                             

    const int = document.querySelector("#i").value;                     
    const res = document.querySelector("#r").value;
    const E = int * res;
    document.querySelector("#total").value = E;
    
}

const btn_producto = document.querySelector("#btn_tension");

btn_producto.addEventListener("click", tension);

//cálculo Intensidad

const intensidad = () => {

    const volt = document.querySelector("#T").value;
    const A  = document.querySelector("#ree").value;
    const intensity = volt / A;
    document.querySelector("#intensidad").value = intensity;

}
const btn_dividir = document.querySelector("#btn_intensidad");
btn_dividir.addEventListener("click", intensidad);

//Cálculo Resistencia

const Resistencia = () => {

    const tent = document.querySelector("#Tension").value;
    const inten = document.querySelector("#intent").value;
    const end = tent / inten;
    document.querySelector("#Resistencia").value = end;

}

const btn_endu = document.querySelector("#btn_resistencia");
btn_endu.addEventListener("click", Resistencia);