//contoh if, else, nested if
//Saya ingin menggambarkan sebuah perasaan dalam bentuk warna, warna hitam menggambarkan kesedihan, warna merah menggambarkan kemarahan, dan warna orange menggambarkan keceriaan
let warna = "hitam"

if(warna  === "hitam"){
    console.log("menggambarkan kesedihan");
}else if(warna === "merah"){
    console.log("menggambarkan kemarahan");
}else if(warna === "orange"){
    console.log("menggambarkan keceriaan");
}else{
    console.log("Perasaan anda campur aduk");
}


//contoh Switch Case
//Saya ingin menampilkan nama teman-teman saya beserta kelakuannya di kelas 

let penghuni = "Yana"

switch (penghuni) {
    case "Fitri":
        console.log("kang roasting");
        break;
    case "Hesti":
        console.log("sipaling pelupa");
        break;
    case "Irva":
        console.log("sipaling ambis");
        break;
    case "Malka":
        console.log("sipaling netral");
        break;
    case "Nilam":
        console.log("sipaling jail");
        break;
    case "Risda":
        console.log("sipaling setia kawan");
        break;
    case "Yana":
        console.log("sipaling tomboy");
        break;
default:
    alert("Anda Salah Kelas")
}


//Contoh for statement
for(let c = 10; c <= 100; c++){
    console.log("perulangan cinta terjadi karena perasaan belum move-on " + c, "%")
}

//contoh while, do while
let j = 1000
do {
    console.log("Sebuah perulangan dengan do while menghasilkan nilai " + j);
    j -= 50;  
}while (j >= 100)

let y = 100
while(y <=500) {
    console.log("Perulangan dengan while menghasilkan nilai " + y);
    y++
}

//contoh function
function sebagaiContoh (b, c) {
    if (c === 0) {
        throw new Error("Jika error akan masuk ke");
    }
    return b * c;
}
try {
    let hasilKali = sebagaiContoh(100, 20);
    console.log("Hasil kali bernilai " + hasilKali);
}catch (error) {
    console.error("" + error)
}

