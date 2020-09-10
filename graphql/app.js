const Koa = require('koa')
const {ApolloServer} = require('apollo-server-koa')
const {makeExecutableSchema} = require('graphql-tools')
const {resolvers, typeDefs} = require('./schemas')
const PORT = 3308 //3308 -> ISSUE: PORT 3308 ALREADY IN USE when running node app. Reverting back to 4000 and app is functioning at the level prior to wamp config

const server = new ApolloServer({
  schema: makeExecutableSchema({typeDefs, resolvers})
})

const app = new Koa()

server.applyMiddleware({app}) //applying koa middleware to server

app.listen({port: PORT}, () => {
  console.log(`Server ready at http://localhost:${PORT + server.graphqlPath} `)
})