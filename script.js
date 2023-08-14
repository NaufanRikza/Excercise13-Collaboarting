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
  case "3":
    pembagian();
    break;
  case "4":
    perkalian();
  default:
    alert("Masukan anda tidak terdapat pada menu");
}

function penjumlahan() {
  const x1 = prompt("Masukkan angka pertama");
  const x2 = prompt("Masukkan angka kedua");
  const total = parseInt(x1) + parseInt(x2);
  alert(`Penjumlahan dari ${x1}+${x2}=${total}`);
}

function pembagian() {
  const angka1 = prompt("Masukkan angka pertama");
  const angka2 = prompt("Masukkan angka kedua");
  const pembagian = parseFloat(angka1) / parseFloat(angka2);
  alert(`Pembagian dari ${angka1}/${angka2}=${pembagian}`);
}
