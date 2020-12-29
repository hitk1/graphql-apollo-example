import { IResolvers, IResolverOptions } from "apollo-server";

export default {
    Query: {
        users: () => [
            {
                _id: 1,
                firstName: 'Luis Paulo',
                lastName: 'Degini',
                email: 'luispaulo.degini@gmail.com',
                active: true
            }
        ],
        user: (_: any, { id }: any) => ({
            _id: 1,
            firstName: 'Luis Paulo',
            lastName: 'Degini',
            email: 'luispaulo.degini@gmail.com',
            active: true
        }),
        test: (parent: any, object: any, context: any) => {

            console.log('parent', parent)
            console.log('object', object)
            console.log('context', context)
            return '10'
        }
    },
    Mutation: {
        createUser: (_: any, { data }: any) => ({
            _id: 1,
            firstName: 'Luis Paulo',
            lastName: 'Degini',
            email: 'luispaulo.degini@gmail.com',
            active: true
        }),
        updateUser: (_: any, { data }: any) => ({
            _id: 1,
            firstName: 'Luis Paulo',
            lastName: 'Degini',
            email: 'luispaulo.degini@gmail.com',
            active: true
        }),
        deleteUser: (_: any, { data }: any) => ({
            _id: 1,
            firstName: 'Luis Paulo',
            lastName: 'Degini',
            email: 'luispaulo.degini@gmail.com',
            active: true
        })
    }
} as IResolvers