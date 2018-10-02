const {ApolloServer} = require('apollo-server');
const glue = require('schemaglue');

const {schema, resolver} = glue('src/graphql');

const server = new ApolloServer({
    typeDefs: schema,
    resolvers: resolver
});

server.listen().then(({url}) => {
    console.log(`Server ready at ${url}`);
});