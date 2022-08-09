//---- Problema 1 Fibonacci
// Efoque iterativo
const iretativeFibonacci = (num) => {
    let result = [0, 1]
    for(let i = 2; i < num; i++){
        result.push(result[i-2]+result[i-1]);
    };
    return result;
}

console.log(iretativeFibonacci(10));