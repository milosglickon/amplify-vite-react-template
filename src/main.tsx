import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { I18n } from "aws-amplify/utils"
import ReactDOM from "react-dom/client"
import { Authenticator, useAuthenticator, CheckboxField } from "@aws-amplify/ui-react"
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

const queryClient = new QueryClient()

Amplify.configure(outputs)
const existingConfig = Amplify.getConfig()
Amplify.configure({
  ...existingConfig,
})

I18n.putVocabularies(translations)
I18n.setLanguage("it")

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home/diary",
    element: <Diary />,
  },
  {
    path: "/home/activities",
    element: <Flashcards />,
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

const formFields = {
  signIn: {
    username: {
      dialCode: "+39",
    },
  },
  signUp: {
    phone_number: {
      dialCode: "+39",
      order: 1,
    },
    email: {
      label: "La tua mail",
      placeholder: "Inserisc la mail",
      isRequired: false,
      order: 2,
    },
    password: {
      label: "Password:",
      placeholder: "Enter your Password:",
      isRequired: true,
      order: 3,
    },
    confirm_password: {
      label: "Confirm Password:",
      order: 4,
    },
  },
}

const components = {
  SignUp: {
    FormFields() {
      const { validationErrors } = useAuthenticator()

      return (
        <>
          {/* Re-use default `Authenticator.SignUp.FormFields` */}
          <Authenticator.SignUp.FormFields />

          {/* Append & require Terms and Conditions field to sign up  */}
          {/*@ts-ignore*/}
          <CheckboxField
            errorMessage={validationErrors.acknowledgement as string}
            hasError={!!validationErrors.acknowledgement}
            name="acknowledgement"
            value="yes"
            label=<a href="https://www.google.com" className="font-medium">
              I agree with the <span className="underline">Privacy policy</span>
            </a>
          />
        </>
      )
    },
  },
}

const services = {
  //@ts-ignore
  async validateCustomSignUp(formData) {
    if (!formData.acknowledgement) {
      return {
        acknowledgement: "You must agree to the privacy policy",
      }
    }
  },
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator formFields={formFields} components={components} services={services}>
      {/* <Authenticator> */}
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
      {/* <App /> */}
    </Authenticator>
  </React.StrictMode>,
)
