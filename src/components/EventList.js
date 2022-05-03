import Event from "./Event";


export default function EventList({appointments, _Event=Event, onDelete}){
    return <>
        {appointments.map(
            (appointment, index) => <_Event key={index} appointment={appointment} onDelete={onDelete}/>)}
    </>

}