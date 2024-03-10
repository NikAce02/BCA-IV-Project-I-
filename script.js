const bar = document.getElementById('bar');
const nav = document.getElementsByClassName('navbar')

if (bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}