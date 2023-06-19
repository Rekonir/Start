import { render, screen, getAllByTestId, fireEvent, waitFor, act } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../src/store/store";
import PersonPage from "../../src/pages/PersonPage/PersonPage";
import '@testing-library/jest-dom/extend-expect';



describe("Проверка Страницы персоны", () => {
    beforeEach(() => {
        const RusLanguage = true
        render(<MemoryRouter>
            <Provider store={store}>
                <PersonPage />
            </Provider>
        </MemoryRouter>);
    })
    describe("Проверка наличия элементов", () => {
        it("Аватарки", () => {
            expect(screen.getByTestId('avatarPerson')).toBeInTheDocument();
        });
        it("ФИО", () => {
            expect(screen.getByTestId('fullName')).toBeInTheDocument();
        });
        it("Биографии", () => {
            expect(screen.getByTestId('biography')).toBeInTheDocument();
        });
        it("Фильмографии", () => {
            expect(screen.getByTestId('filmgraphy')).toBeInTheDocument();
        });
    });
});