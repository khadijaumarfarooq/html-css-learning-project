function changeBorders() {
  const images = document.querySelectorAll('.myImage');
  const borderStyles = ['solid', 'dotted', 'dashed', 'double'];
  // ye manualy hum ek ek py alg border apply kar rahe hen
images[0].style.border=`4px ${borderStyles[0]} #0077cc`
images[1].style.border=`4px ${borderStyles[1]} #0077cc`
images[2].style.border=`4px ${borderStyles[2]} #0077cc`
images[3].style.border=`4px ${borderStyles[3]} #0077cc`   
    // but hum as tarah se ek he easy way me bhi kar sakte hen
    // let index =0
    // for (const img of images) {
    // img.style.border=`4px ${borderStyles[index % borderStyles.length]} #0077cc`;
    // index++;
    // } 
}
// Event listener for button
document.getElementById('changeBorderBtn').addEventListener('click', changeBorders);
