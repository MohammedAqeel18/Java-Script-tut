//IF statments

let firstyear= false;
let student = "Internship";
let reply;
let lesson = false;

if (firstyear){
    reply = "You are in your first year of study";
}


else if (student && lesson){
    reply = `Enjoy your ${student} and lecture notes`;
}

else if (student){
    reply=`Enjoy${studnet}`;
}

else {
    reply = "You are not a student";
}
console.log(reply);