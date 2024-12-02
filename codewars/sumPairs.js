// LINK --> https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript
function sumPairs(ints, s) {
  const seen = new Set(); // Store seen numbers
  for (const num of ints) {
    const complement = s - num; // Find the required complement
    if (seen.has(complement)) {
      return [complement, num]; // Pair found
    }
    seen.add(num); // Add current number to seen set
  }
  return undefined; // No pair found
}
