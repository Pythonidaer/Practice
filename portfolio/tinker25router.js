import Stories from './pages/tinker25stories.js';

// initialize a new router

const router = new Navigo(null, true, '#');
console.log(router);

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
      { path: '/show', page: Stories  }
    ];

    routes.forEach(route => {
      router.on(route.path, () => {
        // callback function
        // pass to it the given path that we're on
          route.page(route.path);
      }).resolve(); //chain on
    })
  }
}
