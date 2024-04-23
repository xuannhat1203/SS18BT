"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function caching(target, propertyKey, descriptor) {
    let originalMethod = descriptor.value;
    let cache = {};
    descriptor.value = function (...args) {
        let key = args.join('-');
        if (cache[key]) {
            console.log("kêt quả:", cache[key]);
            return cache[key];
        }
        else {
            let result = originalMethod.apply(this, args);
            cache[key] = result;
            return result;
        }
    };
    return descriptor;
}
class Example3 {
    add(a, b) {
        return a + b;
    }
}
__decorate([
    caching
], Example3.prototype, "add", null);
let example3 = new Example3();
console.log(example3.add(2, 3));
console.log(example3.add(2, 3));
