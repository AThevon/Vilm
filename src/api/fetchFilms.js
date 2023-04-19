import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const urlApi = 'https://ghibliapi.herokuapp.com/films';

export async function fetchFilms() {
    const url = '';
    try {
        const response = await axios(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}