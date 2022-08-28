//Alt + z to see full width of the document || Code and coments made by mariogutierrezlopez


const copy = document.getElementById('copy'); //Declaring copy button
const command = document.getElementById('command'); //Declaring h2 content to copy it later with copy button
const inputField = document.getElementById('color-input'); //Declaring copy input so we can get the value for the copy button
const test = document.getElementById('test'); //Declaring test button
const body = document.querySelector('body'); //Declaring body of webpage so we can change the style of it later
const title = document.getElementById('title'); //Declaring title of webpage so we can change the style of it later

//Listener for copy button --> Copies the command "background-color: {color};" to your clipboard
copy.addEventListener('click', function(){
    try{
        //Copying line
        navigator.clipboard.writeText(command.textContent.slice(0,-1) + inputField.value + ";");
        //Alert that displays in your browser
        alert('property copied to clipboard');
    }catch{
        //Error solution: alert that sais it wasn't posible
        alert("Couln't copy protery to clipboard");
    };
})

//Listener for test button --> Changes the background-color for whatever you have introduced in inputField variable
test.addEventListener('click',function(){
    try{
        //Changing background-color for the body of the page
        body.style.backgroundColor = inputField.value;
        //Changing color for the title of the page
        title.style.color = inputField.value;
    }catch{
        //Error solution: alert that sais it wasn't posible
        console.log('Error, color is not in a valid format');
    }
});