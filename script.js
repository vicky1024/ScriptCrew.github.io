document.addEventListener('DOMContentLoaded', function() {
  const steps = document.querySelectorAll('.step');
  let currentStep = 0;

  function showStep(index) {
    steps.forEach((step, i) => {
      step.classList.toggle('active', i === index);
    });
  }

  document.getElementById('next').addEventListener('click', () => {
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
    }
  });

  document.getElementById('prev').addEventListener('click', () => {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  });

  // Initialize by showing the first step
  showStep(currentStep);
});


    // JavaScript to move the glow effect and custom cursor with the mouse
    document.addEventListener('mousemove', (event) => {
        const glowEffect = document.getElementById('glowEffect');
        const cursorPointer = document.getElementById('cursorPointer');

        glowEffect.style.left = `${event.pageX - glowEffect.offsetWidth / 2}px`;
        glowEffect.style.top = `${event.pageY - glowEffect.offsetHeight / 2}px`;

        cursorPointer.style.left = `${event.pageX - cursorPointer.offsetWidth / 2}px`;
        cursorPointer.style.top = `${event.pageY - cursorPointer.offsetHeight / 2}px`;
    });

    // JavaScript to activate the custom cursor effect on hover
    document.querySelectorAll('a, .btn-signup').forEach(element => {
        element.addEventListener('mouseover', () => {
            document.getElementById('cursorPointer').classList.add('active');
        });
        element.addEventListener('mouseout', () => {
            document.getElementById('cursorPointer').classList.remove('active');
        });
    });
