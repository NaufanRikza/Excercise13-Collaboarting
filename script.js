const firstMessage = `
Pilih Menu:
1. Penjumlahan
2. Penguranngan
3. Pembagian
4. Perkalian
5. Pangkat 2
6. Akar Pangkat 2
7. Akar Pangkat 3`;
const menu = prompt(firstMessage);
console.log(menu);

switch (menu) {
  case "1":
    penjumlahan();
    break;
  case "2":
    pengurangan();
    break;
  case "3":
    pembagian();
    break;
  case "4":
    perkalian();
    break;
  case "5":
    pangkat2();
    break;
  case "6":
    akarPangkat2();
    break;
  case "7":
    akarPangkat3();
    break;
  default:
    alert("Masukan anda tidak terdapat pada menu");
}


function pembagian() {
  const angka1 = prompt("Masukkan angka pertama");
  const angka2 = prompt("Masukkan angka kedua");
  const pembagian = parseFloat(angka1) / parseFloat(angka2);
  alert(`Pembagian dari ${angka1}/${angka2}=${pembagian}`);
}

function penjumlahan() {
  const x1 = prompt("Masukkan angka pertama");
  const x2 = prompt("Masukkan angka kedua");
  const total = parseInt(x1) + parseInt(x2);
  alert(`Penjumlahan dari ${x1}+${x2}=${total}`);
}

function akarPangkat2() {
  const n = prompt("masukan angka yang ingin dipangkat 2");
  let result = Math.sqrt(n);
  alert(`Akar pangkat 2 dari ${n} adalah ${result}`);
}

function akarPangkat3() {
  const n = prompt("masukan angka yang ingin dipangkat 3");
  let result = Math.cbrt(n);
  alert(`Akar pangkat 3 dari ${n} adalah ${result}`);
}

function pengurangan() {
  const x1 = prompt("Masukkan angka pertama");
  const x2 = prompt("Masukkan angka kedua");
  const result = parseInt(x1) - parseInt(x2);
  alert(`Pengurangan dari ${x1} - ${x2} = ${result}`);
}

function pangkat2() {
  const a = prompt("Masukkan angka yang ingin dipangkatkan");
  const hasilPangkat = parseInt(a) * parseInt(a);
  alert(`Pangkat dua dari ${a} adalah ${hasilPangkat}`);
}
