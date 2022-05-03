
import './App.css';
import Login from "./components/Login";
import {useState} from "react";
import EventList from "./components/EventList";


function App({loggedInInit = false, _Login = Login, _EventList=EventList }) {
    const [isLoggedIn, setIsLoggedIn] = useState(loggedInInit)


    const [appointments,setAppointments] = useState([
      {id:0, title: 'Title1', date: new Date(), description: 'Desc1', complete:false},
      {id:1, title: 'Title2', date: new Date(), description: 'Desc2', complete:true},
      {id:2, title: 'Title3', date: new Date(), description: 'Desc3', complete:true}
    ])

    function handleLogin(credentials) {
        if (credentials.username === 'bob' &&
            credentials.password === 'pass')
            setIsLoggedIn(true)
    }

    function deleteEvent(eventID) {
       const newAppointments =  appointments.filter(appointment => appointment.id !== eventID)
        setAppointments(newAppointments)

    }

    if(isLoggedIn)
        return <div>
            <_EventList appointments={appointments} onDelete={deleteEvent}/>
        </div>
   else
        return <_Login onLogin={handleLogin}/>
}

export default App;
