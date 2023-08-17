let hora = new Date().getHours();
let saudacao = "";

if(hora < 12){
    saudacao = "BOM DIA!";
}else if(hora >= 12 && hora <= 18){
    saudacao = "BOA TARDE!";
}else{
    saudacao = "BOA NOITE!";
}
console.log(saudacao)

document.getElementById("resultado").innerHTML = saudacao