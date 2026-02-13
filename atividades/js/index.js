const corpo = document.querySelector('body');
const titulo = document.querySelector('.titulo');
const paragrafo = document.querySelector('#texto');
const container = document.querySelector('#container');

corpo.style.backgroundColor = '#c56060e8';
corpo.style.color = 'white';

titulo.textContent = 'Manipulando DOM';

let subtitulo = '<h2>Le DOM, il est très facile!</h2>';
container.innerHTML = subtitulo;