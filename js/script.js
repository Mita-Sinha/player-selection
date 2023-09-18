//=================== set the player name ==================== 
function selectButton(buttonId) {
    const playerName = document.getElementById(buttonId + '-player-name').innerText;
    const playerContainer = document.getElementById('player-container');
 
    //=============== disable button =============
    document.getElementById(buttonId).disabled = true;
    document.getElementById(buttonId).classList.replace('hover:bg-blue-700','disabled:opacity-40');
    let player = document.getElementsByClassName('li');
    const playerLength = player.length;
 
    //================= select five players only=================
    if (playerLength < 5) {
       const li = document.createElement('li');
       li.classList.add('li');
       li.innerText = playerName;
       playerContainer.appendChild(li);
    } 
    else {
       alert('You can select five players only');
    }
 }


 //================== calculate per player expense ============== 
document.getElementById('calculate').addEventListener('click', function () {
    const playerExpense = document.getElementById('player-expense');
    const playerContainer = document.getElementsByClassName('li');
    const perPlayerById = document.getElementById('per-player');
    const perPlayerString = perPlayerById.value;
    const perPlayerValue = parseInt(perPlayerString);
    const numberValue = validationNumber(perPlayerValue);
    if (numberValue === true) {
       playerExpense.innerText = perPlayerValue * playerContainer.length;
    } else {
       alert('Enter positive Number');
       playerExpense.innerText = '00';
    }
 })


//===== get all the manager and coach expenses and calculate total======
document.getElementById('calculate-total').addEventListener('click', function () {
    const playerExpense = document.getElementById('player-expense').innerText;
    const displayTotalById = document.getElementById('displayTotal');
    const managerValue = calculateTotal('manager');
    const coachValue = calculateTotal('coach');

    // check number of manager and coach for negative value
    if (managerValue < 0 || coachValue < 0) {
       alert('Enter positive Number');
       displayTotalById.innerText = '00';
    } else if (isNaN(managerValue) || isNaN(coachValue)) {
       alert('Enter positive Number');
       displayTotalById.innerText = '00';
    } else {
       const totalValue = parseInt(playerExpense) + managerValue + coachValue;
       displayTotalById.innerText = totalValue;
    }
 });

//================ validation Number ===========
function validationNumber(number) {
   if (number < 0) {
      return false;
   } else if (isNaN(number)) {
      return false;
   } else {
      return true;
   }
}

//================common funtion get the value of manager & coach =============
function calculateTotal(inputId) {
 const getTextValueById = document.getElementById(inputId);
 const text = getTextValueById.value;
 const textValue = parseInt(text);
 return textValue;
}





