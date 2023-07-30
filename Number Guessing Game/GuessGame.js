Menu();
function GuessGame() {
  let  num = RandomNumber();
let  input = prompt("Guss a number from 1 to 10");
input = Number.parseInt(input);
if(input == num)
{
  console.log("your guess Number is",+num);
  console.log("You Won")
}
else if(input < num)
{
  console.log("your guess Number is",+num);
  console.log("Oops! your guess Number is less than the Random number");
}
else if (input > num) {
  console.log("your guess Number is",+num);
console.log("Oops! your guess Number is greater than the Random Number");
}
else{
  console.log("Invalid Number");
}
  Menu();
}

function Menu() {
  console.log("GuessGame\n");
  console.log("1.Play");
  console.log("-1.Exit");
  let ch = prompt("Enter your Choice");
ch = Number.parseInt(ch);
if (ch!=-1) {
GuessGame();
}
else{
  console.log("Thanks for playing");
}  
}
function RandomNumber(rndNum) {
 return rndNum = Math.floor(Math.random()*11);
}
