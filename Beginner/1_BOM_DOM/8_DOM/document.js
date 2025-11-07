// MEMANIPULASI ATRIBUT MELALUI setAttribute

/*
    Kita bisa memanipulasi elemen HTML yang kita tangkap melalui DOM. Salah satunya adalah atribut.

    Method yang digunakan adalah setAttribute() yang dipanggil dari elemen yang telah ditangkap.

    element.setAttribute('nama_atribute_sasaran', 'nilai_atribute_sasaran');
*/

const gambar = document.getElementById("gambar");
gambar.setAttribute('width', 300);
gambar.setAttribute('height', 215);

const buttons = document.querySelectorAll('.button');
const playButton = buttons[3];
const playButtonElement = playButton.children[0];
playButtonElement.setAttribute('disabled', true);

const links = document.getElementById('links');

// Menipulasi dengan innerText
const dicoding = document.getElementById('dicodingLink');
dicoding.innerText = "Belajar Programming di Dicoding";

// Menipulasi dengan innerHTML
dicoding.innerHTML = "<i>Belajar Programming di Dicoding</i>";

// Manipulasi style konten dengan style.property

