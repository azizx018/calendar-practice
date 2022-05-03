import {render, screen} from "@testing-library/react";
import EditEvent from "./EditEvent";


it('should show input fields with current event data', ()=>{
    const event = {
        title:'Event1',
        date: new Date(),
        description: 'EventDesc',
        complete: false
    }

    render(<EditEvent event={event}/>)
    const titleElement = screen.getByDisplayValue(event.title)
    expect(titleElement).toBeInTheDocument()
    const descriptionElement =screen.getByDisplayValue(event.description)
    expect(descriptionElement).toBeInTheDocument()
    expect(screen.getByDisplayValue(event.date.toDateString())).toBeInTheDocument()
})