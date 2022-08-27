const change = document.getElementById('change');
const color = document.querySelector('.color');
const copy = document.getElementById('copy');
const command = document.getElementById('command');
const title = document.getElementById('title');
change.addEventListener('click', function(){
    let hexColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
    title.style.color = hexColor;
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})

copy.addEventListener('click', function(){
    alert('Property has been copied to clipboard');
    navigator.clipboard.writeText(command.textContent);
})