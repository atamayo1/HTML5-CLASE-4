window.onload = function() {
//alert("Hola Canvas");
var canvas = document.getElementById("canvas1");
if (canvas && canvas.getContext) {
  var ctx = canvas.getContext("2d");
  if (ctx) {
    //Configuración
    ctx.lineWidth = 10;
    ctx.strokeStyle = "red";
    ctx.fillStyle = "yellow";

    //Primer dibujo
    ctx.fillRect(50,50,100,100);
    ctx.strokeRect(50,50,100,100);

    //Salvando la configuracion
    ctx.save();

    //Cambiar la configuracion
    ctx.strokeStyle = "black";
    ctx.fillStyle = "white";

    //Segundo dibujo
    ctx.fillRect(200,50,100,100);
    ctx.strokeRect(200,50,100,100);

    //Restaurando configuracion
    ctx.restore();

    //tercer dibujo
    ctx.fillRect(350,50,100,100);
    ctx.strokeRect(350,50,100,100);
    }else{
    alert("Error al crear el contexto");
    }
  }
}
