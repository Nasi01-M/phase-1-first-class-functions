// Function that takes a callback function as an argument and calls it
function receivesAFunction(callback) {
    // Call the provided callback function
    callback();
  }
  
  // Function that returns a named function
  function returnsANamedFunction() {
    // Return a named function
    return function namedFunction() {
      // This function can contain any logic
      console.log("This is a named function.");
    };
  }
  
  // Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function () {
      // This function can contain any logic
      console.log("This is an anonymous function.");
    };
  }
  
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction,
  };
  