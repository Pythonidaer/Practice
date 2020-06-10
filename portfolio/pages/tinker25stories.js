// go out of pages directory
import view from '../utils/tinker25view.js';

export default async function Stories(path) {
  const stories = await getStories(path);
  console.log(stories);

  view.innerHTML = `<div>${path}</div>`;
}

async function getStories(path) {
  const isHomeRoute =  path === '/';
  if (isHomeRoute) {
    path = '/news';
  }
  const response = await fetch(`https://node-hnapi.herokuapp.com${path}`);
  const stories = await response.json();
  return stories;
}

// https://node-hnapi.herokuapp.com

// https://node-hnapi.herokuapp.com/new


// https://node-hnapi.herokuapp.com/ask


// https://node-hnapi.herokuapp.com/show

// https://node-hnapi.herokuapp.com/jobs



// / (Top) -> /new
// /new (New) -> /newest
// /ask (Ask) -> /ask
// /show (Show) -> /show

// /jobs (Jobs) -> /jobs
