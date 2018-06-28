// // $('#save_lincoln').click(
// //   () => saveLincoln(parseInt($('#interval').val())))
// //
// // function saveLincoln(interval) {
// //   if(isNaN(interval)) {
// //     interval = 10000;
// //   }
// //   $('#foreground').fadeOut(interval);
// // }
//
const input = document.getElementById("interval");
const button = document.getElementById("save_lincoln");
var animation;
const foreground = document.getElementById("foreground");
console.log("opacity", foreground.style.opacity);
let max;

button.addEventListener("click", function(event){
  foreground.style.opacity = 1;
  max = parseInt(input.value) || 10000;
  max /= 10;
  if(animation){
    clearInterval(animation);
  }
  animation = setInterval(fadeout(), 1);
}, false);

function fadeout(){

  let counter = 0;

  return function(){
    console.log(counter, max);
    if(counter++ < max){
      foreground.style.opacity -= (1 / max);
      console.log(foreground.style.opacity);
    } else {
      clearInterval(animation);
    }
  }
}
