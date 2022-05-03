import Event from "./Event";


export default function EventList({appointments, _Event=Event, onEdit, onDelete}){
    //const filteredArray = appointments.filter()
    return <>
        {appointments
            //.filter()
            .map((appointment, index) =>
                <_Event key={index} appointment={appointment} onDelete={onDelete} onEdit={onEdit}/>
            )}
    </>

}