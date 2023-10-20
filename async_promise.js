//const needle = require('needle')
const axios = require('axios')
const url ="https://pokeapi.co/api/v2/pokemon"

//esto crea la promesa de una vez
/*needle('get', 
url, 
{json:true} )
.then(function(respuesta){
    console.log(respuesta.body.results)
})
.catch(function(error){

})
*/
axios.get( url )
         .then((respuesta) =>{
             let pokemones =respuesta.data.results
             pokemones.forEach((pokemon) => {
                 console.log(pokemon.name)
                 console.log('-------------')
             })
         })
         .catch((error)=>{
                console.log(error)
         })