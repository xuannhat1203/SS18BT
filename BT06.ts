function check(...checkType: string[]) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        let originalMethod = descriptor.value;
        descriptor.value = function(...args: any[]) {
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
    @check('string', 'number')
    printItem(name: string, age: number) {
        console.log(`Hello, ${name}! You are ${age} years old.`);
    }
}
const example6 = new Example6();
example6.printItem('John', 30);
// example6.printItem(123, '30');

