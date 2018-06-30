//smooth scroll

$('a[href*="#"]')
  .click(function(event) {
      var target = $(this.hash);
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top-60
          },
          1000,
        )
            }
          
        );
      ;

//barra navegacion

  $('.nav').on('click',function(){
    $('a.nav').removeClass('active');
    $(this).addClass('active');
  })

// fotos quien soy
$(document).ready(function(){
  setInterval(function(){
    $('.fotodiego').toggleClass('imgHidden');
  }, 1000);
});


$('.fotoDiego').on('click',function(){
  $('.fotodiego').toggleClass('imgHidden');
})

var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("emailaddress");
var phone = document.getElementById("tel");
var conocido = document.getElementById("conocido");
var conocidoOthers = document.getElementById("others");
var mensaje = document.getElementById("mensaje");
var submit = document.getElementById("submit");
var form = document.getElementsByName("formulario")[0];


//validacion formulario

form.addEventListener("submit", function(event) {
 
  clearLimites();

    if (firstName.value.length <3) {
      limites("Tu nombre tiene que tener por lo menos 3 letras");
      firstName.focus();
      event.preventDefault();
      return false;
    } else if (/^[A-Za-z\s]{3,}$/.test(firstName.value) == false) {
             limites("Introduce un nombre valido");
             firstName.focus();
             event.preventDefault();
             return false;
           };

    if (lastName.value.length <3) {
      limites("Tu apellido tiene que tener por lo menos 3 letras");
      lastName.focus();
      event.preventDefault();
      return false;
    } else if (/^[A-Za-z\s]{3,}$/.test(lastName.value) == false) {
             limites("Introduce un apellido valido");
             lastName.focus();
             event.preventDefault();
             return false;
           };

    var regex = /[A-Za-z0-9\.\+]+@[A-Za-z0-9]+\.[A-Za-z0-9\.]+/;
    var resultEmailValidation = regex.test(email.value);

    if (resultEmailValidation === false) {
      limites("Tienes que escribir un email correcto");
      email.focus();
      event.preventDefault();
      return false;
    }

    var telRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{3}$/;
    var telValidation = telRegex.test(phone.value);

    if (telValidation === false) {
      limites("Tienes que escribir un telefono en el formato indicado");
      phone.focus();
      event.preventDefault();
      return false;
    }


  if (mensaje.value.length === 0) {
    limites("Por favor introduce un mensaje");
    event.preventDefault();
    return false;
  }
  
  let s=mensaje.value;
  s=s.trim();
  s = s.replace(/\s{2,}/g," ");

  if (s.split(" ").length > 150) {
    limites("El mensaje no puede contener más de 150 palabras");
    event.preventDefault();
    return false;
  }


  submit.setAttribute("disabled", "");
  event.preventDefault();

  setTimeout(function() {
    form.reset();
    conocidoOthers.classList.add("hidden");
    sendNotification("Formulario recibido", "Gracias por participar");
    submit.removeAttribute("disabled");
  }, 1000);
});

//funciones para formulario

function limites(notificacion){
    var noti=document.querySelector("#limitePal");
    noti.classList.remove("hidden");
    noti.textContent=notificacion;
}

function clearLimites(){
     var noti = document.querySelector("#limitePal");
     noti.classList.add("hidden");
     noti.textContent = "";
}

function contarPalabras(s) {
  s = s.replace(/(^\s*)|(\s*$)/gi, "");
  s = s.replace(/[ ]{2,}/gi, " ");
  s = s.replace(/\n /, "\n");
  return s.split(" ").length;
}

//agrego campo nuevo
conocido.addEventListener("change", function() {
  if (conocido.value === "Otros") {
    conocidoOthers.classList.remove("hidden");
  } else {
    conocidoOthers.classList.add("hidden");
  }});



