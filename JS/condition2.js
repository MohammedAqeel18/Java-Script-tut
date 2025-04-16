let testScore =33;
let grade 
let unisStudent = true;


if (testScore>=90){
    grade="A";
}

else
if(testScore>=80){
    grade="B";
}

else 
if(testScore>=70){
    grade="c";
}

else if(testScore>=60){
    grade="D";

}


    else if(testScore<=40 && unisStudent)
        grade ="Fail with resit";
    
  else{
    grade="fail";
}
console.log(grade)