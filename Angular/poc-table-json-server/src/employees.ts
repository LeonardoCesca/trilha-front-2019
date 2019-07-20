export class Employees {
    id: number;
    firstName: string;
    lastName: string;
    email: string;

    constructor(id, firstName, lastName, email){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}