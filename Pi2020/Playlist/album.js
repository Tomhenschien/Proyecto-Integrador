console.log("hola");

let querystring = location.search;
let datos = new URLSearchParams(querystring);
let idAlbum = datos.get("id");
console.log(idAlbum);

let proxi = "https://cors-anywhere.herokuapp.com/";
let url = proxi +"https://api.deezer.com/album/"+ idAlbum;

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let nombre = document.querySelector(".nombre");
    nombre.innerHTML += data.title ;
   let cover= document.querySelector(".cover");
   cover.src = data.cover_medium;
   let artista = document.querySelector('.artista');
   artista.innerHTML = `<a href="./artist.html?id=${data.artist.id}">${data.artist.name}</a>`;
    
   
    let datos = data.tracks.data;
    let listados = document.querySelector('.listados ol');
   
    datos.forEach(function(canciones){
        listados.innerHTML += '<div class="linea"> <div class="line"></div></div>' +'<div>'+'<a href="dtrack.html?id='+ canciones.id +'">' + '<li>' + canciones.title + '</li>' + '</a>' + '</div>';
    })
    
    


    
   
})

