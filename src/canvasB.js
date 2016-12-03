window.onload = function() {
alert("Hola Canvas");
var canvas = document.getElementById("canvas1");
if (canvas && canvas.getContext) {
  var ctx = canvas.getContext("2d");
  if (ctx) {
    //Definición de los colores
    ctx.fillStyle = "yellow";
    ctx.strokeStyle = "#ff0000";
    ctx.lineWidth = 5;
    //
    ctx.fillRect(50, 50, 100, 100);
    ctx.strokeRect(50, 50, 100, 100);
    //
    ctx.fillStyle = "rgba(250,0,0,0.3)";
    ctx.fillRect(200, 50 ,100, 100);
    ctx.strokeRect(200, 50 ,100, 100);
    }else{
    alert("Error al crear el contexto");
    }
  }
}
