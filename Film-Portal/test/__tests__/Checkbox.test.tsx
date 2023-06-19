import Checkbox from '../../src/components/UI/Checkbox/Checkbox';
import React from 'react';
import { render, screen, getAllByTestId, fireEvent, waitFor, act } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../src/store/store';


describe('Checkbox', () => {
    const onChangeMock = jest.fn();
    beforeEach(() => {

        render(
            <MemoryRouter>
                <Provider store={store}>
                    <Checkbox position={{ name_en: 'test', name_ru: 'тест' }} func={onChangeMock} />
                </Provider>
            </MemoryRouter>
        )
    })
    it('Провекра дефолтного отключенного состояния', () => {
        expect(screen.getByTestId('checkbox')).not.toBeChecked();
    });
    it('Работоспособность функции при изменении статуса', () => {
        const checkbox = screen.getByTestId('checkbox');
        fireEvent.click(checkbox);
        expect(onChangeMock).toHaveBeenCalledWith({ name_en: 'test', name_ru: 'тест' }, true);
    });
});