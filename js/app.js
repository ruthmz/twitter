
var submitButton = document.getElementById('submit');
function submitClicked () {
    var message = document.getElementById('message-input').value;
    // var text= document.createElement('p')
    // var texto = document.createTextNode(message);
    // var result =  document.getElementById("container").appendChild(message);
    document.getElementById('container').innerHTML = message;
    clearMessage ();
}
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