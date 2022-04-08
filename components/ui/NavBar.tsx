import { FC } from "react";
import Image from "next/image";
import NextLink from "next/link";

import { Link, Spacer, Text, useTheme } from "@nextui-org/react";

export const NavBar: FC = () => {
  const { theme } = useTheme();

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0x 20px',
      backgroundColor: theme?.colors.gray900.value,
    }}>
      <NextLink href="/" passHref>
        <Link css={{ marginLeft: '10px' }}>
          <Image
            src="https://image.tmdb.org/t/p/original/etqr6fOOCXQOgwrQXaKwenTSuzx.jpg"
            alt="icono de la app"
            width={60}
            height={35}
          />
        </Link>
      </NextLink>

      <NextLink href="/" passHref>
        <Link css={{ marginLeft: '5px' }}>
          <Text color="white" h3>Ghibli Films</Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href="/favorites" passHref>
        <Link css={{ marginRight: '10px' }}>
          <Text color="white">Favoritos</Text>
        </Link>
      </NextLink>
    </div >
  );
};
