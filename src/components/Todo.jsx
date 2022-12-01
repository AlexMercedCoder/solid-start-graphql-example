import { client } from "~/lib/trpc/client";
import { createRouteAction, useRouteData } from "solid-start";

export default function Todo() {

  // bring the route data into our component
  const todos = useRouteData();

  // define a form for creating a todo using solid-states action system
  const [_, { Form }] = createRouteAction(async (formData) => {
    // take form input and submit input to server using client
    await client.createTodo.mutate({message: formData.get("message")})
  });

  return (
    <div>
      <ul>
        {todos()?.map((todo) => (
          <li>{todo.message}</li>
        ))}
      </ul>
      <Form>
          <input type="input" name="message"/>
          <input type="submit"/>
      </Form>
    </div>
  );
}
