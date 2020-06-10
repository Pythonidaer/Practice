// go out of pages directory
import view from '../utils/tinker25view.js';

export default function Stories(path) {
  view.innerHTML = `<div>${path}</div>`;
}
