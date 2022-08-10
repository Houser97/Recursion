//---- Problema 1 Fibonacci
// Efoque iterativo
const iretativeFibonacci = (num) => {
    let result = [0, 1]
    for(let i = 2; i < num; i++){
        result.push(result[i-2]+result[i-1]);
    };
    return result;
};

// console.log(iretativeFibonacci(10));

// Efoque recursivo, primera solución
const recursiveFibonacci = (num, array = [0,1]) => {
    let copy = array.slice();
    if(num <= 2) return copy;
    copy.push(copy[copy.length - 2] + copy[copy.length -1]);
    return recursiveFibonacci(num-1, copy);
};

// console.log(recursiveFibonacci(8));

// Efoque recursivo, solución sin entregar arreglo
const fibonacciRecNoArrray = (num) => {
    if(num <= 1) return 0;
    if(num === 2) return 1; // Acá num es 0 ó 1.
    return fibonacciRecNoArrray(num-1) + fibonacciRecNoArrray(num-2);
};

//console.log(fibonacciRecNoArrray(8) + ' No Array')

// Efoque recursivo, segunda solución
const fibonacciRec = (n) => {
    return n === 1 ? [0] : 
    n === 2 ? [0, 1] : 
    [...fibonacciRec(n-1), fibonacciRec(n-1)[n-2]+fibonacciRec(n-1)[n-3]];
    
}

 //console.log(fibonacciRec(8));




 //---- Problema 2 Merge Sort
 const mergeSort = (array) => {
    if(array.length <= 1) return array;
    let result = [];

    let firstHalf = array.slice(0, Math.ceil(array.length/2));
    let secondHalf = array.slice(Math.ceil(array.length/2));

    if(firstHalf.length >= 2){
        firstHalf = mergeSort(firstHalf);
    };

    if(secondHalf.length >= 2){
        secondHalf = mergeSort(secondHalf);
    };

    if(firstHalf.length === 1 && secondHalf.length === 1){
        if(firstHalf[0] <= secondHalf[0]){
            return [...firstHalf, ...secondHalf];
        } else {
            return [...secondHalf, ...firstHalf];
        }
    };

    let continueLoop = true;
    while(continueLoop){
        if(firstHalf[0] < secondHalf[0]){
            result.push(firstHalf.shift());
        } else if(firstHalf[0] > secondHalf[0]){
            result.push(secondHalf.shift());
        } else if(firstHalf[0] === secondHalf[0]){
            result.push(firstHalf.shift());
            result.push(secondHalf.shift());
        }
        if(firstHalf.length === 0 && secondHalf.length>0){
            result = [...result, ...secondHalf];
            continueLoop = false;
        } else if(firstHalf.length > 0 && secondHalf.length === 0){
            result = [...result, ...firstHalf];
            continueLoop = false;
        } else if(firstHalf.length === 0 && secondHalf.length === 0){
            continueLoop = false;
        }
    };

    return result;
 }

console.log(mergeSort([3,3,5,100,6,10,11,-1000,0,498,500,3,302,-129]));
console.log(mergeSort([1,5,3,7,2]));