// pilih elemen <button> dengan id "tombol"
var tombol = document.getElementById("tombol");

// tambahkan event listener untuk event klik pada tombol
tombol.addEventListener("click",function(){
    // pilih elemen <h1> dengan id "teks"
    var text = document.getElementById("teks");
    var foto = document.getElementById("gif");
    // ubah konten html dari teks menjadi "(teks yang dimasukkan)"
    text.innerHTML = "Hi, saya sedang belajar Event Handling dan DOM";
    // ubah style warna
    text.style.color = "blue";
    foto.innerHTML
});