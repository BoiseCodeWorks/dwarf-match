#Dwarf Match

---

In this project you will be building an angular controller for a familiar card game with a fantasy twist!

Most of the legwork has already been completed, you don't need to worry about how the cards animate, or 
putting the cards on the screen. all we need to worry about is the game logic and telling the cards when to flip over.

---

Loading up our game as-is will simply display a grid of face down cards. Clicking on them doesn't do anything. __Let's change that!__

1. Let's open up the index.html and take a look
at how our cards are displayed
  * _Hint: check the card class_
2. We have an idea of how to flip the card now,
but we have some groundwork to lay first. Let's open up
game-controller.js and follow the first comment

---

Fancy! Now we've got our cards flipping over, but we've
created two new problems, we can flip over too many at once
and they won't flip back! Let's take care of the former first.

1. Back into game-controller.js we go! Why don't we take a look
at the resetCards function?
2. Now that we have a few new functions to play with, let's start
putting them together. We're going to be working in our selectCard function for
the next part.
  1. After we flip our card let's make an if statement that asks
  if we've assigned anything to our first scoped card variable
  2. if there isn't, let's store our current card there and return
  3. if there is then we should see if our second scoped card variable has anything
  4. if it doesn't, then let's fill it with our currently selected card
  and check to see if our cards are a match, thankfully
  we already wrote a function to test exactly this!
  5. if there's a match we should reset our selected cards
  6. if there's not a match then we need to flip our cards back over and then reset
  our card variables.
  7. Let's test it!
  
---

Uh oh, it looks like it's broken! The first card flips but the second one doesn't unless it's a match!
Or does it? What's actually happening is that the second card is being set back to false before the animation
can even start! That's no good! We need a way to delay the flips.

Our next step is going to use the `$timeout()` function.
Standard syntax for `$timeout()` looks like this:

```javascript
$timeout(function() {
    // someCode
}, delayInMiliseconds);
```

Where `// someCode` is the code you want to execute _after_ `delayInMiliseconds`
For our purposes, `1000` miliseconds should suffice.

Let's wrap up our last bit of code setting the cards.show in a `$timeout()` and give it another test run.

---

Alright! The game is mostly functional, but you may have noticed some ~~bugs~~ _features_, such as being able to flip
our matched cards back over, or being able to flip too many cards at once.

We can fix both of these issues pretty easily, to prevent selecting cards that are already flipped face up
we can simply wrap our code in `selectCard()` inside of an if statement that checks if the card being passed to `selectCard()`
isn't face up. If it isn't, execute our code! If it is, then do nothing!
  * _Hint: Remember that `!` means `is not`_
  
Now that we can't select face up cards, let's fix having too many cards face up at once.

An easy way to fix this is to create some temporary variables inside our `selectCard()` function that store
the current scoped card selections right before our `$timeout()`. Then we move our `resetCards()` outside of `$timeout()` so
it executes immediately. Doing this frees our scoped card selections while letting the `$timeout` flip our cards without needing
to worry about which cards are currently selected on scope.

An example:
```javascript
var myLocalVar = $scope.myScopedVar;
$timeout(function() {
    myLocalVar.property = bool;
}, 1000);
$scope.resetFunction();
```
in the example `resetFunction()` will execute before the code inside of `$timeout()` which is fine because that instance
of myLocalVar can't be altered and will execute regardless of what `myScopedVar` becomes.
  
---

Now the game functions pretty well, but we don't have a win condition. Remember that victory boolean we setup earlier?
Time to put it to use!

Let's dive back into game-controller.js and look at the next set of comments.

Our new `checkVictory()` function would probably work best if called when we have a match. Insert it and let's give the game
a final run!

---

If you run into any problems be sure to check your syntax! Spelling Errors and missing Curly Braces can sneak by even the most astute coder!