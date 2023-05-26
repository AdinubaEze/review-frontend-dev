const theme_toggler = document.querySelector('.theme__toggle');
theme_toggler.addEventListener('click', ()=>{
    document.body.classList.toggle('dark__mode__variables');
    theme_toggler.querySelector('i:nth-child(1)').classList.toggle('active');
    theme_toggler.querySelector('i:nth-child(2)').classList.toggle('active');
})