function convertToRoman(num) {
 const romanSymbols = {
   1: 'I',
   2: 'II',
   3: 'III',
   4: 'IV',
   5: 'V',
   6: 'VI',
   7: 'VII',
   8: 'VIII',
   9: 'IX',
   10: 'X',
   20: 'XX',
   30: 'XXX',
   40: 'XL',
   50: 'L',
   60: 'LX',
   70: 'LXX',
   80: 'LXXX',
   90: 'XC',
   100: 'C',
   200: 'CC',
   300: 'CCC',
   400: 'CD',
   500: 'D',
   600: 'DC',
   700: 'DCC',
   800: 'DCCC',
   900: 'CM',
   1000: 'M'
 };

 const convert = (num) => { 
   return num.toString().split("").map((val, index, str) => {
     if(str.length - 1 - index === 0) {
       return parseInt(val);
     }

     return parseInt(val) * Math.pow(10, (str.length - 1 - index));
   }).map(val => {
     if(val <= 1000) {
       return romanSymbols[val];
     }
     let numM = val / 1000;
     return "M".repeat(numM);
  }).join('');

 };

 return convert(num);
 
}

console.log(convertToRoman(2014));
