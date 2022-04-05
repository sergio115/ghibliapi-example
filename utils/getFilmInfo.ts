import { Film } from "../interfaces";
import { ghibliApi } from "../api";


export const getFilmsInfo = async (id: string) => {

  try {
    const { data } = await ghibliApi.get<Film>(`/films/${id}`);

    return {
      id: data.id,
      title: data.title,
      description: data.description,
      image: data.image,
      movie_banner: data.movie_banner,
    }

  } catch (error) {
    return null;
  }
};
