const image = document.querySelector('.raz');

// Add fade-in animation
image.classList.add('fadeIn');

// Remove fade-in animation and add fade-out animation after a delay
setTimeout(() => {
  image.classList.remove('fadeIn');
  image.classList.add('fadeOut');
}, 2000); // Adjust delay as needed (in milliseconds)
