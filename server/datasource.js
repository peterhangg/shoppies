const { RESTDataSource } = require("apollo-datasource-rest");

if (process.env.NODE_ENV !== "production") require("./secrets");

class MovieAPI extends RESTDataSource {
  constructor() {
    super();

    this.baseURL = "http://www.omdbapi.com/";
  }
  // Fetch movie query
  async getMovie(title, number) {
    const response = await this.get(
      `?apikey=${process.env.OMDB_API_KEY}&type=movie&s=${title}&page=${number}`
    );
    return response.Search;
  }
}

module.exports = MovieAPI;
