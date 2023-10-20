const axios = require('axios')
const url ="https://pokeapi.co/api/v2/pokemon"

async function obtenerPokes(){
    try {
        const respuesta = await axios.get(url);
        console.log(respuesta.data.results)
    } catch (error) {
        console.log(error)
    }

}

obtenerPokes()