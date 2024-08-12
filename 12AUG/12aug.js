

const Numbers = [1,2,3,4,5,6,7,8,9,11]


//Find Maximum Number from array of Numbers 
let maxNum =0;
function findMaxNum(Arr){
 
    for(let i=0;i<=Arr.length-1;i++){
          if(Arr[i]>maxNum){
               maxNum = Arr[i]
          }
    }
    console.log("maxNum",maxNum)

    return maxNum;
}

 findMaxNum(Numbers);
console.log("maxNumFromGivenArray",findMaxNum(Numbers))


const numArrDisplay=

document.getElementById('numberArray').innerHTML = Numbers;

document.getElementById('findMaxNum').addEventListener('click',()=>{
    findMaxNum(Numbers);
    document.getElementById('maxNum').innerHTML=maxNum;

})