var name = prompt("Masukkan Nama Anda :");
var name = "";
for (var name = 0; name < 0; name++) {
    console.log("Anda tidak boleh masuk!");
}

var age = prompt("Masukkan usia Anda : ");
if (age >= 10 && age <= 17) {
    console.log("Anda hanya boleh memesan minuman Juice");
    var juice = 50000;
    var money = prompt("Berapa uang Anda :");
    var money1 = money - juice;

    if (money > juice)
        console.log("Anda bisa pesan minuman Juice. Sisa uang Anda :" + money1);

    else if (money < juice)
        console.log("Uang tidak cukup. Anda harus pulang");
} else if (age > 17) {
    console.log("Anda boleh memesan Anggur");
    var anggur = 300000;
    var money = prompt("Berapa uang Anda :");
    var money2 = money - anggur;

    if (money > anggur)
        console.log("Anda bisa pesan minuman Anggur. Sisa uang Anda :" + money2);

    else if (money < anggur)
        console.log("Uang tidak cukup. Anda harus pulang");
} else(age < 10 && age == " ")
console.log("Program Selesai");