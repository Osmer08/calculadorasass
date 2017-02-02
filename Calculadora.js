window.onload=manejarclick;
var cifra1,crifa2;
var control=true;
cifra1="";


function manejarclick(){
	var uno=document.getElementById("n1");
	uno.addEventListener("click",function() {
									clic("1");
								});
	var dos=document.getElementById("n2");
	dos.addEventListener("click",function() {
									clic("2");
								});
	var tres=document.getElementById("n3");
	tres.addEventListener("click",function() {
									clic("3");
								});
	var cuatro=document.getElementById("n4");
	cuatro.addEventListener("click",function() {
									clic("4");
								});
	var cinco=document.getElementById("n5");
	cinco.addEventListener("click",function() {
									clic("5");
								});
	var seis=document.getElementById("n6");
	seis.addEventListener("click",function() {
									clic("6");
								});
	var siete=document.getElementById("n7");
	siete.addEventListener("click",function() {
									clic("7");
								});
	var ocho=document.getElementById("n8");
	ocho.addEventListener("click",function() {
									clic("8");
								});
	var nueve=document.getElementById("n9");
	nueve.addEventListener("click",function() {
									clic("9");
								});
	var cero=document.getElementById("n0");
	cero.addEventListener("click",function() {
									clic("0");
								});
	var sumar=document.getElementById("sumar");
	sumar.addEventListener("click",function() {
									clic("+");
								});
	var restar=document.getElementById("restar");
	restar.addEventListener("click",function() {
									clic("-");
								});
	var multi=document.getElementById("mult");
	multi.addEventListener("click",function() {
									clic("*");
								});
	var divi=document.getElementById("div");
	divi.addEventListener("click",function() {
									clic("/");
								});
	var igual=document.getElementById("igual");
	igual.addEventListener("click",calcular);

	var borrar=document.getElementById("borrar");
	borrar.addEventListener("click",quitar);

	var borrarre=document.getElementById("ret");
	borrarre.addEventListener("click",borrarcar);

}

function clic(num){
	cifra1 +=num;
	var mostrar=document.getElementById("muestra");
	mostrar.textContent=cifra1;

}

function calcular(){

	var total=eval(cifra1);
	var mostrar=document.getElementById("muestra");
	mostrar.textContent=total;
}

function quitar(){
	var total=eval(cifra1="");
	var mostrar=document.getElementById("muestra");
	mostrar.textContent=total;

}


function borrarcar(){
	var pantalla=document.getElementById("muestra");

	var panta=cifra1.slice(0,-1);
	cifra1=panta;
	
	pantalla.textContent=cifra1;
}




