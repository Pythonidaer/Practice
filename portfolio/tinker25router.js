import Stories from './pages/tinker25stories.js';
import Item from './pages/tinker25item.js';
import Favorites from './pages/tinker25favorites.js'

// initialize a new router

const router = new Navigo(null, true, '#');
// console.log(router);

// declare what routes we have in our app
// export to instantiate
export default class RouterHandler {
  constructor() {
    // run a method that creates our routes
    this.createRoutes()
  }

// take an array of routes
  createRoutes() {
    const routes = [
      { path: '/', page: Stories  },
      { path: '/new', page: Stories  },
      { path: '/ask', page: Stories  },
      { path: '/show', page: Stories  },
      { path: '/item', page: Item },
      { path: '/favorites', page: Favorites }
    ];

    // destructure
    routes.forEach(({ path, page }) => {
      router.on(path, () => {
        // callback function
        // pass to it the given path that we're on
          page(path);
      }).resolve(); //chain on
    })
  }
}
