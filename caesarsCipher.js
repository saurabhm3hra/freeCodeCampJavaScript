function rot13(str) {
  const alphabets = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

  const unshift13 = (char) => {
    let shiftedIndex = alphabets.indexOf(char);
    let originalIndex = shiftedIndex - 13;
    if (originalIndex < 0) {
      originalIndex = 26 + originalIndex;
    }

    return alphabets[originalIndex];
  };

  return str.split("").map(val => {
    if(alphabets.indexOf(val) === -1) {
      return val;
    }
    return unshift13(val);
  }).join("");
}

rot13("SERR PBQR PNZC");
