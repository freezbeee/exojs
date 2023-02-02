class Contact {
    private static _count: number = 0
    public id: number;
    
    constructor(private _firstname: string, private _lastname: string, private _birth: string, private _phone: string) {
        this.id = ++Contact._count
    }
    
    
    get listContactAffiche() {
        
        return `<button type="button" id="btn-add" onClick="contactAffiche(${this.id})"  class="btn btn-outline-light d-flex justify-content-end">${this.id}) ${this._firstname} ${this._lastname} </button>`
    }

    get firstname(){
        return this._firstname
    }
    get lastname(){
        return this._lastname
    }
    get birth(){
        return this._birth
    }
    get phone(){
        return this._phone
    }

    
}
let contactTable : Contact[] = []
let monContact = new Contact("Bubule","Le poisson rouge","10/05/2020","06 55 46 55 06") 
contactTable.push(monContact)
let monContact2 = new Contact("blop","Le poisson cloown","10/11/2020","06 55 46 55 06") 
contactTable.push(monContact2)
let result = document.querySelector('#result') as HTMLDivElement
let btnseach = window.document.querySelector('#btn-add') as HTMLButtonElement
let resultSearchContact = document.querySelector('#result-info-contact') as HTMLDivElement
let btnAdd = document.querySelector('#btn-add') as HTMLButtonElement
result.innerHTML+= monContact.listContactAffiche
result.innerHTML+= monContact2.listContactAffiche


btnAdd.addEventListener('click', ()=>{
    let addFirstName  = String(prompt('ajouter un prenom'));
    let addLastName  = String(prompt('ajouter un nom'));
    let addBirth  = String(prompt('ajouter une date de naissance'));
    let addPhone  = String(prompt('ajouter un nom'));
    contactTable.push(new Contact(addFirstName, addLastName, addBirth, addPhone)
    
})


// btnseach.addEventListener('click', () => {
// resultSearchContact.innerHTML+= monContact.contactAffiche })

// function contactAffiche(e){
//     let resultSearchContact = document.querySelector('#result-info-contact') as HTMLDivElement;
//     resultSearchContact.innerHTML = 
//      `<div class="container">
//     <h2>Nom : ${e.firstName} </h2>
//     <h2>Prenom : ${e.lastName}}</h2>
//     <h2>Date de naissance : ${e.birth}</h2>
//     <h2>Telephone :${e.phone}</h2>
//     <div class="d-flex justify-content-center">
//     <button type="button" class="btn btn-outline-danger d-flex me-2 mb-3"><i class="bi bi-trash-fill"></i></button>
//     <button type="button" class="btn btn-outline-dark mb-3 "><i class="bi bi-search"></i></button>
// </div>`
// }

// btnseach.addEventListener('click', () =>{
//     resultSearchContact.innerHTML=contactAffiche(Contact)
// })