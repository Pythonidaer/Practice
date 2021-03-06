// Note: template literals should work here, so if I want to do a line break.

const newbieQuotes = [
  {
    name:"- Carlos Lazo",
    quote: `"Frustration is part of the game. Learning takes time, and it takes a lot of practice. For me, being consistent about my learning is really important... Do not be hard on yourself."`,
    episode: 'Sample'
  },
  {
    name:"- Brian Douglas",
    quote: `"Protect your Amazon Web Service key."`,
    episode: 'Sample'
  },
  {
    name:"- Felicia O’Garro",
    quote: `"The right resources: newsletters, Hacker News, Reddit…"`,
    episode: 'Sample'
  },
  {
    name:"- Kinsey Ann Durham",
    quote: `"It was going to be really, really hard. Everyone who is passionate about it can do it. It is a lot of hard work, and you’re gonna fail all the time, be uncomfortable all the time... so just keep that in mind."`,
    episode: 'Sample'
  },
  {
    name:"- Marty Haught",
    quote: `"Be curious, and don’t be afraid of trying to learn something complex and difficult. But with that, temper your expectations. Striving to figure something difficult out is totally worth it, and don’t be afraid of that."`,
    episode: 'Sample'
  },
  {
    name:"- Rachel Nabors",
    quote: `"How objects work in JavaScript."`,
    episode: 'Sample'
  },
  {
    name:"- Ciara Burkett",
    quote: `"It gets a little bit worse before it gets better."`,
    episode: 'Sample'
  },
  {
    name:"- William Jeffries",
    quote: `"That it needs to be social, that at least for me coding by myself is not nearly as productive or nearly as fun as coding with someone else."`,
    episode: 'Sample'
  },
  {
    name:"- Poornima Vijayashanker",
    quote: `"You're not going to get everthing right the first time."`,
    episode: 'Sample'
  },
  {
    name:"- Katrina Owen",
    quote: `"Read the error message."`,
    episode: 'Sample'
  },
  {
    name:"- Andrew Nesbitt",
    quote: `"Other people will have the same problems that I do. Initially I thought that I was doing it wrong, I had no idea what I was doing. Now I know that if I am having a problem, there’s gonna be hundreds of people who have run into exactly the same thing as me and, probably one of them’s posted it on the internet now."`,
    episode: 'Sample'
  },
  {
    name:"- Tina Lee",
    quote: `"Just start. Just start doing it with someone you like. Cooking, knitting, painting or anything people do, we’re very social creatures and, the way you stay engaged with something is to have a friend, someone to have it with."`,
    episode: 'Sample'
  },
  {
    name:"- Lauren Orsini",
    quote: `"I wish I had known better places to get help. Today I am really glad to have resources like Github, Stack Overflow and in-person communities too. Coding isn’t about one single answer determined by a computer, but a really vibrant community with lots of solutions to the problems that technology brings."`,
    episode: 'Sample'
  },
  {
    name:"- Noel Rappin",
    quote: `"How much of a development job does not involve coding. How much of a software project involves figuring out: What does a customer want?  How do we give it to them? How do we best give it to them? What do we do when the customer wants to do something that you think is ridiculous? How do we deliver that to them? How do we get them to understand what we’ve done? How do we explain that something took more time than we thought it was going to, without sounding like we’re trying to sell used cars?"`,
    episode: 'Sample'
  },
  {
    name:"- Christopher Webber",
    quote: `"Printing stars out to the screen isn’t what most programmers spend all their day doing."`,
    episode: 'Sample'
  },
  {
    name:"- Jenn Schiffer",
    quote: `"It’s ok to be assertive when you feel like you’re being marginalized... How to better interact with people online, to sort of look further than who’s in the classroom with you."`,
    episode: 'Sample'
  },
  {
    name:"- Scott Hanselman",
    quote: `"I think I should have focused more on algorithms, like, the non-syntax stuff. Thinking about doing sorts, and what order n and order n+1 means, and hash tables and table structures and stuff like that."`,
    episode: 'Sample'
  },
  {
    name: "- Vanessa Hurst",
    quote: `"When I first started to code, I wish that I knew that learning and specifically learning to code is not a temporary or one time activity."`,
    episode: 'Sample'
  },
  {
    name:"- Zed A. Shaw",
    quote: `"Keep practicing my writing... writing is your user interface, that’s how people get to your software and are able to use it, but also I think because there’s a big gap between what people sort of intuitively know and what they can articulate, and so if everyone was better at articulating better topics it might improve things... In my own way, I sort of came into my own as a programmer when I started writing about it a lot. And that’s something I wish, when I started programming, I wish blogs were around when I started programming. I wish that I kept writing."`,
    episode: 'Sample'
  },
  {
    name:"- Joseph Mclarty",
    quote: `"How to reuse things, like coding for better reuse. Like when PHP was coming up, just the fact that you can do like a really simplistic PHP include, that was really cool to me. So you’re telling me I didn’t have to re-write the nav for every single page of the site? I can just write the nav once? It was a joyous occasion."`,
    episode: 'Sample'
  },
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteEpisode = document.querySelector('#quoteEpisode');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener("click", displayQuote);

function displayQuote() {
  let number = Math.floor(Math.random()*newbieQuotes.length);
  // quoteEpisode.innerHTML = newbieQuotes[number].episode;
  quoteAuthor.innerHTML = newbieQuotes[number].name;
  quote.innerHTML = newbieQuotes[number].quote;
}

// quoteBtn.addEventListener('click', displayQuote);

// Let's try to replace the anchor with the h# so that we can center the initial link
// // select the element that will be replaced
// var el = document.querySelector('div');
//
// // <a href="/javascript/manipulation/creating-a-dom-element-51/">create a new element</a> that will take the place of "el"
// var newEl = document.createElement('p');
// newEl.innerHTML = '<b>Hello World!</b>';
//
// // replace el with newEL
// el.parentNode.replaceChild(newEl, el);
