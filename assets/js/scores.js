function printHighscores() {
    // either get scores from localstorage or set to empty array
    
    // sort highscores by score property in descending order
  
    // loop through scores
      // create li tag for each high score
  
      // display on page
  }
  
  /// FUNCTION TO CLEAR SCORES ///
  function clearHighscores() {
    // remove an item from local storage
   
    // reload the page
    window.location.reload();
  }
  
  /// CLICK EVENT TO RUN THE CLEAR SCORES FUNCTION ///
  document.getElementById('clear').addEventListener("click", clearHighscores)
  // run function when page loads
  printHighscores();