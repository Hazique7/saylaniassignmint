// by hazique ahmed khan //
function longest_word(){
    
    let str = prompt("input text");
   let word = str.split(" ");
   let longest = [""];
  for(var i = 0 ; i < word.length;i++){
      if( word[i].length > longest.length)
      {
           longest = word[i];
      }
  }
  console.log(" the longest word is = " + longest);
}
longest_word();