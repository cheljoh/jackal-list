# Grudge Bin
​
Yesterday, Steve subjected you to a tour de force of React coupled with a gentle introduction to every other front-end framework on the planet.
​
That's all well and good, but the next step is for you to get some muscle memory. You'll be implementing a simple.
​
## The Rules
​
- You can look at Steve's code for inspiration.
- You can't copy and paste any code. If you borrow from Steve's code, then you must re-type it yourself.
​
## Raw Materials
​
- [React Starter Kit](https://github.com/turingschool-examples/react-starter-kit)
- [Steve's Code from Class](https://github.com/turingschool-examples/react-starter-kit/commit/c164af37c49305bb81a15e4e01cc950e04ded3d4)
​
## Your Mission
​
The only way to truly understand any front-end framework is to build a to-do list. But we're not going to build just any to-do list, we're going to build a list that keeps track of the people who've wronged us.
​
### The Model
​
The model—which can be something simple like the one that Steve used the other day—will need the following:
​
- An `id`
- The name of the person who wrong you
- The offense that caused them to be dead to you
- Whether or not you've forgiven (but not forgotten) them
​
### The Features
​
- Users should be able to add a new person who has wronged them to the list.
- They should be able to include the reason why that person is welcomed to go fly a kite.
- By default, the person is not forgiven.
- The list should show the following data:
  - A count of the total number of people on this list.
  - A count of the number of people who remain unforgiven.
  - A count of the number of people have successfully redeemed themselves.
- There should be a button or other option to forgive the monster.
​
### The Extensions
​
- Can you implement a live search that filters the list automatically?
- Can you implement a date added feature and sort by either the jackal's name or the date of their horrid act?









# React Starter Kit

To install the dependencies:

```
npm install
```

To fire up a development server:

```
npm start
```

Once the server is running, you can visit:

* `http://localhost:8080/webpack-dev-server/` to run your application.
* `http://localhost:8080/webpack-dev-server/test.html` to run your test suite in the browser.

To build the static files:

```js
npm run build
```


To run tests in Node:

```js
npm test
```
require('./reset.css');
  require('./style.scss');
