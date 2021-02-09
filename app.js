const optionsWrapper = document.querySelector(".img-container");
const playerValueEl = document.querySelector(".player-value");
const cpuValueEl = document.querySelector(".cpu-value");
const outcomeEl = document.querySelector(".outcome");

let playerOption = "";
let cpuOption = "";


  const gameOutcome = (cpu,player)=> {
    if(cpu === player){outcomeEl.innerText = "It's a tie!!!"}
    else if(cpu === "Paper" && player === "Rock" ||
        cpu === "Scissors" && player === "Paper"||
        cpu === "Rock" && player === "Scissors") { outcomeEl.innerText = "Cpu Wins!!!"}
        else { outcomeEl.innerText = "Player wins!!!"}
 };

 const cpuPick = () => {
   let rand = Math.random();
   if(rand < 0.33){cpuOption = "Rock"}
   else if (rand >0.33 && rand < 0.66) {cpuOption="Paper"}
   else {cpuOption = "Scissors"};
  cpuValueEl.innerText = cpuOption;
 }

optionsWrapper.addEventListener("click",((e)=>{
  if(!e.target.classList.contains("far")) return;
  playerOption = e.target.classList[0];
  playerValueEl.innerText = playerOption;
  cpuPick();
   outcomeEl.innerText="";
  setTimeout(()=>{
     gameOutcome(cpuOption,playerOption)},1000);
 }
));
