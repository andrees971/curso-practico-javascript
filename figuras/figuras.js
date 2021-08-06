//codigo del cuadrado

function perimetroCuadrado(lado) {
    return lado * 4;
}
function areaCuadrado(lado){
    return lado * lado;
}

//codigo del triangulo

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura){
    return (base*altura)/2
}

//codigo del circulo
const PI = Math.PI;

function diametroCirculo(radio){
    return radio * 2;
} 


function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI; 
} 

function areaCirculo(radio){
    return (radio*radio)*PI;
}   

//aqui interactuamos con html

//cuadrado
function calcularPerimetroCuadrado(){
    const input= document.getElementById("inputCuadrado");
    const value = input.value;  
    
    document.getElementById("resultadoCuadrado").innerHTML = perimetroCuadrado(value);
}

function calcularAreaCuadrado(){
    const input= document.getElementById("inputCuadrado");
    const value = input.value;  
    
    document.getElementById("resultadoCuadrado").innerHTML = areaCuadrado(value);
}

//Triangulo
function calcularPerimetroTriangulo(){
    const input1= document.getElementById("inputTriangulo1").value;
    const input2= document.getElementById("inputTriangulo2").value;
    const input3= document.getElementById("inputTriangulo3").value;
      
    
    document.getElementById("resultadoTriangulo").innerHTML = perimetroTriangulo(input1, input2, input3);
}

function calcularAreaTriangulo(){
    const input1= document.getElementById("inputTriangulo3").value;
    const input2= document.getElementById("inputTriangulo4").value;

    document.getElementById("resultadoTriangulo").innerHTML = areaTriangulo(input1, input2);
}

//Circulo
function calcularPerimetroCirculo(){
    const input= document.getElementById("inputRadio").value;
    const value = diametroCirculo(input);  
    
    document.getElementById("resultadoCirculo").innerHTML = perimetroCirculo(value);
}

function calcularAreaCirculo(){
    const input= document.getElementById("inputRadio").value;
    const value = diametroCirculo(input);
    
    document.getElementById("resultadoCirculo").innerHTML = areaCirculo(value);
}