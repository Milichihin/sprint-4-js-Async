import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>SPRINT 3. Keyword this & Data Structures</h1>
<div>
Practical tasks. Keyword this & Data StructuresQuiz.
</div>
`;

// SPRINT 3. Keyword this & Data Structures
// Practical tasks. Keyword this & Data Structures

console.log("=======================    Question 1   =======================");

// Implement the getMin(arr) function, which takes an array of numbers
// arr and returns the smallest number of the array. To solve the problem,
// you must use one of the methods to specify the context of this.
// It is forbidden to use any cycles.

function getMin(arr) {
  return Math.min.apply(null, arr);
}

const arr1 = [12, 6, 22, 13, 7];

console.log(getMin([12, 6, 22, 13, 7])); // 6
console.log(getMin(arr1)); // 6
// console.log(getMin(arr1));

console.log("=======================    Question 2   =======================");

// The product() function finds the product of an arbitrary number of arguments.
// You must specify the desired execution context for the product() function by
// implementing a new getProduct() function bound to the context of the object,
// which takes 2 additional arguments.
// The value of the 1st additional parameter is 2,
// the value of the 2nd additional parameter is 3.
// The object in the context of which the product() function is called has 1 property.

const product = function () {
  return [].reduce.call(
    arguments,
    function (res, elem) {
      return res * elem;
    },
    this.product
  );
};

const contextObj = {
  product: 10
};

// product function that is called in the context of an contextObj
// with two additional parameters
const getProduct = product.bind(contextObj, 2, 3);

console.log(getProduct(4, 5));

console.log("=======================    Question 3   =======================");

// Create a Movie class, the constructor of which accepts 3 parameters: movie name name, movie genre category and start year of startShow.
// The class has a watchMovie() method that returns a phrase and adds a movie name name parameter to it at the end. For example, "I watch the movie Titanic!"
// Create an instance of the movie1 class with the title of the movie "Titanic", the genre "drama" and 1997 release.
// Create an instance of the movie2 class with the title of the movie "Troya", the genre "historical" and the 2004 release.

class Movie {
  constructor(parameters) {
    this.name = parameters.name;
    this.category = parameters.category;
    this.startShow = parameters.startShow;
  }
  watchMovie() {
    return `I watch the movie ${this.name}!`;
  }
}

const movie1 = new Movie({
  name: "Titanic",
  category: "drama",
  startShow: "1997"
});

const movie2 = new Movie({
  name: "Troya",
  category: "historical",
  startShow: "2004"
});

console.log(movie1.watchMovie());
console.log(movie2.watchMovie());

console.log("=======================    Question 4   =======================");

// Implement the Student class, the constructor of which accepts 2 parameters fullName - the name and surname of the student, direction - the direction in which he studies.
// Create a showFullName() method that returns the student's first and last name.
// Create a nameIncludes(data) method that, using the showFullName() method, checks for the text data argument in the student’s name and returns true if a match is found or false if not found.
// Create a static studentBuilder() method that returns a new instance of the class named ‘Ihor Kohut’ and the direction ‘qc’.
// Create a getter and setter direction() to read and specify the direction field.
// Create an instance of class stud1 named 'Ivan Petrenko' and direction 'web'.
// Create an instance of class stud2 named 'Sergiy Koval' and direction 'python'.
// Create an instance of the stud3 class named ‘Ihor Kohut’ and the direction ‘qc’ using the static studentBuilder() method.

// Usage example:
// const stud1 = new Student('Ivan Petrenko', 'web');
// stud1.nameIncludes('Ivan');   // true
// stud1.nameIncludes('Denysenko'); // false

class Student {
  static studentBuilder() {
    return new Student("Ihor Kohut", "qc");
  }
  constructor(fullName, direction) {
    this._fullName = fullName;
    this._direction = direction;
  }
  showFullName() {
    return this._fullName;
  }
  nameIncludes(data) {
    return this.showFullName().includes(data);
  }
  get direction() {
    return this._direction;
  }
  set direction(newDirect) {
    this._direction = newDirect;
  }
  get fullName() {
    return this._fullName;
  }
  set fullName(newName) {
    this._fullName = newName;
  }
}

const stud1 = new Student("Ivan Petrenko", "web");
const stud2 = new Student("Sergiy Koval", "python");
const stud3 = Student.studentBuilder();

console.log(stud1);
console.log(stud2);
console.log(stud3);
stud1.nameIncludes("Ivan"); // true
stud1.nameIncludes("Denysenko"); // false
// console.log(stud1.nameIncludes('an')); // true
// console.log(stud1.nameIncludes('Koval')); // false
// console.log(stud1.nameIncludes('pyth')); // false
// console.log(stud1.nameIncludes('Petr')); // true
// console.log(stud2.nameIncludes('al')); // true
// console.log(stud3.nameIncludes('Koh')); // true

console.log(
  stud1.direction,
  ' - is "direction" through a call "get" (stud1.direction)'
);
console.log(
  '(stud1.direction = "red") - is method to re-set "direction" through a call "set"'
);
stud1.direction = "data";
console.log(
  stud1.direction,
  ' - is "direction" after re-set through a call "set" (stud1.direction = "red")'
);

console.log(stud1.fullName);
stud1.fullName = "Nick Broadman";
console.log(stud1.fullName);
console.log(stud1);

console.log("=======================    Question 5   =======================");

// Write a mapCreator(keys, values) function that takes two arrays of equal length.
// Using these arrays, the function must create an object of type Map,
// the keys of which are the values from the first array keys, and the values of Map - the values from the second array values.
// Moreover, the values of the map elements can be only string values.
// The function returns this Map object.

// Usage example:
// const map = mapCreator([1, 2, 3, 4, 5, 6, 7],["Lviv", "Rivne", "Kyiv", "Dnipro", "Kharkiv", "Chernivtsi", "Ivano-Frankivsk"]);
// map.size;  // 7
// map.get(1); // Lviv

// const map2 = mapCreator([1, 2, 3, 4, 5, 6, 7], ["Lviv", 23, "Kyiv", "Dnipro", "Kharkiv", "Chernivtsi", true]);
// map2.size;  // 5
// map2.get(2);  // undefined

function mapCreator(keys, values) {
  let myMap = new Map();
  keys.map((el, i) => {
    return typeof values[i] === "string"
      ? myMap.set(el, values[i])
      : "undefined";
  });
  return myMap;
}

const map = mapCreator(
  [1, 2, 3, 4, 5, 6, 7],
  [
    "Lviv",
    "Rivne",
    "Kyiv",
    "Dnipro",
    "Kharkiv",
    "Chernivtsi",
    "Ivano-Frankivsk"
  ]
);
console.log(map);
console.log(map.size); // 7
console.log(map.get(1)); // Lviv

const map2 = mapCreator(
  [1, 2, 3, 4, 5, 6, 7],
  ["Lviv", 23, "Kyiv", "Dnipro", "Kharkiv", "Chernivtsi", true]
);
console.log(map2);
console.log(map2.size); // 5
console.log(map2.get(2)); // undefined
