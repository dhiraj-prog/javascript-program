// let marks=[67,89,65,32,98]

// console.log(marks);
// console.log(marks[0])
// console.log(marks[1])
// console.log(marks.length)

// let heros = ["iron man","hulk","super man","spyder man"]

// for(let i = 0;i < heros.length; i++){
//   console.log(heros[i])
//}
// for-of
// for(let i of heros){
//    console.log(i)
// }

// let marks = [86, 78, 45, 32, 67];
// let average = marks.reduce((a, b) => a + b, 0) / marks.length;
// console.log("Average marks:", average);

let originalPrices = [567, 973, 390, 321, 689];
let discountedPrices = originalPrices.map(price => price * 0.9);
console.log(discountedPrices);

