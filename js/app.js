
var submitButton = document.getElementById('submit');
var wholeMessage = document.getElementById('message-input');
var number = document.getElementById('number');
var container = document.getElementById('container');


//Creamos una funcion para que cree un div que almacene los mensajes del input
function submitClicked (event) {
    var currentTime = new Date();
    var hour = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    var suffix = "AM";
    if (hour >= 12){
        suffix = "PM";
        hour = hour - 12;
    } if (hour == 0) {
        hour = 12;
    }
    var message = wholeMessage.value;    
    var element = document.createElement('div');
    var countHour = document.createElement('div');
    countHour.innerHTML = hour + ':' + minutes + " " + suffix;
    element.insertBefore(countHour,element.childNodes[0]);
    element.appendChild(document.createTextNode(message));  
    container.insertBefore(element,container.children[0].nextSibling);
    element.classList.add('box');
    number.textContent=140;  
    clearMessage ();
    enabled ();
}
submitButton.addEventListener('click',submitClicked);
  
// Habilita el botón, solo si se ingresa texto y la cantidad de letras es menor a 141
function enabled (event) {
    if(wholeMessage.value == ''){
        document.getElementById('submit').disabled = true;
    } else if (wholeMessage.value.length>=141) {
        document.getElementById('submit').disabled = true;
    }  else if (wholeMessage.value == '' || wholeMessage == "\n"){
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
    if(text.length>140){
       document.getElementById('number').style.color = "red";
    } else if(text.length>=130 && text.length <= 140){
        document.getElementById('number').style.color = "gray";
    } else {
        document.getElementById('number').style.color = 'black';
    }
    number.innerHTML = counter; 
}

function scrooll(event){
    wholeMessage.style.height = 'inherit'
    wholeMessage.style.height = wholeMessage.scrollHeight + "px";
  }

wholeMessage.addEventListener('input',scrooll);

// wholeMessage.addEventListener('keyup',counterChar);


// submitButton.onclick = submitClicked;

function clearMessage () {
    document.getElementById('message-input').value = '';
}

