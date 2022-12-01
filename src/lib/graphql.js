// import graphql
import { buildSchema} from "graphql";

// sample data
const todos = [{message: "Breakfast"}]

// Define and export our graphQL schema
export const schema = buildSchema(`
  type Todo {
      message: String
  }

  type Query {
    getTodos: [Todo] 
  }

  type Mutation {
    createTodo(message: String): String
  }
`);

// define and export our resolvers/rootvalue
export const rootValue = {
  // Resolver for getTodos query
  getTodos: () => todos,
  // Resolver for createTodo mutation
  createTodo: (args) => {
      const message = args.message
      todos.push({message})
      return "success"
  }
};
