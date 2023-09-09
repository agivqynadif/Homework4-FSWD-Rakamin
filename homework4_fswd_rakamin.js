// Membuat array berisi 100 index dengan nilai 1 sampai 50
function randomArray(maxValue) {
  return Math.floor(Math.random() * maxValue) + 1;
}

const myArray = [];

for (let i = 0; i < 100; i++) {
  myArray.push(randomArray(50)); // Menentukan nilai pada array tidak lebih dari 50
}
console.log("------------------------------------------------");
console.log("Berikut array dengan index 100:");
console.log(myArray);

// Memecah array berdasarkan index genap dan index ganjil
const evenArray = [];
const oddArray = [];

for (const [index, element] of myArray.entries()) {
  if (index % 2 == 0) {
    evenArray.push(element);
  } else if (index % 2 == 1) {
    oddArray.push(element);
  }
}
console.log("------------------------------------------------");
console.log("Berikut ini adalah array berdasarkan index genap:");
console.log(evenArray);
console.log("------------------------------------------------");
console.log("Berikut ini adalah array berdasarkan index ganjil:");
console.log(oddArray);
console.log("------------------------------------------------");

// Mencari nilai min index genap
function findEvenMinValue(arrMinValue) {
  let minEven = arrMinValue[0];

  for (let findEven = 1; findEven <= arrMinValue.length; findEven++) {
    if (arrMinValue[findEven] < minEven) {
      minEven = arrMinValue[findEven];
    }
  }
  return minEven;
}

const evenMinValue = findEvenMinValue(evenArray);
console.log(`Nilai min dari array genap: ${evenMinValue}`);

// Mencari nilai max index genap
function findEvenMaxValue(arrMaxValue) {
  let maxEven = arrMaxValue[0];

  for (let findEven = 1; findEven <= arrMaxValue.length; findEven++) {
    if (arrMaxValue[findEven] > maxEven) {
      maxEven = arrMaxValue[findEven];
    }
  }
  return maxEven;
}

const evenMaxValue = findEvenMaxValue(evenArray);
console.log(`Nilai max dari array genap: ${evenMaxValue}`);

// Mencari nilai total dan rata-rata dari index genap
let totalEvenIndex = 0;
for (let findTotal = 0; findTotal < evenArray.length; findTotal++) {
  totalEvenIndex += evenArray[findTotal];
}

let averageEvenIndex = totalEvenIndex / evenArray.length;

console.log(`Total nilai dari array genap: ${totalEvenIndex}`);
console.log(`Rata-rata nilai dari array genap: ${averageEvenIndex}`);
console.log("------------------------------------------------");

// Mencari nilai min index ganjil
function findOddMinValue(arrMinValue) {
  let minOdd = arrMinValue[0];

  for (let findOdd = 1; findOdd <= arrMinValue.length; findOdd++) {
    if (arrMinValue[findOdd] < minOdd) {
      minOdd = arrMinValue[findOdd];
    }
  }
  return minOdd;
}

const oddMinValue = findOddMinValue(oddArray);
console.log(`Nilai min dari array ganjil: ${oddMinValue}`);

// Mencari nilai max index genap
function findOddMaxValue(arrMaxValue) {
  let maxOdd = arrMaxValue[0];

  for (let findOdd = 1; findOdd <= arrMaxValue.length; findOdd++) {
    if (arrMaxValue[findOdd] > maxOdd) {
      maxOdd = arrMaxValue[findOdd];
    }
  }
  return maxOdd;
}

const oddMaxValue = findEvenMaxValue(oddArray);
console.log(`Nilai max dari array ganjil: ${oddMaxValue}`);

// Mencari nilai total dan rata-rata dari index genap
let totalOddIndex = 0;
for (let findTotal = 0; findTotal < oddArray.length; findTotal++) {
  totalOddIndex += oddArray[findTotal];
}

let averageOddIndex = totalOddIndex / oddArray.length;

console.log(`Total nilai dari array ganjil: ${totalOddIndex}`);
console.log(`Rata-rata nilai dari array ganjil: ${averageOddIndex}`);
console.log("------------------------------------------------");

// Perbandingan nilai min
if (evenMinValue > oddMinValue) {
  console.log(`Perbandingan nilai min: min array genap (${evenMinValue}) lebih besar dari min array ganjil (${oddMinValue})`);
} else if (evenMinValue < oddMinValue) {
  console.log(`Perbandingan nilai min: min array ganjil (${oddMinValue}) lebih besar dari min array genap (${evenMinValue})`);
} else {
  console.log(`Perbandingan nilai min: kedua array memiliki nilai min yang sama yaitu ${evenMinValue}`);
}

// Perbandingan nilai max
if (evenMaxValue > oddMaxValue) {
  console.log(`Perbandingan nilai max: max array genap (${evenMaxValue}) lebih besar dari max array ganjil (${oddMaxValue})`);
} else if (evenMaxValue < oddMaxValue) {
  console.log(`Perbandingan nilai max: max array ganjil (${oddMaxValue}) lebih besar dari max array genap (${evenMaxValue})`);
} else {
  console.log(`Perbandingan nilai max: kedua array memiliki nilai max yang sama yaitu ${evenMaxValue}`);
}

// Perbandingan nilai total
if (totalEvenIndex > totalOddIndex) {
  console.log(`Perbandingan nilai total: total array genap (${totalEvenIndex}) lebih besar dari total array ganjil (${totalOddIndex})`);
} else if (totalEvenIndex < totalOddIndex) {
  console.log(`Perbandingan nilai total: total array ganjil (${totalOddIndex}) lebih besar dari total array genap (${totalEvenIndex})`);
} else {
  console.log(`Perbandingan nilai total: kedua array memiliki nilai total yang sama yaitu ${totalEvenIndex}`);
}

// Perbandingan nilai rata-rata
if (averageEvenIndex > averageOddIndex) {
  console.log(`Perbandingan nilai rata-rata: rata-rata array genap (${averageEvenIndex}) lebih besar dari rata-rata array ganjil (${averageOddIndex})`);
} else if (averageEvenIndex < averageOddIndex) {
  console.log(`Perbandingan nilai rata-rata: rata-rata array ganjil (${averageOddIndex}) lebih besar dari rata-rata array genap (${averageEvenIndex})`);
} else {
  console.log(`Perbandingan nilai rata-rata: kedua array memiliki nilai rata-rata yang sama yaitu ${averageEvenIndex}`);
}

console.log("------------------------------------------------");
