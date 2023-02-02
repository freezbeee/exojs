// interface Contact {
//     firstName : string;
//     lastName : string
//     birth : string;
//     mail : string
//     phone : string
// }


class Contact {
    private static _count: number = 0
    public id: number;
    
    constructor(private _firstname: string, private _lastname: string, private _birth: string, private _phone: string) {
        this.id = ++Contact._count
    }
    
    
    get listContactAffiche() {
        return `<button type="button" id="btn-add" onclick="contactAffiche(${this.id})" class="btn btn-outline-light d-flex justify-content-end">${this.id}) ${this._firstname} ${this._lastname} </button>`
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
    get (){
        return this._phone
    }

    
}
export {Contact}