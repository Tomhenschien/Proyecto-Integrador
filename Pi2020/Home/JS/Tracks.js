let proxy = 'https://cors-anywhere.herokuapp.com/';
let url = proxy + 'https://api.deezer.com/chart/0/tracks';


fetch(url)
.then(function(response){
    return response.json()
})

.then(function(informacion){
    console.log(informacion);
    let fotos = informacion.data;
    let bandas = document.querySelector('item-a');
    let cover = '';
    forEach(let i=0; i<10; i++){
        cover += '<div class="box">';
        cover += '<img class="model" src="' + fotos[i].artist.picture_medium + '" alt="' + fotos[i].title + '">';
        cover += '</div>';
    })
    bandas.innerHTML = cover;
})

.catch(function(error){
    console.log(error);
})

let url = proxy + 'https://api.deezer.com/chart/0/tracks';

fetch(url)
.then(function(response){
    return response.json()
})

.then(function(informacion){
    console.log(informacion);
    let fotos = informacion.data;
    let bandas = document.querySelector('item-a');
    let cover = '';
    forEach(let i=0; i<10; i++){
        cover += '<div class="box">';
        cover += '<img class="model" src="' + fotos[i].artist.picture_medium + '" alt="' + fotos[i].title + '">';
        cover += '</div>';
    })
    bandas.innerHTML = cover;
})

.catch(function(error){
    console.log(error);
})
