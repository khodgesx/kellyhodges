
let i = 0;
let txt = 'Welcome to my website';
let speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("welcome").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
// const typeWriter = () => {
//     if (i < txt.length) {
//       $('#welcome').innerHTML += txt.charAt(i);
//       i++;
//       setTimeout(typeWriter, speed);
//     }
//   }
