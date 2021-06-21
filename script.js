const msgBtn = document.getElementById('msgbtn') 
const altBtn = document.getElementById('altbtn') 
const msgBox =  document.getElementById('msgbox') 
const altBox =  document.getElementById('altbox') 
let timer = null;

const  setTimer = ( target ) => {
     timer = setTimeout(() => {
        target.classList.toggle("hidden");
    }, 2000);
}

altBtn.addEventListener("click", () => {
    altBox.classList.toggle("hidden");
    setTimer(altBox)
});

msgBtn.addEventListener("click", () => {
    msgBox.classList.toggle("hidden");  
    setTimer(msgBox)
});

msgBox.addEventListener("mouseenter", () => {
    clearTimeout(timer);
});

msgBox.addEventListener("mouseout", () => {
    setTimer(msgBox)
});

altBox.addEventListener("mouseenter", () => {
    clearTimeout(timer);
});

altBox.addEventListener("mouseout", () => {
    setTimer(altBox)
});