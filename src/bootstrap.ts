import { ApolloServer, IResolvers } from 'apollo-server'

export default async (typeDefs: string[], resolvers: IResolvers) => {

    const server = new ApolloServer({
        typeDefs,
        resolvers,
    })

    await server.listen().then(srv => console.log(`Server on at: ${srv.url}`))
}