// this function responsible of the progress bar in the main page 
function addClass(element, className) {
  if (element.classList) {
      element.classList.add(className);
  } else {
      var currentClass = element.className;
      element.className = currentClass + ' ' + className;
  }
}

function removeClass(element, className) {
  if (element.classList) {
      element.classList.remove(className);
  } else {
      var currentClass = element.className;
      element.className = currentClass.replace(className, '').trim();
  }
}

function setActiveSteps(clickedStep) {
  var steps = document.querySelectorAll('.step');
  steps.forEach(function (step) {
      removeClass(step, 'active');
  });

  clickedStep.classList.add('active');

  // Handle first and last steps
  if (clickedStep.previousElementSibling !== null) {
      var prevSteps = Array.prototype.slice.call(clickedStep.previousElementSibling);
      prevSteps.forEach(function (step) {
          addClass(step, 'active');
      });
  }

  if (clickedStep.nextElementSibling !== null) {
      var nextSteps = Array.prototype.slice.call(clickedStep.nextElementSibling);
      nextSteps.forEach(function (step) {
          removeClass(step, 'active');
      });
  }
}

function setProgressBarWidth(width) {
  var progressBar = document.getElementById('line-progress');
  progressBar.style.width = width;
}

function handleStepClick(step, width, sectionClass) {
  step.addEventListener('click', function () {
      setActiveSteps(step);
      setProgressBarWidth(width);

      var section = document.querySelector('.' + sectionClass);
      addClass(section, 'active');
      var siblings = Array.prototype.slice.call(section.parentNode.children);
      siblings.forEach(function (sibling) {
          if (sibling !== section) {
              removeClass(sibling, 'active');
          }
      });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  var step01 = document.querySelector('.step01');
  var step02 = document.querySelector('.step02');
  var step03 = document.querySelector('.step03');
  var step04 = document.querySelector('.step04');
  var step05 = document.querySelector('.step05');

  handleStepClick(step01, '3%', 'europeanCup');
  handleStepClick(step02, '25%', 'NationalLigues');
  handleStepClick(step03, '50%', 'fifaWorldCup');
  handleStepClick(step04, '75%', 'europeanSuperCups');
  handleStepClick(step05, '100%', 'spanishCups');
});



