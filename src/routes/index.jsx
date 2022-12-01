import { Title } from "solid-start";
import Todo from "~/components/Todo";
import { createRouteData } from "solid-start";
import { client } from "~/lib/trpc/client";

// define our route data, server provided data to frontend
export function routeData() {
return createRouteData(async () => {
  // fetch todos using client
  const todos = await client.getTodos.query()

  // return todos
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
