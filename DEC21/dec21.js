STUDENTS= [
    {
        "name": "Alice",
        "marks": {
            "Math": 85,
            "Science": 92,
            "English": 78
        }
    },
    {
        "name": "Bob",
        "marks": {
            "Math": 70,
            "Science": 88,
            "English": 82
        }
    },
    {
        "name": "Charlie",
        "marks": {
            "Math": 95,
            "Science": 90,
            "English": 85
        }
    },
    {
        "name": "Diana",
        "marks": {
            "Math": 60,
            "Science": 75,
            "English": 80
        }
    },
    {
        "name": "Ethan",
        "marks": {
            "Math": 88,
            "Science": 84,
            "English": 91
        }
    }
]

 function findTheRanker(){
    //  return STUDENTS.reduce( (max,student)=>(student?.marks?.Math) > (max?.marks?.Math) ? student : max ,STUDENTS[0])
     let rankerStudent = STUDENTS[0]
     STUDENTS.forEach(student => {
            if(rankerStudent.marks.Math < student.marks.Math){
                rankerStudent =student
            }
        
    });
   return  rankerStudent;
}
console.log("ranker",findTheRanker());

// const STUDENTS2 = [
//     { name: "Alice", mark: 10 },
//     { name: "Bob", mark: 20 },
//     { name: "Charlie", mark: 40 },
//     { name: "Diana", mark: 50 },
//     { name: "Ethan", mark: 60 }
// ];



// function calculateTotalMarks(){
//     return STUDENTS2.reduce((total, student)=>{
//         return total+ student.mark;
//     },0)
// }

// console.log("Total Marks", calculateTotalMarks())
