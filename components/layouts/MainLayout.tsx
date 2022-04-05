import { FC } from 'react';
import Head from 'next/head';

import { NavBar } from '../ui';

interface Props {
  title?: string;
}

export const MainLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Ghibli App'}</title>
        <meta name='author' content='Sergio Eduardo Perez' />
        <meta name='description' content={`Información sobre la pelicula ${title}`} />
        <meta name='keywords' content={`${title}, ghibli, anime, pelicula`} />
      </Head>

      <NavBar />

      <main style={{
        padding: '0px 20px'
      }}>
        {children}
      </main>
    </>
  );
};
