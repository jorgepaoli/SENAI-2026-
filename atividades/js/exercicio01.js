const corpo = document.querySelector('.corpo');
const titulo = document.querySelector('.titulo');
const container = document.querySelector('#container');
const botao = document.querySelector('.botao');

titulo.textContent = `Tu dois apprendre le Français aussi ou regarder le Steven Universe show!`;

container.style.backgroundColor = '#5977b9';
container.style.width = '94%';
container.style.margin = '0 auto';

let subtitulo = '<h2>Programação Front-End</h2>'
container.innerHTML += subtitulo;
let imagem = '<img src = "./img/stevenUniverse_landscape.jpg alt = Imagem de Paisagem de Steven Universo">'
container.innerHTML += imagem;

let contador = 0;
botao.addEventListener('click', () => {
    alert(`Você clicou no botão ${contador} vezes`);
    contador++
});