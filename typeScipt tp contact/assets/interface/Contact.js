// interface Contact {
//     firstName : string;
//     lastName : string
//     birth : string;
//     mail : string
//     phone : string
// }
class Contact {
    constructor(_firstname, _lastname, _birth, _phone) {
        this._firstname = _firstname;
        this._lastname = _lastname;
        this._birth = _birth;
        this._phone = _phone;
        this.id = ++Contact._count;
    }
    get listContactAffiche() {
        return `<button type="button" id="btn-add" onclick="contactAffiche(${this.id})" class="btn btn-outline-light d-flex justify-content-end">${this.id}) ${this._firstname} ${this._lastname} </button>`;
    }
    get firstname() {
        return this._firstname;
    }
    get lastname() {
        return this._lastname;
    }
    get birth() {
        return this._birth;
    }
    get() {
        return this._phone;
    }
}
Contact._count = 0;
export { Contact };
