let player = "rock";
let computer= "scissors"; 

let result = player === computer ? "It's a tie!" : player === "rock" && computer === "scissors" ? "You win!" : player === "scissors" && computer === "paper" ? "You win!" : player === "paper" && computer === "rock" ? "You win!" : "You lose!";