let imagens = document.querySelectorAll('.small_img');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal_img');
let btClose = document.querySelector('#bt_close');
let scrVal = "";



for(let i = 0; i<imagens.length; i++) {
  imagens[i].addEventListener('click', function(){
    scrVal = imagens[i].getAttribute('src');
    modalImg.setAttribute('src', scrVal);
    modal.classList.toggle('modal_active');
  });
}


btClose.addEventListener('click', function() {
  modal.classList.toggle('modal_active');

})