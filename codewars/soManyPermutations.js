// LINK --> https://www.codewars.com/kata/5254ca2719453dcc0b00027d/javascript
function permutations(string) {
  if (string.length === 1) {
    return [string]; // Base case: a single character or empty string
  }

  const res = new Set(); // Use a Set to avoid duplicate permutations

  for (let i = 0; i < string.length; i++) {
    const char = string[i]; // Extract the current character
    const remainingChars = string.slice(0, i) + string.slice(i + 1); // Remove the current character

    // Recursive call to get permutations of the remaining characters
    const remainingPermutations = permutations(remainingChars);

    // Combine the current character with each permutation of the remaining characters
    for (const perm of remainingPermutations) {
      res.add(char + perm);
    }
  }

  return Array.from(res); // Convert Set to Array before returning
}
