let usuario = document.querySelector(".user");
let senha = document.querySelector(".password");
let btn = document.querySelector(".btn");

btn.addEventListener("click", function(event){
  let senhaL = 123;
  let usuarioL = "admin";
  if(senha.value == senhaL && usuario.value == usuarioL){
    window.open("http://jovemnerd.com.br");
  }
  else{
    window.open("foda-se")
  }
});
/*
  só um teste, isso está uma merda eu sei, estou esperando  bootstrap para fazer
  interatividade

*/
