import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import HeaderDropdown from '../../src/components/HeaderDropdown/HeaderDropdown';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../src/store/store';
describe('HeaderDropdown', () => {
    it('Иконка помощи', () => {
        render(<MemoryRouter>
            <Provider store={store}>
                <HeaderDropdown loginHandler={() => { }} refProps={React.createRef()} onMouseLeave={() => { }} />
            </Provider>
        </MemoryRouter>);
        expect(screen.getByAltText('support')).toBeInTheDocument()
    });
    it('Вызов loginHandler по клику', () => {
        const loginHandler = jest.fn();
        render(
            <HeaderDropdown loginHandler={loginHandler} refProps={React.createRef()} onMouseLeave={() => { }} />
        );
        fireEvent.click(screen.getByTestId('Login'))
        expect(loginHandler).toHaveBeenCalled();
    });

    it('Вызов onMouseLeave для скрытия блока', () => {
        const onMouseLeave = jest.fn();
        render(
            <HeaderDropdown loginHandler={() => { }} refProps={React.createRef()} onMouseLeave={onMouseLeave} />
        );
        fireEvent.mouseLeave(screen.getByTestId('HeaderDropdown'))
        expect(onMouseLeave).toHaveBeenCalled();
    });


});



