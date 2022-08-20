// by hazique ahmed khan //
function j(){
    var arr=[13,26,113,9,578];
    var len = arr.length;
    var max = arr[0];
    var min = arr[1];
    var jmax = arr[0];
    var jmin =arr[0];
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] > max){
        jmax = max;
        max = arr[i];
      }
    }
    console.log(max);
    console.log(jmax);
    for (var j = 0; j < arr.length; j++) {
      if(arr[j]<min){
        jmin = min;
        min = arr[j];
      }
    }
    console.log(min);
    console.log(jmin);
    
  }
  j();
