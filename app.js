
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

//quote button for quote api
async function quotes(){

  const urlString = 'https://api.github.com/zen';
  const response = await fetch(urlString);
  const results = await response.text();

  $('#quote').html(results)
  
}
$('#get-quote').on('click', quotes);
