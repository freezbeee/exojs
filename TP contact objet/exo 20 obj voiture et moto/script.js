let lastName = document.querySelector("#name");
let firstname = document.querySelector("#firstname");
let phone = document.querySelector("#phone");
let birth = document.querySelector("#birth");
let mail = document.querySelector("#mail");
let btn = document.querySelector("#btn");
let text = document.querySelector("#text");
// let form = document.querySelector("#form");
let contact;
console.log(mail.value);
console.log(firstname);

btn.addEventListener("click", (e) => {
  contact = new Contact(lastName, firstname, phone, birth, mail);
  e.preventDefault();
  text.innerHTML += contact.display();
  console.log(contact.display());
});
class Contact {
  constructor(lastName, firstname, phone, birth, mail) {
    this.nom = lastName;
    this.prenom = firstname;
    this.telephone = phone;
    this.naissance = birth;

    this.email = mail;
  }

  display() {
    return `<th> ${this.name}<th/> <th> ${this.firstname}<th/> <th> ${this.phone}<th/> <th> ${this.birth}<th/> <th> ${this.mail}<th/>`;
  }
}

// console.log(renault.display());
// console.log(BMW.display());

// text.innerHTML += renault.display();
// text.innerHTML += BMW.display();
