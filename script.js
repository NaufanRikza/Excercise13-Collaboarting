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
    case "2":
            pengurangan();
            break;
    case "5":
        pangkat2();
        break;
    default:
        alert('Masukan anda tidak terdapat pada menu')
}

function penjumlahan() {
    const x1 = prompt('Masukkan angka pertama')
    const x2 = prompt('Masukkan angka kedua')
    const total = parseInt(x1) + parseInt(x2)
    alert(`Penjumlahan dari ${x1}+${x2}=${total}`)
}
function pengurangan() {
    const x1 = prompt('Masukkan angka pertama');
    const x2 = prompt('Masukkan angka kedua');
    const result = parseInt(x1) - parseInt(x2);
    alert(`Pengurangan dari ${x1} - ${x2} = ${result}`);
}

function pangkat2() {
    const a = prompt('Masukkan angka yang ingin dipangkatkan');
    const hasilPangkat = parseInt(a) * parseInt(a);
    alert(`Pangkat dua dari ${a} adalah ${hasilPangkat}`);
}
