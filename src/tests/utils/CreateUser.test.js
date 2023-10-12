import { render, screen, fireEvent, renderHook  } from '@testing-library/react';
import '@testing-library/jest-dom';
import CreateUser from "@/components/CreateUser";

it('should render input with empty string', () => {
    render(<CreateUser />)
    const inputs = document.querySelector('input')
    expect(inputs).toHaveTextContent('');
})

it('should have input for username', () => {
    render(<CreateUser />)
    const username = screen.getByPlaceholderText('Username')
    expect(username).toBeInTheDocument()
})

it('should have input for password', () => {
    render(<CreateUser />)
    const password = screen.getByPlaceholderText('Password')
    expect(password).toBeInTheDocument()
})

it('should contain form', () => {
    render(<CreateUser />)
    const form = document.querySelector('form')
    expect(form).toBeInTheDocument()
})

it('form should have username and pasword', () => {
    render(<CreateUser />)

    const form = document.querySelector('form')
    const username = screen.getByPlaceholderText('Username')
    const password = screen.getByPlaceholderText('Password')

    expect(form).toContain(username)

})
// it('should render input', () => {
//     render(<CreateUser />)
//     const inputs = document.querySelector('input')

//     fireEvent.change(inputs, {target: {value: 'ttt'}})
//     expect(inputs).toHaveTextContent('ttt');
// })



// it('create a user entry', () => {
//     const {result} = renderHook(() => CreateUser())
//     // const btn = document.querySelector('button')
//     // const nameInput = screen.getByPlaceholderText('Username')

    
//     //fireEvent.change(nameInput, {target: {value: '123'}})
//     expect(result.current.username).toBe('')
// }) 

// it('should render input with empty string', () => {
//     const {input} = CreateUser()
//     // render(<CreateUser />)
//     // const input = document.querySelector('input')
//     // const btn = document.querySelector('button')

//     fireEvent.change(input, {target: {value: "hei"}})
//     expect(input.value).toHaveTextContent('hei');
// })


