function foo(a, b) {
  if (a === undefined || a === null || b === undefined || b === null) {
    return 0; // Handle undefined and null values
  }
  return a + b; 
}