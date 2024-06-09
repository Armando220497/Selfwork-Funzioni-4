function Palindromo(stringa) {
    // rimuve spazi e segni di punteggiatura
    stringa = stringa.replace(/\W/g, '');

    // split parola per parola poi un reverse e in fine trasforma in stringa con join
    return stringa === stringa.split('').reverse().join('');
}


let inputStringa = "i topi non avevano nipoti";
console.log(Palindromo(inputStringa));  
