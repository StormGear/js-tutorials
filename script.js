document.getElementById('button').addEventListener('click', loadData);

function loadData(e) {
    console.log('Button clicked');
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.txt', true);

    xhr.onload = function () {
        console.log('READYSTATE', xhr.readyState);
        console.log('STATUS', xhr.status);
        if (this.status === 200) {
           console.log(this.responseText);
        }
    }

    xhr.send();
}