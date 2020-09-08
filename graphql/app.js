const Koa = require('koa')
const {ApolloServer} = require('apollo-server-koa')
const {makeExecutableSchema} = require('graphql-tools')
const {resolvers, typeDefs} = require('./schemas')
const PORT = 4000 //3308

const server = new ApolloServer({
  schema: makeExecutableSchema({typeDefs, resolvers})
})

const app = new Koa()

server.applyMiddleware({app}) //applying koa middleware to server

app.listen({port: PORT}, () => {
  console.log(`Server ready at http://localhost:${PORT + server.graphqlPath} `)
})