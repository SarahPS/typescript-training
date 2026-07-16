// class Worker {
//     private properName: string;
//     private familyName: string;
    
//     constructor(theFirst: string, theLast: string) {
//         this.properName = theFirst;
//         this.familyName = theLast;    
//     }

//     //alternate way of getting and setting available in TypeScript
//     public get firstName(): string {
//         return this.properName;
//     }       

//     public set firstName(value: string){
//         this.properName = value;
//     }

//     public get lastName(): string {
//         return this.familyName;
//     }

//     public set lastName(value: string) {
//         this.familyName = value;
//     }


// }

// let myWorker = new Worker("Martin", "Dixon");

// myWorker.firstName = "Phillip";
// myWorker.lastName = "Oyegenkeyo";

// console.log(myWorker.firstName);
// console.log(myWorker.lastName);    


class Employee {

    private _firstName: string;
    private _lastName: string;

    constructor(theFirst: string, theLast: string) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
    
}

// let's create an instance
let myEmployee = new Employee("Martin", "Dixon");

myEmployee.firstName = "Susan";
myEmployee.lastName = "Public";

console.log(myEmployee.firstName);
console.log(myEmployee.lastName);