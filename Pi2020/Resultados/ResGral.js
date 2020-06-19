let queryString = location.search; 
console.log(queryString);

let searchParams = new URLSearchParams(queryString); 
console.log(searchParams);

let search = searchParams.get("search"); 
console.log(search);


let proxy = 'https://cors-anywhere.herokuapp.com/';
let url =  proxy + "https://api.deezer.com/search/track?q=" + search;


fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        
        console.log(datos);
        let lista = document.querySelector('.trackss');
        let resultados = datos.data;
        
        resultados.forEach(function(resultado){
            lista.innerHTML += '<li>' + '<img src="' + resultado.album.cover_small + '">' + '<a href="../Playlist/track.html?id='+ resultado.id+ '">'+ resultado.title + '</a></li>';
        })
       
        
        
    })
    .catch(function(error){
        console.log(error);
    })


let URL =  proxy + "https://api.deezer.com/search/artist?q=" + search;


fetch(URL)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        
        console.log(datos);
        let lista = document.querySelector('.artists');
        let resultados = datos.data;
        
        resultados.forEach(function(resultados){
            lista.innerHTML += '<li>' + '<img src="' + resultados.picture_small + '">' + '<a href="../Playlist/artist.html?id='+ resultados.id+ '">'+ resultados.name + '</a></li>';
        })
       
        
        
    })
    .catch(function(error){
        console.log(error);
    })

let linkk =  proxy + "https://api.deezer.com/search/album?q=" + search;


fetch(linkk)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        
        console.log(datos);
        let lista = document.querySelector('.albums');
        let resultados = datos.data;
        
        resultados.forEach(function(resultadoss){
            lista.innerHTML += '<li>' + '<img src="' + resultadoss.cover_small + '">' + '<a href="../Playlist/album.html?id='+ resultadoss.id+ '">'+ resultadoss.title + '</a></li>';
        })
       
        
        
    })
    .catch(function(error){
        console.log(error);
    })

