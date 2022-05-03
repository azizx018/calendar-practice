import {render,screen} from "@testing-library/react";
import CreateUser from "./CreateUser";

it('should show username and password inputs', () =>{
    render(<CreateUser/>)
    expect(screen.getByPlaceholderText('username')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('password')).toBeInTheDocument()
})
it('should have a create account button', () =>{
    render(<CreateUser/>)

    expect(screen.getByText('Create Account')).toBeInTheDocument()
})