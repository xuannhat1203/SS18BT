function chainFunctions(...functions: Function[]) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        let originalMethod = descriptor.value;
        descriptor.value = function(...args: any[]) {
            functions.forEach(item => {
                item.apply(this, args);
            });
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
class MyClass {
    @chainFunctions(
        function1,
        function2,
        function3
    )
    myMethod() {
        console.log("hello");
    }
}
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

