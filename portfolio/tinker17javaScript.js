// "use strict"; //whenever we can
// console.log("Fuck Off, America");

// Give username variable a value
// var username;

// console.log(username); returns undefined
// Give it value "Jonathan" that the "user" has "provided".
// username = "Jonathan";

// declare variable and immediately assign it:
// yes
// var firstName$;
// var first1Name;
// yes
// var firstName = "Jon";
// no
// var firstName-
// var 1firstName;
// console.log(firstName);
// strict od e ReferenceError: message is not defined
// message = "goodbye cruel world";
// var message = "goodbye cruel still";
// Hoisting: -- ability to access the variable before it's been created
// console.log(age); //reads undefined
// var age = 29;
// console.log(window);
// console.log(window.message);
// This is a property of the global object. IT IS NOT A VARIABLE
// console.log(message);
// console.log(age);

// Non hoisted keywords:
// console.log(age);
// ReferenceError: Cannot access 'age' before initialization
// let age = 26;
// let age;
// const age = 29;
// SyntaxError: Identifier 'age' has already been declared
// age = 29;
// age = 42;

// SyntaxError: Missing initializer in const declaration
// const age;
// const age = 29;
// TypeError: Assignment to constant variable;
// age = 42;
// console.log(age);

// const originalPrice = 50;
// const percentOff = 20;
// const salePrice = originalPrice * (percentOff / 100);
//
// console.log(salePrice);

// var originalPrice = 50;
// var percentOff = 20;
// var salePrice = originalPrice * (percentOff / 100);
//
// console.log(salePrice);

// Why Block Scoping Matters
// var price = 20;
// var isSale = true;
// // conditional statement
// if (isSale) {
//   // discount price of product
//   const price = 20 - 2;
//   // do something
//   console.log('sale price', price);
// }

// console.log('price', price);

// let username = "Jon Hammond";
// let message = `Hi ${username}, how are you?`;
// console.log(message);
// console.log("Good morning, " + username + "!");

// const weight = 196;
// const moonWeight = `You weigh ${weight * 0.165} pounds on the moon`;
// Unexpected Identifier
// const moonWeight = 'You'd weigh X pounds on the moon';
// Unexpected Identifier
// Unexpected Identifier
// Valid String
// const moonWeight = 'You\'d weigh X pounds on the moon';
// With Template Literals
// const moonWeight = `He'd say, "I'm a string."`;
// Using new special characters for multi-line comments:
// const moonWeight = `This is
// unexpectedly more than
// I thought I'd way.`
// console.log(moonWeight);





// Types & Conditionals
// const prefersDarkMode = false; // or false
// const prefersSolarizedMode = true;
//
// if (prefersDarkMode) {
//   console.log('dark mode set!');
//   document.body.style.background = 'black';
// } else if (prefersSolarizedMode) {
//   console.log('solarized mode set!');
//   document.body.style.background = 'palegoldenrod';
// } else {
//   console.log('light mode set!');
//   document.body.style.background = 'ghostwhite';
// }

// Switch Statements

// const colorMode = 'dark';
// switch (colorMode) {
//   case 'solarized':
//     console.log('solarized mode set!');
//     document.body.style.background = 'palegoldenrod';
//     break
//   case 'dark':
//     console.log('dark mode set!');
//     document.body.style.background = 'black';
//     break
//   default:
//     console.log('light mode set!');
//     document.body.style.background = 'ghostwhite';
// }

// Test challenge
// const time = "night" // could be "afternoon", "evening" and "night"
//
// if (time === "morning") {
//     console.log("Good morning!");
// } else if (time === "afternoon") {
//     console.log("Good afternoon!");
// } else if (time === "evening") {
//     console.log("Good evening!");
// }  else {
//     console.log("Good night!");
// }

// const time = "morning" // could be "afternoon", "evening" and "night"

// switch (time) {
//     case 'morning':
//         console.log("Good morning!");
//         break
//     case 'afternoon':
//         console.log("Good afternoon!");
//         break
//     case 'evening':
//         console.log("Good evening!");
//         break
//     default:
//         console.log('Good night!');
// }

// Types & How they can be changed
// let message = 'some string';
// console.log(String(29));
// console.log(Boolean(message));
// console.log(typeof(message));

// if ('hello') { // truthy coerced to true
//   console.log('run');
// } else {
//   console.log('skipped');
// }

// if (0) { // falsy coerced to false
//   console.log('run');
// } else {
//   console.log('skipped');
// }

// remember: false || 0 || '' || null || undefined || NaN

// 1) Avoid direct comparisons in Conditionals
// const username = ''; //works for any falsy value
//
// if (!username) {
//   console.log('no user');
// }

// 2) Use triple equals === (strict equals operator)

// if (null == undefined) { // loose equal operators is coercing
//   console.log('equals'); // logs with loose equals operators
// } else {
//   console.log('not equals');
// }
//
// if (null === undefined) { // strict  equal operators does not
//   console.log('equals');
// } else {
//   console.log('not equals'); // logs with strict = operators
// }

// 3) Convert to real Boolean values where needed

// if (Boolean(NaN) === Boolean(NaN)) {
//   console.log('equal')
// } else {
//   console.log('not equals')
// }

// const isAuthenticated = true;
// let cartItemCount = 0;
//
// if (isAuthenticated) {
//   // add item to cart
//   cartItemCount = 1;
// } else {
//   // tell user to login
//   // console.log("Please log in!");
//   cartItemCount = 0; // redundant variable referene
// }
//
// const cartItemCount = isAuthenticated ? 1 : 0;
// console.log(cartItemCount);

// const age = 19;

// let greeting;
//
// if (age < 10) {
//   greeting = "Hey there";
// } else if (age > 18) {
//   greeting = "Greetings";
// } else if (age > 10) {
//   greeting = "What's up?";
// } else {
//   greeting = "That's an interesting age!";
// }
// console.log(greeting);
//
// const greeting = age <10 ? "Hey there" : age >18 ? "Greetings" : age >10 ? "What's up?" : "That's an interesting age!";
//
// console.log(greeting);

// Even Shorter Conditionals with Short-Circuiting
// const response = "Reed";
// const isEmailVerified = true;
// let username;

// if (response) {
//  if(isEmailVerified) {
//     username = response;
//  }
// } else {
//   username = "guest";
// }

// if response is truthy, set response to username variable username else if it's a falsy call it a "guest";
// const username = response ? response : "guest";
// // LESS WORDY, using a single logical operator is Short Circuiting
// const username = response || "guest";
// short-circuiting lets us evaluate multiple conditions
// const username = isEmailVerified && response || "guest";
//
// console.log(username);










// Why We Need Functions
// const user1 = "Reed";
// const user2 = "Doug";

// Needs to have dynamic content that we can reuse
// When we have a need for this, we need to use a function
// const message = `User (user) says: (text)`;
// // let greeting = "Hi";
//
// // name functions according to what responsibility they have in our app
// function sendUserMessage(user, text) {
//   console.log(`User ${user} says: ${text}`);
// }
//
// sendUserMessage(user1, 'Hey there');
// sendUserMessage(user2, "What's up?");
//
// function echo(input, greeting) {
//   // function scoped
//   // let greeting;
//   // We can use input passed directly through functions as an argument, as well as variables through outer scopes
//   // console.log(`${greeting} ${input}`);
//   return `${greeting} ${input}` //return keyword enables us to put the string immediately into a new variable
// }
// // No corresponding parameters for "Hi"
// const result = echo(42, "Hi");
// console.log(result);

// Why Closures Matter
// function handleLikePost() { //executed first creating an instance of the inner function addLike();
//   let likeCount = 0;
//   return function addLike() { //this function has access to any variables declared in the outer scope; closes over likeCount;
//     likeCount += 1;
//     return likeCount;
//   }
//   addLike(); //called outside the scope
//   console.log('like count:', likeCount);
// }
//
// const like = handleLikePost(); // stored outside from inside
// // returned addLike() provied as handleLikePost creates this var
// console.log(like());
// console.log(like());
// console.log(like());

// Why do we care about closures as JavaScript developers?
// If I had to guess, I would say it's because it allows us to do many more things with our functions than we'd otherwise be able to. But specifically, I'm not sure yet.
// Challenge: Write a countdown function with a hard-coded starting number inside closure
// Stretch goal: Write a countdown function that can count from a provided number,
// with a provided step

// Start
// function countdown(step) {
//   // write your code here
//   let countDown = 10;
//   return function minusX() {
//     countDown -= step;
//     return countDown;
//   }
// }
//
// // const countingDown = countdown();
// const countingDown = countdown(1);
// // console.log(countingDown());
// // console.log(countingDown());
// // console.log(countingDown());
// console.log(countingDown());
// console.log(countingDown());
// console.log(countingDown());

// Arrow functions for more precise,
// To make working with objects and classes easier
// Due to how it handles the 'this' keyword

// const username = 'john';

//  function capitalizeName(name) {
//   return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
// }

// const capitalize = function(name) {
//   return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
// }

// Make an arrow function
// const capitalize = (name) => {
//   return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
// }

// Make an arrow function more succinct
// const capitalize = (name) =>
//    `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
//
// function greetUser(name, callback) {
//   return callback(capitalize(name));
// }
//
// const result = greetUser(username, name => `Hi there, ${name}!`);
//
// console.log(result);

// Challenge: Rewrite your first function from a previous challnge to be an arrow function.
// Stretch goal: Rewrite counting down closure in arrow function form.


// Challenge start
// const splitBill = (amount, numPeople)  => {
//     return `Each person needs to pay ${amount / numPeople}`
// }
//
// console.log(splitBill(10, 2));
// console.log(splitBill(10, 4));
// console.log(splitBill(10, 5));
//
//
// // Stretch goal start
// const countdown = (startingNumber, step) => {
//   let countFromNum = startingNumber + step;
//   return () => countFromNum -= step;
// }

// function countdown(startingNumber, step) {
//   let countFromNum = startingNumber + step;
  // return function decrease() {
  //   countFromNum -= step;
  //   return countFromNum;
  // }
// }

// const countingDown = countdown(20, 2);
//
// console.log(countingDown());
// console.log(countingDown());
// console.log(countingDown());

// Higher order functions concise with arrow functions
// Partial Application for Single-Responsibility Functions
//
// function getData(baseUrl) {
//   return function(route) {
//     return function(callback) {
//       fetch(`${baseUrl}${route}`)
//         .then(response => response.json())
//         .then(data => callback(data));
//     }
//   }
// }
// Same as above:
// const getData = baseUrl => route => callback =>
//       fetch(`${baseUrl}${route}`)
//         .then(response => response.json())
//         .then(data => callback(data));
//
// const getSocialMediaData = getData('https://jsonplaceholder.typicode.com');
// const getSocialMediaPosts = getSocialMediaData('/posts');
// const getSocialMediaComments = getSocialMediaData('/comments');
//
// getSocialMediaPosts(posts => {
//   posts.forEach(post => console.log(post.title));
// })

// getData('https://jsonplaceholder.typicode.com', '/posts');
// getData('https://jsonplaceholder.typicode.com', '/comments');





// 3 Challenges: Objects:

// const bar = 'Tavern';
// const cafe = 'Gulu';
// const restaurant = 'Koto';
// const favouritePlaces = {
//   bar,
//   cafe,
//   restaurant,
//   greeting() {
//     console.log("Hello there!");
//   }
// }
// console.log(favouritePlaces);
//
// favouritePlaces.greeting();
//
// console.log(favouritePlaces.restaurant);

// Passed by reference
// const obj = {};
// const anotherObj = obj;
// anotherObj.a = 1;
// console.log(anotherObj.a);

// Review
// primitive types = undefined, null, boolean, number, string, & symbol

// const num = 42; // data is copied
// const anotherNum = 42;
// console.log(num === anotherNum); // have same value//
// // primitive values are passed by value; they have the same type of data;
//
// // Object data differs from pirmitive data in JavaScript.
// const obj = {}; //not copied over. // not passed by value
// const anotherObj = obj;
// anotherObj.a = 1; //another property;
// console.log('obj', obj);
// console.log('another obj', anotherObj);
// this is 1 shared reference, so we update both, typically unwanted;
// console.log(obj === anotherObj); // equates to false
// Unlike primitives, we have the ability to dynamically add properties to them. This is an ecessary criteria of objects
// Also include the sub-types of objects
// arrays, functions, maps & sets

// Get and Modify Object Data
// Getting a color object
// Object keys are just strings

// const color = 'black';
// const hexCode = '#000';
//
// const colors = {
//   'yellow Color': '#ff0',
//   blue: "#f00",
//   orange: "#f60",
//   [color]: hexCode
// };
//
// // colors[color] = hexCode;
// // console.log(colors);
// // console.log(colors[color]);
//
//
//
// // console.log(colors.yellow);
// // colors.red = '#foo'; //change the object by mutating it
//
// // Values in an object can be changed/updated any time
// // colors.red = "#f00";
// // console.log(colors['yellow Color']);
//
// function getColor(key) {
//   // return colors.key;
//   return colors[key];
// }
//
// console.log(getColor('orange'));
// delete colors.blue;
// console.log(colors);
// be aware of the static nature of objects
// for data and calling, you'll use the dot syntax
// if you have keys that can change, be sure to use the square brackets


// Object Destructuring
// Grab only the stuff we need without using the entire object every time
// const user = {
//   name: "Jon",
//   username: "JonHammond",
//   email: "Jon@gmail.com",
//   details: {
//     title: "Support Analyst"
//   }
// };
// // name has to match existing property object name
// // further level destructuring
// const {name, details: {title}} = user;
// // partial dot notation >> const { title } = user.details;
//
// // destructuring a function
// // get and access only the property values that you need
// function displayUserBio({name, details: {title}}) {
//   console.log(`${name} is a ${title}.`);
//   // console.log(details);
// }
//
// displayUserBio(user)

// const { username, name } = user;
//
// function displayUser() {
//   console.log(`name: ${name}, username: ${username}`);
// }
//
// displayUser()


// Object Destructuring Challenge
// const recommendations = {
//     pancakes: 'Nowhere Man',
//     riceBowls: 'Pompoko',
//     beer: 'The Craft Beer Co.',
//     coffee: 'Coffee Roasters',
//     small_plates: 'Venetian Plates',
//     music: {
//         traditional: 'Fiddler\'s Elbow',
//         jazz: 'The Paris House'
//     }
// }
//
// const {beer, coffee} = recommendations;
// // const {music: {traditional, jazz} } = recommendations; // nested destructuring
// const {traditional, jazz} = recommendations.music; //alternative;
//
// function displayMusicPlaces({music: {traditional, jazz} }) {
//     console.log(`Head to ${traditional} or ${jazz} to listen to great music!`);
// }
//
// displayMusicPlaces(recommendations);






// Merge Objects with Object Spread Operator
// const user = {
//   name: "",
//   username: "",
//   phoneNumber: "",
//   email: "",
//   password: '',
//   verified: true
// }
//
// const newUser = {
//   username: "ReedBarger",
//   email: "reed@gmail.com",
//   password: "mypassword"
// };

// console.log(Object.assign(user, newUser));
// Objects are passed by Reference, not by value.
// We don't want to merge new values onto the original user object
// instead we want to use an enirely new object
// Object.assign({}, user, newUser); // pass an empty object
// console.log(user);
// console.log(newUser);

// const verifiedDefault = {
//   verified: false
// };

// To spread in objects individually >> ...beforeTheObjectWhosePropertiesWeWantToSpreadIn
// Establish common default properties
// Non-destructively update objects
// const createdUser = { ...user, ...newUser, verified: false};
// // console.log(Object.assign({}, newUser, { verified: false}))
// // does so in an unmutable way > more intuitive > order matters!!!
// console.log(createdUser);






// How Maps Can Do What Objects Can't
// Create maps by saying newMap();
// new Map([
//   ['key','value']
// ]);
// Let's put this map in a variable
// const map1 = new Map([
//   [1,1],
//   [true,true]
// ]);
// set() mutates our original map object

// map1.set('key', 'value');
//
// // most of the time for when a method accepts a function we use an arrow function for simplicity's sake.
// map1.forEach( (value, key) => {
//   console.log(key, value);
// });

// console.log([...map1.keys()])

// const user1 = { name: "john" }
// const user2 = { name: "mary" }
//
// // To make our users the keys on the objects and the related secret keys as vlaues
// const secretKey1 = "ansiognaiwt";
// const secretKey2 = "aoisnioanwtio";
//
// const secretKeyMap = new WeakMap([
//   [user1, secretKey1],
//   [user2, secretKey2]
// ]);
//
// // userKey.forEach( (user, secretkey) => {
// //   console.log(secretkey, user);
// // });
//
// const key = secretKeyMap.get(user1);
// console.log(key);
//
// console.log(secretKeyMap);
//
// // use
// // const user = {
// //   name: "john",
// //   verified: true
// // };
//
// const userMap = new Map([
//   ['name', 'john'],
//   ['verified', true]
// ]);
// // We could also create empty Map first then use .set() to add dynamically.
// console.log(userMap.size);

// Maps Challenge
// Challenge:
// 1. Take the object (contains a favourite place in Brighton, UK), and turn it into a Map
// 2. Add a boolean property 'visited', to indicate places that you've been to it
// 3. Add an integer property 'averageBill' with how much you spend there on average
// 4. Fetch one of the properties using the get() method

// const favouritePlace = {
//     music: "jazz",
//     name: "Paris House"
// };

// const favouritePlaceMap = new Map([
//     ["music", "jazz"],
//     ["name", "Paris House"],
//     ["visited", false],
//     ["averageBill:", 17.4]
// ]);
//
// console.log(favouritePlaceMap.get('visited'));

// Profile page display data
// console.log(this);

// const userData = {
//   username: "Jonathan",
//   title: "Support Analyst",
//   // function declaration
//   getBio() {
//     console.log(`User ${this.username} is a ${this.title}`);
//   },
//   askToFriend() {
//     // more of a workaround than a solution
//     // let that = this;
//     // setTimeout is a higher order function
//     // function within function makes this refer to something else
//     setTimeout(() => {
//       console.log(`Would you like to friend ${this.username}?`);
//     }, 2000);
//   }
// }
// // this keyword
// //  this ~~ userData
// //
// // userData.getBio();
// userData.askToFriend();




// Arrays hold order and have many built-in methods
// const todos = [];
//
// const todo1 = {
//   text: 'Wash the dishes',
//   complete: false
// };
//
// const todo2 = {
//   text: 'Do laundry',
//   complete: false
// };
//
// todos.push(todo1, todo2);
// // todos[1] = todo2;
// // todos[0] = todo1;
// // const index = [todos.length - 1];
// // todos[index];
//
// // pop() is the opposite of push()
// todos.pop();
// console.log(todos);

// Array Challenge
// Challenge:
// 1. Create an array - favouriteSongs[] -  and add your 3 favourite songs using push()
// 2. Log out the last song in the array, and make it so that your solution will log out the last one regardless of how many items there are in the array
// 3. Invoke the pop method on your created array. What values do you have left in the array?
// const favouriteSongs = [];
// const song1 = {
//     title: 'Wake Up Alone',
//     singer: 'Amy Winehouse'
// };
// const song2 = {
//     title: 'Saw Red',
//     singer: 'Subline'
// };
// const song3 = {
//     title: 'Exist',
//     singer: 'Avenged Sevenfold'
// };
// const song4 = {
//     title: 'No One Knows',
//     singer: "Queens of the Stone Age"
// }
//
// // favouriteSongs.push("Mr Tambourine man"); was an alternate add
//
// favouriteSongs.push(song1, song2, song3, song4);
// // const songIndex = [favouriteSongs.length - 1];
// // console.log(favouriteSongs[songIndex]);
// favouriteSongs.pop();
// console.log(favouriteSongs);
// // console.log(favouriteSongs[songIndex]);
//
// // much better than creating a const that did not change;
// console.log(favouriteSongs[favouriteSongs.length -1]);

// Array positioning
//   const temperatures = [69, 82, 73, 64];
//
//   // console.log(temperatures.indexOf(50));
//   // conditional statement
//
// // -1 is not a valid index
//   function tempIndexBoolean(temp) {
//     if (temperatures.indexOf(temp) >= 0) {
//       console.log(true);
//     } else {
//       console.log(false);
//     }
//   }
// tempIndexBoolean("elepant");
// TypeError: temperatures.tempIndexBoolean isn't a function
// console.log(temperatures.tempIndexBoolean("50"));
// console.log(temperatures.indexOf("red") > -1);
// better array method: includes
// console.log(temperatures.includes(50));

// const tempDegrees = [
//   {
//     degrees: 69,
//     isRecordTemp: true
//   },
//   {
//     degrees: 82,
//     isRecordTemp: false
//   },
//   {
//     degrees: 73,
//     isRecordTemp: true
//   },
//   {
//     degrees: 64,
//     isRecordTemp: true
//   },
// ];
// // just like a callback function
// const result = (tempDegrees.some(tempDegrees => tempDegrees.isRecordTemp)); //returns true or false
// console.log(result);
// const every = (tempDegrees.every(tempDegrees => tempDegrees.isRecordTemp));
// console.log(every);

// Challenge for some() and every()
// const songs = [
//     {song: "Shape of You", timesStreamed: 2.384, wonGrammy: true},
//     {song: "One Dance", timesStreamed: 1.791, wonGrammy: false},
//     {song: "Rockstar", timesStreamed: 1.781	, wonGrammy: false},
//     {song: "Closer", timesStreamed: 1.688, wonGrammy: false},
//     {song: "Thinking Out Loud", timesStreamed: 1.461, wonGrammy: true}
// ]
//
// const grammyWinner = (songs.some(songs => songs.wonGrammy));
// console.log(grammyWinner);
//
// const allMegaHits = (songs.every(songs => songs.timesStreamed >= 1.5));
// console.log(allMegaHits);

// Perform Actions on All Elements
// Recap: arr.every(el => )
// const temperatures = [
//   { degrees: 58, isRecordTemp: false },
//   { degrees: 82, isRecordTemp: true },
//   { degrees: 73, isRecordTemp: false },
//   { degrees: 64, isRecordTemp: false }
// ];

// const newTemps = temperatures.map(temperature => {
//   temperature.isRecordTemp = true;
//   temperature.isHigh = true;
//   return temperature;
// })
// console.log(newTemps);

// const newTemps = temperatures.map(temperature =>
// temperature.degrees < 60 ? { ...temperature, isLow: true } : {...temperature, isLow: false}
// );
//
// // forEach doesn't return to us a new array, no return value needed
// newTemps.forEach(temperature => {
//   if (temperature.isLow) {
//     console.log(`Temperature ${temperature.degrees} was a record low last week!`)
//   }
// })

// // We can chain as well
// temperatures
//   .map(temperature =>
// temperature.degrees < 60 ? { ...temperature, isLow: true } : {...temperature, isLow: false}
// )
//   .forEach(temperature => {
//   if (temperature.isLow) {
//     console.log(`Temperature ${temperature.degrees} was a record low last week!`);
//   }
// });
// // console.log(temperatures);

// const restaurants = [
//   { name: 'Gulu Gulu Cafe', milesAway: 2.2 },
//   { name: 'Redline Cafe', milesAway: 4.1 },
//   { name: 'Rockafellas', milesAway: 0.9 },
//   { name: 'Soup Factory', milesAway: 0.5 },
//   { name: 'Life Alive', milesAway: 5.3 }
// ]
//
// // returns new array, doesn't change the original
// // const results = restaurants.filter(restaurant =>
// const result = restaurants.find(restaurant =>
//   // utilize short circuiting
//    // restaurant.name.startsWith('R') && restaurant.milesAway < 3
//
//   restaurant.name.toLowerCase().includes('gulu') && restaurant.milesAway < 3
//  );
// // Empty Array [] if no conditions found
// // filter does return value
// // restaurant.name.startsWith('Z'));
// console.log(result);
// console.log(restaurants);

// Take a for of an array and transform into something else
// Reduce can give us any type of value that we need

// const menuItems = [
//   { item: "Blue Cheese Salad", price: 8 },
//   { item: "Spicy Chicken Rigatoni", price: 18 },
//   { item: "Ponzu Glazed Salmon", price: 23 },
//   { item: "Philly Cheese Steak", price: 13 },
//   { item: "Baked Italian Chicken Sub", price: 12 },
//   { item: "Pan Seared Ribeye", price: 31 }
// ];
//
// const total = menuItems.reduce((accumulator, menuItem) => {
//   // returns accumulator; a storage for whatever value
//   // that we want to hold into it.
//   // we basically add a menu item to 0
//   // here we loop over; great way to debug
//   console.log(`
//     accumulator: ${accumulator},
//     menu item price: ${menuItem.price}
//     `)
//   return accumulator + menuItem.price; // for first array element, this is set to initial value (as seen below here, 0)
//
// }, 0);
// console.log(total);
// JavaScript Transform Arrays challenge with .reduce()

// const cars = [
//   { name: "Toyota", isElectric: false, weight: 1320 },
//   { name: "Ford", isElectric: false, weight: 1400 },
//   { name: "Volkswagen", isElectric: false, weight: 1370 },
//   { name: "Honda", isElectric: false, weight: 1375 },
//   { name: "Tesla", isElectric: true, weight: 1750 },
//   { name: "BMW", isElectric: true, weight: 1350 },
// ];
//
//
// const totalWeight = cars.reduce((accumulator, car) => {
//     if (car.isElectric) {
//         return accumulator + car.weight;
//     } else {
//         return accumulator;
//     }
// }, 0)
//
// console.log(totalWeight);

// Understand the Power of .reduce()
// const numbers = [1, 2, 3, 4, 5, 6];
//
// // reducer in this case, # we are iterating over
// // this is a map operation as we map this into a new array
// // const doubledNumbers = numbers.reduce((accumulator, number) => {
// //   // return accumulator + number*2;
// //   accumulator.push(number*2);
// //   return accumulator;
// // }, []);
// // get a subset of an array based on a condition
// // gets 4, 5 and 6
// const greaterThanThree = numbers.reduce((acc, num) => {
//   if (num > 3) {
//     acc.push(num);
//   }
//   return acc;
//   // a subset of an array is just another array
// }, []);
// // filter does another reduce operation
// const greaterNumbers = numbers.filter(num => num >3);
//
// // Yet another way to get the same number, but with ternary and concat
// // const greaterNumbers = numbers.reduce((acc, num) => num > 3 ? acc.concat(num) : acc, []);
// // console.log('doubled numbers', doubledNumbers);
// // console.log('numbers', numbers);
// console.log(greaterThanThree);
// console.log(greaterNumbers);

// Avoid Mutations with Array Spread
// const coffeeIdeas = ['Coffee', 'Mocha Coffee'];
//
// // const allCoffeeIdeas = coffeeIdeas;
//
// // mutate original lunch menu ideas array
// // either use a different method or use spread operator
// // allCoffeeIdeas.push('Iced Coffee');
//
// // console.log(allCoffeeIdeas);
// // console.log(coffeeIdeas);
// // we passed a reference, nto a copy.
//
// // make a copy without making changes to it.
// // copied version to all coffee ideas NEW ARRAY
// // const allCoffeeIdeas = coffeeIdeas.concat('Iced Coffee');
// //
// // console.log(allCoffeeIdeas);
// // console.log(coffeeIdeas);
//
// // array spread operator to clone previous array
// // this is the immutable option
// const allCoffeeIdeas = [...coffeeIdeas];
// allCoffeeIdeas.push('Strawberry Coffee');
//
// console.log(allCoffeeIdeas);
// console.log(coffeeIdeas);

// Mold Arrays with the Spread Operator
// const cssProjectIdeas = ["Mike's Beefs Menu"];
// const arrayProjectIdeas = ["LinkedIn Ipsum Generator"];
// const buttonProjectIdeas = ["CodeNewbie Quote Generator"];
//
// const allProjectIdeas = [...arrayProjectIdeas, ...buttonProjectIdeas];
//
// const otherProjectIdeas = [
//     ...arrayProjectIdeas,
//     ...cssProjectIdeas,
//     // (0,1) for LinkedIn, (1,2) for CodeNewbie
//     ...allProjectIdeas.slice(0,1)
//   ];
// console.log(otherProjectIdeas);

// const ideaIndex = otherProjectIdeas.findIndex(idea => idea === 'cssProjectIdeas');
//
// // const finalProjectIdeas = [
// //   ...otherProjectIdeas.slice(0, ideaIndex),
// //   "Salad Fingers",
// //   ...otherProjectIdeas.slice(ideaIndex + 1)
// // ];
// //
// // console.log(finalProjectIdeas);
// const codenewbieIndex = otherProjectIdeas.findIndex( idea => idea === 'CodeNewbie');
//
// const finalProjectIdeas = [
//   ...allProjectIdeas.slice(0, codenewbieIndex)
//   // ...allProjectIdeas.slice()
// ];
// console.log(finalProjectIdeas);


// console.log(allProjectIdeas);
// is this the first item removed only?
// console.log(allProjectIdeas.slice(1));
// console.log(allProjectIdeas.findIndex(idea => idea === 'button'));

// puts items to the end or beginning of an array
// is there a method that pushes to the front that's nonmutating?

// More Flexible Arrays with Destructuring
// const finalProjectIdeas = [
//   "CodeNewbie Button",
//   "Linkedin Ipsum",
//   "Fix JavaScript Toggle"
// ];
//
// // let first = finalProjectIdeas[0];
// // let second = finalProjectIdeas[1];
// // let third = finalProjectIdeas[2];
//
// let [first, second] = finalProjectIdeas;
// // console.log('before', {first}, {second});
//
// [second, first] = [first, second];
// // console.log('after', {first}, {second});
//
// const [winner, ...losers] = finalProjectIdeas;
// console.log({winner, losers});

// Array Destructuring Challenges
// Challenge:
// In our restaurant, the chef has some favourite dishes in two different categories.
// The chef loves all dishes that start with "S", while the rest are regular dishes
// Use array destructoring to create arrays of the chefs favourite dishes of meat and
// fish, and to create arrays of the regular meat and fish dishes



// Challenge:
// In our restaurant, the chef has some favourite dishes in two different categories.
// The chef loves all dishes that start with "S", while the rest are regular dishes
// Use array destructoring to create arrays of the chefs favourite dishes of meat and
// fish, and to create arrays of the regular meat and fish dishes

// const fishDishes = ['Salmon Rillettes', 'Grilled Tuna Provencal', 'Fish and Chips']
// const meatDishes = ['Lasagna', 'Spaghetti', 'Satay Chicken Skewers']
//
// // Modify these four variables first
// let [chefsFishDishes, ...regularFishDishes] = fishDishes;
//
// let [regularMeatDishes ,...chefsMeatDishes] = meatDishes;
//
// // console.log(chefsFishDishes);
// // console.log(regularFishDishes);
// // console.log(regularMeatDishes);
// // console.log(chefsMeatDishes);
//
// // Finally, use the spread operator to create these two arrays as well
// let chefsDishes = [...chefsMeatDishes, chefsFishDishes]
// let regularDishes = [...regularFishDishes, regularMeatDishes];
// console.log(chefsDishes);
// console.log(regularDishes);


// Turn Objects into Flexible Arrays
// const obj = { one: 1, two: 2};
//
// for (const key in obj) {
//   console.log('value', obj[key]);
// }

// const user = {
//   name: 'Jonathan',
//   age: 29
// };
//
// const users = {
//   '23452345': {
//     name: "Jonathan",
//     age: 29
//   },
//   '8912918': {
//     name: "Kat",
//     age: 30
//   },
//   '1092384': {
//     name: "Liz",
//     age: 26
//   }
// };
// const usersOver20 = Object.entries(users).reduce((acc, [id, user]) => {
//   if (user.age > 20) {
//     acc.push({ ...user, id });
//   }
//   return acc;
// }, []);
//
// console.log(usersOver20);

// console.log(Object.keys(user));
// const ageExists = Object.keys(user).includes('age');
// console.log(ageExists);

// const values = Object.keys(user).map(key => user[key]);
// console.log(values);
// easier way to do the above
// console.log(Object.values(user));

// const monthlyExpenses = {
//   food: 400,
//   rent: 900,
//   insurance: 300,
//   debt: 550,
//   phone: 100
// };
//
// const monthlyTotal = Object.values(monthlyExpenses).reduce((acc, expense) => acc + expense , 0
// );
// console.log(monthlyTotal);






// Get Unique Sets of Data
// const myDishes = [
//   "Fried Eggs",
//   "Sweet Potato",
//   "English Muffin",
//   "Crockpot Broth",
//   "Raw Sushi",
//   "Fried Eggs",
//   "Sauteed Spinach",
//   "Roasted Veggies",
//   "Sweet Potato",
//   "TV Dinner",
//   "Sweet Potato",
//   "English Muffin"
// ];

//Can't compare objects by value to see if they're the same
// All unique in this regard
// Set is like an array in that it doesn't contain keys
// console.log(new Set([[1], [1], [3]]).size);
// console.log(new Set([[1], [1], [3]]).size);

// const numbers = new Set([[1], [2], [3]]);
//
// for (const num of numbers) {
//   console.log(num);
// }
// The spread operator works with any iterable.
// const uniqueDishes = [...new Set(myDishes)];
// console.log(uniqueDishes);

// const numbers = [1, 2, 3, 4, 5];
// // select the array method you need
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }
//
// numbers.forEach(number => {
//   console.log(number);
// });

// aim to use the right tool for the job
// learning modern javascript is great for this


// What are Constructor Functions?
// const student1 = {
//   id: 1,
//   name: "Reed",
//   subjects: [],
//   addSubject(subject) {
//     this.subjects = [...this.subjects, subject];
//   }
// }
//
// // student1.addSubject('Comp Sci');
// // console.log(student1.subjects);
//
// // function keyword is required
// // capital letter indicates one used to create objects
// // constructor function represents data it makes...
// // ... not a specific operation
// function Student(id, name, subjects = []) {
//   // instance property
//   this.id = id;
//   this.name = name;
//   this.subjects = subjects;
//   // not returning, just putting them on an object
// }


// we should not use an arrow function
// arrow functions don't get access to 'this' in the current context but they go a level up; the parent context
// Student.prototype.addSubject = function(subject) {
//   this.subjects = [...this.subjects, subject];
// }
// important to use this keyword with the function
// const student2 = new Student(2, "Michael", "Political Science");
// console.log(student2);
// const student3 = new Student(3, 'Rizza' );
// const student4 = new Student(4, 'Chalmers');
// Student.prototype.addSubject = function(subject) {
//   this.subjects = [...this.subjects, subject];
// }
// student3.addSubject('Math');
// student4.addSubject('Physics');
// // console.log(student3);
// // console.log(student4);
//
// // Student.prototype.removeSubject = function(subject) {
// //   this.subjects = [this.subjects.pop()];
// // }
//
// // student4.removeSubject(this.subject);
// console.log(student3);

// JS Constructor Challenge:
// function Book(id, title, author, themes = []) {
// 	this.id = id;
// 	this.title = title;
// 	this.author = author;
// 	this.themes = themes;
// }
//
// const book1 = new Book(1, "Buddha's Brain", "Guy");
// const book2 = new Book(2, "Psyhocybernetics", "Doctor");
//
// Book.prototype.addTheme = function(newTheme) {
//   // spread out this.themes array then add whatever theme
// 	this.themes = [...this.themes, newTheme];
// }
//
// book1.addTheme('Mindfulness');
// book2.addTheme('Visualization');
//
// console.log(book1.title);
// console.log(book2.themes);



// Understand the Prototype Chain
// console.log(Object.getPrototypeOf({}.constructor));

//
// console.log(new Object());

// function Book(id, title, author, themes = []) {
// 	this.id = id;
// 	this.title = title;
// 	this.author = author;
// 	this.themes = themes;
// }
//
//
//
// const book1 = new Book(1, "Buddha's Brain", "Guy");
//
// // Objects at their core are reference types, and therefore  ...
// //  ...they refer to their constructor function's prototype ...
// // ... and can access any of its methods
// // console.log(Object.getPrototypeOf(book1).constructor);
//
// // console.log(book1.__proto__);
// // equates to structure
// // Object, function, and array prototypes exist as well.
// // console.log(book1.__proto__.__proto__ === Object.prototype);
// console.log(book1.__proto__.proto__.proto__ );


// Easy Prototypal Inheritance with Classes
// Doesn't have parameters
// Classes are merely functions
// Logs as a function
// console.log(typeof class Student {});

//
// class Student {
//   // if you need to create any properties
//   constructor(id, name, subjects = []) {
//     // create instance properties of the same name
//     this.id = id;
//     this.name = name;
//     this.subjects = subjects;
//
//   }
//
//   getStudentName() {
//     return `Student: ${this.name}`
//   }
//
//   // class methods aren't properties unlike object methods
//   // any methods aren't going to be immediate properties of the class
//   addSubject() {}
// }
//
// // pass in arguments to constructor
// // can't be invoked without new
// // can't say console.log(Student.addsubject);
// const student1 = new Student(1, 'Jonathan');
// // console.log(student1);
// // logs as an instantiated student;
// // There's the function
// console.log(Student.prototype.addSubject);
// console.log(student1.getStudentName());

// class Film {
//   constructor(id, title, director, releaseYear, genres = []) {
//     this.id = id;
//     this.title = title;
//     this.director = director;
//     this.releaseYear = releaseYear;
//     this.genres = genres;
//   }
//
//   addGenre(genre) {
//     this.genres = [...this.genres, genre];
//   }
//
//   getFilmTitle(){
//     return `Title: ${this.title}`
//   }
// }
//
// const film1 = new Film(1, 'Titanic', 'James Cameron', 1997);
//
// film1.addGenre("Disaster");
//
// // function that needs to be invoked
// console.log(film1.getFilmTitle());
// // a property we're accessing directly, no added parentheses
// console.log(film1.genres);
// console.log(film1.id);
// console.log(film1.director);
// console.log(film1.releaseYear);
// console.log(film1.title);





// Share Class Features with Extends
// class Product {
//   constructor(name, price, discountable) {
//     this.name = name;
//     this.price = price;
//     this.discountable = discountable;
//   }
//   isDiscountable() {
//     return this.discountable;
//   }
// }
//
//
//
// // derived Product is the SaleProduct class
// class SaleProduct extends Product {
//   constructor(name, price, discountable, percentOff) {
//     // super function used in contructor method
//     // "craete an instance of yourself with these 3 values"v
//     super(name, price, discountable);
//     this.percentOff = percentOff;
//   }
//
//   getSalePrice() {
//     // just use it like an object with isD.. as a method
//     if (super.isDiscountable()) {
//       return this.price * ((100 - this.percentOff) / 100)
//     } else {
//       return `${this.name} is not eligible for a discount`;
//     }
//   }
// }
//
// // new objects with Product class
// const saleProduct1 = new SaleProduct("Espresso Maker", 55, false, 20);
// console.log(saleProduct1.getSalePrice());




// How to GET, SET, and SIMPLIFY classes
// Up until now, we've covered the core features of Classes
// create instances, properties with constructo

// class Product {
//   constructor(name, price, discountable) {
//     this._name = name;
//     this._price = price;
//     this.discountable = discountable;
//   }
//
//   get name() {
//     return this._name;
//   }
//
//   set name(name) {
//     if (typeof name !== "string") {
//       return this._name;
//     } else {
//       this._name = name;
//     }
//   }
//
//   get price() {
//     return this._price;
//   }
//
//   set price(price) {
//     if (typeof price !== "number") {
//       return this._price;
//     } else {
//       this._price = price;
//     }
//   }
// }
//
// const product1 = new Product("Coffee Maker", 99.95, false);
// product1.price = 30;
// product1.name = "Tampon"
// console.log(product1.price);
// console.log(product1.name);
// console.log(typeof product1.name);
// product1.price = {};
// console.log(product1.clearancePrice);
// product1.price = {};
// console.log(product1.newPrice);

// const isAuth = true;
// const user = {
//   favorites: []
// };
//
// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//     // arrow functions to make favorite product a property of the constructor which is a property equal to an arrow function
//     // this.favoriteProduct = () => {
//     //     user.favorites.push(this.name);
//     // console.log(`${this.name} favorited!`);
//     // }
//     this.favoriteProduct = this.favoriteProduct.bind(this);
//   }
//
//   handleFavoriteProduct() {
//     if (isAuth) {
//       // functions create their own context
//       setTimeout(this.favoriteProduct, 1000);
//       // binding this correctly
//       // now refers to one level up from the setTimeout
//       // setTimeout(() => this.favoriteProduct(), 1000);
//     } else {
//       console.log("You must be signed in to favorite products!");
//     }
//   }
//
//   favoriteProduct() {
//     user.favorites.push(this.name);
//     // changed what this was bound to
//     console.log(`${this.name} favorited!`);
//   }
// }
//
// const product1 = new Product('Toaster', 24.99)
// product1.handleFavoriteProduct()





// JS -> HTML, CSS (DOM - Document Object Model).
// document // the DOM
// document as a tree, and each element in HTML doc is called nodes
// console.log(typeof document);
// console.log(document.body);
// console.log(typeof document.body);
//
// const p = document.createElement('p');
// p.innerText = 'Mad world';
// document.body.append(p);
//
// document.body.style.background = "red";
// p.style.background = "blue";
// p.style.color = "white";
//
// p.addEventListener('click', () => console.log('clicked'))

// const el = document.getElementById('home')
// console.log(el);

// const links = document.querySelectorAll('a');
// // const link = document.querySelector('a');
// // console.log(link);
//
// // links.forEach(link => {
// //   console.log(link);
// // })
// links.forEach(link => {
//   if (link.matches('a[href="/login"]')) {
//     const loginLink = link;
//     console.log(loginLink);
//   }
// })
// const divs = document.getElementsByTagName('div')
// console.log(divs);

// const newPost = document.createElement('div');
// newPost.className = 'top-post';
// newPost.innerHTML = "<strong>This is a new post</strong>"
//
// // document.body.prepend(newPost);
// // document.body.append(newPost);
// const post = document.querySelector('.post');
// post.prepend(newPost);
// const post = document.querySelectorAll('.post');
// console.log(post.style);
// post.style.display = 'flex';
// post.style.margin = '30px';
// any CSS property that we're updating is expressed in camelCase
// post.style.backgroundColor = 'orange'
// each style declaration value provided is as a string;
// console.log(post.className);
// post.classList.remove('post');
// post.classList.add
// add remove;
// post.classList.toggle('post');

// listen for events on a given element provided we have it
// how do we set an event listener on all of them?
// post.addEventListener('click', event => {
//   // click logs MouseEvent to the console ... target
//   // console.log(event.target);
//   console.log('Do you want to edit this post?')
// });

// posts.forEach(post => {
//   post.addEventListener('click,' event => {
//     console.log('Do you want to edit this post?');
//   });
// });
// const post = document.querySelectorAll('.post');
// post.forEach(post => {
//   post.addEventListener('click', event => {
//   //   console.log(event.target);
//     console.log('Do you want to edit this post?')
//   });
// });
// document.body.addEventListener('click', event => {
//   if (!event.target.closest('.post')) return;
//   // how do we get the closest parent element?
//   console.log('Do you want to edit this post?')
// })

// const newPost = document.createElement('div');
// newPost.className = 'top-post';
// newPost.innerHTML = "<strong>This is a new post</strong>"

// document.body.prepend(newPost);
// const post = document.querySelector('.post');
// post.prepend(newPost);





// Challenge: Events, my answers (1)
// const post = document.querySelectorAll('h2');
// post.forEach(post => {
//   post.addEventListener('click', event => {
//     console.log(event.target);
//     // console.log('Do you want to edit this post?')
//   });
// });
// // my answers (2)
// const mouseOver = document.querySelectorAll('body');
// mouseOver.forEach(mouseOver => {
//   mouseOver.addEventListener('mouseover', event => {
//     console.log(event.target);
//     // console.log('Do you want to edit this post?')
//   });
// });

// Challenge: Events, Scrimba's answers (1)
// const title = document.querySelector('h2');
// title.addEventListener('click', event => {
//   console.log(event.target.textContent);
// });
// // Challenge: answers (2)
// document.body.addEventListener('mouseover', event => {
//   console.log(event.target.textContent);
// });




// The Problem with Callbacks
// navigator.geolocation.getCurrentPosition(position => {
//   console.log(position);
//   getRestaurants(position, restaurants => {
//     console.log(restaurants);
//     console.log('done');
//   })
// });

// setTimeout()
// addEventListener()




// Fix Callback Hell with Promises
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject(Error('Your Moms fat')), 1000);
// });
// // When resolve is called the code will execute
// // the function that's passed to the then() method
// // And if reject is called the code will execute
// // the function that's passed to the catch() method
// //
// //
// promise
//   .then(value => console.log(value))
//   .catch(error => console.error(error))
//   .finally(() => console.log('She should lose some wait'));
// navigator.geolocation.getCurrentPosition(position => {
//   console.log(position);
//   })
// });
// always need to be in that order: resolve or reject
// const promise = new Promise((resolve, reject) => {
//   // navigator.geolocation.getCurrentPosition(position => {
//   //   resolve(position);
//   // }, error => {
//   //   reject(error);
//   // });
//   navigator.geolocation.getCurrentPosition(resolve, reject);
// });
// promise
//   .then(position => console.log(position))
//   .catch(error => console.error(error))
//   .finally(() => console.log('done'));




// Make Network Requests with fetch()
// That's what interacting with a rest API is like
// http://jsonplaceholder.typicode.com/posts
// jsonplaceholder.typicode.com

// GET /posts/1 - single blog post
// logs as a Promise
// console.log(fetch('https://jsonplaceholder.typicode.com/posts/1'));
// const blogPost = {
//   title: "Cool post",
//   body: "oastiohaiowthaw",
//   userId: 1
// }

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(blogPost)
// })
  // a method on the response, make sure to call this as a method
// fetch('https://jsonplaceholder.typicode.com/pots/1')
// fetch("https://jsonplaceholder.typicode.com/users/2")
// .then(response => {
//     if (!response.ok) {
//         throw new Error(response.status);
//     }
//     return response.json();
// })
// .then(person => {
//     console.log(`${person.name} works for ${person.company.name}`);
// })
// .catch(err => console.log(err));

// Dead-Simple Promiss with async-await
// const response = fetch('https://jsonplaceholder.typicode.com/posts/1');

// bfore th keyword always a promis
// async function getBlogPost() {
// async function getBlogPost() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('blog post'), 1000);
//   });
//
//   const result = await promise
//   console.log(result);
//   console.log('done');
//     // .then(value => console.log(value))
//     // .finally(() => console.log('done'));
// }
// getBlogPost()
// getBlogPost().then( value  => console.log(value));

// getBlogPost().then( value  => console.log(value));

// getBlogPost().then( () => console.log('works as a promise'));
// const getBlogPost = async () => {}
  // .then(response => response.json())
  // .then(data => console.log(data));

// async function getPost() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//   const data = await response.json();
//   console.log(data);
// };
//
// getPost();


// Catch Errors with async-await
// async function runAsync() {
//   return await Promise.reject(Error('Oops'));
//   // try {
//   //   // await Promise.resolve('hello');
//   //   return await Promise.reject(Error('Fuck'));
//   //   // null.someProperty = true;
//   // }
//   // catch (error) {
//   //   console.error(error);
//   // }
// }
//
// runAsync().catch(error => console.error(error));

// async function getGithubUser() {
//   try {
//     const response = await fetch('https://api.github.com/users/asgibawiotbaistba');
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//   } catch (error) {
//       console.log(error.message);
//       console.error(error);
//   }
//   // await response.json();
// }
// getGithubUser();





// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(blogPost)
// })
// Challenge: Catch Errors with async-await
// async function getUser() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users/3');
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     const person = await response.json();
//     console.log(`${person.name} works for ${person.company.name}`);
//     //     console.log(`${person.name} works for ${person.company.name}`);
//
//   } catch (err) {
//     console.error(err);
//   }
// }
// getUser();


// Essential Concepts
