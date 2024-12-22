# React Native `useLayoutEffect` Hook Error: DOM Manipulation

This repository demonstrates a common error encountered when using the `useLayoutEffect` hook in React Native applications. The error arises from attempting to directly manipulate the Document Object Model (DOM), a technique that's not supported in React Native's rendering system.

## Problem

The provided `bug.js` file contains a component that uses `useLayoutEffect` to change the background color of a text element. This approach is incorrect in React Native and results in an error or unexpected behavior.

## Solution

The solution, demonstrated in `bugSolution.js`, involves using React Native's built-in styling mechanisms (e.g., StyleSheet) to control component appearance. Direct DOM manipulation is avoided.