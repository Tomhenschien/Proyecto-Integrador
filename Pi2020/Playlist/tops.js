// Obtener tops para homepage

let proxy = 'https://cors-anywhere.herokuapp.com/';
let url = proxy + "https://api.deezer.com/chart/0/";


fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        
        let artist = document.querySelector('.artists');
        let album = document.querySelector('.album');
        let tracks = document.querySelector('.tracks');

        let resultadoArtista = datos.artists.data;

        let resultadoAlbum = datos.album.data;

        let resultadoTrack = datos.track.data;



        resultadoTrack.forEach(function(track){
            tracks.innerHTML += '<li>' + '<a href="track.html?id='+ track.id+ '">'+ track.title + '</a></li>' 
        })

        resultadoArtista.forEach(function(artist){
            artist.innerHTML += '<li>' + '<a href="track.html?id='+ artist.id+ '">'+ artist.name + '</a></li>' 
        })

        resultadoAlbums.forEach(function(album){
            album.innerHTML += '<li>' + '<a href="track.html?id='+ album.id+ '">'+ album.title + '</a></li>' 
        })

    })
    .catch(function(error){
        console.log(error);
        
    })


