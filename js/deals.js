const hiddenContent = document.querySelector('.hidden-content');
  const readMoreButton = document.querySelector('.read-more');

  readMoreButton.addEventListener('click', () => {
    hiddenContent.classList.toggle('expanded');
    readMoreButton.textContent = hiddenContent.classList.contains('expanded') ? 'Read Less' : 'Read More';
  });