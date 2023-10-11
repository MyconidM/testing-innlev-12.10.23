import { render, screen, fireEvent  } from '@testing-library/react';
import '@testing-library/jest-dom';
import CreateUser from "@/components/CreateUser";

it('should render input with empty string', () => {
    render(<CreateUser />)
    const inputs = document.querySelector('input')
    expect(inputs).toHaveTextContent('');
})

it('create a user entry', () => {
    render(<CreateUser />)
    const btn = document.querySelector('button')
    const nameInput = screen.getByPlaceholderText('Username')

    fireEvent.change(nameInput, {target: {value: '123'}})
    expect(nameInput.value).toBe('123')
}) 
