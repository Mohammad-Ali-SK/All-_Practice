let score = 0;
let hitNum = 0;
function makeBuble(){
    let culter = ' ';
    for(let i = 0; i<=215; i++){
        let randomNum = Math.floor(Math.random() * 10);
        culter += `<div class="bubble">${randomNum}</div>`
    };
    document.querySelector('.pan-btn').innerHTML = culter;
};

function time(){
    let time = 9;
    let timer = setInterval((e) => {
        if(time > 0){
            time--;
        document.querySelector('.time').textContent = time;
        }else{
            clearInterval(timer);
            document.querySelector('.pan-btn').innerHTML =`<div>Your Scrore is ${score}</div>` ;
        }
    },1000)
}

function ChHit(){
    hitNum = Math.floor(Math.random() * 10);
    document.querySelector('.hit').textContent = hitNum;
}
function scoreP(){
    score += 10;
    document.querySelector('.scor').textContent = score;
}
let panBtn = document.querySelector('.pan-btn');
panBtn.addEventListener('click',(e) => {
   let bubble = Number(e.target.textContent);
   if(bubble === hitNum){
    scoreP()
    ChHit();
    makeBuble();
   }
})

time();
makeBuble();
ChHit();
// scoreP();