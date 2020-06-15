  
// Obtener tops para homepage

let proxy = 'https://cors-anywhere.herokuapp.com/';
let url = proxy + "https://api.deezer.com/chart/0/tracks";

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        
        let marvel = document.querySelector('.marvel');
        let resultados = datos.data;


        resultados.forEach(function(track){
            marvel.innerHTML = '<p>' + resultados.title + '</p>' 
        })

    })
    .catch(function(error){
        console.log(error);
        
    })


