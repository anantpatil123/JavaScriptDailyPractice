

let numbers=[1,1,2,3,3,4,5,5,6,7,7];

function findDuplicates(arr){
    let unique = new Set ();
    let duplicates = new Set();
{
    for(i=0;i < arr.length;i++){
        if(unique.has(arr[i])){
           duplicates.add(arr[i]);
        }else{
           unique.add(arr[i])
        }
    }}
    console.log(Array.from(unique))
    return Array.from(duplicates);
}



const duplicates= console.log("duplicates",findDuplicates(numbers))

console.log(duplicates);