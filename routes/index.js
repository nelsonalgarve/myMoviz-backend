var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const API_KEY = '4bfe5ec9648a52373072047056bc05ce';

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YmZlNWVjOTY0OGE1MjM3MzA3MjA0NzA1NmJjMDVjZSIsInN1YiI6IjY0YTUxZjY5NWE5OTE1MDEzYTIyY2UyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nIpNeUzjnuYDYjqiy84ix1GYUODdZH3J1_g1EZR11E8'
//   }
// };

router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
        res.json({movies: data.results})
    })
    .catch(err => console.error('error:' + err));
})


module.exports = router;
