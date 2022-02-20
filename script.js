let contacts = [{
  name: 'Thomas',
  number: '1111111111',
  email: 'example@test.com'
}];

function addRow(name, number, email) {
  let contactTable = document.getElementById('contacts-table');
  let newRow = contactTable.insertRow(-1);
  let newNameCell = newRow.insertCell(0);
  let newNumberCell = newRow.insertCell(1);
  let newEmailCell = newRow.insertCell(2);
  let newNameText = document.createTextNode(name);
  let newNumberText = document.createTextNode(number);
  let newEmailLink = document.createElement("a");
  let newEmailText = document.createTextNode(email);
  newNameCell.appendChild(newNameText);
  newNumberCell.appendChild(newNumberText);
  newEmailCell.appendChild(newEmailLink);
  newEmailLink.appendChild(newEmailText);
  newEmailLink.href = `mailto:${email}`;
}

window.onload = addRow(contacts[0].name, contacts[0].number, contacts[0].email);

console.log(contacts);

let addContactForm = document.getElementsByClassName('main-container__addform');
let contactName = document.getElementById('addform__name-input');
let contactEmail = document.getElementById('addform__email-input');
let contactNumber = document.getElementById('addform__number-input');
let addContactButton = document.getElementById('addform__add-contact-button');

addContactButton.addEventListener('click', function(event) {
  event.preventDefault();
  if (contactName.value.length > 0 && contactNumber.value.length > 9 || contactEmail.value.length > 0) {
  let newContact = {
    name: contactName.value,
    number: contactNumber.value,
    email: contactEmail.value
  }
  contacts.push(newContact);
  contactName.value = '';
  contactNumber.value = '';
  contactEmail.value = '';
  console.log(contacts);
  addRow(newContact.name, newContact.number, newContact.email);
  }
})
