import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import MovieItem from '../components/MovieItem';
import PageTitle from '../components/PageTitle';
import Grid from '../components/shared/Grid';
import Loading from '../components/Loading';

import { getWatchList } from '../redux/actions';

const WatchList: FC = () => {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const movies = useSelector((state: any) => state.MovieReducer.watchList);

  useEffect(() => {
    dispatch(getWatchList());
  }, []);

  const movieItems = movies?.map((el: any) => (
    <MovieItem
      key={el.id}
      title={el.title}
      poster={el.poster_path}
      rate={el.vote_average}
      navigate={() => navigate(`/${el.id}`)}
    />
  ));

  return (
    <section className="app-page__wrapper">
      <PageTitle content="Watch List" />
      <div style={{ padding: '40px 0' }}>
        {movieItems ? <Grid>{movieItems}</Grid> : <Loading />}
      </div>
    </section>
  );
};

export default WatchList;
