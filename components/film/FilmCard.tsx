import { FC } from "react";
import { useRouter } from "next/router";

import { Card, Grid, Row, Text } from "@nextui-org/react";

import { Film } from "../../interfaces";

interface Props {
  film: Film;
}

export const FilmCard: FC<Props> = ({ film: { id, rt_score, title, movie_banner } }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/film/${id}`);
  };

  return (
    <Grid key={id} xs={12} sm={6} md={4} xl={3}>
      <Card
        hoverable
        clickable
        onClick={onClick}
        cover
      >
        <Card.Body css={{ p: 1 }}>
          <Card.Image
            src={movie_banner}
            width='100%'
            height='100%'
          />
        </Card.Body>
        <Card.Footer
          blur
          css={{
            position: 'absolute',
            bgBlur: '#0f1114',
            borderTop: '$borderWeights$light solid $gray700',
            bottom: 0,
            zIndex: 1
          }}
        >
          <Row justify='space-between'>
            <Text>{title}</Text>
            <Text>Score: {rt_score}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
