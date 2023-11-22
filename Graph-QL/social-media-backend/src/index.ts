import express from 'express';
import { expressMiddleware } from "@apollo/server/express4";
import createApolloGraphqlServer from './graphql';

async function init() {
    const app = express();
    const PORT = Number(process.env.PORT) || 8000;

    app.use(express.json());

    app.get('/', (req, res) => {
        res.json({ message: "Server Is Running" });
    });

    const Server = await createApolloGraphqlServer ();

    app.use('/graphql', expressMiddleware(Server));

    app.listen(PORT, () => console.log(`Server is running at PORT: ${PORT}`));
}

init();