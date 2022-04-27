var buttons = document.getElementsByClassName('colButton');
var heading = document.getElementById('colValue');
heading.innerHTML = 'Here we go... again.';
 

function setColor(button, red, green, blue){
    button.setAttribute('style',
                        'background-color: rgb('+ red +','+ green +','+ blue +');'
                       );
}

// function to randomly choose colors, remember Math.round or floor and Math.random times rgb value
function makeColorValue() {
    return Math.round(Math.random() * 255);
}

// initialize three variables, add for loop here!
for (var i = 0; i< buttons.length; i++) {
  
   let red = makeColorValue();
   let green = makeColorValue();
   let blue = makeColorValue();


setColor(buttons[i], red, green, blue);
}