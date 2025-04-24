
function getUserNameFromEmail(email){
    return (email.slice(0,email.indexOf("@")));
}

console.log(getUserNameFromEmail("hafsa22@gmail.com"));
console.log(getUserNameFromEmail("hafsaashari22@gmail.com"));;