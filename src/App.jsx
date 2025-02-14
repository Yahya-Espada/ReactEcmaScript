import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from "react";
import { findLongestWord, countOccurrences, calculateTotalMarks, searchById } from "./EcmaScript/exercises";

function App() {
  // Test data
  const words = ["apple", "banana", "cherry", "date"];
  const input = [
    ["a", "b", "c"],
    ["c", "d", "f"],
    ["d", "f", "g"],
  ];
  const students = [
    { name: "John", id: 123, marks: 98 },
    { name: "Baba", id: 101, marks: 23 },
    { name: "John", id: 200, marks: 45 },
    { name: "Wick", id: 115, marks: 75 },
  ];

  // Call the functions
  const longestWord = findLongestWord(words);
  const occurrences = countOccurrences(input);
  const totalMarks = calculateTotalMarks(students);
  const searchedObject = searchById(2);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>ES6 Functions in React</h1>

      {/* Problem 1: Find the Longest Word */}
      <div>
        <h2>Problem 1: Find the Longest Word</h2>
        <p>
          <strong>Input:</strong> {JSON.stringify(words)}
        </p>
        <p>
          <strong>Output:</strong> {JSON.stringify(longestWord)}
        </p>
      </div>

      {/* Problem 2: Count Occurrences of Distinct Elements */}
      <div>
        <h2>Problem 2: Count Occurrences of Distinct Elements</h2>
        <p>
          <strong>Input:</strong> {JSON.stringify(input)}
        </p>
        <p>
          <strong>Output:</strong> {JSON.stringify(occurrences)}
        </p>
      </div>

      {/* Problem 3: Calculate Total Marks with Bonus */}
      <div>
        <h2>Problem 3: Calculate Total Marks with Bonus</h2>
        <p>
          <strong>Input:</strong> {JSON.stringify(students)}
        </p>
        <p>
          <strong>Output:</strong> {totalMarks}
        </p>
      </div>

      {/* Problem 4: Search by ID */}
      <div>
        <h2>Problem 4: Search by ID</h2>
        <p>
          <strong>Input ID:</strong> 2
        </p>
        <p>
          <strong>Output:</strong> {JSON.stringify(searchedObject)}
        </p>
      </div>
    </div>
  );
}

export default App;