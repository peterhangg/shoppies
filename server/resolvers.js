module.exports = {
  Query: {
    movies: (_, { title, number }, { dataSources }) =>
      dataSources.movieAPI.getMovie(title, number),
  },
};
