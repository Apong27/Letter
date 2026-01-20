// Data anggota KKN: nama, password, isi surat
const members = {
    "Fuzi Apriliani": {
        password: "fuzi",
        letter: "Fuzi Apriliani, terima kasih atas kebersamaan dan kontribusimu selama KKN. Semoga langkahmu ke depan selalu dimudahkan."
    },
    "Yaasmiin Murtajaa": {
        password: "yaasmiin",
        letter: "Yaasmiin Murtajaa, terima kasih atas semangat dan cerita yang kamu bawa selama KKN. Semoga sukses selalu."
    },
    "Hizbulloh `Arsyil `Adhim": {
        password: "arsyil",
        letter: "Hizbulloh Arsyil Adhim, terima kasih atas kerja sama dan dedikasimu selama KKN. Semoga semua cita-citamu tercapai."
    },
    "Mia Amalia": {
        password: "mia",
        letter: "Mia Amalia, terima kasih atas kebaikan dan kepedulianmu selama KKN. Semoga kenangan ini selalu berkesan."
    },
    "Sela Puspita": {
        password: "sela",
        letter: "Sela Puspita, terima kasih atas kebersamaan dan kontribusimu selama KKN. Semoga perjalananmu selalu penuh makna."
    },
    "Ibnu Zan Zani": {
        password: "ibnu",
        letter: "Ibnu Zan Zani, terima kasih atas bantuan dan kerja kerasmu selama KKN. Semoga sukses menyertai langkahmu."
    },
    "Alya Sandria": {
        password: "alya",
        letter: "Alya Sandria, terima kasih atas senyum dan semangatmu selama KKN. Semoga hari-harimu selalu dipenuhi hal baik."
    },
    "Shifa Halimatu Syadiah": {
        password: "shifa",
        letter: "Shifa Halimatu Syadiah, terima kasih atas ketulusan dan kebersamaan selama KKN. Semoga kenangan ini tak terlupakan."
    },
    "Harpan Fajri Nurpujia": {
        password: "harpan",
        letter: "Harpan Fajri Nurpujia, terima kasih atas peran dan tanggung jawabmu selama KKN. Semoga sukses selalu menyertaimu."
    },
    "Haldina Safitri": {
        password: "haldina",
        letter: "Haldina Safitri, terima kasih atas kebersamaan dan perhatianmu selama KKN. Semoga masa depanmu cerah."
    },
    "Bakhita Setyorini": {
        password: "bakhita",
        letter: "Bakhita Setyorini, terima kasih atas kontribusi dan cerita selama KKN. Semoga segala impianmu terwujud."
    },
    "Nabiel Kautsar": {
        password: "nabiel",
        letter: "Nabiel Kautsar, terima kasih atas kerja sama dan kebersamaan selama KKN. Semoga sukses selalu."
    },
    "Dian Septhia H": {
        password: "dian",
        letter: "Dian Septhia H, terima kasih atas dedikasi dan kebersamaan selama KKN. Semoga hari-harimu penuh berkah."
    },
    "Dimas Pratama Gunawan": {
        password: "dimas",
        letter: "Dimas Pratama Gunawan, terima kasih atas kerja keras dan kebersamaan selama KKN. Semoga langkahmu selalu dimudahkan."
    },
    "Neng Dewi Salmah Lailatus Syarifah": {
        password: "neng",
        letter: "Neng Dewi Salmah Lailatus Syarifah, terima kasih atas kebaikan dan kebersamaan selama KKN. Semoga selalu diberi kelancaran."
    },
    "Rifda Via Ardani": {
        password: "rifda",
        letter: "Rifda Via Ardani, terima kasih atas kebersamaan dan semangat selama KKN. Semoga masa depanmu penuh kebahagiaan."
    },
    "Dandi Mardiansyah": {
        password: "dandi",
        letter: "Dandi Mardiansyah, terima kasih atas kerja sama dan kebersamaan selama KKN. Semoga sukses di setiap langkahmu."
    },
    "Nydia Raisya Putri": {
        password: "nydia",
        letter: "Nydia Raisya Putri, terima kasih atas kehangatan dan kebersamaan selama KKN. Semoga semua harapanmu tercapai."
    },
    "Naufal Nur Arridla Priatna": {
        password: "naufal",
        letter: "Naufal Nur Arridla Priatna, terima kasih atas dedikasi dan kebersamaan selama KKN. Semoga sukses selalu menyertaimu."
    }
};


// Fungsi untuk menampilkan section dengan transisi
function showSection(sectionId) {
    const activeSections = document.querySelectorAll('.section.active');

    activeSections.forEach(section => {
        section.classList.add('blur-out');
    });

    setTimeout(() => {
        activeSections.forEach(section => {
            section.classList.remove('active', 'blur-out');
            section.style.filter = ''; // ⬅️ RESET INLINE STYLE
        });

        const nextSection = document.getElementById(sectionId);
        nextSection.classList.add('active');
    }, 400);
}


// Inisialisasi
document.addEventListener('DOMContentLoaded', () => {
    // Tombol buka daftar nama dengan animasi amplop
    document.getElementById('open-list').addEventListener('click', () => {
        const envelope = document.querySelector('.envelope');
        envelope.classList.add('open'); // Trigger animasi amplop terbuka
        setTimeout(() => {
            showSection('name-list');
            renderNameList();
        }, 1000); // Tunggu animasi amplop selesai
    });

    // Tombol kembali ke cover
    document.getElementById('back-to-cover').addEventListener('click', () => {
        showSection('cover');
        // Reset animasi amplop
        document.querySelector('.envelope').classList.remove('open');
    });

    // Tombol kembali ke list
    document.getElementById('back-to-list').addEventListener('click', () => {
        showSection('name-list');
        document.getElementById('error-message').style.display = 'none';
    });

    // Tombol kembali ke list dari surat
    document.getElementById('back-to-list-from-letter').addEventListener('click', () => {
        showSection('name-list');
        sessionStorage.removeItem('selectedName');
    });

    // Submit password
    document.getElementById('submit-password').addEventListener('click', () => {
        const selectedName = sessionStorage.getItem('selectedName');
        const inputPassword = document.getElementById('password-input').value;
        const errorMessage = document.getElementById('error-message');

        if (members[selectedName] && members[selectedName].password === inputPassword) {
            // Password benar, tampilkan surat
            document.getElementById('letter-name').textContent = selectedName;
            document.getElementById('letter-content').textContent = members[selectedName].letter;
            showSection('personal-letter');
            errorMessage.style.display = 'none';
            document.getElementById('password-input').value = '';
        } else {
            // Password salah
            errorMessage.textContent = 'Password salah. Coba lagi.';
            errorMessage.style.display = 'block';
        }
    });
});

// Render daftar nama
function renderNameList() {
    const container = document.getElementById('names-container');
    container.innerHTML = '';
    for (const name in members) {
        const button = document.createElement('button');
        button.textContent = name;
        button.addEventListener('click', () => {
            sessionStorage.setItem('selectedName', name);
            document.getElementById('selected-name').textContent = name;
            showSection('password-form');
        });
        container.appendChild(button);
    }
