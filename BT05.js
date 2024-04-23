"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function chainFunctions(...functions) {
    return function (target, propertyKey, descriptor) {
        let originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            functions.forEach(item => {
                item.apply(this, args);
            });
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
class MyClass {
    myMethod() {
        console.log("hello");
    }
}
__decorate([
    chainFunctions(function1, function2, function3)
], MyClass.prototype, "myMethod", null);
function function1() {
    console.log("hello 1");
}
function function2() {
    console.log("hello 2");
}
function function3() {
    console.log("hello 3");
}
const obj = new MyClass();
obj.myMethod();
