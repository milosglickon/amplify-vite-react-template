// import { useNavigate } from "react-router-dom"
import FileUploader from "@/components/common/fileUploader"
import Layout from "@/components/common/layout"
export default () => {
  return (
    <Layout showNavBar>
      <div>
        <FileUploader />
        <FileUploader />
        <FileUploader />
        <FileUploader />
        <FileUploader />
        <FileUploader />
        <FileUploader />
        <FileUploader />
        <FileUploader />
      </div>
    </Layout>
  )
}
