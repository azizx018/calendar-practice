import {render,screen} from "@testing-library/react";
import EventList from "./EventList";

it('should display 2 events', () => {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const eventData = ['event1', 'event2']
    const mockEvent = ({event}) => <div>{event}</div>
    render(<EventList events={eventData} _Event={mockEvent}/>)
    expect(screen.getByText('event1')).toBeInTheDocument()
    expect(screen.getByText('event2')).toBeInTheDocument()

})