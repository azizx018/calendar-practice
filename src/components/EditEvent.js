
export default function EditEvent({event}){
    const {title, date, description, complete} = event
    return <>
        <input defaultValue={title}/>
        <input defaultValue={description}/>
        <input type={date} defaultValue={date.toDateString()}/>

    </>

}