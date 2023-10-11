test('første test', () => {
    render(<page />)
    const title = screen.getByText(/Create User/i)
    expect(title).toBeInTheDocument();
})