// by hazique ahmed khan //
function Reverse(a){


let rev = 0;
a = +prompt("input number");
let lastDigit;



while(a != 0){



lastDigit = a % 10;

  rev = rev * 10 + lastDigit;

  a = Math.floor(a/10);

}



alert("Reverse number : "+rev);}
Reverse();