//Alt + z to see full width of the document || Code and coments made by mariogutierrezlopez

const change = document.getElementById('change'); //Declaring the change background to generate a new random background-color
const color = document.querySelector(".color"); //Declaring the <span> so we can change the textContent depending on the background-color
const title = document.getElementById('title'); //Declaring the title of the webpage to change the style
const copy = document.getElementById('copy'); //Declaring copy button to your clipboard
const command = document.getElementById('command'); //Declaring the <h2> line that will be copied to your copied

/**
 * Async function that reads "names.json" and converts it into data variable.
 * names.json has an array with all the posible css names avaliable
 * Then generates a new random number between the ranges of the data array and creates colorInfo as the string of the name of the variable
 * 
 */
async function getColors(){
    const response = await fetch('./names.json'); //Reads the names.json file
    const data = await response.json(); //data is an array with the values of names.json
    let colorInfo = data[Math.floor(Math.random()*data.length)]; //String with the name of the color
    document.body.style.backgroundColor = colorInfo; //Seting background-color of the body
    color.textContent = colorInfo; //Sets the value of the <span> depending on the color
    title.style.color = colorInfo; //Sets the color of the title
}

//Listener for the change button that generates a new random background-color color
change.addEventListener('click', function(){
    getColors();
})

//Listener for the copy button that copies the css command into your clipboard
copy.addEventListener('click', function(){
    alert('Property has been copied to clipboard');
    navigator.clipboard.writeText(command.textContent);
})