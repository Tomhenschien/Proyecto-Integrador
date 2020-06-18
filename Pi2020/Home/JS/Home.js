
let proxy = 'https://cors-anywhere.herokuapp.com/';
let url = proxy + "https://api.deezer.com/chart/0/";


fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        
        let tracks = document.querySelector('.trackss');
        let artists = document.querySelector('.artists');
        let albums = document.querySelector('.albums');

        let resultadosTracks = datos.tracks.data;
        let resultadosArtists = datos.artists.data;
        let resultadosAlbums = datos.albums.data;  



        resultadosTracks.forEach(function(track){
            tracks.innerHTML += '<li>' + '<a href="Detalle.html?id='+ track.id+ '">'+ track.title + '</a></li>' 
        })

        resultadosArtists.forEach(function(artist){
            artists.innerHTML += '<li>' + '<a href="Detalle.html?id='+ artist.id+ '">'+ artist.name + '</a></li>' 
            
        })

        resultadosAlbums.forEach(function(album){
            albums.innerHTML += '<li>' + '<a href="Detalle.html?id='+ album.id+ '">'+ album.title + '</a></li>' 
        })

    })
    .catch(function(error){
        console.log(error);
        
    })

