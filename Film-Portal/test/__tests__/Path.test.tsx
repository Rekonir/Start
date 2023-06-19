
import Path from '../../src/components/UI/Path/Path';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../src/store/store';
describe('Path компонент', () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <Path >
                        <a> 42 </a>
                    </Path>
                </Provider>
            </MemoryRouter>);
    })
    it('Рендер дочерних ссылок', () => {
        const childElement = screen.getByText('42');
        expect(childElement).toBeInTheDocument();
    });

    it('Наличие класса nav', () => {
        const navElement = screen.getByTestId('nav');
        expect(navElement).toHaveClass('nav');
    });
});

