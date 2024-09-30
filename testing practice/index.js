// Capitalize function: Takes a string and returns it with the first character capitalized
function capitalize(str) {
    if (!str || typeof str !== 'string') return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Reverse string function: Takes a string and returns it reversed
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Calculator object: Contains functions for basic arithmetic operations
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
        if (b === 0) throw new Error("Cannot divide by zero");
        return a / b;
    }
};

// Helper function to handle character shifting
function shiftChar(char, shift) {
    const charCode = char.charCodeAt(0);
    if (char >= 'a' && char <= 'z') {
        return String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
    }
    if (char >= 'A' && char <= 'Z') {
        return String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
    }
    return char; // Non-alphabetic characters remain unchanged
}

// Caesar cipher function: Shifts each letter by the provided shift factor
function caesarCipher(str, shift) {
    return str.split('').map(char => shiftChar(char, shift)).join('');
}

// AnalyzeArray function: Takes an array of numbers and returns an object with average, min, max, and length
function analyzeArray(arr) {
    const average = arr.reduce((sum, val) => sum + val, 0) / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;
    
    return { average, min, max, length };
}

// Tests

// Capitalize Test
console.log(capitalize("hello")); // Hello

// ReverseString Test
console.log(reverseString("hello")); // olleh

// Calculator Tests
console.log(calculator.add(5, 3)); // 8
console.log(calculator.subtract(10, 5)); // 5
console.log(calculator.multiply(4, 6)); // 24
console.log(calculator.divide(20, 4)); // 5

// Caesar Cipher Tests
console.log(caesarCipher('xyz', 3)); // abc
console.log(caesarCipher('HeLLo', 3)); // KhOOr
console.log(caesarCipher('Hello, World!', 3)); // Khoor, Zruog!

// AnalyzeArray Test
console.log(analyzeArray([1, 8, 3, 4, 2, 6])); 
// { average: 4, min: 1, max: 8, length: 6 }
