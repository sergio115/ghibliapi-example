import { useState } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { Button, Card, Grid, Text } from "@nextui-org/react";
import confetti from 'canvas-confetti';

import { Film } from "../../interfaces";
import { getFilmsInfo, localFavorites } from "../../utils";
import { MainLayout } from "../../components/layouts";

interface Props {
  film: Film;
}

const FilmPage: NextPage<Props> = ({ film }) => {

  const [isInFavorites, setIsInFavorites] = useState(localFavorites.existInFavorites(film.id));

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(film.id);
    setIsInFavorites(!isInFavorites);

    if (!isInFavorites) {
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0,
        }
      });
    }
  };

  return (
    <MainLayout title={film.title}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={film.image || 'no-image.png'}
                width="100%"
                height="100%"
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform='capitalize'>{film.title}</Text>

              <Button
                color="gradient"
                ghost={!isInFavorites}
                onClick={onToggleFavorite}
              >
                {isInFavorites ? 'En Favoritos' : 'Guardar en favoritos'}
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Description:</Text>
              <Text size={20}>{film.description}</Text>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const films: string[] = [...Array(22)].map((value, index) => `${index + 1}`);

  return {
    paths: films.map(id => ({
      params: { id },
    })),
    fallback: 'blocking',
  }
};

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { id } = ctx.params as { id: string };
  const film = await getFilmsInfo(id);

  if (!film) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {
      film: film,
    },
    revalidate: 86400, // seconds = 60 * 60 * 24 => refresh each day.
  }
};

export default FilmPage;
