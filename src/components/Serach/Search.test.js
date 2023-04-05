import { render, screen, fireEvent } from '@testing-library/react';
import { Search } from './Search';

describe('Search component', () => {
    it('renders a search input and button', () => {
        render(<Search onSubmitSearch={() => { }} />);
        const input = screen.getByPlaceholderText('Search...');
        const button = screen.getByText('Go');
        expect(input).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });

    it('calls onSubmitSearch when form is submitted', () => {
        const onSubmitSearchMock = jest.fn();
        render(
            <Search onSubmitSearch={onSubmitSearchMock} />
        );
        const input = screen.getByPlaceholderText('Search...');
        const button = screen.getByText('Go');
        fireEvent.change(input, { target: { value: 'search term' } });
        fireEvent.click(button);
        expect(onSubmitSearchMock).toHaveBeenCalledTimes(1);
        expect(onSubmitSearchMock).toHaveBeenCalledWith(expect.anything(), 'search term');
    });
});