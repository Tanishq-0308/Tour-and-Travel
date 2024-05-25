const hiddenContent = document.querySelector('.hidden-content');
  const readMoreButton = document.querySelector('.read-more');

  readMoreButton.addEventListener('click', () => {
    hiddenContent.classList.toggle('expanded');
    readMoreButton.textContent = hiddenContent.classList.contains('expanded') ? 'Read Less' : 'Read More';
  });

  const bar=document.getElementById('bar');
const navbar=document.getElementById('navbar');

bar.addEventListener("click",()=>{
    if((navbar.style.right)=='10px')
    navbar.style.right='-300px';
    else
    navbar.style.right='10px';
})