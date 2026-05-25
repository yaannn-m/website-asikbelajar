//SCRIPT LOGIN & REGISTER NAVBAR//
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

//SCRIPT FORGOT PASS//
document.addEventListener('DOMContentLoaded', function() {
    const forgotLinkDiv = document.querySelector('.forgot-link');

    if (forgotLinkDiv) {
        const link = forgotLinkDiv.querySelector('a');
        const message = document.getElementById('forgotMessage');

        link.addEventListener('click', function(e) {
            e.preventDefault(); 
 
            if (message.classList.contains('hidden')) {
                message.classList.remove('hidden');
                message.classList.add('show');
            } else {
                message.classList.remove('show');
                message.classList.add('hidden');
            }
        });
    }
});

//SCRIPT SHOWREGISTER PASSWORD//
const regField=document.getElementById("registerpasswordField");
const regBtn=document.getElementById("toggleRegisterPassword");
if (regBtn && regField) {
    regBtn.onclick = () => {
        if (regField.type === "password") {
            regField.type = "text";
            regBtn.classList.replace("bx-eye-slash", "bx-eye");
        } else {
            regField.type = "password";
            regBtn.classList.replace("bx-eye", "bx-eye-slash");
        }
    };
}

//SCRIPT SHOW CONFIRM REGISTERPASSWORD//
const confirmPasswordField=document.getElementById("confirmPasswordField");
const showConfirmbtn=document.getElementById("toggleConfirmPassword");
                showConfirmbtn.onclick=(()=>{
                    if(confirmPasswordField.type==="password"){
                        confirmPasswordField.type="text"
                        showConfirmbtn.classList.replace("bx-eye-slash", "bx-eye");
                    }else{
                        confirmPasswordField.type="password"
                        showConfirmbtn.classList.replace("bx-eye", "bx-eye-slash");
                    }
                })


//buat halaman login smooth slide//
const container = document.querySelector('.container');
const registerBtn = document.querySelectorAll('.register-btn');
const loginBtn = document.querySelectorAll('.login-btn');

registerBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        container.classList.add('active');
    });
});

loginBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        container.classList.remove('active');
    });
});

//SCRIPT BUAT LOCAL DATABASE//
const registerForm = document.getElementById('registerForm');

if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const usernameInput = document.getElementById('regUser').value;
        const emailInput = document.getElementById('regEmail').value;
        const passwordInput = document.getElementById('registerpasswordField').value; 
        const confirmPasswordInput = document.getElementById('confirmPasswordField').value;

        if (passwordInput !== confirmPasswordInput) {
            alert('Password dan Confirm Password tidak cocok!');
            return; 
        }

        let usersDatabase = JSON.parse(localStorage.getItem('usersDatabase')) || [];

        const isUserExist = usersDatabase.some(user => user.username === usernameInput || user.email === emailInput);
        if (isUserExist) {
            alert('Username sudah terdaftar!');
        } else {
            usersDatabase.push({
                username: usernameInput,
                email: emailInput,
                password: passwordInput
            });

            localStorage.setItem('usersDatabase', JSON.stringify(usersDatabase));
            
            alert('Pendaftaran Akun Berhasil!');
            registerForm.reset();
        }
    });
}

//SCRIPT LOGIKA LOGIN & DIRECT KE HOMEPAGE//
const loginForm = document.getElementById('loginForm');

if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const usernameInput = document.getElementById('loginUser').value;
        const passwordInput = document.getElementById('passwordField').value;

        let usersDatabase = JSON.parse(localStorage.getItem('usersDatabase')) || [];

        const userFound = usersDatabase.find(user => user.username === usernameInput && user.password === passwordInput);

        if (userFound) {
            alert(`Login Berhasil! Selamat datang, ${userFound.username}!`);

            localStorage.setItem('loggedInUser', userFound.username);

            window.location.href = "Home Screen AsikBelajar.html"; 
            
        } else {
            alert('Username atau Password salah! Periksa kembali.');
        }
    });
}

