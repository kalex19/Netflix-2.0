import {
  cleanMovies
} from './cleanMovies';
import {
  mockMovie,
  mockGenre
} from '../utils/mockData/mockData';

describe('cleanMovies', () => {
  it('should return a cleaned movie', () => {
    const expected = [{
      movie_id: 420818,
      isFavorited: false,
      poster_path: "http://image.tmdb.org/t/p/w300\/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg",
      backdrop_path: "http://image.tmdb.org/t/p/original\/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg"
    }]
    //incomplete
    const result = cleanMovies(mockGenre, [mockMovie]);
    expect(result).toEqual(expected);
  })
})