function isPalindrome(str) {
    // Menghapus whitespace dan mengubah ke huruf kecil
    str = str.toLowerCase().replace(/\s/g, "");

    // Membalikkan string
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    // Mengecek apakah string asli dan yang dibalik sama
    return str == reversed ? true : false;
}

console.log(isPalindrome("ABCD"));
console.log(isPalindrome("kasur rusak"));
