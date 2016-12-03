window.onload = function() {
//alert("Hola Canvas");
var canvas = document.getElementById("canvas1");
if (canvas && canvas.getContext) {
  var ctx = canvas.getContext("2d");
  if (ctx) {
    //Configuraciones
    ctx.lineWidth = 10;
    ctx.strokeStyle = "red";
    ctx.fillStyle = "yellow";

    //curva bezier
    ctx.beginPath();
    ctx.moveTo(50,200);
    ctx.bezierCurveTo(50,100,200,100,200,150);
    ctx.stroke();

    ctx.fillRect(50,200,5,5);
    //Primer punto ancla
    ctx.fillRect(50,100,5,5);
    //Segundo punto ancla
    ctx.fillRect(200,100,5,5);
    //Punto final
    ctx.fillRect(200,150,5,5);

    //curva cuadratica
    ctx.beginPath();
    ctx.moveTo(300,200);
    ctx.quadraticCurveTo(400,100,450,150);
    ctx.stroke();

    //Punto inicial
    ctx.fillRect(300,200,5,5);
    //Primer punto ancla
    ctx.fillRect(400,100,5,5);
    //Punto final
    ctx.fillRect(450,150,5,5);

    }else{
    alert("Error al crear el contexto");
    }
  }
}
