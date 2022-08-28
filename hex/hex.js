//Alt + z to see full width of the document || Code and coments made by mariogutierrezlopez

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']; //array with all the posible values an hex character can get
const change = document.getElementById('change'); //Declaring the change background to generate a new random background-color
const color = document.querySelector(".color"); //Declaring the <span> so we can change the textContent depending on the background-color
const title = document.getElementById('title'); //Declaring the title of the webpage to change the style
const copy = document.getElementById('copy'); //Declaring copy button to your clipboard
const command = document.getElementById('command'); //Declaring the <h2> line that will be copied to your copied

//Listener for the change button that generates a new random background-color color
change.addEventListener('click', function(){ 
    let hexColor = '#'; //String that will store the random generated value
    for(let i = 0; i < 6; i++){  //loop that adds 6 random characters from the hex array
        hexColor += hex[Math.floor(Math.random()*hex.length)];
    }
    document.body.style.backgroundColor = hexColor; //Seting background-color of the body
    color.textContent = hexColor; //Sets the value of the <span> depending on the color
    title.style.color = hexColor;  //Sets the color of the title
});

//Listener for the copy button that copies the css command into your clipboard
copy.addEventListener('click', function(){
    alert('Property has been copied to clipboard')
    navigator.clipboard.writeText(command.textContent);
})