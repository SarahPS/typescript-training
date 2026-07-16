"use strict";
class Employee {
    // private _firstName: string;
    // private _lastName: string;
    // this is the traditional way to create a constructor  
    // constructor(theFirst:string, theLast:string) {
    //     this._firstName = theFirst;
    //     this._lastName = theLast;
    // }
    //this is the other way to create a constructor
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
// let's create an instance
let myEmployee = new Employee("Martin", "Dixon");
myEmployee.firstName = "Susan";
myEmployee.lastName = "Public";
console.log(myEmployee.firstName);
console.log(myEmployee.lastName);
