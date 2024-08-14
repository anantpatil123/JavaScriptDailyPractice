

let promise1= new Promise ((myResolve,myReject)=>{

    const success = true;

setTimeout(()=>{
    if (success){
        myResolve("Resolved");
    }else {
        myReject("Rejected")
    }
},4000)
 
});

promise1.then((message)=>{
    console.log(message); 
}).
catch((error)=>{
    console.log(error); 
});


