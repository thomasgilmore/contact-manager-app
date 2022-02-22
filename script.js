let contacts = [{
  id: 0,
  name: 'Thomas',
  number: '1111111111',
  email: 'example@test.com'
}];

let idNumber = 1;

let addContactForm = document.getElementsByClassName('main-container__addform');
let contactName = document.getElementById('addform__name-input');
let contactEmail = document.getElementById('addform__email-input');
let contactNumber = document.getElementById('addform__number-input');
let addContactButton = document.getElementById('addform__add-contact-button');

let searchForm = document.getElementById('main-container__search-form');
let searchFormInput = document.getElementById('search-form__input');
let searchFormButton = document.getElementById('search-form__search-button');

const sortByNameTitle = document.getElementById('sort-by-name-button');
const sortByNumberTitle = document.getElementById('sort-by-number-button');
const sortByEmailTitle = document.getElementById('sort-by-email-button');

let alphabetize = true;
let numberOrder = true;
let emailOrder = true;

function clearAllChildren() {
  let contactTable = document.getElementById('contacts-table');
  contactTable.getElementsByTagName("tbody")[0].innerHTML = contactTable.rows[0].innerHTML;
  // let contactTable = document.getElementById('contacts-table');
  // while (contactTable.childNodes.length > 2) {
  //   console.log("this is running");
  //   contactTable.removeChild(contactTable.lastChild);
  // }
}

function deleteContact(event) {
  event.preventDefault();
  let contactsToKeep = contacts.filter(function(contact) {
    return contact.id != event.target.id;
  });
  contacts = contactsToKeep;
  displayAllContacts(contactsToKeep);
}

function displayAllContacts(contacts) {
  clearAllChildren();
  const allContacts = contacts.map((contact) => {
    let contactTable = document.getElementById('contacts-table');
    let newRow = contactTable.insertRow(-1);
    let newNameCell = newRow.insertCell(0);
    let newNumberCell = newRow.insertCell(1);
    let newEmailCell = newRow.insertCell(2);
    let newDeleteButtonCell = newRow.insertCell(3);
    let newNameText = document.createTextNode(contact.name);
    let newNumberText = document.createTextNode(contact.number);
    let newEmailLink = document.createElement("a");
    let newEmailText = document.createTextNode(contact.email);
    let newDeleteButton = document.createElement("button");
    let newDeleteButtonText = document.createTextNode("X");
    newNameCell.appendChild(newNameText);
    newNumberCell.appendChild(newNumberText);
    newEmailCell.appendChild(newEmailLink);
    newEmailLink.appendChild(newEmailText);
    newEmailLink.href = `mailto:${contact.email}`;
    newDeleteButtonCell.appendChild(newDeleteButton);
    newDeleteButton.appendChild(newDeleteButtonText);
    newDeleteButton.onclick = deleteContact;
    newDeleteButton.id = contact.id;
  })
  return allContacts;
}

function sortByName(contacts) {
  clearAllChildren();
  let sortByNameArray = contacts.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  })
  displayAllContacts(sortByNameArray);
}

function sortByNameReverse(contacts) {
  clearAllChildren();
  let sortByNameArray = contacts.sort(function(a, b) {
    return b.name.localeCompare(a.name);
  })
  displayAllContacts(sortByNameArray);
}

function sortByNumber(contacts) {
  clearAllChildren(); 
  let sortByNameArray = contacts.sort(function(a, b) {
    return a.number.localeCompare(b.number);
  })
  displayAllContacts(sortByNameArray);
}

function sortByNumberReverse(contacts) {
  clearAllChildren();  
  let sortByNameArray = contacts.sort(function(a, b) {
    return b.number.localeCompare(a.number);
  })
  displayAllContacts(sortByNameArray);
}

function sortByEmail(contacts) {
  clearAllChildren();  
  let sortByNameArray = contacts.sort(function(a, b) {
    return a.email.localeCompare(b.email);
  })
  displayAllContacts(sortByNameArray);
}

function sortByEmailReverse(contacts) {
  clearAllChildren(); 
  let sortByNameArray = contacts.sort(function(a, b) {
    return b.email.localeCompare(a.email);
  })
  displayAllContacts(sortByNameArray);
}

function addRow(name, number, email, id) {
  let contactTable = document.getElementById('contacts-table');
  let newRow = contactTable.insertRow(-1);
  let newNameCell = newRow.insertCell(0);
  let newNumberCell = newRow.insertCell(1);
  let newEmailCell = newRow.insertCell(2);
  let newDeleteButtonCell = newRow.insertCell(3);
  let newNameText = document.createTextNode(name);
  let newNumberText = document.createTextNode(number);
  let newEmailLink = document.createElement("a");
  let newEmailText = document.createTextNode(email);
  let newDeleteButton = document.createElement("button");
  let newDeleteButtonText = document.createTextNode("X");
  newNameCell.appendChild(newNameText);
  newNumberCell.appendChild(newNumberText);
  newEmailCell.appendChild(newEmailLink);
  newEmailLink.appendChild(newEmailText);
  newEmailLink.href = `mailto:${email}`;
  newDeleteButtonCell.appendChild(newDeleteButton);
  newDeleteButton.appendChild(newDeleteButtonText);
  newDeleteButton.onclick = deleteContact;
  newDeleteButton.id = id;
}

window.onload = displayAllContacts(contacts);

function searchContacts(contacts) {
  let filteredContacts = [];
  const filteredNameContacts = contacts.filter(contact =>{
    return contact.name.toLowerCase().includes(searchFormInput.value.toString().toLowerCase())
  })
  // const filteredNumberContacts = contacts.filter(contact =>{
  //   return contact.number.includes(searchFormInput.value.toString());
  // })
  // const filteredEmailContacts = contacts.filter(contact =>{
  //   return contact.email.toLowerCase().includes(searchFormInput.value.toString().toLowerCase());
  // })
  searchFormInput.value = '';
  clearAllChildren();
  // filteredContacts = [...filteredNameContacts, ...filteredNumberContacts, ...filteredEmailContacts];
  displayAllContacts(filteredNameContacts);
}

// console.log(contacts);

searchFormButton.addEventListener('click', function(event) {
  event.preventDefault();
  if (searchFormInput.value.length > 0) {
    searchContacts(contacts);
  } else {
    clearAllChildren();
    displayAllContacts(contacts);
  }
})

addContactButton.addEventListener('click', function(event) {
  event.preventDefault();
  if (contactName.value.length > 0 && contactNumber.value.length > 9 || contactEmail.value.length > 0) {
  let newContact = {
    id: idNumber,
    name: contactName.value,
    number: contactNumber.value,
    email: contactEmail.value
  }
  contacts.push(newContact);
  idNumber++;
  contactName.value = '';
  contactNumber.value = '';
  contactEmail.value = '';
  // console.log(contacts);
  addRow(newContact.name, newContact.number, newContact.email, newContact.id);
  }
})

sortByNameTitle.addEventListener('click', function(event) {
  event.preventDefault();
  if (alphabetize) {
    sortByName(contacts);
    alphabetize = !alphabetize;
  } else {
    sortByNameReverse(contacts);
    alphabetize = !alphabetize;
  }
})

sortByNumberTitle.addEventListener('click', function(event) {
  event.preventDefault();
  if (numberOrder) {
    sortByNumber(contacts);
    numberOrder = !numberOrder;
  } else {
    sortByNumberReverse(contacts);
    numberOrder = !numberOrder;
  }
})

sortByEmailTitle.addEventListener('click', function(event) {
  event.preventDefault();
  if (emailOrder) {
    sortByEmail(contacts);
    emailOrder = !emailOrder;
  } else {
    sortByEmailReverse(contacts);
    emailOrder = !emailOrder;
  }
})