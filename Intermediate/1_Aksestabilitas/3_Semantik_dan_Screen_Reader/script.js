const button = document.querySelector('button');
const divButton = document.querySelector('div.button');
const content = document.querySelector('#output');

button.addEventListener('click', clickHandler);
divButton.addEventListener('click', clickHandler);

function clickHandler(event) {
  if (event.currentTarget.tagName.toLowerCase() === 'button') {
    content.textContent = 'Kamu berhasil menekan elemen <button>!';
  } else {
    content.textContent = 'Kamu berhasil menekan elemen <div>!';
  }

  setTimeout(() => {
    content.textContent = `
      Coba tekan tombol menggunakan cursor dan menggunakan keyboard
      (gunakan tombol Tab dan Space/Enter untuk melakukan aksi klik).
    `;
  }, 1000);
}
