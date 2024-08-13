import { FC, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Plus from '../assets/images/add.svg';
import Like from '../assets/images/like.svg';

import MovieItem from '../components/MovieItem';
import PageTitle from '../components/PageTitle';
import Grid from '../components/shared/Grid';
import SearchField from '../components/shared/SearchField';
import Loading from '../components/Loading';

import { addFavList, addWatchList, getMovies } from '../redux/actions';
import { EList } from '../const/enum';
import Button from '../components/shared/Button';
import { SearchContext } from '../context/SearchProvider';

const Home: FC = () => {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const movies = useSelector((state: any) => state.MovieReducer.movies);

  const { searchValue, setSearchValue } = useContext(SearchContext);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  useEffect(() => {
    const getData = setTimeout(() => {
      dispatch(getMovies(searchValue));
    }, 2000);

    return () => clearTimeout(getData);
  }, [searchValue]);

  const addToList = (item: number, type: EList) => {
    switch (type) {
      case EList.WATCH:
        dispatch(addWatchList(item));
        break;

      case EList.FAVOURITE:
        dispatch(addFavList(item));
        break;

      default:
        break;
    }
  };

  const movieItems = movies?.map((el: any) => (
    <MovieItem
      key={el.id}
      title={el.title}
      poster={el.poster_path}
      rate={el.vote_average}
      navigate={() => navigate(`/${el.id}`)}
    >
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={() => addToList(el.id, EList.WATCH)}>
          <img src={Plus} className="icon" alt="icon" />
        </Button>
        <Button onClick={() => addToList(el.id, EList.FAVOURITE)}>
          <img src={Like} className="icon" alt="icon" />
        </Button>
      </div>
    </MovieItem>
  ));

  return (
    <section className="app-page__wrapper">
      <PageTitle content="Movies" />
      <SearchField
        onChange={handleSearchChange}
        defaultValue={searchValue}
        placeholder="Search Movies"
      />

      <div style={{ padding: '40px 0' }}>
        {movieItems ? <Grid>{movieItems}</Grid> : <Loading />}
      </div>
    </section>
  );
};

export default Home;
