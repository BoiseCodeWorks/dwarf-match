app.controller('GameController', function ($scope, $timeout, GameService) {
	
    // This is a freebie we are using the GameService to help keep our controller clean. The GameServie will be in charge of creating and shuffling the deck.
    $scope.deck = GameService.getDeck();
    
    // Create two card variables on $scope. These will be responsible
    // for keeping track of our selections as we click cards.
    

    
    // Next we need to initate a few more variables on $scope for later use
    // Let's add variables for tracking the number of guesses (pairs flipped),
    // for the total number of correct guesses (pairs matched) and finally a
    // victory boolean to let our controller know if we've won. Refer to the index.html
    // for variable names
    

    
    // Next write a selectCard function on $scope that accepts a card object on click and
    // let's make it set card.show to true (boolean). Give it a test!
    // After you complete this refer back to readme.md
    

    
    // Write a local resetCards function that will empty our card variables
    // and increase the number of attempts
    

	
    // Next write a local isMatch function that accepts our two cards and if the card titles 
    // match, increases our totalMatches and returns true else returns false. After this refer 
    // back to readme.md
	
    
    
    // Finally, write a local checkVictory function that will set $scope.victory = true if the totalMatches 
    // is half the length of the deck. Tip: the game deck array is available at $scope.deck. When you're done
    // refer back to readme.md
    

    
    // Bonus Challenge: Write a function on $scope that can reset the game and add a button that calls it
    
    
    
});