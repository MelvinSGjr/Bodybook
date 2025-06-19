document.addEventListener('DOMContentLoaded', () => {
    const togglePassword = document.getElementById('toggle-password');
    if (togglePassword) {
        togglePassword.addEventListener('click', () => {
            const passwordInput = document.getElementById('password');
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            togglePassword.classList.toggle('fa-eye');
            togglePassword.classList.toggle('fa-eye-slash');
        });
    }

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            const loginButton = loginForm.querySelector('.login-button');
            const originalText = loginButton.textContent;
            loginButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            loginButton.disabled = true;
            
            try {
                const response = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });
                
                const data = await response.json();
                
                if (response.ok) {
                    localStorage.setItem('authToken', data.token);
                    
                    window.location.href = '/';
                } else {
                    alert(data.message || 'Login failed');
                }
            } catch (error) {
                console.error('Login error:', error);
                alert('Network error. Please try again.');
            } finally {
                loginButton.textContent = originalText;
                loginButton.disabled = false;
            }
        });
    }
});