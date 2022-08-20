// by hazique ahmed khan //
function CheckPrime(){
    let count = 0;
   let num = prompt("input number");
   if(num >= 2)
   {
       for(let i = 0 ; i <= num; i++)
       {
           if(num%i==0)
           {
               count++;
           }}
           if(count==2)
           {
               alert("its prime");

           }
           else
           alert("its not prime");
       
   }
}
CheckPrime();