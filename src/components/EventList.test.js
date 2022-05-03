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

it('should accept an onEdit property', () => {
    const onEdit = '' // this is a string beacuse we just want it to pass it through
    const appointments = ['appointment']
    const Event = jest.fn()
    render(<EventList appointments={appointments} onEdit={onEdit} _Event={Event}/>)
    expect(Event).toHaveBeenLastCalledWith({
        onEdit,
        appointment:appointments[0],
        onDelete:undefined

    }, {})
})