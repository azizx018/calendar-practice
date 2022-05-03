import userEvent from "@testing-library/user-event";
import {useState} from "react";

export default function EditEvent({appointment,onCancel, onApply}){
    const {title, date, description, complete} = appointment
    const [newTitle, setNewTitle] = useState(title)
    const [newDescription, setNewDescription] = useState(description)
    const [newDate, setNewDate] = useState(date.toISOString().substr(0,10))
    const [newComplete, setNewComplete] = useState(complete)

    function handleApply() {
        onApply({
            id:appointment.id,
            title:newTitle,
            description: newDescription,
            date: new Date(newDate),
            complete: newComplete
        })
    }
    return <>
        <input defaultValue={title} onChange={event => setNewTitle(event.target.value)}/>
        <input defaultValue={description} onChange={event => setNewDescription(event.target.value)}/>
        <input type={'date'} defaultValue={date.toISOString().substr(0,10)}
               onChange={event => setNewDate(event.target.value)}/>
        <input type='checkbox' defaultChecked={complete}
               onChange={event => setNewComplete(event.target.checked)}/>
        <button onClick={handleApply}>Apply</button>
        <button onClick={onCancel}>Cancel</button>

    </>

}