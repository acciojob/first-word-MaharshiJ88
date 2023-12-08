function firstWord(str) {
  // your code here
	// Trim leading and trailing whitespaces
  const trimmedStr = str.trim();

  // Check if the trimmed string is empty
  if (trimmedStr === '') {
    return '';
  }

  // Split the string by space and return the first element
  const words = trimmedStr.split(' ');
  return words[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
