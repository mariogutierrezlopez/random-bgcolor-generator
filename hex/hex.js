const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const change = document.getElementById('change');
const color = document.querySelector(".color");
const title = document.getElementById('title');
const copy = document.getElementById('copy');
const command = document.getElementById('command');
change.addEventListener('click', function(){ 
    let hexColor = '#'; 
    for(let i = 0; i < 6; i++){ 
        hexColor += hex[Math.floor(Math.random()*hex.length)];
    }
    document.body.style.backgroundColor = hexColor; 
    color.textContent = hexColor;
    title.style.color = hexColor;
});

copy.addEventListener('click', function(){
    alert('Property has been copied to clipboard')
    navigator.clipboard.writeText(command.textContent);
})