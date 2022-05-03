
import './App.css';
import Login from "./components/Login";
import {useState} from "react";
import EventList from "./components/EventList";
import EditEvent from "./components/EditEvent";
import CreateUser from "./components/CreateUser";


function App({loggedInInit = false, _Login = Login, _EventList=EventList, _CreateUser = CreateUser }) {
    const [isLoggedIn, setIsLoggedIn] = useState(loggedInInit)
    const [appointmentToEdit, setAppointmentToEdit] = useState(undefined)


    const [appointmentList, setAppointmentList] = useState([
      {id:0, title: 'Title1', date: new Date(), description: 'Desc1', complete:false},
      {id:1, title: 'Title2', date: new Date(), description: 'Desc2', complete:true},
      {id:2, title: 'Title3', date: new Date(), description: 'Desc3', complete:true}
    ])

    const userList = [
        {username:'mark', password:'poop'},
        {username:'Shelly', password: 'flower'}
    ]

    function handleLogin(credentials) {
        const matches = userList.filter(user =>
            user.username === credentials.username &&
            user.password === credentials.password)
        const isMatched = matches.length > 0
        setIsLoggedIn(isMatched);
    }

    function handleCreateUser(user) {
        // TODO: Check if user already exists
        // TODO: Check is username/password is not empty
       userList.push(user)
        console.log(userList)
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
        return <div>
            <_Login onLogin={handleLogin}/>
            <_CreateUser onAddUser={handleCreateUser}/>
        </div>

}

export default App;
