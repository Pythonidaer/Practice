import view from '../utils/tinker25view.js';
import checkFavorite from '../utils/checkFavorite.js';
import store from '../tinker25store.js';
import Story from '../components/Story.js'

export default function Favorites() {
  const { favorites } = store.getState();
  const hasFavorites = favorites.length > 0;

  view.innerHTML = `<div>
    ${hasFavorites ? favorites.map(story => Story({
      ...story,
      isFavorite: checkFavorite(favorites, story)
    })).join('') : "Add some favorites!"}
  </div>`
}
