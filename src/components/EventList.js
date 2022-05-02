import Event from "./Event";

export default function EventList({events, _Event=Event}){
    return <>
        {events.map((event, index) => <_Event key={index}
            title={event.title}
            date={event.date}
            description={event.description}
            complete={event.complete}
        />)}
    </>

}