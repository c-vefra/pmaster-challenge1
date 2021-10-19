//Obtengo el Canvas
const canv = document.getElementById("dibujo");
//Obtengo el lienzo
const lienzo = canv.getContext("2d");
const ancho = canv.width;

//Coordenadas para el punto
let x_coor = document.getElementById("x_coor");
let y_coor = document.getElementById("y_coor");

//Coordenadas para el gráfico de barras
let x_coor_1 = document.getElementById("x_coor_1");
let y_coor_1 = document.getElementById("y_coor_1");
let x_coor_2 = document.getElementById("x_coor_2");
let y_coor_2 = document.getElementById("y_coor_2");
let x_coor_3 = document.getElementById("x_coor_3");
let y_coor_3 = document.getElementById("y_coor_3");
let x_coor_4 = document.getElementById("x_coor_4");
let y_coor_4 = document.getElementById("y_coor_4");
let x_coor_5 = document.getElementById("x_coor_5");
let y_coor_5 = document.getElementById("y_coor_5");

const boton_1 = document.getElementById("btn_point");
const boton_2 = document.getElementById("btn_graphic");
const boton_3 = document.getElementById("btn_erase");

boton_1.addEventListener("click", dibujarPunto);
boton_2.addEventListener("click", dibujarPlano);
boton_3.addEventListener("click", borrarPlano);

function dibujarLineas(color, xi, xf, yi, yf, lw){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xi, yi);
  lienzo.lineTo(xf, yf);
  lienzo.lineWidth = lw;
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarCoord(color, x, y){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.arc(x,y,1.5,0,2*Math.PI);
  lienzo.stroke();
  lienzo.closePath();
}

//Dibujar plano cartesiano

function dibujarPlanoC() {
  dibujarLineas("black", 1, 199, 1, 1, 1);
  dibujarLineas("black", 1, 199, 199, 199, 1);
  dibujarLineas("black", 1, 199, 100, 100, 1);

  dibujarLineas("black", 1, 1, 1, 199, 1);
  dibujarLineas("black", 199, 199, 1, 199, 1);
  dibujarLineas("black", 100, 100, 1, 199, 1);

  for(let i = 0; i < 199; i += 10){
    dibujarLineas("grey", 1, 199, i, i, 1);
    dibujarLineas("grey", i, i, 1, 199, 1);
  }
}

function dibujarPunto(){
  let x_value = parseInt(x_coor.value);
  let y_value = parseInt(y_coor.value);

  dibujarCoord("magenta",x_value+100,100-y_value);
}

function dibujarPlano(){
  let x_value_1 = parseInt(x_coor_1.value);
  let y_value_1 = parseInt(y_coor_1.value);
  let x_value_2 = parseInt(x_coor_2.value);
  let y_value_2 = parseInt(y_coor_2.value);
  let x_value_3 = parseInt(x_coor_3.value);
  let y_value_3 = parseInt(y_coor_3.value);
  let x_value_4 = parseInt(x_coor_4.value);
  let y_value_4 = parseInt(y_coor_4.value);
  let x_value_5 = parseInt(x_coor_5.value);
  let y_value_5 = parseInt(y_coor_5.value);

  dibujarBarras(x_value_1,y_value_1,"red");
  dibujarBarras(x_value_2,y_value_2,"slateblue");
  dibujarBarras(x_value_3,y_value_3,"turquoise");
  dibujarBarras(x_value_4,y_value_4,"orange");
  dibujarBarras(x_value_5,y_value_5,"hotpink");
}

function dibujarBarras(x,y,color) {
  if((x >= -100 && x <= 100) && (y >= -100 && y <= 100)){
    dibujarLineas(color, x+100, x+100, 100-y, 100, 5);
  } else {
    alert(`Por favor digite números entre -100 y 100 para ${x},${y}`);
  }
}

function borrarPlano(){
  lienzo.clearRect(2,2,198,198);
  dibujarPlanoC();
  x_coor.value = "";
  y_coor.value = "";
  x_coor_1.value = "";
  y_coor_1.value = "";
  x_coor_2.value = "";
  y_coor_2.value = "";
  x_coor_3.value = "";
  y_coor_3.value = "";
  x_coor_4.value = "";
  y_coor_4.value = "";
  x_coor_5.value = "";
  y_coor_5.value = "";
}

dibujarPlanoC();
