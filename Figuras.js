//Codigo del cuadrado

/* const perimetroCuadrado = ladoCuadrado * 4; */
function perimetroCuadrado(lado){
    return lado * 4;
}
/* const areaCuadrado = ladoCuadrado * ladoCuadrado; */
function areaCuadrado(lado) {
    return lado * lado;
}


//Codigo del triángulo

/* const perimetroTriangulo = ladotriangulo1 + ladotriangulo2 + basetriangulo; */
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
/* const areaTriangulo = (basetriangulo * alturatriangulo) / 2; */
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

//Diámetro

/* const diametroCirculo = radioCirculo * 2; */
function diametroCirculo(radio){
    return radio * 2;
}
//PI 
const PI = Math.PI;
//Circunferencia

/* const perimetroCirculo = diametroCirculo * PI; */
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro;
}
//Area 
/* const areaCirculo = (radioCirculo * radioCirculo) * PI; */
function areaCirculo(radio){
    return (radio * radio) * PI;
}

///////////////////////////////////////////////////////////////
// Aqui interactuamos con el HTML 

//cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputcuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value)
    const resultP= document.getElementById("ResultP")
    resultP.innerText =perimetro;

}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputcuadrado");
    const value = input.value

    const area = areaCuadrado(value)
    const resultP= document.getElementById("ResultP")
    resultP.innerText =area;
}

//triangulo

function calcularPerimetroTriangulo(){
    const input = document.getElementById("lado1triangulo");
    const lado1 = input.value;
    const input2 = document.getElementById("lado2triangulo");
    const lado2 = input2.value;
    const input3 = document.getElementById("basetriangulo");
    const base = input3.value;
    
    const perimetro = perimetroTriangulo(lado1, lado2, base)
    const resultP= document.getElementById("ResultP")
    resultP.innerText =perimetro;

}

function calcularAreaTriangulo(){
    const input3 = document.getElementById("basetriangulo");
    const base = input3.value
    const input4 = document.getElementById("alturatriangulo");
    const altura = input4.value;
    
    const area = areaTriangulo(base, altura)
    const resultP= document.getElementById("ResultP")
    resultP.innerText =area;
}

//circulo
function calcularPerimetroCirculo(){
    const input = document.getElementById("radiocirculo");
    const radio = input.value;
    
    const perimetro = perimetroCirculo(radio)
    const resultP= document.getElementById("ResultP")
    resultP.innerText =perimetro;

}

function calcularAreaCirculo(){
    const input = document.getElementById("radiocirculo");
    const radio = input.value;
    
    const area = areaCirculo(radio)
    const resultP= document.getElementById("ResultP")
    resultP.innerText =area;
}