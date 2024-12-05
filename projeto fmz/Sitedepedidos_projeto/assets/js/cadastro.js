let btn = document.querySelector('#verpswd')
let btnConfirm = document.querySelector('#verconfPswd')

let nome = document.querySelector('#nome-user')
let labelnome = document.querySelector('#labelnome')
let validNome = false

let email = document.querySelector('#userEmail')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let celular = document.querySelector('#contCelular')
let labelCelular = document.querySelector('#labelCelular')
let validCelular = false

let endereco = document.querySelector('#endUser')
let labelEnd = document.querySelector('#labelEnd')
let validEnd = false

let pswd = document.querySelector('#pswd')
let labelPswd = document.querySelector('#labelPswd')
let validPswd = false

let confPswd = document.querySelector('#confPswd')
let labelconfPswd = document.querySelector('#labelconfPswd')
let validconfPswd = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2){
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validNome = true
  }
})

email.addEventListener('keyup', () => {
    if(email.value.length <= 2){
        labelEmail.setAttribute('style', 'color: yellow')
        labelEmail.innerHTML = 'E-mail *Ex: aaa@gmail.com'
        email.setAttribute('style', 'border-color: yellow')
        validEmail = false
    } else {
        labelEmail.setAttribute('style', 'color: red')
        labelEmail.innerHTML = 'E-mail'
        email.setAttribute('style', 'border-color: red')
        validEmail = true
    }
})

celular.addEventListener('keyup', () => {
    if(celular.value.length <= 11){
        labelCelular.setAttribute('style', 'color: yellow')
        labelCelular.innerHTML = 'Whatsapp *Ex: 1100000-0000'
        celular.setAttribute('style', 'border-color: yellow')
        validCelular = false
    } else {
        labelCelular.setAttribute('style', 'color: red')
        labelCelular.innerHTML = 'Whatsapp'
        celular.setAttribute('style', 'border-color: red')
        validCelular = true
    }
})

endereco.addEventListener('keyup', () => {
    if(endereco.value.length <= 5){
        labelEnd.setAttribute('style', 'color: yellow')
        labelEnd.innerHTML = 'Endereço *Ex: Rua joao, 15 - Bloco...'
        endereco.setAttribute('style', 'border-color: yellow')
        validEnd = false
    } else {
        labelEnd.setAttribute('style', 'color: red')
        labelEnd.innerHTML = 'Endereço'
        endereco.setAttribute('style', 'border-color: red')
        validEnd = true
    }
})

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#pswd')
    
    if(inputSenha.getAttribute('type') == 'password'){
      inputSenha.setAttribute('type', 'text')
    } else {
      inputSenha.setAttribute('type', 'password')
    }
  })

pswd.addEventListener('keyup', () => {
    if(pswd.value.length <= 7){
        labelPswd.setAttribute('style', 'color: yellow')
        labelPswd.innerHTML = 'Senha *minimo de 8 caracteres'
        pswd.setAttribute('style', 'border-color: yellow')
        validPswd = false
    } else {
        labelPswd.setAttribute('style', 'color: red')
        labelPswd.innerHTML = 'Senha'
        pswd.setAttribute('style', 'border-color: red')
        validPswd = true
    }
})

confPswd.addEventListener('keyup', () => {
  if(senha.value != confirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
    confirmSenha.setAttribute('style', 'border-color: red')
    validConfirmSenha = false
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    confirmSenha.setAttribute('style', 'border-color: green')
    validConfirmSenha = true
  }
})

function cadastrar(){
  if(validNome && validUsuario && validSenha && validConfirmSenha){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
    listaUser.push(
    {
      nomeCad: nome.value,
      userCad: usuario.value,
      senhaCad: senha.value
    }
    )
    
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    
   
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''
    
    setTimeout(()=>{
        window.location.href = 'https://cdpn.io/thicode/debug/ZELzYxV/dXAqBaRyvwJk'
    }, 3000)
  
    
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

btnConfirm.addEventListener('click', ()=>{
  let inputConfirmSenha = document.querySelector('#confirmSenha')
  
  if(inputConfirmSenha.getAttribute('type') == 'password'){
    inputConfirmSenha.setAttribute('type', 'text')
  } else {
    inputConfirmSenha.setAttribute('type', 'password')
  }
})


