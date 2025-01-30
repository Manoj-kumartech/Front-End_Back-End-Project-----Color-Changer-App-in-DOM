const btn = document.getElementById("button");

//"Arrow Function" For Random Color
const randomColor = () => {
  let varVal = "0123456789ABCDEF";
  let constVal = "#";
  for (let i = 0; i < 6; i++) {
    constVal = constVal + varVal[Math.floor(Math.random() * 16)];
  }
  return constVal;
};

//Calls "randomColor Function"
console.log(randomColor());

//Function For "changeRandomColor"
function changeRandomColor() {
  document.body.style.backgroundColor = randomColor();
}

btn.addEventListener("click", changeRandomColor);