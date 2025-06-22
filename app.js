/*function addNumbers() {
  let a = 2;
  let b = 3;
  console.log(a + b);
  return a + b;
}

let pokemonData = {};
let pokemonNames = ['pikachu', 'groudon', 'mewtwo', 'kyogre', 'dialga', 'chikorita', 'haunter', 'mew', 'nidoking'];
/*async function getPokemonData(pokemonName) {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  let data = await response.json();
  //console.log(data.sprites.front_default);
  let img = document.createElement('img');
  img.classList.add("pokemon");
  img.src = data.sprites.front_default;
  document.getElementsByClassName('MainTitle')[0].appendChild(img);
  img.addEventListener('click', event => {
    console.log(`Pokemon at Clicked!`, img);
    images = Array.from(document.getElementsByClassName('CentreTitle')[0].childNodes).filter(a => a.nodeName == 'IMG');
    for(let i = 0; i<images.length; i++)
    {
      images[i].remove();
    }
    getMultiple();
    console.log(`Child at 0 is `, images);
    console.log(`Clicked at ${event.clientX} and ${event.clientY}`);
  });
}*/

/*function clickCheck() {
  let x = document.getElementsByClassName('item');
  Array.from(x).forEach(item => {
    item.addEventListener('click', event => {
      prompt('Meow!');
    });
  });
}

function getUniqueNames(count) {
  if (count > pokemonNames.length) {
    prompt('Count exceeds the numbers of available Pokemons.');
    return;
  }
  let uniqueNames = [];
  for (let i = 0; i < count; i++) {
    const curretPokemon = pokemonNames[Math.floor(Math.random() * pokemonNames.length)];
    if (uniqueNames.includes(curretPokemon)) {
      i--;
      continue;
    }
    uniqueNames.push(curretPokemon);
  }
  return uniqueNames;
}

function getMultiple() {
  let uniqueNames = getUniqueNames(4);

  for (i = 0; i < 4; i++) {
    getPokemonData(uniqueNames[i]);
  }
}

clickCheck();
getMultiple();
addNumbers();

/*fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
  .then(response => response.json())
  .then(data => {
    pokemonData = data;
    console.log(pokemonData);
  })
  .catch(error => console.log(error));*/

//////////////////////Truism//////////////////////////

let currentTranslateY = 0;

function update() {
  requestAnimationFrame(update);
}

scrollDivisionDynamic('AboutText', 2);
scrollDivisionDynamic('AboutHeading');
scrollDivisionDynamic('SelfieImage');
//flipDivisionDynamic('SelfieImage');

function scrollDivisionDynamic(elementName, speed = 5) {
  let element = document.querySelector(`.${elementName}`);
  console.log('Scrolling - ', element);
  document.addEventListener('scroll', function (event) {
    const scrollPercentage = getScrollPercentage();
    element.style.transform = `translateY(${-scrollPercentage * speed}px)`;
  });
  /*for (let el of elements) {
    el.addEventListener('wheel', function (event) {
      console.log(event.deltaY);
        for (let el of elements){
      currentTranslateY += event.deltaY;
      el.style.transform = `translateY(${currentTranslateY}px)`;
  }});
  }*/
}

function flipDivisionDynamic(elementName){
    let element = document.querySelector(`.${elementName}`);
  console.log('Scrolling - ', element);
  document.addEventListener('scroll', function (event) {
    const scrollPercentage = getScrollPercentage();
    element.style.transform = `rotateY(${-scrollPercentage/100 * 90}deg)`;
  });
}

function getScrollPercentage() {
  const scrolltop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercentage = (scrolltop / scrollHeight) * 100;
  console.log('Scroll Percentage - ',scrollPercentage)
  return scrollPercentage;
}
