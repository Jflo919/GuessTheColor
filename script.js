var buttons = document.getElementsByClassName('colButton');
var heading = document.getElementById('colValue');
var answerMessage = document.getElementById('answer');
 

function setColor(button, red, green, blue){
    button.setAttribute('style',
                        'background-color: rgb('+ red +','+ green +','+ blue +');'
                       );
}

// function to randomly choose colors, remember Math.round or floor and Math.random times rgb value
function makeColorValue() {
    return Math.round(Math.random() * 255);
}
function start() {
  answerMessage.innerHTML = "";  
  var answerButton = Math.round(Math.random() * (buttons.length - 1));
// initialize three variables, add for loop here!
  for (var i = 0; i< buttons.length; i++) {
  
     let red = makeColorValue();
     let green = makeColorValue();
     let blue = makeColorValue();


  setColor(buttons[i], red, green, blue);

  if (i === answerButton) {
      heading.innerHTML = `(${red}, ${green}, ${blue})`;
    }
  


// Still need to
// Pick a random color to be answer
// Display the RGB color values to the user
// Ensure that when the player clicks on the winning button, a message tells them that they won

// eventlistener, 'this' refers to that the button has indeed been clicked
  buttons[i].addEventListener('click', function () {
      if (this === buttons[answerButton]) {
          answerMessage.innerHTML = "You are not wrong, so you might be correct!";
       var winningColor =  document.getElementByTagName('body');
       winningColor.setAttribute('style', 
'background-color: blue;');
      } else {
          answerMessage.innerHTML = "You have chosen poorly, try again!";
      }
  });
 }
} 

// reset button eventListener
document.getElementById('resetButton').addEventListener('click', start);

start();