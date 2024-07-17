// let doc = document;
// console.log(doc.all);

// console.log(doc.all[1]);

// const li = document.createElement('li');
// li.className = 'collection-item';
// li.id = 'new-item';
// li.setAttribute('title', 'New Item');
// li.appendChild(document.createTextNode('A new item'));



// document.querySelector('div.item-1').appendChild(li);

// const oldHeading = document.querySelector('h1');
// const newHeading = document.createElement('h2');
// newHeading.id = 'name-title';
// newHeading.appendChild(document.createTextNode('New Heading'));

// oldHeading.parentElement.replaceChild(newHeading, oldHeading);

// const btn = document.querySelector('.submit-btn')
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log('clicked');
//     console.log(e.target.innerText);
// });

document.body.addEventListener('click', addFavorite);

function addFavorite(e) {
    // console.log(e.target);
   
        console.log('Favorite clicked');

        if (e.target.parentElement.parentElement.style['background-color'] === 'yellow') {
            e.target.parentElement.parentElement.style['background-color'] = 'white';
        } else {
            e.target.parentElement.parentElement.style['background-color'] = 'yellow';
        }
    
}



