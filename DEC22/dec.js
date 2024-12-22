
/////////////////////////////////////////////DEC 22 //////////////////////////////////////

STUDENTS= 
    {
        "name": "Alice",
        "marks": {
            "Math": 85,
            "Science": 92,
            "English": 78
        }
    }

let copiedObj = [];
let isCopyCreated = false;
let sampleData = JSON.stringify(STUDENTS,null,2);
let output = JSON.stringify(copiedObj,null,2);


toggleButtonVisibility();
document.getElementById('json-display').textContent = sampleData;


document.getElementById('spread').onclick = function (){
    copiedObj= {...STUDENTS}
    output = JSON.stringify(copiedObj, null, 2);
    document.getElementById('output').textContent = output;
    isCopyCreated = true;
    toggleButtonVisibility();
}

document.getElementById('assign').onclick = function (){
    console.log("In Assign")
    copiedObj= Object.assign({},STUDENTS);
    console.log("copiedObj in assign",copiedObj)

    output = JSON.stringify(copiedObj, null, 2);
    document.getElementById('output').textContent = output;
    isCopyCreated = true;
    toggleButtonVisibility();
}



document.getElementById('slice').onclick = function (){
    console.log("In slice")
    copiedObj= Array.prototype.slice.call(STUDENTS);
    console.log("copiedObj in slice",copiedObj)

    output = JSON.stringify(copiedObj, null, 2);
    document.getElementById('output').textContent = output;
    isCopyCreated = true;
    toggleButtonVisibility();
}

document.getElementById('concat').onclick = function (){
    console.log("In concat")
    copiedObj= Array.prototype.concat.call(STUDENTS);
    console.log("copiedObj in concat",copiedObj)

    output = JSON.stringify(copiedObj, null, 2);
    document.getElementById('output').textContent = output;
    isCopyCreated = true;
    toggleButtonVisibility();
}


document.getElementById('from').onclick = function (){
    console.log("In from")
    copiedObj= Array.from(STUDENTS);
    console.log("copiedObj in from",copiedObj)

    output = JSON.stringify(copiedObj, null, 2);
    document.getElementById('output').textContent = output;
    isCopyCreated = true;
    toggleButtonVisibility();
}




document.getElementById('change-mark-btn').onclick = function  (){ 
copiedObj.marks.Math = 100;
sampleData = JSON.stringify(STUDENTS, null, 2);
output = JSON.stringify(copiedObj, null, 2);

document.getElementById('output').textContent = output
document.getElementById('json-display').textContent = sampleData;
isCopyCreated = false;
toggleButtonVisibility();
}


document.getElementById('change-name-btn').onclick = function  (){ 
    copiedObj.name = "Anant";
    output = JSON.stringify(copiedObj, null, 2);
    document.getElementById('output').textContent = output
    sampleData = JSON.stringify(STUDENTS, null, 2);
    document.getElementById('json-display').textContent = sampleData;
    // isCopyCreated = false;
    // toggleButtonVisibility();
    }
    

function toggleButtonVisibility(){
    let changeMarkButton = document.getElementById('change-mark-btn');
    let changeNameButton = document.getElementById('change-name-btn');


    if (isCopyCreated) {
        changeMarkButton.style.display = 'block'; 
        changeNameButton.style.display = 'block'; 
    } else {
        changeMarkButton.style.display = 'none';  
        changeNameButton.style.display = 'none';  
    }


}