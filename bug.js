function foo(a, b) {
  if (a === null || b === null) {
    return 0; //This will cause an error if a or b are undefined instead of null
  }
  return a + b; 
}