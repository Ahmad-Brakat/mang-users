import axios from "axios";
export function getAllUsers() {
    try {
        const res = axios.get('https://json-serverr.herokuapp.com/users')
        return res
    } catch (error) {
        console.log(error)
    }
}
export function getById(id) { 
    axios.get('https://jsonplaceholder.typicode.com/users')
        
    // const user = axios.get('https://jsonplaceholder.typicode.com/users').find(item => item.id === id)
    // return Promise.resolve(user)  

    // fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
    //     response.json())
    //     .then((json) => console.log(json));
}