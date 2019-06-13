export default class MoviestoreService {

  getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }

    return await res.json();
  };

  getAllMovies = async () => {
    const res = await this.getResource('https://api.themoviedb.org/3/movie/popular?api_key=3e14b31f78a5c3b48277270812b2b7fb&language=en-US&page=3');
    return res.results.map(this._transformMovie);
  };

  getSlug = (title) => {
    const str = title.toLowerCase().split(' ');
    return str.join('-');
  }

  getStar = (rate) => {
    if (rate === 0) {
      return 5;
    } else {
      return rate;
    }
  }

  getMovieImage = (path) => {
    return `http://image.tmdb.org/t/p/w300_and_h450_bestv2/${path}`
  };

  _transformMovie = (movie) => {
    return {
      id: movie.id,
      title: movie.title,
      date: movie.release_date,
      star: this.getStar(movie.vote_average),
      cover: this.getMovieImage(movie.poster_path),
      price: this.getStar(movie.vote_average) * 10,
      slug: this.getSlug(movie.title)
    };
  };
}
