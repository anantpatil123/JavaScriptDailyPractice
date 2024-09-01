//Find max number from array of numbers

const Numbers= [1,3,4,6,7,8,12,14,15,2,12,4,3]


function findMaxNum(numbers){
    let maxNum =0;
    for(let i=0; i<numbers.length;i++){
        if(numbers[i]>maxNum){
            maxNum=numbers[i];
        }
    }
    return maxNum;
}

// findMaxNum(Numbers);
const maxNum = Math.max(...Numbers)
console.log("maxNum",maxNum)

console.log("findMaxNum",findMaxNum(Numbers))


// Find and remove max number from array of numbers

function removeMaxNum(numbers){
    let maxNum =0;
    let maxNumIndex=0
    for(let i=0; i<numbers.length;i++){
        if(numbers[i]>maxNum){
            maxNum=numbers[i];
            maxNumIndex= i;
        }
       
    }
//    numbers.splice(maxNumIndex,1);
//    return numbers
 return numbers.filter(num=>num !==maxNum);
}

console.log("Removed max Num",removeMaxNum(Numbers))


// Find duplicate number from array

//using For loops
function findDuplicateNumbers(numbers){ 
duplicates=[]
    for(let i=0; i<numbers.length;i++){
        for(let j=i+1;j<numbers.length;j++){
            if(numbers[i]===numbers[j] && !duplicates.includes(numbers[i]) ){
                duplicates.push(numbers[i]);
                break;
            }
        }
    }
    return duplicates;
}

let duplicateNumbers=findDuplicateNumbers(Numbers);

n 

console.log("duplicateNumbers",duplicateNumbers)


let flatnum = [1,[34,54],[12,61,32,[35,6]],2] 

function flattenarr(flatnum){
   let flattened =[]
   
   function flatten(flatnum){
       for(var i =0; i < flatnum.length; i++){
           if(Array.isArray(flatnum[i])){
               flatten(flatnum[i]);
           }else{
               flattened.push(flatnum[i])
           }
       }
   }
   return flattened;
}

flatten(flatnum);
console.log(flattenarr(flatnum))