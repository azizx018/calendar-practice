import {render,screen} from "@testing-library/react";
import EventList from "./EventList";

it('should display 2 events', () => {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const eventData = [
        {title:'party1', date:new Date(), description:'desc1', complete:false},
        {title:'party2', date:yesterday, description:'desc2', complete:true}
    ]

    function mockEvent({title, description, date, complete}){
        return <>
            <div>{title}</div>
            <div>{description}</div>
            <div>{date.toDateString()}</div>
            <div>{complete ? 'Complete': 'Upcoming'}</div>

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