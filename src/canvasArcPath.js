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

    //Primer path
    ctx.beginPath();
    ctx.moveTo(50,100);
    ctx.lineTo(100,50);
    ctx.lineTo(150,100);
    ctx.lineTo(100,150);
    ctx.stroke();

    //Segundo path
    ctx.beginPath();
    ctx.moveTo(200,100);
    ctx.lineTo(250,50);
    ctx.lineTo(300,100);
    ctx.lineTo(250,150);
    ctx.closePath();
    ctx.stroke();

    //Tercer path
    ctx.beginPath();
    ctx.moveTo(350,100);
    ctx.lineTo(400,50);
    ctx.lineTo(450,100);
    ctx.lineTo(400,150);
    ctx.fill();
    ctx.closePath();
    ctx.stroke();

    //Arcos
    ctx.beginPath();
    ctx.arc(100,250,50, 1.1*Math.PI, 1.9*Math.PI);
    ctx.stroke();

    //Arco 2
    ctx.beginPath();
    ctx.arc(250,250,50, 1.1*Math.PI, 1.9*Math.PI,true);
    ctx.stroke();

    //Arco 3
    ctx.beginPath();
    ctx.arc(400,250,50, 0, 2*Math.PI,true);
    ctx.stroke();
    }else{
    alert("Error al crear el contexto");
    }
  }
}
