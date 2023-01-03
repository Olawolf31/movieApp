/* import Movie from "./components/Movie";
import { useState, useEffect } from 'react'

function App() {

  const [movieApi, setMovieApi] = useState([])
  const [searchMovie, setSearchMovie] = useState("")
  const [searchMovieApi, setSearchMovieApi] = useState([])


  useEffect(() => {
    renderMovies(movieApi)
  }, [movieApi]) */

  //API that renders popular movies

/*   const renderMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=5937463b7b9319e7338234b8ac01aa55`;
    const res = await fetch(url)
    const data = await res.json();
    setMovieApi(data.results)

  } */

  //API that renders search

/* const searchAPI = async (e) => {
  e.preventDefault();
    const url2 = `https://api.themoviedb.org/3/search/movie?api_key=5937463b7b9319e7338234b8ac01aa55&query=${searchMovie}`;
    const res = await fetch(url2)
    const data = await res.json();
    setSearchMovieApi(data.results)
  } 

  useEffect(() => {
    searchAPI(searchMovieApi)
  }, [searchMovieApi])

  const allMovies = movieApi.map((movieAll) => {
    return <Movie key={movieAll.id} movies={movieAll} />
  })

  const allMoviesSearch = searchMovieApi.map((movieAllSearch) => {
    return <Movie key={movieAllSearch} movies={movieAllSearch} />
  }) */

  //Search inputbox

/*   const clickSearch = (event) => {
    setSearchMovie(event.target.value)
  } */

/*   //Search movies function
  const searchComplete = () => {
    renderMovies(searchMovie)
  } */

 /*  return (
    <div>

      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">Moviee</span>
          <div className="d-flex">
            <input className="form-control me-2"
              type="search" onChange={clickSearch} 
              value={searchMovie}
              placeholder="Search"
              aria-label="Search" />
            <button onClick={searchAPI} className="btn btn-outline-success"
              type="submit"><span style={{ color: "#fff" }}>
                Search
              </span>
            </button>
          </div>

        </div>
      </nav>

      


      <div className="header-title">TOP RATED MOVIES</div>


      <div className="container-main">
        <div className="grid">{allMoviesSearch}
        {allMovies}</div>
      </div>
    </div>
  );
}

export default App; */