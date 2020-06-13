import Story from '../components/Story.js';
import view from '../utils/tinker25view.js';

export default async function Stories(path) {
  const stories = await getStories(path);
  const hasStories = stories.length > 0;

  view.innerHTML = `<div>
    ${hasStories ? stories.map(story => Story(story)) : 'No stories't}
  </div>`;
}

async function getStories(path) {
  const isHomeRoute = path === '/';
  const isNewRoute = path === '/new';
  if (isHomeRoute) {
    path = '/news';
  } else if (isNewRoute) {
    path = '/newest';
  }

  const response = await fetch(`https://node-hnapi.herokuapp.com${path}`);
  const stories = await response.json();
  return stories;
}
