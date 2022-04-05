import { useEffect, useState } from 'react';
import { NextPage } from 'next';

import { FavoriteFilms } from '../../components/film';
import { localFavorites } from '../../utils';
import { MainLayout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui';

const FavoritesPage: NextPage = () => {

  const [favoriteFilms, setFavoriteFilms] = useState<string[]>([]);

  useEffect(() => {
    setFavoriteFilms(localFavorites.films());
  }, []);


  return (
    <MainLayout title='Películas favoritas'>
      {
        favoriteFilms.length === 0
          ? (<NoFavorites />)
          : (<FavoriteFilms films={favoriteFilms} />)
      }
    </MainLayout>
  );
};

export default FavoritesPage;
