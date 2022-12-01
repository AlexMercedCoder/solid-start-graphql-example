import { gqlCall, CREATE_TODO } from "~/lib/actions";
import { createRouteAction, useRouteData } from "solid-start";

export default function Todo() {

  // bring the route data into our component
  const r = useRouteData()();

  // define todos
  const todos = r?.result?.data?.getTodos

  // define a form for creating a todo using solid-states action system
  const [_, { Form }] = createRouteAction(async (formData) => {
    await gqlCall(CREATE_TODO(formData.get("message")))
  });

  return (
    <div>
      <ul>
        {todos.map((todo) => (
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
