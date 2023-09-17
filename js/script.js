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