import Story from '../components.Story.js';
import view from '../utils/tinker25view.js';

export default async function Item() {
  const story = await getStory();
  const hasComments = story.comments.length > 0;

  view.innerHTML = `
    <div>
      ${Story(story)}
    </div>
    <hr/>
    ${hasComments ? story.comments.map(comment => JSON.stringify(comment)).join('') : 'No comments'}
    `
}

function getStory() {
  const storyId = window.location.hash.split('?id=')[1];
  const response = await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`);
  const story = await response.json();
  return story;
}
