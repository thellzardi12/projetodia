let hora = new Date().getHours();
let saudacao = "";

if(hora < 12){
    saudacao = "Bom dia";
}else if(hora >= 12 && hora <= 18){
    saudacao = "Boa tarde";
}else{
    saudacao = "Boa noite";
}
console.log(saudacao)

document.getElementById("resultado").innerHTML = saudacao