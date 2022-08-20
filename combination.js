// by hazique ahmed khan //
function comb(){
const str = prompt("input string");
document.write(str );
const allCombinations = (str1 = '') => {
   const arr = [];
   for (let x = 0, y=1; x < str1.length; x++,y++) {
      arr[x]=str1.substring(x, y);
   };
   const combination = [];
   let temp= "";
   let len = Math.pow(2, arr.length);
   for (let i = 0; i < len ; i++){
      temp= "";
      for (let j=0;j<arr.length;j++) {
         if ((i & Math.pow(2,j))){
            temp += arr[j];
         }
      };
      if (temp !== ""){
         combination.push(temp);
      }
   }
   return combination;
};
document.write(allCombinations( str));
}
comb();