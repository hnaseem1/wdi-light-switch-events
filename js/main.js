var button = document.querySelector('button');
button.addEventListener('click', function() {
  if (document.querySelector('button').className === 'switch off') {
    switchOn();
  } else {
    switchOff();
  }
});


function switchOff() {
  document.querySelector('button').className = 'switch off'
  document.querySelector('body').className = 'dark'
  document.querySelector('.status').innerText = 'Hey, who turned off the lights?'
}

function switchOn() {
  document.querySelector('button').className = 'switch on'
  document.querySelector('body').className = 'light'
  document.querySelector('.status').innerText = "It's so bright in here!"
}
