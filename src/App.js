
import './App.css';
import Login from "./components/Login";
import {useState} from "react";
import EventList from "./components/EventList";
import EditEvent from "./components/EditEvent";


function App({loggedInInit = false, _Login = Login, _EventList=EventList }) {
    const [isLoggedIn, setIsLoggedIn] = useState(loggedInInit)
    const [appointmentToEdit, setAppointmentToEdit] = useState(undefined)


    const [appointmentList, setAppointmentList] = useState([
      {id:0, title: 'Title1', date: new Date(), description: 'Desc1', complete:false},
      {id:1, title: 'Title2', date: new Date(), description: 'Desc2', complete:true},
      {id:2, title: 'Title3', date: new Date(), description: 'Desc3', complete:true}
    ])

    function handleLogin(credentials) {
        if (credentials.username === 'bob' &&
            credentials.password === 'pass')
            setIsLoggedIn(true)
    }

    function deleteAppointment(id) {
       const newAppointments =  appointmentList.filter(appointment => appointment.id !== id)
        setAppointmentList(newAppointments)
    }

    function editAppointment(appointment) {
        setAppointmentToEdit(appointment)
    }

    function cancelEditAppointment() {
        setAppointmentToEdit(undefined)
    }

    function applyEditAppointment(appointment) {
       const updatedAppointments =  appointmentList.map((existing => existing.id === appointment.id ? appointment : existing))
        setAppointmentList(updatedAppointments)
        setAppointmentToEdit(undefined)

    }

    if(isLoggedIn)
        if(appointmentToEdit) {
            return <div>
                <EditEvent appointment={appointmentToEdit} onCancel={cancelEditAppointment}
                           onApply={applyEditAppointment}/>
            </div>
        } else {
            return <div>
                <_EventList appointments={appointmentList} onDelete={deleteAppointment} onEdit={editAppointment} />
            </div>
        }
   else
        return <_Login onLogin={handleLogin}/>
}

export default App;
