MainMenu();
function Game() {
Menu();
let inp = prompt("Enter your Choice");
inp = Number.parseInt(inp);
  Play(inp);
function Random() {
  let a = "rock";
  let b = "paper";
  let c = "Scissors";
  let ans = Math.floor(Math.random() * 3);
  if (ans === 0)
    return a;
  else if (ans === 1)
    return b;
  else if (ans === 2)
    return c;
}
function Menu() {
  console.log("0 for \"rock\" ");
  console.log("1 for \"Paper\" ");
  console.log("2 for \"Scissors\" ");
}
function input(temp) {
  if (temp === 0)
    return "rock";
  else if (temp === 1)
    return "paper";
  else if (temp === 2)
    return "Scissors";
}
function Play(inp,count) {
  let temp = inp;
  let item = Random();
  let ans = input(temp);
  if (item === ans)
  {
    console.log("System: " + item);
    console.log("Input: " + ans);
    console.log("Draw \n");
  } 
  else if (item === "rock" && ans === "paper") 
  {
    console.log("System: " + item);
    console.log("Input: " + ans);
    console.log("You won :)\n");
  }
  else if (ans === "rock" && item === "paper")
  {
    console.log("System: " + item);
    console.log("Input: " + ans);
    console.log("You lose :(\n");
  } 
  else if (item === "Scissors" && ans === "paper") 
  {
    console.log("System: " + item);
    console.log("Input: " + ans);
    console.log("You lose :(\n");
  } 
  else if (ans === "Scissors" && item === "paper")
  {
    console.log("System: " + item);
    console.log("Input: " + ans);
    console.log("You won :)\n");
  } 
  else if (item === "rock" && ans === "Scissors")
  {
    console.log("System: " + item);
    console.log("Input: " + ans);
    console.log("You lose :(\n");
  } 
  else if (ans === "rock" && item === "Scissors")
  {
    console.log("System: " + item);
    console.log("Input: " + ans);
    console.log("You won :)\n");
  }
}
  MainMenu();
}
function MainMenu(){
  console.log("1. Play Game");
  console.log("2. Exit");
  let ch = prompt("Enter your Choice");
ch = Number.parseInt(ch);
if(ch!=2)
  {
    Game();
  }
else
  console.log("Thanks  for  playing :)");
}