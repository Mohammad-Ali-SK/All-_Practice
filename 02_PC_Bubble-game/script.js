var randomNum = 0;
var score = 0;
function makeBubble(){
    let culter = '';
    for(let i = 0; i<=206; i++){
        let ranNum = Math.floor(Math.random() * 10);
        culter += `<div class="bubble">${ranNum}</div>`;
    }
    document.querySelector('.pan-btn').innerHTML = culter;  
};
function timeSet(){
    let time = 3;
   let timer = setInterval((e) => {
        if(time > 0){
            time--;
            document.querySelector('.time').textContent = time;
        }else{
            clearInterval(timer);
            document.querySelector('.pan-btn').innerHTML = `<h1 class='over'>Game Over</h1>`;
            document.querySelector('.hit').textContent = `Done`;
            
            // clearInterval(hit);
        }
    },1000)
}
function hit(){
    randomNum = Math.floor(Math.random() * 10);
    document.querySelector('.hit').textContent = randomNum;
}
function scoreAdd(){
    score += 10;
    document.querySelector('.score').textContent = score;
}

function selectBubble(){
    document.querySelector('.pan-btn').addEventListener('click', (details) => {
        let bubble = Number(details.target.textContent);
        if(bubble === randomNum){
            scoreAdd();
            makeBubble();
            hit();
        }
    })
}




makeBubble();
timeSet();
hit(); 
selectBubble();



