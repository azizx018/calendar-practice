import {render, screen} from "@testing-library/react";
import Event from "./Event";

it('should display title, date, description and complete',() => {
    const title = 'test event'
    const date = new Date()
    const description = 'desc1'
    const complete = true

    render(<Event title={title} date={date} description={description} complete={complete}/>)
    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(date.toDateString())).toBeInTheDocument()
    expect(screen.getByText(description)).toBeInTheDocument()
    expect(screen.getByText('Complete')).toBeInTheDocument()
})

it('should display title, date, description and upcomping',() => {
    const title = 'test event'
    const date = new Date()
    const description = 'desc1'
    const complete = false

    render(<Event title={title} date={date} description={description} complete={complete}/>)
    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(date.toDateString())).toBeInTheDocument()
    expect(screen.getByText(description)).toBeInTheDocument()
    expect(screen.getByText('Upcoming')).toBeInTheDocument()
})