import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import typeDefs from "./Schemas/GQL_Schema.js";
import resolvers from "./Resolver/resolvers.js";
import cors from "cors";
import DBconnect from "./functions/DBconnect.js";
const app = express();
const httpServer = http.createServer(app);



DBconnect()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();
app.use(
  "/graphql",

  cors({
    origin: ["http://localhost:3000", "https://studio.apollographql.com"],
  }),

  express.json(),
  expressMiddleware(server)
);

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000/graphql`);
