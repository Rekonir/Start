import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import RowSlider from '../../src/components/RowSlider/RowSlider';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../src/store/store';
import FilmData from '../../src/FilmData.json';
import FilmCard from '../../src/components/FilmCard/FilmCard';


describe('RowSlider component', () => {
    const testSlides = FilmData;
    beforeEach(() => {
        const RusLanguage = true
        render(<MemoryRouter>
            <Provider store={store}>
                <RowSlider slides={
                    testSlides.map(film => <FilmCard film={film} key={film.id} type={'forRow'}></FilmCard>)
                } title={'Test Slider'} />
            </Provider>
        </MemoryRouter>);
    })

    it('Отображение названия', () => {
        expect(screen.getByText('Test Slider')).toBeInTheDocument();
    });

    it('Наличие стрелки вправо', () => {
        const rightArrowBtn = screen.getByTestId('right-arrow');
        expect(rightArrowBtn).toBeInTheDocument();
    });
    it('Наличие стрелки влево', () => {
        const leftArrowBtn = screen.getByTestId('left-arrow');
        expect(leftArrowBtn).toBeInTheDocument();
    });

});