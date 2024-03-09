function handleResize() {
    if (window.innerWidth <= 800) {
      document.getElementById('show-signup').addEventListener('click', showAlert);
      document.getElementById('show-signin').addEventListener('click', showAlert);
    } else {
      document.getElementById('show-signup').removeEventListener('click', showAlert);
      document.getElementById('show-signin').removeEventListener('click', showAlert);
    }
  }
  
  document.getElementById('cross').addEventListener('click', function() {
    document.getElementById('signup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling
  });
  
  document.getElementById('xcross').addEventListener('click', function() {
    document.getElementById('signin').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling
  });
  
  document.getElementById('show-signin').addEventListener('click', function() {
    document.getElementById('signup').style.display = 'none';
    document.getElementById('signin').style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Enable scrolling
  });
  
  document.getElementById('show-signup1').addEventListener('click', function() {
    document.getElementById('signup').style.display = 'flex';
    document.getElementById('signin').style.display = 'none';
    document.body.style.overflow = 'hidden'; // Enable scrolling
  });
  document.getElementById('show-signup').addEventListener('click', function() {
    document.getElementById('signup').style.display = 'flex';
    document.getElementById('overlay').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  });
  
  // Initial call to handleResize to set up event listeners based on the initial screen width
  handleResize();
  
  // Add event listener for resize event
  window.addEventListener('resize', handleResize);
  