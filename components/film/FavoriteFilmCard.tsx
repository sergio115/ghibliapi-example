import { FC, useEffect, useState } from "react";
import { useRouter } from 'next/router';

import { Card, Grid } from "@nextui-org/react";

import { getFilmsInfo } from "../../utils";

interface Props {
  filmId: string;
}

export const FavoriteFilmCard: FC<Props> = ({ filmId }) => {

  const [movieBanner, setMovieBanner] = useState<string | undefined>();

  useEffect(() => {
    async function fetch() {
      const film = await getFilmsInfo(filmId);
      setMovieBanner(film?.movie_banner);
    }

    fetch();
  });

  const router = useRouter();

  const onFavoriteClicked = () => {
    router.push(`/film/${filmId}`);
  };

  return (
    <Grid key={filmId} xs={12} sm={6} md={4} xl={3} onClick={onFavoriteClicked}>
      <Card
        hoverable
        clickable
        cover
      >
        <Card.Body css={{ p: 1 }}>
          <Card.Image
            src={movieBanner || ''}
            width='100%'
            height='100%'
          />
        </Card.Body>
      </Card>
    </Grid>
  );
};
