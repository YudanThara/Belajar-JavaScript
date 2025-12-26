/* MATERI 03: IF, ELSE, dan SWITCH
*/

// --- 1. IF - ELSE BIASA ---
let nilai = 75;

if (nilai >= 75) {
    console.log("Selamat! Anda Lulus KKM.");
} else {
    console.log("Maaf, silakan remedial.");
}


// --- 2. PERBEDAAN '==' vs '===' (PENTING!) ---
// Di C# cuma ada '=='. Di JS ada dua jenis.

let angka = 5;
let teks = "5";

// Pakai == (Loose Equality) -> JS membolehkan beda tipe data (bahaya!)
if (angka == teks) { 
    console.log("Pakai == : Benar, ini dianggap sama (5 sama dengan '5')");
}

// Pakai === (Strict Equality) -> Tipe data HARUS sama (Safe!)
if (angka === teks) {
    console.log("Pakai === : Ini tidak akan muncul.");
} else {
    console.log("Pakai === : Salah! Yang satu Number, yang satu String.");
}

// --- 3. SWITCH CASE (Contoh Gacha) ---
// Cocok kalau pilihannya banyak dan nilai pasti.

let rarity = 5;

switch (rarity) {
    case 5:
        console.log("CAHAYA EMAS! Dapat Karakter *5 Limited!");
        break;
    case 4:
        console.log("Cahaya Ungu. Lumayan dapat *4.");
        break;
    case 3:
        console.log("Cahaya Biru. Cuma dapat Light Cone ampas.");
        break;
    default:
        console.log("Error: Rarity tidak dikenal.");
}


// --- 4. TERNARY OPERATOR (If-Else Satu Baris) ---
// Format: (Kondisi) ? "Benar" : "Salah"
let stamina = 100;
let status = (stamina > 0) ? "Bisa Farming" : "Harus Refill";

console.log("Status Akun:", status);