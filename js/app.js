
var submitButton = document.getElementById('submit');
var wholeMessage = document.getElementById('message-input');
var number = document.getElementById('number');

//Creamos una funcion para que cree un div que almacene los mensajes del input
function submitClicked (event) {
    var message = wholeMessage.value;    
    var element = document.createElement('div');
    element.appendChild(document.createTextNode(message));  
    document.getElementById('container').appendChild(element);
    element.setAttribute('class', 'box');
    number.textContent=140;  
    clearMessage ();
    enabled ();
}
// Habilita el botón, solo si se ingresa texto y la cantidad de letras es menor a 141
function enabled (event) {
    if(wholeMessage.value == ''){
        document.getElementById('submit').disabled = true;
    } else if (wholeMessage.value.length>=141) {
        document.getElementById('submit').disabled = true;
    }
    else {
        document.getElementById('submit').disabled = false;       
    }
}
setInterval( "enabled (event)",100)

//funcion para contar los caracteres del texto que se ingrese al  textarea
function counterChar (event) {
    var text = wholeMessage.value;
    var counter = parseInt((140-(text.length)));
    if(text.length>=140){
       document.getElementById('number').style.color = "red";
    } else if(text.length>=130 && text.length <= 140){
        document.getElementById('number').style.color = "gray";
    } else {
        document.getElementById('number').style.color = 'black';
    }
    number.innerHTML = counter; 
}
wholeMessage.addEventListener('keyup',counterChar);

// submitButton.onclick = submitClicked;
submitButton.addEventListener('click',submitClicked);

function clearMessage () {
    document.getElementById('message-input').value = '';
}



/*function clearNumber(event) {
    number.textContent=140;
}
// Esto sería para las futuras versiones
function showMessage() {
    document.getElementById('container').innerHTML = document.getElementById('message-input').value
}   
function clearMessage {
    document.getElementById('container').value = ""; 
}
// document.getElementById('submit').onclick = showMessage;
// document.getElementById('submit').onclick = function () {showMessage(); clearMessage();};
*/