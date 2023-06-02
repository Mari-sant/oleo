/*const botoes= document.querySelectorAll (".button") 
console.log(botoes)

function abrirModal(){
const pop=document.querySelector ("#dialog") 
pop.showModal ()
}

botoes.forEach((botao) => {

botao.addEventListener('click', abrirModal) 

  })

function fecharModal() {

  pop.close () 

}*/


var btnsAbrirPopup = document.getElementsByClassName('btnAbrirPopup');
var btnFecharPopup = document.getElementById('btnFecharPopup');

var popup = document.getElementById('popup');

for (var i = 0; i < btnsAbrirPopup.length; i++) {
  btnsAbrirPopup[i].addEventListener('click', function() {
    popup.style.display = 'block';
  });
}

btnFecharPopup.addEventListener('click', function() {

  popup.style.display = 'none';});