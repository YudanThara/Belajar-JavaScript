// --- 1. FUNCTION DECLARATION (Cara Klasik) ---
function sapaPagi(nama) {
    console.log(`Halo ${nama}, selamat pagi!`);
}
sapaPagi("Budi");
sapaPagi("Siti");


// --- 2. FUNCTION DENGAN RETURN VALUE ---
// Kalau butuh hasil hitungan dikembalikan (bukan cuma diprint)
function hitungLuasPersegi(sisi) {
    let luas = sisi * sisi;
    return luas; // Mengembalikan nilai ke pemanggil
}

let hasil = hitungLuasPersegi(5);
console.log("Luas Persegi (sisi 5): " + hasil);


// --- 3. ARROW FUNCTION (Cara Modern ES6) ---
// Cara biasa:
// const sapaMalam = function(nama) { ... }

// Cara Arrow Function:
const sapaMalam = (nama) => {
    console.log(`Halo ${nama}, selamat malam!`);
}

sapaMalam("Joko");


// --- 4. ARROW FUNCTION YANG LEBIH SINGKAT LAGI ---
// Kalau isinya cuma SATU baris return, kurung kurawal {} dan kata 'return' bisa dihapus.

// Fungsi Perkalian:
const kali = (a, b) => a * b; 

console.log("Hasil 10 x 5 =", kali(10, 5)); 
// ^ Otomatis return a*b tanpa kita tulis kata 'return'


// --- MINI CHALLENGE ---
// Fungsi untuk mengecek angka Ganjil atau Genap
const cekGanjilGenap = (angka) => {
    if (angka % 2 === 0) {
        return "GENAP";
    } else {
        return "GANJIL";
    }
}

console.log("Angka 7 adalah:", cekGanjilGenap(7));
console.log("Angka 10 adalah:", cekGanjilGenap(10));