document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const firstname = document.getElementById('first_name').value;
    localStorage.setItem('firstname', firstname);
    alert('Your name has been saved');
});

document.querySelector('.submit-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const firstname = localStorage.getItem('firstname');
    console.log(firstname);
});






