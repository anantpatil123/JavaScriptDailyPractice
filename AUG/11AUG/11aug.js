

function onButtonClick(){

    console.log("Button Clicked")
}

let count = 0;

document.getElementById('CounterIncrement').addEventListener('click',()=>{
    count++;
    countervalue.innerHTML = count;
})

document.getElementById('CounterDecrement').addEventListener('click',()=>{
    count--;
    countervalue.innerHTML = count;
})