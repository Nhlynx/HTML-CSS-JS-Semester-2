var genreGame = prompt(
    "Masukkan Genre Game : \n (ex : RPG, FPS, Stealth, MMORPG, Mobile, TPS, Horror, Strategy, Building, Farming)");

switch(genreGame){
    case "RPG":
    case "FPS":
    case "Stealth":
    case "MMORPG":
    case "Mobile":
    case "TPS":
    case "Horror":
    case "Strategy":
    case "Building":
    case "Farming":
        alert("Anda sudah memilih genre game " + genreGame);
        break;
        default:
        alert("Genre game tidak ditemukan");
        break;
}