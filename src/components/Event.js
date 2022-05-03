

export default function Event({appointment, onDelete, onEdit}) {
    const {id, title, date, description, complete} = appointment
    return <>
        <h2>{title}</h2>
        <h2>{date.toDateString()}</h2>
        <h2>{description}</h2>
        <h2>{complete ? 'Complete' : 'Upcoming'}</h2>
        <button onClick={() => onDelete(appointment.id)}>Delete</button>
        <button onClick={() =>onEdit(appointment)}>Edit</button>

    </>
}