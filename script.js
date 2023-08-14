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
    default:
        alert('Masukan anda tidak terdapat pada menu')
}

function penjumlahan() {
    const x1 = prompt('Masukkan angka pertama')
    const x2 = prompt('Masukkan angka kedua')
    const total = parseInt(x1) + parseInt(x2)
    alert(`Penjumlahan dari ${x1}+${x2}=${total}`)
}