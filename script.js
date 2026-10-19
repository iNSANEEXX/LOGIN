const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const botaoCadastrar = document.getElementById("cadastrar");

botaoCadastrar.addEventListener("click", function() {
    const nomeUsuario = usuario.value;
    const senhaDigitada = senha.value;
      
    if ( nomeUsuario === "" || senhaDigitada === "") {
      alert("Preencha todos os campos!")

    } 
    else if ( nomeUsuario === "aluno" && senhaDigitada === "2026") {
      alert("Bem vindo ao Sistema!");
    } 
    else {
      alert("Acesso Negado!");
    }
});
                                                                                                                                                                                                                                                              