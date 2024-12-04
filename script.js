function prosesTopUp() {
    const layanan = document.getElementById('layanan').value;
    const nomor = document.getElementById('nomorTelepon').value;
    const nominal = document.getElementById('nominal').value;

    // Validasi input
    if (!layanan || layanan === 'Pilih jenis layanan') {
        alert('Silakan pilih layanan terlebih dahulu!');
        return;
    }

    if (!nomor) {
        alert('Silakan masukkan nomor telepon/ID!');
        return;
    }

    if (!nominal || nominal === 'Pilih nominal') {
        alert('Silakan pilih nominal!');
        return;
    }

    // Simulasi proses top up
    alert(`Proses Top Up:
    Layanan: ${layanan}
    Nomor: ${nomor}
    Nominal: Rp ${parseInt(nominal).toLocaleString('id-ID')}
    
    Top up sedang diproses...`);
}

// Event listener untuk mengubah opsi nominal berdasarkan layanan
document.getElementById('layanan').addEventListener('change', function() {
    const nominal = document.getElementById('nominal');
    nominal.innerHTML = ''; // Reset opsi

    // Opsi default
    const defaultOption = document.createElement('option');
    defaultOption.text = 'Pilih nominal';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    nominal.add(defaultOption);

    // Set opsi berdasarkan layanan
    switch(this.value) {
        case 'pulsa':
            addOptions([
                {value: '5000', text: 'Rp 5.000'},
                {value: '10000', text: 'Rp 10.000'},
                {value: '20000', text: 'Rp 20.000'},
                {value: '50000', text: 'Rp 50.000'},
                {value: '100000', text: 'Rp 100.000'}
            ]);
            break;
        case 'data':
            addOptions([
                {value: '15000', text: '2GB - Rp 15.000'},
                {value: '25000', text: '5GB - Rp 25.000'},
                {value: '50000', text: '10GB - Rp 50.000'},
                {value: '100000', text: '20GB - Rp 100.000'}
            ]);
            break;
        case 'ewallet':
            addOptions([
                {value: '20000', text: 'Rp 20.000'},
                {value: '50000', text: 'Rp 50.000'},
                {value: '100000', text: 'Rp 100.000'},
                {value: '200000', text: 'Rp 200.000'},
                {value: '500000', text: 'Rp 500.000'}
            ]);
            break;
    }
});

function addOptions(options) {
    const nominal = document.getElementById('nominal');
    options.forEach(option => {
        const newOption = document.createElement('option');
        newOption.value = option.value;
        newOption.text = option.text;
        nominal.add(newOption);
    });
}

function pilihEwallet(provider) {
    // Set layanan ke e-wallet
    const layananSelect = document.getElementById('layanan');
    layananSelect.value = 'ewallet';
    
    // Trigger change event untuk memperbarui opsi nominal
    const event = new Event('change');
    layananSelect.dispatchEvent(event);
    
    // Scroll ke form
    document.querySelector('.card.bg-base-100').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
    
    // Update placeholder sesuai provider
    const nomorInput = document.getElementById('nomorTelepon');
    switch(provider) {
        case 'ovo':
            nomorInput.placeholder = 'Masukkan nomor OVO';
            break;
        case 'shopeepay':
            nomorInput.placeholder = 'Masukkan nomor ShopeePay';
            break;
        case 'dana':
            nomorInput.placeholder = 'Masukkan nomor DANA';
            break;
        case 'seabank':
            nomorInput.placeholder = 'Masukkan nomor SeaBank';
            break;
    }
}