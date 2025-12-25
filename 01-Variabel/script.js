/* MATERI: Cara Membuat Variabel di JS
   Ada 3 cara: var, let, dan const.
*/

// 1. var (CARA LAMA - JADUL)
var namaJadul = "Website Lama";
console.log(namaJadul);


// 2. let (CARA MODERN - STANDAR)
// Gunakan ini jika nilainya nanti akan berubah.
let umur = 18;
console.log("Umur awal: " + umur);

umur = 19; // Kita ubah isinya
console.log("Umur sekarang: " + umur);


// 3. const (KONSTANTA - PATEN)
// Gunakan ini jika nilainya TIDAK BOLEH berubah selamanya.
const phi = 3.14;
console.log("Nilai Phi: " + phi);

// phi = 10; 
// ^ Kalau baris di atas dibuka komennya, bakal ERROR di console.


// --- TIPE DATA UTAMA ---

let nama = "Dian";          // String
let angka = 100;            // Number (Int/Float dianggap sama)
let isMahasiswa = true;     // Boolean
let kosong = null;          // Null (Sengaja dikosongkan)

console.log("Tipe data nama:", typeof nama); 
console.log("Tipe data angka:", typeof angka);