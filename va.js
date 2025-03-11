<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Variables and Data Types</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f5f5f5;
    }

    header {
      background-color: #333;
      color: white;
      padding: 20px;
      text-align: center;
    }

    .container {
      padding: 20px;
      margin: 20px;
    }

    .code-block {
      background-color: #eee;
      padding: 10px;
      margin: 10px 0;
      font-family: monospace;
      border-radius: 4px;
    }
  </style>
</head>
<body>

  <header>
    <h1>JavaScript Variable Types and Data Types</h1>
  </header>

  <div class="container">

    <h2>1. `var` - Function-scoped or globally-scoped variable</h2>
    <div class="code-block">
      <p><strong>Example of `var`:</strong></p>
      <pre>
var name = "Alice";
console.log(name); // Output: Alice
      </pre>
    </div>

    <h2>2. `let` - Block-scoped variable</h2>
    <div class="code-block">
      <p><strong>Example of `let`:</strong></p>
      <pre>
let age = 25;
console.log(age); // Output: 25
      </pre>
    </div>

    <h2>3. `const` - Block-scoped constant</h2>
    <div class="code-block">
      <p><strong>Example of `const`:</strong></p>
      <pre>
const birthYear = 1996;
console.log(birthYear); // Output: 1996
      </pre>
    </div>

    <h2>4. Primitive Data Types</h2>
    <div class="code-block">
      <p><strong>String:</strong> A sequence of characters</p>
      <pre>
let str = "Hello, JavaScript!";
console.log(str); // Output: Hello, JavaScript!
      </pre>

      <p><strong>Number:</strong> Represents both integers and floating point numbers</p>
      <pre>
let num = 123;
let floatNum = 3.14;
console.log(num); // Output: 123
console.log(floatNum); // Output: 3.14
      </pre>

      <p><strong>Boolean:</strong> Represents true or false</p>
      <pre>
let isJavaScriptFun = true;
console.log(isJavaScriptFun); // Output: true
      </pre>

      <p><strong>Null:</strong> Represents the intentional absence of any value</p>
      <pre>
let emptyValue = null;
console.log(emptyValue); // Output: null
      </pre>

      <p><strong>Undefined:</strong> Represents a variable that hasn't been assigned a value</p>
      <pre>
let notAssigned;
console.log(notAssigned); // Output: undefined
      </pre>

      <p><strong>Symbol:</strong> A unique and immutable value, often used as object keys</p>
      <pre>
let uniqueSymbol = Symbol('id');
console.log(uniqueSymbol); // Output: Symbol(id)
      </pre>
    </div>

    <h2>5. Complex Data Types</h2>
    <div class="code-block">
      <p><strong>Object:</strong> A collection of key-value pairs</p>
      <pre>
let person = {
  name: "John",
  age: 30,
  isStudent: false
};
console.log(person); // Output: { name: 'John', age: 30, isStudent: false }
      </pre>

      <p><strong>Array:</strong> An ordered list of values</p>
      <pre>
let numbers = [1, 2, 3, 4, 5];
console.log(numbers); // Output: [1, 2, 3, 4, 5]
      </pre>
    </div>

    <h2>6. Demonstrating Typeof Operator</h2>
    <div class="code-block">
      <p><strong>Using `typeof` to check variable types:</strong></p>
      <pre>
console.log(typeof name); // Output: string
console.log(typeof age); // Output: number
console.log(typeof isJavaScriptFun); // Output: boolean
console.log(typeof person); // Output: object
console.log(typeof numbers); // Output: object
console.log(typeof uniqueSymbol); // Output: symbol
console.log(typeof emptyValue); // Output: object
console.log(typeof notAssigned); // Output: undefined
      </pre>
    </div>

  </div>

  <script>
    // 1. var - Function-scoped or globally-scoped variable
    var name = "Alice";
    console.log(name); // Output: Alice

    // 2. let - Block-scoped variable
    let age = 25;
    console.log(age); // Output: 25

    // 3. const - Block-scoped constant
    const birthYear = 1996;
    console.log(birthYear); // Output: 1996

    // 4. Primitive Data Types
    // String
    let str = "Hello, JavaScript!";
    console.log(str); // Output: Hello, JavaScript!

    // Number
    let num = 123;
    let floatNum = 3.14;
    console.log(num); // Output: 123
    console.log(floatNum); // Output: 3.14

    // Boolean
    let isJavaScriptFun = true;
    console.log(isJavaScriptFun); // Output: true

    // Null
    let emptyValue = null;
    console.log(emptyValue); // Output: null

    // Undefined
    let notAssigned;
    console.log(notAssigned); // Output: undefined

    // Symbol
    let uniqueSymbol = Symbol('id');
    console.log(uniqueSymbol); // Output: Symbol(id)

    // 5. Complex Data Types
    // Object
    let person = {
      name: "John",
      age: 30,
      isStudent: false
    };
    console.log(person); // Output: { name: 'John', age: 30, isStudent: false }

    // Array
    let numbers = [1, 2, 3, 4, 5];
    console.log(numbers); // Output: [1, 2, 3, 4, 5]

    // 6. Demonstrating Typeof Operator
    console.log(typeof name); // Output: string
    console.log(typeof age); // Output: number
    console.log(typeof isJavaScriptFun); // Output: boolean
    console.log(typeof person); // Output: object
    console.log(typeof numbers); // Output: object
    console.log(typeof uniqueSymbol); // Output: symbol
    console.log(typeof emptyValue); // Output: object
    console.log(typeof notAssigned); // Output: undefined
  </script>

</body>
</html>
