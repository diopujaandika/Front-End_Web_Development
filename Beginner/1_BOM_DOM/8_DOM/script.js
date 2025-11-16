// DOM Selection
// document.getElementById(); => Return Element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Dio Puja Andika'

// document.getElementTagName(); => Return HTML Collection
const paragraf = document.getElementsByTagName('p');
for(let i = 0; i < paragraf.length; i++) {
    paragraf[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// document.getElementByClassName(); => HTMLCollection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Ini diubah dari JavaScript';


// innerHTML
const judulUtama = document.getElementById('judul');
judul.innerHTML = '<b>Dio P. Andika</b>';

const sectionA = document.querySelector('section#a');
sectionA.innerHTML = '<div><h2>Section A</h2></div>!';