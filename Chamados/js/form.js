
var btn = document.querySelector("#adicionar-chamado");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  var form = document.querySelector("#form-adicionar");

  var usuario = obtemUsuarioDoFormulario(form);
  console.log(usuario);




  adicionaUsuarioTabela(usuario)


  console.log(usuario);

  form.reset();

});
function adicionaUsuarioTabela(usuario) {
  var usuarioTr  = montaTr(usuario);
  var tabela = document.querySelector("#tabela-usuarios");
  tabela.appendChild(usuarioTr);
}

function obtemUsuarioDoFormulario(form) {
  var usuario = {
    nome: form.nome.value,
    problema: form.problema.value,
    contato: form.contato.value
  }

  return usuario;

}
function montaTr(usuario) {
    var usuarioTr = document.createElement("tr");
    usuarioTr.classList.add("usuario");

    usuarioTr.appendChild(montaTd(usuario.nome, "info-nome"));
    usuarioTr.appendChild(montaTd(usuario.problema, "info-problema"));
    usuarioTr.appendChild(montaTd(usuario.contato, "info-contato"));
    return usuarioTr;
}
function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}
