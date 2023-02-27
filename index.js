const buttons = document.querySelectorAll("button");
const screen = document.querySelector("#result");
const spanElements = document.querySelectorAll('span');

let realNum = "";
let otherNum = "";
let operator = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent === "C"){
            screen.textContent = "0";
            realNum = "";
            otherNum = "";
            operator = "";
            removeSelect();
          
        } else if (button.className === "num"){
            if (realNum.length < 15){
                realNum += button.textContent;
                screen.textContent = Number(realNum).toLocaleString();
            }

        } else if (button.className === "operator"){
            operator = button.textContent;
            otherNum = realNum;
            realNum = "";
            select(operator);

        } else if (button.className === "eq"){
            if (operator != "" && operator === "+"){
                screen.textContent = (Number(realNum) + Number(otherNum)).toLocaleString();
            } else if (operator != "" && operator === "-"){
                screen.textContent = (Number(otherNum) - Number(realNum)).toLocaleString();
            } else if (operator != "" && operator === "x"){
                screen.textContent = (Number(realNum) * Number(otherNum)).toLocaleString();
            } else if (operator != "" && operator === "/"){
                screen.textContent = (Number(otherNum) / Number(realNum)).toLocaleString();
            }       
            otherNum = "";
            operator = "";
            removeSelect();
        }
    })
})

function select(op){
    for (let i = 0; i < spanElements.length; i++) {
        const spanText = spanElements[i].innerText;

        if (spanText.includes(op)) {
            const spanWithText = spanElements[i];
            spanWithText.classList.add('selected');
            
            for (let j = 0; j < spanElements.length; j++) {
                if (i !== j) {
                    spanElements[j].classList.remove('selected');
                }
            }
            break; 
        }
      } 
}

function removeSelect(){
    for (let i = 0; i < spanElements.length; i++) {
        spanElements[i].classList.remove('selected');
    }
}