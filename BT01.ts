function logInfo(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
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
    @logInfo
    add(a: number, b: number): number {
        return a + b;
    }
}
const example = new Example();
example.add(2, 3);
