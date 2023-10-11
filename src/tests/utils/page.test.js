import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from "@/app/page";

it('test test Main', () => {
    render(<Home />)
    const title = document.querySelector('main')
    expect(title).toBeInTheDocument();
})

