let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turnO = true;

const winPattrens = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8], 
];

let resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
 box.addEventListener("click", () => {
    console.log("box was clicked");
    if(turnO)
    {
        box.innerText = "O";
        turnO = false;
    }else{
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;
    checkWinner();
 });
});

let disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

let enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulation, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const showDraw = () =>{
    msg.innerText = `Draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    let winnerFound = false;

   for(let pattern of winPattrens ){
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            winnerFound = true;
            showWinner(pos1Val);
           
        }
    }
    
   }
   
   let filledBoxes = 0;

    for (let box of boxes) {
        if (box.innerText !== "") {
            filledBoxes++;
        }
    }

    if (filledBoxes === 9 && !winnerFound) {
        showDraw();
    }

};
 

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click", resetGame);



