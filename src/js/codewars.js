function spinWords(string) {
  const arr = string.split(' ');
  const res = [];

  arr.map(word => {
    if (word.length >= 5) {
      res.push(word.split('').toReversed().join(''));
    } else {
      res.push(word);
    }
  });
  return res.join(' ');
}

// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test        --> "This is a test"
// "This is another test" --> "This is rehtona test"
console.log(spinWords('Hey fellow warriors'));
