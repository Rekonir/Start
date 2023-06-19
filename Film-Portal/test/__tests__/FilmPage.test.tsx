import { render, screen, getAllByTestId, fireEvent, waitFor, act } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../src/store/store";
import FilmPage from "../../src/pages/FilmPage/FilmPage";
import '@testing-library/jest-dom/extend-expect';



describe("Проверка Страницы Фильма", () => {
    beforeEach(() => {
        const RusLanguage = true
        render(<MemoryRouter>
            <Provider store={store}>
                <FilmPage />
            </Provider>
        </MemoryRouter>);
    })
    describe("Проверка наличия элементов", () => {
        it("Банер", () => {
            expect(screen.getByTestId('Baner')).toBeInTheDocument();
        });
        it("Название", () => {
            expect(screen.getByTestId('Name')).toBeInTheDocument();
        });
        it("Жары, продолжительность и рейтинг", () => {
            expect(screen.getByTestId('info')).toBeInTheDocument();
        });
        it("Краткое описание", () => {
            expect(screen.getByTestId('shortDescription')).toBeInTheDocument();
        });
        it("Кнопка Смотреть бесплатно", () => {
            expect(screen.getByText('Смотреть бесплатно')).toBeInTheDocument();
        });
        it("Кнопка Смотреть трейлер", () => {
            expect(screen.getByText('Смотреть трейлер')).toBeInTheDocument();
        });
        it("Трейлер", () => {
            expect(screen.getByTestId('trailer')).toBeInTheDocument();
        });
        it("Полное описание", () => {
            expect(screen.getByTestId('description')).toBeInTheDocument();
        });
        it("Показать ещё", () => {
            expect(screen.getByTestId('more')).toBeInTheDocument();
        });
        
        it("Социальный блок", () => {
            expect(screen.getByTestId('socialBox')).toBeInTheDocument();
        });
        it("Актеры и съемочная группа", () => {
            expect(screen.getByTestId('persons')).toBeInTheDocument();
        });
        it("Коментарии", () => {
            expect(screen.getByTestId('Comment')).toBeInTheDocument();
        });
        it("Кнопка Ответить на комментарий", () => {
            expect(screen.getAllByTestId('answer').length).toBeGreaterThanOrEqual(0);
        });
        it("Кнопка Добавить комментарий", () => {
            expect(screen.getByTestId('addComment')).toBeInTheDocument();
        });
        it("Кнопка Опубликовать", () => {
            expect(screen.getByTestId('Post')).toBeInTheDocument();
        });
        
    });
});