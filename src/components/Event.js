

export default function Event({title, date, description, complete}) {
    return <>
        <h2>{title}</h2>
        <h2>{date.toDateString()}</h2>
        <h2>{description}</h2>
        <h2>{complete ? 'Complete' : 'Upcoming'}</h2>


    </>
}