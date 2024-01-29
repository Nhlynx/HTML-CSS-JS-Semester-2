for (var paketDikirim = 1; paketDikirim <= 10; paketDikirim++){
    if (paketDikirim <= 6 && paketDikirim !== 6){
        console.log("Paket Thrifting No." + paketDikirim + " Berhasil DIKIRIM !");
    } else if (paketDikirim == 5|| paketDikirim == 8 || paketDikirim == 10){
        console.log("Paket Thrifting No." + paketDikirim + " DALAM PERJALANAN !")
    } else {
        console.log("Paket Thrifting No." + paketDikirim + " GAGAL DIKIRIM !");
    }
}