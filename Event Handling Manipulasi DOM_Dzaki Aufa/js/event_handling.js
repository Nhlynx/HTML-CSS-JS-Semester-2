var tombol = document.getElementById("tombol");

tombol.addEventListener("click",function(){
    // tampilkan pesan di console
    console.log("Anda Mengklik Tombol");
});

var text = document.getElementById("teks");

// tambahkan event listener untuk even mouseover pada teks
text.addEventListener("mouseover",function(){
    text.style.color = "blue";
});