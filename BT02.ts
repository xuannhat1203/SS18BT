function timingDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
        let start = performance.now();
        console.log(`Tên hàm:  ${propertyKey}`);
        console.log(`Tham số truyền vào: ${JSON.stringify(args)}`);
        const result = originalMethod.call(this, ...args);
        let end = performance.now();
        let time = end - start;
        console.log(" Thời gian thực thi là:",time);
        return time;
    };
    return descriptor;
}
class Example2 {
    @timingDecorator
    add(a: number, b: number): number {
        return a + b;
    }
}
let example2 = new Example2();
example2.add(2, 3);
