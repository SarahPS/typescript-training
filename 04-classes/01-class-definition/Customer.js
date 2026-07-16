// class Customer {
//     private firstName: string;
//     lastName: string;
//    constructor(theFirst: string, theLast: string) {
//        this.firstName = theFirst;
//        this.lastName = theLast;
//     }
//     public getFirstName(): string {
//         return this.firstName;
//     }
//     public setFirstName(theFirst: string): void {
//         this.firstName = theFirst;
//     }   
//     public getLastName(): string {
//         return this.lastName;
//     }   
//     public setLastName(theLast: string): void {
//         this.lastName = theLast;
//     }
// }
// // how to define the properties individually without a constructor
// // let myCustomer = new Customer();
// // myCustomer.firstName = "Martin";
// // myCustomer.lastName = "Dixon";
// //use contructor to create a new instance of the Customer class
// let myCustomer = new Customer("Martin", "Dixon");
// //output with contructor
// // console.log(myCustomer.firstName);
// // console.log(myCustomer.lastName);
// //output with private properties and getter methods
// console.log(myCustomer.getFirstName());
// console.log(myCustomer.getLastName());
var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
// let's create an instance
var myCustomer = new Customer("Martin", "Dixon");
myCustomer.firstName = "Susan";
myCustomer.lastName = "Public";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
