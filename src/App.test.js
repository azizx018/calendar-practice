import { render, screen } from '@testing-library/react';
import App from './App';
import { debug } from 'jest-preview';
import CreateUser from "./components/CreateUser";

it('should display _EventList when logged in ', () => {
  let _appointments = undefined
  let _onDelete = undefined
  const expectedText = 'This is your app'

  const mock = ({appointments, onDelete}) => {
    _appointments= appointments
    _onDelete = onDelete
    return<>{expectedText}</>
  }
  const noText = 'NONO'
  const nono = () => <>{noText}</>

  render(<App loggedInInit={true} _EventList={mock} _Login={nono}/>);

  expect(screen.getByText(expectedText)).toBeInTheDocument()
  expect(typeof _appointments).toBe('object')
  expect(screen.queryByText(noText)).not.toBeInTheDocument()
  // expect(_onDelete).toBeDefined()
  expect(typeof _onDelete).toBe('function')
});

test('should display logout screen and create user when logged out', () => {
  const mockLogin = () => <>This is expected text</>
  const mockCreateUser = () => <>This is the create user</>
  render(<App _Login={mockLogin} _CreateUser={mockCreateUser}/>);
  const element = screen.getByText(/This is expected text/)
  expect(element).toBeInTheDocument()
  const userElement = screen.getByText(/This is the create user/)

});

it('should pass an onEdit function as a property of EventList', ()=> {
  let _onEdit = undefined

  const EventList = ({onEdit}) => {
    _onEdit = onEdit
  }

  render(<App loggedInInit={true} _EventList={EventList}/>)
  expect(typeof _onEdit).toBe('function')
})
