const firstMessage = `
Pilih Menu:
1. Penjumlahan
2. Penguranngan
3. Pembagian
4. Perkalian
5. Pangkat 2
6. Akar Pangkat 2
7. Akar Pangkat 3`
const menu = prompt(firstMessage)
console.log(menu)
switch (menu) {
  case "1":
    penjumlahan()
    break
  case "7":
    akarPangkat2()
    break
  case "8":
    akarPangkat3()
    break
  default:
    alert("Masukan anda tidak terdapat pada menu")
}

function penjumlahan() {
  const x1 = prompt("Masukkan angka pertama")
  const x2 = prompt("Masukkan angka kedua")
  const total = parseInt(x1) + parseInt(x2)
  alert(`Penjumlahan dari ${x1}+${x2}=${total}`)
}

function akarPangkat2() {
  const n = prompt("masukan angka yang ingin dipangkat 2")
  let result = math.sqrt(n)
  alert(`Akar pangkat 2 dari ${n} adalah ${result}`)
}

function akarPangkat3() {
  const n = prompt("masukan angka yang ingin dipangkat 3")
  let result = math.cbrt(n)
  alert(`Akar pangkat 3 dari ${n} adalah ${result}`)
}
