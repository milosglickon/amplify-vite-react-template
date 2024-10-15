import { useState } from "react"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid" // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import itLocale from "@fullcalendar/core/locales/it"
import Dialog from "@/components/common/dialog"

export default () => {
  const [showDialog, setShowDialog] = useState(false)
  const [dialogItems, setDialogItems] = useState([])
  const events = [
    { label: "event 1", date: "2024-10-11" },
    { label: "event 2", date: "2024-10-11" },
    { label: "event 3", date: "2024-10-12" },
  ]
  const handleDateClick = (arg: any) => {
    const todaysEvents = events.filter((e) => e.date === arg.dateStr)
    //@ts-ignore
    setDialogItems(todaysEvents)
    setShowDialog(true)
    // alert(arg.dateStr)
  }

  return (
    <div className="[&>div]:h-60">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        themeSystem="bootstrap5"
        initialView="dayGridWeek"
        dateClick={handleDateClick}
        // displayEventTime={true}
        eventDisplay="background"
        locale={itLocale}
        events={events}
      />
      {/* <Alert > */}
      <Dialog open={showDialog} close={() => setShowDialog(false)} items={dialogItems} />
    </div>
  )
}
