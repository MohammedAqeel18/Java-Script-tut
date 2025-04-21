let my = prompt("Enter your name: ");
if (my) {
    console.log(my?? "please enter your name"); //nullish coalescing operator

}else{
    console.log("please enter your name"); //nullish coalescing operator
}
console.log(my.trim().length);
//?? is used to check if the value is null or undefined, if it is, it will return the value after ??, otherwise it will return the value before ??
//here iam using conditional operator to check if the value is null or undefined, if it is, it will return the value after ??, otherwise it will return the value before ??
