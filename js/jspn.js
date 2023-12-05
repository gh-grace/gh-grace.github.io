function spinWheel() {
  // generate an angle
  var randomAngle = Math.floor(Math.random() * 360);

  // set angle for the wheel and arrow
  document.getElementById('wheel').style.transform = 'rotate(' + randomAngle + 'deg)';
  document.getElementById('arrow').style.transform = 'translate(-50%, -50%) rotate(' + randomAngle + 'deg)';
}

// spin the wheel
spinWheel();