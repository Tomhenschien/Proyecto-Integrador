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
        lista.innerHTML += '<li>'+ '<a href="./Detalle.html?id='+ genero[i].id+ '">'+ genero[i].name + '</a>'+ '</li>';
    }
})

.catch(function(error){
    console.log(error);
})
