// Variabel untuk menyimpan metode output yang dipilih
let outputMethod = 'console';

// Fungsi untuk mengubah metode output
function toggleOutput(method) {
    outputMethod = method;
    alert(`Output sekarang akan ditampilkan melalui ${method === 'alert' ? 'Alert' : 'Console'}`);
}

// Fungsi untuk menampilkan output
function showOutput(content, type) {
    if (outputMethod === 'alert') {
        alert(content);
    } else {
        console.log(`=== Demo ${type} ===`);
        console.log(content);
    }
    document.getElementById('output').innerHTML = content;
}

// Demo String
function demoString() {
    let nama = "Syahla Syafiqah";
    let pesan = 'Selamat Datang!';
    let gabungan = `Halo ${nama}, ${pesan}`;
    
    let output = `Tipe Data String:
-------------------
• Variabel nama: "${nama}"
• Variabel pesan: '${pesan}'
• Template Literal: \`${gabungan}\`
• Panjang nama: ${nama.length} karakter
• Huruf Kapital: ${nama.toUpperCase()}
• Huruf Kecil: ${nama.toLowerCase()}

Tipe Data: ${typeof nama}
Contoh Operasi:
• Substring: ${nama.substring(0, 5)}
• Replace: ${nama.replace("Syahla'", "Fayra")}`;
    
    showOutput(output, 'String');
}

// Demo Number
function demoNumber() {
    let bilBulat = 42;
    let bilDesimal = 3.14;
    let negatif = -10;
    let operasi = bilBulat + bilDesimal;
    
    let output = `Tipe Data Number:
-------------------
• Bilangan Bulat: ${bilBulat}
• Bilangan Desimal: ${bilDesimal}
• Bilangan Negatif: ${negatif}

Operasi Matematika:
• Penjumlahan: ${bilBulat} + ${bilDesimal} = ${operasi}
• Pengurangan: ${bilBulat} - ${negatif} = ${bilBulat - negatif}
• Perkalian: ${bilBulat} × ${bilDesimal} = ${(bilBulat * bilDesimal).toFixed(2)}
• Pembagian: ${bilBulat} ÷ ${2} = ${bilBulat / 2}
• Pangkat: ${bilBulat}² = ${Math.pow(bilBulat, 2)}
• Akar Kuadrat: √${bilBulat} = ${Math.sqrt(bilBulat).toFixed(2)}

Tipe Data: ${typeof bilBulat}`;
    
    showOutput(output, 'Number');
}

// Demo Boolean
function demoBoolean() {
    let benar = true;
    let salah = false;
    let perbandingan1 = 5 > 3;
    let perbandingan2 = 10 < 5;
    
    let output = `Tipe Data Boolean:
-------------------
Nilai Boolean Dasar:
• true: ${benar}
• false: ${salah}

Hasil Perbandingan:
• 5 > 3: ${perbandingan1}
• 10 < 5: ${perbandingan2}
• 5 >= 5: ${5 >= 5}
• 10 === "10": ${10 === "10"}
• 10 == "10": ${10 == "10"}

Operasi Logika:
• AND (true && true): ${benar && true}
• OR (false || true): ${salah || true}
• NOT (!true): ${!benar}

Tipe Data: ${typeof benar}`;
    
    showOutput(output, 'Boolean');
}

// Demo Array
function demoArray() {
    let buah = ["Apel", "Jeruk", "Mangga", "Pisang", "Anggur"];
    let angka = [1, 2, 3, 4, 5];
    let campuran = [1, "dua", true, 3.14];
    
    let output = `Tipe Data Array:
-------------------
Array Buah: [${buah.join(', ')}]
• Jumlah item: ${buah.length}
• Item pertama: ${buah[0]}
• Item terakhir: ${buah[buah.length - 1]}
• Slice (1-3): ${buah.slice(1, 3)}

Array Angka: [${angka.join(', ')}]
• Jumlah: ${angka.reduce((a, b) => a + b, 0)}
• Rata-rata: ${(angka.reduce((a, b) => a + b, 0) / angka.length).toFixed(2)}
• Nilai Max: ${Math.max(...angka)}
• Nilai Min: ${Math.min(...angka)}

Array Campuran: [${campuran.join(', ')}]
• Tipe data tiap elemen:
${campuran.map((item, index) => `  ${index}: ${typeof item}`).join('\n')}

Operasi Array:
• Push: ${buah.push('Durian')} (menambah di akhir)
• Array setelah push: [${buah.join(', ')}]

Tipe Data: ${typeof buah}
Constructor: ${buah.constructor.name}`;
    
    showOutput(output, 'Array');
}

// Demo Object
function demoObject() {
    let mahasiswa = {
        nama: "Syahla",
        umur: 20,
        aktif: true,
        nilai: [100, 90, 95],
        alamat: {
            jalan: "Jl. Kalimulya",
            kota: "Jakarta",
            kodePos: "16413"
        },
        getNilaiRataRata: function() {
            return this.nilai.reduce((a, b) => a + b, 0) / this.nilai.length;
        }
    };
    
    let output = `Tipe Data Object:
-------------------
Informasi Mahasiswa:
• Nama: ${mahasiswa.nama}
• Umur: ${mahasiswa.umur} tahun
• Status: ${mahasiswa.aktif ? 'Aktif' : 'Tidak Aktif'}

Nilai:
• Detail: ${mahasiswa.nilai.join(', ')}
• Tertinggi: ${Math.max(...mahasiswa.nilai)}
• Terendah: ${Math.min(...mahasiswa.nilai)}
• Rata-rata: ${mahasiswa.getNilaiRataRata().toFixed(2)}

Alamat Lengkap:
• Jalan: ${mahasiswa.alamat.jalan}
• Kota: ${mahasiswa.alamat.kota}
• Kode Pos: ${mahasiswa.alamat.kodePos}

Informasi Object:
• Tipe Data: ${typeof mahasiswa}
• Jumlah Properti: ${Object.keys(mahasiswa).length}
• Daftar Properti: ${Object.keys(mahasiswa).join(', ')}

JSON Format:
${JSON.stringify(mahasiswa, null, 2)}`;
    
    showOutput(output, 'Object');
}

// Console log awal
console.log("Selamat datang di Demo Tipe Data JavaScript!");
console.log("Silakan pilih tipe data dan metode output yang Anda inginkan.");