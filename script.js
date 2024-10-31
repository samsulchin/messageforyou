<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Romantic Message</title>
    <style>
        /* Menambahkan gaya justify untuk konten pesan */
        #thankYouMessage {
            text-align: justify;
            width: 80%; /* Optional: atur lebar agar terlihat lebih rapi */
            margin: auto; /* Optional: membuat elemen berada di tengah */
        }
    </style>
</head>
<body>
    <form id="nameForm">
        <input type="text" id="name" placeholder="Enter your name" required>
        <button type="submit">Submit</button>
    </form>
    <div id="thankYouMessage"></div>
    <audio id="backgroundMusic" src="path/to/your/music.mp3"></audio>
    <button id="loveMessageButton" style="display: none;">Love Message</button>

    <script>
        document.getElementById('nameForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const nameInput = document.getElementById('name').value;
            const thankYouMessage = document.getElementById('thankYouMessage');
            const backgroundMusic = document.getElementById('backgroundMusic');

            const message = `${nameInput}, izinkan Mas menyampaikan rasa syukur yang mendalam atas kehadiranmu ❤️...` ; 

            typeWriterEffect(thankYouMessage, message, 50);
            backgroundMusic.play();
        });

        function typeWriterEffect(element, text, delay) {
            element.innerHTML = "";
            const paragraphs = text.split('\n\n');

            let paragraphIndex = 0;
            let charIndex = 0;

            function type() {
                if (paragraphIndex < paragraphs.length) {
                    if (charIndex === 0) {
                        const p = document.createElement('p');
                        element.appendChild(p);
                    }

                    const currentParagraph = element.getElementsByTagName('p')[paragraphIndex];
                    const currentText = paragraphs[paragraphIndex];

                    if (charIndex < currentText.length) {
                        currentParagraph.textContent += currentText.charAt(charIndex);
                        charIndex++;
                        currentParagraph.scrollIntoView({ behavior: 'smooth', block: 'end' });

                        setTimeout(type, delay);
                    } else {
                        charIndex = 0;
                        paragraphIndex++;
                        setTimeout(type, delay);
                    }
                } else {
                    document.getElementById('loveMessageButton').style.display = 'inline-block';
                }
            }

            type();
        }

        document.getElementById('loveMessageButton').addEventListener('click', function() {
            const name = document.getElementById('name').value;
            const loveMessage = `I love you, ${name}!`;
            alert(loveMessage);
        });
    </script>
</body>
</html>
