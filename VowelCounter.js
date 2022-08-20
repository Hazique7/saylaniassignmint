// by hazique ahmed khan //
function VowelCounter(){
    var count = 0;
    var text = prompt("input enter text");
    var sep = text.split("");
    for( var i =0 ; i < sep.length; i++){
        if(sep[i] === "a" || sep[i] === "e" || sep[i] === "i" || sep[i] === "o" || sep[i] === "u"){
             count++;
        }
    }
    document.write("the number of vowels are " +  count);
}
VowelCounter();