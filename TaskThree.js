//  إيجاد الاعداد المتكررة في مصفوفة
function findDuplicates(arr) {
  let noduplicat = [];
  let duplicat = [];

  for (const num of arr) {
    if (!noduplicat.includes(num)) {
      noduplicat.push(num);
    } else {
      if (!duplicat.includes(num)) {
        duplicat.push(num);
      }
    }
  }
  return duplicat;
}

const numbers = [1, 1, 2, 3, 4, 5, 1, 2, 6, 7, 3];
console.log(findDuplicates(numbers));

// حساب الاعداد الاولية في نطاق محدد

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      i = num;
      return false;
    }
  }

  return true;
}

function findPrimesInRange(start, end) {
  const primes = [];

  for (let num = start; num <= end; num++) {
    if (isPrime(num)) {
      primes.push(num);
    }
  }

  return primes;
}

const start = 0;
const end = 50;
console.log(findPrimesInRange(start, end));

// ترتيب الكلمات في جملة حسب الطول
function sortWordsByLength(sentence) {
  const words = sentence.split(" ");
  words.sort((a, b) => a.length - b.length);
  return words.join(" ");
}
const sentence = "Sorting words in a sentence by length";
const sortedSentence = sortWordsByLength(sentence);
console.log(sortedSentence);

// فلترة المصفوفة باستخدام دالة مخصصة

function filterArray(arr, callback) {
  const filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      filteredArray.push(arr[i]);
    }
  }

  return filteredArray;
}

function isEven(num) {
  return num % 2 === 0;
}

const numbersX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterArray(numbersX, isEven);

console.log(evenNumbers);
