document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman biasa

    const nameInput = document.getElementById('name').value; // Mengambil nilai input
    const thankYouMessage = document.getElementById('thankYouMessage');
    const backgroundMusic = document.getElementById('backgroundMusic'); // Mengambil elemen audio

    // Kalimat romantis dengan paragraf terpisah dan emoji
    const message = `${nameInput}, izinkan Mas menyampaikan rasa syukur yang mendalam atas kehadiranmu ❤️. Dari awal aku kenal hingga hari ini, kamu selalu hadir sebagai salah satu sosok yang BAIK, Positif🤗. Kebersamaan kita telah banyak mengajarkan arti saling mendukung 💪, dan aku merasakan betul bagaimana kita tumbuh dan semakin dewasa bersama 🌱. Setiap langkah dan momen yang kita lalui seolah memperkuat ikatan dan saling pengertian yang semakin dalam 🤝.

Seiring berjalannya waktu, aku semakin menyadari betapa besar pengaruhmu dalam hidupku 💖. Di saat-saat sulit, kamu hadir dengan ketenangan yang menguatkan 🛡️, seakan menghadirkan pelindung yang selalu siap siaga di sisiku 🤍. Dan di setiap momen bahagia, kamu adalah orang pertama yang ingin aku bagi cerita dan tawa 😂. Kehadiranmu memberikan warna dan arti tersendiri dalam setiap aspek kehidupan 🎨, membuat segalanya terasa lebih ringan dan menyenangkan 🌈. Terima kasih telah menjadi pendamping selama ini, selalu mendukung, dan memberi motivasi dan semangat untuk terus berusaha menjadi versi terbaik dari diriku 🏆.

Semoga perjalanan kita ke depan selalu diberi kemudahan dan kelancaran dalam menjalani studi S1 ini ✨. Aku berharap kita bisa terus tumbuh bersama, saling mendukung dengan rasa yang semakin matang dan dewasa 🌿. Mari kita ciptakan lebih banyak kenangan indah, berbagi suka dan duka, dan menghadapi masa depan dengan penuh harapan dan keyakinan 🌄. salam dari mas samsul`; 

    // Memanggil fungsi untuk efek mengetik
    typeWriterEffect(thankYouMessage, message, 100); // 100 ms delay antara karakter

    // Memutar musik
    backgroundMusic.play(); // Memutar musik
});

// Fungsi untuk efek mengetik dengan paragraf terpisah
function typeWriterEffect(element, text, delay) {
    element.innerHTML = ""; // Mengosongkan konten sebelumnya
    const paragraphs = text.split('\n\n'); // Membagi teks menjadi paragraf

    let paragraphIndex = 0;
    let charIndex = 0;

    function type() {
        if (paragraphIndex < paragraphs.length) {
            // Jika paragraf baru, buat elemen <p> baru
            if (charIndex === 0) {
                const p = document.createElement('p');
                element.appendChild(p);
            }

            const currentParagraph = element.getElementsByTagName('p')[paragraphIndex];
            const currentText = paragraphs[paragraphIndex];

            // Mengetik karakter dalam paragraf
            if (charIndex < currentText.length) {
                currentParagraph.textContent += currentText.charAt(charIndex);
                charIndex++;

                // Scroll ke elemen yang sedang diketik
                currentParagraph.scrollIntoView({ behavior: 'smooth', block: 'end' });

                setTimeout(type, delay); // Memanggil fungsi ini lagi setelah delay
            } else {
                // Pindah ke paragraf berikutnya
                charIndex = 0;
                paragraphIndex++;
                setTimeout(type, delay); // Memanggil fungsi ini lagi untuk paragraf baru
            }
        } else {
            // Tampilkan tombol setelah selesai mengetik
            document.getElementById('loveMessageButton').style.display = 'inline-block'; 
        }
    }

    type(); // Memulai efek mengetik
}

// Event listener untuk tombol ucapan cinta
document.getElementById('loveMessageButton').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const loveMessage = `I love you, ${name}!`;
    alert(loveMessage); // Tampilkan ucapan cinta
});
