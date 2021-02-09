const moviesBL = require('../Models/moviesBL');
const axios = require('axios');


async function menu(req, res,) {
  res.render('menu', {title: 'Menu'});
}

async function createmovie(req, res) {
  res.render('createmovie', {title: 'Createmovie'})
}

async function searchmovie(req, res) {
  try {
    const moviesAPI = await axios.get('https://api.tvmaze.com/shows');
    res.render('searchmovie', {title: 'Searchmovie', movies: moviesAPI.data });
  } catch (err) {
    if (err.response) {
      console.log(err.response.data)
      console.log(err.response.status)
    } else if (err.requiest) {
      console.log(err.requiest)
    } else {
      console.error('Error',)
    }
  }
}

async function movieByID(req, res) {
  let movieID = req.params.id;
  try {
    const moviesAPI = await axios.get(`https://api.tvmaze.com/shows/${movieID}`);
    res.render('movieSingle', {title: 'Searchmovie-id', movie: moviesAPI.data });
  } 
  catch (err) {
    if (err.response) {
      res.render('movieSingle', { movie: null })
      console.log(err.response.data)
      console.log(err.response.status)
    } else if (err.requiest) {
      res.render('movieSingle', { movie: null })
      console.log(err.requiest)
    } else {
      res.render('movieSingle', { movie: null })
      console.error('Error',)
    }
  }
} 

async function movieSearchBar(req, res) {
  let search = req.body.search
  let input = req.body.input
  console.log(input)
  try {
    const moviesAPI = await axios.get(` http://api.tvmaze.com/search/shows?q=${search}`);
    res.render('moviessearch', {title: 'Searchmovie', movies: moviesAPI.data });
    
  } 
  catch (err) {
    if (err.response) {
      res.render('moviessearch', { movies: null })
      console.log(err.response.data)
      console.log(err.response.status)
    } else if (err.requiest) {
      res.render('moviessearch', { movies: null })
      console.log(err.requiest)
    } else {
      res.render('moviessearch', { movies: null })
      console.error('Error',)
    }
  }
} 

async function addmovie(req, res) {
  let obj = {
    name: req.body.name,
    language: req.body.Lname,
    genre: req.body.select
};
await moviesBL.createMovie(obj);
// const movie = new Movie(req.body.name, req.body.genre)
// await movie.save()

res.render('menu', {title: 'Menu'});
}

module.exports = {menu, createmovie, searchmovie, movieByID, addmovie, movieSearchBar}

