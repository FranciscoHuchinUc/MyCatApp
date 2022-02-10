const api = {
    list: 'https://api.thecatapi.com/v1/breeds',
    base: 'https://api.thecatapi.com/v1/images/search?breed_ids=',
    key: '34538dac-8d8b-48f1-b58a-2fce9d3c2a83'
}

const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
    navClose.classList.add('show-close')
  })
}
if(navClose) {
  navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
      navClose.classList.remove('show-close')
  })
}

getBreed('sfol');

var selectBreed = document.getElementById('breed-option');

selectBreed.addEventListener('change',
  function(){
    var selectedOption = this.options[selectBreed.selectedIndex];
    getBreed(selectedOption.value)
  }
);

function getBreed (breed) {
    fetch(api.base + breed, {
      method: 'GET',
      headers: {
        "x-api-key": api.key
      }
    })
    .then(response => response.json())
    .then(displayResults)
    .catch(error => console.log('Algo salió mal'));
}

function displayResults(breed) {
    let img = document.querySelector('#img-breed')
    img.setAttribute('src', breed[0].url)
    img.style.backgroundImage = `url(${breed[0].url})`

    let name = document.querySelector('#name-breed')
    name.innerHTML = breed[0].breeds[0].name
    
    let description = document.querySelector('#description-breed')
    description.innerHTML = breed[0].breeds[0].description
    
    let temperament = document.querySelector('#temperament-breed')
    temperament.innerHTML = breed[0].breeds[0].temperament
    
    let origin = document.querySelector('#origin-breed')
    origin.innerHTML = breed[0].breeds[0].origin
}

function getListBreeds () {
    fetch(api.list, {
      method: 'GET',
      headers: {
        "x-api-key": api.key
      }
    })
    .then(list => list.json())
    .then(displayList)
    .catch(error => console.log('Algo salió mal'));
}

function displayList (list) {
    for (var i = 0; i < list.length; i++) {
      selectBreed.innerHTML += `<option value="${list[i].id}">${list[i].name}</option>`
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

getListBreeds()