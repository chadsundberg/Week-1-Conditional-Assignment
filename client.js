
function whichIsBigger (x, y) {
if (x > y) {
  return "The first number was bigger!";
} else if (x < y) {
  return "The second number was bigger!";
} else {
  return "The numbers are the same!";
}
};

// I'm absolutely thrilled that I was able to make this work on my second edit.
// First, I had the console.log statements in the function, which was returning
// the correct output, spaced by three undefined statements.  On my second edit,
// I removed all console.log from the function.

console.log(whichIsBigger(3, 2));
console.log(whichIsBigger(2, 7));
console.log(whichIsBigger(7, 7));
