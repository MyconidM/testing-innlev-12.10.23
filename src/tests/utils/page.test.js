import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from "@/app/page";

it('test test Main', () => {
    render(<Home />)
    const title = document.querySelector('main')
    expect(title).toBeInTheDocument();
})

// it('username should be empty', () => {
//     const {result} = renderHook(() => Home())
//     // const btn = document.querySelector('button')
//     // const nameInput = screen.getByPlaceholderText('Username')

    
//     //fireEvent.change(nameInput, {target: {value: '123'}})
//     expect(result.current.username).toBe('')
// }) 