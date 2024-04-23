function caching2(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    let originalMethod = descriptor.value;
    let cache: { [key: string]: any } = {}; 
    console.log(cache);
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
class Example8 {
    @caching2
    add(a: number, b: number): number {
        return a + b;
    }
}
let example8 = new Example8();
console.log(example8.add(2, 3));
console.log(example8.add(2, 3));