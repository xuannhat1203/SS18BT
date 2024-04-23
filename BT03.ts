function caching(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    let originalMethod = descriptor.value;
    let cache: { [key: string]: any } = {}; 
    descriptor.value = function(...args: any[]){
        let key = args.join('-');
        if (cache[key]){
            console.log("kêt quả:", cache[key]);
            return cache[key];
        } else {
            let result = originalMethod.apply(this, args);
            cache[key] = result;
            return result;
        }
    };
    return descriptor;
}

class Example3 {
    @caching
    add(a: number, b: number): number {
        return a + b;
    }
}
let example3 = new Example3();
console.log(example3.add(2, 3));
console.log(example3.add(2, 3));
