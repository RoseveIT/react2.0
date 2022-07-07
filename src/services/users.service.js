const createUsers = (obj) =>{
    return fetch('https://jsonplaceholder.typicode.com/users',
        {
            method: 'POST',
            body: JSON.stringify(obj),
            headers:{
                'Content-type': 'appLication/json; charset=UTF-8',
            }
        })
        .then(value => value.json())
}
export {createUsers}