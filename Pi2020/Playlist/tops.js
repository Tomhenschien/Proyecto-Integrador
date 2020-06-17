// Obtener tops para homepage

let proxy = 'https://cors-anywhere.herokuapp.com/';
let url = proxy + "https://api.deezer.com/chart/0/";


fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        
        let artists = document.querySelector('.artists');
        let albums = document.querySelector('.albums');
        let tracks = document.querySelector('.tracks');

        let resultadoArtista = datos.artists.data;
        let resultadoAlbums = datos.albums.data;
        let resultadoTrack = datos.tracks.data;     


        resultadoTrack.forEach(function(track){
            tracks.innerHTML += '<li>' + '<a href="track.html?id='+ track.id+ '">'+ track.title + '</a></li>' 
        })

        resultadoArtista.forEach(function(artist){
            artists.innerHTML += '<li>' + '<a href="track.html?id='+ artist.id+ '">'+ artist.name + '</a></li>' 
            
        })

        resultadoAlbums.forEach(function(album){
            albums.innerHTML += '<li>' + '<a href="track.html?id='+ album.id+ '">'+ album.title + '</a></li>' 
        })

    })
    .catch(function(error){
        console.log(error);
        
    })


