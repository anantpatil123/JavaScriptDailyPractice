

// star pattern problem

// function starAsending(number){
//     for(let i=1; i<=number;i++){
//         console.log("*".repeat(i));
//     }
// }

// starAsending(5);


// function starDiamond(number) {
//     // Top half of the diamond
//     for (let i = 1; i <= number; i++) {
//         console.log(" ".repeat(number - i) + "*".repeat(2 * i - 1));
//     }

//     for (let i = number - 1; i >= 1; i--) {
//         console.log(" ".repeat(number - i) + "*".repeat(2 * i - 1));
//     }


// }


// starDiamond(5);


// Find given string or number is palindrome

// function isPalindrome(input){
//    let inputString= input.toString();
//    let ReverseString= inputString.toLowerCase().split('').reverse().join('');
//       console.log("ReverseString",ReverseString)

//    return inputString === ReverseString
// }
// // isPalindrome(121);

// console.log("isPalindrome",isPalindrome("aanntnnaa"))


// numbers=[1,2,3,4,5,6];

// function sumOfArrayElements(arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum = sum + arr[i]
//     }
//     return sum;
// }

// const usingReduce = numbers.reduce((accu,current)=>accu +current,0 )

// console.log("sumOfArrayElements",sumOfArrayElements(numbers),usingReduce)


function generateFibonassiSeries(input){
    let first =0 ; let second=1;
    fibonassiArr=[]

   for(let i=1; i<=input;i++){
    fibonassiArr.push(first);
        let nextTerm = first+ second;
    first = second;
    second =nextTerm;
   }
   return fibonassiArr;

}

console.log("generateFibonassiSeries",generateFibonassiSeries(10))
