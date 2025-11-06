// METHOD PROPMPT()
/*
    Method prompt() akan mengembalikan sebuah value sesuai dengan inputan user. 
*/

let pesanInput = prompt('Masukkan pesan sesukamu...');
console.log(pesanInput);

console.log(`Tipe data dari \`pesanInput\` adalah ${typeof pesanInput}`);

// Memeberikan nilai default untuk prompt()
let name = prompt('Silahkan masukkan nama Anda!', 'Jhon Doe');