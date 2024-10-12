import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

export default ({ open, close, items }: { open: boolean; close: () => void; items: { label: string }[] }) => {
  return (
    <Dialog open={open} onOpenChange={close}>
      {/* <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger> */}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>I tuoi eventi</DialogTitle>
          {/* <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription> */}
        </DialogHeader>
        {items.length ? (
          <>
            <div className="grid gap-4 py-4">
              {items.map((item, index) => (
                <div key={`event-item-${index}`} className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    {item.label}
                  </Label>
                  {/* <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" /> */}
                </div>
              ))}
            </div>
          </>
        ) : (
          <DialogDescription>Non ci sono eventi per questa data</DialogDescription>
        )}
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
