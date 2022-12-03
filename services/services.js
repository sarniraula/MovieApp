import axios from "axios";

const BASEURL = 'https://api.themoviedb.org/3';
const APIKEY = 'api_key=ef32fc896efd5468e886b93c9e1dc616';

//Get Popular Movies
export const getPopularMovies = async() => {
    const resp = await axios.get(`${BASEURL}/movie/popular?${APIKEY}`)
    return resp.data.results;
}

//Get Upcoming Movies
export const getUpcomingMovies = async() => {
    const resp = await axios.get(`${BASEURL}/movie/upcoming?${APIKEY}`)
    return resp.data.results;
}

//Get Popular TV
export const getPopularTV = async() => {
    const resp = await axios.get(`${BASEURL}/tv/popular?${APIKEY}`)
    return resp.data.results;
}