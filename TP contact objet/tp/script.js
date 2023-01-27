let lastName = document.querySelector("#name").value;
let firstname = document.querySelector("#firstname").value;
let phone = document.querySelector("#phone").value;
let birth = document.querySelector("#birth").value;
let mail = document.querySelector("#mail").value;
let btn = document.querySelector("button");
let text = document.querySelector("#text").value;
// let form = document.querySelector("#form");
let contact;
// console.log(mail.value);

// let lastnamevalue = lastName.value;
class Contact {
  constructor(lastName, firstname, phone, birth, mail) {
    this.lastName = lastName;
    this.firstname = firstname;
    this.phone = phone;
    this.birth = birth;

    this.email = mail;
  }

  display() {
    return `<th> ${this.name}<th/><th>${this.firstname}<th/> <th> ${this.phone}<th/> <th> ${this.birth}<th/> <th> ${this.mail}<th/>`;
  }
}
btn.addEventListener("click", (e) => {
  // console.log(lastName);
  console.log(firstname);

  e.preventDefault();
  contact = new Contact(lastName, firstname, phone, birth, mail);
  console.log(contact);
  text.innerHTML += contact.display();
  console.log(contact.display());
});

// console.log(renault.display());
// console.log(BMW.display());

// text.innerHTML += renault.display();
// text.innerHTML += BMW.display();
