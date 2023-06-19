import { render, screen, getAllByTestId, fireEvent, waitFor, act } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../src/store/store";
import AdminPage from "../../src/pages/AdminPage/AdminPage";
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe("Проверка Страницы Администрации", () => {
    beforeEach(() => {
        render(<MemoryRouter>
            <Provider store={store}>
                <AdminPage />
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
            act(() => { fireEvent.click(genreBtn) })
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
            expect(screen.getAllByText('Button.clean')).toHaveLength(1);
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
    describe("Проверка блока админки", () => {
        it("Проверка inputBox Адрес изображения", () => {
            expect(screen.getByPlaceholderText('AdminPage.image_URL')).toBeInTheDocument();
        });
        it("Проверка inputBox Год", () => {
            expect(screen.getByPlaceholderText('AdminPage.year')).toBeInTheDocument();
        });
        it("Проверка inputBox Страна", () => {
            expect(screen.getByPlaceholderText('AdminPage.country')).toBeInTheDocument();
        });
        it("Проверка inputBox Краткое описание", () => {
            expect(screen.getByPlaceholderText('AdminPage.short_description')).toBeInTheDocument();
        });
        it("Проверка inputBox Возрастное ограничение", () => {
            expect(screen.getByPlaceholderText('AdminPage.age')).toBeInTheDocument();
        });
        it("Проверка inputBox Продолжительность в мин", () => {
            expect(screen.getByPlaceholderText('AdminPage.duration')).toBeInTheDocument();
        });
        it("Проверка inputBox Рейтинг", () => {
            expect(screen.getByPlaceholderText('AdminPage.rating')).toBeInTheDocument();
        });
        it("Проверка inputBox Кол-во оценок", () => {
            expect(screen.getByPlaceholderText('AdminPage.number_of_ratings')).toBeInTheDocument();
        });
        it("Проверка inputBox Название на русском", () => {
            expect(screen.getByPlaceholderText('AdminPage.name_ru')).toBeInTheDocument();
        });
        it("Проверка inputBox Название на английском", () => {
            expect(screen.getByPlaceholderText('AdminPage.name_en')).toBeInTheDocument();
        });
        it("Проверка inputBox Фамилия и Имя человека", () => {
            expect(screen.getByPlaceholderText('AdminPage.person_name')).toBeInTheDocument();
        });
        it("Проверка Ссылка на фото", () => {
            expect(screen.getByPlaceholderText('AdminPage.photo_URL')).toBeInTheDocument();
        });
        it("Проверка checkBox жанров", () => {
            const genreBox = screen.getByTestId('adminGenres')
            expect(genreBox.getElementsByTagName('label').length).toBe(28)
        });
        it("Проверка наличия кнопки Показать ещё", () => {
            expect(screen.getAllByText('Показать ещё')).toHaveLength(1);
        });
    })
});