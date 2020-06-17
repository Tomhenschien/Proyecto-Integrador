let proxy = 'https://cors-anywhere.herokuapp.com/';
let link = proxy + 'https://api.deezer.com/genre';


fetch(link)
.then(function(response){
    return response.json()
})

.then(function(info){
    console.log(info);
    let genero = info.data;
    let lista = document.querySelector(".listado");
    for(var i=1; i<10; i++) {
        lista.innerHTML += '<ul>' + genero[i].name + '</ul>';
    }
})

.catch(function(error){
    console.log(error);
})

