const content = document.getElementById('content');
const speedEl = document.getElementById('speed');

console.log(content);

const text = "I am a computer engineering and front-end developer";

let idx = 1;
let speed = 300;

function writeText(){
    content.innerText = text.slice(0, idx)
    idx++;

    if(idx > text.length){
        idx = 1;
    }

    setTimeout(writeText, speed);

};

writeText();


speedEl.addEventListener('input', e => (speed = 300/ e.target.value));