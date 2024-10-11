import { FileUploader } from "@aws-amplify/ui-react-storage"

export default () => {
  return <FileUploader acceptedFileTypes={["image/*"]} path="public/" maxFileCount={1} isResumable />
}
