alert("Hello World");
alert("Ini adalah POP UP BOX Alert");
alert("Nama : Dzaki");
alert("Umur : 17 Tahun");
alert("Pelajar");

var hobby = prompt("Masukkan Hobby Anda :");
alert("Hobby Anda : " + hobby);

var hobbyAnda = confirm(
    "Apakah anda yakin memasukkan hobby anda dengan benar ?"
);

if (hobbyAnda == true){
    alert("Yeay, Hobby anda adalah : " + hobby + "" + "!");
} else {
    alert("Oops, Coba masukkan lagi !");
}