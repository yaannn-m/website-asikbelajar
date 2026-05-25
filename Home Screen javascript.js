//script dropdown materi//
document.addEventListener('DOMContentLoaded', function() {
    const materiBtn = document.getElementById('materiBtn');
    const materiDropdown = document.getElementById('materiDropdown');

    materiBtn.addEventListener('click', function(e) {
        e.preventDefault(); 
        materiDropdown.classList.toggle('show'); 
    });

    document.addEventListener('click', function(e) {
        if (!materiBtn.contains(e.target) && !materiDropdown.contains(e.target)) {
            materiDropdown.classList.remove('show');
        }
    });
});

//script biar login signup button homepage work//
const container = document.querySelector('.container');
    const registerBtnSub = document.querySelector('.toggle-panel .register-btn');
    const loginBtnSub = document.querySelector('.toggle-panel .login-btn');

    if (container && registerBtnSub && loginBtnSub) {
        registerBtnSub.addEventListener('click', () => {
            container.classList.add('active');
        });

        loginBtnSub.addEventListener('click', () => {
            container.classList.remove('active');
        });
    }

function checkLoginStatus() {
    const savedUser = localStorage.getItem('loggedInUser'); 
    const userGreeting = document.getElementById('userGreeting');
    
    const loginLink = document.querySelector('.nav-button a');

    if (!userGreeting) return;

    if (savedUser) {
        // Jika user SUDAH LOGIN
        if (loginLink) loginLink.style.display = 'none'; 
        userGreeting.style.display = 'inline-block';  
        userGreeting.innerHTML = `Welcome, <strong>${savedUser}</strong>`;
        
        // Pasang Fitur Logout otomatis ketika nama di-klik
        userGreeting.style.cursor = 'pointer';
        userGreeting.onclick = function() {
            if (confirm("Apakah kamu ingin logout dari AsikBelajar?")) {
                localStorage.removeItem('loggedInUser'); 
                window.location.reload(); 
            }
        };
    } else {
        // Jika user BELUM LOGIN
        if (loginLink) loginLink.style.display = 'inline-block';
        userGreeting.style.display = 'none';
    }
}

// Jalankan fungsi tepat setelah HTML selesai dibaca browser
document.addEventListener('DOMContentLoaded', checkLoginStatus);

//MATERI KODE//
function tampilkanMateri(subject) {
        const databaseID = {
            'sosiologi': 'materiSosio',
            'sejarah': 'materiSejarah',
            'ekonomi': 'materiEkonomi',
            'geografi': 'materiGeografi'
        };

        const semuaMateri = ['sosiologi', 'sejarah', 'ekonomi', 'geografi'];
        
        semuaMateri.forEach(key => {
            const elemen = document.getElementById(databaseID[key]);
            if (elemen) {
                if (key === subject) {
                    elemen.style.display = 'block';
                    elemen.classList.remove('materi-hidden');
                } else {
                    elemen.style.display = 'none';
                    elemen.classList.add('materi-hidden');
                }
            }
        });
    }

    const urlParams = new URLSearchParams(window.location.search);
    const subject = urlParams.get('subject');
    if (subject) {
        tampilkanMateri(subject.toLowerCase());
    }

document.addEventListener('DOMContentLoaded', function() {
    
    // --- A. Fitur Klik Tombol Join -> "Coming Soon" ---
    const joinButtons = document.querySelectorAll('.btn-join');
    
    joinButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert("Coming Soon! fitur ini sedang dalam pengembangan. \n(saya udah capek lanjutin)");
        });
    });

    // --- B. Fitur Live-Search Cari Pelajaran ---
    const searchInput = document.getElementById('searchInput');
    const materiCards = document.querySelectorAll('.materi-card');


    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            const query = searchInput.value.toLowerCase().trim();

            materiCards.forEach(card => {
                const judulPelajaran = card.querySelector('.box-frame h3').innerText.toLowerCase();
                
                if (judulPelajaran.includes(query)) {
                    card.style.display = "flex";  
                } else {
                    card.style.display = "none";  
                }
            });
        });
    }
});