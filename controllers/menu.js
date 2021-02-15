const moviesBL = require('../Models/moviesBL');
const axios = require('axios');


async function menu(req, res,) {
  res.render('menu', { title: 'Menu' });
}

async function createmovie(req, res) {
  res.render('createmovie', { title: 'Form Movie Page' })
}

async function movies(req, res) {
  try {
    const moviesAPI = await axios.get('https://api.tvmaze.com/shows');
    res.render('Movies', { title: 'Movies', movies: moviesAPI.data });
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
    res.render('movieSingle', { title: 'Movie', movie: moviesAPI.data });
  } catch (err) {
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
  try {
    const moviesAPI = await axios.get(`http://api.tvmaze.com/search/shows?q=${search}`);
    res.render('moviessearch', { title: 'Movies', movies: moviesAPI.data });
  } catch (err) {
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
    id: '',
    name: req.body.name,
    language: req.body.language,
    genre: [req.body.genres, req.body.genres1]
  };
  try {
    await moviesBL.createMovie(obj);
    res.redirect('menu');
  } catch (error) {
    throw error
  }
}

module.exports = { menu, createmovie, movies, movieByID, addmovie, movieSearchBar }

