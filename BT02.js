"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function timingDecorator(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        let start = performance.now();
        console.log(`Tên hàm:  ${propertyKey}`);
        console.log(`Tham số truyền vào: ${JSON.stringify(args)}`);
        const result = originalMethod.call(this, ...args);
        let end = performance.now();
        let time = end - start;
        console.log(" Thời gian thực thi là:", time);
        return time;
    };
    return descriptor;
}
class Example2 {
    add(a, b) {
        return a + b;
    }
}
__decorate([
    timingDecorator
], Example2.prototype, "add", null);
let example2 = new Example2();
example2.add(2, 3);
