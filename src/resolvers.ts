export default {
  Query: {
    pokemon: async (_source: string, { id }: any, { dataSources }: any) => {
      return dataSources.pokemonAPI.getPokemon(id)
    },
  },
}
