const naoBtn = document.getElementById('nao-btn');
const simBtn = document.getElementById('sim-btn');
const imagem = document.getElementById('imagem');

naoBtn.addEventListener('mouseover', () => {
  const randomX = Math.random() * window.innerWidth * 0.8;
  const randomY = Math.random() * window.innerHeight * 0.8;
  
  naoBtn.style.position = 'absolute';
  naoBtn.style.left = `${randomX}px`;
  naoBtn.style.top = `${randomY}px`;
});

simBtn.addEventListener('click', () => {
  imagem.classList.remove('hidden');  // Mostra a imagem ao clicar no botão "Sim"
});
