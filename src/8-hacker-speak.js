const dictionary = {
  a: 4,
  e: 3,
  i: 1,
  o: 0,
  s: 5,
};

export const hackerSpeak = (str) => {
  return str.replace(/[aeios]/gi, (swap) => dictionary[swap.toLowerCase()]);
};
