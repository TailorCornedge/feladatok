document.getElementById('subscribeButton').addEventListener('click', function() {
    // Első és második név ellenőrzése
    var firstName = document.querySelector('.form__firstname').value.trim();
    var lastName = document.querySelector('.form__lastname').value.trim();
    if (firstName === '' || lastName === '') {
        alert('Please enter your first and last name.');
        return;
    }

    // Email ellenőrzése
    var email = document.querySelector('.form__email').value.trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Feliratkozás végrehajtása (itt lehetne küldeni az adatokat egy szerverre, vagy máshova)
    alert('You have successfully subscribed with the email: ' + email);
});
