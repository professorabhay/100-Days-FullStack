import { ApolloServer } from "@apollo/server";
import { User } from "./user";


async function createApolloGraphqlServer() {
    const Server = new ApolloServer({
        typeDefs: `
        ${User.typeDefs}
        type Query {
           ${User.queries}
        }

        type Mutation {
           ${User.mutations}
        }
    `,
        resolvers: {
            Query: {
                ...User.resolvers.queries,
            },
            Mutation: {
                ...User.resolvers.mutations,
            },
        },
    });

    await Server.start();

    return Server;
}


export default createApolloGraphqlServer;