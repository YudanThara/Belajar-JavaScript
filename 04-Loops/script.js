/* MATERI 04: LOOPS (PERULANGAN)
*/

// --- 1. FOR LOOP (Perulangan yang sudah jelas jumlahnya) ---

console.log("--- MULAI GACHA 10x ---");

for (let i = 1; i <= 10; i++) {
    let hoki = Math.random(); 
    
    if (hoki > 0.8) {
        console.log(`Pull ke-${i}: DAPAT ITEM UNGU! (*4)`);
    } else {
        console.log(`Pull ke-${i}: Ampas (Biru *3)`);
    }
}
console.log("--- GACHA SELESAI ---");


// --- 2. WHILE LOOP (Perulangan yang belum tentu jumlahnya) ---

let stamina = 50;
console.log("\n--- MULAI FARMING ---");

while (stamina > 0) {
    console.log(`Farming... Sisa stamina: ${stamina}`);
    stamina -= 10;
}

console.log("Stamina habis, harus refill!");


// --- 3. DO-WHILE LOOP ---
// Perbedaannya: Minimal dijalankan SEKALI dulu, baru cek kondisi.

let pityCount = 0;

do {
    console.log("\nCek Pity System...");
    pityCount++;
} while (pityCount < 0); // Kondisinya SALAH (0 tidak kurang dari 0), tapi loop tetap jalan 1x.