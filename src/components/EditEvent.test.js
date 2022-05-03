import {act, render, screen} from "@testing-library/react";
import EditEvent from "./EditEvent";
import {calculateNewValue} from "@testing-library/user-event/dist/utils";
import userEvent from "@testing-library/user-event";
import {useDebugValue} from "react";


it('should show input fields with current event data with event upcoming', ()=>{
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
    expect(screen.getByDisplayValue(event.date.toISOString().substr(0,10))).toBeInTheDocument()
})
it('should show input fields with current event data listed as complete', ()=>{
    const event = {
        title:'Event1',
        date: new Date(),
        description: 'EventDesc',
        complete: true
    }

    render(<EditEvent event={event}/>)
    const titleElement = screen.getByDisplayValue(event.title)
    expect(titleElement).toBeInTheDocument()
    const descriptionElement =screen.getByDisplayValue(event.description)
    expect(descriptionElement).toBeInTheDocument()
    expect(screen.getByDisplayValue(event.date.toISOString().substr(0,10))).toBeInTheDocument()
})

it('should show a cancel and an apply button', () =>{
    const event = {
        title:'Event1',
        date: new Date(),
        description: 'EventDesc',
        complete: true
    }
    render(<EditEvent event={event}/>)
    expect(screen.getByText('Cancel')).toBeInTheDocument()
    expect(screen.getByText('Apply')).toBeInTheDocument()
})

it('should call the onCancel  function when the cancel button is clicked', () =>{
    const event = {
        title:'Event1',
        date: new Date(),
        description: 'EventDesc',
        complete: true
    }
    const mock = jest.fn()
    const mock2= jest.fn()
    render(<EditEvent event={event} onCancel={mock} onApply={mock2}/>)
    const cancelButton = screen.getByText('Cancel')
    expect(cancelButton).toBeInTheDocument()
    cancelButton.click()
    expect(mock).toHaveBeenCalled()
    const applyButton = screen.getByText('Apply')
    expect(applyButton).toBeInTheDocument()
    applyButton.click()
    expect(mock2).toHaveBeenCalled()
})

it('should call the onApply fn with the new values when the apply button is clicked', () =>{
    const event = {
        title:'Event1',
        date: new Date(),
        description: 'EventDesc',
        complete: true
    }
    const mock = jest.fn()

    render(<EditEvent event={event} onApply={mock}/>)

    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    yesterday.setUTCHours(0)
    yesterday.setMinutes(0)
    yesterday.setSeconds(0)
    yesterday.setMilliseconds(0)

    const expected = {
        title:'New Event',
        date: yesterday,
        description: 'New Desc',
        complete: false
    }
    const titleInput = screen.getByDisplayValue(event.title)
    const descriptionInput =screen.getByDisplayValue(event.description)
    const dateInput =screen.getByDisplayValue(event.date.toISOString().substr(0,10))


  act(()=>{
      userEvent.clear(titleInput)
      userEvent.type(titleInput, expected.title)
      userEvent.clear(descriptionInput)
      userEvent.type(descriptionInput, expected.description)
      userEvent.clear(dateInput)
      userEvent.type(dateInput, expected.date.toISOString().substr(0,10))
      screen.getByRole('checkbox').click()
  })
    screen.getByText('Apply').click()
    expect(mock).toHaveBeenLastCalledWith(expected)
})