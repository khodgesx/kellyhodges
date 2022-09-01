
const button = document.getElementById('get-joke')
const welcomeBox = document.getElementById('welcome-section')
const jokeP = document.getElementById('joke')


//Joke function for Joke api
const jokes = async()=>{

  //old linke for code zen: https://api.github.com/zen
  const urlString = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

  const response = await fetch(urlString);
  const results = await response.json();
  
  results.joke.length > 100 ? $('#welcome-section').addClass('big-joke-area') && $('#joke').addClass('big-joke-font')
  : $('#welcome-section').removeClass('big-joke-area') && $('#joke').removeClass('big-joke-font')
  
  results.joke.length > 50 ? 
  jokeP.classList.add('big-joke-font') 
  && 
  welcomeBox.classList.add('big-joke-area')
  :
  jokeP.classList.remove('big-joke-font') 
  && 
  welcomeBox.classList.remove('big-joke-area')

  //set joke text for joke <p> element
  jokeP.innerHTML = results.joke;
  

  
}

//Event Listener
button.addEventListener('click', jokes)
