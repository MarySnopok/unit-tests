export const hashtags = (str) => {
  const changedString = str.split(/[\s\.,:;]/).filter((words) => words.startsWith("#"));
  return changedString;
};

// npm run test -- -t 1-multiplication

// Haru version
// export const hashtags = (text) => {
//   return text.split(' ').filter(word =>  word.charAt(0) === '#' )
// }