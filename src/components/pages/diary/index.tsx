import { useNavigate } from "react-router-dom"
import FileUploader from "@/components/common/fileUploader"

import Layout from "@/components/common/layout"
export default () => {
  const navigate = useNavigate()
  return (
    <Layout>
      <div>some diary</div>
      <FileUploader />
    </Layout>
  )
}
