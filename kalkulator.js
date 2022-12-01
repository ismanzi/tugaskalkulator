var input=require('readline-sync');
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

if (input2=="-"){
    var bil1= input.question("masukkan angka =");
    var bil2= input.question("masukkan angka =");
    var intbil1 = bil1
    var intbil2 = bil2
    var hasil = (Number(bil1)-(Number(bil2)))
 console.log("Hasilnya adalah" + hasil);
}

if (input2=="/"){
    var bil1= input.question("masukkan angka =");
    var bil2= input.question("masukkan angka =");
    var intbil1 = bil1
    var intbil2 = bil2
    var hasil = (Number(bil1)/(Number(bil2)))
  console.log("Hasilnya adalah " + hasil)
}

if (input2=="*"){
const bil1= input.question("masukkan angka =");
const bil2= input.question("masukkan angka =");
const intbil1 = bil1
const intbil2 = bil2
const hasil = (Number(bil1)*(Number(bil2)))
console.log("Hasilnya adalah " + hasil)
}
