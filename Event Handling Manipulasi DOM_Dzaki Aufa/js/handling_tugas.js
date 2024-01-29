var tombol = document.getElementById("tombol");

tombol.addEventListener("mouseenter",function(){
    console.log("Here");
    tombol.style.backgroundColor = "blue";
});

tombol.addEventListener("mouseleave",function(){
    console.log("Thank You");
    tombol.style.backgroundColor = "blue";
});