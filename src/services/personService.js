const baseUrl = 'http://localhost:3001/persons';

const getPersons = () => {
    return fetch(baseUrl)
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((error) => alert(`ERROR: ${error}`))
}

const create = (newObject) => {
    const request = fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newObject)
    })
    .then(response => {
        return response.json()
    })
    return request;
};
const updatePerson = (id, newObject) => {
    const request= fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newObject)
    })
    .then(response => {
        return response.json()
    })
    return request;
};


const deletePerson = (id) => {
    return fetch(`http://localhost:3001/persons/${id}`, {
        method: 'DELETE',
    })
    .then(response => { return response.json()})
    .catch((error) => alert(`ERROR: ${error}`));
}
export default{
    getPersons: getPersons,
    deletePerson: deletePerson,
    create: create,
    updatePerson: updatePerson
}