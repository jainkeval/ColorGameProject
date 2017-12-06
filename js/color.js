var x = 6;
var mode = true;//true means hard
var colors = generateColorsArray(6);
var squares = document.querySelectorAll(".square");
var msg = document.querySelector(".msg");
var pickedColor = pickColor(x);
var text = document.querySelector(".head");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
document.querySelector("#colorName").textContent = pickedColor; 

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    
    squares[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor;

        if(clickedColor === pickedColor){
            msg.textContent = "Correct!!";
            text.style.backgroundColor = pickedColor;
            changeColors(pickedColor);
            reset.textContent = "Play Again??";
        } else {
            this.style.backgroundColor = "#232323";
            msg.textContent = "Try Again!";
        }
    })  
}



easy.addEventListener("click", function(){
    mode = false;
    easy.classList.add("selected");
    hard.classList.remove("selected");
    easySetup();
    reset.addEventListener("click", easySetup());
})

reset.addEventListener("click", function(){
    if(mode===true)
        hardSetup();
    else if(mode===false)
        easySetup();
})

hard.addEventListener("click", function(){
    mode = true;
    hard.classList.add("selected");
    easy.classList.remove("selected");  
    hardSetup();    
})


// function changeColors(color){
//     for(var i=0; i<squares.length; i++){
//         squares[i].style.backgroundColor = color;
//     }
// }


function changeColors(color){
    if(mode===true){
        for(var i=0; i<squares.length; i++){
            squares[i].style.backgroundColor = color;
        }
    } else if (mode===false){
        for(var i = 0; i < 3; i++){
            squares[i].style.backgroundColor = color;
        }
        for(var i=3; i < squares.length; i++){
            squares[i].style.backgroundColor = "#232323";
        }
    }
}


function generateColorsArray(num){
    var arr = [];
    for(var k = 0; k < num; k++){
        arr[k] = randomColor();
    };
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    var color = "rgb(" + r + ", " + g + ", " + b +")";
    return color;
}

function pickColor(x){
    var random = Math.floor(Math.random()*x);
    return colors[random];
}

function easySetup(){
    colors = generateColorsArray(3);
    pickedColor = pickColor(3);
    msg.textContent = "";
    reset.textContent = "NEW COLORS";
    text.style.backgroundColor = "#232323";
    document.querySelector("#colorName").textContent = pickedColor;
    for(var i = 0; i < 3; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    for(var i=3; i < squares.length; i++){
        squares[i].style.backgroundColor = "#232323";
    }
}

function hardSetup(){
    colors = generateColorsArray(6);
    pickedColor = pickColor(6);
    msg.textContent = "";
    reset.textContent = "NEW COLORS";
    text.style.backgroundColor = "#232323";
    document.querySelector("#colorName").textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
}