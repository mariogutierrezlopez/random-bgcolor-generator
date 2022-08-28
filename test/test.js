const copy = document.getElementById('copy');
const command = document.getElementById('command');
const inputField = document.getElementById('color-input');
const test = document.getElementById('test');
const body = document.querySelector('body');
const title = document.getElementById('title');
copy.addEventListener('click', function(){
    try{
        navigator.clipboard.writeText(command.textContent.slice(0,-1) + inputField.value + ";");
        alert('property copied to clipboard');
    }catch{
        alert("Couln't copy protery to clipboard");
    };
})

test.addEventListener('click',function(){
    try{
        body.style.backgroundColor = inputField.value;
        title.style.color = inputField.value;
    }catch{
        console.log('Error, color is not in a valid format');
    }
});