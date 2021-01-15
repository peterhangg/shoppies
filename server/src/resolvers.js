module.exports = {
  Query: {
    movies: async (_, { title }, { dataSources }) => {
      return dataSources.movieAPI.getMovie(title);
    },
  },
};
