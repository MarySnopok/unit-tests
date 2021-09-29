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


// Haru version 
// export const hackerSpeak = (words) => {
//   return words.split('').map(letter => {
//     switch (letter) {
//       case 'a' : return '4'
//       case 'A' : return '4'
//       case 'e' : return '3'
//       case 'E' : return '3'
//       case 'i' : return '1'
//       case 'I' : return '1'
//       case 'o' : return '0'
//       case 'O' : return '0'
//       case 's' : return '5'
//       case 'S' : return '5'
//       default : return letter
//     }
//   }).join('')
// }