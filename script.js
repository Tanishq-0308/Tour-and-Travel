const bar=document.getElementById('bar');
const navbar=document.getElementById('navbar');

bar.addEventListener("click",()=>{
    if((navbar.style.right)=='10px')
    navbar.style.right='-300px';
    else
    navbar.style.right='10px';
})