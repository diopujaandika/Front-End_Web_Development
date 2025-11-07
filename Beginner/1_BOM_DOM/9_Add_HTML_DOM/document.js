// MENAMBAHKAN ELEMEN HTML KE DOM
/*
    appendChild() => Fungsinya adalah menambahkan atau menyisipkan sebuah child elemen ke bagian akhir dari sebuah elemen.

    insertBefore() => Memberikan kemampuan untuk menyisipkan elemen sebelum child elemen tertentu dalam parent element.
    insertBefore menerima 2 parameter yaitu:
    1. Elemen baru yang ingin disisipkan. 
    2. Child element yang akan dijadikan patokan diletakkannya elemen baru.
*/

// Menambahkan elemen dengan appendChild()
const newElement = document.createElement('li');
newElement.innerText = 'Selamat menikmati!';
const daftar = document.getElementById('daftar');
daftar.appendChild(newElement);

// Menambahkan elemen dengan insertBefore()
const elementAwal = document.createElement('li');
elementAwal.innerText = 'Hidupkan kompor.';
const itemAwal = document.getElementById('awal');
daftar.insertBefore(elementAwal, itemAwal);