
    let queryString = location.search; 
    console.log(queryString);
    
    let searchParams = new URLSearchParams(queryString); 
    console.log(searchParams);
    
    let search = searchParams.get("search"); 
    console.log(search);
    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let url =  proxy + "https://api.deezer.com/search/artist?q=" + search;
    
    
    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(datos){
            
            console.log(datos);
            let lista = document.querySelector('.listado__tracks');
            let resultados = datos.data;
            
            resultados.forEach(function(resultado){
                lista.innerHTML += '<li>' + resultado.name+ '</li>'
            });
           
            
            
        })
        .catch(function(error){
            console.log(error);
            
        });