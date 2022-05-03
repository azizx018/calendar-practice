import {render, screen} from "@testing-library/react";
import Event from "./Event";

it('should display title, date, description and complete',() => {
    const title = 'test event'
    const date = new Date()
    const description = 'desc1'
    const complete = true

    render(<Event appointment={{title, date, description, complete}}/>)
    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(date.toDateString())).toBeInTheDocument()
    expect(screen.getByText(description)).toBeInTheDocument()
    expect(screen.getByText('Complete')).toBeInTheDocument()
    expect(screen.getByText('Delete')).toBeInTheDocument()
})

it('should display title, date, description and upcomping',() => {
    const id = 1
    const title = 'test event'
    const date = new Date()
    const description = 'desc1'
    const complete = false
    const deleteMock = jest.fn()
    render(<Event appointment={{id, title, date, description, complete}} onDelete={deleteMock}/>)
    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(date.toDateString())).toBeInTheDocument()
    expect(screen.getByText(description)).toBeInTheDocument()
    expect(screen.getByText('Upcoming')).toBeInTheDocument()
    const deleteButton = screen.getByText('Delete')
    expect(deleteButton).toBeInTheDocument()
    deleteButton.click()
    expect(deleteMock).toHaveBeenCalledWith(id)
})