document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const modal = document.getElementById('auth-modal');
    const closeModal = document.querySelector('.close');

    // Function to toggle modal display
    function toggleModal() {
        modal.style.display = 'block';
    }

    // Event listeners for login and signup buttons
    loginBtn.addEventListener('click', function() {
        toggleModal();
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('signup-form').style.display = 'none';
        toggleTextVisibility();
    });

    signupBtn.addEventListener('click', function() {
        toggleModal();
        document.getElementById('signup-form').style.display = 'block';
        document.getElementById('login-form').style.display = 'none';
        toggleTextVisibility();
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        toggleTextVisibility();
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            toggleTextVisibility();
        }
    });

    // Function to toggle text visibility on main content
    function toggleTextVisibility() {
        restaurantContent.classList.toggle('hidden');
    }
});
