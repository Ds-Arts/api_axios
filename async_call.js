//commonjs(asugnan la dependencia a una variable apra que estas se utiliccen) 
//module(mas moderno a dependencias)
const request = require('request')

const url ="https://pokeapi.co/api/v2/pokemon"

//importando el metodo request que permitira hacer una peticion
let r = request(url,
                {json: true},
                //se ejecutara cuando se hagga la request y se traiga la response
                //se podra traer la response en tres parametros
                (error, respuesta, body) =>{
                    //esta estructura sol sitve pera pokemon el resto es solo el body
                    let pokemones =body.results
                    //funcion y recorrer con una variable la cual solo mostrara el nombre
                    pokemones.forEach((pokemon) => {
                        console.log(pokemon.name)
                        console.log('-------------')
                    })
                })