var input=require('readline-sync');
console.log (" Cara Kerja Kalkulator Dalam JavaScript ");
console.log (" Enter " + " + " + " - " + " * " + " or " + " / ")
const input2 = input.question("pilihlah salah satu =")
console.log("..........................");

if (input2=="+"){
    var bil1= input.question("masukkan angka =");
    var bil2= input.question("masukkan angka =");
    var intbil1 = bil1
    var intbil2 = bil2
    var hasil = (Number(bil1)+(Number(bil2)))
 console.log("Hasilnya adalah " + hasil);
}
// operasi menghitung dengan menggunakan penjumlahan


if (input2=="-"){
    var bil1= input.question("masukkan angka =");
    var bil2= input.question("masukkan angka =");
    var intbil1 = bil1
    var intbil2 = bil2
    var hasil = (Number(bil1)-(Number(bil2)))
 console.log("Hasilnya adalah" + hasil);
}
// operasi menghitung dengan menggunakan pengurangan


if (input2=="/"){
    var bil1= input.question("masukkan angka =");
    var bil2= input.question("masukkan angka =");
    var intbil1 = bil1
    var intbil2 = bil2
    var hasil = (Number(bil1)/(Number(bil2)))
  console.log("Hasilnya adalah " + hasil)
}
// operasi menghitung dengan menggunakan pembagian


if (input2=="*"){
    var bil1= input.question("masukkan angka =");
    var bil2= input.question("masukkan angka =");
    var intbil1 = bil1
    var intbil2 = bil2
    var hasil = (Number(bil1)*(Number(bil2)))
  console.log("Hasilnya adalah " + hasil)
}
// operasi menghitung dengan menggunakan perkalian

if (input2=="%"){
    var bil1= input.question("masukkan angka = ");
    var bil2= input.question("masukkan angka = ");
    var intbil1 = bil1
    var intbil2 = bil2
    var hasil = Number(intbil1)%Number(bil2)
   console.log("Hasilnya adalah " + hasil)
}
// operasi menghitung dengan menggunakan modulus
    
