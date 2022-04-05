import type { GetStaticProps, NextPage } from 'next';

import { Grid } from '@nextui-org/react';

import { Film } from '../interfaces';
import { FilmCard } from '../components/film';
import { ghibliApi } from '../api';
import { MainLayout } from '../components/layouts';

interface Props {
  films: Film[];
}

const HomePage: NextPage<Props> = ({ films }) => {

  const filmList: JSX.Element[] = films.map((film) => {
    return (
      <FilmCard key={film.id} film={film} />
    );
  });

  return (
    <MainLayout title='Lisado de Películas'>
      <Grid.Container gap={2} justify='flex-start'>
        {filmList}
      </Grid.Container>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await ghibliApi.get<Film[]>('/films');

  return {
    props: {
      films: data,
    }
  }
};

export default HomePage;
