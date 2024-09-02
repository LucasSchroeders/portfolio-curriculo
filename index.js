const screenWidth = window.screen.width;

if (screenWidth > 1024) {
    window.addEventListener('scroll', function(){
        var header = document.querySelector('nav');
        header.classList.toggle('sticky', window.scrollY > 20)
    })
}

function abrirModal(modalName){
    const modal = document.getElementById(modalName)
    const header = document.querySelector('nav')

    modal.classList.add('abrir')
    header.style.position = 'relative'
    var fechar = 'fechar-' + modalName 

    modal.addEventListener('click', (e) =>{
        if(e.target.id == fechar || e.target.id == modalName){
            modal.classList.remove('abrir')
            header.style.position = 'fixed'
        }
    })
}

const swiper = new Swiper('.swiper', {
    cssMode: true,
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});
