import { render } from '@testing-library/react';
import MovieItem from '../components/MovieItem';

describe('MovieItem component', () => {
  let mockData: any;
  beforeEach(() => {
    mockData = {
      adult: false,
      backdrop_path: '/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg',
      genre_ids: [14, 12, 28],
      id: 338953,
      original_language: 'en',
      original_title: 'Fantastic Beasts: The Secrets of Dumbledore',
      overview:
        "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
      popularity: 3521.98,
      poster_path: '/8ZbybiGYe8XM4WGmGlhF0ec5R7u.jpg',
      release_date: '2022-04-06',
      title: 'Fantastic Beasts: The Secrets of Dumbledore',
      video: false,
      vote_average: 6.9,
      vote_count: 1777
    };
  });

  test('renders movie item components via given data', async () => {
    const { getByTestId } = render(
      <MovieItem title={mockData.title} poster={mockData.poster} rate={null} navigate={() => {}} />
    );

    const img = getByTestId(`app-movie-img-${mockData.title}`);
    const body = getByTestId(`app-movie-body-${mockData.title}`);

    expect(getByTestId(`app-movie-item-${mockData.title}`)).toHaveClass('app-movie__item');
    expect(getByTestId(`app-movie-item-${mockData.title}`)).toContainElement(img);
    expect(getByTestId(`app-movie-item-${mockData.title}`)).toContainElement(body);
  });
});
