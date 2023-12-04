//TODO:list of possible reps; ibs variant; darkmode;

//variables of elements
const weightInput = document.getElementById("weight");
const repsInput = document.getElementById("reps");
const calcButton = document.getElementById("calc");
const para = document.getElementById("para");
const kg = document.getElementById("index");
const count = document.getElementById("count");

//main event listener
calcButton.addEventListener('click',()=>{
  //checking if value of input valley isn't empty or negative
   if(weightInput.value !== "" && repsInput.value !== "" && weightInput.value > 0 && repsInput.value > 0){
        //main logic of calculator
        const answer = (repsInput.value / 30 + 1) * weightInput.value;
        para.textContent = Math.round(answer);
        kg.textContent = "Kg";
        count.textContent = "x1"
        weightInput.value = "";
        repsInput.value = "";
        weightInput.classList.remove("active");
        repsInput.classList.remove("active");

        //adding active status if numbers from input are empty or negative
   }else {
     if (weightInput.value === "" || weightInput.value < 0) {
         weightInput.classList.add("active");
     } else {
         weightInput.classList.remove("active");
     }
     if (repsInput.value === "" || repsInput.value < 0) {
         repsInput.classList.add("active");
     } else {
         repsInput.classList.remove("active");
     }
}
});

//removing active status if all statements are true
weightInput.addEventListener('input', () => {
  weightInput.classList.remove("active");
});
repsInput.addEventListener('input', () => {
  repsInput.classList.remove("active");
});

//input valley restriction for only 3 number
weightInput.addEventListener('input', () => {
  if (weightInput.value.length > 3) {
      weightInput.value = weightInput.value.slice(0, 3);
  }
});
repsInput.addEventListener('input', () => {
  if (repsInput.value.length > 3) {
      repsInput.value = repsInput.value.slice(0, 3);
  }
});

/*  happy new year!  

        2024
         A
        /=\               /\  /\    ___  _ __  _ __ __    __
      i/ O \i            /  \/  \  / _ \| '__|| '__|\ \  / /
      /=====\           / /\  /\ \|  __/| |   | |    \ \/ /
      /  i  \           \_\ \/ /_/ \___/|_|   |_|     \  /
    i/ O * O \i                                       / /
    /=========\        __  __                        /_/    _
    /  *   *  \        \ \/ /        /\  /\    __ _  ____  | |
  i/ O   i   O \i       \  /   __   /  \/  \  / _` |/ ___\ |_|
  /=============\       /  \  |__| / /\  /\ \| (_| |\___ \  _
  /  O   i   O  \      /_/\_\      \ \ \/ / / \__,_|\____/ |_|
i/ *   O   O   * \i
/=================\
       |___|

last edit: 04.12.2023
*/
