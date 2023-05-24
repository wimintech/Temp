window.addEventListener('scroll', function() {
    var stickyContent = document.getElementById('m');
    var hoverImage = document.querySelector('.hover-image');
  
    if (hoverImage.matches(':hover')) {
      stickyContent.style.display = 'block';
    } else {
      stickyContent.style.display = 'none';
    }
  });
  