//Array with all the posible letters of hex colors (0-f)
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

//declaring the button por following js code
const btn = document.getElementById('btn');
//declaring the text in span for following js code
const color = document.querySelector(".color"); 

//function that is running when clicking the button
btn.addEventListener('click', function(){ 

    //starting hex string with #
    let hexColor = '#'; 
    //loop that adds 6 random characters from hex array to the hex color string
    for(let i = 0; i < 6; i++){ 
        hexColor += hex[Math.floor(Math.random()*hex.length)];
    }
    //setting this string to bg
    //setting this string to string in span
    document.body.style.backgroundColor = hexColor; 
    color.textContent = hexColor; 

});