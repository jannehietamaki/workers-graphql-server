import { ApolloServer } from 'apollo-server-cloudflare'
import { graphqlCloudflare } from 'apollo-server-cloudflare/dist/cloudflareApollo'
import { GqlHandlerOptions } from './index.d'

import KVCache from '../kv-cache'
import PokemonAPI from '../datasources/pokeapi'
import resolvers from '../resolvers'
import typeDefs from '../schema'

const dataSources = () => ({
  pokemonAPI: new PokemonAPI(),
})

const kvCache = { cache: new KVCache() }

const createServer = (graphQLOptions: GqlHandlerOptions) =>
  new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    dataSources,
    ...(graphQLOptions.kvCache ? kvCache : {}),
  })

export default (request: Request, graphQLOptions: GqlHandlerOptions) => {
  const server = createServer(graphQLOptions)
  // @ts-ignore
  return server
    .start()
    .then(() =>
      graphqlCloudflare(() => server.createGraphQLServerOptions(request))(
        request,
      ),
    )
}
