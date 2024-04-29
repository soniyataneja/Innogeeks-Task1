const ball = document.getElementById('ball');
  const toggleButton = document.getElementById('toggleButton');
  let isJumping = false;

  toggleButton.addEventListener('click', function() {
    if (isJumping) {
      ball.style.animationPlayState = 'paused';
      isJumping = false;
    } else {
      ball.style.animationPlayState = 'running';
      isJumping = true;
    }
  });