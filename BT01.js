"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logInfo(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Tên hàm:  ${propertyKey}`);
        console.log(`Tham số truyền vào: ${JSON.stringify(args)}`);
        const result = originalMethod.call(this, ...args);
        // hàm call và apply được sử dụng để gọi hàm gốc với các tham số được truyền vào dưới dạng một mảng (args).
        console.log(`Kết quả: ${result}`);
        return result;
    };
    return descriptor;
}
class Example {
    add(a, b) {
        return a + b;
    }
}
__decorate([
    logInfo
], Example.prototype, "add", null);
const example = new Example();
example.add(2, 3);
