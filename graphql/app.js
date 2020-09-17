const Koa = require('koa')
const { MONGO_URI } = require('./database/config')
const {ApolloServer} = require('apollo-server-koa')
const {makeExecutableSchema} = require('graphql-tools')
const {resolvers, typeDefs} = require('./schemas')
const PORT = 3308 //3308 -> ISSUE: PORT 3308 ALREADY IN USE when running node app. Reverting back to 4000 and app is functioning at the level prior to wamp config
const mongoose = require('mongoose');
const server = new ApolloServer({
  schema: makeExecutableSchema({typeDefs, resolvers})
})


//CONNECT TO MONGODB
mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log(err));

const url = config.mongoUrl;

const connect = mongoose.connect(url, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

connect.then(() => console.log('Connected correctly to server'),
  err => console.log(err)
);

const app = new Koa()

server.applyMiddleware({app}) //applying koa middleware to server

app.listen({port: PORT}, () => {
  console.log(`Server ready at http://localhost:${PORT + server.graphqlPath} `)
})