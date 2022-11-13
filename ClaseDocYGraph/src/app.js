import express from 'express';
import usersRouter from './routes/users.router.js';
import __dirname from './utils.js';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUiExpress from 'swagger-ui-express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './typeDefs.js';
import resolvers from './resolvers.js';

const app = express();
const PORT = process.env.PORT||8080;

const swaggerOptions = {
    definition: {
        openapi:'3.0.1',
        info: {
            title:"API de usuarios Coder",
            description:"Es una api para probar documentación"
        }
    },
    apis:[`${__dirname}/docs/**/*.yaml`]
}
const specs = swaggerJsdoc(swaggerOptions);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api-docs',swaggerUiExpress.serve,swaggerUiExpress.setup(specs))

app.use('/api/users',usersRouter);

const aServer = new ApolloServer({
    typeDefs,
    resolvers
})

await aServer.start();
aServer.applyMiddleware({app})

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))