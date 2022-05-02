

export default function Event({event}) {
    const {title, date, description, complete} = event
    return <>
        <h2>{title}</h2>
        <h2>{date.toDateString()}</h2>
        <h2>{description}</h2>
        <h2>{complete ? 'Complete' : 'Upcoming'}</h2>


    </>
}