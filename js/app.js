
var submitButton = document.getElementById('submit');
var wholeMessage = document.getElementById('message-input');

function submitClicked (event) {
    var message = wholeMessage.value;    
    var element = document.createElement('div');
    element.appendChild(document.createTextNode(message));  
    document.getElementById('container').appendChild(element);
    element.setAttribute('class','box')
    clearMessage ();
    enabled ();
}

function enabled (event) {
    if(wholeMessage.value == ''){
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;       
    }
}
setInterval( "enabled (event)",100)

function counterChar (event) {
    var text = wholeMessage.value;
    var number = document.getElementById('number');
    var counter = parseInt((140-(text.length)));
    number.innerHTML = counter; 
}
wholeMessage.addEventListener('keyup',counterChar, false);


// submitButton.onclick = submitClicked;
submitButton.addEventListener('click',submitClicked);

function clearMessage () {
    document.getElementById('message-input').value = '';
}




/*
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