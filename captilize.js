// by hazique ahmed khan //
function captilize(){

let text = prompt("input enter text");
let words = text.split(" ");
for(var i = 0; i < words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
   
}
const sen = words.join(" ");

document.write(sen);

}
captilize();