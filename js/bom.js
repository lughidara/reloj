//setTimeout: se encarga de ejecutar una funcion despues de que transcurra un tiempo [ms]

//window.setTimeout(saludar,4000);

function saludar(){
    alert("Hola comision 1A");
}

let contador = 1;

let tiempo = window.setInterval(contar,1000);

function contar(){
    document.write(contador+ "<br>");

    if(contador == 10){
        window.clearInterval(tiempo);
    }
    contador++;
}
