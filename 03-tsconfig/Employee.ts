class Employee {
      // this is the traditional way to create a constructor 

    // private _firstName: string;
    // private _lastName: string;

       
    // constructor(theFirst:string, theLast:string) {
    //     this._firstName = theFirst;
    //     this._lastName = theLast;
    // }

    //this is the other way to create a constructor
    constructor(private _firstName: string, 
                private _lastName: string) {
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