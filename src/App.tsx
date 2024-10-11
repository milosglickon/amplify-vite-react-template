import { useEffect, useState } from "react"
import { useAuthenticator } from "@aws-amplify/ui-react"
import type { Schema } from "../amplify/data/resource"
import { generateClient } from "aws-amplify/data"
import Dashboard from "@/components/pages/dashboard"

const client = generateClient<Schema>()

console.log("client----->", client)

function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([])
  console.log("todos----->", todos)
  //   const { signOut, user } = useAuthenticator()

  //   async function getTodo() {
  //     try {
  //       const restOperation = get({
  //         apiName: "Todo",
  //         path: "/todo",
  //       })
  //       const response = await restOperation.response
  //       console.log("GET call succeeded: ", response)
  //     } catch (e) {
  //       //@ts-ignore
  //       console.log("GET call failed: ", JSON.parse(e.response.body))
  //     }
  //   }

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    })
  }, [])

  const createTodo = () => {
    client.models.Todo.create({ content: window.prompt("Todo content") })
  }

  const deleteTodo = (id: string) => {
    client.models.Todo.delete({ id })
  }

  return (
    <main>
      {/* <h1>{user?.signInDetails?.loginId}'s todos</h1>
      <h1>My todos</h1>
      <Button onClick={createTodo}>+ new</Button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => deleteTodo(todo.id)}>
            {todo.content}
          </li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
      </div>
      <Button onClick={signOut}>Sign out</Button> */}
      <Dashboard />
    </main>
  )
}

export default App
