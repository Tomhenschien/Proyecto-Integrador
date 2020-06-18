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
        let lista = document.querySelector('.lista');
        let resultados = datos.data;
        
        resultados.forEach(function(resultado){
            lista.innerHTML += '<li>' + '<a href="file:///Users/BigTuna/Documents/PI2020/Proyecto-Integrador/Pi2020/Playlist/track.html?id='+ resultado.id+ '">'+ resultado.title + '</a></li>';
        })
       
        
        
    })
    .catch(function(error){
        console.log(error);
    })

  