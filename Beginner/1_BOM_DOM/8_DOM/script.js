// DOM Selection
// document.getElementById(); => Return Element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Dio Puja Andika'

// document.getElementTagName(); => Return HTML Collection
const paragraf = document.getElementsByTagName('p');
paragraf[3].style.backgroundColor = 'lightblue';