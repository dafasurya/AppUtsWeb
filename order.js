const hargaNasiPecel = 6000;
const hargaNasiJotos = 6000;
const hargaKopiHitam = 5000;
const hargaNasiUrap = 6000;
const hargaEsTehManis = 4000;
const hargaEsJeruk = 4000;
function updateTotal() {
    const nasiPecelJumlah = parseInt(document.getElementById('nasiPecelJumlah').value);
    const nasiJotosJumlah = parseInt(document.getElementById('nasiJotosJumlah').value);
    const kopiHitamJumlah = parseInt(document.getElementById('kopiHitamJumlah').value);
    const nasiUrapJumlah = parseInt(document.getElementById('nasiUrapJumlah').value);
    const esTehManisJumlah = parseInt(document.getElementById('esTehManisJumlah').value);
    const esJerukJumlah = parseInt(document.getElementById('esJerukJumlah').value);

    const totalHarga = (nasiPecelJumlah * hargaNasiPecel) + (nasiJotosJumlah * hargaNasiJotos) + (kopiHitamJumlah * hargaKopiHitam) + (nasiUrapJumlah * hargaNasiUrap) + (esTehManisJumlah * hargaEsTehManis) + (esJerukJumlah * hargaEsJeruk);

    document.getElementById('totalHarga').innerText = 'Rp ' + totalHarga;
}

document.querySelectorAll('input[type="number"]').forEach(item => {
    item.addEventListener('input', updateTotal);
});
