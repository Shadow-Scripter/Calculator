const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = '';
}

function ccalculate(){
    try {
        display.value = eval(display.value);
    }
    catch {
        display.value = "Error";
    }
    
}