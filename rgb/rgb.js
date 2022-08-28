//Alt + z to see full width of the document || Code and coments made by mariogutierrezlopez

const change = document.getElementById('change'); //Declaring the change background to generate a new random background-color
const color = document.querySelector('.color'); //Declaring the <span> so we can change the textContent depending on the background-color
const copy = document.getElementById('copy'); //Declaring copy button to your clipboard
const command = document.getElementById('command'); //Declaring the <h2> line that will be copied to your copied
const title = document.getElementById('title'); //Declaring the title of the webpage to change the style

//Listener for the change button that generates a new random background-color color
change.addEventListener('click', function(){
    let hexColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})` //String variable with a rgb css function that gets random values between [0-255] --> example: rgb(0,128,255);
    title.style.color = hexColor; //Sets the color of the title
    document.body.style.backgroundColor = hexColor; //Sets the background-color of the body
    color.textContent = hexColor; //Sets the textContent of the <span>
})

//Listener for the copy button that copies the css command into your clipboard
copy.addEventListener('click', function(){
    try{
        //Copying line
        navigator.clipboard.writeText(command.textContent);
        //Changing color for the title of the page
        alert('Property has been copied to clipboard');
    }catch{
        //Error solution: alert that sais it wasn't posible
        console.log('Error, color is not in a valid format');
    }
})