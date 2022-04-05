import { FC } from "react";

import { Grid } from "@nextui-org/react";

import { FavoriteFilmCard } from "./FavoriteFilmCard";

interface Props {
  films: string[];
}

export const FavoriteFilms: FC<Props> = ({ films }) => {

  const favoriteFilmList: JSX.Element[] = films.map((id) => {
    return (
      <FavoriteFilmCard key={id} filmId={id} />
    );
  });

  return (
    <Grid.Container gap={2} justify='flex-start'>
      {favoriteFilmList}
    </Grid.Container>
  );
};
