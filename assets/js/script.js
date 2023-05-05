let lunes = document.getElementById("lunes").textContent;
let martes = document.getElementById("martes").textContent;
let miercoles = document.getElementById("miercoles").textContent;
let jueves = document.getElementById("jueves").textContent;
let viernes = document.getElementById("viernes").textContent;
let sabado = document.getElementById("sabado").textContent;
let domingo = document.getElementById("domingo").textContent;

let btnCheck = document.getElementById("item2");
let gradosGrande = document.getElementById("gradosGrande");
let gradosGrandeTexto = document.getElementById("gradosGrande").textContent;
let gradosGrandeTextoCortado = gradosGrandeTexto.substring(0,2);



let isOn = false;

btnCheck.addEventListener("click", function(){
    isOn = !isOn; //Aqui al hacer click lo niego
    if(isOn){
        celsiusAFarenteih(lunes,martes,miercoles,jueves,viernes,sabado,domingo,gradosGrandeTextoCortado);
    }else{
        farenheithACelsius(lunes,martes,miercoles,jueves,viernes,sabado,domingo,gradosGrandeTexto);
    }
});


function celsiusAFarenteih(lunes,martes,miercoles,jueves,viernes,sabado,domingo,gradosGrandeTextoCortado){
    let lunesI = parseInt(lunes);
    let farenLunes = (lunesI * 1.8) + 32;
    let farenLunesEntero = Math.round(farenLunes);
    document.getElementById("lunes").innerHTML = farenLunesEntero+"°";

    let martesI = parseInt(martes);
    let farenMartes = (martesI * 1.8) + 32;
    let farenMartesEntero = Math.round(farenMartes);    
    document.getElementById("martes").innerHTML = farenMartesEntero+"°";

    let miercolesI = parseInt(miercoles);
    let farenMiercoles = (miercolesI * 1.8) + 32;
    let farenMiercolesEntero = Math.round(farenMiercoles);
    document.getElementById("miercoles").innerHTML = farenMiercolesEntero+"°";

    let juevesI = parseInt(jueves);
    let farenJueves = (juevesI * 1.8) + 32;
    let farenJuevesEntero = Math.round(farenJueves);
    document.getElementById("jueves").innerHTML = farenJuevesEntero+"°";

    let viernesI = parseInt(viernes);
    let farenViernes = (viernesI * 1.8) + 32;
    let farenViernesEntero = Math.round(farenViernes);
    document.getElementById("viernes").innerHTML = farenViernesEntero+"°";

    let sabadoI = parseInt(sabado);
    let farenSabado = (sabadoI * 1.8) + 32;
    let farenSabadoEntero = Math.round(farenSabado);
    document.getElementById("sabado").innerHTML = farenSabadoEntero+"°";

    let domingoI = parseInt(domingo);
    let farenDomingo = (domingoI * 1.8) + 32;
    let farenDomingoEntero = Math.round(farenDomingo);
    document.getElementById("domingo").innerHTML = farenDomingoEntero+"°";

    let gradosaGrandeTextoCortadoI = parseInt(gradosGrandeTextoCortado);    
    let farenGrados = (gradosaGrandeTextoCortadoI * 1.8) + 32;
    let farenGradosEntero = Math.round(farenGrados);
    document.getElementById("gradosGrande").innerHTML = farenGradosEntero+"°";
    
}
function farenheithACelsius(lunes,martes,miercoles,jueves,viernes,sabado,domingo,gradosGrandeTextoCortado){
     let farenLunes = celciusAF(lunes);
     let celsiusLunes = (farenLunes - 32) / 1.8;
     let celciusLunesEntero = Math.round(celsiusLunes);
     document.getElementById("lunes").innerHTML = celciusLunesEntero+"°";
     
     let farenMartes = celciusAF(martes);
     let celsiusMartes = (farenMartes - 32) / 1.8;
     let celciusMartesEntero = Math.round(celsiusMartes);
     document.getElementById("martes").innerHTML = celciusMartesEntero+"°";

     let farenMiercoles = celciusAF(miercoles);
     let celsiusMiercoles = (farenMiercoles - 32) / 1.8;
     let celciusMiercolesEntero = Math.round(celsiusMiercoles);
     document.getElementById("miercoles").innerHTML = celciusMiercolesEntero+"°";

     let farenJueves = celciusAF(jueves);
     let celsiusJueves = (farenJueves - 32) / 1.8;
     let celciusJuevesEntero = Math.round(celsiusJueves);
     document.getElementById("jueves").innerHTML = celciusJuevesEntero+"°";

     let farenViernes = celciusAF(viernes);
     let celsiusViernes = (farenViernes - 32) / 1.8;
     let celciusViernesEntero = Math.round(celsiusViernes);
     document.getElementById("viernes").innerHTML = celciusViernesEntero+"°";

     let farenSabado = celciusAF(sabado);
     let celsiusSabado = (farenSabado - 32) / 1.8;
     let celciusSabadoEntero = Math.round(celsiusSabado);
     document.getElementById("sabado").innerHTML = celciusSabadoEntero+"°";

     let farenDomingo = celciusAF(domingo);
     let celsiusDomingo = (farenDomingo - 32) / 1.8;
     let celciusDomingoEntero = Math.round(celsiusDomingo);
     document.getElementById("domingo").innerHTML = celciusDomingoEntero+"°";

     let parseado = parseInt(gradosGrandeTextoCortado);     
     let farenGradosGrandeTextoCortado = celciusAF(gradosGrandeTextoCortado);
     let celsiusFaren = (farenGradosGrandeTextoCortado - 32) / 1.8;
     let celciusFarenEntero = Math.round(celsiusFaren);
     document.getElementById("gradosGrande").innerHTML = celciusFarenEntero+"°";
}


function celciusAF(dia){
    let diaI = parseInt(dia);
    let farenDia = (diaI * 1.8) + 32;
    let farenEntero = Math.round(farenDia);
    return farenEntero;
}

let dia = () => {
    let fechaActual = new Date();
    let dia = fechaActual.getDay();    
    return dia;
}

let diaSemana = dia();

switch (diaSemana) {
    case 1:
        var diaActual = lunes;
        gradosGrande.innerHTML = diaActual;        
        break;
    case 2:
        var diaActual = martes;
        gradosGrande.innerHTML = diaActual;
        break;
    case 3:
        var diaActual = miercoles;
        gradosGrande.innerHTML = diaActual;
        break;
    case 4:
        console.log('Es jueves');
        break;
    case 5:
        var diaActual = viernes;
        gradosGrande.innerHTML = diaActual;
        break;
    case 6:
        var diaActual = sabado;
        gradosGrande.innerHTML = diaActual;
        break;
    case 7:
        var diaActual = domingo;
        gradosGrande.innerHTML = diaActual;
        break;
    default:
        break;
}

