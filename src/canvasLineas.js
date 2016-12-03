window.onload = function() {
//alert("Hola Canvas");
var canvas = document.getElementById("canvas1");
if (canvas && canvas.getContext) {
  var ctx = canvas.getContext("2d");
  if (ctx) {
    //Descripción de lineas
    ctx.lineWidth = 25;
    ctx.strokeStyle = "yellow";

    //Dibujar lineas
    //ctx.lineCap = "butt";
    ctx.lineCap = "round";
    /*ctx.beginPath();
    ctx.moveTo(50,50);
    ctx.lineTo(450,50);
    ctx.stroke();*/

    //
    //ctx.lineJoin = "miter";
    ctx.lineJoin = "round";
    //ctx.lineJoin = "bevel";
    ctx.miterLimit = 50;
    ctx.beginPath();
    ctx.moveTo(75, 150);
    ctx.lineTo(125,50);
    ctx.lineTo(175,150);
    ctx.stroke();

    }else{
    alert("Error al crear el contexto");
    }
  }
}
