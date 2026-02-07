const noBtn = document.getElementById('no');
noBtn.addEventListener('mouseenter', ()=>{
  noBtn.style.position = 'fixed';
  noBtn.style.left = Math.random() * (window.innerWidth - noBtn.offsetWidth) + 'px';
  noBtn.style.top = Math.random() * (window.innerHeight - noBtn.offsetHeight) + 'px';
});
