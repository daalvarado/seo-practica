var formajax = document.getElementsByName("formulario")[0];

var xhr = new XMLHttpRequest();

function createData() {
  var data = { 
      name: "Prueba"
 };
  makeRequest("POST", "http://localhost:8000/api/task", data, function() {
    console.log("Datos enviados correctamente");
  });
}

createData();

function makeRequest(method, url, body, callbackSuccess) {
  var xhr = new XMLHttpRequest();
  crossDomain: true;
  xhr.open(method, url, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      callbackSuccess(xhr.responseText);
    }
  };

  if (body) {
    xhr.send(JSON.stringify(body));
  } else {
    xhr.send();
  }
}
