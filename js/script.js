let btnToggleTheme = document.querySelector('.toggleTheme');
let body = document.querySelector('body');
let iframe = document.querySelector('iframe')
// console.log(btnToggleTheme);

btnToggleTheme.onclick = (event) => {
    body.classList.toggle('dark-theme'); //classList.toggle('x') faz o elemento perder a classe 'x' se ele a tiver, ou ganhar a classe se não a tiver
    iframe.style.cssText = "filter: invert(90%)";
}