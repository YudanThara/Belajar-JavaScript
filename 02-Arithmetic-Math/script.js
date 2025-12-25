// --- 1. OPERATOR DASAR (Sama seperti C#) ---
let a = 10;
let b = 3;

console.log("Penjumlahan:", a + b); // 13
console.log("Pengurangan:", a - b); // 7
console.log("Perkalian:", a * b);   // 30
console.log("Pembagian:", a / b);   // 3.3333... (JS hasilnya float otomatis)
console.log("Sisa Bagi (Modulus):", a % b); // 1


// --- 2. AUGMENTED ASSIGNMENT (Singkatan) ---
let skor = 100;
skor += 10; // Artinya: skor = skor + 10;
console.log("Skor sekarang:", skor); // 110
skor++;     // Increment (tambah 1)
console.log("Skor naik:", skor);     // 111


// --- 3. JEBAKAN JAVASCRIPT (STRING + NUMBER) ---
// Kalau 'Tambah' ketemu String, dia jadi 'Gabung' (Concatenation)
let x = 10;
let y = "5"; 

console.log(x + y); // Hasilnya "105" (String), BUKAN 15 (Angka)
console.log(x - y); // Hasilnya 5 (Ajaib! JS otomatis ubah string jadi angka kalau dikurang)
console.log(x * y); // Hasilnya 50 (Ini juga otomatis)

// Solusi biar aman:
console.log(x + parseInt(y)); // 15 (Kita paksa string jadi angka dulu)


// --- 4. MATH OBJECT (Fitur Bantuan Matematika) ---
console.log("Pangkat:", Math.pow(2, 3));  // 2 pangkat 3 = 8
console.log("Akar Kuadrat:", Math.sqrt(64)); // 8
console.log("Pembulatan:", Math.round(4.7)); // 5

// YANG PALING SERING DIPAKAI: Random
// Math.random() menghasilkan angka acak antara 0 sampai 1
let acak = Math.random();
console.log("Angka Acak:", acak); 

// Angka dadu (1-6)
let dadu = Math.floor(Math.random() * 6) + 1;
console.log("Lempar Dadu:", dadu);