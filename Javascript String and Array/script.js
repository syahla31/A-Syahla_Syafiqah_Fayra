// Inisialisasi antrian awal
let antrian = ["Ray", "Fiki", "Fadhilla", "Farah"];

// 1. Datang 1 pembeli baru yaitu Nabila
antrian.push("Nabila");

// 2. Datang 2 pembeli baru yaitu Maza dan Elsi
antrian.push("Maza", "Elsi");

// 3. Antrian terakhir tidak jadi antri dan pulang ke rumah
antrian.pop();

// 4. Antrian pertama sudah mendapatkan belanjaannya
antrian.shift();

// 5. Antrian kedua juga sudah mendapatkan belanjaannya
antrian.shift();

// 6. Datang pembeli baru yang nyerobot antrian yaitu Tomi
antrian.splice(0, 0, "Tomi");

// Hasil akhir antrian
console.log("Antrian akhir:", antrian);