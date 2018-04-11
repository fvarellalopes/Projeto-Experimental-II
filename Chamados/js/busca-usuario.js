var btn = document.querySelector("#buscar-chamado");
btn.addEventListener("click", function(event){
  event.preventDefault()

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.myjson.com/bins/13rcdz");

    xhr.addEventListener("load", function () {
        var resp = xhr.responseText;
        var usuarios = JSON.parse(resp)

        usuarios.forEach(function(usuario){
          adicionaUsuarioTabela(usuario)
        });


    })
    xhr.send();

});
