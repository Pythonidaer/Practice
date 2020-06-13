export default function Story(story) {
  // console.log(story);
  return `
    <div class="story">
      <span>${story.index}</span>
    </div>
  `;
}
