function obtenerHora() {

    let fecha = new Date();

    /*console.log(fecha);
    console.log(fecha.getDate());
    console.log(fecha.getFullYear());
    console.log(fecha.getDay());
    console.log(fecha.getMonth());*/

    //declaramos variables
    let pDiaSemana = document.getElementById("diaSemana"),
        pDia = document.getElementById("dia"),
        pMes = document.getElementById("mes"),
        pAnio = document.getElementById("anio"),
        pHoras = document.getElementById("horas"),
        pMinutos = document.getElementById("minutos"),
        pSegundos = document.getElementById("segundos"),
        pAmPm = document.getElementById("ampm");

    //creamos arreglos
    let dias = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];

    let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

    pDiaSemana.innerText = dias[fecha.getDay()];
    pDia.innerText = fecha.getDate();
    pMes.innerText = meses[fecha.getMonth()];
    pAnio.innerText = fecha.getFullYear();

    pHoras.innerText = fecha.getHours();
    pMinutos.innerText = fecha.getMinutes();
    pSegundos.innerText = fecha.getSeconds();

    if (fecha.getSeconds() < 10) {
        pSegundos.innerText = "0" + fecha.getSeconds();
    }
    if (fecha.getMinutes() < 10) {
        pMinutos.innerText = "0" + fecha.getMinutes();
    }

    /*podriamos haber puesto
    if(fecha.getSeconds() < 10){
        pSegundos.innerText = "0" + fecha.getSeconds();
    }else{
    pSegundos.innerText = fecha.getSeconds();
    }

    para que quede todo lo referido a segundos juntito*/


    if (fecha.getHours() < 12) {
        pAmPm.innerText = "AM";
        if (fecha.getHours() < 10) {
            pHoras.innerText = "0" + fecha.getHours();
        }
    } else {
        pAmPm.innerText = "PM";
        if (fecha.getHours() == 12) {
            pHoras.innerText = fecha.getHours();
        } else {
            if (fecha.getHours() < 22) {
                pHoras.innerText = "0" + (fecha.getHours() - 12);
            } else {
                pHoras.innerText = fecha.getHours() - 12;
            }
        }
    }
}

window.setInterval(obtenerHora, 1000);