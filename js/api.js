
const api = {
    list: 'https://api.thecatapi.com/v1/breeds',
    base: 'https://api.thecatapi.com/v1/images/search?breed_ids=',
    key: '34538dac-8d8b-48f1-b58a-2fce9d3c2a83'
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
  
// function displayList (list) {
//     for (var i = 0; i < list.length; i++) {
//       console.log(list[i].id+ ' - ' +list[i].name)
//     }
// }
  
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
  
// function displayResults(breed) {
//     console.log(breed[0].url)
    
//     console.log(breed[0].breeds[0].name)
    
//     console.log(breed[0].breeds[0].description)
    
//     console.log(breed[0].breeds[0].temperament)
    
//     console.log(breed[0].breeds[0].origin)
// }