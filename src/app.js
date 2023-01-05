const formulario = document.getElementById("formulario");
const input = document.querySelectorAll("#formulario input");
//variables de elementos del formulario.
const elemCard = document.getElementById("Card");
const elemNumber = document.getElementById("number");
const elemCantidad = document.getElementById("cantidad");
const elemName = document.getElementById("name");
const elemApellido = document.getElementById("apellido");
const elemCity = document.getElementById("City");
const elemCodigoPostal = document.getElementById("PostalCode");
const elemTextArea = document.getElementById("comentario");
const elemSelector = document.getElementById("State");

const expresiones = {
  Card: /^[0-9]{13,16}$/, 
  number: /^[0-9]{3}$/,
  cantidad: /[-+]?[0-9]*[.,]?[0-9]+/,
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
  apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
  City: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
  codigoPostal: /(\d{5}([\-]\d{4})?)/ 
};

const validarFormulario = e => {
  switch (e.target.name) {
    case "Card":
      if (expresiones.Card.test(e.target.value)) {
        document.getElementById("Card").classList.add("validvalue");
        document.getElementById("Card").classList.remove("invalidValue");
      } else {
        document.getElementById("Card").classList.add("invalidValue");
        document.getElementById("Card").classList.remove("validvalue");
      }

      break;
    case "number":
      if (expresiones.number.test(e.target.value)) {
        document.getElementById("number").classList.add("validvalue");
        document.getElementById("number").classList.remove("invalidValue");
      } else {
        document.getElementById("number").classList.add("invalidValue");
        document.getElementById("number").classList.remove("validvalue");
      }

      break;
    case "cantidad":
      if (expresiones.cantidad.test(e.target.value)) {
        document.getElementById("cantidad").classList.add("validvalue");
        document.getElementById("cantidad").classList.remove("invalidValue");
      } else {
        document.getElementById("cantidad").classList.add("invalidValue");
        document.getElementById("cantidad").classList.remove("validvalue");
      }

      break;
    case "name":
      if (expresiones.name.test(e.target.value)) {
        document.getElementById("name").classList.add("validvalue");
        document.getElementById("name").classList.remove("invalidValue");
      } else {
        document.getElementById("name").classList.add("invalidValue");
        document.getElementById("name").classList.remove("validvalue");
      }
      break;
    case "apellido":
      if (expresiones.apellido.test(e.target.value)) {
        document.getElementById("apellido").classList.add("validvalue");
        document.getElementById("apellido").classList.remove("invalidValue");
      } else {
        document.getElementById("apellido").classList.add("invalidValue");
        document.getElementById("apellido").classList.remove("validvalue");
      }

      break;
    case "City":
      if (expresiones.City.test(e.target.value)) {
        document.getElementById("City").classList.add("validvalue");
        document.getElementById("City").classList.remove("invalidValue");
      } else {
        document.getElementById("City").classList.add("invalidValue");
        document.getElementById("City").classList.remove("validvalue");
      }

      break;
    case "PostalCode":
      if (expresiones.codigoPostal.test(e.target.value)) {
        document.getElementById("PostalCode").classList.add("validvalue");
        document.getElementById("PostalCode").classList.remove("invalidValue");
      } else {
        document.getElementById("PostalCode").classList.add("invalidValue");
        document.getElementById("PostalCode").classList.remove("validvalue");
      }

      break;
  }
};
input.forEach(input => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});
formulario.addEventListener("submit", e => {
  e.preventDefault();

  let showError = false;

  //Validacion para que todos los elemntos al enviar esten con los datos.
  if (elemCard.value === "") {
    elemCard.style.backgroundColor = "rgb(206, 144, 144)";
    showError = true;
  } else {
    elemCard.style.removeProperty("background-color");
  }
  if (elemNumber.value === "") {
    elemNumber.style.backgroundColor = "rgb(206, 144, 144)";
    showError = true;
  } else {
    elemNumber.style.removeProperty("background-color");
  }
  if (elemCantidad.value === "") {
    elemCantidad.style.backgroundColor = "rgb(206, 144, 144)";
    showError = true;
  } else {
    elemCantidad.style.removeProperty("background-color");
  }
  if (elemName.value === "") {
    elemName.style.backgroundColor = "rgb(206, 144, 144)";
    showError = true;
  } else {
    elemName.style.removeProperty("background-color");
  }
  if (elemApellido.value == "") {
    elemApellido.style.backgroundColor = "rgb(206, 144, 144)";
    showError = true;
  } else {
    elemApellido.style.removeProperty("background-color");
  }
  if (elemCity.value === "") {
    elemCity.style.backgroundColor = "rgb(206, 144, 144)";
    showError = true;
  } else {
    elemCity.style.removeProperty("background-color");
  }
  if (elemCodigoPostal.value === "") {
    elemCodigoPostal.style.backgroundColor = "rgb(206, 144, 144)";
    showError = true;
  } else {
    elemCodigoPostal.style.removeProperty("background-color");
  }
  if (elemTextArea.value === "") {
    elemTextArea.style.backgroundColor = "rgb(206, 144, 144)";
    showError = true;
  } else {
    elemTextArea.style.removeProperty("background-color");
  }
  if (elemSelector.value === "") {
    elemSelector.style.backgroundColor = "rgb(206, 144, 144)";
    showError = true;
  } else {
    elemSelector.style.removeProperty("background-color");
  }
  //validación de elemento de ALERTA
  let elemAlertError = document.getElementById("alertError");
  if (showError === true) {
    elemAlertError.removeAttribute("hidden");
  } else {
    elemAlertError.setAttribute("hidden", true);
    document.getElementById("Card").classList.remove("invalidValue");
    document.getElementById("Card").classList.remove("validvalue");
    document.getElementById("number").classList.remove("invalidValue");
    document.getElementById("number").classList.remove("validvalue");
    document.getElementById("cantidad").classList.remove("invalidValue");
    document.getElementById("cantidad").classList.remove("validvalue");
    document.getElementById("name").classList.remove("invalidValue");
    document.getElementById("name").classList.remove("validvalue");
    document.getElementById("apellido").classList.remove("invalidValue");
    document.getElementById("apellido").classList.remove("validvalue");
    document.getElementById("City").classList.remove("invalidValue");
    document.getElementById("City").classList.remove("validvalue");
    document.getElementById("PostalCode").classList.remove("invalidValue");
    document.getElementById("PostalCode").classList.remove("validvalue");
    formulario.reset();
  }
});
