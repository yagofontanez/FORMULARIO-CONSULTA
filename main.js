document.getElementById("Enviar").addEventListener("click", function () {
    var nome = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var dataNascimento = document.getElementById("date").value;

    if (nome && email && dataNascimento) {
        alert("Formulário enviado com sucesso!");
    } else {
        alert("Preencha todos os campos obrigatórios.");
    }
  });