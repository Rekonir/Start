import { render, screen, getAllByTestId, fireEvent, waitFor, act } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../src/store/store";
import MainPage from "../../src/pages/MainPage/MainPage";
import '@testing-library/jest-dom/extend-expect';



describe("Проверка Главной Страницы", () => {
    beforeEach(() => {
        const RusLanguage = true
        render(<MemoryRouter>
            <Provider store={store}>
                <MainPage />
            </Provider>
        </MemoryRouter>);
    })
    describe("Проверка наличия блоков", () => {
        it("Слайдеры (4)", () => {
            expect(screen.getAllByTestId('RowSlider')).toHaveLength(4);
        });
        it("Фильмов в слайдере", () => {
            expect(screen.getAllByTestId('FilmCard').length).toBe(27)

        });
    });
});

