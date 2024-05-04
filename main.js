//Vinculando todos os elementos HTML ao JS 
const openForm = document.querySelector('#form-open'),
homeLogin = document.querySelector('#content-login'),
homeSingUp = document.querySelector('#content-singup'),
formCloseBtnLogin = document.querySelector('#close-form-login'),
formCloseBtnSingUp = document.querySelector('#close-form-singup'),
loginBtn = document.querySelector('#login'),
singUpBtn = document.querySelector('#singup'),
passwordShow = document.querySelectorAll('.eye-hide'),
fade = document.querySelector('#fade');

//Função de abertura de Modal, que junto ao Classlist e a propriedade após isso, adiciona uma nova classe HTML 
const toggleModalOpen = () => {
    homeLogin.classList.toggle("show")
    fade.classList.toggle("show")
    homeSingUp.classList.remove("show")
    
}
//Mesma coisa da função acima 
const toggleModalSingUp = () => {
    homeSingUp.classList.toggle("show")
    homeLogin.classList.remove("show")  
    // fade.classList.add("show")
}

[openForm, formCloseBtnLogin, fade].forEach((el) => {
    el.addEventListener('click', () => toggleModalOpen())
});
[singUpBtn, formCloseBtnSingUp,fade].forEach((el) => {
    el.addEventListener('click', () => toggleModalSingUp())
});


// openForm.addEventListener("click", () => homeLogin.classList.toggle("show")) 
// openForm.addEventListener("click", () => fade.classList.toggle("show")) 
// formCloseBtnLogin.addEventListener("click", () => homeLogin.classList.remove("show")) 
// formCloseBtnLogin.addEventListener("click", () => fade.classList.remove("show")) 

// singUpBtn.addEventListener("click", () => homeSingUp.classList.toggle("show"))
// singUpBtn.addEventListener("click", () => homeLogin.classList.remove("show"))
// formCloseBtnSingUp.addEventListener("click", () => homeSingUp.classList.remove("show"))
formCloseBtnSingUp.addEventListener("click", () => fade.classList.remove("show"))

loginBtn.addEventListener("click", () => homeLogin.classList.toggle("show")) 
loginBtn.addEventListener("click", () => homeSingUp.classList.remove("show")) 

//  EFEITO TEXTO ABAIXO, EFEITO TEXTO ABAIXO, EFEITO TEXTO ABAIXO, EFEITO TEXTO ABAIXO, EFEITO TEXTO ABAIXO
//  EFEITO TEXTO ABAIXO, EFEITO TEXTO ABAIXO, EFEITO TEXTO ABAIXO, EFEITO TEXTO ABAIXO, EFEITO TEXTO ABAIXO
//  EFEITO TEXTO ABAIXO, EFEITO TEXTO ABAIXO, EFEITO TEXTO ABAIXO, EFEITO TEXTO ABAIXO, EFEITO TEXTO ABAIXO
//  EFEITO TEXTO ABAIXO, EFEITO TEXTO ABAIXO, EFEITO TEXTO ABAIXO, EFEITO TEXTO ABAIXO, EFEITO TEXTO ABAIXO


// Text bem vindo
const container = document.querySelector("#auto-text > p > span");
const mainText = "Bem vindo,";
// Text login
const secondContainer = document.querySelector("#auto-text > .paragrafo");
const secondText = "faça seu Login!";
// Intervalo predefinido
const interval = 150;

//Função que mostra o primeiro texto. Recebe 3 parametros, nesse caso a div onde o texto será exibido, o texto que será inscrito e o intervalo.
function showText(container, mainText, interval) {

    //Essa const irá pegar o texto principal, separar com o split e reverter a ordem com o reverse()
    const charactere = mainText.split("").reverse();

    //essa outra const irá fazer a mágica
    const typerText = setInterval(() => {
        //Essa verificação impede da função continuar infinitamente. O if verifica se ainda tem letras a serem escritas, e se não tiver, limpara o intervalo.
        if (!charactere.length) {
            return clearInterval(typerText);
        }
    
    // essa const irá receber as letras que vão ser tiradas. Passo 1, o que está sendo atribuido a var "next" será as ultimas letras do array, que se você reparar bem, como aplicamos o reverse serão as primeiras letras em si, assim essa const next sempre irá receber a proxima letra por sempre "retirar" a primeira, ou seja, na proxima interação a primeira será a segunda e assim por diante
    const next = charactere.pop();
    
    //A letra retirada será jogada para a tela do usuário com o innerHTML e tudo será juntado graças ao +=
    container.innerHTML += next;
  }, interval);
}

//Aqui é a chamada da função em si, que irá trazer o texto principal primeiro.
showText(container, mainText, interval);

//E aqui será utilizado o Timeout que simplesmente chama uma função automaticamente após um determinado intervalo. Nesse caso eu chamei a nossa função já criada, pra reaproveitar código, apenas utilizei os outros parametros.
setTimeout(() => {
  showText(secondContainer, secondText, interval);
}, 1800);



