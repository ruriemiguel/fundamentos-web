
/*
Case Sensitive = reconhece letras maiúsculas e minúsculas!!

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementByName()
por Classe: getElementByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
let mapa = document.querySelector("#mapa");

nome.style.width = "100%";
email.style.width = "100%";

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length <= 2) {
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = 'red'
        nomeOk = false
    } else {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.match(regex)) {
        txtEmail.innerHTML = 'Email válido.'
        txtEmail.style.color = 'green'
        emailOk = true
    } else {
        txtEmail.innerHTML = 'Email inválido.'
        txtEmail.style.color = 'red'
        emailOk = false
    }
}

function validaMensagem() {
    let txtMsg = document.querySelector('#txtMsg')

    if (mensagem.value.length > 100) {
        txtMsg.innerHTML = 'Mensagem muito grande, digite no máximo 100 caracteres.'
        txtMsg.style.color = 'red'
        mensagemOk = false
    } else {
        txtMsg.innerHTML = mensagem.value.length + '/100'
        txtMsg.style.color = 'green'
        mensagemOk = true
    }
}

function enviar() {
    if (nomeOk == true || emailOk == true || assuntoOk == true) {
        alert("Formulário enviado com sucesso! Aguarde o retorno.")
    } else {
        alert("Preencha o formulário corretamente antes de enviar!")
    }
}

function zoomIn() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function zoomOut() {
    mapa.style.width = '400px'
    mapa.style.height = '300px'
}
