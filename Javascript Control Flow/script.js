// 1. Latihan For Loop Pertama - Lirik "I'm Blue"
console.log("Latihan 1: Mencetak lirik 'I'm Blue'");
console.log("----------------------------------------");

for(let i = 0; i < 6; i++) {
    console.log("Da ba dee da ba daa");
}

// Baris kosong untuk memisahkan output
console.log("\n");

// 2. Latihan For Loop Countdown
console.log("Latihan 2: Countdown dari 25 ke 0");
console.log("----------------------------------------");

for(let i = 25; i >= 0; i -= 5) {
    console.log(i);
}

// Baris kosong untuk memisahkan output
console.log("\n");

// 3. Latihan Loop Array - Mengubah nama menjadi uppercase
console.log("Latihan 3: Mengubah nama menjadi huruf besar");
console.log("----------------------------------------");

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

for(let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase());
}