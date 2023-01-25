import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.github.com'
})

// /repos/felipe7281/desafio-04-github-blog/