import { IResolvers } from 'apollo-server'
import bootstrap from './src/bootstrap'

import resolvers from './src/graphql/resolvers'
import typeDefs from './src/graphql/typeDefs'

bootstrap(typeDefs as any, resolvers as IResolvers)