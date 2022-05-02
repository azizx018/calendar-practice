import {render,screen} from "@testing-library/react";
import Login from "./Login";
import {scryRenderedComponentsWithType} from "react-dom/test-utils";


it('should show username and password inputs', () => {
    render(<Login/>)
    const usernameElement = screen.getByPlaceholderText('username')
    expect(usernameElement).toBeInTheDocument()
    const passwordElement = screen.getByPlaceholderText('password')
    expect(passwordElement).toBeInTheDocument()

})

it('should show a button that allows the user to login', () => {
    render(<Login/>)
    const loginButton = screen.getByText(/Submit/)
    expect(loginButton).toBeInTheDocument()
})