

const favoritesPath = 'ghibli-films-favorites';

const toggleFavorite = (id: string) => {
  let favorites: string[] = JSON.parse(localStorage.getItem(favoritesPath) || '[]');

  if (favorites.includes(id)) {
    favorites = favorites.filter(filmId => filmId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem(favoritesPath, JSON.stringify(favorites));
};

const existInFavorites = (id: string): boolean => {
  if (typeof window === 'undefined') return false;

  const favorites: string[] = JSON.parse(localStorage.getItem(favoritesPath) || '[]');

  return favorites.includes(id);
};

const films = (): string[] => {
  return JSON.parse(localStorage.getItem(favoritesPath) || '[]');
};

export default {
  toggleFavorite,
  existInFavorites,
  films,
}
