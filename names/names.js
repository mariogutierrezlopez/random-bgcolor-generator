const change = document.getElementById('change');
const color = document.querySelector(".color");
const title = document.getElementById('title');
const copy = document.getElementById('copy');
const command = document.getElementById('command');

async function getColors(){
    const response = await fetch('./names.json');
    const data = await response.json();
    let colorInfo = data[Math.floor(Math.random()*data.length)];
    document.body.style.backgroundColor = colorInfo;
    color.textContent = colorInfo;
    title.style.color = colorInfo;
}

change.addEventListener('click', function(){
    getColors();
})

copy.addEventListener('click', function(){
    alert('Property has been copied to clipboard');
    navigator.clipboard.writeText(command.textContent);
})