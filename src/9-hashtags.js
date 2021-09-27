export const hashtags = (str) => {
  const changedString = str.split(/[\s\.,:;]/).filter((words) => words.startsWith("#"));
  return changedString;
};

// npm run test -- -t 1-multiplication
