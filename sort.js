// by hazique ahmed khan //
function sort(){
    var input = prompt("input string");
    document.write(input);
    var arr = input.split("");
    // console.log(arr);
   arr.sort();
   document.write( " " +  arr);
}
sort();