"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function check(...checkType) {
    return function (target, propertyKey, descriptor) {
        let originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            args.forEach((arg, index) => {
                if (typeof arg !== checkType[index]) {
                    console.log("sai kiểu dữ liệu");
                }
            });
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
class Example6 {
    printItem(name, age) {
        console.log(`Hello, ${name}! You are ${age} years old.`);
    }
}
__decorate([
    check('string', 'number')
], Example6.prototype, "printItem", null);
const example6 = new Example6();
example6.printItem('John', 30);
// example6.printItem(123, '30');
