import { render, screen, getAllByTestId, fireEvent, waitFor, act } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../src/store/store";
import CatalogPage from "../../src/pages/CatalogPage/CatalogPage";
import '@testing-library/jest-dom/extend-expect';



describe("Проверка каталога", () => {
    beforeEach(() => {
        const RusLanguage = true
        render(<MemoryRouter>
            <Provider store={store}>
                <CatalogPage />
            </Provider>
        </MemoryRouter>);
    })

    describe("Проверка блока фильтров", () => {
        it("Проверка наличия фильтра Жанр", () => {
            expect(screen.getAllByText('Жанр')).toHaveLength(1);
        });
        it("Проверка окрытия блока жанров", () => {
            const genreBtn = screen.getByTestId('genre')
            expect(screen.queryByTestId('genresBox')).toBeNull();
            fireEvent.click(genreBtn) 
            expect(screen.getByTestId('genresBox')).toBeInTheDocument();
        });

        it("Проверка наличия фильтра Год", () => {
            expect(screen.getAllByText('Год')).toHaveLength(1);
        });
        it("Проверка наличия фильтра Страна", () => {
            expect(screen.getAllByText('Страны')).toHaveLength(1);
        });
        it("Проверка наличия фильтра Рейтинга", () => {
            expect(screen.getAllByText('Рейтинг от 0')).toHaveLength(1);
        });
        it("Проверка наличия фильтра Кол-ва оценок", () => {
            expect(screen.getAllByText('Кол-во оценок от 0')).toHaveLength(1);
        });
        it("Проверка наличия Сортировки", () => {
            expect(screen.getAllByText('Сортировка')).toHaveLength(1);
        });
        it("Проверка наличия Сброса", () => {
            expect(screen.getAllByText('Сбросить')).toHaveLength(1);
        });
    });
    describe("Проверка блока карточек фильмов", () => {
        it("Проверка количества фильмов (9)", () => {
            expect(screen.getAllByTestId('FilmCard')).toHaveLength(9);
        });
        it("Проверка наличия кнопки Показать ещё", () => {
            expect(screen.getAllByText('Показать ещё')).toHaveLength(1);
        });
    })

});