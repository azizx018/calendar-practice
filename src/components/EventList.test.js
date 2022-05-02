import {render,screen} from "@testing-library/react";
import EventList from "./EventList";

it('should display 2 events', () => {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const eventData = [
        'event1',
        'event2'
    ]

    function mockEvent({event}){
        return <>{event}
        </>

    }
    render(<EventList events={eventData} _Event={mockEvent}/>)
    expect(screen.getByText('party1')).toBeInTheDocument()
    expect(screen.getByText('party2')).toBeInTheDocument()
    expect(screen.getByText('desc1')).toBeInTheDocument()
    expect(screen.getByText('desc2')).toBeInTheDocument()
    expect(screen.getByText('Complete')).toBeInTheDocument()
    expect(screen.getByText('Upcoming')).toBeInTheDocument()
    expect(screen.getByText(eventData[0].date.toDateString())).toBeInTheDocument()
    expect(screen.getByText(eventData[1].date.toDateString())).toBeInTheDocument()
})