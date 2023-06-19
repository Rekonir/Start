import React from "react";
import { render, fireEvent, screen, act } from "@testing-library/react";
import Selector from "../../src/components/UI/Selector/Selector";
import { SelectorProps } from "../../src/types/types";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../src/store/store";
import { Provider } from "react-redux";

describe("Selector component", () => {
    const props: SelectorProps = {
        name_ru: "Категория",
        name_en: "Category",
        array: ["Action", "Comedy", "Drama"],
        filter: "genre",
        func: jest.fn(),
    };
    beforeEach(() => {
        const RusLanguage = true
        render(<MemoryRouter>
            <Provider store={store}>
                <Selector {...props} />
            </Provider>
        </MemoryRouter>);
    })

    it("renders name correctly", () => {
        expect(screen.getByText(/^Категория$/i)).toBeInTheDocument();
    });
});





