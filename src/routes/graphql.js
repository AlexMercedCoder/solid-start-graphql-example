import { rootValue, schema } from "~/lib/graphql";
import { graphql } from "graphql";
import { json } from "solid-start";


// Handler to handle requests to graphql api
const graphQLHandler = async (event) => {  

    // get request body which should be a json {query: String}
    const body = await new Response(event.request.body).json()

    // pass the root, schema and query to graphql and return result
    const result = await graphql({rootValue, schema, source: body.query})
  
    // return a response
    return json({result});
  };
  

// use the handle for GET and POST requests to /graphql
export const GET = graphQLHandler;
export const POST = graphQLHandler;