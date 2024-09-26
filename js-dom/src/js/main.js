// Elementos del DOM
const addContactBtn = document.getElementById("add-contact");
const contactNameInput = document.getElementById("contact-name");
const contactList = document.getElementById("contact-list");

// Funcion para validar nombre de contacto
function validateName(name) {
  let nameExists = true;
  contactList.childNodes.forEach((element) => {
    if (element.children[0].innerText.trim() === name.trim()) {
      nameExists = false;
      return;
    }
  });
  return nameExists;
}

function addContact() {
  let contactName = contactNameInput.value.trim();

  // Validar que el nombre no este vacío
  if (contactName === "") {
    alert("Nombre invalido, ingrese un nombre nuevamente.");
    return;
  }

  let nameIsValid = validateName(contactName);
  if (!nameIsValid) {
    alert("Nombre duplicado");
    return;
  }

  // Crear nuevo contacto
  let li = document.createElement("li");

  // Agregar nombre de contacto a etiqueta span
  let span = document.createElement("span");
  span.innerText = contactName;
  li.appendChild(span);

  // Crear Botón Editar
  let editBtn = document.createElement("button");
  editBtn.innerText = "Editar";
  editBtn.addEventListener("click", () => {
    let new_name = window.prompt("Actualice el nombre", contactName);
    if (new_name === "") {
      alert("Ingrese un nombre");
      return;
    }

    let newNameIsValid = validateName(new_name);
    if (!newNameIsValid) {
      alert("Nombre duplicado");
      return;
    }

    li.children[0].innerText = new_name;
  });
  li.appendChild(editBtn);

  // Crear Botón Eliminar
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Borrar";
  deleteBtn.addEventListener("click", () => {
    contactList.removeChild(li);
  });
  li.appendChild(deleteBtn);

  // Insertar contacto en Lista
  contactList.appendChild(li);

  // Resetear input
  contactNameInput.value = "";
}

addContactBtn.addEventListener("click", addContact);
