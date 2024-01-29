var screen = document.getElementById("screen");
var input = "";
function display(){
    screen.value = input;
}

function addinput(value){
    input += value;
    display();
}

function deleteinput(){
    input = input.slice(0,-1);
    display();
}

function clearinput(){
    input = "";
    display();
}

function calculate(){
    if (input && !isNaN(input.slice(-1))){
        input = eval(input).toString();
        display();
    }
}

document.getElementById("clear").addEventListener("click",clearinput);
document.getElementById("backspace").addEventListener("click",deleteinput);
document.getElementById("divide").addEventListener("click",function(){
    addinput("/");
});
document.getElementById("multiply").addEventListener("click",function(){
    addinput("*");
});
document.getElementById("minus").addEventListener("click",function(){
    addinput("-");
});
document.getElementById("plus").addEventListener("click",function(){
    addinput("+");
});
document.getElementById("equal").addEventListener("click",calculate);
document.getElementById("dot").addEventListener("click",function(){
    addinput(".");
});
document.getElementById("zero").addEventListener("click",function(){
    addinput("0");
});
document.getElementById("one").addEventListener("click",function(){
    addinput("1");
});
document.getElementById("two").addEventListener("click",function(){
    addinput("2");
});
document.getElementById("three").addEventListener("click",function(){
    addinput("3");
});
document.getElementById("four").addEventListener("click",function(){
    addinput("4");
});
document.getElementById("five").addEventListener("click",function(){
    addinput("5");
});
document.getElementById("six").addEventListener("click",function(){
    addinput("6");
});
document.getElementById("seven").addEventListener("click",function(){
    addinput("7");
});
document.getElementById("eight").addEventListener("click",function(){
    addinput("8");
});
document.getElementById("nine").addEventListener("click",function(){
    addinput("9");
});