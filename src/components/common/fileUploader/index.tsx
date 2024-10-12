import { FileUploader } from "@aws-amplify/ui-react-storage"

export default () => {
  return <FileUploader acceptedFileTypes={[".pdf"]} path="public/pdf/" maxFileCount={1} isResumable />
}
