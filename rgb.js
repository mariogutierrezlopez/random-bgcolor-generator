const button = document.getElementById('btn');
const color = document.querySelector('.color');

button.addEventListener('click', function(){
    let hexColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`

    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})