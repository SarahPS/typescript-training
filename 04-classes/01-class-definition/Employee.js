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
var Employee = /** @class */ (function () {
    function Employee(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Employee.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
// let's create an instance
var myEmployee = new Employee("Martin", "Dixon");
myEmployee.firstName = "Susan";
myEmployee.lastName = "Public";
console.log(myEmployee.firstName);
console.log(myEmployee.lastName);
