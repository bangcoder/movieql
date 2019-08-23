import { getMovies } from "./db";

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating)
    // person: (id) => getById()
    // movie: (_, { id }) => getById(id)
    // movie: (_, { id }) => deleteMovies(id)
  }
};

export default resolvers;
