import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import LanguageFlag from '../../src/components/LanguageFlag/LanguageFlag';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../src/store/store';
import CatalogPage from '../../src/pages/CatalogPage/CatalogPage';
import Header from '../../src/components/Header/Header'


describe('Флаг переключения языка', () => {
    beforeEach(() => {
        render(<MemoryRouter>
            <Provider store={store}>
                <LanguageFlag />
            </Provider>
        </MemoryRouter>);
    })
    it('Проверка переключения языка', () => {
        const dispatchMock = jest.fn();
        const useSelectorMock = jest.fn(() => ({ RusLanguage: true }))
        jest.mock('redux', () => ({
            useAppDispatch: () => dispatchMock,
            useAppSelector: useSelectorMock
        }))
        const flagImg = screen.getByTestId('Language flag')
        expect(flagImg).toHaveAttribute('src', 'https://cdn-icons-png.flaticon.com/512/3054/3054051.png')
        useSelectorMock.mockImplementation(() => ({ RusLanguage: true }))
        fireEvent.click(flagImg)
        expect(flagImg).toHaveAttribute('src', 'https://cdn-icons-png.flaticon.com/512/4009/4009124.png')
    })
})
describe('Переключение языка тескта', () => {
    beforeEach(() => {
        render(<MemoryRouter>
            <Provider store={store}>
                <Header />
                <CatalogPage />
            </Provider>
        </MemoryRouter>);
    })
    it('Переход текста от en к rus ', () => {
        const flagImg = screen.getByTestId('Language flag')
        const dispatchMock = jest.fn();
        const useSelectorMock = jest.fn(() => ({ RusLanguage: false }))
        jest.mock('redux', () => ({
            useAppDispatch: () => dispatchMock,
            useAppSelector: useSelectorMock
        }))
        expect(screen.getByText('Year')).toBeInTheDocument()
        useSelectorMock.mockImplementation(() => ({ RusLanguage: true }))
        fireEvent.click(flagImg)
        expect(screen.queryByText('Year')).not.toBeInTheDocument()
        expect(screen.getByText('Год')).toBeInTheDocument()

    })
})