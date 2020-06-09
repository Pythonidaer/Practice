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
  createsRoutes() {
    const routes = [
      { path: '/', page: Stories  }
    ];

    routes.forEach(route => {
      router.on(route.path, () => {
        // callback function
          route.page();
      }).resolve(); //chain on
    })
  }
}
