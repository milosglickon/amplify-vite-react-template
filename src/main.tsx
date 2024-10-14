import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { I18n } from "aws-amplify/utils"
import ReactDOM from "react-dom/client"
import { Authenticator } from "@aws-amplify/ui-react"
import App from "./App.tsx"
import Diary from "./components/pages/diary"
import Flashcards from "@/components/pages/fleshcards"
import Calendar from "@/components/pages/calendar"
import "./index.css"
import { Amplify } from "aws-amplify"
import outputs from "../amplify_outputs.json"
import "@aws-amplify/ui-react/styles.css"
import { translations } from "@aws-amplify/ui-react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import type { Schema } from "../amplify/data/resource"
import { generateClient } from "aws-amplify/data"

const client = generateClient<Schema>()

const queryClient = new QueryClient()

Amplify.configure(outputs)
const existingConfig = Amplify.getConfig()
Amplify.configure({
  ...existingConfig,
  API: {
    ...existingConfig.API,
    //@ts-ignore
    REST: outputs.custom.API,
  },
})

I18n.putVocabularies(translations)
I18n.setLanguage("it")

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/diary",
    element: <Diary />,
  },
  {
    path: "/flashcards",
    element: <Flashcards />,
  },
  {
    path: "/calendar",
    element: <Calendar />,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator socialProviders={["amazon", "apple", "facebook", "google"]}>
      {/* <Authenticator> */}
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
      {/* <App /> */}
    </Authenticator>
  </React.StrictMode>,
)
