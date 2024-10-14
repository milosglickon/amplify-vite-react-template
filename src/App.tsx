import { useEffect, useState } from "react"
import { useAuthenticator } from "@aws-amplify/ui-react"
import { get } from "aws-amplify/api"
import { Button } from "@/components/ui/button"
import Dashboard from "@/components/pages/dashboard"
// import { useQuery } from "@tanstack/react-query"
import type { Schema } from "../amplify/data/resource"
import { useClient } from "@/hooks/useClient"
// import { generateClient } from "aws-amplify/data"

// const client = generateClient<Schema>()

function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([])
  const { signOut, user } = useAuthenticator()
  const client = useClient()
  //   const query = useQuery({
  //     queryKey: ["repoData"],
  //     queryFn: () => fetch("https://api.github.com/repos/TanStack/query").then((res) => res.json()),
  //   })

  //   console.log("tanstack query ----->", query)
  //   if (isPending) return "Loading..."

  //   if (error) return "An error has occurred: " + error.message
  async function getItem() {
    try {
      const restOperation = get({
        apiName: "myRestApi",
        path: "items",
      })
      //   const response = await restOperation.response
      const { body } = await restOperation.response
      // consume as a string:
      //   const str = await body.text()
      console.log("GET call succeeded body: ", body)
    } catch (error) {
      //@ts-ignore
      console.log("GET call failed: ", JSON.parse(error.response.body))
    }
  }
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
    getItem()
    client.models.Todo.observeQuery().subscribe({
      next: (data) => {
        setTodos([...data.items])
      },
    })
  }, [])

  //   const createTodo = () => {
  //     client.models.Todo.create({ content: window.prompt("Todo content"), isDone: true })
  //   }

  //   const deleteTodo = (id: string) => {
  //     client.models.Todo.delete({ id })
  //   }

  return (
    <main>
      {/* <h1>{data?.name}</h1> */}
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
      </div> */}
      <Button onClick={signOut}>Sign out</Button>
      <Dashboard />
    </main>
  )
}

export default App
