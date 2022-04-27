var buttons = document.getElementsByClassName('colButton');
var heading = document.getElementById('colValue');
heading.innerHTML = 'Here we go... again.';
 

function setColor(button, red, green, blue){
    button.setAttribute('style',
                        'background-color: rgb('+ red +','+ green +','+ blue +');'
                       );
}

// function to randomly choose colors, remember Math.round or floor and Math.random times rgb value
setColor(buttons[0], 255, 0, 255);