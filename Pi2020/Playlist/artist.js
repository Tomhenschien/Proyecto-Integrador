let querystring = location.search;
let datos = new URLSearchParams(querystring);
let idartist = datos.get("id");
console.log(idartist);

let proxi = "https://cors-anywhere.herokuapp.com/";
let url = proxi +"https://api.deezer.com/artist/"+ idartist;

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let nombreA = document.querySelector(".nombreA");
    nombreA.innerHTML= "<h1>"+ data.name + "</h1>";
    nombreA.style.textTransform = "uppercase";
    let tipo = document.querySelector(".tipo");
    tipo.innerHTML = data.type;
    tipo.style.textTransform = "uppercase";
    let seguidoresA = document.querySelector(".seguidoresA");
    seguidoresA.innerHTML = "<h4>Seguidores: "+data.nb_fan+"</h4>";

})
let urlt =proxi+ "https://api.deezer.com/artist/"+idartist+"/top?limit=5";
console.log(urlt);

fetch(urlt)
.then(function(response){
    return response.json();
})
.then(function(datos){
    let respuesta = datos.data
    console.log(respuesta);
    let ranking = document.querySelector(".ranking");
    console.log(ranking);
    
    respuesta.forEach(function(track) {
        ranking.innerHTML += "<li class='cancion'><a href='dTrack.html?id="+track.id+"'>"+track.title+"</a></li>";
    })
})

let urla =proxi+ "https://api.deezer.com/artist/"+idartist+"/albums?limit=3";

fetch(urla)
.then(function(response){
    return response.json();
})
.then(function(datos){
    let respuesta = datos.data
    console.log(respuesta);    
    })
