import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Input, { InputProps } from '../../src/components/UI/Input/Input';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../src/store/store';

describe('InputBox', () => {
    
    const props: InputProps = {
        type: 'text',
        placeholder: 'Тест',
        onChange: jest.fn(),
    };
    
    beforeEach(() => {
        render(<MemoryRouter>
            <Provider store={store}>
                <Input {...props} />
            </Provider>
        </MemoryRouter>);
    })
    test('Рендер с правильным названием prop', () => {
        const input = screen.getByPlaceholderText(props.placeholder);
        expect(input).toBeInTheDocument();
    });

    test('Вызов функции при изменении значений', () => {
        const input = screen.getByTestId('inputBox');
        const value = 'testValue';
        fireEvent.change(input, { target: { value } });
        expect(props.onChange).toHaveBeenCalledWith(value);
    });
});