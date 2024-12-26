// Fungsi untuk menampilkan tab
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
}

// Fetch data untuk Tab Data Samsung (database MySQL)
fetch('/api/sales')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('sales-data');
        tableBody.innerHTML = ""; // Kosongkan tabel sebelumnya
        data.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${row.tahun}</td><td>${row.penjualan}</td>`;
            tableBody.appendChild(tr);
        });
    });

// Fetch data untuk Interval Bilangan Random
fetch('/api/intervals')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('interval-data');
        tableBody.innerHTML = ""; // Kosongkan tabel sebelumnya
        data.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${row.permintaan}</td><td>${row.interval}</td>`;
            tableBody.appendChild(tr);
        });
    });

// Fetch data untuk Hasil Prediksi Monte Carlo
fetch('/api/monte-carlo-results')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('monte-carlo-data');
        tableBody.innerHTML = ""; // Kosongkan tabel sebelumnya
        data.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${(row.random_number * 100).toFixed(2)}</td><td>${row.prediksi.toFixed(2)}</td>`;
            tableBody.appendChild(tr);
        });
    });
