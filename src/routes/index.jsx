import { Title } from "solid-start";
import Todo from "~/components/Todo";
import { createRouteData } from "solid-start";
import { gqlCall, GET_TODOS } from "~/lib/actions";

// define our route data, server provided data to frontend
export function routeData() {
  console.log("hello")
return createRouteData(async () => {
  const todos = await gqlCall(GET_TODOS);
  console.log(await todos)
  return await todos;
});
}

export default function Home() {
  return (
    <main>
      <Title>Todo App</Title>
      <Todo/>
    </main>
  );
}
