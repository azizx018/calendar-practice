import {render,screen} from "@testing-library/react";
import EventList from "./EventList";
import {type} from "@testing-library/user-event/dist/type";

it('should display 2 events and pass onDelete to each mock', () => {
    // const yesterday = new Date()
    // yesterday.setDate(yesterday.getDate() - 1)
    const eventData = ['event1', 'event2']
    let _onDelete = undefined

    const mockEvent = ({appointment, onDelete}) => {
        _onDelete = onDelete
         return <div>{appointment}</div>
    }
    render(<EventList appointments={eventData} _Event={mockEvent} onDelete={()=>{}}/>)
    expect(screen.getByText('event1')).toBeInTheDocument()
    expect(screen.getByText('event2')).toBeInTheDocument()
    expect(typeof _onDelete).toBe('function')

})