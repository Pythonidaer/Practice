"use strict"; //whenever we can
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
  const temperatures = [69, 82, 73, 64];

  // console.log(temperatures.indexOf(50));
  // conditional statement

// -1 is not a valid index
  function tempIndexBoolean(temp) {
    if (temperatures.indexOf(temp) >= 0) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
// tempIndexBoolean("elepant");
// TypeError: temperatures.tempIndexBoolean isn't a function
// console.log(temperatures.tempIndexBoolean("50"));
// console.log(temperatures.indexOf("red") > -1);
// better array method: includes
// console.log(temperatures.includes(50));

const tempDegrees = [
  {
    degrees: 69,
    isRecordTemp: true
  },
  {
    degrees: 82,
    isRecordTemp: false
  },
  {
    degrees: 73,
    isRecordTemp: true
  },
  {
    degrees: 64,
    isRecordTemp: true
  },
];
// just like a callback function
const result = (tempDegrees.some(tempDegrees => tempDegrees.isRecordTemp)); //returns true or false
console.log(result);
const every = (tempDegrees.every(tempDegrees => tempDegrees.isRecordTemp));
console.log(every);
