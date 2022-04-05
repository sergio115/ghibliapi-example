import { FC } from "react";

import { Container, Image, Text } from "@nextui-org/react";

export const NoFavorites: FC = () => {
  return (
    <Container css={{
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(100vh - 100px)',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    }}>
      <Text>No hay favoritos</Text>
      <Image
        src="https://image.tmdb.org/t/p/original/nDOsicEg4RHDq0t23JKGSb58z6u.jpg"
        alt="Favoritos"
        width="50%"
        height="50%"
        css={{
          opacity: 0.1
        }}
      />
    </Container>
  );
};
