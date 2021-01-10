const { RESTDataSource } = require("apollo-datasource-rest");

if (process.env.NODE_ENV !== "Production") require("./secrets");
class MovieAPI extends RESTDataSource {
  constructor() {
    super();

    this.baseURL = "http://www.omdbapi.com/";
  }
  // Fetch movie query
  async getMovie(title) {
    const response = await this.get(
      `?apikey=${process.env.OMDB_API_KEY}&type=movie&s=${title}`
    );
    return response.Search.map((movie) => {
      return {
        id: movie.imdbID,
        title: movie.Title,
        poster: movie.Poster,
        year: movie.Year
      }
    });
  }
}

module.exports = MovieAPI;
