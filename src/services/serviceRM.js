const getUsers = () =>{
    return fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
}
const getUser = (id) =>{
    return fetch('https://rickandmortyapi.com/api/character/'+id)
        .then(value => value.json())
}
export {getUsers,getUser}