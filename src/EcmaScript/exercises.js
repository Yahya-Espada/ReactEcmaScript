// Problem 1: Find the Longest Word
const findLongestWord = (words) => {
  let [wordList] = [words];
  let wordObjects = wordList.map((mot) => ({
    mot: mot,
    longueur: mot.length,
  }));
  let longestWordObject = wordObjects.reduce((prev, current) =>
    prev.longueur > current.longueur ? prev : current
  );
  return longestWordObject;
};

// Problem 2: Count Occurrences of Distinct Elements
const countOccurrences = (input) => {
  const flattenedArray = input.flat();
  const occurrences = flattenedArray.reduce((acc, current) => {
    acc[current] = (acc[current] || 0) + 1;
    return acc;
  }, {});
  return occurrences;
};

// Problem 3: Calculate Total Marks with Bonus
const calculateTotalMarks = (students) => {
  const updatedStudents = students.map((student) => ({
    ...student,
    marks: student.marks < 50 ? student.marks + 15 : student.marks,
  }));
  const filteredStudents = updatedStudents.filter((student) => student.marks > 50);
  const totalMarks = filteredStudents.reduce((acc, student) => acc + student.marks, 0);
  return totalMarks;
};

// Problem 4: Create and Search a Table of Objects
let lastId = 0;
let Tab = [
  { id: ++lastId, name: "Alice", age: 25 },
  { id: ++lastId, name: "Bob", age: 30 },
];
Tab.push({ id: ++lastId, name: "Charlie", age: 35 });
Tab.unshift({ id: ++lastId, name: "David", age: 40 });

const searchById = (id) => {
  return Tab.find((item) => item.id === id);
};

// Export the functions
export { findLongestWord, countOccurrences, calculateTotalMarks, searchById };