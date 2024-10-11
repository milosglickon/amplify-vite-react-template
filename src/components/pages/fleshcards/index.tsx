import { FlashcardArray } from "react-quizlet-flashcard"
import Layout from "@/components/common/layout"

export default () => {
  const cards = [
    {
      id: 1,
      frontHTML: (
        <div>
          What is the capital of <u>Alaska</u>?
        </div>
      ),
      backHTML: <>Juneau</>,
    },
    {
      id: 2,
      frontHTML: <>What is the capital of California?</>,
      backHTML: <>Sacramento</>,
    },
    {
      id: 3,
      frontHTML: <>What is the capital of New York?</>,
      backHTML: <>Albany</>,
    },
  ]
  return (
    <Layout>
      <div>
        <FlashcardArray
          frontCardStyle={{ backgroundColor: "#2563eb", color: "#fff" }}
          backCardStyle={{ color: "#2563eb" }}
          frontContentStyle={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          backContentStyle={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          cards={cards}
        />
      </div>
    </Layout>
  )
}
