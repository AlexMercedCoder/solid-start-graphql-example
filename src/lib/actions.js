// function to make GraphQL API calls

export async function gqlCall(query) {
  // make graphql query
  const response = await fetch("http://localhost:3000/graphql", {
    method: "POST",
    body: JSON.stringify({ query }),
  });
  // turn response into javascript object
  const gqlresponse = await response.json();
  // return response
  return gqlresponse;
}

// Query String for Getting Todos
export const GET_TODOS = `
query {
    getTodos{
      message
    }
  }
`;

// function to generate createTodo query string
export const CREATE_TODO = (message) => `
mutation {
    createTodo(message: "${message}")
  }
`;
