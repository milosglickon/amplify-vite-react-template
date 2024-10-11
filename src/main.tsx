import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { I18n } from "aws-amplify/utils"
import ReactDOM from "react-dom/client"
import { Authenticator } from "@aws-amplify/ui-react"
import App from "./App.tsx"
import Diary from "./components/pages/diary"
import Flashcards from "@/components/pages/fleshcards"
import "./index.css"
import { Amplify } from "aws-amplify"
import outputs from "../amplify_outputs.json"
import "@aws-amplify/ui-react/styles.css"
import { translations } from "@aws-amplify/ui-react"
I18n.putVocabularies(translations)
I18n.setLanguage("it")
Amplify.configure(outputs)

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
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator socialProviders={["amazon", "apple", "facebook", "google"]}>
      {/* <Authenticator> */}
      <RouterProvider router={router} />
      {/* <App /> */}
    </Authenticator>
  </React.StrictMode>,
)
